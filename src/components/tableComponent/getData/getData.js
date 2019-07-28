import queryString from 'query-string';

const getData = () => {
  const parsed = queryString.parse(
    typeof window !== 'undefined' && window.location.search,
    {
      arrayFormat: 'bracket'
    }
  );
  const keys = Object.keys(parsed);
  return keys.map(key => parsed[key]);
};

export default getData;
