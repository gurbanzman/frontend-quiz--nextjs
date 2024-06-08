// 'use server'

import Cart from "../components/cart/page";
import Header from "../components/header/page";
import Paragraph from "../components/paragraph/page";
import Navbar from "../components/navbar/page";
import Link from "next/link";
import { getPosts } from "@/_actions/postActions";
import Loading from "./loading";
import Image from "next/image";

export default async function Home() {
  const { data } = await getPosts();

  return (
    <>
      {data ? (
        <>
          <Navbar></Navbar>
          <main className="container-md position-relative z-3">
            <div className="d-flex align-items-lg-stretch justify-content-between">
              <div className="col-lg-6 d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-1">
                  <Header
                    item={`custom--big-size fw-normal`}
                    props={`Welcome to the`}
                  />
                  <Header
                    item={`custom--big-size fw-bold`}
                    props={`Frontend Quiz!`}
                  />
                </div>
                <Paragraph>Pick a subject to get started.</Paragraph>
              </div>
              <div className="col-lg-5">
                <ul className="d-flex flex-column gap-4">
                  {data
                    ? data.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="carts--section cart--container"
                          >
                            <Link href={`/quiz/${item._id}/${index}`}>
                              <Cart props={item.header}>
                                <Image src={item.logo} width={56} height={56} unoptimized alt="image"/>
                              </Cart>
                            </Link>
                          </li>
                        );
                      })
                    : ""}
                </ul>
              </div>
            </div>
          </main>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
