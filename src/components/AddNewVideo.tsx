import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import fetchVideoData from "../utils/fetch-from-api";
import { checkVideoID } from "../utils/check-video-id";
import { GlobalContext } from "../context/GlobalState";
import { addVideo } from "../store/action-creators/addVideo";


const AddNewVideo: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(GlobalContext);


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = await checkVideoID(inputValue);
    const data = await fetchVideoData(videoId!);
    if (data) {
      dispatch(addVideo(data));
    }
    setInputValue("");
  };

  return (
    <div className="text-center mb-5">
      <h3>Add new video to list.</h3>

      <Form className="d-flex justify-content-center" onSubmit={onSubmit}>
        <FormGroup>
          <Input
            className="rounded-0"
            invalid={false}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </FormGroup>
        <Button

          className="rounded-0"
          color="primary"
        >
          Add video
        </Button>
      </Form>
    </div>
  );
};

export default AddNewVideo;
