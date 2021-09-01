# Developjik's React BoilerPlate(Airbnb Code Style)

## 주요 기술

1. react
2. react-router- dom
3. redux + react-redux +redux-persist (refresh 해도 redux-persist를 활용해 Session Stoarage에 저장하여 유지)
4. react-cookie
5. axios
6. emailjs-com
7. react-responsive
8. material ui

---

## 로그인 회원 가입 등에 활용 된 Backend Server

nest.js + postgresql + heroku
[Backend Server] (https://developjik-nextjs.herokuapp.com/)

---

## `/` 홈 페이지(메인 페이지)

---

## '/signIn' 로그인 페이지 / 로그인한 경우 접근 불가

1. 사용자는 ID, Password 입력 후 Login 버튼 Click
2. axios를 통해 요청하여 Backend Server의 Postgresql DB와 일치하는지 검사 후 accessToken(1시간 제한), User Data 반환
3. 반환된 accessToken은 cookie에 1시간 동안 저장, User Data는 Redux Store에 저장

---

## '/signUp 회원가입 페이지 / 로그인한 경우 접근 불가

1. 사용자는 정보 입력 후 Register 버튼 Click
2. axios를 통해 요청하여 Backend Server의 Postgresql DB에 저장

---

## '/contact' 개발자에게 이메일 보낼 수 있는 페이지 / 로그인 언헌 경우 접근 불가

1. 사용자는 정보 입력 후 제출 버튼 Click
2. emailjs-com을 활용하여 개발자에게 메일 가능

---

## '/info' 회원 정보 페이지 / 로그인 안한 경우 접근 불가

---

## max-width:600px 이하 일 때

Navigation(Menu) => Toggle Menu로 변경
