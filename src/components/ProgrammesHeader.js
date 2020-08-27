import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function ProgrammesHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Programmes and Scholarships</h1>
            {/* <div className="text-center">
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button>
            </div> */}
            {/* <div className="content">
              <div className="social-description">
                <h2>26</h2>
                <p>Internships</p>
              </div>
              <div className="social-description">
                <h2>26</h2>
                <p>Scholarships</p>
              </div>
              <div className="social-description">
                <h2>48</h2>
                <p>Sponsors</p>
              </div>
            </div> */}
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProgrammesHeader;
