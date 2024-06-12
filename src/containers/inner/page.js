"use client";

import React, { useEffect, useState } from "react";
import { getPosts } from "/_actions/postActions";
import Cart from "../../components/cart/page";
import Header from "../../components/header/page";
import Navbar from "../../components/navbar/page";
import Paragraph from "../../components/paragraph/page";
import Link from "next/link";
import notFound from "../../app/not-found";
import Image from "next/image";
import Button from "../../components/button/page";
import { useDispatch, useSelector } from "react-redux";
import { addFalseCount, addRightCount } from "@/src/features/store";
import Modal from "@/src/components/modal/page";

export default function Inner({ params }) {
  const [quiz, setQuiz] = useState(null);
  const [selected, setSelected] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [question, setQuestion] = useState(null);
  const [modal,setModal] = useState(false);
  const dispatch = useDispatch();
  const rightCount = useSelector((state) => state.rightCount);
  const falseCount = useSelector((state) => state.falseCount);

  useEffect(() => {
    async function fetch() {
      const { id, questionID } = params;
      const { data } = await getPosts();
      async function findID(find) {
        return data.find((item) => item._id == find);
      }
      setQuiz(await findID(id));
      setQuestion(questionID);
    }
    fetch();
  }, [params]);

  if (quiz?.questions[question]?.answers == undefined) {
    return notFound();
  }

  function handleClick(id) {
    setSelected(id);
  }

  function handleFind() {
    setEnabled(true);
    let find = quiz?.questions[question]?.answers.find(
      (item) => item._id === quiz?.questions[question].trueID
    );
    if (find._id === selected) {
      dispatch(addRightCount(1));
    } else {
      dispatch(addFalseCount(1));
    }
  }

  function openModal(){
    setModal(true);
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
      <main className="container-md position-relative z-3 custom--md custom--bottom">
        <div className="d-flex align-items-lg-stretch justify-content-between xl:flex-col xl:gap-5 md:mb-5">
          <div className="col-lg-6 d-flex flex-column gap-5 ">
            <div className="d-flex flex-column gap-3 dark--class">
              <Paragraph>
                Question {parseInt(question, 10) + 1} of {quiz.questions.length}
              </Paragraph>
              <Header
                item={`fs-2 fw-bold`}
                props={quiz.questions ? quiz.questions[question].desc : ``}
              />
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column gap-5 xl:w-full">
            <ul className="d-flex flex-column gap-4 custom--m3 custom--md-list">
              {quiz?.questions[question].answers
                ? quiz?.questions[question].answers?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`carts--section cart--container inner--cart position-relative ${
                          selected === item._id ? "default" : ""
                        }`}
                        onClick={() => handleClick(item._id)}
                      >
                        <Cart props={item.desc}>
                          <p className="w-100 text-center fw-bold">
                            {item.variable}
                          </p>
                        </Cart>
                      </li>
                    );
                  })
                : ""}
            </ul>
            <Button type={`button`}>
              {enabled ? (
                quiz?.questions.length - (parseInt(question, 10) + 1) == 0 ? (
                  <span className="button--find" onClick={openModal}>
                    Watch Progress
                  </span>
                ) : (
                  <Link
                    href={`/quiz/${quiz._id}/${parseInt(question, 10) + 1}`}
                  >
                    Next
                  </Link>
                )
              ) : (
                <span className="button--find" onClick={handleFind}>
                  Find
                </span>
              )}
            </Button>
          </div>
        </div>
      </main>
      <Modal falseCount={falseCount} rightCount={rightCount} modal={modal} setModal={setModal}/>
    </>
  );
}
