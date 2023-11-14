"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import "./page.css";
export default function Page() {
  return (
    <div>
      <CountButton name={"Goliath"} mult={2} size={5} />
      <br />
      <CountButton name={"David"} mult={1} size={1} />
      <br />
      <a href="https://github.com/COLEREIMER/NextJS---App.git">My Github Repo!</a>
      <br />
      <br />
      <SearchBar Search Bar/>
    </div>
  );
}
