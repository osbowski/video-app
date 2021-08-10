import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Alert, Spinner } from "reactstrap";
import fetchVideoData from "../utils/fetch-from-api";
import { checkVideoID } from "../utils/check-video-id";
import { GlobalContext } from "../context/GlobalState";
import { addVideo } from "../store/action-creators/addVideoCreator";
import { checkForDuplicateVideos } from "../utils/check-for-duplicate-videos";

const AddNewVideo: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch, videos } = useContext(GlobalContext);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const videoId = await checkVideoID(inputValue);
    const data = videoId && videoId ? await fetchVideoData(videoId!) : null;

    

    if (data) {
      const check = checkForDuplicateVideos(data!,videos.normalVideos)
      if(check){
        setError(true);
        dismissAlert();
        setLoading(false)
      }else{
        dispatch(addVideo(data));
        setError(false);
        setLoading(false);
      }

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
    },5000)
  }

  return (
    <div>
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
        <Button className="rounded-0 form-button" color="primary">
        {loading ? <Spinner size='sm' color="white" children='' /> : 'Add video'}
        </Button>
      </Form>
      <div className='alert-container'>
      
      {error ? (
        <Alert color='danger' className='p-2 text-center rounded-0'>
          This is not ID/URL of Vimeo or  Youtube Video
        </Alert>
      ) : (
        ''
      )}
      </div>
    </div>
  );
};

export default AddNewVideo;
