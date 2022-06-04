import React from "react";
import { Input } from "@mui/material";

import 'react-toastify/dist/ReactToastify.css';
const PhotoUpload = ({setPhotoUploadImages,photoUploadImages,questionCount ,check}) => {
  console.log(photoUploadImages.entrance)
  return (
    <div className="">

       { questionCount == 1 &&  <div className="question  ">
       <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Upload image of entrance containing name.{" "}
            </h4>
          </div>
        
            <Input
              type="file"
              accept="image/*"
              // value={photoUploadImages.entrance}
              onChange={(e) =>{

                setPhotoUploadImages({
                  ...photoUploadImages,
                  entrance: e.target.files[0],
                })
               console.log(e.target.files[0]) 
              }
              }
              placeholder="Add Image"
              fullWidth
            />
          </div>}
    { questionCount == 2 &&     <div className="question ">
    <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Upload image of approach road.{" "}
            </h4>
          </div>
      
            <Input
              type="file"
              accept="image/*"
              // value={photoUploadImages.approachRoad}
              onChange={(e) =>
                setPhotoUploadImages({
                  ...photoUploadImages,
                  approachroad: (e.target.files[0]),
                })
              }
              placeholder="Add Image"
              fullWidth
            />
          </div>}
     { questionCount == 3 &&    <div className="question ">
     <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Upload image of society's maximum view from outside.{" "}
            </h4>
          </div>
       
            <Input
              type="file"
              accept="image/*"
              // value={photoUploadImages.maxView}
              onChange={(e) =>
                setPhotoUploadImages({
                  ...photoUploadImages,
                  maxView: (e.target.files[0]),
                })
              }
              placeholder="Add Image"
              fullWidth
            />
          </div>}
    { questionCount ==  4 &&     <div className="question ">
    <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Upload image of any visible garbage dump / clean area near the
              entrance.
            </h4>
          </div>
            <Input
              type="file"
              accept="image/*"
              // value={photoUploadImages.areaNear}
              onChange={(e) =>
                setPhotoUploadImages({
                  ...photoUploadImages,
                  areaNear: (e.target.files[0]),
                })
              }
              placeholder="Add Image"
              fullWidth
            />
          </div>}
    { questionCount ==  5&&     <div className="question ">
    <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Upload image of any broken area/ leakages in society boundary.
              (pic 1)
            </h4>
          </div>
            <Input
              type="file"
              accept="image/*"
              // value={photoUploadImages.broken1}
              onChange={(e) =>
                setPhotoUploadImages({
                  ...photoUploadImages,
                  broken1: (e.target.files[0]),
                })
              }
              placeholder="Add Image"
              fullWidth
            />
          </div>}
   { questionCount == 6 &&      <div className="question ">
   <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="">
              Upload image of any broken area/ leakages in society boundary.
              (pic 2)
            </h4>
          </div>

            <Input
              type="file"
              accept="image/*"
              // value={photoUploadImages.broken2}
              onChange={(e) =>
                setPhotoUploadImages({
                  ...photoUploadImages,
                  broken2: (e.target.files[0]),
                })
              }
              placeholder="Add Image"
              fullWidth
            />
          </div>}
          { check && <p className='text-red-500'>Required Question </p>}

    </div>
  );
};

export default PhotoUpload;