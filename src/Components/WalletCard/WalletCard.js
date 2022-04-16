import React, {useContext} from 'react'
import './WalletCard.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Popup, Label } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { ListWalletContext } from "../../Context/ListWalletContext";

export default function WalletCard({item, index}) {
    let history = useHistory();
    const { WalletList, removeWallet } = useContext(ListWalletContext);

    const handleRemoveWallet = (id) => {
        removeWallet(id);
      };
      const style_popup = {
        borderRadius: 10 + "px",
        opacity: 0.7,
      };
  return (
    <div
    className="walletcard-pg "
     style={{ backgroundColor: '#f0bf3b' }}
     key={index}
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
  )
}