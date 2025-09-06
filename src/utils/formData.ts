export type YafuItem = {
  id: number;
  text: string;
  images: string[];
};

export const createFormData = (
  noteImages: string[],
  yafuList: YafuItem[],
  otherPayload: Record<string, any> = {}
) => {
  const formData = new FormData();

  noteImages.forEach((uri, index) => {
    formData.append("noteImages[]", {
      uri,
      name: `note_${index}.jpg`,
      type: "image/jpeg",
    } as any);
  });

  yafuList.forEach((yafu, yIndex) => {
    formData.append("yafuTexts[]", yafu.text);
    yafu.images.forEach((uri, iIndex) => {
      formData.append("yafuImages[]", {
        uri,
        name: `yafu_${yIndex}_${iIndex}.jpg`,
        type: "image/jpeg",
      } as any);
    });
  });

  Object.entries(otherPayload).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      formData.append(key, String(value));
    }
  });

  return formData;
};
