import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AiOutlineCode } from "react-icons/ai";
import { RiHome2Line } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { Navbar, NavButton } from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <Navbar>
        <NavButton href="/" Icon={RiHome2Line}>
          Home
        </NavButton>
        <NavButton href="/about" Icon={RxPerson}>
          About
        </NavButton>
        <NavButton Icon={AiOutlineCode}>Posts</NavButton>
      </Navbar>
    </>
  );
}
