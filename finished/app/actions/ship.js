export const UPDATE_SHIP = 'UPDATE_SHIP';

export function updateShip(ship) {
  return {
    type: UPDATE_SHIP,
    ship: ship
  };
}
