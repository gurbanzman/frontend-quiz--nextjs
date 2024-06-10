import React from "react";
import { ThemeProvider } from "next-themes";
import "../styles/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/reset.css";
import "../styles/btn.css";
import "../styles/global.css";
import CircleImage from "../components/circle-image/page";
import topImage from "../../public/images/top-left.png";
import bottomImage from "../../public/images/bottom-right.png";

export const metadata = {
  title: "My Pages",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" bg-slate-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <CircleImage item={`top-0`} imgUrl={topImage} alt={`top-image`} />
        <CircleImage
          item={`bottom--circle end-0`}
          imgUrl={bottomImage}
          alt={`bottom-image`}
        />
      </body>
    </html>
  );
}
