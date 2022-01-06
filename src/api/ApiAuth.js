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
  static async signup(userInfo) {
    try {
      const user = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/signup`,
        {
          identifient: userInfo.identifient,
          nom: userInfo.nom,
          prenom: userInfo.prenom,
          telephone: userInfo.telephone,
          adresse: userInfo.adresse,
          dateNaissance: userInfo.dateNaissance,
          centreId: userInfo.centreId,
          infirmierId: userInfo.infirmierId,
          medecinId: userInfo.medecinId,
          malade: userInfo.malade,
          username: userInfo.identifient,
          email: userInfo.email,
          password: userInfo.password,
          role: userInfo.role,
        }
      );
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
}
