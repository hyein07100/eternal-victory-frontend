import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SmallTitle, Score } from "@components/Typography";
import Kebab from "@assets/kebab.svg";
import * as S from "./GameResultCard.style";

import { WIcon, LIcon, TIcon } from "@assets/result/index";

import {
  Doosan,
  LG,
  KIA,
  Hanwha,
  NC,
  KT,
  Samsung,
  Lotte,
  SSG,
  Kiwoom,
} from "@assets/teams/index";

const TEAM_LOGOS: Record<string, React.FC<any>> = {
  Doosan: Doosan,
  LG: LG,
  KIA: KIA,
  Hanwha: Hanwha,
  NC: NC,
  KT: KT,
  Samsung: Samsung,
  Lotte: Lotte,
  SSG: SSG,
  Kiwoom: Kiwoom,
};

const RESULT_ICONS: Record<"W" | "L" | "T", React.FC<any>> = {
  W: WIcon,
  L: LIcon,
  T: TIcon,
};

type GameResultCardProps = {
  date: string;
  location: string;
  result: "W" | "L" | "T";
  awayTeam: keyof typeof TEAM_LOGOS;
  homeTeam: keyof typeof TEAM_LOGOS;
  homeScore: number;
  awayScore: number;
  onEdit?: () => void;
  onDelete?: () => void;
};

export const GameResultCard = ({
  date,
  location,
  result,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  onEdit,
  onDelete,
}: GameResultCardProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const HomeLogo = TEAM_LOGOS[homeTeam];
  const AwayLogo = TEAM_LOGOS[awayTeam];
  const ResultIcon = RESULT_ICONS[result];

  return (
    <S.CardContainer>
      <S.KebabIconArea>
        <TouchableOpacity onPress={() => setShowMenu((p) => !p)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Kebab width={20} height={20} />
        </TouchableOpacity>
      </S.KebabIconArea>
      <S.TopRow>
      <S.Left>
        <ResultIcon width={42} height={42} />
        <S.LeftTexts>
          <S.GameDate>{date}</S.GameDate>
          <S.GameLocation>{location}</S.GameLocation>
        </S.LeftTexts>
      </S.Left>
      </S.TopRow>

      <S.MiddleRow>
        <S.Team><AwayLogo width={48} height={48} /></S.Team>
        <S.ScoreRow>
          <Score>{awayScore}</Score>
          <S.VsText>vs</S.VsText>
          <Score>{homeScore}</Score>
        </S.ScoreRow>
        <S.Team><HomeLogo width={48} height={48} /></S.Team>
      </S.MiddleRow>

      {showMenu && (
        <S.Menu>
          <S.MenuButton onPress={onEdit}><SmallTitle>수정</SmallTitle></S.MenuButton>
          <S.MenuButton onPress={onDelete}><SmallTitle>삭제</SmallTitle></S.MenuButton>
        </S.Menu>
      )}
    </S.CardContainer>
  );
};
