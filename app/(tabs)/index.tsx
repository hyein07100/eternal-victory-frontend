import { PageContainer } from "@components/PageContainer";
import { Button } from "@components/buttons/Button";
import { useRouter } from "expo-router";
import { GameResultCard } from "@components/GameResult/GameResultCard";
import { FlatList } from "react-native";
import { Title } from "@components/Typography";

const games = [
  {
    date: "24.03.28",
    location: "잠실야구장",
    result: "W" as const,
    homeTeam: "Doosan" as const,
    awayTeam: "LG" as const,
    homeScore: 5,
    awayScore: 1,
  },
  {
    date: "24.03.29",
    location: "고척스카이돔",
    result: "L" as const,
    homeTeam: "KIA" as const,
    awayTeam: "SSG" as const,
    homeScore: 2,
    awayScore: 6,
  },
  {
    date: "25.03.25",
    location: "삼성라이온즈파크",
    result: "T" as const,
    homeTeam: "Samsung" as const,
    awayTeam: "Kiwoom" as const,
    homeScore: 2,
    awayScore: 6,
  },
 
];

export default function Home() {
  const router = useRouter();

  return (
    <PageContainer>
      <Button variant="big" icon onPress={() => router.push("/login")}>
        직관 일기 작성하기
      </Button>

       <Title style={{ alignSelf: "flex-start", marginLeft:24, marginTop: 16, marginBottom: 8 }}>
        직관 리스트
      </Title>

      <FlatList
        data={games}
        keyExtractor={(item, idx) => `${item.date}-${idx}`}
        renderItem={({ item }) => (
          <GameResultCard
            {...item}
            onEdit={() => console.log(item.date, "수정")}
            onDelete={() => console.log(item.date, "삭제")}
          />
        )}
        contentContainerStyle={{ paddingTop: 12 }}
      />
    </PageContainer>
  );
}
