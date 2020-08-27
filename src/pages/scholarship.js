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

function ProfilePage() {
    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            {/* <ExamplesNavbar /> */}
            <div className="wrapper">
                <ProfilePageHeader />
                <div className="section">
                    <Container>
                        <div className="button-container">
                            {/* <Button className="btn-round" color="info" size="lg">
                                Follow
              </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip515203352"
                                size="lg"
                            >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip515203352">
                                Follow me on Twitter
              </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip340339231"
                                size="lg"
                            >
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip340339231">
                                Follow me on Instagram
              </UncontrolledTooltip> */}
                        </div>
                        <h3 className="title">OBJECTIVE</h3>
                        <div>
                            <p
                                dir="ltr"
                                style={{
                                    lineHeight: "1.38",
                                    backgroundColor: "#ffffff",
                                    marginTop: "0pt",
                                    marginBottom: "0pt"
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.5pt",
                                        fontFamily: "Arial",
                                        color: "#000000",
                                        backgroundColor: "transparent",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontVariant: "normal",
                                        textDecoration: "none",
                                        verticalAlign: "baseline",
                                        whiteSpace: "pre-wrap"
                                    }}
                                >
                                    The Y-E-S Award program was started for fostering future leaders in the
                                    field of science and technology. Following the start-up of the award
                                    program in Vietnam in 2006, in India in 2007 and in Laos and Cambodia in
                                    2008, it was introduced in Myanmar in 2014 to support the development and
                                    promotion of young leaders to spearhead the growth of these countries in
                                    the future. &nbsp;
    </span>
                            </p>
                            <p
                                dir="ltr"
                                style={{
                                    lineHeight: "1.38",
                                    backgroundColor: "#ffffff",
                                    marginTop: "0pt",
                                    marginBottom: "0pt"
                                }}
                            >
                                &nbsp;
  </p>
                            <p
                                dir="ltr"
                                style={{
                                    lineHeight: "1.38",
                                    backgroundColor: "#ffffff",
                                    marginTop: "0pt",
                                    marginBottom: "0pt"
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.5pt",
                                        fontFamily: "Arial",
                                        color: "#000000",
                                        backgroundColor: "transparent",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontVariant: "normal",
                                        textDecoration: "none",
                                        verticalAlign: "baseline",
                                        whiteSpace: "pre-wrap"
                                    }}
                                >
                                    This system grants awards to students who have excelled in the area of
                                    science and technology and who continue to aspire to higher academic
                                    achievement. However, it is distinctive in that it is not restricted to
                                    tuition but may be used for a broad range of activities. Furthermore, the
                                    grant is awarded in two stages. Another very unique characteristic of the
                                    system is that its details are matched to the receiving country's needs
                                    and circumstances; it is set up to be flexible to each country's needs.
                                    &nbsp;
    </span>
                            </p>
                            <p
                                dir="ltr"
                                style={{
                                    lineHeight: "1.38",
                                    backgroundColor: "#ffffff",
                                    marginTop: "0pt",
                                    marginBottom: "0pt"
                                }}
                            >
                                &nbsp;
  </p>
                            <p
                                dir="ltr"
                                style={{
                                    lineHeight: "1.38",
                                    backgroundColor: "#ffffff",
                                    marginTop: "0pt",
                                    marginBottom: "0pt"
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.5pt",
                                        fontFamily: "Arial",
                                        color: "#000000",
                                        backgroundColor: "transparent",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontVariant: "normal",
                                        textDecoration: "none",
                                        verticalAlign: "baseline",
                                        whiteSpace: "pre-wrap"
                                    }}
                                >
                                    The program hopes to promote dissemination of eco-technology among the
                                    young generations and at the same time to strengthen interaction and
                                    exchange between Japanese youths and young people expect to lead science,
                                    technology, and industry in their respective countries.
    </span>
                            </p>
                        </div>


                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                <h4 className="title text-center">HONDA-YES-AWARDS DETAILS</h4>
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
                                        <NavItem>
                                            <NavLink
                                                className={pills === "4" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPills("3");
                                                }}
                                            >
                                                {/* <i className="now-ui-icons sport_user-run"></i> */}
                        RESOURCES
                      </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <TabContent className="gallery" activeTab={"pills" + pills}>
                                <TabPane tabId="pills1">
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
                                                backgroundColor: "transparent",
                                                fontWeight: 700,
                                                fontStyle: "normal",
                                                fontVariant: "normal",
                                                textDecoration: "underline",
                                                WebkitTextDecorationSkip: "none",
                                                textDecorationSkipInk: "none",
                                                verticalAlign: "baseline",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            Eligibility:
                    </span>
                                    </p>
                                    <ol style={{ marginTop: 0, marginBottom: 0 }}>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    Candidate should be a student of only Affiliated
                                                    Indian Institute of Technology i.e., IIT Bombay, IIT
                                                    Kanpur, IIT Kharagpur, IIT Madras, IIT Delhi &amp; IIT
                                                    Roorkee registered in a four year B. Tech or five year
                                                    dual degree (M. Tech.) Programme.
                        </span>
                                            </p>
                                        </li>
                                    </ol>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            marginLeft: "36pt",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <ol start={2} style={{ marginTop: 0, marginBottom: 0 }}>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    Candidate must be a student of 5th semester having
                                                    C.G.P.A - 7.00 &amp; above in each of the first 4
                                                    semesters.
                        </span>
                                            </p>
                                        </li>
                                    </ol>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
                                                backgroundColor: "transparent",
                                                fontWeight: 700,
                                                fontStyle: "normal",
                                                fontVariant: "normal",
                                                textDecoration: "underline",
                                                WebkitTextDecorationSkip: "none",
                                                textDecorationSkipInk: "none",
                                                verticalAlign: "baseline",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            Frequency
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            Applications are accepted and considered once per annum.
                                            For the year 2020 – 21, applications will be accepted
                                            during August, 2020.
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
                                                backgroundColor: "transparent",
                                                fontWeight: 700,
                                                fontStyle: "normal",
                                                fontVariant: "normal",
                                                textDecoration: "underline",
                                                WebkitTextDecorationSkip: "none",
                                                textDecorationSkipInk: "none",
                                                verticalAlign: "baseline",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            Mode of Application
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            Eligible candidates from affiliated Indian Institutes of
                                            Technology can apply online through the Honda Y-E-S Award
                                            website (
                    </span>
                                        <a
                                            href="http://yes.honda.co.in"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#1155cc",
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
                                                http://yes.honda.co.in
                      </span>
                                        </a>
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            )
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
                                                backgroundColor: "transparent",
                                                fontWeight: 700,
                                                fontStyle: "normal",
                                                fontVariant: "normal",
                                                textDecoration: "underline",
                                                WebkitTextDecorationSkip: "none",
                                                textDecorationSkipInk: "none",
                                                verticalAlign: "baseline",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            Documents to be attached:
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            The following documents are to be attached with the online
                                            application form of Honda Y-E-S Award:-&nbsp;
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <ol style={{ marginTop: 0, marginBottom: 0 }}>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    For attachments of documents - All the documents have
                                                    to be uploaded in the PDF formats only apart from your
                                                    passport size photograph.
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    Transcript with CGPA for all four semesters or
                                                    Individual CGPA marksheet for all 4 semesters.
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    On the spot essay to be given this time at the
                                                    respective IITs
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    Certificates of distinguished awards or prizes
                                                    received, if any. Minimum 3 certificates have to be
                                                    uploaded in the application form under Other section
                                                    of A, B &amp; C (Mandatory).
                        </span>
                                            </p>
                                        </li>
                                    </ol>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
                                                backgroundColor: "transparent",
                                                fontWeight: 700,
                                                fontStyle: "normal",
                                                fontVariant: "normal",
                                                textDecoration: "underline",
                                                WebkitTextDecorationSkip: "none",
                                                textDecorationSkipInk: "none",
                                                verticalAlign: "baseline",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            Selection Process for Y-E-S Award
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            Awardees will be selected in the following manner:-
                    </span>
                                    </p>
                                    <ol style={{ marginTop: 0, marginBottom: 0 }}>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    Y-E-S Administration Office (YAO) collects all
                                                    applications;
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    Y-E-S Award Selection Committee (ASC) scores
                                                    applications and essays;
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    ASC interviews shortlisted candidates;
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "decimal",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
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
                                                    lineHeight: "1.38",
                                                    backgroundColor: "#ffffff",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
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
                                                    The Japanese HOF Grant Committee (HCG) examines the
                                                    finalist list and decides awardees.
                        </span>
                                            </p>
                                        </li>
                                    </ol>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#000000",
                                                backgroundColor: "transparent",
                                                fontWeight: 700,
                                                fontStyle: "normal",
                                                fontVariant: "normal",
                                                textDecoration: "underline",
                                                WebkitTextDecorationSkip: "none",
                                                textDecorationSkipInk: "none",
                                                verticalAlign: "baseline",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            Selection Process for “Y-E-S Award Plus”
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            There will be no separate selection process for the Y-E-S
                                            Award Plus. Any Y-E-S Award recipient who meets the
                                            conditions above may request this award, and their
                                            requests are received and confirmed by the YAO, and then
                                            approved by the Honda Foundation Y-E-S Office (“HOF Y-E-S
                                            Office”) in Tokyo.
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            The Y-E-S Award Plus is not an independent program, but a
                                            constituent part of the Honda Y-E-S Award program.
                    </span>
                                    </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        &nbsp;
                  </p>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.38",
                                            backgroundColor: "#ffffff",
                                            marginTop: "0pt",
                                            marginBottom: "0pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
                                                backgroundColor: "transparent",
                                                fontWeight: 700,
                                                fontStyle: "normal",
                                                fontVariant: "normal",
                                                textDecoration: "underline",
                                                WebkitTextDecorationSkip: "none",
                                                textDecorationSkipInk: "none",
                                                verticalAlign: "baseline",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            Benefits:
                    </span>
                                    </p>
                                    <ul style={{ marginTop: 0, marginBottom: 0 }}>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "disc",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
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
                                                    lineHeight: "1.565217391304348",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
                                                        color: "#484848",
                                                        backgroundColor: "transparent",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontVariant: "normal",
                                                        textDecoration: "none",
                                                        verticalAlign: "baseline",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    Stage I: The Y-E-S Award: The Award would recognize
                                                    brilliant students who would drive future society
                                                    towards an eco technological orientation.
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "disc",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
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
                                                    lineHeight: "1.565217391304348",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
                                                        color: "#484848",
                                                        backgroundColor: "transparent",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontVariant: "normal",
                                                        textDecoration: "none",
                                                        verticalAlign: "baseline",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    Each Y-E-S Award recipient will receive USD 3,000 (US
                                                    Dollar Three Thousand only) in equivalent Indian
                                                    Rupees. * Will be utilized solely for the purpose of
                                                    pursuing Education/ Skill Development.
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "disc",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
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
                                                    lineHeight: "1.565217391304348",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
                                                        color: "#484848",
                                                        backgroundColor: "transparent",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontVariant: "normal",
                                                        textDecoration: "none",
                                                        verticalAlign: "baseline",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    Stage II: Y-E-S Award Plus: Every Y-E-S Award
                                                    recipient becomes eligible for the Y-E-S Award Plus,
                                                    an additional award, if, within three years after
                                                    he/she received the Y-E-S Award prize.
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "disc",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
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
                                                    lineHeight: "1.565217391304348",
                                                    marginTop: "0pt",
                                                    marginBottom: "0pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
                                                        color: "#484848",
                                                        backgroundColor: "transparent",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontVariant: "normal",
                                                        textDecoration: "none",
                                                        verticalAlign: "baseline",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    A credit-granting internship program offered by a
                                                    Japanese company or research institute's summer
                                                    program for two and a half months.
                        </span>
                                            </p>
                                        </li>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "disc",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
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
                                                    lineHeight: "1.565217391304348",
                                                    marginTop: "0pt",
                                                    marginBottom: "30pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
                                                        color: "#484848",
                                                        backgroundColor: "transparent",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontVariant: "normal",
                                                        textDecoration: "none",
                                                        verticalAlign: "baseline",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    Internship participants will receive US$ 7,000 for the
                                                    internship in Japan + US$ 3,000 preparation fees for
                                                    further study in Japan (10 weeks) for Y-E-S Plus.
                        </span>
                                            </p>
                                        </li>
                                    </ul>
                                    <p
                                        dir="ltr"
                                        style={{
                                            lineHeight: "1.565217391304348",
                                            marginTop: "0pt",
                                            marginBottom: "30pt",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
                                                backgroundColor: "transparent",
                                                fontWeight: 400,
                                                fontStyle: "normal",
                                                fontVariant: "normal",
                                                textDecoration: "none",
                                                verticalAlign: "baseline",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp;
                    </span>
                                        <span
                                            style={{
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
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
                                            OR
                    </span>
                                    </p>
                                    <ul style={{ marginTop: 0, marginBottom: 0 }}>
                                        <li
                                            dir="ltr"
                                            style={{
                                                listStyleType: "disc",
                                                fontSize: "11.5pt",
                                                fontFamily: "Arial",
                                                color: "#484848",
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
                                                    lineHeight: "1.565217391304348",
                                                    marginTop: "0pt",
                                                    marginBottom: "30pt",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11.5pt",
                                                        fontFamily: "Arial",
                                                        color: "#484848",
                                                        backgroundColor: "transparent",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontVariant: "normal",
                                                        textDecoration: "none",
                                                        verticalAlign: "baseline",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    USD 10,000 for Post-Graduation studies in Japan (1~2
                                                    years) as Y-E-S Award Plus.
                        </span>
                                            </p>
                                        </li>
                                    </ul>
                                    <div>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Schedule:
                      </span>
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    1st week of August
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Launch of program for Year 2020-21
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Call for applications through IITs
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Note
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Eligible faculties of affiliated IITs
                                </span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Upto 4th week of August
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #000000 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Submit applications
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "17.25pt" }}>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                    lineHeight: "1.38",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    Students YAO*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Note
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Through online application process
                                </span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    3rd week of August
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Preliminary screening
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    to
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    4th week of August
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    By YAO*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Note
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Based on eligibility criteria
                                </span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    1st week of September
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #000000 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    to
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    4th week of September
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #000000 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    On the spot essay
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    2nd week of September
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #000000 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Screening of essay
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    to
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    1st week of October
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    By YAO* / ASC*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Note
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Based on shortlisting criteria
                                </span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    2nd week of October
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    to
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    2nd week of November
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #000000 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    First Round of Interviews
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    2nd week of December
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #000000 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Announcement of shortlisted candidates
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    By YAO*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Note
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    On website
                                </span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    1st week of January
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Interview with chief assessor
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    By ASC*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    2nd week of January
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Submit finalist list to HGC*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "17.25pt" }}>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                    lineHeight: "1.38",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    ASC* HGC*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    2nd week of January
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Examine and decide awardees
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    HGC*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    3rd week of January
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Announcement of winners
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    YAO*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Note
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    On website
                                </span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: "15.75pt" }}>
                                                        <td
                                                            colSpan={5}
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
                                                            <br />
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
                                                                backgroundColor: "#ca1f25",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#ffffff",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    1st week of February
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Activity
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
                                </span>
                                                            </p>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #000000 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Organise award ceremony
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Procedure
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    YAO*
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            colSpan={4}
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
                                                            <br />
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderLeft: "solid #cccccc 0.75pt",
                                                                borderRight: "solid #cccccc 0.75pt",
                                                                borderBottom: "solid #cccccc 0.75pt",
                                                                borderTop: "solid #cccccc 0.75pt",
                                                                verticalAlign: "bottom",
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Note
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 2pt 2pt 2pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#df1e2f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    :
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
                                                                backgroundColor: "#ffffff",
                                                                padding: "2pt 0pt 2pt 0pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
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
                                                                        fontSize: "6.999999999999999pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#5f5f5f",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    In Delhi
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
                                                            <br />
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
                                                            <br />
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
                                                            <br />
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
                                                            <br />
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
                                                            <br />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                YAO : &nbsp;Y-E-S Administration Office
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                ASC : &nbsp;Award Selection Committee
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                HGC : &nbsp;HOF Grant Committee
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
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Previous year Winners from IIT Kanpur:
                      </span>
                                        </p>
                                        <ol style={{ marginTop: 0, marginBottom: 0 }}>
                                            <li
                                                dir="ltr"
                                                style={{
                                                    listStyleType: "decimal",
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
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
                                                        lineHeight: "1.565217391304348",
                                                        marginTop: "0pt",
                                                        marginBottom: "30pt",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "11.5pt",
                                                            fontFamily: "Arial",
                                                            color: "#484848",
                                                            backgroundColor: "transparent",
                                                            fontWeight: 700,
                                                            fontStyle: "normal",
                                                            fontVariant: "normal",
                                                            textDecoration: "none",
                                                            verticalAlign: "baseline",
                                                            whiteSpace: "pre-wrap",
                                                        }}
                                                    >
                                                        Aman Saraf
                          </span>
                                                    <span
                                                        style={{
                                                            fontSize: "11.5pt",
                                                            fontFamily: "Arial",
                                                            color: "#484848",
                                                            backgroundColor: "transparent",
                                                            fontWeight: 700,
                                                            fontStyle: "normal",
                                                            fontVariant: "normal",
                                                            textDecoration: "none",
                                                            verticalAlign: "baseline",
                                                            whiteSpace: "pre-wrap",
                                                        }}
                                                    >
                                                        <span style={{ whiteSpace: "pre" }}>
                                                            &nbsp; &nbsp;&nbsp;
                            </span>
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontSize: "11.5pt",
                                                            fontFamily: "Arial",
                                                            color: "#484848",
                                                            backgroundColor: "transparent",
                                                            fontWeight: 700,
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
                                            </li>
                                        </ol>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                &nbsp;
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Department
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                - &nbsp;Electrical &amp; Electronics Engineering IIT
                                                Kanpur
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Achievements:
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                96.3% aggregate – ICSE Board Exams, BOMBAY SCOTTISH
                                                SCHOOL, MUMBAI
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Internship completed with OLA Electric Mobility in the
                                                area of electric vehicle &amp; reducing carbon foot
                                                prints.
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                NSS volunteer under Unnat Bharat Abhiyan initiative.
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                2.
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Suyash Singh
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Department
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                -
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Mechanical Engineering, IIT Kanpur
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Achievements:
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Student Research Associate, Machine Tool Dynamics
                                                Laboratory &amp; Manager, Research Wing, Academics and
                                                Career Council, IIT Kanpur
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Certified as a KVPY scholar by securing an All India
                                                Rank of 611 in 2016 organized by the Indian Institute of
                                                Science, Bangalore.
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Selected for the prestigious SURGE program 2019 and
                                                received a research grant of INR 25,000.
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                3.
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
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
                                                &nbsp;
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Shubhanshi Singh
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Department
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                -
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                &nbsp;Civil Engineering, IIT Kanpur
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Achievements:
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Presentation at the Conference of Indian Aerosol Science
                                                and Technology Association Aerosol.
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Paper on Intelligent Transportation Systems.
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Scholarship - National Talent Search Examination (NTSE).
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                KN Saluja Scholarship 2017-18.
                      </span>
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{
                                                lineHeight: "1.565217391304348",
                                                marginTop: "0pt",
                                                marginBottom: "30pt",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                •
                      </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                <span style={{ whiteSpace: "pre" }}>
                                                    &nbsp; &nbsp;&nbsp;
                        </span>
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "11.5pt",
                                                    fontFamily: "Arial",
                                                    color: "#484848",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 400,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                All India Rank 45 in Science and Mathematics Talent
                                                Search Examination (SMTE 2012-13).
                      </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                    </div>
                  ;
                </TabPane>
                                <TabPane tabId="pills2">
                                    <Col className="ml-auto mr-auto" md="10">
                                        <Row className="collections">
                                            <Col md="6">
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg6.jpg")}
                                                ></img>
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg11.jpg")}
                                                ></img>
                                            </Col>
                                            <Col md="6">
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg7.jpg")}
                                                ></img>
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg8.jpg")}
                                                ></img>
                                            </Col>
                                        </Row>
                                    </Col>
                                </TabPane>
                                <TabPane tabId="pills3">
                                    <div>
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
                                                    fontFamily: "Arial",
                                                    color: "#000000",
                                                    backgroundColor: "transparent",
                                                    fontWeight: 700,
                                                    fontStyle: "normal",
                                                    fontVariant: "normal",
                                                    textDecoration: "underline",
                                                    WebkitTextDecorationSkip: "none",
                                                    textDecorationSkipInk: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                Q1 How &amp; when can a person apply for the Y-E-S
                                                Award?
                      </span>
                                        </p>
                                        <div align="left" dir="ltr" style={{ marginLeft: "0pt" }}>
                                            <table
                                                style={{ border: "none", borderCollapse: "collapse" }}
                                            >
                                                <tbody>
                                                    <tr style={{ height: "117.25pt" }}>
                                                        <td
                                                            style={{
                                                                verticalAlign: "top",
                                                                backgroundColor: "#ffffff",
                                                                padding: "5pt 5pt 5pt 5pt",
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                            }}
                                                        >
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    Candidate should be a student of Indian
                                                                    Institute of Technology, registered in a four
                                                                    year B.Tech or five year dual degree (M.Tech.)
                                                                    Programme. &nbsp;
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    For the year 2020-2021, this program is being
                                                                    offered to students of IIT Bombay, IIT Kanpur,
                                                                    IIT Kharagpur, IIT Madras, IIT Delhi &amp; IIT
                                                                    Roorkee only.
                                </span>
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#000000",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 400,
                                                                        fontStyle: "italic",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    &nbsp;&nbsp;
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    Candidate must be a student of 5th semester
                                                                    having CGPA of 7.00 &amp; above in each
                                                                    respective four semesters.
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    Applications will be open from&nbsp;
                                </span>
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    1
                                </span>
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                        fontFamily: "Arial",
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
                                                                    &nbsp;August to 25
                                </span>
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    <span
                                                                        style={{
                                                                            fontSize: "0.6em",
                                                                            verticalAlign: "super",
                                                                        }}
                                                                    >
                                                                        th
                                  </span>
                                                                </span>
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    &nbsp;August 2020
                                </span>
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    .
                                </span>
                                                            </p>
                                                            <br />
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#000000",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "underline",
                                                                        WebkitTextDecorationSkip: "none",
                                                                        textDecorationSkipInk: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Q2 Is there any application fee I need to pay?
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    No, the application is free.
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#000000",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "underline",
                                                                        WebkitTextDecorationSkip: "none",
                                                                        textDecorationSkipInk: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Q3 Can I download the application form or fill
                                                                    it online?
                                </span>
                                                            </p>
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    <span style={{ whiteSpace: "pre" }}>
                                                                        &nbsp; &nbsp;&nbsp;
                                  </span>
                                                                </span>
                                                            </p>
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    You may apply online, by registering yourself
                                                                    on this website. However, the form cannot be
                                                                    downloaded.
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#000000",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "underline",
                                                                        WebkitTextDecorationSkip: "none",
                                                                        textDecorationSkipInk: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Q4 How the Y-E-S Award is different from other
                                                                    Scholarships?
                                </span>
                                                            </p>
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    <span style={{ whiteSpace: "pre" }}>
                                                                        &nbsp; &nbsp;&nbsp;
                                  </span>
                                                                </span>
                                                            </p>
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    Y-E-S Award is a two-tier programme. The first
                                                                    stage is of cash award of US $ 3000, and in
                                                                    the second stage of the programme the awardee
                                                                    will get 7000 + US$ 3,000 preparation fees for
                                                                    further study in Japan (10 weeks) Or US$
                                                                    10,000 for PG* studies in Japan (1~2 years)
                                                                    can be awarded.
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#000000",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "underline",
                                                                        WebkitTextDecorationSkip: "none",
                                                                        textDecorationSkipInk: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Q5 Can I apply again if I don't get selected
                                                                    for the fellowship in the first try?
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    No, only one chance will be given to each
                                                                    applicant.
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#000000",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "underline",
                                                                        WebkitTextDecorationSkip: "none",
                                                                        textDecorationSkipInk: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Q6 What are the selection criteria for Y-E-S
                                                                    Award?
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    The shortlisting process is based on academic
                                                                    excellence, co-curricular activities ,
                                                                    ecotechnology or intention to work and on the
                                                                    spot essay; further, short listed candidates
                                                                    will go through a personal interview for the
                                                                    final selection.
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
                                                                        color: "#000000",
                                                                        backgroundColor: "transparent",
                                                                        fontWeight: 700,
                                                                        fontStyle: "normal",
                                                                        fontVariant: "normal",
                                                                        textDecoration: "underline",
                                                                        WebkitTextDecorationSkip: "none",
                                                                        textDecorationSkipInk: "none",
                                                                        verticalAlign: "baseline",
                                                                        whiteSpace: "pre-wrap",
                                                                    }}
                                                                >
                                                                    Q7 Is this scholarship applicable to students
                                                                    pursing 5 yr. integrated M.Sc. or 5 yr.
                                                                    integrated MBA from the selected IITs?
                                </span>
                                                            </p>
                                                            <br />
                                                            <p
                                                                dir="ltr"
                                                                style={{
                                                                    lineHeight: "1.38",
                                                                    textAlign: "justify",
                                                                    marginTop: "0pt",
                                                                    marginBottom: "0pt",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: "11pt",
                                                                        fontFamily: "Arial",
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
                                                                    No, this program is open only to students
                                                                    enrolled in the 5th semester of B. Tech or 5
                                                                    yr. Dual Degree M. Tech Programs of Eligible
                                                                    Courses in Affiliated IIT's.
                                </span>
                                                            </p>
                                                            <br />
                                                            <br />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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

export default ProfilePage;
