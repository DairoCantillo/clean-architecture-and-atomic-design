import { useContext } from "react";
import Context from "../../../context/index";

const TestContext = () => {
  const testContext = useContext(Context);
	console.log(testContext);
	
	
  return <div>test context</div>;
};

export default TestContext;
