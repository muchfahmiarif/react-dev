import { useLogin } from "../hooks/useLogin";

const Profile = () => {
  const username = useLogin();
  return <div>username : {username}</div>;
};

export default Profile;
