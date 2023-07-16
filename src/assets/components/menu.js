/** Imports */
/** Basic */
import { Typography, Link, Popper, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import * as React from "react";
/** Custom */
/** Load images */
const characters = require.context("../pics/characters/", true);
const ranks = require.context("../pics/ranks/", true);
/** Link array */
/** Navigation left */
const Left = [
  {
    title: "Home",
    subMenu: [],
  },
  {
    title: "Campaigns",
    subMenu: [
      {
        title: "Curse-of-Strahd",
        subMenu: [],
      },
      {
        title: "Space-is-Dandy,-Baby!",
        subMenu: [
          {
            title: "Eternal-Eclipse",
            subMenu: [
              {
                title: "Characters",
                subMenu: [],
              },
              {
                title: "Ranks",
                subMenu: [],
              },
              {
                title: "Vehicles",
                subMenu: [],
              },
              {
                title: "Weapons",
                subMenu: [],
              },
            ],
          },
        ],
      },
      {
        title: "The-Unfortunate-Duty",
        subMenu: [],
      },
      {
        title: "Welcome-To-The-Festival!",
        subMenu: [],
      },
      {
        title: "Everlands-Top-Team",
        subMenu: [],
      },
      {
        title: "Being-a-pirate-is-free!!",
        subMenu: [],
      },
    ],
  },
];
/** Add pictures to links */
ranks.keys().forEach((element) => {
  Left.filter((obj) => obj.title === "Campaigns")[0]
    .subMenu.filter((obj) => obj.title === "Space-is-Dandy,-Baby!")[0]
    .subMenu.filter((obj) => obj.title === "Eternal-Eclipse")[0]
    .subMenu.filter((obj) => obj.title === "Ranks")[0]
    .subMenu.push({
      title: element.substring(5).replaceAll(".png", "").replaceAll(" ", "-"),
      subMenu: [],
    });
});
characters.keys().forEach((element) => {
  Left.filter((obj) => obj.title === "Campaigns")[0]
    .subMenu.filter((obj) => obj.title === "Space-is-Dandy,-Baby!")[0]
    .subMenu.filter((obj) => obj.title === "Eternal-Eclipse")[0]
    .subMenu.filter((obj) => obj.title === "Characters")[0]
    .subMenu.push({
      title: element.substring(2).replaceAll(".png", "").replaceAll(" ", "-"),
      subMenu: [],
    });
});
/** Navigation right */
const Right = [];
/** Footer left */
const FLeft = [
  {
    title: "left",
    subMenu: [],
  },
];
/** Footer middle */
const FMiddle = [
  {
    title: "©2023? Antti Vesanto",
    subMenu: [],
  },
];
/** Footer right */
const FRight = [
  {
    title: "right",
    subMenu: [],
  },
];
/** Define MapItem structure */
const MapItem = ({
  setSubMenuLvl4,
  setSubMenuLvl3,
  setSubMenuLvl2,
  setSubMenuLvl1,
  subMenuLvl4,
  subMenuLvl3,
  subMenuLvl2,
  subMenuLvl1,
  pages,
  show,
  menu,
  name,
  Map,
}) => {
  /** Render Structure */
  return show
    ? Map.map((link, i) => (
        <React.Fragment key={name + "-sub-menu-lvl-0-fragment-" + link.title}>
          <Link
            aria-describedby={link.title}
            onMouseEnter={(e) => {
              setSubMenuLvl1(e.currentTarget);
              setSubMenuLvl2(false);
              setSubMenuLvl3(false);
              setSubMenuLvl4(false);
            }}
            to={`${link.title === "Home" ? pages + "" : pages + link.title}`}
            key={name + "-sub-menu-lvl-0-btn-" + link.title + "-" + i}
            component={NavLink}
            className="h4-h1"
          >
            <Typography variant="h4" className="h1">
              {link.title.replaceAll("-", " ")}
            </Typography>
          </Link>
          {link.subMenu.lenght !== 0 ? (
            <Popper
              placement={menu ? "left-start" : "bottom-start"}
              key={name + "-sub-menu-lvl-0-popper-" + link.title}
              id={link.title}
              className="menu"
              open={
                subMenuLvl1 !== false
                  ? link.title === subMenuLvl1.getAttribute("aria-describedby")
                    ? true
                    : false
                  : false
              }
              anchorEl={subMenuLvl1}
            >
              <Paper className="menu">
                {link.subMenu.map((link, i) => (
                  <React.Fragment
                    key={name + "-sub-menu-lvl-1-fragment-" + link.title}
                  >
                    <Link
                      aria-describedby={link.title}
                      onMouseEnter={(e) => {
                        setSubMenuLvl2(e.currentTarget);
                        setSubMenuLvl3(false);
                        setSubMenuLvl4(false);
                      }}
                      to={`${
                        link.title === "Home" ? pages + "" : pages + link.title
                      }`}
                      key={
                        name +
                        "-sub-menu-lvl-1-sub-menu-lvl-0-btn-" +
                        link.title +
                        "-" +
                        i
                      }
                      component={NavLink}
                      className="h4-h1"
                    >
                      <Typography variant="h4" className="h1">
                        {link.title.replaceAll("-", " ")}
                      </Typography>
                    </Link>
                    {link.subMenu.lenght !== 0 ? (
                      <Popper
                        placement={menu ? "left-start" : "right-start"}
                        key={name + "-sub-menu-lvl-1-popper-" + link.title}
                        id={link.title}
                        className="menu"
                        open={
                          subMenuLvl2 !== false
                            ? link.title ===
                              subMenuLvl2.getAttribute("aria-describedby")
                              ? true
                              : false
                            : false
                        }
                        anchorEl={subMenuLvl2}
                      >
                        <Paper className="menu">
                          {link.subMenu.map((link, i) => (
                            <React.Fragment
                              key={
                                name + "-sub-menu-lvl-2-fragment-" + link.title
                              }
                            >
                              <Link
                                aria-describedby={link.title}
                                onMouseEnter={(e) => {
                                  setSubMenuLvl3(e.currentTarget);
                                  setSubMenuLvl4(false);
                                }}
                                to={`${
                                  link.title === "Home"
                                    ? pages + ""
                                    : pages + link.title
                                }`}
                                key={
                                  name +
                                  "-sub-menu-lvl-2-sub-menu-lvl-0-btn-" +
                                  link.title +
                                  "-" +
                                  i
                                }
                                component={NavLink}
                                className="h4-h1"
                              >
                                <Typography variant="h4" className="h1">
                                  {link.title.replaceAll("-", " ")}
                                </Typography>
                              </Link>
                              {link.subMenu.lenght !== 0 ? (
                                <Popper
                                  placement={
                                    menu ? "left-start" : "right-start"
                                  }
                                  key={
                                    name +
                                    "-sub-menu-lvl-2-popper-" +
                                    link.title
                                  }
                                  id={link.title}
                                  className="menu"
                                  open={
                                    subMenuLvl3 !== false
                                      ? link.title ===
                                        subMenuLvl3.getAttribute(
                                          "aria-describedby"
                                        )
                                        ? true
                                        : false
                                      : false
                                  }
                                  anchorEl={subMenuLvl3}
                                >
                                  <Paper className="menu">
                                    {link.subMenu.map((link, i) => (
                                      <React.Fragment
                                        key={
                                          name +
                                          "-sub-menu-lvl-3-fragment-" +
                                          link.title
                                        }
                                      >
                                        <Link
                                          aria-describedby={link.title}
                                          onMouseEnter={(e) => {
                                            setSubMenuLvl4(e.currentTarget);
                                          }}
                                          to={`${
                                            link.title === "Home"
                                              ? pages + ""
                                              : pages + link.title
                                          }`}
                                          key={
                                            name +
                                            "-sub-menu-lvl-3-btn-" +
                                            link.title +
                                            "-" +
                                            i
                                          }
                                          component={NavLink}
                                          className="h4-h1"
                                        >
                                          <Typography
                                            variant="h4"
                                            className="h1"
                                          >
                                            {link.title.replaceAll("-", " ")}
                                          </Typography>
                                        </Link>
                                        {link.subMenu.lenght !== 0 ? (
                                          <Popper
                                            placement={
                                              menu
                                                ? "left-start"
                                                : "right-start"
                                            }
                                            key={
                                              name +
                                              "-sub-menu-lvl-3-popper-" +
                                              link.title
                                            }
                                            id={link.title}
                                            className="menu"
                                            open={
                                              subMenuLvl4 !== false
                                                ? link.title ===
                                                  subMenuLvl4.getAttribute(
                                                    "aria-describedby"
                                                  )
                                                  ? true
                                                  : false
                                                : false
                                            }
                                            anchorEl={subMenuLvl4}
                                          >
                                            <Paper className="menu">
                                              {link.subMenu.map((link, i) => (
                                                <React.Fragment
                                                  key={
                                                    name +
                                                    "-sub-menu-lvl-4-fragment-" +
                                                    link.title
                                                  }
                                                >
                                                  <Link
                                                    aria-describedby={
                                                      link.title
                                                    }
                                                    to={`${
                                                      link.title === "Home"
                                                        ? pages + ""
                                                        : pages + link.title
                                                    }`}
                                                    key={
                                                      name +
                                                      "-sub-menu-lvl-4-sub-menu-lvl-0-btn-" +
                                                      link.title +
                                                      "-" +
                                                      i
                                                    }
                                                    component={NavLink}
                                                    className="h4-h1"
                                                  >
                                                    <Typography
                                                      variant="h4"
                                                      className="h1"
                                                    >
                                                      {link.title.replaceAll(
                                                        "-",
                                                        " "
                                                      )}
                                                    </Typography>
                                                  </Link>
                                                </React.Fragment>
                                              ))}
                                            </Paper>
                                          </Popper>
                                        ) : (
                                          <></>
                                        )}
                                      </React.Fragment>
                                    ))}
                                  </Paper>
                                </Popper>
                              ) : (
                                <></>
                              )}
                            </React.Fragment>
                          ))}
                        </Paper>
                      </Popper>
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                ))}
              </Paper>
            </Popper>
          ) : (
            <></>
          )}
        </React.Fragment>
      ))
    : null;
};
/** Exports */
export { Left, Right, MapItem, FLeft, FMiddle, FRight };
