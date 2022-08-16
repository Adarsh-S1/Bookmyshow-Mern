import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { StickyContainer, Sticky } from "react-sticky";
import ScrollTrigger from "react-scroll-trigger";
import "../css/Moviedetails/Aboutmovie.css";
import Offers from "./Offers";
import Cast from "./Cast";
import Reviewsslide from "./Reviewsslide";
import Alsolike from "./Alsolike";
import Moviedescription from "./Moviedescription";
import Moviedetailsnav from "./Moviedetailsnav";
const Aboutmovie = () => {
  const [navView, setNavView] = useState(false);
  const onEnterViewport = () => {
    setNavView(false);
  };
  const onExitViewport = () => {
    setNavView(true);
  };
  return (
    <StickyContainer>
      <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
        <Sticky>
          {({ style }) => (
            <div
              className={navView ? "moviedetailsnav" : "moviedetailsnavhidden"}
              style={style}
            >
             <Moviedetailsnav/>
              <Button>Book Tickets</Button>
            </div>
          )}
        </Sticky>
      </ScrollTrigger>

      <div className="aboutmovie">
        <Moviedescription />
        <hr />
        <Offers />
        <hr />
        <Cast />
        <hr />
        <Reviewsslide />
        <hr />
        <Alsolike />
        <hr />
      </div>
      <div className="privacynote">
        <p>
          Privacy Note <br />
          <small>
            By using www.bookmyshow.com(our website), you are fully accepting
            the Privacy Policy available at{" "}
            <span>https://bookmyshow.com/privacy</span> governing your access to
            Bookmyshow and provision of services by Bookmyshow to you. If you do
            not accept terms mentioned in the
            <span> Privacy Policy</span>, you must not share any of your
            personal information and immediately exit Bookmyshow.
          </small>
        </p>
      </div>
    </StickyContainer>
  );
};

export default Aboutmovie;
