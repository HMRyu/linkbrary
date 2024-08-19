# Linkbrary

![favicon](https://github.com/user-attachments/assets/1888ec45-30c6-4a00-9b94-217ebadc4fb8)

배포 주소  : https://linkbrary-eta.vercel.app/

<br />

## Introduction

원하는 링크를 쉽게 저장하고 공유할 수 있는 플랫폼 입니다.

<br />

## Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

<br />

## Key Features

### 링크 저장 

https://github.com/user-attachments/assets/c8eea3df-c79a-465c-aec3-d71d477a7051

### 파일 추가

https://github.com/user-attachments/assets/5fe02d68-ea10-4b01-9e9a-8bb3684b1ee0

### 파일 이동

https://github.com/user-attachments/assets/bfa50d4f-84b4-450e-8571-4815449592ec

### 파일 공유 

https://github.com/user-attachments/assets/3a377d5f-7853-485f-a43f-92fb0de0e6a4

### 링크 삭제 

https://github.com/user-attachments/assets/850f68f5-d61a-49d3-949c-3bb4c6b24af2

### 파일 삭제 

https://github.com/user-attachments/assets/72e6fc62-0b7a-4135-9909-f48f9fe2c75b

### 링크 검색 

https://github.com/user-attachments/assets/3665d54b-2357-4777-b890-88ef2df45b81

### 다크모드
https://github.com/user-attachments/assets/aede31f8-c7e3-4865-8cf1-85e6d0d0c06e

<br />

## Key Learnings

<details>
<summary>app router 를 쓴 이유</summary>
<br>
원래 시안에서는 Next.js 의 Pages router 를 이용하고, data fetching 시 react-query 를 사용하라고 했었다.

내가 생각하기에 서버 컴포넌트를 활용하는 것이 더 효율적이라고 생각하여 app router 로 변경하여 프로젝트를 진행하였다.

다음은 app router 를 쓴 이유들이다.

## Data Fetching

서버 컴포넌트를 통해서 효과적인 Data fetching 을 하기 위해 next.js 의 app router 를 사용했다.

app router 는 page router 와는 다르게 기본적으로 모든 컴포넌트가 서버 컴포넌트이다.

서버 컴포넌트는 서버에서 직접 렌더링 되기 때문에 브라우저에서 request 전송 시 이미 데이터가 포함된 HTML 이 작성되어 있다. 따라서 초기 로딩 시간을 매우 줄여줄 수 있기 때문에 유저는 완성된 HTML 을 바로 볼 수 있고 UX 향상에도 도움이 될 것이라고 판단하여 app router 를 도입하게 되었다.

## vs getServerSideProps

그럼 pages router 를 사용하면서 부분적으로 서버 사이드 렌더링을 사용할 수 있는 함수를 사용하면 되지 않냐는 궁금증이 있을 수 있다.

1. 코드의 간소화

getServerSideProps 는 특정 페이지에서 서버사이드 렌더링을 위해 필요한 함수이다. 그렇다고 한다면, 서버 사이드 렌더링이 필요한 부분에 계속 이 함수를 작성해야 하는데, 이렇게 되면 코드의 양이 길어질 수 있다.

2. 렌더링 프로세스

getServerSideProps 는 서버에서 데이터를 가져온 후 props 로 클라이언트 컴포넌트에 전달하는 방식이다. 반면, 서버 컴포넌트는 서버에서 데이터를 가져와 이미 HTML 을 렌더링 해 놓기 때문에 더 효율적으로 렌더링이 가능하다.

3. 캐싱

서버 컴포넌트는 자동으로 캐싱을 수행할 수 있는 반면, getServerSideProps 는 수동으로 캐싱을 해줘야 한다. 따라서 1번의 이유와 연결된다. 코드를 더욱 간소화 시킬 수 있다.

이러한 이유들로 app router 를 채택하였다.

<br />

</details>

<details>
<summary>tailwind css + shadcn ui 를 쓴 이유</summary>
<br>

## tailwind 의 장점

### 별도의 CSS 파일이 필요 없음

tailwind 는 다른 css 와는 달리, 따로 css 파일을 생성하지 않아도 된다는 점이 장점이다. className 에 바로 스타일링을 할 수 있기 때문에 스타일링 속도가 향상된다.

### 사전 정의된 유틸리티 클래스

사전에 정의된 유틸리티 클래스를 이용하여 일관된 스타일링을 할 수 있다는 점이 장점이다.

### 런타임이 아닌 빌드 타임에 실행

런타임에 실행되지 않아, 사용자가 서비스를 실행할 때 스타일을 동적으로 적용하지 않는다. 빌드 시점에 미리 스타일이 적용되기 때문에 서비스가 빠르게 로드되며 성능 면에서 장점이 존재한다.

### vs Styled Component

### CSS-in-JS

런타임에 스타일을 생성하기 때문에 초기 로드 속도가 느릴 수 있다는 단점이 존재한다. 또한, JS 코드에 스타일링을 입력해야 하기 때문에 보기에 따라 코드가 복잡해 보일 수 있다는 단점이 존재한다.

### vs Module CSS

### 별도의 CSS 파일 필요

각 컴포넌트마다 별도의 css 파일이 필요하기 때문에 스타일링 속도가 느려질 수 있다는 단점이 존재한다.

### 일관성 문제

tailwind 는 미리 정의된 유틸리티 클래스를 이용하여 스타일을 하기 때문에 일관적인 스타일을 하기 쉬운 반면, module css 는 컴포넌트마다 다른 스타일이 적용될 수 있기 때문에 일관성을 유지하기 어려울 수 있다.

<br />

</details>

<details>
<summary>zustand 를 쓴 이유</summary>
<br>

## Zustand 를 사용한 이유

어떤 상태관리 라이브러리를 사용할 지 고민했다. 그래서 많이 쓰이고 있는 상태관리 라이브러리에 대해 조사해 보았다.

### Redux

Redux는 Redux Thunk, Redux Saga 등 다른 추가적인 라이브러리들이 많이 존재하였고 Devtools 도 존재하여 디버깅이 쉽다는 장점이 있었다.

하지만 설정이 복잡하였고, 보일러플레이트가 긴 단점이 존재하였다.

### Redux Toolkit

Redux Toolkit 은 Redux 의 간소화 버전으로 긴 보일러플레이트를 짧게 줄인 라이브러리이다. 다만, 이렇게 줄인 코드로도 복잡성을 가지고 있기 때문에 같은 이유로 사용에서 배제하게 되었다.

### Jotai

Jotai 는 위의 복잡한 보일러플레이트와는 다르게 간편하게 사용할 수 있다는 장점이 있었다. 다만, 다른 라이브러리와는 다른 Atom 패턴을 사용하기 때문에 패턴에 대해 이해하려면 어느 정도의 시간이 필요했다.

### Recoil

Recoil 은 React 에서 만든 상태관리 라이브러리이다. 다만, FLUX 패턴이 아닌 Atomic 패턴을 사용하기에 패턴에 대해 이해하는 시간이 필요했다. 또한 Zustand 에 비해 용량이 큰 단점이 존재하였다.

### Zustand

Zustand 는 가볍고, 보일러플레이트가 거의 필요하지 않았다. 단순하고 직관적이어서 이해하기 편리하였다. Devtools 가 없다는 것이 단점이었지만, 간단한 코드로 디버깅 하기에는 무리가 없다는 판단이 들어서 Zustand 를 이용하여 모달을 관리하기로 결정하였다.

 

- 소스 코드
    
    ```tsx
    import { create } from 'zustand';
    
    import { ModalStore } from '../types/modal/modal-type';
    
    const useModal = create<ModalStore>((set) => ({
      type: null,
      data: {},
      isOpen: false,
      onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
      onClose: () => set({ type: null, isOpen: false }),
    }));
    
    export default useModal;
    
    ```
    

확실히 직관적인 코드여서 사용하는데 큰 어려움이 없었다.

이 모달 코드를 잘 작성해 놓아서 다른 프로젝트에서도 사용하였다. 관리가 너무 편리하여 다른 방법을 알기 전까지는 이 모달 코드로 계속 사용할 것 같다.

<br />

</details>


<details>
<summary>axios 대신 fetch 를 사용한 이유</summary>
<br>
 
### axios 를 포기한 이유

### 성능

https://github.com/user-attachments/assets/1df66e75-3c78-4acc-902a-d95593e6a9a7

https://github.com/user-attachments/assets/5fe02d68-ea10-4b01-9e9a-8bb3684b1ee0

원래는 interceptor 를 사용하는 경우 코드가 간단해지기 때문에 axios 를 사용했었다.

axios 를 사용하여 배포까지 진행하였고, 주변 사람들에게 피드백을 요청하였다.

그 중 공통적으로 나오는 피드백이 api 요청 시 속도가 조금 느린 것 같다는 피드백을 받았다.

피드백을 듣고 가장 먼저 든 생각은 axios 때문인가? 라는 생각이 가장 먼저 들었다.

생각해보니 axios 는 클라이언트에서 데이터 요청을 보내는 데 최적화되어있는 라이브러리이다.

그런데 억지로 서버 컴포넌트에서 axios 를 사용하니 성능적으로 문제가 생길 수 있다는 생각을 했다.

따라서 모든 api 요청을 서버 액션으로 변경하였고, 그에 맞게 fetch 를 사용하였다.

밑의 server action 부분에 코드를 자세히 적어놓았다.

<br />

</details>

<details>
<summary>revalidatePath vs router.refresh</summary>
<br>
 
### revalidatePath 사용

위의 단락에서는 router.refresh 를 많이 사용하였다고 했지만, server action 을 사용하여 모든 데이터 fetching 을 서버에서 다루려고 하였기 때문에 더 알맞은 함수인 revalidatePath 를 사용하였다.

확실히 서버에서 데이터를 처리함과 동시에 캐시를 다시 받아오도록 캐시 초기화를 하니 더 빠르게 동작하는 것을 확인할 수 있었다

<br />

</details>

<details>
<summary>server action</summary>
<br>
 
### Server Action 사용해보기

서버로 요청을 보내는 부분을 전부 클라이언트가 아닌 서버에서 처리하고 싶어서 server action 을 이용해 보기로 하였다.

server action 을 쓰니 client 와 server 의 분리가 일어나기 때문에 보는 사람이 코드를 이해하는 데 훨씬 수월할 것이라는 생각이 들었다.

따라서 연습삼아 이번 프로젝트를 전부 서버 액션으로 바꿔보려고 한다.

### GET

유저 정보를 가져오는 함수를 작성해야 했다.

우리 프로젝트에서는 로그인 시 accessToken 을 발급하여 response 로 전달한다.

따라서 로그인을 서버에서 처리를 하면, 서버 날아오는 accessToken 을 쿠키에 저장하려고 하였다.

그래서 먼저 flow 를 생각해 보았다.

1. client 에서 아이디, 비밀번호 입력한 뒤 submit 요청

```tsx
"use server";

import { redirect } from "next/navigation";
import { setAccessToken } from "../../api/cookies";

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const { data } = await res.json();

  if (!data?.accessToken) {
    throw new Error("로그인 시 에러가 발생했습니다.");
  }

  await setAccessToken(data?.accessToken);

  redirect("/");
}
```

2. next 서버에서 cookies() 를 이용하여 토큰 저장

```tsx
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setAccessToken(data: string) {
  cookies().set("accessToken", data);
}

export async function getAccessToken() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  return accessToken?.value;
}
```

3. 토큰 확인 뒤 토큰 존재 시 헤더에 토큰 저장 후 GET 요청

```tsx
"use server";

import { redirect } from "next/navigation";
import { getAccessToken } from "@/app/api/cookies";

const getCurrentUser = async () => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    redirect("/signin");
  }

  const res = await fetch("https://bootcamp-api.codeit.kr/api/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("유저를 불러오는 데 오류가 발생했습니다.");
  }

  return data.data[0];
};

export default getCurrentUser;

```

### POST, PUT

post, put 요청도 get 요청과 크게 다르지 않았다.

```tsx
"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const addLink = async (url: string, folderId: number | undefined) => {
  const accessToken = await getAccessToken();

  const res = await fetch("https://bootcamp-api.codeit.kr/api/links", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      folderId,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("링크 생성 시 에러가 발생했습니다.");
  }

  revalidatePath("/folder");
};

export default addLink;

```

##

<br />

</details>

<br />

## Quick Start

테스트 아이디와 테스트 비밀번호를 복사하셔서 로그인 하시면 됩니다.
<img width="633" alt="test-id:pw" src="https://github.com/user-attachments/assets/e9f1e3a8-e728-4035-a4bb-eda5c9ea967d">

### Clone
```
git clone https://github.com/HMRyu/linkbrary.git
```

### Installation
```
npm install
```

### Run
```
npm run dev
```


