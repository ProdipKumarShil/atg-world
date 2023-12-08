import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import loginImg from "../../assets/login.png";
import fb from "../../assets/social/fb.png";
import google from "../../assets/social/google.png";

export const RegisterModal = ({ registerModal, setRegisterModal }) => {
  const { googleSignUp, emailSignUp, updateUser, setUser } = useContext(AuthContext);

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((res) => {
        console.log(res);
        console.log(res.user);
        toast.success('Login successful!')
        setRegisterModal(false)
      })
      .catch((e) => console.log(e));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.firstName.value + " " + form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    emailSignUp(email, password)
      .then(res => {
        toast.success('Signup successful!')
        const userInfo = {displayName: name}
        updateUser(userInfo)
        setUser(res.user)
        setRegisterModal(false)
      })
      .catch(e => toast.error('Something went wrong', e.message))
  };
  
  return (
    <>
      <Modal
        size="lg"
        show={registerModal}
        onHide={() => setRegisterModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered>
        {/* <button className="btn-close" aria-label="Close" onClick={() => setLoginModal(false)}></button> */}
        <div className="modalHeader d-none d-md-block">
          <p className="margin-0">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <Modal.Body>
          <div className="row modalBody">
            <div className="col-12 col-md-6 ">
              <p className="formHeader">Create Account</p>
              <form onSubmit={handleSignUp}>
                <InputGroup className="">
                  <Form.Control
                    aria-label="First name"
                    placeholder="First Name"
                    name="firstName"
                  />
                  <Form.Control
                    aria-label="Last name"
                    placeholder="Last Name"
                    name="lastName"
                  />
                </InputGroup>
                <Form.Control
                  aria-label="email"
                  placeholder="Email"
                  name="email"
                />
                <Form.Control
                  aria-label="password"
                  placeholder="Password"
                  name="password"
                />
                <Form.Control
                  aria-label="confirm password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="createAccBtn">
                  Create Account
                </Button>
              </form>
              {/* social btn */}
              <button className="btn socialBtn d-flex justify-content-center border align-items-center gap-1 w-100 mb-1">
                <img src={fb} alt="" />
                <span>Sign up with Facebook</span>
              </button>
              <button onClick={handleGoogleSignUp} className="btn socialBtn d-flex justify-content-center border align-items-center gap-1 w-100">
                <img src={google} alt="" />
                <span>Sign up with Google</span>
              </button>
            </div>
            <div className="d-none d-md-block col-md-6 ">
              <p className="signInPara">
                Already have an account? <span>Sign In</span>
              </p>
              <img src={loginImg} alt="" />
              <p className="privacyPara">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};