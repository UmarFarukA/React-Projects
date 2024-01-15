import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import BackButton from "../../components/BackButton";
import { useCities } from "../../context/CitiesContext";
import { useEffect } from "react";
import Loading from "../../components/Loading";

export default function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );

  const { cityName, country, emoji, date, notes } = currentCity;

  if (isLoading) return <Loading />;

  return (
    <div className={styles.city}>
      <h4 className={styles.h4}>City Name</h4>
      <div className={styles.cityName}>
        <span>{emoji}</span>
        <p>{cityName}</p>
      </div>

      <div>
        <h4 className={styles.h4}>You went to {country} on</h4>
        <p className={styles.visitDate}>{date}</p>
      </div>

      <div>
        <h4 className={styles.h4}>Your notes</h4>
        <p className={styles.visitDate}>{notes}!</p>
      </div>

      <div className={styles.more}>
        <h4 className={styles.h4}>Learn More</h4>
        <p>
          Check out {cityName} on Wikipedia <span>&rarr;</span>
        </p>
      </div>

      <BackButton />
    </div>
  );
}
