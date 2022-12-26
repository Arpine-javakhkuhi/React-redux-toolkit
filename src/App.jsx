import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import IceCreamView from "./features/icecream/IceCreamView";
import UserView from "./features/user/UserView";
import CakeView from "./features/cake/CakeView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
