import axios from "axios";

export default class ApiInfirmier {
  static async getInfirmier(token) {
    try {
      const infirmiers = await axios.get(
        `${process.env.REACT_APP_API_URL}infirmier`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return infirmiers.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteInfirmier(token, idInfirmier) {
    try {
      const infirmier = await axios.delete(
        `${process.env.REACT_APP_API_URL}infirmier`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            idInfirmier: idInfirmier,
          },
        }
      );
      return infirmier.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async updateInfirmier(token, infirmierInfo) {
    try {
      const infirmier = await axios.put(
        `${process.env.REACT_APP_API_URL}infirmier`,
        infirmierInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return infirmier.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async addInfirmier(token, infirmierInfo) {
    try {
      const infirmier = await axios.post(
        `${process.env.REACT_APP_API_URL}infirmier`,
        infirmierInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return infirmier.data;
    } catch (error) {
      console.log(error);
    }
  }
}
