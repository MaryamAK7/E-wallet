import React, { useState, useContext } from "react";
import WalletForm from "../WalletForm/WalletForm";
import "./Navbar.css";
import coins from './coins.png'
import {Link } from 'react-router-dom';
import { ListWalletContext } from "../../Context/ListWalletContext";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  const { WalletList } = useContext(ListWalletContext);
  return (
    <div className="navBar">
      <div>
        <div className="justify-content-between">
          <div className='coins-logo-brand'> 
          {WalletList.length === 0 ? <Link to='/Nowallets/' style={{ color: 'white'}}> <h2 className='wallet-name'> B-Planner </h2> </Link> : <Link to='/wallets/' style={{ color: 'white'}}> <h2> B-Planner </h2> </Link> }
          <img src={coins} alt='coins logo' className='coins-logo'/>
          </div>
         <div>
          <button
            className="btn-color addwallet-fixed"
            onClick={() => setModal(true)}
            >
            Add wallet
          </button>
          <Link to='/sign-up'> 
          <button
            className="btn-color btn-prof "
            >
            Profile
          </button>
          </Link>
        </div> 
        </div>
      </div>
      <WalletForm show={modal} setShow={setModal} onHide={() => setModal(false)} />
    </div>
  );
}
