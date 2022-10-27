import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PasswordError from "./PasswordError";
import TermErrorMessage from "./TermErrorMessage";
import useInput from "../../hooks/useInput";
import * as userActions from "../../redux/slices/user";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const [isLogin, setIsLogin] = useState(false);

  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  console.info(userData);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );
  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [term],
  );

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }

      if (!term) {
        return setTermError(true);
      }
      console.info(id, nickname, password);
      dispatch(userActions.postUserLogin({ id, nickname, password }));
    },
    [password, passwordCheck, term, dispatch],
  );
  return (
    <form onSubmit={onSubmitForm} className="min-h-full">
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input
          className="bg-slate-200"
          type="email"
          name="user-id"
          value={id}
          required
          autoFocus
          onChange={onChangeId}
        />
      </div>
      <div>
        <label htmlFor="user-nickname">닉네임</label>
        <br />
        <input
          className="bg-slate-200"
          name="user-nickname"
          value={nickname}
          required
          onChange={onChangeNickname}
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          className="bg-slate-200"
          type="password"
          name="user-password"
          value={password}
          required
          onChange={onChangePassword}
        />
      </div>
      <div>
        <label htmlFor="user-password-check">비밀번호 확인</label>
        <br />
        <input
          className="bg-slate-200"
          type="password"
          name="user-password-check"
          value={passwordCheck}
          required
          onChange={onChangePasswordCheck}
        />
        {passwordError && <PasswordError />}
      </div>
      <div>
        <label htmlFor="user-term">약관 동의</label>
        <br />
        <input type="checkbox" checked={term} onChange={onChangeTerm} />
        {termError && <TermErrorMessage />}
      </div>
      <button>제출하기</button>
    </form>
  );
};

export default SignUpForm;
