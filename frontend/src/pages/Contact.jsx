import React from "react";
import { useState } from "react";
import {
  MdDriveFileRenameOutline,
  MdOutlineEmail,
  MdOutlineFeedback,
} from "react-icons/md";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeIn2,
  fadeIn3,
  fadeIn4,
} from "../components/Motion/variants";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feed, setFeed] = useState("");
  const [customurl, setCustomurl] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:4000/", {
      method: "post",
      body: JSON.stringify({ name, email, feed, customurl }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json;
    localStorage.setItem("users", JSON.stringify(result));
  };
  return (
    <>
      <section className="lg:w-[90%] bg-white border-red-800 flex justify-around mx-auto py-[5%] pb-[15%]">
        <div className="w-full flex md:flex-row flex-col justify-around">
          <div className="w-[1/2] flex flex-col justify-center mx-auto text-center">
            <h1 className="text-lg font-bold font-mono mx-auto mt-[15%] md:mt-0">
              {" "}
              Do you know some webs using deceptive designs ?{" "}
            </h1>
            <span className="sm:text-lg mx-auto font-serif">
              {" "}
              Please fill the form to reach out to us.
            </span>
            <motion.img
              variants={fadeIn2(2.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              src="./public/contact.jpg"
              className="w-[50%] sm:w-[80%] h-[60%] mx-auto mt-[10%] mb-[10%] sm:mb-0"
              alt="image"
            />
          </div>
          <div className="sm:w-[1/2] flex justify-center my-auto py-[2rem] mx-auto">
            <form className="" onSubmit={collectData}>
              <motion.div
                variants={fadeIn4(2.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-row justify-center mx-auto pb-[2rem]"
              >
                <MdDriveFileRenameOutline className="m-auto w-[3rem] bg-sky-50 h-[2rem] rounded-xl mr-[1rem]" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Enter your name"
                  className="outline-none bg-sky-50 border border-spacing-5 w-[25rem] h-[3rem] rounded-xl px-[1rem] shadow-lg active:animate-bounce mx-auto"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </motion.div>
              <motion.div
                variants={fadeIn4(3.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-row justify-center items-center mx-auto pb-[2rem]"
              >
                <MdOutlineEmail className="m-auto w-[3rem] bg-sky-50 h-[2rem] rounded-xl mr-[1rem]" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                  className="outline-none bg-sky-50 border border-spacing-5 w-[25rem] h-[3rem] rounded-xl px-[1rem] shadow-lg active:animate-bounce"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </motion.div>
              <motion.div
                variants={fadeIn4(3.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-row justify-center items-center mx-auto pb-[2rem]"
              >
                <MdOutlineEmail className="m-auto w-[3rem] bg-sky-50 h-[2rem] rounded-xl mr-[1rem]" />
                <input
                  type="text"
                  name="feed"
                  id="feed"
                  autoComplete="off"
                  placeholder="Enter your feedback"
                  className="outline-none bg-sky-50 border border-spacing-5 w-[25rem] h-[3rem] rounded-xl px-[1rem] shadow-lg active:animate-bounce"
                  value={feed}
                  onChange={(e) => setFeed(e.target.value)}
                ></input>
              </motion.div>
              <motion.div
                variants={fadeIn4(3.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-row justify-center items-center mx-auto pb-[2rem]"
              >
                <MdOutlineEmail className="m-auto w-[3rem] bg-sky-50 h-[2rem] rounded-xl mr-[1rem]" />
                <input
                  type="text"
                  name="userurl"
                  id="userurl"
                  autoComplete="off"
                  placeholder="Enter your url"
                  className="outline-none bg-sky-50 border border-spacing-5 w-[25rem] h-[3rem] rounded-xl px-[1rem] shadow-lg active:animate-bounce"
                  value={customurl}
                  onChange={(e) => setCustomurl(e.target.value)}
                ></input>
              </motion.div>
              <button
                type="submit"
                className="bg-orange-400 p-[0.5rem] px-[1rem] rounded-xl hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
