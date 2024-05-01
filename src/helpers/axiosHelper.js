import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api/data";

export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
