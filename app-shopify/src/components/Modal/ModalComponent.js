import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Badge,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaInfo } from "react-icons/fa";
import { Card, CardHeader } from "@material-ui/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "30vw",
    height: "40vh",
    overflowY: "scroll",
  },
}));

export default function ModalComponent(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>
        <FaInfo className="info-icon" style={{ height: "90px" }} />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={props.title}
                subheader={props.date}
              />
             
              <CardMedia
                component="img"
                height="260"
                image={props.url}
                alt={props.title}
              />
              <CardContent>
                

                <Typography variant="body2" color="text.secondary">
                  {props.explanation}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
