/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages

// UI Local Components
import { HeroSection } from '../../components';

// SEO
import SEO from '../../shared/SEO';

/* ---------------------------------------- */
/*                  Home PAGE               */
/* ---------------------------------------- */
function IndexPage() {
    /* ************ RENDERING ************* */
    return (
        <>
            <SEO
                title='Home | Starter kit'
                description='React | Gatsby Starter Kit'
                name='home'
            />
            
            <div>
                <HeroSection />
            </div>
        </>
    )
}
export default IndexPage;