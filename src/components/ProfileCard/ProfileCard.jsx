import "./styles.css";
import { user } from "./data";

function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="Avatar" />
      <h2>Name: {user.name}</h2>
      <p>Activity: {user.activity}</p>
      <p>Hobby: {user.hobby}</p>
    </div>
  );
}

export default ProfileCard;
