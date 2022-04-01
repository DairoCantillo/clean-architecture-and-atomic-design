import Context from "../context/index";
import { useState } from "react";

interface Props {
  children: JSX.Element;
}
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<String>("dairo");
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
