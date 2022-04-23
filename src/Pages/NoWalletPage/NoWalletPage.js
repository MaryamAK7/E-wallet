import React, { useState } from "react";
import WalletForm from "../../Components/WalletForm/WalletForm";
// import wal from "./wallet_aym5.png";
import "./NoWalletPage.css";
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";

export default function NoWallet() {
  const [modal, setModal] = useState(false);
  const { currentUser } = useAuth();
  let history = useHistory();

  return (
    <div className="nomain">
      <div className="nomain-parent-div">
        <div className="u-hv-no-wllt">
          <div className="wlc-sp"> Welcome to </div>
          <div className="wlc-sp2"> Budget Planner </div>
          <button
            type="submit"
            onClick={() => currentUser ? setModal(true) : history.push('/sign-up') }
            className="add-wallet-btn-nomain"
          >
            Create Wallet
          </button>
          
        </div>

        <div className="wallet-illus-cont">
          {" "}
          {/* <img
            src={wal}
            alt="wallet illustration"
            className="wallet-illus"
          />{" "} */}
        </div>
        
        <WalletForm
          show={modal}
          setShow={setModal}
          onHide={() => setModal(false)}
        />
      </div>
      <h3 className="crt-head">
            {" "}
            Take control of your money and save them by tracking your expenses!
          </h3>
    </div>
  );
}
