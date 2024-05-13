/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useTranslation } from "react-i18next";

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function PageHeader() {
    // translation
    const { t, i18n } = useTranslation('common');
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    /* ********** RENDERING *********** */
    return (
      <nav className='container flex justify-center items-center'>
        <h1>{t('navbar.header')}</h1>
        <div className="translation-btns flex">
            <button 
                className="cursor-auto flex items-center justify-center" 
                value="fr"
                onClick={(e) => changeLanguage(e.target.value)}
            >
                fr
            </button>
            <button
                className="cursor-auto flex items-center justify-center"
                value="en" 
                onClick={(e) => changeLanguage(e.target.value)}
            >
                en
            </button>
        </div>
      </nav>
    );
  }
  
  export default PageHeader;