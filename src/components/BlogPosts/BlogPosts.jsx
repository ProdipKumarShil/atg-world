import { Button } from "bootstrap";
import Nav from "react-bootstrap/Nav";
import dropdown from "../../assets/icons/dropdown.svg";
import group from "../../assets/icons/group.svg";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../BlogCard/BlogCard";
import pen from "../../assets/icons/pen.svg";
import location from "../../assets/icons/location.svg";
import info from '../../assets/icons/info.svg'

const BlogPosts = () => {
  return (
    <div className="container p-0 blogPostMargin">
      <div className=" justify-content-between align-items-center d-none d-md-flex">
        <Nav className="" variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">All Posts(32)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Article</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Event</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Education</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Job</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="fw-bold">
          <button className=" btn btn-secondary fw-semibold text-black">
            Write a Post
            <img src={dropdown} alt="" />
          </button>
          <button className=" btn btn-primary fw-semibold ms-2">
            <img src={group} alt="" />
            Join Group
          </button>
        </div>
      </div>
      <hr className=""/>

      <div className="blogPostCardContainer">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-8 ">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            <div className="col-md-4 d-none d-md-block padding-left-50 align-items-center">
              <div className="d-flex justify-content-between mt-50">
                <div className="d-flex column-gap-1 ">
                  <img src={location} alt="" />
                  <p className="margin-0">Noida, India</p>
                </div>
                <img src={pen} alt="" />
              </div>
              <hr />

              <div className="d-flex align-items-start column-gap-1">
                <img className="p-1" src={info} alt="" />
                <p className="margin-0">
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
