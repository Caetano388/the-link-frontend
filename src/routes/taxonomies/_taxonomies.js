import axios from "axios";

let url =
  process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

export default async () => {
  const res = await axios.get(url + "taxonomies");
  const taxonomies = res.data;

  return taxonomies;
};