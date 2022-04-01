import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "./components/atoms/title/Title";
import { getUserSuccess, getUser } from "./redux/actions/userActions";
import { RootState } from "./redux/reducers/index";
import TestContext from "./components/atoms/testContext/TestContext";

const data = {
  isLogin: true,
  name: "Dairo",
  avatar: "xdxd",
  isLoading: false,
};
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleState = () => {
    dispatch(getUser());
    dispatch(getUserSuccess(data));
  };

  console.log(user);
  return (
    <div className="App">
      <Title text={"clean architecture"} />

      <button onClick={handleState}>Cambiar nombre</button>
      <TestContext / >
    </div>
  );
};

export default App;
