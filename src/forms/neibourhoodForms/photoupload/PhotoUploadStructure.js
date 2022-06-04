import React, { useState } from "react";
import PhotoUpload from "./PhotoUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ActionButtons } from "../../../components";

const PhotoUploadStructure = () => {
    const [questionCount, setQuestionCount] = useState(1);
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    const [loading,setLoading]=useState(false)
    const [photoUploadImages,setPhotoUploadImages]=useState({
        entrance:"",
        approachroad:"",
        maxView:"",
        areaNear:"",
        broken1:"",
        broken2:"",
})
const Questions = [ 1, 2, 3, 4, 5, 6 ];
const mandatory = [ 1, 2, 3, 4, 5, 6 ];
  const successNotify = () =>
    toast.success("form filled Successfully", {
      position: "bottom-center",
    });
  const failedNotify = () =>
    toast.error(`form not submited. fill complete form`, {
      position: "bottom-center",
    });
    const onSubmit = (e) => {
      setLoading(true)
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("entrance", photoUploadImages.entrance);
        formdata.append("approach_road", photoUploadImages.approachroad);
        formdata.append("society_view", photoUploadImages.maxView);
        formdata.append("cleanliness", photoUploadImages.areaNear);
        formdata.append("broken_1", photoUploadImages.broken1);
        formdata.append("broken_2", photoUploadImages.broken2);
        const data = {
    
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        axios.put(
          `api/tasks/${localStorage.getItem('task_id')}/photos/`,
          formdata, 
          { headers: data }
        )
        .then((res)=> {
          successNotify()
          navigate('/form-list', { replace: true })
          const status = { status: "P" };
          axios.patch(`api/tasks/${localStorage.getItem("task_id")}/`, status, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
        }) 
        .catch((err) => {
          failedNotify()
          setLoading(false)
        });   
      };
      
   let keysArr = Object.keys(photoUploadImages);
 
   console.log(keysArr, "keysArr >>>>",questionCount,"ques",photoUploadImages[keysArr[questionCount-1]]);
  return(
    <div className="">
   
    <ToastContainer autoClose={1500} />
    <div className="p-3 text-center mt-10 ">
      <h2 className="text-sky-600 text-2xl font-bold">
      photo Upload
      </h2>
      <div className="text-left">
        <div className="progress">
        
        </div>
        <div className="font-normal text-right pr-3 mt-10">
          Total Questions: {Questions.length}
        </div>
        <div className="form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 ">
       
          <div className="main-body  ">
          
            <PhotoUpload
              questionCount={questionCount}
              photoUploadImages={photoUploadImages}
              setPhotoUploadImages={setPhotoUploadImages}
              check={check}
            />
          </div>
        </div>
        <ActionButtons
            setCheck={setCheck}
            setQuestionCount={setQuestionCount}
            onSubmit={onSubmit}
            mandatory={mandatory}
            questionCount={questionCount}
            loading={loading}
            objName={photoUploadImages}
            finishNo={15}
          />
      </div>
    </div>
  </div>
  );
};

export default PhotoUploadStructure;
