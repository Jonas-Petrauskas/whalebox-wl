import "./formComponent.scss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CountdownTimer from "../countDownTimer/countDownComponent";

function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
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
              className="input-wallet-address"
              type="walletAddess"
              placeholder="0x9168DAe2296d9Ee5aaF438cf23c4130a815bAC61"
              {...register("walletAddess", {
                required: "This is required",
                minLength: { value: 42, message: "Wallet addess is too short" },
                maxLength: { value: 42, message: "Wallet addess is too long" },
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
              {...register("accessCode")}
            />
          </div>
          <button type="submit">APPLY</button>
        </div>
      </div>
    </form>
  );
}

export default FormComponent;
