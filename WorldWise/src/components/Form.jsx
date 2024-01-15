import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import BackButton from "./BackButton";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Loading from "./Loading";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [emoji, setEmoji] = useState("");
  const [tripNotes, setTripNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [geoLocation, setGeoLocation] = useState(null);
  const { createCity } = useCities();
  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const navigate = useNavigate();

  useEffect(
    function () {
      async function getCityData() {
        try {
          setIsLoadingLocation(true);
          const response = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await response.json();

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (error) {
          setGeoLocation(error.message);
        } finally {
          setIsLoadingLocation(false);
        }
      }
      getCityData();
    },
    [lat, lng]
  );

  async function handleForm(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes: tripNotes,
      position: {
        lat,
        lng,
      },
      id: new Date(),
    };
    await createCity(newCity);
    navigate("/app/countries");
  }

  if (isLoadingLocation) return <Loading />;

  if (!lat || !lng)
    return <Message message="Start by clicking location on the Map" />;

  if (geoLocation) return <Message message={geoLocation} />;

  return (
    <form className={styles.form} onSubmit={handleForm}>
      <div className={styles.inputFields}>
        <label htmlFor="cityName">City Name</label>
        <input
          type="text"
          id="cityName"
          value={`${cityName} ${emoji}`}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <div className={styles.inputFields}>
        <label htmlFor="cityTime">When did you go to?</label>

        <DatePicker
          id="cityTime"
          selected={date}
          onChange={(date) => setDate(date)}
          className={styles.date}
        />
      </div>
      <div className={styles.inputFields}>
        <label htmlFor="cityName">Notes about your trip to {country}</label>
        <textarea
          value={tripNotes}
          onChange={(e) => setTripNotes(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.inputControls}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}
