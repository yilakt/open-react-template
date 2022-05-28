import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Image from "../elements/Image";
import GlobalContext from "../../context/globalContext";
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const { globalState, setGlobalContext } = useContext(GlobalContext);

  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  const renderModal = () => {
    setGlobalContext({
      ...globalState,
      showDefaultModal: !globalState.showDefaultModal,
    });
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div
            onClick={() => renderModal()}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
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
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
