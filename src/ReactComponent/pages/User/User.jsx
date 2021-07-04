import Account from "./Account";
import Style from "./User.module.scss";

const User = (props) => {
  console.log("props user", props);

  const accountData = [
    {
      account: "Argent Bank Checking (x8349)",
      balance: "2082.79",
      message: "Available Balance",
    },

    {
      account: "Argent Bank Savings (x6712)",
      balance: "10.928.42",
      message: "Available Balance",
    },

    {
      account: "Argent Bank Credit Card (x8349)",
      balance: "184.30",
      message: "View transactions",
    },
  ];

  return (
    <main className="main bg-dark">
      <div className={Style["header"]}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className={Style["edit-button"]}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

      {accountData.map((val, key) => (
        <Account
          key={key}
          account={val.account}
          balance={val.balance}
          message={val.message}
        />
      ))}
    </main>
  );
};



export default User;
