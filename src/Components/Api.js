import axios from "axios";

const params_fetch = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};
const params_delete = {
  method: "DELETE",
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params_fetch
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const postDataToApi = async (url, data, isFile) => {
  url = process.env.REACT_APP_DEV_URL + url;
  if (isFile) {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error("Error posting data to API", error);
      return null;
    }
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Success:", result);
      return result;
    } else {
      const errorData = await response.json(); // Parse error details
      console.error("Error:", response.statusText, errorData);
      return errorData;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export const removeDataFromApi = async (url) => {
  try {
    console.log(process.env.REACT_APP_STRIPE_APP_KEY);
    const { data } = await axios.delete(
      process.env.REACT_APP_DEV_URL + url,
      params_delete
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};