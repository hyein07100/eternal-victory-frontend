import { Row } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@theme";

import { ScrollPageContainer } from "@components/PageContainer";
import { ProfileCard } from "@components/Stats/ProfileCard";
import { WinRateCard } from "@components/Stats/WinRateCard";
import { StatCard } from "@components/Stats/StatsCard";
import { SummaryCard } from "@components/Stats/SummaryCard";

export default function StatsScreen() {
  return (
    <ScrollPageContainer>
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

      <Row>
      <SummaryCard
        icon={<Ionicons name="calendar" size={20} color={theme.colors.primary} />}
        label="총 관람 경기"
        value={20}
      />
      <SummaryCard
        icon={<Ionicons name="trophy" size={20} color={theme.colors.primary} />}
        label="연속 승리"
        value={6}
      />
    </Row>
    </ScrollPageContainer>
  );
}
