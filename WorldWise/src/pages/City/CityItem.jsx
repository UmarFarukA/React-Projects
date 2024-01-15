import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../../context/CitiesContext";

export default function CityItem({ city }) {
  const { deleteCity } = useCities();

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(city.id);
  }
  return (
    <div>
      <Link
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={styles.locations}
      >
        <div className={styles.country}>
          <span>{city.emoji}</span>
          <p>{city.cityName}</p>
        </div>
        <div className={styles.details}>
          <p>{city.date.split("T")[0]}</p>
          <span className={styles.delete} onClick={handleDelete}>
            &times;
          </span>
        </div>
      </Link>
    </div>
  );
}
