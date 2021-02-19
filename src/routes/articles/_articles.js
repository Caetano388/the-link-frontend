import { onMount } from "svelte";
import axios from "axios";

let articles = [];
let error = null;

onMount(async () => {
  try {
    const res = await axios.get(process.env.API_URL + "/articles");
    articles = res.data;
  } catch (e) {
    error = e;
  }
});

export default articles;
