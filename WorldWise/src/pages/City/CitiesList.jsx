import CityItem from "./CityItem";
import Message from "../../components/Message";
import Loading from "../../components/Loading";
import { useCities } from "../../context/CitiesContext";

export default function CitiesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Loading />;

  if (!cities.length)
    return <Message message="👏 click on the Map to add new city" />;

  return cities.map((city) => <CityItem city={city} key={city.id} />);
}
