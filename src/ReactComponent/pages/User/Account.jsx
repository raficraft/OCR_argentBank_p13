import Style from "./User.module.scss";

const Account = ({ account, balance, message }) => {
  return (
    <section className={Style["account"]}>
      <div className={Style["account-content-wrapper"]}>
        <h3 className={Style["account-title"]}>{account}</h3>
        <p className={Style["account-amount"]}>${balance}</p>
        <p className={Style["account-amount-description"]}>{message}</p>
      </div>
      <div className={Style["account-content-wrapper"] && Style["cta"]}>
        <button className={Style["transaction-button"]}>
          View transactions
        </button>
      </div>
    </section>
  );
};

export default Account;
