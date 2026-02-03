import axios from "axios";

export const fetchAdminData = () => {
  const token = localStorage.getItem("access_token");

  return axios.get(
    "https://rdocker.dpdp.in.net/api/admin/data/all",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
