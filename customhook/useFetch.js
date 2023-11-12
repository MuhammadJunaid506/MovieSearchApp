import { useCallback, useEffect, useState } from "react";
import { LocalStorageKeys, getFromStorage } from "../helpers/localstorage";
import axios from "axios";

export function useFetch({ url, data = {}, start = true, params }) {
  const tok = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDFiNzk2ODJjNjhiNTE4ZjU2YTU3MDYwYmQ5ODM4MSIsInN1YiI6IjY1NGYwZTFiZDQ2NTM3MDBjNGU0NTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.roHVUXsOAKQWDbzdvTeYcDoBF0KwpCCsyqNJGGSskaI'
  const token = getFromStorage(LocalStorageKeys?.Token) ?? tok;
  const BASE_URL = ""
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [statusCode, setCode] = useState(-1);

  useEffect(() => {
    if (start) fetchData();
  }, [start]);

  const refresh = useCallback(() => {
    fetchData();
  }, [data]);

  async function fetchData() {
    console.log('Token:', token);

    if (loading) return;

    setLoading(true);
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(url, data, {
      headers,
      params,
    }).catch((error)=>{
      console.log(headers, params)
      console.log(error)
      setResult([]);
      setLoading(false);
    });
    setCode(response?.status);
    try {
      const { data, message } = response.data;
      if (message === "Success") {
        setResult(data);
      }
    } catch (err) {
      setResult([]);
    }
    setLoading(false);
  }
  return { result, loading, refresh, statusCode };
}