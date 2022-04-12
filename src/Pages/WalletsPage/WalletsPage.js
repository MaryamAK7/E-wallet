import React, {useContext, useEffect, useState} from 'react'
import { ListWalletContext } from "../../Context/ListWalletContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Popup, Label } from "semantic-ui-react";
import WalletForm from '../../Components/WalletForm/WalletForm';
import { useHistory } from "react-router-dom";

import "./WalletsPage.css";
import { useAuth } from '../../Context/AuthContext';
export default function WalletsPage() {
    let history = useHistory();
    const { WalletList, removeWallet } = useContext(ListWalletContext);
    const [modal, setModal] = useState(false);
    let [currentList, setCurrentList] = useState([]);
    let {currentUser} = useAuth();

    const handleRemoveWallet = (id) => {
      removeWallet(id);
    };
    const style_popup = {
      borderRadius: 10 + "px",
      opacity: 0.7,
    };
    const handleAddWallet = () =>{
        setModal(true);
    }
    useEffect(()=>{
      currentUser ? setCurrentList(WalletList.filter( wallet => wallet.email === currentUser.email)) : setCurrentList([]);
    },[WalletList, currentUser])
    
    return (
        <div >
            <h1 className='walletsPage-hd'>Your Wallets</h1>
            <div className='walletsPage-cont'> 
            <div className='addWallet-outline' onClick={handleAddWallet}>
            </div>
          {currentList.map((item, index) => {
        
        return (
          
            <div
             className="walletcard-pg "
              style={{ backgroundColor: '#f0bf3b' }}
              eventKey={index}
            >
              <div className="label-trans-numb-pg">
                <div className='wal-date'> {item.date} </div>
                <Label circular basic size="big" className='lab' >
                  {item.totalBal} {item.select}
                </Label>
                
              </div>
              <Link
               to={`/SingleWalletPage/${item.walletName}`}
               style={{ textDecoration: "none" }}
              >
              <div className="wallet-name-pg">
                {index + 1}. {item.walletName}{" "}
              </div>
              </Link>
              <div className="icons-card">
              
                <Popup
                  trigger={
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      size="xs"
                      onClick={() => {
                        handleRemoveWallet(item.id);
                        if(WalletList.length === 1 ){
                          history.push('/Nowallets/');
                        }
                      }}
                    />
                  }
                  content="delete"
                  inverted
                  style={style_popup}
                  position="bottom center"
                  size="tiny"
                />
              </div>
            </div>
          
        );
      })}
        </div>
        <WalletForm show={modal} setShow={setModal} onHide={() => setModal(false)} />
    </div>
    )
}
