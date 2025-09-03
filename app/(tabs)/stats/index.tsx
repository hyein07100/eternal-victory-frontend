import { Row } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@theme";

import { ScrollPageContainer } from "@components/PageContainer";
import { ProfileCard } from "@components/Stats/ProfileCard";
import { WinRateCard } from "@components/Stats/WinRateCard";
import { StatCard } from "@components/Stats/StatsCard";
import { SummaryCard } from "@components/Stats/SummaryCard";
import { MonthlyAttendanceCard } from "@components/Stats/MonthlyAttendanceCard";

export default function StatsScreen() {
  const totalGames = 20; 

  return (
    <ScrollPageContainer>
      <ProfileCard
        profile={require("@assets/profile.jpg")}
        nickname="최강두산"
      />

      <WinRateCard wins={14} losses={5} ties={1} />

      <StatCard 
        label="가장 많이 방문한 야구장" 
        value="잠실야구장" 
        count={12} 
        unit="회" 
        max={totalGames}   
      />

      <StatCard 
        label="가장 많이 본 선발투수" 
        value="니퍼트" 
        count={3} 
        unit="경기" 
        max={totalGames}   
      />

      <Row>
        <SummaryCard
          icon={<Ionicons name="calendar" size={20} color={theme.colors.primary} />}
          label="총 관람 경기"
          value={totalGames}  
        />
        <SummaryCard
          icon={<Ionicons name="trophy" size={20} color={theme.colors.primary} />}
          label="연속 승리"
          value={6}
        />
      </Row>

      <MonthlyAttendanceCard
        data={[
          { month: "5월", count: 6 },
          { month: "6월", count: 8 },
          { month: "7월", count: 6 },
        ]}
        max={totalGames}  
      />
    </ScrollPageContainer>
  );
}
