import { useContext } from "react";
import { CounterContext } from "./context/counterContext";

function App() {
  const {
    state: { number },
    dispatch,
  } = useContext(CounterContext);

  // console.log(state, dispatch);

  return (
    <div className="min-h-screen bg-gray-600 flex items-center flex-col justify-center">
      <h1 className="text-center font-bold text-3xl mb-2">USING CONTEXT API</h1>
      {/* CONTAINER */}
      <div className="h-[20rem] flex justify-around items-center flex-col w-1/2 bg-gray-800 border rounded-md shadow-md shadow-gray-100">
        <div className="w-40 h-40 border text-white font-semibold text-5xl rounded-md shadow-md shadow-gray-100 flex justify-center items-center">
          {number}
        </div>

        <div>
          <button onClick={() => dispatch({type: "INCREMENT"})} className="bg-blue-500 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            INCREMENT +
          </button>

          <button onClick={() => dispatch({type: "DECREMENT"})}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            DECREMENT -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
