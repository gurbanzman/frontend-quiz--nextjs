"use client";

import React, { useEffect, useState } from "react";
import { getPosts } from "@/_actions/postActions";
import Cart from "@/src/components/cart/page";
import Header from "@/src/components/header/page";
import Navbar from "@/src/components/navbar/page";
import Paragraph from "@/src/components/paragraph/page";
import Link from "next/link";
import notFound from "@/src/app/not-found";
import Image from "next/image";
import Button from "@/src/components/button/page";

export default function Page({ params }) {
  const [quiz, setQuiz] = useState(null);
  const [selected,setSelected] = useState(null)
  const [right, setRight] = useState(false);
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    async function fetch() {
      const { id, questionID } = await params;
      const { data } = await getPosts();
      async function findID(find) {
        return data.find((item) => item._id == find);
      }

      setQuiz(await findID(id));
      setQuestion(questionID);
    }
    fetch();
  }, []);
  if (quiz?.questions[question]?.answers == undefined) {
    return notFound();
  }

  function handleClick(id) {
    setSelected(id);
    if (quiz.questions[question].trueID==id) {
      setRight(true);
    } else {
      setRight(right);
    }
  }

  return (
    <>
      <Navbar>
        <Cart props={quiz ? quiz.header : ``}>
          <Image
            src={quiz ? quiz.logo : ``}
            width={56}
            height={56}
            unoptimized
            alt="image"
          />
        </Cart>
      </Navbar>
      <main className="container-md position-relative z-3">
        <div className="d-flex align-items-lg-stretch justify-content-between">
          <div className="col-lg-6 d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-3">
              <Paragraph>
                Question {parseInt(question, 10) + 1} of {quiz.questions.length}
              </Paragraph>
              <Header
                item={`fs-2 fw-bold`}
                props={quiz.questions ? quiz.questions[question].desc : ``}
              />
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column gap-5">
            <ul className="d-flex flex-column gap-4">
              {quiz?.questions[question].answers
                ? quiz?.questions[question].answers?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`carts--section cart--container inner--cart ${selected==item._id&&right? "active": ""}`}
                        onClick={() => handleClick(item._id)}
                      >
                        <Cart props={item.desc}>
                          <p className=" w-100 text-center fw-bold">
                            {item.variable}
                          </p>
                        </Cart>
                      </li>
                    );
                  })
                : ""}
            </ul>
            <Button type={`button`} arr={right}>
              <Link
                href={`/quiz/${quiz._id}/${parseInt(question, 10) + 1}`} className="text-white"
              >
                Next 
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
