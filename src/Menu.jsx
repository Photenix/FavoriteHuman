import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import HumanCard from "./Modules/HumanCard";

import { GiPerspectiveDiceSixFacesTwo, GiPerspectiveDiceSixFacesThree, GiPerspectiveDiceSixFacesSix, GiSave } from "react-icons/gi";




const Menu = () => {
	let humans = JSON.parse(localStorage.getItem("save"));
  if (humans === null) humans = [];

  const [count, setCount] = useState(0);
  const [human, setHuman] = useState({});
  const [save, setSave] = useState(humans);
  const [isFavorite, setIsFavorite] = useState(false);
  const [numFavorite, setNumFavorite] = useState(humans.length);

	const nav = useNavigate();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => response.data)
      .then((obj) => setHuman(obj.results[0]))
      .finally( console.log(human) )
  }, [count]);
	

  const handleSave = () => {
    if (human != {}) {
      save.push(human);
      localStorage.setItem("save", JSON.stringify(save));
      setNumFavorite(save.length);
      setIsFavorite(true);
    }
  };

  const handleNext = () => {
    setCount((count) => count + 1);
    setIsFavorite(false);
  };

  return (
    <div>
      <div className="info">
        <h2>Numero de personas favoritas</h2>
        <h3> {numFavorite}</h3>
        <button
          onClick={() => {
            nav("/like");
          }}
        >
          {" "}
          Mirar cuales{" "}
        </button>
      </div>

      <h1>Busca a un humano</h1>
      <p>by: JM4P1R0</p>
      <p>to: Aliens</p>
      <HumanCard  human={human}/>

			<div className="option-button">
				<button onClick={handleNext}>
					<GiPerspectiveDiceSixFacesTwo size={50}/>
				</button>
				{isFavorite ? "" : <button onClick={handleSave}><GiSave size={50}/></button>}
			</div>
    </div>
  );
};

export default Menu;
