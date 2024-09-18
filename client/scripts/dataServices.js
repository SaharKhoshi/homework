const baseURL = "mongodb://localhost:27017/admin"; // Write down the base URL of the created API.

const getAllUser = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/users`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

const createUser = async (userData) => {
    try {
        const { data } = await axios.post(`${baseURL}/users`, userData);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
};

const deleteUser = async (id) => {
    try {
        const { data } = await axios.delete(`${baseURL}/users/${id}`);
        console.log(data);
      } catch (error) {
        if (error.response.status === 404) {
          alert(`not found user with id ${id}`);
          return;
        }
        console.log(error);
      }
};

export { getAllUser, deleteUser, createUser };
