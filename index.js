import "./formComponent.scss";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountdownTimer from "../countDownTimer/countDownComponent";
import moment from "moment";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../../graphql/mutations";

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

const dateNow = moment().format("MMM Do YYYY, h:mm");
console.log(typeof dateNow);
const id = Math.random().toString(36).substring(2);
const initialState = {
  id: id,
  walletAddress: "",
  accessCode: "",
  timestamp: dateNow,
};

function FormComponent() {
  const [formState, setFormState] = useState(initialState);
  const [items, setItems] = useState([]);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  const createItem = async (data) => {
    // const item = {
    //   id: id,
    //   walletAddress: data.walletAddess,
    //   accessCode: data.accessCode,
    //   timestamp: dateNow,
    // };
    try {
      if (!data.walletAddress || !data.accessCode) return;
      const item = { ...formState };
      setInput([...items, item]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: item }));
      // reset({
      //   walletAddess: "",
      //   accessCode: "",
      // });
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  return (
    <form>
      <div className="form-timer">
        <CountdownTimer />
      </div>
      <div className="form-wrapper">
        <div className="form-text__container">
          <h2>WHITELIST FORM</h2>
          <p>
            Put in your eth wallet, enter the access code and apply for a spot.
            Do not forget to check your winnings.
          </p>
        </div>
        <div className="inputs-wrapper">
          <div className="input-walletAddess__container">
            <label>ETH WALLET ADDRESS</label>
            <input
              onChange={(event) =>
                setInput("walletAddress", event.target.value)
              }
              value={formState.walletAddress}
              className="input-wallet-address"
              type="walletAddess"
              placeholder="0x9168DAe2296d9Ee5aaF438cf23c4130a815bAC61"
              // {...register("walletAddess", {
              //   required: "This is required",
              //   minLength: { value: 42, message: "Wallet addess is too short" },
              //   maxLength: { value: 42, message: "Wallet addess is too long" },
              // })}
            />
            {/* {errors.walletAddess && (
              <p className="error-message">{errors.walletAddess.message}</p>
            )} */}
          </div>
          <div className="input-accessCode__container">
            <label>ACCESS CODE</label>
            <input
              onChange={(event) => setInput("accessCode", event.target.value)}
              value={formState.accessCode}
              className="input-access-code"
              type="accessCode"
              placeholder="ARCANUM50"
              // {...register("accessCode", {
              //   required: "This is required",
              //   minLength: { value: 9, message: "Access code is too short" },
              //   maxLength: { value: 9, message: "Access code is too long" },
              // })}
            />
            {/* {errors.accessCode && (
              <p className="error-message">{errors.accessCode.message}</p>
            )} */}
          </div>
          <button type="submit" onClick={createItem}>
            APPLY
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormComponent;
