import React, { useState, useContext } from "react";
import WalletForm from "../WalletForm/WalletForm";
import "./Navbar.css";
import {Link } from 'react-router-dom';
import { ListWalletContext } from "../../Context/ListWalletContext";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  const { WalletList } = useContext(ListWalletContext);
  return (
    <div className="navBar">
      <div>
        <div className="justify-content-between">
          {WalletList.length === 0 ? <Link to='/E-Wallet/Nowallets/' style={{ color: 'white'}}> <h2 className='wallet-name'> B-Planner </h2> </Link> : <Link to='/E-Wallet/wallets/' style={{ color: 'white'}}> <h2> B-Planner </h2> </Link> }
         
         <div>
          <button
            className="btn-color addwallet-fixed"
            onClick={() => setModal(true)}
            >
            Add wallet
          </button>
        </div> 
        </div>
      </div>
      <WalletForm show={modal} setShow={setModal} onHide={() => setModal(false)} />
    </div>
  );
}
