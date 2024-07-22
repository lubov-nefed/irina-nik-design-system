interface IPasswordStrength {
  state: "unset" | "weak" | "medium" | "good" | "great";
}

const PasswordStrength: React.FC<IPasswordStrength> = (props) => {
  return (
    <>
      <div className="password-strength">
        <div className="strength-item password-strength--weak"></div>
        <div className="strength-item"></div>
        <div className="strength-item"></div>
        <div className="strength-item"></div>
      </div>
      <p>{props.state}</p>
    </>
  );
};

export { PasswordStrength };
