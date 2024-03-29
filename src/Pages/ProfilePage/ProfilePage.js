import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./ProfilePage.css";
import user from './user.png';

export default function LogOutPage() {
  const { currentUser, signOut } = useAuth();
  const [error, setError] = useState();
  const history = useHistory();
  async function handleClick(e) {
    e.preventDefault();
    try {
      setError("");
      await signOut();
      history.push("/sign-in");
    } catch {
      setError("something went wrong please try again!");
    }
  }
  return (
    <div className="profilePage">
      <div> <img src={user} alt='' className="profileIcon"/></div>
      <h1 className="profile-hd">Profile</h1>
      {error && <Alert>{error}</Alert>}
      <div >
        <strong className="my-2"> Email logged In :</strong>{" "}
        <div className="my-2 fontSize">{currentUser && currentUser.email}</div>
      </div>
      <Link to="/update-profile" className="profileLink">
        {" "}
        Update Profile{" "}
      </Link>
      <div className="profileBtns">
        <div className="checkBtnDiv">
          Check Your wallets {" "}
          <span
            onClick={() => history.push("/wallets/")}
            className="checkBtn"
          >
            take me there!
          </span>
        </div>
        <Button onClick={handleClick} className="logOut-btn">
          Sign Out
        </Button>
      </div>
    </div>
  );
}
