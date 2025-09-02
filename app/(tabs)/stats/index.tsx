import { PageContainer } from "@components/PageContainer";
import { Title } from "@components/Typography";
import { ProfileCard } from "@components/Stats/ProfileCard";

export default function StatsScreen() {
  return (
    <PageContainer>
      <Title>통계</Title>
      <ProfileCard
  avatar={require("@assets/profile.jpg")}
  nickname="최강두산"
/>
    </PageContainer>
  );
}