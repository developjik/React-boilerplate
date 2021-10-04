import React, { useEffect } from 'react';
import axios from 'axios';

function Test() {
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/help/countries',
      headers: {
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': '364a45c39dmshd75de982b5af408p16721ejsnb80a5d72de2b',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return <div>123</div>;
}

export default Test;
