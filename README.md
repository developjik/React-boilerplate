# Developjik's React BoilerPlate with Airbnb Code Style

1. [프로젝트 소개](#1-프로젝트-소개-)
2. [프로젝트 주요 기술](#2-프로젝트-주요-기술)
3. [프로젝트에 활용 된 Backend Server](#3-프로젝트에-활용된-backend-server)
4. [프로젝트 기능 및 구현](#4-프로젝트-기능-및-구현)
5. [프로젝트 구조](#5-프로젝트-구조)
6. [프로젝트 스크린샷](#6-프로젝트-스크린샷)
7. [프로젝트 설치 및 실행](#7-프로젝트-설치-및-실행)

## 1. 프로젝트 소개 🚀

- 개요 : boilerplate
- 주제 : React BoilerPlate
- 기간 : 2021.08 ~ 2021.09

## 2. 프로젝트 주요 기술

- react
- react-router- dom
- redux + react-redux + redux-persist
- react-cookie
- axios
- emailjs-com
- react-responsive
- material ui

## 3. 프로젝트에 활용된 backend server

- nest.js + postgresql 로 이루어진 Backend Server
  [Backend Server Git](https://github.com/developjik/React-boilerplate)
  [Backend Server](https://developjik-nextjs.herokuapp.com/)

## 4. 프로젝트 기능 및 구현

- /signIn (로그인 페이지)

  1. 사용자는 ID, Password 입력 후 Login 버튼 Click
  2. axios를 통해 요청하여 Backend Server의 Postgresql DB와 일치하는지 검사 후 accessToken(1시간 제한), User Data 반환
  3. 반환된 accessToken은 cookie에 1시간 동안 저장, User Data는 Redux Store에 저장

  - ※ 로그인한 경우 접근 불가

  <br/>

- /signUp (회원가입 페이지)

  1. 사용자는 정보 입력 후 Register 버튼 Click
  2. axios를 통해 요청하여 Backend Server의 Postgresql DB에 저장

  - ※ 로그인한 경우 접근 불가

  <br/>

- /contact (개발자에게 이메일 보낼 수 있는 페이지)

  1. 사용자는 정보 입력 후 제출 버튼 Click
  2. emailjs-com을 활용하여 개발자에게 메일 가능

  - ※ 로그인 한 경우만 접근 가능

  <br/>

- /info (회원 정보 페이지)

  - 회원 정보 보여주는 페이지
  - ※ 로그인 한 경우만 접근 가능

  <br/>

- 잘못된 경로

  - 404 Page Not Found 구현

  <br/>

- LogOut Button Click 한 경우

  - cookie 정보 삭제 + redux 안의 user 정보 삭제

  <br/>

- max-width:600px 이하

  - Navigation Menu => Toggle Menu로 변경

<br/>

- Dark Mode
  - Toggle 클릭시 Dark Mode 적용 가능

<br/>

- redux Persist
  - refresh 해도 redux-persist를 활용해 Session Stoarage에 저장하여 유지

## 5. 프로젝트 구조

```
├── public
│   ├── favicon.ico
│   └── index.html
├── src
    ├── App.jsx
    ├── Components
    │   ├── Contact
    │   │   └── ContactForm.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Header
    │   │   ├── Menu.css
    │   │   ├── Menu.jsx
    │   │   ├── Navigator.css
    │   │   └── Navigator.jsx
    │   └── Login
    │       ├── SignInForm.jsx
    │       └── SignUpForm.jsx
    ├── bgImg
    │   └── NotFoundBg.png
    ├── cookie
    │   └── cookie.jsx
    ├── index.jsx
    ├── modules
    │   ├── index.js
    │   └── user.js
    └── routes
        ├── AuthRoute.jsx
        ├── Contact
        │   └── Contact.jsx
        ├── Home
        │   └── Home.jsx
        ├── Login
        │   ├── SignIn.jsx
        │   └── SignUp.jsx
        ├── NoAuthRoute.jsx
        ├── NotFound
        │   ├── NotFound.css
        │   └── NotFound.jsx
        └── UserInfo
            └── Info.jsx
```

## 6. 프로젝트 스크린샷

### [1] React BoilerPlate Main Page(No Login) ✨

<img width="1313" alt="main" src="https://user-images.githubusercontent.com/67889389/157090090-10ad62d5-5913-475d-b512-f3e35ca9e71f.png">

### [1-1] React BoilerPlate Menu(No Login) ✨

<img width="1305" alt="nologinmenu" src="https://user-images.githubusercontent.com/67889389/157090073-9d1e4687-58fa-4f48-8ac7-d09ed3040fbd.png">

### [1-2] React BoilerPlate Menu(Login) ✨

<img width="1313" alt="loginmenu" src="https://user-images.githubusercontent.com/67889389/157090087-3edc1388-bead-414c-89a1-da090cf78a8b.png">

### [1-2] React BoilerPlate Mobile Toggle Menu ✨

<img width="500" alt="mobile" src="https://user-images.githubusercontent.com/67889389/157091454-e4eed27b-7f7f-4b6d-8886-98885b1c2b9a.png">

### [2] React BoilerPlate SignIn Page ✨

<img width="1301" alt="signin" src="https://user-images.githubusercontent.com/67889389/157090084-30c6c6c5-3f41-4c3a-8e0e-d472eba6b2a2.png">

### [4] React BoilerPlate SignUp Page ✨

<img width="1301" alt="signup" src="https://user-images.githubusercontent.com/67889389/157090079-53ea7d04-112a-4aeb-b59a-0ab4aa78cbfc.png">

### [5] React BoilerPlate Contact Page ✨

<img width="1310" alt="contact" src="https://user-images.githubusercontent.com/67889389/157090059-636c214d-5bc2-498f-9918-11a3b5664455.png">

### [6] React BoilerPlate Info Page ✨

<img width="1304" alt="info" src="https://user-images.githubusercontent.com/67889389/157090064-ec91757b-c6ac-4d88-bc39-1d94b87db43b.png">

### [7] React BoilerPlate 404 Page ✨

<img width="1312" alt="404" src="https://user-images.githubusercontent.com/67889389/157090046-686e3b26-ec28-4d69-ad52-c40814a20f01.png">

### [8] React BoilerPlate Dark Mode✨

<img width="1309" alt="darkmode" src="https://user-images.githubusercontent.com/67889389/157090076-d53c6e08-87dd-49d0-8eb1-7c03826f4794.png">

## 7. 프로젝트 설치 및 실행

1. Git Clone

```plaintext
git clone https://github.com/developjik/React-boilerplate.git
```

2. 프로젝트 패키지 설치

```plaintext
yarn install
```

3. 프로젝트 실행

```plaintext
yarn start
```
