import { onMount } from "svelte";
import axios from "axios";

let articles = [];
let error = null;

let url = process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

onMount(async () => {
  try {
    const res = await axios.get(url + "articles");
    articles = res.data;
  } catch (e) {
    error = e;
  }
});

export default articles;
