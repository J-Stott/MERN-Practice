import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/Util/validators";

import classes from "./PlaceForm.module.css";

import { useForm } from "../../shared/Hooks/form-hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire SLate Building",
    description: "One of the most famous skyscrapers in the world",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const [loading, setLoading] = useState(true);

  const placeId = useParams().placeId;

  const editSubmitHandler = (event) => {
    event.preventDefault();
  };

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const place = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {

    if(place){
        setFormData(
          {
            title: {
              value: place.title,
              isValid: true,
            },
            description: {
              value: place.description,
              isValid: true,
            },
          },
          true
        );
    }

    setLoading(false);
  }, [setFormData, place]);

  if (!place) {
    return (
      <div className="center">
        <Card>
            <h2>Could Not Find Place</h2>
        </Card>
      </div>
    );
  }

  return (
    !loading && (
      <form className={classes["place-form"]} onSubmit={editSubmitHandler}>
        <Input
          element="input"
          id="title"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          element="textarea"
          id="description"
          label="Description"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
          errorText="Please enter a valid description"
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Update
        </Button>
      </form>
    )
  );
};

export default UpdatePlace;
