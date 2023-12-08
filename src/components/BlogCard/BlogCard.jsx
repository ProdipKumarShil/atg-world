import postImg1 from "../../assets/post1.png";
import menu from "../../assets/icons/menu.svg";
import eye from "../../assets/icons/eye.svg";
import share from "../../assets/icons/share.svg";
import profile from "../../assets/blogProfile.png";
import { Dropdown } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const BlogCard = () => {
  return (
    <div className="card mb-3">
      <img src={postImg1} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="fw-bold">✍️ Article</p>
        <div className="d-flex align-items-start">
          <h5 className="card-title  flex-grow-1 card-title">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h5>
          <DropDownMenu />
        </div>
        <p className="card-text p-color">
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
        {/* blog info */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex column-gap-3 align-items-center">
            <img src={profile} alt="" />
            <p className="card-profile-img">Sarthak Kamra</p>
          </div>
          <div className="d-flex align-items-center column-gap-3">
            <div className="d-flex align-items-center column-gap-1">
              <img src={eye} alt="" />
              <p className="view-paragraph margin-0 ">1.4k views</p>
            </div>
            <button className="btn btn-secondary">
              <img src={share} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

const DropDownMenu = () => {
  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle id="dropdown-custom-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none">
          <g clipPath="url(#clip0_1_949)">
            <path
              d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_949">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(28) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu className="super-colors">
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
