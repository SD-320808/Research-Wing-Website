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
                <MetaTags>
                    <title>DAAD WISE 2020</title>
                    <meta name="description" content="Scholarship for bright minds" />
                    <meta property="og:title" content="DAAD WISE 2020" />
                    <meta
                        property="og:image"
                        content="https://career.webindia123.com/career/options/images/opjems.jpg"
                    />
                </MetaTags>
                <ProfilePageHeader title={"OPJEMS 2020"} />
                <div className="section">
                    <Container>
                        <div className="button-container"></div>

                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                <h4 className="title text-center">DAAD WISE Award Details</h4>
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
                                    <div>
                                        <table border={0} cellPadding={0} cellSpacing={0}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                                                        <br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                                                        <p
                                                            style={{
                                                                margin: "0cm",
                                                                fontSize: 16,
                                                                fontFamily: '"Calibri",sans-serif',
                                                            }}
                                                        >
                                                            <br />
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <img
                                                    width={287}
                                                    src="blob:https://froala.com/4ec3ac46-eced-4aba-9b27-078d38ea04a4"
                                                    align="left"
                                                    alt="Gaenseliesel (Goettingen) - 2020 All You Need to Know BEFORE You Go (with  Photos) - Tripadvisor"
                                                    className="fr-fil fr-dii"
                                                />
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    As November inches closer, the tension of procuring a
                                                    research internship is mounting. Especially for people
                                                    who want to procure the prestigious DAAD fellowship
                                                    for research internships in Germany. Unlike some other
                                                    internship programs, DAAD-WISE is not an internship
                                                    program, i.e. one has to have already got an
                                                    internship offer in Germany before applying to DAAD
                                                    for fellowship (which will easily cover the costs and
                                                    leave room for saving.) This is what makes it hard in
                                                    general.&nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    So, let us talk about the big elephant in the room
                                                    first. How does one get an internship at the first
                                                    place? (although this year, that window is almost over
                                                    already!) The answer is not straight forward and
                                                    consists of a balance between several factors:
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <ol style={{ listStyleType: "decimal" }}>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <u>
                                                        <span
                                                            style={{ fontFamily: '"Times New Roman",serif' }}
                                                        >
                                                            Emailing skills:
                            </span>
                                                    </u>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        &nbsp;The stories of spam emails by Indian students
                                                        asking for internships to international professors
                                                        is well known. However, that should not dissuade you
                                                        from trying. The key is to be reasonable in your
                                                        emails and sending them to only people whose work
                                                        matches your interest (in an intense way, not “oh I
                                                        heard that topic is interesting” way). Also, the
                                                        content of the email should seldom contain generic
                                                        statements which apply to anyone, i.e. not specific
                                                        to you and the recipient (e.g. ‘I am deeply
                                                        interested in machine learning’, or, starting with
                                                        “Respected Sir/Ma’am” instead of using their name
                                                        “Respected prof. X”). Also, probably contacting
                                                        professors with whom a senior of yours worked
                                                        previously might be a good idea (provided he did
                                                        impress him)! There are other dimensions to this. I
                                                        wrote a longer article regarding this topic on a
                                                        personal blog&nbsp;
                          </span>
                                                    <a href="https://www.rokystech.com/2019/04/dos-and-donts-how-to-write-good-email.html">
                                                        <span
                                                            style={{ fontFamily: '"Times New Roman",serif' }}
                                                        >
                                                            here
                            </span>
                                                    </a>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        . &nbsp; &nbsp;
                          </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <u>
                                                        <span
                                                            style={{ fontFamily: '"Times New Roman",serif' }}
                                                        >
                                                            Field of interest:
                            </span>
                                                    </u>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        &nbsp;Although this is not always a choice, one
                                                        should know that some fields offer more
                                                        opportunities than others. This is especially true
                                                        for interdisciplinary fields and more so for
                                                        Germany. For fields that combine subjects that
                                                        typically in Indian academic scenario are rarely of
                                                        common interest to people (e.g. computer science and
                                                        biology in my case), there is a demand of skilled
                                                        researchers/professionals worldwide. I am sure there
                                                        are other such fields. So, if you are an
                                                        undergraduate student unsure of where your interests
                                                        lie and frustrated with people talking about
                                                        “Competitive Coding”, “Machine learning”, “Signal
                                                        Processing” etc. everywhere, I encourage you to look
                                                        ahead of the population and explore other (and
                                                        potentially more impactful) options. &nbsp;Take a
                                                        risk, and you might just enjoy it. Personal
                                                        experience here: This COVID pandemic has
                                                        simultaneously increased the demand and importance
                                                        of academic research and industry level work in
                                                        Bioinformatics, Biomedical engineering, Virology
                                                        etc. These fields combine almost all aspects of
                                                        fundamental sciences (and also ML/AI/CS etc. for
                                                        you) I am sure, some of my friends and juniors can
                                                        remember me telling them something like this was
                                                        coming :-p
                          </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <u>
                                                        <span
                                                            style={{ fontFamily: '"Times New Roman",serif' }}
                                                        >
                                                            Cracking an Interview:
                            </span>
                                                    </u>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        &nbsp;After extensive efforts, you manage to get the
                                                        attention of a professor. After some email
                                                        exchanges, you can almost always expect to be
                                                        invited for a “video chat”. My opinion is to always
                                                        treat this as more of a chat and less of an
                                                        interview (unlike SPO interviews, where you are
                                                        competing with many for a spot). These interviews
                                                        mostly judge you more on how you think and your
                                                        personality rather than on what you know (that
                                                        becomes clear pretty early from your emails). So,
                                                        keep calm, have a good conversation with the person
                                                        you want to work with. Rest shall be ok. I wrote a
                                                        longer article on other aspects of this, and you can
                                                        find it in the link provided earlier in point 1.
                          </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <u>
                                                        <span
                                                            style={{ fontFamily: '"Times New Roman",serif' }}
                                                        >
                                                            Look out for opportunities:
                            </span>
                                                    </u>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        &nbsp;Sometimes, all efforts fail, and you find
                                                        yourself in a dark place where you find all your
                                                        wingies/friends celebrating there SPO or research
                                                        internship offers. Please, never lose hope and
                                                        lookout for opportunities and waste no time to grab
                                                        them when you see them. My story was quite like
                                                        this.
                          </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <u>
                                                        <span
                                                            style={{ fontFamily: '"Times New Roman",serif' }}
                                                        >
                                                            CPI:
                            </span>
                                                    </u>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        &nbsp;It matters. Period. The closer to or higher
                                                        than 9, the better. (First and second years, take
                                                        note!) That being said, I am vehemently against
                                                        shunning all forms of campus activity just to focus
                                                        on your CPI. Both can be and should be done. The key
                                                        is “Discipline”. But no more on that for this
                                                        article&nbsp;
                          </span>
                                                </span>
                                            </li>
                                        </ol>
                                        <p
                                            style={{
                                                marginTop: "0cm",
                                                marginRight: "0cm",
                                                marginBottom: "0cm",
                                                marginLeft: "36.0pt",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    So, now it’s time to tell my story:
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I am
                                                    Y15-CSE. Most of my first year went in learning key
                                                    things a CSE student needs (coding, learning Linux,
                                                    git). I spent a semester with the AUV team, which
                                                    helped. (that was when AUV was just starting). Then my
                                                    ACA project and summer 2016 (under Prof. TV Prabhakar)
                                                    was mostly about Android development. The critical
                                                    insight I gained from them is that I do not want to do
                                                    software dev.
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    Meanwhile, the summer allowed me to explore ‘Coursera’
                                                    a lot. I learned about Machine Learning (Andrew Ng
                                                    course obviously). So, I tried to move to something
                                                    theoretical. Quantum computing seemed to be something
                                                    interesting. I approached Prof. Rajat Mittal, and he
                                                    taught me a lot on the subject. He used to spend about
                                                    1-2 hours per week with me, and I am thankful. But,
                                                    soon I realized that Quantum computing is not
                                                    something I can work on unless I am at Google, D-wave
                                                    etc. So, heavy-hearted, I moved on. In December 2016,
                                                    I first came into contact with the field of
                                                    Computational Biology and Bioinformatics (CBB), and it
                                                    was extremely appealing to me (for more context, I had
                          biology in 11-12<sup>th</sup> and had the option of
                          pursuing MBBS but chose not to. Another decision in my
                          academic journey I am somewhat glad I made).
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    Soon I realized IITK sadly did not have a research
                                                    culture in CBB (at least then, I hear of some advances
                                                    in that front nowadays). So, I went back to focusing
                                                    on learning ML as almost everyone does. I spent my
                                                    second-year summer (2017) in IISC, Bangalore, working
                                                    on algebraic complexity theory. My linear algebra
                                                    background became quite strong, but, the main thing
                                                    that came out of the process is that I do not like it
                                                    at all. I searched for professors in IITK for people
                                                    working on something close to computational biology
                                                    and stumbled on Prof. Nisheeth Srivastava’s profile. I
                                                    approached him, and he seemed to be a fun person to
                                                    work with, (we went close to submitting a paper but I
                                                    did not get back to work on it after the first
                                                    rejection. A masters student continued) however, I
                                                    realized what he does is not computational biology. I
                                                    was beginning to learn the subtle differences between
                                                    closely named fields. However, it was third-year
                                                    already, and the rush for internships had already
                                                    begun (Man, everything happened so fast! And I don’t
                                                    even know what I want to do or for that matter can
                                                    do.) The worst thing that can happen to anyone at that
                                                    point is switching off. And, precisely that happened
                                                    to me. I did not register for SPO internships (as I
                                                    was afraid that I would have to accept an offer if I
                                                    got one). But the bad part was, I was not mailing
                                                    profs for internships either. Somehow, I never knew
                                                    what to write, and was afraid of “not getting
                                                    replies”, “making a fool of myself” or “they might
                                                    think I am spamming”. Please have a little more
                                                    confidence in yourself and do not follow me. I applied
                                                    to MITACS but heard that IITK people for some reason
                                                    do not usually get selected for that. I knew of DAAD
                                                    from seniors posting about it but was not considering
                                                    it. Months rolled by, and soon it was the second week
                                                    of October.
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    70% of my batchmates were all set, and I had no plan.
                                                    Then, an email from SPO struck my attention. A
                                                    professor from Max Planck Institute for Biophysical
                                                    Chemistry, Goettingen was actively seeking a student
                                                    skilled in Machine Learning and Computer science for
                                                    an internship in bioinformatics. It was “the”
                                                    opportunity for me, and I sent my resume promptly as
                                                    the email asked. This was followed by a 4-hour long
                                                    interview in an SPO office with about 5-6 candidates
                                                    and a post-doc from the German lab. It was the third
                                                    week of October. I went in confident, not because I
                                                    knew a lot about either ML or bioinformatics, but
                                                    because I knew this is probably the first and last
                                                    chance for me to get a foreign intern in a top lab and
                                                    in the subject I was so interested in exploring more,
                                                    a subject about which (barring an OE course) even IIT
                                                    Kanpur in all its glory could not serve my thirst for
                                                    knowledge. And it worked out. With about nine days
                                                    left for the DAAD deadline (1st November), I was
                                                    accepted!
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    What followed is a frantic flurry of paperwork!
                                                    Although DAAD-WISE has a portal that helps you build
                                                    your application, the whole application had to be
                                                    physical and send via post to Delhi before the
                                                    deadline. In a week, I had to get a letter from DOSA
                                                    office, a letter from HOD (Prof. Sandeep Shukla), A
                                                    recommendation letter (thanks to Prof. Arnab
                                                    Bhattacharya), some documents from the German
                                                    Institute, my transcript, research proposal and a very
                                                    long form. However, it was finally done, and FedEx
                                                    delivery was on time.&nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    Now, it was time to wait, a long, painful wait till
                                                    January, during which rejection from MITACS came.
                                                    Doubts kept creeping up from time to time, but
                                                    finally, I was accepted. &nbsp;A pleasant surprise
                                                    came with the acceptance in the form of DAAD
                                                    increasing the fellowship amount by 1000 Euros than
                                                    what previously was.&nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    Looking for housing and Visa application was on the
                                                    cards now. Some logistic tips for these and other
                                                    things:
                        </span>
                                            </span>
                                        </p>
                                        <ol style={{ listStyleType: "decimal" }}>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman", serif' }}
                                                    >
                                                        You have to arrange for housing first. Otherwise,
                                                        they will keep your visa application pending until
                                                        you do so.&nbsp;
                          </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        Do not pay anything online for housing. Everything
                                                        legal in Germany is paperwork. So, you pay only
                                                        after going there and signing your contract.
                          </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        Learn some useful terms regarding housing and best
                                                        if you can strike up a connection from someone in
                                                        your host German lab to help you get accommodation.
                          </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        Visa application is not very difficult for
                                                        DAAD-WISE. There is a big DAAD-WISE group on
                                                        Facebook which has all required sample documents and
                                                        processes in its files section. Check them out. You
                                                        need to apply through VFS-global, and if everything
                                                        is ok, it will be sorted within a week or at max
                                                        two. For IIT Kanpur people, the applications get
                                                        considered at Delhi consulate. Feel free to email
                                                        them if needed, and they are responsive.
                          </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ fontSize: 12 }}>
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman", serif' }}
                                                    >
                                                        You will have to have a German bank account because
                                                        DAAD does not send money overseas. So, open one
                                                        immediately after reaching there. I got my student
                                                        account at Deutsche bank. In some cities that is not
                                                        possible. So, keep up with DAAD information session
                                                        to know your options.&nbsp;
                          </span>
                                                </span>
                                            </li>
                                        </ol>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                marginLeft: "18.0pt",
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    DAAD asks no completion certificate or report of your
                                                    internship. Only a two-page experience report. I
                                                    produce below what I wrote in mine, which summarizes
                                                    my experience there:
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    “I was among the fortunate few who were selected by
                                                    DAAD-WISE program for a funded internship in Germany
                                                    during three summer months of 2018, i.e. May to July.
                                                    My German host institute was Max Planck Institute for
                                                    Biophysical Chemistry, Goettingen. I was accepted for
                                                    the internship with the Quantitative and Computational
                                                    Biology group at the institute led by Dr Johannes
                                                    Soeding. My internship started on 6th May and ended on
                                                    2nd August 2018.
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <img
                                                    width={290}
                                                    src="blob:https://froala.com/03c9d6f2-5f25-4326-acc0-e87a63078d6d"
                                                    align="left"
                                                    className="fr-fil fr-dii"
                                                />
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    I worked on a model for trans-eQTL detection from
                                                    human genotype and expression data. The institute had
                                                    a very vibrant research culture. My supervisor and
                                                    post-doctorates were very knowledgeable and yet
                                                    helpful and friendly. I learned how it feels to work
                                                    with a cosmopolitan atmosphere with people from all
                                                    over the world. In terms of research experience, it
                                                    was an eye-opener. I got to experience a whole
                                                    research process of modelling, implementing, testing
                                                    and validation that leads up to a research paper.
                                                    Also, I learned many technical details related to my
                                                    field which will surely help me in future. We created
                                                    a bond among ourselves within the short time frame.
                                                    The group even held a small farewell meeting for me
                                                    and presented me with gifts and a farewell card. My
                                                    supervisor was impressed with my work, and he
                                                    generously wrote this internship completion
                                                    certificate for me (see&nbsp;
                        </span>
                                                <a href="https://timkartar.github.io/soedinglab_letter.PDF">
                                                    <span
                                                        style={{ fontFamily: '"Times New Roman",serif' }}
                                                    >
                                                        here
                          </span>
                                                </a>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    ). I am still in contact with my host group of the
                                                    internship and hope to work with them again in future.
                                                    As of 2020, I got authorship on the paper they
                                                    published recently corresponding to the work I did in
                                                    my internship.
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <table
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                            style={{ marginLeft: "12.0pt" }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                                                        <span style={{ fontSize: 12 }}>
                                                            <br />
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <img
                                                    width={268}
                                                    src="blob:https://froala.com/880a4ddd-6037-45aa-8d24-f7640af9ab11"
                                                    align="left"
                                                    className="fr-fil fr-dii"
                                                />
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    Goettingen has very pleasant weather during the
                                                    summer. Moreover, the city itself is beautiful. The
                                                    environment is clean, and the population is varied
                                                    since the city is built around the University. Thanks
                                                    to one of my colleague from the lab I got a lovely
                                                    apartment for rent at the outskirts of the city which
                                                    gave me equal convenience in reaching both the city
                                                    centre and the institute at the Nikolausberg hills. I
                                                    enjoyed the bakery products, ice creams and other food
                                                    items at the institute canteen and in the city very
                                                    much. In general people at Goettingen maintain a very
                                                    high quality of living. There are many museums and
                                                    tourist spots in and around Goettingen. I visited many
                                                    of them in my weekends, and overall experience was
                                                    great. I availed banking services from Deutsche Bank.
                                                    They made it very easy to open student account which
                                                    requires very little paperwork and other hassles. I
                                                    heard other people having to register in town halls,
                                                    but it was not necessary for Goettingen, at least for
                                                    Deutsche Bank, since I was living for three months
                                                    only. The only thing I had a slight problem to adjust
                                                    with at first was the day-night cycle. In summer
                                                    Germany has a very long day time and a 6-7 hour long
                                                    night. In India, we are not used to this, and this
                                                    breaks the sleep cycle. But, it’s nobody’s fault and
                                                    within a month or two everyone gets adjusted to this
                                                    scenario.
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    In terms of transportation, Goettingen is well
                                                    connected to the rest of Germany with a very
                                                    convenient and fast railway. There are two nearby
                                                    airports. One is just in the next city Hannover, and
                                                    the 2nd nearest one is in Frankfurt. I availed the
                                                    Frankfurt airport for my transportation. DAAD’s travel
                                                    allowance nicely covered the costs. I also got the
                                                    chance to visit the Frankfurt city, which is a busier
                                                    one than Goettingen and equally nice. Lastly, I want
                                                    to thank DAAD for their financial support not only
                                                    because of quantity but also because of their
                                                    punctuality. I always got financial support for each
                                                    month in time and hence faced no issues with money.
                                                    The whole process was extremely smooth, and the
                                                    authorities were easily reachable for any doubt or
                                                    help. It would have been nearly impossible for me to
                                                    fund this internship if DAAD was not there to help.”
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    To conclude, after three summers since entering IIT
                                                    Kanpur, I was finally certain about an impactful
                                                    topic, and I loved working on it. I spent my fourth
                                                    year at IIT Kanpur applying to grad schools and
                                                    exploring my interests in Linguistics and NLP in the
                                                    Bengali language with Prof. Arnab Bhattacharya. I
                                                    developed a test for linguistics from the linguistics
                                                    courses by Prof. Achla Raina and finished my B.Tech
                                                    with a minor in it. &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    I am currently pursuing my PhD at in Computational
                                                    Biology and Bioinformatics in Rohs Lab at the
                                                    University of Southern California in the beautiful,
                                                    and currently, COVID infested city of Los Angeles. We
                                                    develop machine learning and other computational
                                                    methods to infer knowledge about biological mechanisms
                                                    of processes happening in the cell. I shall always be
                                                    indebted to IITK for the polished build up it has
                                                    given me in my long and twisted to the path in
                                                    academic life so far.
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    Overall, if you are true to yourself and value your
                                                    intentions above what others tell you to do, then as
                                                    long as you put in an honest effort, there is always
                                                    light at the end of the tunnel. Thanks to Academic and
                                                    Career Council, IIT Kanpur for reaching out to me and
                                                    I hope this article can be of help to some students.
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                                textAlign: "justify",
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>
                                                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                                                    &nbsp;
                        </span>
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                margin: "0cm",
                                                fontSize: 16,
                                                fontFamily: '"Calibri",sans-serif',
                                            }}
                                        >
                                            <span style={{ fontSize: 12 }}>&nbsp;</span>
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
                                        <div>
                                            <h3
                                                style={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {" "}
                        For Queries regarding OPJEMS
                      </h3>
                                            <iframe
                                                src="https://docs.google.com/forms/d/e/1FAIpQLScel1ZUATdGafCWLlSWDjdO__xgK9K3Bx5cqtPhOI9cllaVdg/viewform?embedded=true"
                                                width="100%"
                                                height="520"
                                                frameborder="0"
                                                marginheight="0"
                                                marginwidth="0"
                                            >
                                                Loading…
                      </iframe>
                                        </div>
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
