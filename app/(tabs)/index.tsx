import { PageContainer } from "../../src/components/PageContainer";
import { Button } from "../../src/components/buttons/Button";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <PageContainer>
      <Button
        variant="big"
        icon
        onPress={() => router.push("/login")}
      >
        직관 일기 작성하기
      </Button>
    </PageContainer>
  );
}
