import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addStep, resetStep } from "./actions";

function App() {
  const { steps } = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1>You have walked {steps} steps today</h1>
      <div>
        <button onClick={() => dispatch(addStep())} className="button">
          Add a step
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(resetStep())} className="button">
          Reset steps
        </button>
      </div>
    </div>
  );
}

export default App;
