import axios from "axios";

export default class ApiMedecin {
  static async getMedecin(token) {
    try {
      const medecins = await axios.get(
        `${process.env.REACT_APP_API_URL}medecin`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return medecins.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteMedecin(token, idMedecin) {
    try {
      const medecin = await axios.delete(
        `${process.env.REACT_APP_API_URL}medecin`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            idMedecin: idMedecin,
          },
        }
      );
      return medecin.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async updateMedecin(token, medecinInfo) {
    try {
      const medecin = await axios.put(
        `${process.env.REACT_APP_API_URL}medecin`,
        medecinInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return medecin.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async addMedecin(token, medecinInfo) {
    try {
      const medecin = await axios.post(
        `${process.env.REACT_APP_API_URL}medecin`,
        medecinInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return medecin.data;
    } catch (error) {
      console.log(error);
    }
  }
}
