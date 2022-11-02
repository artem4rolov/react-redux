import React from "react";
import Counter from "../components/counter";

const App = ({ store }) => {
  return (
    <Counter
      counter={store.getState()}
      inc={store.inc}
      dec={store.dec}
      clr={store.clr}
    />
  );
};

export default App;
