/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useTranslation } from "react-i18next";

// Images
import REACT_LOGO from "../../../assets/images/react.svg";

// Styles
import './index.css';

/* ---------------------------------------- */
/*               BANNER COMPONENT           */
/* ---------------------------------------- */
function HeroSection() {
    // translation
    const { t } = useTranslation('common');
    
    /* ************ RENDERING ************* */
    return (
        <div className="hero-container container flex justify-center items-center">
          <img src={REACT_LOGO} alt="" />
          <div className="hero-content">
            <h1>{t('index.hero')}</h1>
          </div>
          <img src={REACT_LOGO} alt="" />
        </div>
    )
}
export default HeroSection;