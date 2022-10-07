import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/profile">
        <a>profile</a>
      </Link>
      <Link href="/signup">
        <a>signup</a>
      </Link>

      <div>공통메뉴</div>
      {children}
    </div>
  );
};

export default AppLayout;
