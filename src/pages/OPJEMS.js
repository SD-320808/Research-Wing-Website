import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/scholarshipHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";

export default function Opjems() {
  const [pills, setPills] = React.useState("1");
  const [blog, setBlog] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.title = "OPJEMS | Scholarships";
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="wrapper">
        <ProfilePageHeader title={"OPJEMS 2020"} />
        <div className="section">
          <Container>
            <div className="button-container"></div>

            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">OPJEMS Award Details</h4>
                <div className="nav-align-center">
                  {/* <Nav
                                        className="nav-pills-info nav-pills-just-icons"
                                        pills
                                        role="tablist"
                                    > */}
                  <Nav
                    className="justify-content-center"
                    tabs
                    role="tablist"
                  // data-background-color="blue"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        {/* <i className="now-ui-icons design_image"></i> */}
                        GENERAL INFORMATION
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        {/* <i className="now-ui-icons location_world"></i> */}
                        BLOGS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        {/* <i className="now-ui-icons sport_user-run"></i> */}
                        FAQs
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }} */}
                    {/* > */}
                    {/* <i className="now-ui-icons sport_user-run"></i> */}
                    {/* RESOURCES
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                </div>
              </Col>
            </Row>
            <Row>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <div>
                    <h1
                      dir="ltr"
                      style={{
                        lineHeight: "1.476923076923077",
                        textAlign: "justify",
                        backgroundColor: "#ffffff",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "19.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Objective
                      </span>
                    </h1>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        backgroundColor: "#ffffff",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                        padding: "10pt 0pt 10pt 0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Shri O.P. Jindal was a visionary par excellence. He
                        inspired millions to follow their dreams. His ability to
                        foresee development and the commitment to build a
                        self-reliant nation created a paradigm shift in India’s
                        industrial scenario. With this patriotic zeal, he laid
                        the foundation of O. P. Jindal Group - one of India’s
                        largest business conglomerates with presence across
                        various core sectors of the Indian economy.
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        backgroundColor: "#ffffff",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                        padding: "0pt 0pt 10pt 0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        His legacy and the vision of inclusive growth are being
                        carried forward by the O. P. Jindal Group companies
                        through various initiatives in education &amp;
                        vocational training, healthcare and community
                        development activities across the country. In 2007, the
                        Group instituted the O.P. Jindal Engineering and
                        Management Scholarships (OPJEMS).&nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        These scholarships are aimed at promoting academic and
                        leadership excellence and are awarded to meritorious
                        students who emulate the vision and values of Shri O. P.
                        Jindal and have the potential to become leaders in
                        entrepreneurial excellence and innovation.
                      </span>
                    </p>
                    <h1
                      dir="ltr"
                      style={{
                        lineHeight: "1.476923076923077",
                        textAlign: "justify",
                        backgroundColor: "#ffffff",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "19.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Frequency
                      </span>
                    </h1>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        backgroundColor: "#ffffff",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                        padding: "10pt 0pt 10pt 0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        &nbsp;Every year, 100 students from 40 premier
                        engineering and management institutions are awarded. In
                        last &nbsp;5 years, more than 500 students have been
                        awarded with this coveted scholarship.The student who
                        already get this scholarship earlier or the student
                        getting any other scholarship can also apply.
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        backgroundColor: "#ffffff",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                        padding: "0pt 0pt 10pt 0pt",
                      }}
                    >
                      &nbsp;
                    </p>
                    <h1
                      dir="ltr"
                      style={{
                        lineHeight: "1.476923076923077",
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "19.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Eligibility Criterion
                      </span>
                    </h1>
                    <h3
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Nomination Criteria&nbsp;
                      </span>
                    </h3>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        The nominations for the scholarship test will be taken
                        based on the following eligibility criteria:
                      </span>
                    </p>
                    <h3
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        1. Engineering Institutes&nbsp;
                      </span>
                    </h3>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        First three toppers from each year of the following
                        streams of engineering:
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        a. Civil Engineering
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        b. Electrical Engineering
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        c. Mechanical Engineering
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        d. Metallurgical Engineering
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        The selection of students from 1st year will be based on
                        the entrance exam ranking considered by college at the
                        time of the selection.
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        The selection of students from 2nd, 3rd and 4th year
                        will be based on the academic performance of the
                        previous year.
                      </span>
                    </p>
                    <h3
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        2. Management Institutes
                      </span>
                    </h3>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        First ten toppers from each year of management
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        a. 1st year students: entrance exam ranking considered
                        by college at the time of the admission
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.4727272727272727",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        b. 2nd, 3rd, and 4th year students based on the academic
                        performance of the previous year
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <h1
                      dir="ltr"
                      style={{
                        lineHeight: "1.476923076923077",
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "19.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Process of Selection
                      </span>
                    </h1>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.7999999999999998",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        The plan for the scholarship is mentioned in the table
                        below along with the timelines:
                      </span>
                    </p>
                    <div align="left" dir="ltr" style={{ marginLeft: "0pt" }}>
                      <table
                        style={{ border: "none", borderCollapse: "collapse" }}
                      >
                        <tbody>
                          <tr style={{ height: "40.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "center",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  S. No
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Test Phase
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Description of Phase
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Assesment Criteria&nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Timeline
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "109.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "center",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  1
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Phase 1
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.7999999999999998",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "2pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.7999999999999998",
                                  textAlign: "justify",
                                  marginTop: "2pt",
                                  marginBottom: "2pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Business Proposals:
                                </span>
                              </p>
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.7999999999999998",
                                  textAlign: "justify",
                                  marginTop: "2pt",
                                  marginBottom: "2pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Presenting an innovative and sustainable
                                  solution to the problems faced by India.
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Parameters for assessments:
                                </span>
                              </p>
                              <br />
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  a. Thoroughness of the proposal
                                </span>
                              </p>
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  b. Innovation of the solution proposed
                                </span>
                              </p>
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  c. Feasibility of the solution
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  15th September 2020
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "174.25pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "center",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  2
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Phase 1
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Online Test&nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <ul style={{ marginTop: 0, marginBottom: 0 }}>
                                <li
                                  dir="ltr"
                                  style={{
                                    listStyleType: "disc",
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre",
                                  }}
                                >
                                  <p
                                    dir="ltr"
                                    style={{
                                      lineHeight: "1.4727272727272727",
                                      textAlign: "justify",
                                      marginTop: "0pt",
                                      marginBottom: "0pt",
                                      padding: "2.25pt 0pt 2.25pt 0pt",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "9pt",
                                        fontFamily: "Arial",
                                        color: "#414042",
                                        backgroundColor: "transparent",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontVariant: "normal",
                                        textDecoration: "none",
                                        verticalAlign: "baseline",
                                        whiteSpace: "pre-wrap",
                                      }}
                                    >
                                      Stage 1: Behavioral test to determine your
                                      leadership competencies
                                    </span>
                                  </p>
                                </li>
                                <li
                                  dir="ltr"
                                  style={{
                                    listStyleType: "disc",
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre",
                                  }}
                                >
                                  <p
                                    dir="ltr"
                                    style={{
                                      lineHeight: "1.4727272727272727",
                                      textAlign: "justify",
                                      marginTop: "0pt",
                                      marginBottom: "12pt",
                                      padding: "2.25pt 0pt 2.25pt 0pt",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "9pt",
                                        fontFamily: "Arial",
                                        color: "#414042",
                                        backgroundColor: "transparent",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontVariant: "normal",
                                        textDecoration: "none",
                                        verticalAlign: "baseline",
                                        whiteSpace: "pre-wrap",
                                      }}
                                    >
                                      Stage 2: General Awareness Test about OP
                                      Jindal Group (based on information
                                      available on websites of respective
                                      companies of OP Jindal Group)
                                    </span>
                                  </p>
                                </li>
                              </ul>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <br />
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Test Date &amp; Duration: One-hour test to be
                                  scheduled between
                                </span>
                              </p>
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  18th &amp; 19th September 2020
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "82pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "center",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  3
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Phase 2&nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.7999999999999998",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "2pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.7999999999999998",
                                  textAlign: "justify",
                                  marginTop: "2pt",
                                  marginBottom: "2pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Interviews:
                                </span>
                              </p>
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.7999999999999998",
                                  textAlign: "justify",
                                  marginTop: "2pt",
                                  marginBottom: "2pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Assessing candidates ability on various
                                  parameters
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  The candidates will be shortlisted for
                                  interviews on the basis of cumilative score of
                                  Phase 1 &amp; 2. Interviews will be conducted
                                  virtually over a video call by a panel of
                                  experts from various industries.
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <br />
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  19th-23rd October 2020
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "40.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "center",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  4
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Phase 3
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Result Declaration
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #000000 0.75pt",
                                borderRight: "solid #000000 0.75pt",
                                borderBottom: "solid #000000 0.75pt",
                                borderTop: "solid #000000 0.75pt",
                                verticalAlign: "top",
                                padding: "5pt 5pt 5pt 5pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "9pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  31st October 2020 (Saturday)
                                </span>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <h1
                      dir="ltr"
                      style={{
                        lineHeight: "1.476923076923077",
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "19.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Important Dates
                      </span>
                    </h1>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <div align="left" dir="ltr" style={{ marginLeft: "0pt" }}>
                      <table
                        style={{ border: "none", borderCollapse: "collapse" }}
                      >
                        <tbody>
                          <tr style={{ height: "15.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Date of Launch
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  : 7th August (Friday)
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Last date for providing nominations
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  : 31st August (Monday)
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Last date for registration(Tuesday)
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  : 15th September
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "27pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Last date for submitting business proposal
                                  (Tuesday)
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  : 15th September
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Date of online test (Fri &amp; Sat)
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  : 18th &amp; 19th September
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Declaration of stage I results (Wednesday)
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  : 30th September
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Date of virtual interview (Mon-Fri)
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  : 19th October -23rd October
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15.75pt" }}>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Declaration of final results
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                borderLeft: "solid #cccccc 0.75pt",
                                borderRight: "solid #cccccc 0.75pt",
                                borderBottom: "solid #cccccc 0.75pt",
                                borderTop: "solid #cccccc 0.75pt",
                                verticalAlign: "bottom",
                                padding: "2pt 2pt 2pt 2pt",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.4727272727272727",
                                  textAlign: "justify",
                                  marginTop: "10pt",
                                  marginBottom: "10pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  : 31st October (Saturday)
                                </span>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <h1
                      dir="ltr"
                      style={{
                        lineHeight: "1.476923076923077",
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "19.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Guidelines &amp; Instructions:Business Proposal
                      </span>
                    </h1>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.2",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        India's diverse economy encompasses traditional village
                        farming, modern agriculture, handicrafts, a wide range
                        of modern industries, and a multitude of services.
                        Slightly less than half of the workforce is in
                        agriculture, but manufacturing and services are the
                        major source of economic growth. Despite the current
                        slow-down in the Indian economy, the long-term growth
                        perspective is positive due to its young population,
                        English proficiency, corresponding low dependency ratio,
                        healthy household savings, investment rates, and
                        increasing integration into the global economy.
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.2",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        One of the major contributors to India’s long term
                        growth have been the pool of&nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "italic",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Visionaries with Values
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        &nbsp;- the Indian corporate leaders, innovators,
                        entrepreneurs and industrialists. One such Man whose
                        “People first’’ approach remained at the heart of his
                        industrial activities was&nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Shri OP Jindal
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        . With a vision to make&nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        India a self-reliant country
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        &nbsp;in every sector of the industry, Shri OP Jindal
                        epitomized Gandhiji’s view of&nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        “business as a trust in the hands of entrepreneurs on
                        behalf of society.”
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        &nbsp;During his entire life, he was committed to social
                        responsibility and welfare of people by placing equal
                        emphasis on the development of physical infrastructure,
                        such as roads, telecommunication services and transport
                        facilities, as well as social infrastructure to build
                        the nation.
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.2",
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        We are in search of&nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        such ambitious and passionate scholars
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        &nbsp;who emulate similar vision as&nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Bauji
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        &nbsp;and help solve the problems faced by India in 21st
                        century. As a first phase of OPJEMS selection process,
                        we are inviting business cases focusing on solving&nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 700,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        India’s socio-economic problems
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        &nbsp;with innovative solutions. The guidelines to
                        submit the business case are as follows:
                      </span>
                    </p>
                    <ol style={{ marginTop: 0, marginBottom: 0 }}>
                      <li
                        dir="ltr"
                        style={{
                          listStyleType: "decimal",
                          fontSize: "9pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre",
                          marginLeft: "-18pt",
                        }}
                      >
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.2",
                            textAlign: "justify",
                            marginTop: "9pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10pt",
                              fontFamily: "Arial",
                              color: "#414042",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The business case should provide an innovative and a
                            sustainable solution to a major socio-economic
                            problem faced by India in the current times.
                          </span>
                        </p>
                      </li>
                      <li
                        dir="ltr"
                        style={{
                          listStyleType: "decimal",
                          fontSize: "9pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre",
                          marginLeft: "-18pt",
                        }}
                      >
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.2",
                            textAlign: "justify",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10pt",
                              fontFamily: "Arial",
                              color: "#414042",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The solution proposed should adhere to Design
                            Thinking parameters of Desirability, Feasibility,
                            and Viability.
                          </span>
                        </p>
                      </li>
                      <li
                        dir="ltr"
                        style={{
                          listStyleType: "decimal",
                          fontSize: "9pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre",
                          marginLeft: "-18pt",
                        }}
                      >
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.2",
                            textAlign: "justify",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10pt",
                              fontFamily: "Arial",
                              color: "#414042",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The business case can be submitted in any of the
                            following formats:
                          </span>
                        </p>
                        <ol style={{ marginTop: 0, marginBottom: 0 }}>
                          <ol style={{ marginTop: 0, marginBottom: 0 }}>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Presentation/PDF (not more than 10 slides)
                                </span>
                              </p>
                            </li>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Audio/visual (not more than 5 min)
                                </span>
                              </p>
                            </li>
                          </ol>
                        </ol>
                      </li>
                      <li
                        dir="ltr"
                        style={{
                          listStyleType: "decimal",
                          fontSize: "9pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre",
                          marginLeft: "-18pt",
                        }}
                      >
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.2",
                            textAlign: "justify",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10pt",
                              fontFamily: "Arial",
                              color: "#414042",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The business case should include the following:
                          </span>
                        </p>
                        <ol style={{ marginTop: 0, marginBottom: 0 }}>
                          <ol style={{ marginTop: 0, marginBottom: 0 }}>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  An Executive Summary
                                </span>
                              </p>
                            </li>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Objective of the case
                                </span>
                              </p>
                            </li>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Background information about the problem for
                                  which the solution is proposed
                                </span>
                              </p>
                            </li>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Specific and clear description of the solution
                                  proposed
                                </span>
                              </p>
                            </li>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Benefits, limitations and associated risks
                                  related to the solution proposed
                                </span>
                              </p>
                            </li>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Financial forecast to ensure that every cost
                                  associated to the project is considered and
                                  the project is affordable
                                </span>
                              </p>
                            </li>
                            <li
                              dir="ltr"
                              style={{
                                listStyleType: "lower-roman",
                                fontSize: "10pt",
                                fontFamily: "Arial",
                                color: "#414042",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre",
                              }}
                            >
                              <p
                                dir="ltr"
                                style={{
                                  lineHeight: "1.2",
                                  textAlign: "justify",
                                  marginTop: "0pt",
                                  marginBottom: "0pt",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "10pt",
                                    fontFamily: "Arial",
                                    color: "#414042",
                                    backgroundColor: "transparent",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                    whiteSpace: "pre-wrap",
                                  }}
                                >
                                  Proposals related to the Steel industry with
                                  digital solutions will earn additional points
                                </span>
                              </p>
                            </li>
                          </ol>
                        </ol>
                      </li>
                      <li
                        dir="ltr"
                        style={{
                          listStyleType: "decimal",
                          fontSize: "9pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre",
                          marginLeft: "-18pt",
                        }}
                      >
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.2",
                            textAlign: "justify",
                            marginTop: "0pt",
                            marginBottom: "9pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10pt",
                              fontFamily: "Arial",
                              color: "#414042",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The last date to submit the proposal is&nbsp;
                          </span>
                          <span
                            style={{
                              fontSize: "10pt",
                              fontFamily: "Arial",
                              color: "#414042",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            15th September 2020.
                          </span>
                        </p>
                      </li>
                    </ol>
                    <p>
                      <br />
                    </p>
                    <h1
                      dir="ltr"
                      style={{
                        lineHeight: "1.476923076923077",
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "19.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Award of Scholarship
                      </span>
                    </h1>
                    <p>
                      <br />
                    </p>
                    <h3
                      dir="ltr"
                      style={{
                        lineHeight: 2,
                        textAlign: "justify",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Yearly Scholarship Amount:
                      </span>
                    </h3>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: 2,
                        textAlign: "justify",
                        marginTop: "10pt",
                        marginBottom: "10pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        The program would identify around 100 deserving students
                        from 40 prestigious institutes across the country and
                        award scholarships to the value of :&nbsp;
                      </span>
                    </p>
                    <ul style={{ marginTop: 0, marginBottom: 0 }}>
                      <li
                        dir="ltr"
                        style={{
                          listStyleType: "disc",
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre",
                        }}
                      >
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: 2,
                            textAlign: "justify",
                            marginTop: "10pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10pt",
                              fontFamily: "Arial",
                              color: "#414042",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Management - INR 1,50,000 per Student
                          </span>
                        </p>
                      </li>
                      <li
                        dir="ltr"
                        style={{
                          listStyleType: "disc",
                          fontSize: "10pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre",
                        }}
                      >
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: 2,
                            textAlign: "justify",
                            marginTop: "0pt",
                            marginBottom: "10pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10pt",
                              fontFamily: "Arial",
                              color: "#414042",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Engineering - INR 80,000 per Student
                          </span>
                        </p>
                      </li>
                    </ul>
                    <p>
                      <br />
                    </p>
                  </div>
                  ;
                </TabPane>
                <TabPane tabId="pills2">
                  <Nav className="justify-content-center" tabs role="tablist">
                    <NavItem>
                      <NavLink
                        className={blog === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setBlog("1");
                        }}
                      >
                        AKANSH AGARWAL
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={blog === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setBlog("2");
                        }}
                      >
                        {/* <i className="now-ui-icons location_world"></i> */}
                        VIPUL BAJAJ
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }} */}
                    {/* > */}
                    {/* <i className="now-ui-icons sport_user-run"></i> */}
                    {/* RESOURCES
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                  <TabContent className="gallery" activeTab={"blog" + blog}>
                    <TabPane tabId="blog1">
                      <div>
                        <h1
                          dir="ltr"
                          style={{
                            lineHeight: "1.476923076923077",
                            backgroundColor: "#ffffff",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "19.5pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#1b4aa0",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Blog by Akansh Agarwal
                          </span>
                        </h1>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13.999999999999998pt",
                              fontFamily: '"Dancing Script",cursive',
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "italic",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            “Truly, for some men, destiny isn’t written, unless
                            they write it” - Shri. O.P. Jindal, Founder Chairman
                            of the Jindal Group.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Hello folks,
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Hope you all are doing well!
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            I am Akansh Agrawal, currently a 3
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.6em",
                                verticalAlign: "super",
                              }}
                            >
                              rd
                            </span>
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            -year Mechanical Undergraduate. I am here to share
                            my experience and general tips for fetching an
                            OPJEMS Scholarship which is awarded by Jindal Group.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Before moving towards my experience, let me give you
                            a brief highlight of what this scholarship is
                            exactly. Om Prakash Jindal Engineering and
                            Management Scholarship (OPJEMS) &nbsp;is aimed at
                            promoting academic and leadership excellence and
                            awarded to meritorious students who emulate the
                            vision and values of Shri. O.P. Jindal and have the
                            potential to become leaders in entrepreneurial
                            excellence and innovation.&nbsp;
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The&nbsp;
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            eligibility criteria
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;for the Engineering stream is that you need to
                            be of either Mechanical, Electrical, Civil or
                            Metallurgical (Material) Department holding the
                            position among top 3 in your respective department
                            in terms of API for 2
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.6em",
                                verticalAlign: "super",
                              }}
                            >
                              nd
                            </span>
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            -year students and onwards. In contrast, for the 1
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.6em",
                                verticalAlign: "super",
                              }}
                            >
                              st
                            </span>
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;year students, you need to be in the top 3 in
                            your respective department as per your JEE Advanced
                            Rank.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13.5pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#1b4aa0",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            How did I come to know of the scholarship?
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            I was able to secure the position in the top 3 in my
                            department after the end of my first year but was
                            initially unaware of this scholarship, and I believe
                            most of you are as well. What I could recollect is
                            that it was the month of September when I was
                            preparing for the mid-semester exam scheduled next
                            day and suddenly there was a pop-up sound from my
                            mail-box. It was the mail from SSPC with the subject
                            OPJEMS. Being so engrossed in the exam preparation
                            that I left the email unread without recognising how
                            vital the email was. After completing with the
                            mid-semester exams that is 3 days since I got the
                            email, I discussed it with my fellow batchmates and
                            came to know that this mail was sent to departmental
                            toppers as per the eligibility criterion I have
                            described above. Finally, at the end of the day, it
                            came to my knowledge of what is OPJEMS Scholarship.
                            &nbsp;&nbsp;
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13.5pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#1b4aa0",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Application Procedure
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The application procedure is relatively simple, you
                            need to follow the instructions given in the mail
                            either from SSPC or OPJEMS Group regarding how to
                            apply for it. At my time, we were supposed to
                            install the OPJEMS App and fill the required
                            credentials. We were also required to complete stage
                            1 of screening which is mentioned below, before the
                            deadline.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13.5pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#1b4aa0",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Stages of Screening
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "12pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#1b4aa0",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Stage – 1: Business Proposal
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            If I'm not wrong, this part was asked for the first
                            time in the history of OPJEMS. All the candidates
                            were asked to submit a business proposal presenting
                            an innovative and sustainable solution to the
                            socio-economic problems faced by India. Also, we
                            were supposed to connect our ideas with the Iron and
                            Steel Industries. This question is not that easy as
                            it seems, ones need to be thorough in understanding
                            the effects of modernisation on the Indian economy
                            and pre-Independence era as well.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Relax! What you all are waiting for, just google it
                            and try to collect relevant instances and excerpts
                            and arrange them discussing the effects, challenges
                            providing some of the ingenious solutions.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "12pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#1b4aa0",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Stage - 2: Online Tests
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            All the candidates who have successfully submitted
                            the proposal were shortlisted for this stage. This
                            stage consists of 2 online tests which were
                            conducted at NCL, IITK.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Test 1:
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;The first test is an online psychometric test.
                            This is a behavioural test to judge your leadership
                            competencies. There is not much preparation required
                            to clear this test, just you need to be genuine
                            towards your answer and should not boast anything
                            about yourself. The questions are like- which
                            quality describes you the most or the least, what
                            are your weaknesses, how would you react in a given
                            situation. In general, these are MCQs based
                            questions, and you need to be fairly consistent in
                            answering them. Like it hardly takes 5-10 minutes to
                            complete this test. If you wish to take a practice
                            test for it, then you can google it, and you will
                            find some sites where you can have mock rounds.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Test 2:
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;This is a general awareness test based on how
                            much you know about the Jindal Group and OPJEMS
                            scholarship. Some questions which I can recall are –
                            Who is the CEO of Jindal SAW, In which year Jindal
                            Group was founded, Which award was given to the
                            Jindal Group this year… etc. To prepare for this
                            test just go through the Wikipedia page on Jindal
                            Group and OPJEMS website and some current affairs
                            related to Jindal Group. This round is pretty tricky
                            but what I believe if you score well in Psychometric
                            Test (which is usually given a higher weightage),
                            then you need to worry much about this round and
                            have a decent knowledge should work.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "12pt",
                              fontFamily: '"Trebuchet MS"',
                              color: "#1b4aa0",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Stage 3: Skype Interview
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Based on your performance in the previous stage, you
                            will be shortlisted for the final round, that is the
                            interview round. The interview is both HR as well as
                            Technical. From technical, I do not mean that it
                            requires knowledge of any course, what it requires
                            is the knowledge of what you have mentioned in your
                            business proposal. You need not be thorough with
                            what you have mentioned in your business proposal,
                            only a gest of what you have written will work
                            pretty fine. This stage was scheduled pretty late.
                            My interview was scheduled at 2 PM on the day of my
                            End Semester Exam. Due to which, I was not able to
                            prepare much for the interview round. After
                            completing my end-semester exam from 9 AM to 12 PM.
                            I rushed to my room and dressed in the formal attire
                            after having my lunch. In the leftover time, I have
                            through my business proposal and finally ran for my
                            Skype Interview, which I had to attend from the
                            conference room in front of the SSPC Office, through
                            my laptop. It was an invaluable experience to have
                            an interaction with the 3 panellists holding
                            significant positions in the Jindal Industry.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            textAlign: "center",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            After going through all these stages, I was one of
                            the fortunate candidates who were awarded as OPJEMS
                            Scholars with the scholarship prize of INR 80,000,
                            which I will be using for my future education. The
                            felicitation ceremony was planned in one of the
                            5-star Hotel in Gurugram. Unfortunately, it was
                            cancelled due to the riots taking place in Delhi
                            City at that time. The glimpses of the felicitation
                            ceremony conducted some years back is presented, to
                            show how exciting the actual felicitation is.
                            Finally, the ceremony was held in the institute
                            itself where the candidates were felicitated by the
                            prominent people of Jindal Group.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Overall, my experience was quite exciting! With the
                            constant guidance from some of my seniors and
                            support from my family, I was able to crack this
                            scholarship and able to stand on the values of Shri.
                            O.P. Jindal. Thanks to the entire Jindal Family for
                            inspiring and motivating young minds through this
                            scholarship!
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            I hope my experience will be beneficial for those
                            who are aspiring for this scholarship. Thanks to the
                            entire team of AnC for their lovely invitation. With
                            this I will leave, just remember these words of Dr
                            APJ Abdul Kalam and success will be all yours-
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            textAlign: "center",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13.999999999999998pt",
                              fontFamily: '"Dancing Script",cursive',
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "italic",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            “If you wish to shine like a Sun. First burn like a
                            Sun !”
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "12pt",
                            marginBottom: "12pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#000000",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;
                          </span>
                        </p>
                      </div>
                    </TabPane>
                    <TabPane tabId="blog2">
                      <div>
                        <h1
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "19.5pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#1b4aa0",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The Scholarships Saga by Vipul Bajaj
                          </span>
                        </h1>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Hello! I'm Vipul Bajaj, a Y16 student in the EE
                            department doing a Double Major in CSE. I interned
                            at Gartner, followed by Max Planck, Germany, in my
                            senior year’s summers.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            I am one of the recipients of the OP Jindal
                            Engineering and Management Scholarship 2017. I would
                            like to take this chance to tell you a bit about the
                            scholarship and my journey. I hope it helps you
                            clear out any doubts you have about it and motivates
                            you towards it.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            This scholarship is a relatively less known one.
                            Even I was unaware of it until I was nominated for
                            it! However, the good part of this scholarship is
                            that you don't have to apply for it directly, it's
                            the institute that nominates you.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Let’s begin with the eligibility criteria.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            This scholarship is awarded to "meritorious students
                            pursuing Engineering or Management" according to
                            their website.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            As we fall in the first category, I would like to
                            elaborate on the Engineering scholarship.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The first three toppers from each year of the
                            following streams of engineering are nominated by
                            the institute.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            a. Civil Engineering
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            b. Electrical Engineering
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            c. Mechanical Engineering
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            d. Material Science and Engineering
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            In this sense, it's quite a&nbsp;
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "italic",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            branchist&nbsp;
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            (a non-existing term) scholarship as it disfavours
                            most branches and takes only the core ones. The
                            selection of students from the second, third and
                            fourth year will be based on the academic
                            performance of the previous year alone. The criteria
                            for academic performance is your CPI for the last
                            year. On their website, they mention that they take
                            first-year students based on JEE rank, but that
                            didn't actually happen in my time.&nbsp;
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The students from the top IITs and NITs compete for
                            this scholarship in the engineering category, making
                            the competition fierce.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            As you can guess, from the first round of filtering,
                            there will be around 48 (4 years * 4 branches * 3
                            ranks) students competing from IITK. The past
                            statistics indicate that out of these 48 students,
                            the final scholarship recipients range from 2 to 4
                            with no distinction between branches or years in the
                            final selection (there can be more in case of ties).
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            So without further ado, let’s move on to my journey
                            of winning this prestigious scholarship.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            It was on 9th August 2017 that I received an email
                            from the SSPC office. My CPI at the end of my first
                            year was 9.8, and I was rank 2 in the Mechanical
                            Engineering department. (Yeah, you guessed it right.
                            I did a branch change after my first year.) I had
                            been nominated for the OP Jindal scholarship. The
                            further instructions had me fill the registration
                            form on their website by 31st August.&nbsp;
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The form was sort of a CV. Additionally, it also had
                            some questions about my strengths, my weaknesses,
                            etc. These pointers proved to be helpful in the
                            interview stage so I would recommend you to fill
                            them in carefully.&nbsp;
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            They claim that the form is taken into consideration
                            for getting selected for the next round.&nbsp;
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Interestingly, most of the students made it through
                            this for the next round, which was an online test.
                            The test happened on 7th September at the NCL
                            windows lab. I would advocate preparing well for
                            this test.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The test had 2 components - A behavioural test and a
                            General Knowledge test.
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The first requires little preparation. It's an
                            interesting assessment of your behaviour under
                            various situations and stress test your reflexes.
                            You need to be consistent with your answers. For
                            instance, if you preferred selflessness over profit
                            in a particular case, don't be a hypocrite in some
                            other situation asked later on and prefer monetary
                            benefit over humanity in case of the person being
                            different. Get yourself engaged in such tests easily
                            available on the web which can give you an idea of
                            such tests. You can have a look at them to
                            familiarize yourself.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The second part of the online test is about the OP
                            Jindal Group (based on information available on
                            websites of respective companies of the OP Jindal
                            Group). And the OP Jindal Group has a lot of
                            websites, mind you.&nbsp;
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            I belong to a small city very close to Hisar, and OP
                            Jindal is a household name where I live. I was
                            already aware of many facts related to him before
                            having to research thoroughly. You can read them all
                            up in a day or two. Go through them and make sure
                            you revise it before the test since I believe this
                            is the critical point for the online test that will
                            either make or break your chances of advancing to
                            the next round.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            After the online round, I was anxiously waiting for
                            the results. I received an email from OPJEMS on 22nd
                            September. I had been selected for the next round!
                            The next round was a 25-minute interview which will
                            be held at JSW headquarters in Delhi on 10th
                            October. For statistical purposes, 12 students from
                            IITK made it to this round. And just as a sidenote,
                            the AC train fare and other expenses were reimbursed
                            by them for the travel.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            I started preparing for the interview with the
                            information available online but soon came up with
                            my own formula to crack the interview, and so I did.
                            (Insert smiley)
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            My formula:
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The ideal candidate, according to them should have
                            good behaviour, should be humble, selfless,
                            philanthropic, caring, etc. He/She should have great
                            entrepreneurial, risk-taking and leadership
                            qualities.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Firstly, you need to be dressed appropriately for
                            the interview in proper formal attire. You should
                            have an introductory speech ready with you and
                            answers of some common HR questions like -
                            strengths, weaknesses, where did you exhibit
                            leadership, etc.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            You should have a decent startup idea ready before
                            you go for the interview as it will increase your
                            chances significantly. The interview is the point
                            where the registration form that you filled is in
                            the hands of the interviewer, and they will question
                            you on it. Hence I advise you to fill that
                            carefully. Your form should reflect your personality
                            in the interview.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            My interview went super smooth. The panel didn't ask
                            me a lot of questions. I was the one who spoke the
                            most. Most of the interview revolved around a
                            project that I did in my 1st year summers in
                            Robotics Club and for which I had a startup idea
                            with some huge motivation and selfless motive.&nbsp;
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Finally, the interview ended. And we returned to
                            campus. All of us were anxious about the results.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            By the way, throughout the selection process, the
                            OPJEMS team is really considerate, and they
                            encourage you by giving you various goodies, and it
                            would be fun.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            On 7th November, I got the mail from OPJEMS. I had
                            been selected as a scholarship recipient! I was
                            invited for the felicitation ceremony to be held in
                            Mumbai in January. There were three students chosen
                            from IIT Kanpur. Me(ME - 2nd year), Aayushi
                            Bansal(CE-2nd year) and Sudhir Kumar(CE- 3rd year).
                            The scholarship amount was Rs. 80,000.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            The felicitation ceremony was a grand event on a
                            scale I had hardly seen before! It was tremendous
                            fun! We took a flight from Lucknow to Mumbai. We had
                            lots of fun throughout the day as we toured Mumbai.
                            All expenses were reimbursed. The evening was
                            reserved for the event, including the felicitation
                            event followed by an exquisite supper. The event was
                            very grand and had a plethora of eminent
                            industrialists from across India.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            It was majorly the event, and not the scholarship
                            money that motivated me for coming again next year.
                            Unfortunately, the coming year I was at the 3rd
                            position having a tie with another student, and they
                            changed the rules that year to drop both of us and
                            take only the top 2 rank holders in such a
                            case.&nbsp;
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Summing up the overall experience, it was a surreal
                            one. Despite knowing the statistics from the start
                            and knowing the chances of my selection are slim, I
                            didn't deter and gave my 100% at every stage.
                            Finally, it was a dreamlike experience at the event
                            amid the most celebrated business tycoons of the
                            country. And man did they motivate us! I can't
                            forget what Naveen Jindal, MD of JSW Group, said to
                            us.
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13.999999999999998pt",
                              fontFamily: '"Dancing Script",cursive',
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            <em>
                              "You guys are the future founders of big business
                              houses of India of the likes of Jindal Group. You
                              are the guys who have the cushion and support to
                              bear multiple failures. Aisa nahi hoga ki tumhein
                              job ki dikkat aayegi kabhi. Agar aaye to we're
                              always there for you with a job offer. Go and take
                              risks. Agar tum nahi kar sakte, toh koi nahi kar
                              sakta."
                            </em>
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Seeing students share their experiences at the
                            podium and their proud parents who attended the
                            ceremony was a transcendental experience. It was a
                            prominent learning curve for me, and a memory which
                            I shall always cherish as a part of my campus
                            life.&nbsp;
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            My advice to you would be to give considerable time
                            to your academics at the campus. After all, that's
                            what brought you here, and that's what you came for.
                            Everything else will automatically fall in place.
                            Give your 100% in whatever you do. I would like to
                            give you one advice that is is related to one quote
                            that's always in my head-
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13.999999999999998pt",
                              fontFamily: '"Dancing Script",cursive',
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "italic",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            "Our biggest regrets are not for the things we have
                            done but for the things we haven't done."
                          </span>
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13.999999999999998pt",
                              fontFamily: '"Dancing Script",cursive',
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            ―&nbsp;
                          </span>
                          <span
                            style={{
                              fontSize: "13.999999999999998pt",
                              fontFamily: '"Dancing Script",cursive',
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Chad Michael Murray
                          </span>
                          <span
                            style={{
                              fontSize: "13.999999999999998pt",
                              fontFamily: '"Dancing Script",cursive',
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            &nbsp;
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            Don't hesitate to do anything. If there isn't much
                            downside to doing/attempting something, go for it!
                            Because ultimately you miss all of the shots you
                            don't take. This applies to anything and everything
                            in life and to the decisions that you need to make
                            at every step in life. And even if you fail,
                            remember that&nbsp;
                          </span>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 700,
                              fontStyle: "italic",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            "Our lives are defined by opportunities, even the
                            ones we miss."
                          </span>
                        </p>
                        <p>
                          <br />
                        </p>
                        <p
                          dir="ltr"
                          style={{
                            lineHeight: "1.38",
                            marginTop: "0pt",
                            marginBottom: "0pt",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            I wish you all the best for this scholarship.&nbsp;
                          </span>
                        </p>
                        <p>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            If you still have doubts, feel free to get in touch
                            with me on FB. If you want to know more about me,
                            you can check my&nbsp;
                          </span>
                          <a
                            href="http://home.iitk.ac.in/~vipulbjj/"
                            style={{ textDecoration: "none" }}
                          >
                            <span
                              style={{
                                fontSize: "11pt",
                                fontFamily: "Roboto,sans-serif",
                                color: "#4a6ee0",
                                backgroundColor: "transparent",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontVariant: "normal",
                                textDecoration: "underline",
                                WebkitTextDecorationSkip: "none",
                                textDecorationSkipInk: "none",
                                verticalAlign: "baseline",
                                whiteSpace: "pre-wrap",
                              }}
                            >
                              homepage
                            </span>
                          </a>
                          <span
                            style={{
                              fontSize: "11pt",
                              fontFamily: "Roboto,sans-serif",
                              color: "#0e101a",
                              backgroundColor: "transparent",
                              fontWeight: 400,
                              fontStyle: "normal",
                              fontVariant: "normal",
                              textDecoration: "none",
                              verticalAlign: "baseline",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            .
                          </span>
                        </p>
                      </div>
                    </TabPane>
                  </TabContent>
                </TabPane>
                <TabPane tabId="pills3">
                  <div>
                    <h1
                      dir="ltr"
                      style={{
                        lineHeight: "1.476923076923077",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "19.5pt",
                          fontFamily: '"Trebuchet MS"',
                          color: "#1b4aa0",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        FAQS
                      </span>
                    </h1>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: Is financial need of the student also taken into
                        account while deciding an award of the scholarship?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: No, OPJEMS is a scholarship that is awarded purely on
                        the basis of merit and a financial need is not taken
                        into account in any of the decisions.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: How many students will be awarded scholarships?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: A total of 100 students shall be awarded.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: Would I be required to sign any long term bonds if I
                        get the scholarship?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: No, there are no bonds in order to accept the
                        scholarship.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: If at present I hold any scholarship, will I still be
                        eligible to apply for OPJEMS?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: Yes, a student holding any other scholarship can
                        still apply for OPJEMS, provided he/she meets the
                        eligibility criterion.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: How a student can nominate himself / herself for
                        OPJEMS scholarship?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: Students cannot nominate themselves; they can only be
                        nominated by their respective institute according to the
                        nomination criteria.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: How a student can register himself / herself?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: Students can register themselves through OPJEMS
                        mobile app, by clicking on ‘Register’ tab. Only students
                        nominated by institute can register themselves.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: Is student who has been nominated / awarded in any of
                        the previous year’s OPJEMS scholarship also eligible for
                        current year OPJEMS scholarship?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: Yes he/ she is eligible, provided he/she meets the
                        eligibility criterion.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: How will the online test and interviews are conducted
                        this year?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: Everything from launch to online test &amp; interview
                        will happen on virtual platform.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: When will Medal Ceremony happen?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: Happening of Medal Ceremony will depend upon
                        situation and government regulations (under Covid-19
                        scenario)
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: What is the amount of scholarship?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: Scholarship amount for Management Institutes is Rs.
                        1,50,000
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        &nbsp; &nbsp; &nbsp;Scholarship amount for Engineering
                        Institutes is Rs. 80,000
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: What psychometric test will be used in OPJEMS online
                        test?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: PPA (personal profile analysis) will be used. PPA
                        assesses behavior basis DISC (Dominance, Influence,
                        Steadiness and Compliance) theory formulated by Dr.
                        William Moulton Marston.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: Can students from non-participating institutes apply
                        for scholarship?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: No.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: Can students from mixed stream / dual degree apply or
                        eligible?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: No. Students from only core / flagship courses are
                        eligible
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        .
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Q: What is Nomination Process of OPJEMS 2020?
                      </span>
                    </p>
                    <p
                      dir="ltr"
                      style={{
                        lineHeight: "1.38",
                        marginTop: "0pt",
                        marginBottom: "0pt",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12pt",
                          fontFamily: "Arial",
                          color: "#414042",
                          backgroundColor: "transparent",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontVariant: "normal",
                          textDecoration: "none",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        A: Institutes representatives share the nominations
                        basis eligiblie criteria for OPJEMS 2020.
                      </span>
                    </p>
                  </div>
                  ;
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        {/* <DefaultFooter /> */}
      </div>
    </>
  );
}
