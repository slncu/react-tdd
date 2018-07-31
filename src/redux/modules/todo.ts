import * as _ from 'lodash';

interface Item {
  id: number,
  name: string
}

export interface Todos {
  items: Item[]
}

const initialState: Todos = {
  items: []
}

interface InclementId {
  type: 'todos/InclementId',
  payload: string
}

export const TodoActions = InclementId;

export default (state: Todos = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

/**
 * アイテムの数(ID)を増加させる
 */
export function incrementId() {
  const id = _.cloneDeep(initialState.items);
  console.log(id);
}

/**
 * todoアイテムを追加する
 */
export function addItem() {
  console.log('hoge');
}