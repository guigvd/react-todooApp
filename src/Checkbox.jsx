const Checkbox = ({ checked = false, onClick }) => {
  return (
    <div onClick={onClick}>
      {!checked && (
        <div className="checkbox unchecked">
          <i className="fa-regular fa-square"></i>
        </div>
      )}
      {checked && (
        <div className="checkbox checked">
          <i className="fa-solid fa-square-check"></i>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
