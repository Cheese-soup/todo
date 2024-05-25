import { appState } from "../app";
import { User } from "../models/User";

export const authUser = function (login, password) {
  const user = new User(login, password);
  if (!user.hasAccess) return false, alert("ДОСТУП ЗАПРЕЩЁН");
  appState.currentUser = user;
  return true;
};
