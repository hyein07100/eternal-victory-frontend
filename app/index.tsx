import { PageContainer } from "../src/components/PageContainer";
import { Button } from "../src/components/buttons/Button";

export default function Home() {
  return (
    <PageContainer>
      <Button variant="big" icon>직관 일기 작성하기</Button>
      <Button variant="big" icon white>직관 일기 작성하기</Button>
      <Button variant="small">작성</Button>
      <Button variant="small" white>작성</Button>
    </PageContainer>
  );
}

