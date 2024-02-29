import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  //to access data inside store:useSelector hook
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const cartlist = useSelector((state) => state.cartReducer)
  console.log("====wishlist array ===========");
  console.log(wishlistArray);
  console.log("================================");
  console.log(cartlist);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-info position-fixed top-0 w-100"
        style={{ zIndex: "1" }}
      >
        <Container>
          <Navbar.Brand href="/home">
            <img
              height={"30px"}
              className="me-3"
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctcC5wbmc.png"
              alt=""
            />
            <span style={{ color: "white", fontFamily: "fantasy", letterSpacing: "3px", fontSize: "30px" }}>E-KART</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="btn border rounded border-black me-3">
                <Link
                  to={"/wishlist"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontFamily: "cursive",
                  }}
                >
                  wishlist<Badge bg="danger" style={{ color: "white", fontSize: "13px" }}>{wishlistArray.length}</Badge>
                </Link>{" "}
              </Nav.Link>

              <Nav.Link
                className="btn border rounded border-black">
                <Link
                  to={"/kart"}
                  style={{
                    width: "100px",
                    fontFamily: "cursive",
                    color: "black",
                    textDecoration: "none"
                  }} >

                  <i class="fa-solid fa-cart-shopping"></i>cart
                  <Badge bg="danger" style={{ color: "white", fontSize: "13px" }}>{cartlist?.length}</Badge>
                </Link>   {" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
