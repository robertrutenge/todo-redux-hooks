import React from "react";
import { Provider } from "react-redux";
import ToDoInput from "../src/components/ToDoInput";
import ToDoList from "../src/components/ToDoList";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container App">
        <ToDoInput />
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
