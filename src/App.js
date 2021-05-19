import React, { useEffect, useState } from "react";
import "./App.css";

// https://api.github.com/users/kalinatimka
function App({nickname}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${nickname}`).then(res => {
      return res.json();
    }).then(setData);
  }, [nickname]);

  if (data) {
    return <div>{JSON.stringify(data)}</div>
  }

  return <div>No user available</div>
}

export default App;
