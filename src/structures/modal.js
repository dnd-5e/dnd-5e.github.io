/** Imports */
/** Basic */
import * as React from "react";
import {
  Modal,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Collapse,
} from "@mui/material";
/** Custom */
/** Define Modal structure */
const FullScreenModal = ({
  setExpanded,
  expanded,
  setModal,
  modal,
  image,
  name,
}) => {
  /** Render Structure */
  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      onClose={() => {
        setModal(false);
        setExpanded(false);
      }}
      open={modal}
    >
      <Card
        className="modal"
        onClick={(e) => {
          setExpanded(!expanded);
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={image} alt={name} />
          <CardContent>
            <Typography variant="h3" className="h1">
              {name.substring(5).replaceAll(".png", "")}
            </Typography>
            <Typography variant="h3" className="h2">
              Another textfield
            </Typography>
          </CardContent>
        </CardActionArea>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          className="modalCollapse"
        >
          <CardContent>
            <Typography variant="h1" className="h2">
              Ranks
            </Typography>
            <Typography variant="h6" className="h2">
              ______________________________________________________________
              <br />
              Aspirant <br />
              ______________________________________________________________
              <br />
              Initiate Private <br />
              Private <br />
              Senior Private <br />
              ______________________________________________________________
              <br />
              Initiate Specialist <br />
              Specialist <br />
              Senior Specialist <br />
              ______________________________________________________________
              <br />
              Initiate Corporal <br />
              Corporal <br />
              Senior Corporal <br />
              ______________________________________________________________
              <br />
              Initiate Sergeant <br />
              Sergeant <br />
              Senior Sergeant <br />
              ______________________________________________________________
              <br />
              Initiate Cadet <br />
              Cadet <br />
              Senior Cadet <br />
              ______________________________________________________________
              <br />
              Initiate Lieutenant <br />
              Lieutenant <br />
              Senior Lieutenant <br />
              ______________________________________________________________
              <br />
              Initiate Captain <br />
              Captain <br />
              Senior Captain <br />
              ______________________________________________________________
              <br />
              Initiate Major <br />
              Major <br />
              Senior Major <br />
              ______________________________________________________________
              <br />
              Initiate Colonel <br />
              Colonel <br />
              Senior Colonel <br />
              ______________________________________________________________
              <br />
              Initiate Commander <br />
              Commander <br />
              Senior Commander <br />
              ______________________________________________________________
              <br />
              Initiate General <br />
              General <br />
              Senior General <br />
              ______________________________________________________________
              <br />
              Proctor <br />
              Master Proctor <br />
              Supreme Proctor <br />
              ______________________________________________________________
              <br />
              Sentinel <br />
              Master Sentinel <br />
              Supreme Sentinel <br />
              ______________________________________________________________
              <br />
              Supreme Being <br />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Modal>
  );
};
/** Exports */
export { FullScreenModal };
