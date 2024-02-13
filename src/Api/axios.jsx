import axios from "axios";

const axiosInstance = axios.create({
    //1- local instance of firebase function 
    // baseURL:"http://127.0.0.1:5001/clone-c60ec/us-central1/api"
    // 2- deployed version of firebase function
    baseURL: "https://api-gayfr4b4ma-uc.a.run.app/",
    // 3- deployed version of amazon server on render.com
    // baseURL: "https://amazon-backend-deploy.onrender.com/"
});

export {axiosInstance};