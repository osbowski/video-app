import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Alert, Spinner } from "reactstrap";
import fetchVideoData from "../utils/fetch-from-api";
import { checkVideoID } from "../utils/check-video-id";
import { GlobalContext } from "../context/GlobalState";
import { addVideo } from "../store/action-creators/addVideo";

const AddNewVideo: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(GlobalContext);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const videoId = await checkVideoID(inputValue);
    const data = videoId ? await fetchVideoData(videoId!) : null;

    if (data) {
      dispatch(addVideo(data));
      setError(false);
      setLoading(false);
    } else {
      setError(true);
      dismissAlert();
      setLoading(false)
    }

    setInputValue("");
  };

  const dismissAlert = ()=>{
    setTimeout(()=>{
      setError(false);
    },3000)
  }

  return (
    <div className="text-center my-5">
      <h3>Add new video to list.</h3>
      <div className='alert-container'>
      {loading ? <Spinner size='xl' color="dark" children='' /> : ''}
      {error ? (
        <Alert color='danger' className='p-2'>
          Wrong ID or URL!
        </Alert>
      ) : (
        ''
      )}
      </div>
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
        <Button className="rounded-0" color="primary">
          Add video
        </Button>
      </Form>
    </div>
  );
};

export default AddNewVideo;
