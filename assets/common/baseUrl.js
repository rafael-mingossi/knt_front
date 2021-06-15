import { Platform } from "react-native";

let baseURL = "";

{
  Platform.OS == "android"
    ? (baseURL = "http://192.168.120.115:3000/api/v1/")
    : (baseURL = "http://192.168.120.115:3000/api/v1/");
}

//baseURL = "https://rickandmortyapi.com/api/character/253";

export default baseURL;
