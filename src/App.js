import Home from "./Components/Home/Home";
import axios from "axios";
import { useEffect, useState } from "react";

/** document
// https://documenter.getpostman.com/view/10808728/SzS8rjbc#b07f97ba-24f4-4ebe-ad71-97fa35f3b683
// https://restcountries.eu/
*/

// let urlCovid19= `https://api.covid19api.com/country/${}`;
let urlInfoCoutries = `https://restcountries.eu/rest/v2/all`;

function App() {
  const [name, setName] = useState([]);

  useEffect(() => {
    callApiInfoCoutry();
  }, []);

  const callApiInfoCoutry = async () => {
    let res = await axios.get(urlInfoCoutries);
    setName(res.data);
  };

  return (
    <>
      <Home name={name} />
    </>
  );
}

export default App;
