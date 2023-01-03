import axios from "axios";
import { baseUrl } from "./const";

export default axios.create({
    baseURL: baseUrl
});
