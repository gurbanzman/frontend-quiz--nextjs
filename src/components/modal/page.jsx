"use client";

import React from "react";
import Header from "../header/page";
import styles from "../modal/styles.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addFalseCount, addRightCount } from "@/src/features/store";
import { TfiClose } from "react-icons/tfi";

export default function Modal({ falseCount, rightCount, modal, setModal }) {
  const dispatch = useDispatch();
  function resetCount() {
    dispatch(addFalseCount(-falseCount));
    dispatch(addRightCount(-rightCount));
  }
  function closeModal(){
    setModal(false)
  }
  return (
    <div
      className={` position-absolute w-full h-full inset-0 z-40 transition-all ${
        modal ? "" : "hidden"
      } ${styles[`modal-bg`]}`}
    >
      <div className=" bg-white w-3/5 mx-auto mt-80 rounded-lg shadow p-4 d-flex flex-column gap-4 position-relative custom--modal">
        <Header item={`text-center fs-3`} props={`Dear My Friend!`} />
        <ul className="d-flex flex-column gap-3 select-none">
          <li className="p-3 bg-gray-300 rounded-lg d-flex align-items-center justify-content-between text-base fw-bold">
            Current Answers Counts: <span className="fs-5">{rightCount}</span>
          </li>
          <li className="p-3 bg-gray-300 rounded-lg d-flex align-items-center justify-content-between text-base fw-bold">
            False Answers Counts: <span className="fs-5">{falseCount}</span>
          </li>
        </ul>
        <div className=" mt-7 mb-3" onClick={resetCount}>
          <Link
            href={"/"}
            className=" bg-gray-300 p-3 rounded-xl text-base fs-6"
          >
            Let's go again
          </Link>
        </div>
        <div className="position-absolute right-7 cursor-pointer" onClick={closeModal}>
          <TfiClose />
        </div>
      </div>
    </div>
  );
}
