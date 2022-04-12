import React, { useState, useEffect } from "react";
import WalletForm from "../WalletForm/WalletForm";
import "./Navbar.css";
import coins from "./coins.png";
import { Link } from "react-router-dom";
// import { ListWalletContext } from "../../Context/ListWalletContext";
// import db from "../../Firebase";
import { useAuth } from "../../Context/AuthContext";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  const [userIn, setUserIn] = useState("/sign-up");
  // const { WalletList } = useContext(ListWalletContext);
  const { currentUser } = useAuth();
  useEffect(() => {
    currentUser ? setUserIn("/profile") : setUserIn("/sign-up");
  }, [currentUser]);
  return (
    <div className="navBar">
      <div>
        <div className="justify-content-between">
          <div className="coins-logo-brand">
            {!currentUser ? (
              <Link to="/Nowallets/" style={{ color: "white" }}>
                {" "}
                <h2 className="wallet-name"> B-Planner </h2>{" "}
              </Link>
            ) : (
              <Link to="/wallets/" style={{ color: "white" }}>
                {" "}
                <h2> B-Planner </h2>{" "}
              </Link>
            )}
            <img src={coins} alt="coins logo" className="coins-logo" />
          </div>
          <div>
            <button
              className="btn-color addwallet-fixed"
              onClick={() => setModal(true)}
              disabled={currentUser ? false : true}
            >
              Add wallet
            </button>

            <Link to={userIn}>
              <button className="btn-color btn-prof ">{currentUser? 'Profile' : 'Sign In/Up'}</button>
            </Link>
          </div>
        </div>
      </div>
      <WalletForm
        show={modal}
        setShow={setModal}
        onHide={() => setModal(false)}
      />
    </div>
  );
}
