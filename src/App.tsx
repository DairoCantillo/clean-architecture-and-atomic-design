import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserSuccess } from "./redux/actions/userActions";
import { RootState } from "./redux/reducers/index";

const data = {
  isLogin: true,
  name: "Dairo",
  avatar: "xdxd",
  isLoading: false,
};
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  console.log(user);
  return (
    <div className="App">
      <h1>app</h1>

      <button onClick={() => dispatch(getUserSuccess(data))}>
        Cambiar nombre
      </button>
    </div>
  );
};

export default App;
