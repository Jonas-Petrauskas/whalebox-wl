import "./App.scss";
import FormComponent from "./components/form/formComponent";
import RecentlyAdded from "./components/recentyAdded/recentlyAddedComponent";
import Footer from "./components/footer/footerComponent";
import SideNav from "./components/sideNavigation/sideNav";
import DesktopSideNav from "./components/desktopNav/desktopNav";

function App() {
  return (
    <div className="App">
      <div className="mob-side-nav">
        <SideNav />
      </div>
      <div className="preview-wrapper">
        <div className="prev-desktop-side">
          <DesktopSideNav />
        </div>
        <div className="prev-content">
          <FormComponent />
          <RecentlyAdded />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
