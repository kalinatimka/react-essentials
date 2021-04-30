import React, { useEffect, useReducer, useState } from "react";
import "./App.css";

function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
      />
      <p>{checked ? 'checked' : 'unchecked'}</p>
    </>
  );
}

export default App;
