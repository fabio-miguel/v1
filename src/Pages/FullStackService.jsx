import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import shopifyImgGrey from "../images/services/greyIcons/shopifyImgGrey.png";
import sanityImgGrey from "../images/services/greyIcons/sanityImgGrey.png";
import reactImgGrey from "../images/services/greyIcons/reactImgGrey.png";
import cssImgGrey from "../images/services/greyIcons/cssImgGrey.png";
import htmlImgGrey from "../images/services/greyIcons/htmlImgGrey.png";
import javascriptImgGrey from "../images/services/greyIcons/javascriptImgGrey.png";
import remixImgGrey from "../images/services/greyIcons/remixImgGrey.png";
import { Link } from "react-router-dom";

const FullStackService = () => {
  return (
    <>
      <section id="fullstack" className="fullstack">
        <div className="container">
          <div className="fullstack-content">
            <div className="col-left">
              <div className="header">
                <h2>Full-Stack Pack</h2>
              </div>
              <div className="pack-description">
                <h4>ABOUT THIS SERVICE</h4>
                <p>
                  I create a full-stack application where the user interface can
                  be dynamical managed/updated through a customised content
                  management system &#40;CMS&#41;. This service is all about
                  creating a complete application, from the ground up, that can
                  give you full autonomy beyond project completion.
                </p>

                <p>
                  Whether it's an ecommerce storefront (Shopify), gallery,
                  portfolio, blog or combination, I will develop the user
                  interface and have it linked to a CMS for you to manage your
                  site content. Upon completion, I educate my clients on how to
                  manage their website content. P.S. I used to be a teacher, so
                  I'm good at this ;&#41;
                </p>

                <p>
                  <strong>Why go Headless?</strong> There are several reasons
                  for going headless and this is something I will advise on
                  based on your requirements. To keep it short, the main reasons
                  often revolve around scalability for growing businesses,
                  beskpoke/customisable (and faster) editing environments and
                  developer flexibility.
                </p>

                <p>
                  I help businesses elevate their brand identity and web
                  presence. There are considerations to be understood for any
                  development route of which I will guide you through a
                  recommended solution for your business needs.
                </p>

                <h4>THE PROCESS</h4>
                <ul>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>
                    1-1 Call
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>
                    Creative Direction &#91;
                    <span>
                      collaborate with a professional designer available
                    </span>
                    &#93;
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>Agreed Timeframe &
                    Fixed Cost
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>Regular & Relevant
                    Progress Updates
                  </li>
                  <li>
                    <i class="fa-solid fa-caret-right"></i>Completion & Handover
                  </li>
                </ul>
              </div>
              {/* call to action section */}
              {/* <div className="call-to-action-content">
                <h2>Let's Collaborate</h2>
                <a href="mailto:info@fabiomiguel.com">WORK WITH ME</a>
              </div> */}
              {/* more services section */}
              <div className="more-services-content">
                <h4>MORE SERVICES</h4>
                <article className="more-service">
                  <div className="more-service-info">
                    <h3>Frontend</h3>
                    <div className="more-service-icons">
                      <img
                        className="react-img-more-services"
                        src={reactImgGrey}
                        alt="react-icon"
                      />
                      <img
                        className="javascript-img-more-services"
                        src={javascriptImgGrey}
                        alt="javascript-icon"
                      />
                      <img
                        className="html-img-more-services"
                        src={htmlImgGrey}
                        alt="html-icon"
                      />
                      <img
                        className="css-img-more-services"
                        src={cssImgGrey}
                        alt="css-icon"
                      />
                    </div>
                  </div>
                  <div className="more-service-btn-container">
                    <Link smooth to="/frontend">
                      VIEW SERVICE
                    </Link>
                  </div>
                </article>
              </div>
            </div>
            {/* right page column */}
            <div className="col-right">
              <div className="info-container">
                <div className="center-info-container">
                  <div className="center-info">
                    <p>This is a flat rate service</p>
                    <div className="contact-me-btn">
                      <a href="mailto:info@fabiomiguel.com">CONTACT ME</a>
                    </div>
                  </div>
                </div>
                <h4>Service Details</h4>
                <p>
                  <i class="fa-regular fa-clock"></i>
                  Typically 4-6 weeks
                </p>
                <h4>Skills</h4>
                <p>
                  <i class="fa-solid fa-computer-mouse"></i>Frontend Web
                  Development
                </p>
                <p>
                  <i class="fa-solid fa-computer-mouse"></i>Backend
                  Functionality
                </p>
                <h4>Tech</h4>
                <div className="fullstack-service-icons">
                  <div className="tech-container">
                    <img
                      className="remix-img-fullstack-service"
                      src={remixImgGrey}
                      alt="remix-icon"
                    />
                    <p>Remix</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="react-img-fullstack-service"
                      src={reactImgGrey}
                      alt="react-icon"
                    />
                    <p>React</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="javascript-img-fullstack-service"
                      src={javascriptImgGrey}
                      alt="javascript-icon"
                    />
                    <p>Javascript</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="html-img-fullstack-service"
                      src={htmlImgGrey}
                      alt="html-icon"
                    />
                    <p>HTML</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="css-img-fullstack-service"
                      src={cssImgGrey}
                      alt="css-icon"
                    />
                    <p>CSS</p>
                  </div>

                  <div className="tech-container">
                    <img
                      className="shopify-img-fullstack-service"
                      src={shopifyImgGrey}
                      alt="shopify-icon"
                    />
                    <p>Shopify</p>
                  </div>
                  <div className="tech-container">
                    <img
                      className="shopify-img-fullstack-service"
                      src={sanityImgGrey}
                      alt="sanity-icon"
                    />
                    <p>Sanity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
        <Footer />
      </section>
    </>
  );
};
export default FullStackService;
