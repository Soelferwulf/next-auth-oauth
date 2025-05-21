const users = [
  { email: "lolo@holo.com", password: "password", name: "Lolek Holevic" },
  { email: "hobowith@shotgun.com", password: "password", name: "Rutger Hauer" },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
