import React from "react";

const UserProfile = ({ setIsLogin }) => {
  const handleClickLogout = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div>
      <div>유저 이미지</div>
      <div>팔로워 수</div>
      <div>하트 수</div>
      <div>댓글 수</div>
      <button onClick={handleClickLogout}>로그아웃</button>
    </div>
  );
};

export default UserProfile;
