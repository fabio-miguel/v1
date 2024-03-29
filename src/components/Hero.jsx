import decagram from "../images/hero/decagram.png";
import goku from "../images/hero/goku.gif";
import { useToggle } from "../components/ToggleContext";
const Hero = () => {
  const { isToggled } = useToggle();

  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content-cols">
            <div className="hero-content">
              <div className="hero-content__text">
                <div className="hero-content__text__title">
                  <h1>
                    FABIO <span> MIGUEL!</span>
                  </h1>
                  <h2>Creative Web Engineer</h2>
                  <h2>
                    Specialising in JavaScript, React, Remix.js, Shopify & API
                    CMS systems
                  </h2>
                </div>
              </div>
            </div>

            <div className="hero-content-right">
              <div className="quotes">
                <div className="decagram-container">
                  <div
                    className={`decagram ${isToggled ? "hide-decagram" : ""}`}
                  >
                    <img src={decagram} alt="" className="rotating-image" />
                    <div className="text-container">
                      <div className="text">
                        <p>CURRENTLY ACCEPTING</p>
                        <p>1 PROJECT IN Q4</p>
                      </div>
                    </div>
                  </div>
                </div>

                {isToggled && (
                  <div className="goku-black-ss-rose-container">
                    <img
                      src={goku}
                      alt="Goku Black SS Rose"
                      className="goku-black-ss-rose"
                    />
                    <div>"LEVEL UP!"</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
