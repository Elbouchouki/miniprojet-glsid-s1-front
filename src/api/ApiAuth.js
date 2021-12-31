import axios from "axios";
export default class ApiAuth {
  static async signin(username, password) {
    try {
      const user = await axios.post(`${process.env.REACT_APP_API_URL}auth`, {
        username: username,
        password: password,
      });
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async signup(userInfo, patientInfo) {
    try {
      const user = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/signup`,
        {
          userInfo: userInfo,
          patientInfo: patientInfo,
        }
      );
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
}
