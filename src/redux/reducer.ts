import todos, { Todos } from './modules/todo';
import { combineReducers } from 'redux';

export default combineReducers({
  todos
});

export interface State {
  todos : Todos
}