import "./Header.css";
import { Navbar } from "../Navbar/Navbar.jsx";
import Avatar from "../Avatar/Avatar";
import { avatarImages } from "../../constants/AvatarImages";
const Header = () => {
  return (
    <header style={{ padding: "15px 25px" }}>
      <div className="logo">Logo</div>
      <Navbar />
  <Avatar source={avatarImages[1]}/>
    </header>
  );
};

export default Header;
