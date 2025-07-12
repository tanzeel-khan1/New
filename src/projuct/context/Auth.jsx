import axios from "axios";
import { useAuth } from "../context/AuthContext";

const useApi = () => {
  const { token } = useAuth();

  const getAllUsersData = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  return { getAllUsersData };
};
export default useApi;
