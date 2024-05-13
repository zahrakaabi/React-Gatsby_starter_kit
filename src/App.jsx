/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// UI_Local Components
import Layout from './layout';
import Loader from './shared/loader';

// Styles
import './shared/styles/global.css';
import './shared/styles/variables.css';
import './shared/styles/typography.css';

// Lazy UI Local Pages
/* ------------- HOME PAGE ------------ */
const IndexPage = lazy(() => import('./pages').then((module) => {
  return { default: module.IndexPage };
}));

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
function App() {
  /* ********** RENDERING ************* */
  return (
    <div className="App">
      <HelmetProvider>{/* CCR | SSR */}
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<IndexPage />} />
                </Route>
                <Route path="*" element={<div><h2>404 Page not found etc</h2></div>} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;