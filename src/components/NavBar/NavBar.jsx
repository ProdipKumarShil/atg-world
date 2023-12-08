import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import search from "../../assets/icons/search.svg";
import banner from "../../assets/banner.png";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from "../../../provider/AuthProvider";
import { RegisterModal } from "../Modal/RegisterModal";
import { LoginModal } from "../Modal/LoginModal";

const NavBar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(res => {
        toast.success('Successfully logged out!')
      })
      .catch(e => console.log(e))
  }

  return (
    <div className="">
      <Navbar className="bg-body-tertiary d-none d-md-block">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top navLogo img-fluid"
              alt="blog logo"
            />
          </Navbar.Brand>
          <div className="searchBarContainer">
            <img src={search} alt="" />
            <input
              className="navSearchBar"
              placeholder="Search for your favorite groups in ATG"
              type="text"
            />
          </div>
          <Navbar.Toggle aria-controls="navbar-dark-example" />

          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={user ? user.displayName : 'Create account. It’s free!'}
                menuVariant="dark">
                {!user && (
                  <>
                    <NavDropdown.Item href="#action/3.1">
                      <p onClick={() => setLoginModal(true)}>Login</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <p onClick={() => setRegisterModal(true)}>register</p>
                    </NavDropdown.Item>
                  </>
                )}
                {user && (
                  <NavDropdown.Item href="#action/3.1">
                    <p onClick={handleLogOut}>logout</p>
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* banner */}
      <div className="homeBanner position-relative">
        <img className="img-fluid" src={banner} alt="" />
        <div className="container textContainer position-absolute bannerText d-none d-md-block">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      <RegisterModal
        setRegisterModal={setRegisterModal}
        registerModal={registerModal}
      />
      <Toaster />
    </div>
  );
};

export default NavBar;
