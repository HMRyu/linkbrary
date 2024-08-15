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
https://github.com/user-attachments/assets/0d222b2c-4c9d-4b61-901a-1a3729668eae

### 파일 추가
https://github.com/user-attachments/assets/1df66e75-3c78-4acc-902a-d95593e6a9a7

### 파일 이동
https://github.com/user-attachments/assets/bc6e8a56-aada-4c36-973d-4854c347a19b

### 파일 공유 
https://github.com/user-attachments/assets/0922b78f-cb0c-4f0e-b240-c611585fcecf

### 링크 삭제 
https://github.com/user-attachments/assets/468175ce-5bd8-4110-a77c-c95c07478956

### 파일 삭제 
https://github.com/user-attachments/assets/3aca1435-968c-497e-aada-ddecf4136858

### 링크 검색 
https://github.com/user-attachments/assets/54800e00-d06e-4765-8ba3-874a99c532a9

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
<summary>fetch 대신 axios 를 쓴 이유</summary>
<br>
Next.js 에서 제공되는 fetch 를 사용하지 않고 axios 를 사용하였다.

## Axios Interceptor

대부분의 api 요청 시 accessToken 을 header 에 담아서 요청을 보내야 했었다.

axios interceptor 를 사용하면 모든 http 요청을 중앙에서 제어할 수 있기 때문에 모든 요청에 공통된 헤더를 추가할 수 있어서 편리하게 데이터를 요청할 수 있었다.

fetch 함수는 인터셉터 기능을 기본적으로 지원하지 않았다. 그래서 따로 인터셉터 기능을 구현해야 했는데, 이 역시 코드의 양이 길어지기 때문에 axios interceptor 를 사용하였다.

- fetch 를 사용한 소스코드
    
    
    ```tsx
    import { getAccessToken } from "../cookies";
    
    const addLink = async (url: string, folderId: number | undefined) => {
      const accessToken = await getAccessToken();
    
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/links`, {
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
    
      return res;
    };
    
    export default addLink;
    ```

- axios 를 사용한 소스코드
    
    
    ```tsx
    import axiosInstance from "../axiosInstance";
    
    const addLink = async (url: string, folderId: number | undefined) => {
      const res = await axiosInstance.post("/links", {
        url,
        folderId,
      });
    
      return res;
    };

    export default addLink;
    ```
    

물론 fetch 를 사용하면 캐싱 기능이 내장되어 있어서 장점이 있었겠지만, 코드를 간단하게 적을 수 있어 보는 사람이 이해하기 쉬운 이점이 더 크다고 생각하여 axios 를 사용하였다.

<br />

</details>

<details>
<summary>revalidatePath vs router.refresh</summary>
<br>
이 프로젝트에서는 router.refresh 를 많이 사용하였다.

revalidatePath 는 서버측에서 사용되는 캐시 무효화 함수이고, router.refresh 는 클라이언트측에서 사용되는 캐시 무효화 함수이다.

이 프로젝트에서는 모달을 이용하여 데이터를 변경하는 경우가 굉장히 많았는데, 모달 사용 시 이벤트가 많았고, 이벤트를 사용하기 위해 클라이언트 컴포넌트를 사용했다.

따라서 데이터의 변경 시 클라이언트에서 사용 가능한 router.refresh 를 적극적으로 사용하였다.

<br />

</details>

<br />

## Quick Start

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


