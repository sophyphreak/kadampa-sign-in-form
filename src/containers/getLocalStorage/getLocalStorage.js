const getLocalStorage = () => {
  let local = { personList: [], oldLists: [] };
  if (!JSON.parse(localStorage.getItem('local'))) {
    return local;
  }
  return JSON.parse(localStorage.getItem('local'));
};

export default getLocalStorage;
