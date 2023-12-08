import React, { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import loginImg from "../../assets/login.png";
import fb from "../../assets/social/fb.png";
import google from "../../assets/social/google.png";
import { AuthContext } from '../../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const LoginModal = ({ loginModal, setLoginModal }) => {
  const { googleSignUp, emailLogin, setUser } = useContext(AuthContext);

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((res) => {
        console.log(res);
        console.log(res.user);
        toast.success('Login successful!')
        setLoginModal(false)
      })
      .catch((e) => console.log(e));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value

    emailLogin(email, password)
      .then(res => {
        toast.success('Login successful')
        setUser(res.user)
        setLoginModal(false)
      })
      .catch(e => {
        toast.error('Something went wrong', e.message)
      })
  };

  return (
    <>
      <Modal
        size="lg"
        show={loginModal}
        onHide={() => setLoginModal(false)}
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
              <p className="formHeader">Sign In</p>
              <form onSubmit={handleSignIn}>
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

                <Button
                  type="submit"
                  variant="primary"
                  className="createAccBtn">
                  Sign In
                </Button>
              </form>
              {/* social btn */}
              <button className="btn socialBtn d-flex justify-content-center border align-items-center gap-1 w-100 mb-1">
                <img src={fb} alt="" />
                <span>Sign up with Facebook</span>
              </button>
              <button
                onClick={handleGoogleSignUp}
                className="btn socialBtn d-flex justify-content-center border align-items-center gap-1 w-100">
                <img src={google} alt="" />
                <span>Sign up with Google</span>
              </button>
              <p className="forgotPass">Forgot Password?</p>
            </div>
            <div className="d-none d-md-block col-md-6 ">
              <p className="signInPara">
                Already have an account? <span>Sign In</span>
              </p>
              <img src={loginImg} alt="" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};