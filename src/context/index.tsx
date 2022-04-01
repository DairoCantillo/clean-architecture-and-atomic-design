import { createContext } from "react";

interface IContext {
  user: String;
  setUser: (user: String) => void;
}
const Context = createContext<IContext | null>(null);
export default Context;
