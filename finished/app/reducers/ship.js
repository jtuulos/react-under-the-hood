import cloneDeep from 'lodash.cloneDeep';
import { UPDATE_SHIP } from '../actions/ship';

export default function ship(state = {}, action) {
  switch (action.type) {
    case UPDATE_SHIP:
      return cloneDeep(action.ship);
    default:
      return state;
  }
}
