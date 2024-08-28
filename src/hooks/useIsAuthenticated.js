// authSelectors.js
import { useSelector } from "react-redux";

export const useIsAuthenticated = () => {
  return useSelector((state) => state.root.login.isLoggedIn);
};
