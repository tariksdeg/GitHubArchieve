import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => setDbData(res.data))
      .catch((err) => console.log(`err0 ==>`, err));
  }, []);

  return (
    <div className='App'>
      <h1>Welcome React with Docker</h1>
      {dbData.length > 0 ? (
        dbData.map(({ name, age }, index) => (
          <ul key={index}>
            <li>{name}</li>
            <li>{age}</li>
            <hr />
          </ul>
        ))
      ) : (
        <div>There is no results</div>
      )}
    </div>
  );
}

export default App;
