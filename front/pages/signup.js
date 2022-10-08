import { useState } from "react";
import AppLayout from "../components/Layout/AppLayout";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <AppLayout>
        <div>회원가입</div>
      </AppLayout>
    </>
  );
};

export default Signup;
