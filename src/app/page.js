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
          <Navbar ></Navbar>
          <main className="container-md position-relative z-3 custom--md custom--bottom">
            <div className="d-flex align-items-lg-stretch justify-content-between xl:flex-col xl:gap-5">
              <div className="col-lg-6 d-flex flex-column gap-5 dark--class xl:w-full center_">
                <div className="d-flex flex-column gap-1 dark--class">
                  <Header
                    item={`custom--big-size fw-normal custom--header`}
                    props={`Welcome to the`}
                  />
                  <Header
                    item={`custom--big-size fw-bold custom--header`}
                    props={`Frontend Quiz!`}
                  />
                </div>
                <Paragraph>Pick a subject to get started.</Paragraph>
              </div>
              <div className="col-lg-5 xl:w-full">
                <ul className="d-flex flex-column gap-4 custom--m3 custom--md-list">
                  {data
                    ? data.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="carts--section cart--container"
                          >
                            <Link href={`/quiz/${item._id}/${index}`}>
                              <Cart props={item.header||item.msg}>
                                <Image
                                  src={item.logo}
                                  width={56}
                                  height={56}
                                  unoptimized
                                  alt="image"
                                />
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
