import React from "react";
import MetaTags from "react-meta-tags";
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

import ProfilePageHeader from "components/scholarshipHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";

export default function Daad() {
    const [pills, setPills] = React.useState("1");
    const [blog, setBlog] = React.useState("1");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.title = "EPFL Research Internship";
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            {/* <ExamplesNavbar /> */}
            <div className="wrapper">
                <MetaTags>
                    <title>EPFL Research Internship 2020</title>
                    <meta name="description" content="Internship for bright minds" />
                    <meta property="og:title" content="EPFL Research Internship 2020" />
                    <meta
                        property="og:image"
                        content="https://career.webindia123.com/career/options/images/opjems.jpg"
                    />
                </MetaTags>
                <ProfilePageHeader title={"EPFL Research Internship 2020"} img={"epfl1.png"} />
                <div className="section">
                    <Container>
                        <div className="button-container"></div>

                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                <h4 className="title text-center">EPFL Research Internship 2020 Details</h4>
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
                                                {/* <i className="now-ui-icons location_world"></i> */}
                        BLOGS
                      </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <TabContent className="gallery" activeTab={"pills" + pills}>
                                <TabPane tabId="pills1">
                                    <div style={{ padding: 6 }}>
                                        {/* Hello world */}
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
                                                Blog by Saumya Shah
                      </span>
                                        </h1>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                Hello,
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                I am Saumya Shah. I graduated from IITK in 2020 from the Electrical
                                                Engineering Department. I interned at the Computer-Human Interaction In
                                                Learning And Instruction (CHILI) lab at EPFL in 2019 under the Summer@EPFL
                                                program and pursued a semester exchange program there in the subsequent
                                                semester. I am here to describe my experience for my Summer@EPFL
                                                internship, starting from the application process to the work done during
                                                the internship.
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                I would like to start by first giving a brief overview of the program and
                                                the eligibility criteria. Summer@EPFL is a 2-3 months research internship
                                                program that provides students a fellowship to work at one of the labs at
                                                EPFL. Quoting from their&nbsp;
    </span>
                                            <a href="https://summer.epfl.ch/" style={{ textDecoration: "none" }}>
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
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
                                                        whiteSpace: "pre-wrap"
                                                    }}
                                                >
                                                    website
      </span>
                                            </a>
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                , “Fellowships are awarded to students enrolled in BSc, BTech, MSc, MTech,
                                                or equivalent programs in Computer Science, Computer Engineering,
                                                Telecommunications, or Electrical Engineering”. Also, one must have
                                                completed their first year of Bachelor’s to be eligible to apply.
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        border: "none",
                                                        display: "inline-block",
                                                        overflow: "hidden",
                                                        width: 624,
                                                        height: 351
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <img
                                                            src={require("../assets/img/epfl2.png")}
                                                            width={624}
                                                            height={351}
                                                            className="fr-fic fr-dii"

                                                        />
                                                    </div>
                                                </span>
                                            </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                How did you come to know of the internship?
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                I took the help of my seniors and batch mates to ask about information
                                                related to research internships. I found the list of programs on the
                                                website of the Office of International Relations to be quite helpful.
                                                There are also a lot of resources online describing various research
                                                internship opportunities. This&nbsp;
    </span>
                                            <a
                                                href="https://docs.google.com/spreadsheets/d/1fmwBonsZl8OvjTXV5-GQPFfdyDIdBoxZvOS3WrOFiMY/edit?usp=sharing"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
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
                                                        whiteSpace: "pre-wrap"
                                                    }}
                                                >
                                                    sheet
      </span>
                                            </a>
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                , created by the Academics and Career Council, IITK contains a list of
                                                internship programs along with the relevant details. It wasn’t there
                                                during my time but I think it covers a lot of programs. &nbsp;
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                What was the application procedure?
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                The students were required to submit their application on EPFL’s portal.
                                                The application consists of submitting a Letter of Motivation, CV, and
                                                transcripts, along with choosing 3 professors with whom you would like to
                                                work with. Unlike many other research internship programs, this program
                                                does not require to submit Letters of Recommendation.
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                Various stages of screening
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                This can vary a lot depending on your role and the lab that is considering
                                                you for the internship. In my case, I had an interview with a researcher
                                                who was working at the lab and who would eventually be the mentor for my
                                                project. She asked a few questions related to the projects that I had
                                                worked on and enquired about my interests and future goals. In the end, I
                                                asked her about some of the projects at the lab that I found interesting,
                                                and she was kind enough to thoroughly explain those things in great
                                                detail. A few days after the interview, I got an email from EPFL saying
                                                that I was selected!
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                Your preparation strategy
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                There is no hard criteria or number that is required for selection for
                                                this program. One should focus on developing a good overall profile in
                                                their field of interest. This includes maintaining a good CPI,
                                                contributing towards a publication, and working on interesting projects.
                                                Though I did not have all of these things in my application, I worked with
                                                having this mindset of having a good overall profile, which I believe was
                                                quite helpful in my selection for this program.
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                Overall Experience of the process
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                The overall experience of the whole process was good. The process was
                                                conducted smoothly, the interviewer was friendly and cleared up some of my
                                                misunderstandings. After my selection, they helped me with my travel,
                                                accommodation, and visa procedures, which helped me a lot in planning my
                                                journey and stay.
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                Benefits and how do you plan to utilize the internships
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                The internship provided me with good hands-on experience working on a
                                                research project in my field of interest. I contributed to a project aimed
                                                at diagnosing dysgraphia using handwriting data from a consumer tablet. It
                                                was a satisfying project to work on, where I felt that I was using my
                                                technical skills to improve the lives of people. My mentors were
                                                supportive and friendly, helping me whenever I was stuck or had any
                                                questions.
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                The positive experience during the summers motivated me to further explore
                                                my interests. It increased my understanding and helped me to better
                                                contribute to the future projects that I worked on. In fact, to continue
                                                the work that I had done during my internship, I applied and was selected
                                                for a semester exchange at EPFL for the subsequent semester.
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                I also cherish the interactions that I had with students from all around
                                                the world. It opened my eyes to different cultures and allowed me to see
                                                things from a different perspective. Switzerland and France are great
                                                places to travel, and we spent a few weekends exploring these places.
                                                These aspects along with the work that I did made my internship quite
                                                exciting and fun.
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    textDecoration: "none",
                                                    verticalAlign: "baseline",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                Your message to the applicants, any other information you wish to provide
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                The selection process is quite competitive, so do not get disheartened if
                                                you are not able to make it. It is important to give your best from your
                                                end and learn from your mistakes. Feel free to drop me an email at&nbsp;
    </span>
                                            <a href="mailto:saumyagshah@gmail.com" style={{ textDecoration: "none" }}>
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
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
                                                        whiteSpace: "pre-wrap"
                                                    }}
                                                >
                                                    saumyagshah@gmail.com
      </span>
                                            </a>
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                &nbsp;or contact me on&nbsp;
    </span>
                                            <a
                                                href="https://www.linkedin.com/in/saumyagshah/"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
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
                                                        whiteSpace: "pre-wrap"
                                                    }}
                                                >
                                                    LinkedIn&nbsp;
      </span>
                                            </a>
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                or&nbsp;
    </span>
                                            <a
                                                href="https://www.facebook.com/Saumyagshah"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
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
                                                        whiteSpace: "pre-wrap"
                                                    }}
                                                >
                                                    Facebook
      </span>
                                            </a>
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                &nbsp;if you have any questions about my internship experience.&nbsp;
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                If you want to know more about me, you can check out my&nbsp;
    </span>
                                            <a href="https://saumyagshah.github.io/" style={{ textDecoration: "none" }}>
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
                                                        fontFamily: "Roboto,sans-serif",
                                                        color: "#1155cc",
                                                        backgroundColor: "transparent",
                                                        fontWeight: 400,
                                                        fontStyle: "normal",
                                                        fontVariant: "normal",
                                                        textDecoration: "underline",
                                                        WebkitTextDecorationSkip: "none",
                                                        textDecorationSkipInk: "none",
                                                        verticalAlign: "baseline",
                                                        whiteSpace: "pre-wrap"
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                .
    </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p
                                            dir="ltr"
                                            style={{ lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" }}
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
                                                    whiteSpace: "pre-wrap"
                                                }}
                                            >
                                                Cheers!
    </span>
                                        </p>
                                    </div>

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
