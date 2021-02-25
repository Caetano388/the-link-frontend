import axios from "axios";

let error = null;

let url =
  process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

export default async () => {
  const res = await axios.get(url + "articles");
  const articles = res.data;

  return articles;
};