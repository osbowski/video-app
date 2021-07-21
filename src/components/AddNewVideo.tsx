import React, { useState, useContext} from "react";
import getVideoId from "get-video-id";
import fetchVideoData from "../utils/fetch-from-api";
import isURL from 'validator/lib/isURL';
import { identifyVideoById } from '../utils/identify-video-by-id'
import { GlobalContext } from "../context/GlobalState";
import { addVideo } from '../store/action-creators/addVideo';
import { Button, Form, FormGroup, Input } from "reactstrap";

interface videoIdInterface{
    id:string;
    service:string| null;
}


const AddNewVideo:React.FC = ()=>{
    const [videoInfo,setVideoInfo] = useState<videoIdInterface>({id:'',service:null});
    const [inputValue, setInputValue] =useState('');
    const {dispatch} = useContext(GlobalContext);


    const checkVideoID =async (value:string)=>{
        const checkIfURL = isURL(value);
        if(checkIfURL){
            const {id, service} = getVideoId(value)
            setVideoInfo({id:id!,service:service})
            
        }else{
            const data = await identifyVideoById(value);
            if(data){
                const {id, service} = data;
                setVideoInfo({id:id!,service});
            }
            
        }
    }
    const onSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        const data = await fetchVideoData(videoInfo)
        if(data){
            dispatch(addVideo(data))
        }
        setInputValue('');
    }

   

    return(
        <div className='text-center mb-5'>
            <h3>Add new video to list.</h3>
        
        <Form className='d-flex justify-content-center' onSubmit={onSubmit}>
            <FormGroup>
                <Input className='rounded-0' invalid={false} type="text" value={inputValue} onChange={(e)=>{
                    setInputValue(e.target.value);
                    checkVideoID(e.target.value)
                    }} />
            </FormGroup>
                <Button className='rounded-0' color='primary'>Add video</Button>
        </Form>
       
        </div>
    )
    }

export default AddNewVideo;