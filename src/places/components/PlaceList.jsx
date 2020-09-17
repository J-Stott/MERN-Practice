import React from "react";
import classes from "./PlaceList.module.css";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button"
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={`${classes["place-list"]} center`}>
        <Card>
          <h2>No Places found, Maybe create one?</h2>
          <Button to="places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={classes["place-list"]}>
      {props.items.map((item) => {
        return (
          <PlaceItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            address={item.address}
            creatorId={item.creator}
            coordinates={item.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
