import { ROUTE_NAMES } from './routes';

const isUserValid = (user) => {
  if (!user) {
    return false;
  }

  return new Date() < new Date(user.exp * 1000);
};

const authGuard = (store) => (to, from, next) => {
  if (to.matched.some((record) => record.meta.isPublic)) {
    next();

    return;
  }

  if (isUserValid(store.state.user)) {
    next();

    return;
  }

  next({
    name: ROUTE_NAMES.login,
    // query: { redirect: to.fullPath }
  });
};

export default authGuard;
