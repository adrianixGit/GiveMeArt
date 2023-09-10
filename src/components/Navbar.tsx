import { StyledNavbar } from "../styles/Navbar.styled";
import menu from "../assets/menu.svg";
import save from "../assets/save.svg";
import cart from "../assets/cart.svg";
import user from "../assets/user.svg";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <img src={menu} />
      </div>
      <div>
        <img src={save} />
        <img src={cart} />
        <img src={user} />
      </div>
    </StyledNavbar>
  );
};
