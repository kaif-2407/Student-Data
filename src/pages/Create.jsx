import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const history = useNavigate();

  const header = { "Access-control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://681277f1129f6313e20eafd8.mockapi.io/crud-kaif", {
        name: name,
        email: email,
        fname: fname,
        mobile: mobile,
        header,
      })
      .then(() => {
        history("/display");
      });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" outline-none border-none rounded-xl shadow-[#393E46] p-10 bg-[#393E46]">
        <form className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-[#948979]">
            Create the Data of the student
          </h1>
          <hr className="border border-gray-300 my-4 w-full" />
          <div>
            <h3 className="font-medium text-lg py-2 px-3 text-white ">Name</h3>
            <input
              onChange={(e) => setName(e.target.value)}
              className="outline-none bg-transparent border-2 border-[#948979] font-medium text-lg py-2 px-8 rounded-full placeholder:text-gray-400"
              type="text"
              placeholder="Enter your name here...!"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg py-2 px-3 text-white">Email</h3>
            <input
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
              onChange={(e) => setFname(e.target.value)}
              className="outline-none bg-transparent border-2 border-[#948979] font-medium text-lg py-2 px-8 rounded-full placeholder:text-gray-400"
              type="text"
              placeholder="Enter your Father's name"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-7 text-white border-none outline-none hover:bg-[#9a8b74] font-semibold bg-[#948979] text-lg py-2 px-8 w-full rounded-full placeholder:text-white cursor-pointer"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
