import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = (apiEndpoint, dataKey) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(apiEndpoint);
        console.log(res.data.data[dataKey]);
        setData(dataKey ? res.data.data[dataKey] : res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [apiEndpoint, dataKey]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apiEndpoint);
      setData(dataKey ? res.data[dataKey] : res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default FetchData;
