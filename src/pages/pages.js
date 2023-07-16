import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import * as React from "react";
/** Variables */
/** Load images */
const characters = require.context("../assets/pics/characters/", true);
const ranks = require.context("../assets/pics/ranks", true);
/** Variables */
/** */
const RankCard = ({ name, setModal, setImage, setName }) => {
  return (
    <Card
      className="rankcard"
      onClick={(e) => {
        setModal(true);
        setImage(ranks(name));
        setName(name);
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={ranks(name)} alt={name} />
        <CardContent>
          <Typography variant="h3" className="h1">
            {name.substring(5).replace(".png", "")}
          </Typography>
          <Typography variant="h3" className="h2">
            Another textfield
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
/** */
const Ranks = ({ setModal, setImage, setName }) => {
  /** Variables */
  return (
    <>
      {ranks.keys().map((item, i) => (
        <Grid item key={"frag" + i} xs={12} md={6} xl={4}>
          <hr className="space" key={"hr-" + i} />
          <RankCard
            key={item.name + i}
            name={item}
            setModal={setModal}
            setImage={setImage}
            setName={setName}
          />
        </Grid>
      ))}
    </>
  );
};
/** */
const CharacterCard = ({ name, setModal, setImage, setName }) => {
  return (
    <Card
      className="charactercard"
      onClick={(e) => {
        setModal(true);
        setImage(characters(name));
        setName("   "+name);
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={characters(name)} alt={name} />
        <CardContent>
          <Typography variant="h3" className="h1">
            {name.substring(2).replace(".png", "")}
          </Typography>
          <Typography variant="h3" className="h2">
            Another textfield
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
/** */
const Characters = ({ setModal, setImage, setName }) => {
  /** Variables */
  return (
    <>
      {characters.keys().map((item, i) => (
        <Grid item key={"frag-" + i} xs={12} md={6} xl={4}>
          <hr className="space" key={"hr--" + i} />
          <CharacterCard
            key={item.name + i}
            name={item}
            setModal={setModal}
            setImage={setImage}
            setName={setName}
          />
        </Grid>
      ))}
    </>
  );
};
/** */
const pages = [
  { title: "Ranks", component: Ranks },
  { title: "Characters", component: Characters },
];
/** */
export { pages };
