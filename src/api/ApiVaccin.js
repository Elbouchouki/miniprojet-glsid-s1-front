import axios from "axios";

export default class ApiInfirmier {
  static async getVaccins(token) {
    try {
      const vaccins = await axios.get(
        `${process.env.REACT_APP_API_URL}vaccin`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return vaccins.data;
    } catch (error) {
      console.log(error);
    }
  }
}
