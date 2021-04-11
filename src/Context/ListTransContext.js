import React, { createContext, useState } from "react";

export const ListTransContext = createContext();

const ListTransContextProvider = (props) => {
  const [TransList, setTransList] = useState([]);

  const addTrans = (id, walletName, amount,type, noteTrans, tagTrans, date) => {
    id = TransList.length;
    setTransList([...TransList, { id, walletName, amount,type, noteTrans, tagTrans ,date }]);
  };

  const removeTrans = (id) => {
    setTransList(TransList.filter((transaction) => transaction.id !== id));
    
  };
  return (
    <ListTransContext.Provider value={{ TransList, addTrans, removeTrans }}>
      {props.children}
    </ListTransContext.Provider>
  );
};
export default ListTransContextProvider;
