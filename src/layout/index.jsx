/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Outlet } from "react-router-dom";

// UI_Local Components
import { PageHeader } from '../components';

/* ------------------------------------ */
/*                 Layout               */
/* ------------------------------------ */
function Layout() {
  /* ********** RENDERING ************* */
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}

export default Layout;