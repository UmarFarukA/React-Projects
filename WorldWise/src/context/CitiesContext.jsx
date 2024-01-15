/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useReducer,
} from "react";

const CityContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: action.payload };
    case "rejected":
      return { ...state, error: action.payload };
    case "cities/loaded":
      return {
        ...state,
        isLoading: true,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        currentCity: action.payload,
      };

    case "city/created":
      return { ...state, cities: [state.cities, action.payload] };
    case "city/deleted":
      return {
        ...state,
        cities: [state.cities.filter(city.id !== action.payload)],
      };
    default:
      throw new error("Unknown event");
  }
}

function CityProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const BASE_URL = "http://localhost:5000";

  useEffect(function () {
    async function fetchCities() {
      try {
        dispatch({ type: "loading", payload: true });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: "Error fetching cities" });
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();

        dispatch({ type: "city/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: "Error fetching city" });
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    },
    [state.currentCity.id]
  );

  async function createCity(newCityData) {
    try {
      const response = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCityData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.json();
      dispatch({ type: "city/created", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: "Error creating city" });
    }
  }

  async function deleteCity(id) {
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      dispatch({ type: "rejected", payload: "Error deleting city" });
    }
  }
  const { cities, isLoading, currentCity } = state;
  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCities() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("Cities Context was used outside the Cities Provider");

  return context;
}

export { CityProvider, useCities };
