const getLocalStorage = itemName => {
  const item =
    typeof window === 'undefined' && JSON.parse(localStorage.getItem(itemName));
  if (!item) {
    return [];
  }
  return item;
};

export default getLocalStorage;
