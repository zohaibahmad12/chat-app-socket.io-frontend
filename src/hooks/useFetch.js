import { useState, useEffect } from "react";
import axios from "axios";
import useUserStore from "../../store/useUserStore";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const sessionToken = useUserStore((state) => state.sessionToken);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
