const USER_LOGIN_NAME = 'user';

export type Login = string;

export const saveUserName = (login: Login): void => {
  localStorage.setItem(USER_LOGIN_NAME, login);
};

export const getUserName = (): Login => {
  const user = localStorage.getItem(USER_LOGIN_NAME);
  return user ?? '';
};

export const dropName = (): void => {
  localStorage.removeItem(USER_LOGIN_NAME);
};
