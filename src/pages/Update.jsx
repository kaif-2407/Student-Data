import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setFname(localStorage.getItem("fname"));
    setMobile(localStorage.getItem("mobile"));
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://681277f1129f6313e20eafd8.mockapi.io/crud-kaif/${id}`, {
        name: name,
        email: email,
        fname: fname,
        mobile: mobile,
      })
      .then(() => {
        navigate("/display");
      });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" outline-none border-none rounded-xl shadow-[#393E46] p-10 bg-[#393E46]">
        <form className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-[#948979]">
            Update the Data of the student
          </h1>
          <hr className="border border-gray-300 my-4 w-full" />
          <div>
            <h3 className="font-medium text-lg py-2 px-3 text-white ">Name</h3>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none bg-transparent border-2 border-[#948979] font-medium text-lg py-2 px-8 rounded-full placeholder:text-gray-400"
              type="text"
              placeholder="Enter your name here...!"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg py-2 px-3 text-white">Email</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none bg-transparent border-2 border-[#948979] font-medium text-lg py-2 px-8 rounded-full placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg py-2 px-3 text-white">
              Mobile Number
            </h3>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="outline-none bg-transparent border-2 border-[#948979] font-medium text-lg py-2 px-8 rounded-full placeholder:text-gray-400"
              type="text"
              placeholder="Enter your mobile no. here!"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg py-2 px-3 text-white">
              Father's Name
            </h3>
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="outline-none bg-transparent border-2 border-[#948979] font-medium text-lg py-2 px-8 rounded-full placeholder:text-gray-400"
              type="text"
              placeholder="Enter your Father's name"
            />
          </div>
          <Link to="/display">
            <button
              onClick={handleUpdate}
              className="mt-7 text-white border-none outline-none hover:bg-[#9a8b74] font-semibold bg-[#948979] text-lg py-2 px-8 w-full rounded-full placeholder:text-white cursor-pointer"
            >
              Update Task
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
