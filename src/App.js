import React, { useEffect, useState } from "react";
import "./App.css";

function App({nickname}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (!nickname) {
      return;
    }
    setLoading(true);
    fetch(`https://api.github.com/users/${nickname}`)
      .then(res => res.json())
      .then(setData)
      .then(() => {
        setLoading(false);
      })
      .catch(setError);
  }, [nickname]);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  if (data) {
    return (
      <>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url}/>
      </>
    )
  }

  return <div>No user available</div>
}

export default App;
