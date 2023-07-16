/** Imports */
/** Basic */
import { NavLink } from "react-router-dom";
import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Popper,
  Divider,
  Paper,
  ClickAwayListener,
} from "@mui/material";
/** Custom */
import { Left, MapItem, Right } from "../assets/components/menu";
/** Pictures */
import logo from "../assets/pics/placeholders/imgPlaceholder.png";
/** Define Navigation structure */
const Navigation = ({
  setSubMenuLvl4,
  setSubMenuLvl3,
  setSubMenuLvl2,
  setSubMenuLvl1,
  subMenuLvl4,
  subMenuLvl3,
  subMenuLvl2,
  subMenuLvl1,
  underMedium,
  pageTitle,
  setMenu,
  medium,
  pages,
  menu,
}) => {
  /** Variables */
  /** Effect */
  /** Render Structure */
  return (
    <>
      <AppBar position="static" className="navigation">
        <Toolbar className="navigation">
          <ClickAwayListener
            onClickAway={() => {
              setSubMenuLvl4(false);
              setSubMenuLvl3(false);
              setSubMenuLvl2(false);
              setSubMenuLvl1(false);
              setMenu(false);
            }}
          >
            <IconButton
              sx={{ flexGrow: 1 }}
              className="navigation brand"
              component={NavLink}
              to={pages + ""}
              onClick={() => {
                setSubMenuLvl4(false);
                setSubMenuLvl3(false);
                setSubMenuLvl2(false);
                setSubMenuLvl1(false);
                setMenu(false);
              }}
            >
              <img src={logo} alt="Brand logo" className="appbar-brand" />
              <Typography component="h1" className="h1" sx={{ flexGrow: 1 }}>
                {pageTitle}
              </Typography>
            </IconButton>
          </ClickAwayListener>
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
            show={medium}
            menu={false}
            name="left"
            Map={Left}
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
            show={medium}
            menu={false}
            name="right"
            Map={Right}
          />
          <Button
            sx={{ display: { xs: "flex", md: "none" } }}
            aria-describedby={"menu"}
            onMouseEnter={(event) => {
              setMenu(event.currentTarget);
              setSubMenuLvl4(false);
              setSubMenuLvl3(false);
              setSubMenuLvl2(false);
              setSubMenuLvl1(false);
            }}
          >
            <Typography variant="h4" className="h1">
              menu
            </Typography>
          </Button>
          <Popper
            sx={{ display: { xs: "flex", md: "none" } }}
            placement={"bottom-end"}
            open={Boolean(menu)}
            className="menu"
            anchorEl={menu}
            id="menu"
          >
            <Paper className="menu">
              <MapItem
                setSubMenuLvl4={setSubMenuLvl4}
                setSubMenuLvl3={setSubMenuLvl3}
                setSubMenuLvl2={setSubMenuLvl2}
                setSubMenuLvl1={setSubMenuLvl1}
                subMenuLvl4={subMenuLvl4}
                subMenuLvl3={subMenuLvl3}
                subMenuLvl2={subMenuLvl2}
                subMenuLvl1={subMenuLvl1}
                show={underMedium}
                pages={pages}
                menu={true}
                name="left"
                Map={Left}
              />
              <Divider />
              <MapItem
                setSubMenuLvl4={setSubMenuLvl4}
                setSubMenuLvl3={setSubMenuLvl3}
                setSubMenuLvl2={setSubMenuLvl2}
                setSubMenuLvl1={setSubMenuLvl1}
                subMenuLvl4={subMenuLvl4}
                subMenuLvl3={subMenuLvl3}
                subMenuLvl2={subMenuLvl2}
                subMenuLvl1={subMenuLvl1}
                show={underMedium}
                pages={pages}
                name="right"
                Map={Right}
                menu={true}
              />
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>
    </>
  );
};
/** Exports */
export default Navigation;
