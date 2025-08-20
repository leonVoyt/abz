import axios from "axios";

export const GetUsers = async (limit) => {
  try {
    const response = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${limit}`
    );

    if (response.data.success) {
      return response.data;
    }
    throw new Error(response.data.message);
  } catch (error) {
    alert(error);
    return [];
  }
};

export const GetPositions = async () => {
  try {
    const response = await axios.get(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );

    if (response.data.success) {
      return response.data;
    }
    throw new Error(response.data.message);
  } catch (error) {
    console.error("Error fetching positions:", error);
    return { success: false, positions: [] };
  }
};

export const GetToken = async () => {
  try {
    const response = await axios.get(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );

    if (response.data.success) {
      return response.data.token;
    }
    throw new Error(response.data.message || "Failed to get token");
  } catch (error) {
    console.error("Error fetching token:", error);
    throw new Error("Failed to get authentication token");
  }
};

export const PostUser = async (data) => {
  try {
    const token = await GetToken();

    const response = await axios.post(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      data,
      {
        headers: {
          Token: token,
        },
      }
    );

    if (response.data.success) {
      return response.data;
    }
    throw new Error(response.data.message || "Failed to create user");
  } catch (error) {
    console.error("API Error:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
    throw error;
  }
};
