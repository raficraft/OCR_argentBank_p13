import Style from "./EditUser.module.scss";
/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {object} callOrigin
 * @returns
 */

const EditUser = ({ firstName, lastName, callOrigin }) => {
  console.log(typeof callOrigin);

  return (
    <form class={Style.form_edit_user}>
      <div class={Style.input_bloc}>
        <input type="text" placeholder={firstName}></input>
        <input type="text" placeholder={lastName}></input>
      </div>
      <div class={Style.input_bloc}>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
};

export default EditUser;
