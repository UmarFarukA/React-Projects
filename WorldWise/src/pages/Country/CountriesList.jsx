import styles from "./CountriesList.module.css";
import Loading from "../../components/Loading";
import CountryItem from "./CountryItem";
import { useCities } from "../../context/CitiesContext";

export default function CountriesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Loading />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.lists}>
      {countries.map((country) => (
        <CountryItem key={country} country={country} />
      ))}
    </ul>
  );
}
