import { log } from '../utils/logger'

export default (state, action) => {

  const d = new Date();
  log('→', 'rgb(229, 231, 235)', d.toLocaleTimeString());
  log('action', 'rgb(251, 189, 35)', action);

  switch (action.type) {
    case 'UPDATE_INPUT_TEXT':
      return {
        ...state,
        inuptText: action.payload,
      }
    default:
      return state;
  }
}