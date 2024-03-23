import Image from "next/image";
import HomeRoun from "./Components/Home/HomeRoun";
import RightSide from "./Components/Rightside/RightSide";

export default function Home() {
  return (
    <div className="Cont">
      <HomeRoun />
      <RightSide />
    </div>
  );
}
