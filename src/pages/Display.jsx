import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Display = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://681277f1129f6313e20eafd8.mockapi.io/crud-kaif")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://681277f1129f6313e20eafd8.mockapi.io/crud-kaif/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, fname, email, mobile) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("fname", fname);
    localStorage.setItem("mobile", mobile);
  };

  return (
    <div className="h-screen w-screen p-20">
      <div className="flex text-center justify-between mb-2 px-4 py-2">
        <h1 className="text-3xl text-white py-2 ">Students data</h1>
        <Link to="/">
          <button className="outline-none py-1 px-10 text-white bg-[#3A59D1] rounded-3xl cursor-pointer hover:bg-[#493ad1]">
            Create
          </button>
        </Link>
      </div>
      <hr className="border border-gray-300 my-4 w-full" />

      <div>
        <table className=" w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className=" px-4 py-2">Id</th>
              <th className=" px-4 py-2">Name</th>
              <th className=" px-4 py-2">Email</th>
              <th className=" px-4 py-2">Age</th>
              <th className=" px-4 py-2">City</th>
              <th className=" px-4 py-2">Update / Delete</th>
            </tr>
          </thead>
          {data.map((eachData) => {
            return (
              <tbody>
                <tr className="bg-gray-200">
                  <td className=" px-4 py-2">{eachData.id}</td>
                  <td className=" px-4 py-2">{eachData.name}</td>
                  <td className=" px-4 py-2">{eachData.email}</td>
                  <td className=" px-4 py-2">{eachData.mobile}</td>
                  <td className=" px-4 py-2">{eachData.fname}</td>
                  <div className="flex justify-start items-center gap-3">
                    <Link to="/update">
                      <button
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.fname,
                            eachData.mobile,
                            eachData.email
                          )
                        }
                        className="outline-none py-0.5 px-5 text-white bg-emerald-400 rounded-xl cursor-pointer hover:bg-emerald-500"
                      >
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(eachData.id)}
                      className="outline-none py-0.5 px-5 text-white bg-red-400 rounded-xl cursor-pointer hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Display;
