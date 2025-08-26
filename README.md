# ⚾ Eternal Victory - 야구 직관 다이어리

> **기적의 순간을. 기록으로 남기다.**  
> 내가 다녀온 야구 직관을 날짜, 사진, 감상과 함께 저장하는 웹 기반 다이어리 서비스입니다.

---

## 🛠 기술 스택

| 영역       | 사용 기술                                      |
|------------|-----------------------------------------------|
| Frontend   | [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/) |
| Backend    | [Spring](https://spring.io/) Framework         |
| Deployment | Vercel (Frontend) / Railway (Backend)  |

---

## 📌 주요 기능

### 📝 일기 작성
- 날짜, 장소(구장), 우리팀/상대팀 입력
- 선발투수 및 특이사항 작성
- 자유로운 감상 기록 (Today's Note)
- 사진 업로드 

### 📋 직관 리스트
- 내가 작성한 경기 일지 목록 확인
- 각 경기의 날짜, 팀, 점수, 승패 여부 요약

### 🔍 상세 보기
- 경기별 점수, 주요 선수 정보, 메모, 사진 보기
- 수정 기능 제공

---

## 🖼 화면 구성

| 페이지 이름     | 설명                                               |
|----------------|----------------------------------------------------|
| Landing        | 서비스 소개 및 카카오 로그인 시작 버튼               |
| Main           | 다이어리 작성 버튼 + 내가 쓴 일기 리스트 표시        |
| Detail         | 특정 경기의 상세 정보 (스코어, 메모, 사진 등) 확인   |
| Write          | 날짜/장소/선수/노트/사진 첨부 후 기록 저장하는 폼    |

---

## 🚀 로컬 실행 방법 (예정)

### 1. 프론트엔드 실행
```bash
git clone https://github.com/your-username/eternal-victory.git
cd frontend
npm install
npm run dev
