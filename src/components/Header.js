import { BiImageAdd } from "react-icons/bi";

const Header = ({ handleOpenModal }) => {
  return (
    <div className="header">
      <h2>Image Repository</h2>
      <BiImageAdd
        className="add-icon"
        style={{ fontSize: 40 }}
        value="Upload"
        onClick={handleOpenModal}
      />
    </div>
  );
};

export default Header;
