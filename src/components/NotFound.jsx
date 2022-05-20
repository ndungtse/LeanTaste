import React from 'react'
import { Link } from 'react-router-dom'
import axios  from "axios";

function NotFound() {

const options = {
  method: 'GET',
  url: 'https://bing-image-search1.p.rapidapi.com/images/search',
  params: {q: 'skol'},
  headers: {
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'bbce629d3cmsh48cb41094daa35cp1157cejsn05466969482c'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-center w-full">
        <h1 className="text-[6em]">404</h1>
        <p>Page Not Found</p>
        <Link to="/">
          <p className="text-green-900">Go To Homepage</p>{" "}
        </Link>
      </div>
    </>
  );
}

export default NotFound