import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react';
import AppReducer from '../reducers/AppReducer';
import { log } from '../utils/logger'

const initialState = {
  inputText: null,
  alert: {
    text: 'Test whether a block of text was written by an AI or a human',
    status: 'info',
  }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state
  function setInputText(data) {
    dispatch({
      type: 'UPDATE_INPUT_TEXT',
      payload: data
    });
  }

  useEffect(() => {
    log('state', 'rgb(217, 38, 169)', state)
  }, [state])

  return ( <GlobalContext.Provider value = {
      {
        ...state,
        setInputText,
      }
    } > {
      children
    } </GlobalContext.Provider>
  )
}