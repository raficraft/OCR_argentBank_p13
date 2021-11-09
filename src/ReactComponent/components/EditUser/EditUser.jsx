import { useRef } from "react";
import { connect } from "react-redux";
import { setUserData } from "../../../Redux/middleWare/setUserData";
import Style from "./EditUser.module.scss";
/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns
 */

const EditUser = ({ user, token, setUserData, shazam, isToggle }) => {
  const inputFirstNameChange = useRef();
  const inputLastNameChange = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const request = {
      method: "PUT",
      endPoints: "profile",
      body: {
        firstName: inputFirstNameChange.current.value,
        lastName: inputLastNameChange.current.value,
      },
      token: token,
    };
    setUserData(request);
  };

  return (
    <form
      className={Style.form_edit_user}
      onSubmit={handleSubmit}
      style={{ display: isToggle ? "flex" : "none" }}
    >
      <div className={Style.input_bloc}>
        <input
          type="text"
          placeholder={user.firstName}
          ref={inputFirstNameChange}
        ></input>
        <input
          type="text"
          placeholder={user.lastName}
          ref={inputLastNameChange}
        ></input>
      </div>
      <div className={Style.input_bloc}>
        <button type="submit">Save</button>
        <button type="button" onClick={() => shazam(true, true)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = ({ token, user }) => {
  return {
    token,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (...args) => dispatch(setUserData(...args)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
