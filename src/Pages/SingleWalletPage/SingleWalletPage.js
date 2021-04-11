import React, { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import TransactionsForm from "../../Components/TransactionsForm/TransactionsForm";
import { ListWalletContext } from "../../Context/ListWalletContext";
import { useHistory } from "react-router-dom";
import "./SingleWalletPage.css";

export default function SingleWallet() {
  const { WalletList, setChosenWallet } = useContext(ListWalletContext);
  let { name } = useParams();
  let history = useHistory();
  
  useEffect(()=>{
   WalletList.forEach((wal) => wal.walletName === name ? setChosenWallet(wal) : '')
  },[WalletList,name,setChosenWallet])

   const handleClick = () => {
      history.push('/')
   }
  return (
    <>
      <div className="main">
              <div className="main-items-right-div">
                <div className='ar-lft-icon' onClick={handleClick}> 
                  <i class="arrow left icon"/> Back
                </div>
                <TransactionsForm />
                <br />
              </div>
           
      </div>
    </>
  );
}
