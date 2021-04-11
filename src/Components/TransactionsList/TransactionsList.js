import React, { useContext } from "react";
import wage from './wage.png'
import "./TransactionsList.css";
import { ListWalletContext } from "../../Context/ListWalletContext";
import { ListTransContext } from "../../Context/ListTransContext";

export default function TransactionsList({bl, setBl}) {

  const { chosenWallet } = useContext(ListWalletContext);
  const { TransList, removeTrans } = useContext(ListTransContext);

  let allTags = [];
  const handleRemove = (id, am) => {
    removeTrans(id);
    setBl( prv => prv+(-1)*am)
  }
  return (
    <div>
      {TransList.filter((trans) => trans.walletName === chosenWallet.walletName).map(
        (transaction, i) => {
          allTags = transaction.tagTrans.split(",");
          return (
            <div className="trans-list note-trans-item-flex animate__animated animate__slideInDown animate__faster trans-list-div-parent" id={i}>
                <div className="trans-item">
                  <div className='icon-ctr'> 
                    <div> 
                    <img src={wage} alt='wage' className='wage-icon'/>
                    </div>
                    <div> 
                      <h3 className="trans-amount">
                          {transaction.noteTrans}
                      </h3>
                      <div className='tags-list' > 
                        {allTags.map(
                          (tag) =>
                            allTags.length !== 0 && (
                              <div className='tags-item'> 
                                {tag}
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='trs-date'> 
                    {transaction.date}
                  </div>
                  <h3 className="trans-amount">
                    {chosenWallet.select}{transaction.amount}
                  </h3>
                  <div className='trash-icon' onClick={() => handleRemove(transaction.id,transaction.amount)}> 
                    <i class="times icon"/>
                  </div>
                </div>
              </div>
          );
        }
        )}
    </div>
  );
}
