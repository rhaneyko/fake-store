export const increaseQuantity = (id: number, size: string) => ({
  type: "INCREASE_QUANTITY",
  payload: { id, size },
});

export const decreaseQuantity = (id: number, size: string) => ({
  type: "DECREASE_QUANTITY",
  payload: { id, size },
});

export const removeItem = (id: number, size: string) => ({
  type: "REMOVE_ITEM",
  payload: { id, size },
});
