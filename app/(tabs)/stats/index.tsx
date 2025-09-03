import { PageContainer } from "@components/PageContainer";
import { Title } from "@components/Typography";
import { ProfileCard } from "@components/Stats/ProfileCard";
import { WinRateCard } from "@components/Stats/WinRateCard";
import { StatCard } from "@components/Stats/StatsCard";

export default function StatsScreen() {
  return (
    <PageContainer>
      <ProfileCard
        profile={require("@assets/profile.jpg")}
        nickname="최강두산"
      />
      <WinRateCard wins={4} losses={2} ties={8}/>
      <StatCard 
        label="가장 많이 방문한 야구장" 
        value="잠실야구장" 
        count={12} 
        unit="회" 
        max={20} 
      />

      <StatCard 
        label="가장 많이 본 선발투수" 
        value="니퍼트" 
        count={3} 
        unit="경기" 
        max={10} 
      />
    </PageContainer>
  );
}