const getLocalStorage = itemName => {
  const item = window && JSON.parse(localStorage.getItem(itemName));
  if (!item) {
    return [];
  }
  return item;
};

export default getLocalStorage;
