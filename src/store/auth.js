import { setGlobal } from 'reactn';

setGlobal({
  user: {},
  userChecked: true,
  authError: null,
});

const updateUser = user =>
  setGlobal({ user, authError: null, userChecked: true });

// const handleError = error => setGlobal({ authError: error });

export const loginWithEmail = credentials => {
  updateUser(credentials);
};

export const createUserWithEmail = data => {
  updateUser(data);
};

export const logout = () => updateUser(null);
