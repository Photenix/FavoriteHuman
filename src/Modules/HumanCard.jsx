import { IoMdFemale, IoMdMale  } from "react-icons/io";


const HumanCard = ({ human }) => {

	let Symbol = human?.gender == "female" ?<IoMdFemale size={40} title="Mujer"/> :<IoMdMale size={40} title="Hombre"/>
	let totalName = `${human.name?.title} ${human.name?.first} ${human.name?.last}`

  return (
    <div className="card-pretty">
      <img src={human.picture?.large} alt="" />
			<div className="card-pretty-info">
				<h2> { totalName } </h2>
				{Symbol}
			</div>
    </div>
  );
};

export default HumanCard;
