/** Imports */
/** Basic */
import { AppBar, Toolbar } from "@mui/material";
import * as React from "react";
/** Custom */
import { MapItem, FLeft, FMiddle, FRight } from "../assets/components/menu";
/** Define Footer structure */
const Footer = ({
  setSubMenuLvl4,
  setSubMenuLvl3,
  setSubMenuLvl2,
  setSubMenuLvl1,
  subMenuLvl4,
  subMenuLvl3,
  subMenuLvl2,
  subMenuLvl1,
  pages,
}) => {
  /** Render Structure */
  return (
    <AppBar position="static" className="footer">
      <Toolbar className="footer">
        <hr className="mediator50" />
        <MapItem
          setSubMenuLvl4={setSubMenuLvl4}
          setSubMenuLvl3={setSubMenuLvl3}
          setSubMenuLvl2={setSubMenuLvl2}
          setSubMenuLvl1={setSubMenuLvl1}
          subMenuLvl4={subMenuLvl4}
          subMenuLvl3={subMenuLvl3}
          subMenuLvl2={subMenuLvl2}
          subMenuLvl1={subMenuLvl1}
          pages={pages}
          menu={false}
          name="left"
          Map={FLeft}
          show={true}
        />
        <hr className="mediator" />
        <MapItem
          setSubMenuLvl4={setSubMenuLvl4}
          setSubMenuLvl3={setSubMenuLvl3}
          setSubMenuLvl2={setSubMenuLvl2}
          setSubMenuLvl1={setSubMenuLvl1}
          subMenuLvl4={subMenuLvl4}
          subMenuLvl3={subMenuLvl3}
          subMenuLvl2={subMenuLvl2}
          subMenuLvl1={subMenuLvl1}
          pages={pages}
          menu={false}
          name="middle"
          Map={FMiddle}
          show={true}
        />
        <hr className="mediator" />
        <MapItem
          setSubMenuLvl4={setSubMenuLvl4}
          setSubMenuLvl3={setSubMenuLvl3}
          setSubMenuLvl2={setSubMenuLvl2}
          setSubMenuLvl1={setSubMenuLvl1}
          subMenuLvl4={subMenuLvl4}
          subMenuLvl3={subMenuLvl3}
          subMenuLvl2={subMenuLvl2}
          subMenuLvl1={subMenuLvl1}
          pages={pages}
          menu={false}
          name="right"
          Map={FRight}
          show={true}
        />
        <hr className="mediator50" />
      </Toolbar>
    </AppBar>
  );
};
/** Exports */
export default Footer;
