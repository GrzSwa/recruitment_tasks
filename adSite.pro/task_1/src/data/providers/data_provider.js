import API from "../../api/api";

class DataProvider {
  constructor() {
    this.api = new API();
  }

  async fetchData(path) {
    const response = this.api.get(path);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`[${response.status}] ${response.message}`);
      return [];
    }
  }
}

export default DataProvider;
