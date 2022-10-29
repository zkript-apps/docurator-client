import Cookies from "js-cookie";

export const generateHeaders = () => {
  const token = Cookies.get("l_auth");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};
