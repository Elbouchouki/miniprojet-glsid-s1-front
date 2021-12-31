import axios from "axios";

export default class ApiUser {
  static async getRoles(token) {
    try {
      const roles = await axios.get(
        `${process.env.REACT_APP_API_URL}role_permission/roles`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return roles.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async getPermissions(token, roleId) {
    try {
      const roles = await axios.get(
        `${process.env.REACT_APP_API_URL}role_permission/roles/${roleId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return roles.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async getUsers(token) {
    try {
      const users = await axios.get(`${process.env.REACT_APP_API_URL}user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return users.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteUsers(token, username) {
    try {
      const user = await axios.delete(`${process.env.REACT_APP_API_URL}user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          username: username,
        },
      });
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async updateUsers(token, userInfo) {
    try {
      const user = await axios.put(
        `${process.env.REACT_APP_API_URL}user`,
        userInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
  static async addUsers(token, userInfo) {
    try {
      const user = await axios.post(
        `${process.env.REACT_APP_API_URL}user`,
        userInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
}
