import axios from "axios";

export default class ApiPatient {
  static async getPatient(token) {
    try {
      const patients = await axios.get(
        `${process.env.REACT_APP_API_URL}patient`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return patients.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async deletePatient(token, identifient) {
    try {
      const patient = await axios.delete(
        `${process.env.REACT_APP_API_URL}patient`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            identifient: identifient,
          },
        }
      );
      return patient.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async updatePatient(token, patientInfo) {
    try {
      const patient = await axios.put(
        `${process.env.REACT_APP_API_URL}patient`,
        patientInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return patient.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async addPatient(token, patientInfo) {
    try {
      const patient = await axios.post(
        `${process.env.REACT_APP_API_URL}patient`,
        patientInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return patient.data;
    } catch (error) {
      console.log(error);
    }
  }
}
