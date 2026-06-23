import {useContext} from "react";
import { AuthContext} from "../context/AuthContext";

function Profile() {
const { user } =useContext(AuthContext);
  return (

    <div className="profile-page">

      <h1>My Profile</h1>

      <div className="profile-card">

        <p>
          <b>Name:</b> {user.name}
        </p>

        <p>
          <b>Email:</b> {user.email}
        </p>
      


      </div>

    </div>

  );

}

export default Profile;