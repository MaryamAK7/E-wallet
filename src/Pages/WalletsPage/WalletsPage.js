import React, { useContext, useEffect, useState } from "react";
import { ListWalletContext } from "../../Context/ListWalletContext";
import WalletForm from "../../Components/WalletForm/WalletForm";
import WalletCard from "../../Components/WalletCard/WalletCard";
import "./WalletsPage.css";
import { useAuth } from "../../Context/AuthContext";

export default function WalletsPage() {
  const { WalletList } = useContext(ListWalletContext);
  const [modal, setModal] = useState(false);
  let [currentList, setCurrentList] = useState([]);
  let { currentUser } = useAuth();

  const handleAddWallet = () => {
    setModal(true);
  };
  useEffect(() => {
    currentUser
      ? setCurrentList(
          WalletList.filter((wallet) => wallet.email === currentUser.email)
        )
      : setCurrentList([]);
  }, [WalletList, currentUser]);

  return (
    <div>
      <h1 className="walletsPage-hd">Your Wallets</h1>
      <div className="walletsPage-cont">
        <div className="addWallet-outline" onClick={handleAddWallet}><div>+Add Wallet</div></div>
        {currentList.map((item, index) => {
          return <WalletCard item= {item} index = {index}/>;
        })}
      </div>
      <WalletForm
        show={modal}
        setShow={setModal}
        onHide={() => setModal(false)}
      />
    </div>
  );
}
