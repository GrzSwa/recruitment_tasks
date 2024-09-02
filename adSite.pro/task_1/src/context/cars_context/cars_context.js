import CarsRepository from "../../data/repositories/cars_repository/cars_repository";
import DataProvider from "../../data/providers/data_provider";
import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const CarsContext = ({ children }) => {
  const [passengerCars, setpassengerCars] = useState({});
  const [vans, setVans] = useState({});
  const [loading, setLoading] = useState(true);

  const _dataProvider = new DataProvider();
  const _carsRepository = new CarsRepository(_dataProvider);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const passengerCarsData = await _carsRepository.getAllPassengerCars();
        setpassengerCars(passengerCarsData);

        const vansData = await _carsRepository.getAllVans();
        setVans(vansData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        passengerCars,
        vans,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useCarsContext = () => useContext(DataContext);
