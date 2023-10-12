"use client";
import Image from "next/image";
import { FaForward } from "react-icons/fa";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Ludo from "@/components/Ludo";
export default function Home() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [show, setShow] = useState(false);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Snake & Ladder Saga: Roll, Climb, Conquer!
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Welcome to the Snake and Ladder game, where fun meets strategy! Roll
            the dice, climb ladders, and watch out for slippery snakes.
            Challenge your friends and family in this classic board game
            adventure!
          </p>
        </div>
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            LUDO
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Ludo Game
          </h1>
        </div>
        <Formik
          initialValues={{ user1: "", user2: "" }}
          validationSchema={Yup.object({
            user1: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            user2: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setUser1(values.user1);
            setUser2(values.user2);
            setShow(true);
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          {(formik) => (
            <form className="mb-5" onSubmit={formik.handleSubmit}>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
                <div className="p-2 sm:w-1/2 w-full ">
                  <div className="bg-gray-100 rounded flex p-4 items-center focus-within:bg-gray-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <input
                      type="text"
                      id="user1"
                      name="user1"
                      placeholder="First Person Name"
                      className="w-full px-3 py-2 bg-inherit rounded outline-none"
                      {...formik.getFieldProps("user1")}
                    />
                  </div>
                  {formik.touched.user1 && formik.errors.user1 ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.user1}
                    </div>
                  ) : null}
                </div>
                <div className="p-2 sm:w-1/2 w-full ">
                  <div className="bg-gray-100 rounded flex p-4 items-center focus-within:ring-1">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Second Person Name"
                      className="w-full px-3 py-2 bg-inherit rounded focus:ring-0"
                      id="user2"
                      name="user2"
                      {...formik.getFieldProps("user2")}
                    />
                  </div>
                  {formik.touched.user2 && formik.errors.user2 ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.user2}
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                type="submit"
                disabled={!formik.dirty || !formik.isValid}
                className={`flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${
                  !formik.isValid || !formik.dirty ? "disabled" : ""
                }`}
              >
                <span>
                  <FaForward className="mt-1 mr-2" />
                </span>
                Start Now
              </button>
            </form>
          )}
        </Formik>

        {show && <Ludo person1={user1} person2={user2} />}
      </div>
    </section>
  );
}
