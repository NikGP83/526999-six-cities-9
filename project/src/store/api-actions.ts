import { IHotels } from "../types/types";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./users-data/users-data";


const dispatch = useDispatch();

useEffect(() => {
  fetchMoc();
}, []);

export const fetchMoc = async () => {
  try {
    const response = await axios.get<IHotels[]>(
      "https://9.react.pages.academy/six-cities/hotels"
    );
    dispatch(setData(response.data));
  } catch (error) {
    window.console.log(error);
  }
};
