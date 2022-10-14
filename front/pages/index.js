import AppLayout from "../components/Layout/AppLayout";
import Head from "next/head";
import LoginForm from "../components/Index/LoginForm";
import { useState } from "react";
import UserProfile from "../components/profile/UserProfile";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Head>
        <title>바보</title>
      </Head>
      <AppLayout>
        <div>
          {isLogin ? (
            <UserProfile setIsLogin={setIsLogin} />
          ) : (
            <LoginForm setIsLogin={setIsLogin} />
          )}
        </div>
      </AppLayout>
    </>
  );
};

export default Home;
