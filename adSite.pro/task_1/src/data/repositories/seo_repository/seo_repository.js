class SeoRepository {
  constructor(dataProvider) {
    if (!dataProvider) {
      throw new Error("DataProvider is required");
    }

    this.dataProvider = dataProvider;
  }

  async getAllSeo() {
    try {
      const response = await this.dataProvider.fetchData("/seo");
      return response;
    } catch (error) {
      console.error("Error fetching passenger cars:", error);
      return [];
    }
  }
}

export default SeoRepository;
