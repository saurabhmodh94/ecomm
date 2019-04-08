import axios from "axios";
import { GET_ITEMS, SEARCH_ITEMS } from "./../actions/types";

export const getItems = () => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  // const body = JSON.stringify();
  const url = "/api/items/";
  axios
    .get(url)
    .then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      });
    })
    .catch(err => console.log("Error: GET_ITEMS"));
};

export const searchItems = key => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  // const body = JSON.stringify();
  const url = `/api/items/${key}`;
  axios
    .get(url)
    .then(res => {
      dispatch({
        type: SEARCH_ITEMS,
        payload: res.data
      });
    })
    .catch(err => console.log("Error: SEARCH_ITEMS"));
};
