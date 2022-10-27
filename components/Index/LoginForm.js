import Link from "next/link";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../redux/slices/user";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmitLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(userActions.postUserLogin({ id, password }));
    },
    [id, password, dispatch],
  );

  return (
    <>
      <form onSubmit={handleSubmitLogin}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <input
            className="bg-slate-400"
            type="email"
            name="user-id"
            placeholder="emali"
            value={id}
            onChange={onChangeId}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <input
            className="bg-slate-400"
            type="password"
            name="user-password"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <button>로그인</button>
          <Link href="/signup">
            <a>
              <button>회원가입</button>
            </a>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
