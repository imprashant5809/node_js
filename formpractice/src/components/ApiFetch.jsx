import axios from "axios";
import React, { useEffect, useState } from "react";
import then from "react";

const ApiFetch = () => {
  const [data, setData] = useState([]);

  const handleApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        setData(resp.data);

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleApi();
  }, []);
  return (
    <div className="gap-2 p-6 border-2 border-black grid grid-cols-4 place-content-center">
      {data.map((value, index) => (
        <div
          key={index}
          className="p-8 flex flex-col justify-center items-center gap-4 rounded-md bg-blue-500 "
        >
          <span className="text-2l ">id:{value.id}</span>
          <span className="text-2l ">Title:{value.title}</span>
          <span className="text-2l ">Body:{value.body}</span>
        </div>
      ))}
    </div>
  );
};

export default ApiFetch;
