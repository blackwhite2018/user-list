export const filterUsers = (users, key) => {
  return users.filter(({ username }) =>
    username.toLowerCase().startsWith(key.toLowerCase())
  );
};

export const sortedById = (users, flag) => {
  return flag
    ? users.sort(({ id: current }, { id: next }) => current - next)
    : users.sort(({ id: current }, { id: next }) => next - current);
};
