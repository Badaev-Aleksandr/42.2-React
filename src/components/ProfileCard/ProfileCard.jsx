import "./styles.css";
import { user } from "./data";
import userAvatar from "../../assets/images/avatar.jpg"

function ProfileCard() {
  return (
    <div className="profile-card">
      {/*  Вариант 1 */}
      {/* <img src={user.avatar} alt="Avatar" /> */}
      {/* Вариант 2 */}
      <img src={userAvatar} alt="Avatar" />
      <h2>Name: {user.name}</h2>
      <p>Activity: {user.activity}</p>
      <p>Hobby: {user.hobby}</p>
    </div>
  );
}

export default ProfileCard;
