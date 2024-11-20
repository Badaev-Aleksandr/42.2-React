import "./styles.css";

function AnimalCard({ animalData }) {
  return (
    <div className="animalCard-wrapper">
      <h3>{animalData.name}</h3>
      <div>{animalData.species}</div>
      <img src={animalData.image} />
    </div>
  );
}

export default AnimalCard;
