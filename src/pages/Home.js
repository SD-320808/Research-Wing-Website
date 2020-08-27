import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import HomeHeader from "../components/HomeHeader";
import HomeNavbar from "components/HomeNavBar";
// import Wings from "components/Wings";
import Footer from "components/Footer";
import CarouselPage from "../components/Carousel";

function Home() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    document.title = "HOME | RESEARCH WING"
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomeHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style={{ color: 'black', fontWeight: 'bold' }}>Who we are?</h2>
                <h5 className="description" style={{ color: 'black', fontWeight: 400 }}>
                  The aim of the Research Wing is to increase awareness about the variety of research going on the campus and instill a sense of motivation towards the same, among the student community, by promoting a thriving research culture. The wing envisions to provide a platform to budding researchers, support and guidance to the research enthusiasts and voice to those who are excelling in the field.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/rw1.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      No research is ever quite complete. It is the glory of a good bit of work that it opens the way for something still better, and this repeatedly leads to its own eclipse. <br></br>
                      <br></br>
                      <small>Mervin Gordon</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/rw2.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/rw3.jpg") + ")",
                    }}
                  ></div>
                  <h3 style={{ color: 'black', fontWeight: 'bold' }}>
                    How does the Research Wing work?
                  </h3>
                  <p style={{ color: 'black', fontWeight: 300 }}>
                    The Research wing routinely conducts a number of events, talks, and sessions, covering various aspects of research and work (including career options, research opportunities (on & off campus), guidance sessions, departmental orientation sessions, and technical workshops). Managers of the wing bear the responsibility of organizing these sessions with the assistance of the council secretaries.
                  </p>
                  <p style={{ color: 'black', fontWeight: 300 }}>
                    To better cultivate research interests and provide a platform to showcase the research potential in the student community, the Research Wing organizes the annual flagship event: Students’ Research Convention (SRC), which is one of the first of its kind across the country. Managers of the wing would be expected to bring in new ideas for the event and ensure it’s smooth and efficient implementation.
                  </p>
                  <p style={{ color: 'black', fontWeight: 300 }}>
                    With a lot of research projects and activities going on the campus, there arises a need for streamlining them through information collation, databasing and hosting it online, to ensure its easy availability to the student community. For eg: A database may include a list of professors, their current projects, a list of students working under them (project-wise) and positions available, along with qualifications required for each vacancy. Managers of the wing will work closely with the DORD office (Office of Research and Development) to structurize the research projects and activities on campus.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>

          <div className="section section-nucleo-icons">
            <Container>
              <Row>
                <Col lg="6" md="12">
                  <h2 className="title">STUDENT RESEARCH CONVENTION</h2>
                  <h5 className="description" style={{ color: 'black', fontWeight: 300 }}> Since its inception, IIT Kanpur has been at the forefront of many technological and scientific advancements in the past and keeps on making strides with its exceptional research culture. This stature could not have been achieved without the expertise of our faculty, and an equal dedication and excellence of our students. With this thought at heart, SRC is a kind effort to bring to light the exceptional research contributions being made by students, over the nation.

</h5>
                  <h5 className="description" style={{ color: 'black', fontWeight: 300 }}>
                    SRC aims to foster student-based research and create a platform for young researchers to meet and exchange ideas. Being the first of its kind, SRC brings together the best college students from all over the country to present their innovations and experience the current research culture across the country.
              </h5>
                  <Button
                    className="btn-round mr-1"
                    color="info"
                    href="https://anciitk.in/src/"
                    size="lg"
                    target="_blank"
                  >
                    WEBSITE
              </Button>
                  <Button
                    className="btn-round"
                    color="info"
                    href="https://www.facebook.com/srciitk/posts/1562192943917336"
                    outline
                    size="lg"
                    target="_blank"
                  >
                    FACEBOOK
              </Button>
                </Col>
                <Col lg="6" md="12">
                  {/* <div className="icons-container">
                    <i className="now-ui-icons ui-1_send"></i>
                    <i className="now-ui-icons ui-2_like"></i>
                    <i className="now-ui-icons transportation_air-baloon"></i>
                    <i className="now-ui-icons text_bold"></i>
                    <i className="now-ui-icons tech_headphones"></i>
                    <i className="now-ui-icons emoticons_satisfied"></i>
                    <i className="now-ui-icons shopping_cart-simple"></i>
                    <i className="now-ui-icons objects_spaceship"></i>
                    <i className="now-ui-icons media-2_note-03"></i>
                    <i className="now-ui-icons ui-2_favourite-28"></i>
                    <i className="now-ui-icons design_palette"></i>
                    <i className="now-ui-icons clothes_tie-bow"></i>
                    <i className="now-ui-icons location_pin"></i>
                    <i className="now-ui-icons objects_key-25"></i>
                    <i className="now-ui-icons travel_istanbul"></i>
                  </div> */}
                  <CarouselPage />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Our Team</h2>
            <div className="team">
              <Row>
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/suyash.jpg")}
                      sizes="50px"
                    ></img>
                    <h4 className="title">Suyash Singh</h4>
                    <p className="category text-info">Associate Head</p>


                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ankur.jpeg")}
                    ></img>
                    <h4 className="title">Ankur Gupta</h4>
                    <p className="category text-info">Manager</p>

                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/Neelesh.jpeg")}
                    ></img>
                    <h4 className="title">Neelesh Kumar Vig</h4>
                    <p className="category text-info">Manager</p>

                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/preeti.jpg")}
                    ></img>
                    <h4 className="title">Preeti Menghwani</h4>
                    <p className="category text-info">Manager</p>


                  </div>
                </Col>
                <Row>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/Diya.jpg")}
                      ></img>
                      <h4 className="title">Diya Singhal</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/shivam.jpg")}
                      ></img>
                      <h4 className="title">Shivam Malhotra</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/Rishabh_Katiyar.jpg")}
                      ></img>
                      <h4 className="title">Rishabh Katiyar</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/Jignesh_Mohanty.jpg")}
                      ></img>
                      <h4 className="title">Jignesh Mohanty</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>

                </Row>
                <Row>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/Gaurav Kumar.jpg")}
                      ></img>
                      <h4 className="title">Gaurav Kumar</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/DebadityaB.jpg")}
                      ></img>
                      <h4 className="title">Debaditya Bhattacharya</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/sanyukta.jpg")}
                      ></img>
                      <h4 className="title">Sanyukta Agarwal</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/Ananya2.jpeg")}
                      ></img>
                      <h4 className="title">Ananya Singh</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>

                </Row>
                <Row>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/Aditi.jpg")}
                      ></img>
                      <h4 className="title">Aditi Singh</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>
                  <Col md="3">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/Mantaas.jpg")}
                      ></img>
                      <h4 className="title">Mantaas Singh</h4>
                      <p className="category text-info">Secretary</p>


                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}


export default Home;
