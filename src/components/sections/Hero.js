import React, { useState, useContext } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import GlobalContext from "../../context/globalContext";
import amplitude from "amplitude-js";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const { globalState, setGlobalContext } = useContext(GlobalContext);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const renderModal = () => {
    if (!globalState?.showDefaultModal)
      amplitude
        .getInstance()
        .logEvent("prelaunch c2a pressed - play/app store icon");
    setGlobalContext({
      ...globalState,
      showDefaultModal: !globalState.showDefaultModal,
    });
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Exciting Ideas For{" "}
              <span className="text-color-primary">Dates</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Spice up your relationship with one of a kind ideas curated
                perfectly to you and your partner's interests.
              </p>
              <div
                onClick={() => renderModal()}
                style={{ display: "flex", justifyContent: "space-around" }}
                data-reveal-delay="600"
              >
                {/* <a href="https://cruip.com/"> */}
                <Image
                  src={require("./../../assets/images/playstoreicon.png")}
                  alt="Features split 01"
                  width={200}
                  height={250}
                  style={{ borderRadius: 10 }}
                />
                {/* </a> */}
                {/* <a href="https://cruip.com/"> */}
                <Image
                  src={require("./../../assets/images/appstoreicon.png")}
                  alt="Features split 01"
                  width={200}
                  height={250}
                  style={{ borderRadius: 10 }}
                />
                {/* </a> */}
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              // href="#0"
              aria-controls="video-modal"
              onClick={() => null}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/banner1.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
