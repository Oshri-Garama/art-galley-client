import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const getAll = async () => {
  try {
    const res = await axios.get("gallery/getall");
    return res.data;
  } catch (error) {
    console.log("There was an error performing the getAll request");
  }
};

const getArtById = async ({ artId }) => {
  try {
    const res = await axios.get(`gallery/get/${artId}`);
    return res.data;
  } catch (error) {
    console.log("There was an error performing the getArtById request");
  }
};

const services = { getAll, getArtById };

export default services;
