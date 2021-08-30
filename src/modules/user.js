/* 액션 타입 만들기 */
const SET_USER = 'user/SET_USER';

/* 액션 생성함수 만들기 */
export const setUser = (data) => ({ type: SET_USER, data });

/* 초기 상태 선언 */
const initialState = {};

/* 리듀서 선언 */
export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.data,
      };
    default:
      return state;
  }
}
