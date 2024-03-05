import PropTypes from "prop-types";

const ToggleCheckBox = (props) => {
  const { text } = props;
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <p className="label-text text-slate-200">{text}</p>
        <input type="checkbox" className={`toggle toggle-xs bg-transparent`} />
      </label>
    </div>
  );
};

ToggleCheckBox.propTypes = { text: PropTypes.string };

export default ToggleCheckBox;
