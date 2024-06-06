"use client";

import Cart from "../components/cart/page";
import Header from "../components/header/page";
import Paragraph from "../components/paragraph/page";
import Navbar from "../components/navbar/page";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setQuiz(data.data);
    };

    fetchData();
  }, []);

  console.log(quiz);

  return (
    <>
      <Navbar></Navbar>
      <main className="container-md position-relative z-3">
        <div className="d-flex align-items-lg-stretch justify-content-between">
          <div className="col-lg-6 d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-1">
              <Header item={`custom--big-size fw-normal`}>
                Welcome to the
              </Header>
              <Header item={`custom--big-size fw-bold`}>Frontend Quiz!</Header>
            </div>
            <Paragraph>Pick a subject to get started.</Paragraph>
          </div>
          <div className="col-lg-5">
            <ul className="d-flex flex-column gap-4">
              <li className="carts--section cart--container">
                <Link href={`/quiz`} target="_blank">
                  <Cart imgUrl={``}>{`HTML`}</Cart>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
