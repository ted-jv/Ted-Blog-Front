import Link from "next/link";
import { useState } from "react";
import LoginForm from "../../Index/LoginForm";
import SearchBar from "./SearchBar";
import UserProfile from "../../profile/UserProfile";

// 반응형으로 할 것 ( 반응형 할 때는 모바일을 먼저 해야한다 ! -> 데스크탑 )
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <nav className="w-full h-6 flex justify-center">
        <div className="w-3/4 flex justify-between">
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/profile">
            <a>profile</a>
          </Link>
          <SearchBar />
          <Link href="/chinese">
            <a>chinese</a>
          </Link>
          <Link href="/signup">
            <a>signup</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
