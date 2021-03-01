import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [convertedText, setConvertedText] = useState('');

  //from Irie-san
  //ref : https://qiita.com/satto_sann/items/be4177360a0bc3691fdf
  const API_KEY = 'AKfycbzSMySCPJSxxCDzglgPsMelqqXzuX_zRLm7Qvv-Ol8Li2QP-fMGTb4gGA';
  
  let endPoint = 'https://script.google.com/macros/s/';
  endPoint += `${API_KEY}`;
  endPoint += `/exec?text=${text}&from=${language}&to=ja`;
  // console.log(endPoint);

  useEffect(() => {
    const response = axios
      .get(
      	endPoint,
      )
      .then((response) => {
        // console.log(response.data.text)
      	setConvertedText(response.data.text);
      })
      .catch((err) => {
        console.log('rest api error', err);
      });
  }, [text, language]);

  return (
  	<div>
	  {convertedText}
  	</div>
  );
};

export default Convert;