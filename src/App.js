import { useState } from "react";

import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  const [isVisible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
      {true && <ClassComponent />}
      {isVisible && <FunctionalComponent />}
    </div>
  );
}

export default App;
