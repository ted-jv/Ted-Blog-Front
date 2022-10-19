import AppLayout from "../components/Layout/AppLayout";
import Head from "next/head";
import LoginForm from "../components/Index/LoginForm";
import UserProfile from "../components/profile/UserProfile";
import { useSelector } from "react-redux";

const Home = () => {
  // 위 아래 같은 결과 const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const { isLoggedIn } = useSelector((state) => state.user);
  console.info(isLoggedIn);

  return (
    <>
      <Head>
        <title>바보</title>
      </Head>
      <AppLayout>
        <div>{isLoggedIn ? <UserProfile /> : <LoginForm />}</div>
      </AppLayout>
    </>
  );
};

export default Home;
