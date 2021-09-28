import PropTypes from "prop-types";
const Profile = (props) => {
  return (
    <div>
      <div style={{ backgroundColor: "steelblue" }}>{props.children}</div>
      <button onClick={() => props.alertMyName(props.fullName)}>ClickMe</button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "khalil",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  alertMyName: PropTypes.func,
};

export default Profile;
