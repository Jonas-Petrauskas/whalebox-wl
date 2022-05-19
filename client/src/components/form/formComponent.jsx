import "./formComponent.scss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CountdownTimer from "../countDownTimer/countDownComponent";
import moment from "moment";
import Stats from "../statistics/statsComponent";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createTable } from "../../graphql/mutations";

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

const dateNow = moment().format("MMM Do, YYYY h:mm");
const id = Math.random().toString(36).substring(2);

function FormComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const createItem = async (data) => {
    try {
      const item = {
        id: id,
        walletAddress: data.walletAddess,
        accessCode: data.accessCode,
        timestamp: dateNow,
      };
      await API.graphql(graphqlOperation(createTable, { input: item }));
      reset({
        walletAddess: "",
        accessCode: "",
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 500);
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(createItem)}>
        <div className="form-timer">
          <CountdownTimer />
        </div>
        <div className="form-wrapper">
          <div className="form-text__container">
            <h2>WHITELIST FORM</h2>
            <p>
              Put in your eth wallet, enter the access code and apply for a
              spot. Do not forget to check your winnings.
            </p>
          </div>
          <div className="inputs-wrapper">
            <div className="input-walletAddess__container">
              <label>ETH WALLET ADDRESS</label>
              <input
                className="input-wallet-address"
                type="walletAddess"
                placeholder="0x9168DAe2296d9Ee5aaF438cf23c4130a815bAC61"
                {...register("walletAddess", {
                  required: "This is required",
                  minLength: {
                    value: 42,
                    message: "Wallet addess is too short",
                  },
                  maxLength: {
                    value: 42,
                    message: "Wallet addess is too long",
                  },
                })}
              />
              {errors.walletAddess && (
                <p className="error-message">{errors.walletAddess.message}</p>
              )}
            </div>
            <div className="input-accessCode__container">
              <label>ACCESS CODE</label>
              <input
                className="input-access-code"
                type="accessCode"
                placeholder="ARCANUM50"
                {...register("accessCode", {
                  required: "This is required",
                  minLength: { value: 9, message: "Access code is too short" },
                  maxLength: { value: 9, message: "Access code is too long" },
                })}
              />
              {errors.accessCode && (
                <p className="error-message">{errors.accessCode.message}</p>
              )}
            </div>
            <button
              onClick={() => {
                incrementCount();
              }}
              type="submit"
            >
              APPLY
            </button>
          </div>
        </div>
      </form>
      <Stats count={count} />
    </div>
  );
}

export default FormComponent;
