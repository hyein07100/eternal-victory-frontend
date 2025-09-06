import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { ScrollPageContainer } from "@components/PageContainer";
import { Title, SmallTitle, BtnSmall } from "@components/Typography";
import * as S from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "@theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { STADIUMS } from "@constants/stadium";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import { createFormData, YafuItem } from "@utils/formData";
import { UploadButton } from "@components/Write/UploadButton";
import { ImagePreview } from "@components/Write/ImagePreview";

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function WriteScreen() {
  const [yafuList, setYafuList] = useState<YafuItem[]>([]);
  const [noteImages, setNoteImages] = useState<string[]>([]);
  const [date, setDate] = useState<Date | null>(null);
  const [location, setLocation] = useState<string>("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handlePickNoteImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setNoteImages((prev) => [...prev, ...uris]);
    }
  };

  const handleRemoveNoteImage = (uri: string) => {
    setNoteImages((prev) => prev.filter((img) => img !== uri));
  };

  const handleAddYafu = () => {
    setYafuList((prev) => [...prev, { id: Date.now(), text: "", images: [] }]);
  };

  const handleRemoveYafu = (id: number) => {
    setYafuList((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePickYafuImages = async (yafuId: number) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setYafuList((prev) =>
        prev.map((item) =>
          item.id === yafuId
            ? { ...item, images: [...item.images, ...uris] }
            : item
        )
      );
    }
  };

  const handleRemoveYafuImage = (yafuId: number, uri: string) => {
    setYafuList((prev) =>
      prev.map((item) =>
        item.id === yafuId
          ? { ...item, images: item.images.filter((img) => img !== uri) }
          : item
      )
    );
  };

  const handleConfirmDate = (selectedDate: Date) => {
    setDate(selectedDate);
    setDatePickerVisibility(false);
  };

  const handleSave = () => {
    const otherPayload = {
      date: date ? formatDate(date) : null,
      location,
    };

    const formData = createFormData(noteImages, yafuList, otherPayload);

    console.log("FormData 준비됨:", formData);
  };

  return (
    <ScrollPageContainer>
      <S.Container>
        <SmallTitle>경기 정보</SmallTitle>
        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
          <S.InputWrapper>
            <S.InputField
              value={date ? formatDate(date) : ""}
              placeholder="날짜"
              editable={false}
              pointerEvents="none"
            />
            <Ionicons
              name="calendar-outline"
              size={20}
              color={theme.colors.gray}
            />
          </S.InputWrapper>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          locale="ko-KR"
          themeVariant="light"
          date={date || new Date()}
          onConfirm={handleConfirmDate}
          onCancel={() => setDatePickerVisibility(false)}
        />
        <Dropdown
          style={S.dropdown}
          placeholderStyle={S.placeholderStyle}
          selectedTextStyle={S.selectedTextStyle}
          data={STADIUMS.map((s) => ({ label: s, value: s }))}
          labelField="label"
          valueField="value"
          placeholder="구장 선택"
          value={location}
          onChange={(item) => setLocation(item.value)}
        />

        <S.Input placeholder="좌석 정보" />

        <SmallTitle style={{marginTop:6}}>득점</SmallTitle>
        <S.Row>
          <S.Input style={{ flex: 1, marginRight: 8 }} placeholder="우리팀" />
          <S.Input style={{ flex: 1 }} placeholder="상대팀" />
        </S.Row>

        <SmallTitle>관람 후기</SmallTitle>
        <S.Input
          placeholder="후기"
          multiline
          style={{ height: 100, textAlignVertical: "top" }}
        />

        <S.UploadScrollRow horizontal showsHorizontalScrollIndicator={false}>
          {noteImages.map((uri) => (
            <ImagePreview
              key={uri}
              uri={uri}
              onRemove={() => handleRemoveNoteImage(uri)}
            />
          ))}
          <UploadButton
            onPress={handlePickNoteImages}
            isSmall={noteImages.length > 0}
          />
        </S.UploadScrollRow>

        {yafuList.length === 0 ? (
          <S.Button onPress={handleAddYafu}>
            <BtnSmall>+ 오늘의 야구푸드</BtnSmall>
          </S.Button>
        ) : (
          <View style={{ width: "100%" }}>
            <SmallTitle style={{marginTop:6}}>야구 푸드</SmallTitle>
            {yafuList.map((yafu) => (
              <S.YafuBox key={yafu.id}>
                <View style={{ flexDirection: "row",  }}>
                  <S.Input
                    style={{ flex: 1, marginRight: 8 }}
                    placeholder="오늘 먹은 야구푸드"
                  />
                  <TouchableOpacity onPress={() => handleRemoveYafu(yafu.id)}>
                    <Ionicons
                      name="close"
                      size={20}
                      color={theme.colors.gray}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  {yafu.images.map((uri) => (
                    <ImagePreview
                      key={uri}
                      uri={uri}
                      onRemove={() => handleRemoveYafuImage(yafu.id, uri)}
                    />
                  ))}

                  <UploadButton
                    text={
                      yafu.images.length === 0 ? "야푸 사진 업로드" : undefined
                    }
                    onPress={() => handlePickYafuImages(yafu.id)}
                    isSmall={yafu.images.length > 0}
                  />
                </View>
              </S.YafuBox>
            ))}

            <S.Button onPress={handleAddYafu}>
              <BtnSmall>야구푸드 추가</BtnSmall>
            </S.Button>
          </View>
        )}

        <S.SaveButton onPress={handleSave}>
          <BtnSmall style={{ color: "white" }}>기록 저장하기</BtnSmall>
        </S.SaveButton>
      </S.Container>
    </ScrollPageContainer>
  );
}
