import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useFetch = (url, method) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
    };

    fetchData();
  }, [url, method]);

  return { data, loading };
};

useFetch.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
};

export default useFetch;
