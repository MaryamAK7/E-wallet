import React, { useContext } from "react";
import "./WalletCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { ListWalletContext } from "../../Context/ListWalletContext";

export default function WalletCard({ item, index }) {
  let history = useHistory();
  const { WalletList, removeWallet } = useContext(ListWalletContext);

  const handleRemoveWallet = (id) => {
    removeWallet(id);
  };
  return (
    <div className="walletcard-pg " key={index}>
      <div className="label-trans-numb-pg">
        <div className="wal-ind"> {index + 1} </div>
        <div className="wal-date">{item.date} </div>
      </div>
      <Link
        to={`/SingleWalletPage/${item.walletName}`}
        style={{ textDecoration: "none" }}
      >
        <div className="wallet-name-pg">{item.walletName} </div>
      </Link>
      <div className="icons-card">
        <div className="trash"> 
        <FontAwesomeIcon
          icon={faTrashAlt}
          size="xs"
          onClick={() => {
            handleRemoveWallet(item.id);
            if (WalletList.length === 1) {
              history.push("/Nowallets/");
            }
          }}
        /></div>
        <div className="lab">
          {item.totalBal} {item.select}
        </div>
      </div>
    </div>
  );
}
