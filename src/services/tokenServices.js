export const saveToken = (key, value) => {
  const saved = sessionStorage.setItem(key, value);
  return saved;
};
export const retrieveToken = (key) => {
  const saved = sessionStorage.getItem(key);
  return saved;
};
export const updateToken = (key, value) => {
  const saved = sessionStorage.setItem(key, value);
  return saved;
};
export const deleteToken = (key) => {
  const saved = sessionStorage.clear(key);
  return saved;
};
