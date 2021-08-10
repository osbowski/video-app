import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Spinner } from "reactstrap";
import fetchVideoData from "../utils/fetch-from-api";
import { checkVideoID } from "../utils/check-video-id";
import { GlobalContext } from "../context/GlobalState";
import { addVideo } from "../store/action-creators/addVideoCreator";
import { checkForDuplicateVideos } from "../utils/check-for-duplicate-videos";
import ErrorHandler from "./ErrorHandler";

const AddNewVideo: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState({isError:false,errorMsg:''});
  const [loading, setLoading] = useState(false);
  const { dispatch, videos } = useContext(GlobalContext);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const videoId = await checkVideoID(inputValue);
    const data = videoId && await fetchVideoData(videoId)

    if (data) {
      const check = checkForDuplicateVideos(data!,videos.normalVideos)
      if(check){
        setError({
          isError:true,
          errorMsg:'Video alredy on the list'
        });
        dismissAlert();
        setLoading(false)
      }else{
        dispatch(addVideo(data));
        setError({
          isError:false,
          errorMsg:''
        });
        setLoading(false);
      }

    } else {
      setError({
        isError:true,
        errorMsg:'This is not URL/ID of Vimeo/Youtube Video'
      });
      dismissAlert();
      setLoading(false)
    }

    setInputValue("");
  };

  const dismissAlert = ()=>{
    setTimeout(()=>{
      setError({
        isError:false,
        errorMsg:''
      });
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
      <ErrorHandler error={error}/>
    </div>
  );
};

export default AddNewVideo;
