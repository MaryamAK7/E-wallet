import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ListWalletContext } from "../../Context/ListWalletContext";
import { Modal } from "react-bootstrap";
import "./WalletForm.css";

export default function WalletForm({ show, setShow, onHide }) {
  let history = useHistory();
  const { addWallet } = useContext(ListWalletContext);

  const opts = [
    { key: "$", value: "$", text: "Dollar $" },
    { key: "lbp", value: "LBP", text: "Lebanese Pound LBP" },
  ];
  const [walletName, setWalletName] = useState("");
  const [balance, setBalance] = useState('');
  const [select, setSelect] = useState('$');

  const handleNameInput = (e) => {
    setWalletName(e.target.value);
  };
  const handleBalance = (e) => {
    setBalance(e.target.value);
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let d = new Date() ;
    addWallet(3, [], walletName, parseInt(balance),  parseInt(balance), select, d.toDateString());
    setWalletName("");
    setShow(false);
    setBalance();
    setSelect("$");
    history.push("/wallets/");
  };
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={onHide}
        className="modal-bg-style"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Wallet
          </Modal.Title>
        </Modal.Header>

        <form onSubmit={onSubmit}>
          <Modal.Body>
            <table className="table-form-styling">
              <tr>
                <td>
                  <span className="label-crte-wlt">
                    <label for="name">Name </label>
                  </span>
                </td>
                <td>
                  <input
                    className="crte-wlt-inp-form"
                    type="text"
                    placeholder="Wallet Name ( required ) "
                    value={walletName}
                    onChange={handleNameInput}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span className="label-crte-wlt">
                    <label for="balance">Starting Balance </label>
                  </span>
                </td>
                <td>
                  <input
                    className="crte-wlt-inp-form"
                    type="number"
                    value={balance}
                    onChange={handleBalance}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <span className="label-crte-wlt">Currency </span>{" "}
                </td>
                <td>
                  <select
                    className='select-curr'
                    onChange={handleSelect}
                    required
                  >
                    {
                      opts.map((opt) => <option value={opt.value}> {opt.text} </option>)
                    }
                  </select>
                </td>
              </tr>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <button className="create-wlt-btn-modal" type="submit">
              Create Wallet
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
