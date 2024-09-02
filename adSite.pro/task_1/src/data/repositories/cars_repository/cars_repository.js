class CarsRepository {
  constructor(dataProvider) {
    if (!dataProvider) {
      throw new Error("DataProvider is required");
    }

    this.dataProvider = dataProvider;
  }

  async getAllPassengerCars() {
    try {
      const response = await this.dataProvider.fetchData("/passengerCars");
      return response;
    } catch (error) {
      console.error("Error fetching passenger cars:", error);
      return [];
    }
  }

  async getAllVans() {
    try {
      const response = await this.dataProvider.fetchData("/vans");
      return response;
    } catch (error) {
      console.error("Error fetching vans:", error);
      return [];
    }
  }
}

export default CarsRepository;
