import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
import { conditionalRender } from "../../Utility/RenderHelpers";

import classes from "./PlaceItem.module.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  const openDeleteHandler = () => {
    setShowDelete(true);
  };

  const closeDeleteHandler = () => {
    setShowDelete(false);
  };

  const confirmDeleteHandler = () => {};

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        footerClass={classes["place-item__modal-actions"]}
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className={classes["map-container"]}>
          <h2>THE MAP!</h2>
          <Map />
        </div>
      </Modal>

      <Modal
        show={showDelete}
        onCancel={closeDeleteHandler}
        header="Are you sure?"
        footerClass={classes["place-item__modal-actions"]}
        footer={
          <React.Fragment>
            <Button onClick={closeDeleteHandler} inverse>
              Cancel
            </Button>
            <Button onClick={confirmDeleteHandler} danger>
              Delete
            </Button>
          </React.Fragment>
        }
      >
        <p>This cannot be undone.</p>
      </Modal>
      <li className={classes["place-item"]}>
        <Card className={classes["place-item__content"]}>
          <div className={classes["place-item__image"]}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes["place-item__info"]}>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes["place-item__actions"]}>
            <Button inverse onClick={openMapHandler}>
              View on Map
            </Button>

            {conditionalRender(
              <Button to={`/places/${props.id}`}>Edit</Button>,
              auth.isLoggedIn
            )}

            {conditionalRender(
              <Button danger onClick={openDeleteHandler}>
                Delete
              </Button>,
              auth.isLoggedIn
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
