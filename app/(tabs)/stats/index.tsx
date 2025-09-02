import { PageContainer } from "@components/PageContainer";
import { Title } from "@components/Typography";
import { ProfileCard } from "@components/Stats/ProfileCard";
import { WinRateCard } from "@components/Stats/WinRateCard";

export default function StatsScreen() {
  return (
    <PageContainer>
      <Title>통계</Title>
      <ProfileCard
        profile={require("@assets/profile.jpg")}
        nickname="최강두산"
      />
      <WinRateCard wins={4} losses={2} ties={8}/>
    </PageContainer>
  );
}