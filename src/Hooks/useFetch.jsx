import { useEffect } from "react";
import PropTypes from "prop-types";

const useFetch = (url, request) => {

  console.log(request);
  console.log(request.headers);

  useEffect(() => {
   
    const fetchData = async () => {
     
      const response = await fetch(url,{

        method: request.method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request.body)

      });
      const res = await response.json();

      console.log(res);
      
    };

    fetchData();
  }, [url,request]);

};

useFetch.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
};

export default useFetch;
