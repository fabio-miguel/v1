import shopifyImgGrey from "../images/services/greyIcons/shopifyImgGrey.png";
import reactImgGrey from "../images/services/greyIcons/reactImgGrey.png";
import cssImgGrey from "../images/services/greyIcons/cssImgGrey.png";
import htmlImgGrey from "../images/services/greyIcons/htmlImgGrey.png";
import javascriptImgGrey from "../images/services/greyIcons/javascriptImgGrey.png";
import remixImgGrey from "../images/services/greyIcons/remixImgGrey.png";
import sanityImgGrey from "../images/services/greyIcons/sanityImgGrey.png";
import liquidImgGrey from "../images/services/greyIcons/liquidshopifyImgGrey.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="services-content">
            <div className="services-content__title">
              <h2>SERVICES</h2>
            </div>
            <div className="services-content__list">
              <article className="service">
                <div className="service-info">
                  <h3>Frontend FLEX</h3>

                  <div className="service-icons">
                    <h4>Tech| </h4>
                    <img
                      className="react-img"
                      src={reactImgGrey}
                      alt="react-icon"
                    />
                    <img
                      className="javascript-img"
                      src={javascriptImgGrey}
                      alt="javascript-icon"
                    />
                    <img
                      className="html-img"
                      src={htmlImgGrey}
                      alt="html-icon"
                    />
                    <img className="css-img" src={cssImgGrey} alt="css-icon" />
                  </div>
                </div>
                <div className="service-btn-container">
                  <Link smooth to="/frontend">
                    VIEW SERVICE
                  </Link>
                </div>
              </article>

              <article className="service">
                <div className="service-info">
                  <h3>SHOPIFY THEME DEVELOPMENT</h3>

                  <div className="service-icons">
                    <h4>Tech| </h4>
                    <img
                      className="react-img"
                      src={shopifyImgGrey}
                      alt="shopify-icon"
                    />
                    <img
                      className="react-img"
                      src={liquidImgGrey}
                      alt="shopify-liquid-icon"
                    />
                    <img
                      className="javascript-img"
                      src={javascriptImgGrey}
                      alt="javascript-icon"
                    />
                    <img
                      className="html-img"
                      src={htmlImgGrey}
                      alt="html-icon"
                    />
                    <img className="css-img" src={cssImgGrey} alt="css-icon" />
                  </div>
                </div>
                <div className="service-btn-container">
                  <Link smooth to="/shopify-theme-development">
                    VIEW SERVICE
                  </Link>
                </div>
              </article>

              <article className="service">
                <div className="service-info">
                  <h3>Full-Stack Pack</h3>
                  <h4>
                    Frontend + CMS &#91; Site build w/ Content Management System{" "}
                    <span>inc. E-commerce</span> &#93;
                  </h4>
                  <div className="service-icons">
                    <h4>Tech| </h4>
                    <img
                      className="remix-img"
                      src={remixImgGrey}
                      alt="remix-icon"
                    />
                    <img
                      className="react-img"
                      src={reactImgGrey}
                      alt="react-icon"
                    />
                    <img
                      className="javascript-img"
                      src={javascriptImgGrey}
                      alt="javascript-icon"
                    />
                    <img
                      className="html-img"
                      src={htmlImgGrey}
                      alt="html-icon"
                    />
                    <img className="css-img" src={cssImgGrey} alt="css-icon" />
                    <h4> + </h4>
                    <img
                      className="shopify-img"
                      src={shopifyImgGrey}
                      alt="shopify-icon"
                    />
                    <img
                      className="shopify-img"
                      src={sanityImgGrey}
                      alt="sanity-icon"
                    />
                  </div>
                </div>
                <div className="service-btn-container">
                  <Link smooth to="/fullstack">
                    VIEW SERVICE
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
