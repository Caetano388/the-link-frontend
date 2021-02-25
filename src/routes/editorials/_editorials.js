import axios from "axios";

let error = null;

let url =
  process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

export default async () => {
  const res = await axios.get(url + "editorials");
  const editorials = res.data;

  return editorials;
};