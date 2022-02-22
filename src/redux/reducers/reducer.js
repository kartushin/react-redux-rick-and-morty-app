import {getListCharacters, getMoreListCharacters} from "../../services/RickAndMortyServices";

// 2 Actions Types
const APP_GET_CHARACTER = "APP_GET_CHARACTER"
const MORE_GET_CHARACTER = "MORE_GET_CHARACTER"
const SET_PAGE= "SET_PAGE"
// const GET_CHAR_INFO = "GET_CHAR_INFO"

// 1 Redux Store
const initialState = {
  chars: [],
  info: [],
  page: 1,
};

// 5 Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_GET_CHARACTER: {
      return {
        ...state,
        chars: [...state.chars, ...action.payload],
      };
    }
    case MORE_GET_CHARACTER: {
      return {
        ...state,
        // chars: [...state.chars, ...action.payload.chars],
        chars: state.chars.concat(action.payload.chars)
      }
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload.page
      }
    }
    default: {
      return state;
    } 
  }
}

// 3 Actions
// {
//   type: SET_PAGE,
//   payload: {
//     ...
//   }
// }

// 4 Action Creators
const setPage = (page) => ({
  type: SET_PAGE,
  payload: {
    page,
  }
})

// const setCharInfo = (info) => ({
//   type: GET_CHAR_INFO,
//   payload: {
//     info,
//   }
// })

export const getCharactersAction = () => async (dispatch) => {
  const itemsCharacter = await getListCharacters();
  return dispatch({ type: APP_GET_CHARACTER, payload: itemsCharacter});
}

export const getMoreCharactersAction = () => async (dispatch, getState) => {
  const { page } = getState();
  const nextPage = page + 1;
  const response = await getMoreListCharacters(nextPage);
  dispatch(setPage(nextPage));
  return dispatch({ type: MORE_GET_CHARACTER, payload: { chars: response.results }});
}

// export const getCharactersInfoAction = () => async (dispatch, getState) => {
//   const { info } = getState();
//   //сюда нужно записать запрос и функцию
//   return dispatch({ type: GET_CHAR_INFO, payload: { chars: response.results }})
// } 