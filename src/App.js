/** Imports */
/** Basic */
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import * as React from "react";
/** Styles */
import { useTheme } from "@mui/material/styles";
/** Custom */
/** Structures */
import Navigation from "./structures/navigation";
import Footer from "./structures/footer";
import Body from "./structures/body";
/** Pages */
import * as Pages from "./pages/pages";
/** Components */
import { FullScreenModal } from "./structures/modal";
/** Pictures */
import placeholder from "./assets/pics/placeholders/imgPlaceholder.png";
/** Define App structure */
const App = () => {
  /** States */
  /** Title */
  const [docTitle, setDocTitle] = useState("");
  const [pageTitle] = useState("DnD 5e");
  /** Modal */
  const [modal, setModal] = useState(false);
  /** Modal image and its name */
  const [name, setName] = useState("     Placeholder");
  const [image, setImage] = useState(placeholder);
  /** Collapse */
  const [expanded, setExpanded] = useState(false);
  /** Higher menu */
  const [menu, setMenu] = useState(false);
  /** Lower menu */
  const [subMenuLvl4, setSubMenuLvl4] = useState(false);
  const [subMenuLvl3, setSubMenuLvl3] = useState(false);
  const [subMenuLvl2, setSubMenuLvl2] = useState(false);
  const [subMenuLvl1, setSubMenuLvl1] = useState(false);
  /** Scroll to Top button */
  const [showButton, setShowButton] = useState(false);
  /** Website title / Tab name */
  document.title = "DnD 5e" + (docTitle.length !== 0 ? ": " + docTitle : "");
  /** Pages root path */
  const pages = "/dev/";
  /** Variables */
  /** Breakpoints */
  const underMedium = useMediaQuery(useTheme().breakpoints.down("md"));
  const medium = useMediaQuery(useTheme().breakpoints.up("md"));
  /** Current location / site path */
  const location = useLocation();
  /** Effect */
  /** When location change document title change also */
  useEffect(() => {
    setDocTitle(location.pathname.split("/").reverse()[0].replaceAll("-", " "));
  }, [location]);
  /** When width changes and breakpoint md is hit */
  useEffect(() => {
    setTimeout(1);
    setMenu(false);
    setSubMenuLvl1(false);
    setSubMenuLvl2(false);
    setSubMenuLvl3(false);
    setSubMenuLvl4(false);
  }, [medium]);
  /** Scroll to Top button */
  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisiblity);
    };
  }, []);
  /** Render Structure */
  return (
    <>
      <FullScreenModal
        setExpanded={setExpanded}
        setModal={setModal}
        expanded={expanded}
        modal={modal}
        image={image}
        name={name}
      />
      <Navigation
        setSubMenuLvl4={setSubMenuLvl4}
        setSubMenuLvl3={setSubMenuLvl3}
        setSubMenuLvl2={setSubMenuLvl2}
        setSubMenuLvl1={setSubMenuLvl1}
        subMenuLvl4={subMenuLvl4}
        subMenuLvl3={subMenuLvl3}
        subMenuLvl2={subMenuLvl2}
        subMenuLvl1={subMenuLvl1}
        underMedium={underMedium}
        pageTitle={pageTitle}
        setMenu={setMenu}
        setName={setName}
        medium={medium}
        pages={pages}
        menu={menu}
      />
      <Routes>
        <Route path={pages} element={location.search.replace("?", "").length>0?<Navigate to={location.search.replace("?", "")} replace={true} />:<Body />} />
        {Pages.pages.map((item, i) => (
          <Route
            path={pages + item.title}
            key={item.title}
            element={
              <Body
                content={
                  <item.component
                    setModal={setModal}
                    setImage={setImage}
                    setName={setName}
                  />
                }
              />
            }
          />
        ))}
        <Route path="*" element={<Body />} />
      </Routes>
      <Footer
        setSubMenuLvl4={setSubMenuLvl4}
        setSubMenuLvl3={setSubMenuLvl3}
        setSubMenuLvl2={setSubMenuLvl2}
        setSubMenuLvl1={setSubMenuLvl1}
        subMenuLvl4={subMenuLvl4}
        subMenuLvl3={subMenuLvl3}
        subMenuLvl2={subMenuLvl2}
        subMenuLvl1={subMenuLvl1}
        underMedium={underMedium}
        setMenu={setMenu}
        medium={medium}
        pages={pages}
        menu={menu}
      />
      {showButton && (
        <button
          id="topButton"
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          ⬆
        </button>
      )}
    </>
  );
};
/** Exports */
export default App;
