import React, { createContext, useState } from "react";

export const ListWalletContext = createContext();
const ListWalletContextProvider = (props) => {
  const [WalletList, setWalletList] = useState([]);
  const [chosenWallet, setChosenWallet] = useState({ id: 0, transactions: [], walletName: '', balance: 0, select: '', date: '' });

  const addWallet = (id, transactions, walletName, balance, totalBal, select, date) => {
    id = WalletList.length;
    setWalletList([
      ...WalletList,
      { id, transactions, walletName, balance, totalBal, select, date },
    ]);
  };

  const removeWallet = (index) => {
    setWalletList(WalletList.filter((wallet) => wallet.id !== index));
  };
  return (
    <ListWalletContext.Provider value={{ WalletList, addWallet, removeWallet,chosenWallet, setChosenWallet  }}>
      {props.children}
    </ListWalletContext.Provider>
  );
};
export default ListWalletContextProvider;
