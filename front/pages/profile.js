import AppLayout from "../components/Layout/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/profile/NicknameEditForm";
import FollowerList from "../components/profile/FollowerList";

const Profile = () => {
  return (
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowerList header="팔로잉 목록" />
        <FollowerList header="팔로워 목록" />
      </AppLayout>
    </>
  );
};

export default Profile;
