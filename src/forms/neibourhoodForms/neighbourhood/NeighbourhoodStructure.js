import React, { useState } from 'react';
import Neighbourhood from './Neighbourhood';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ActionButtons } from '../../../components';
const NeighbourhoodStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobileNoValid, setIsMobileNoValid] = useState(1);
  const [isEmailValid, setIsEmailValid] = useState(1);
  const [neighbourhoodInfo, setNeighbourhoodInfo] = useState({
    fullName: '',
    mobileNo: '',
    gender: '',
    profession: '',
    redevelopment: '',
    reputation: '',
    complaint: '',
    peopleInSociety: '',
    societyManagement: '',
    deliveryServices: '',
    deliveringEssential: '',
    socialEvents: '',
    children: '',
    older: '',
    electricityBreakDown: '',
    waterSupply: '',
    traffic: '',
    sellingProperty: '',
    policeComplaints: '',
    easyToGet: '',
    kindOfProfessions: '',
    strayDogs: '',
    oneBHK: '',
    twoBHK: '',
    threeBHK: '',
  });

  const Questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const mandatory = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const successNotify = () =>
    toast.success('form filled Successfully', {
      position: 'bottom-center',
    });
  const failedNotify = (msg) =>
    toast.error( msg`form not submited. fill complete form`, {
      position: 'bottom-center',
    });

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (
      neighbourhoodInfo.fullName == '' ||
      neighbourhoodInfo.mobileNo == '' ||
      neighbourhoodInfo.gender == '' ||
      neighbourhoodInfo.profession == '' ||
      neighbourhoodInfo.redevelopment == '' ||
      neighbourhoodInfo.reputation == '' ||
      neighbourhoodInfo.complaint == '' ||
      neighbourhoodInfo.peopleInSociety == '' ||
      neighbourhoodInfo.societyManagement == '' ||
      neighbourhoodInfo.deliveryServices == '' ||
      neighbourhoodInfo.deliveringEssential == '' ||
      neighbourhoodInfo.socialEvents == '' ||
      neighbourhoodInfo.children == '' ||
      neighbourhoodInfo.older == '' ||
      neighbourhoodInfo.electricityBreakDown == '' ||
      neighbourhoodInfo.waterSupply == '' ||
      neighbourhoodInfo.traffic == '' ||
      neighbourhoodInfo.sellingProperty == '' ||
      neighbourhoodInfo.policeComplaints == '' ||
      neighbourhoodInfo.easyToGet == '' ||
      neighbourhoodInfo.kindOfProfessions == '' ||
      neighbourhoodInfo.strayDogs == '' ||
      neighbourhoodInfo.oneBHK == '' ||
      neighbourhoodInfo.twoBHK == '' ||
      neighbourhoodInfo.threeBHK == ''
    ) {
      var msg = 'fill complete form';
      failedNotify(msg);
    }
    const body = {
      full_name: neighbourhoodInfo.fullName,
      mobile_number: neighbourhoodInfo.mobileNo,
      gender: neighbourhoodInfo.gender,
      profession: +neighbourhoodInfo.profession,
      redevelopment_planned: +neighbourhoodInfo.redevelopment,
      reputation: +neighbourhoodInfo.reputation,
      complaint: +neighbourhoodInfo.complaint,
      people_type: +neighbourhoodInfo.peopleInSociety,
      society_management_friendly: +neighbourhoodInfo.societyManagement,
      provide_delivery: +neighbourhoodInfo.deliveryServices,
      essential_shops: +neighbourhoodInfo.deliveringEssential,
      social_events: +neighbourhoodInfo.socialEvents,
      playful_children: +neighbourhoodInfo.children,
      old_people: +neighbourhoodInfo.older,
      uninterrupted_electricity: +neighbourhoodInfo.electricityBreakDown,
      uninterrupted_water: +neighbourhoodInfo.waterSupply,
      traffic: +neighbourhoodInfo.traffic,
      people_selling_property: +neighbourhoodInfo.sellingProperty,
      police_complaints: neighbourhoodInfo.policeComplaints,
      access_to_helpers: +neighbourhoodInfo.easyToGet,
      people_profession: +neighbourhoodInfo.kindOfProfessions,
      stray_animals: +neighbourhoodInfo.strayDogs,
      approx_1_bhk_price: +neighbourhoodInfo.oneBHK,
      approx_2_bhk_price: +neighbourhoodInfo.twoBHK,
      approx_3_bhk_price: +neighbourhoodInfo.threeBHK,
    };
    const data = {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    axios
      .post(
        `api/tasks/${localStorage.getItem('task_id')}/neighbourhood/`,
        body,
        { headers: data },
      )
      .then(res => {
        successNotify();
        navigate('/form-list', { replace: true });
        const status = { status: 'P' };
        axios.patch(`api/tasks/${localStorage.getItem('task_id')}/`, status, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      })
      .catch(err => {
        failedNotify(err.message);
        setLoading(false);
      });
  };

  let keysArr = Object.keys(neighbourhoodInfo);

  console.log(
    keysArr,
    'keysArr >>>>',
    questionCount,
    'ques',
    neighbourhoodInfo[keysArr[questionCount - 1]],
  );
  return (
    <div className=''>
      <ToastContainer autoClose={1500} />
      <div className='p-3 text-center mt-10 '>
        <h2 className='text-sky-600 text-2xl font-bold'>
          Neighbourhood Information
        </h2>
        <div className='text-left'>
          <div className='progress'></div>
          <div className='font-normal text-right pr-3 mt-10'>
            Total Questions: {Questions.length}
          </div>
          <div className='form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 '>
            <div className='main-body  '>
              <Neighbourhood
                questionCount={questionCount}
                setQuestionCount={setQuestionCount}
                neighbourhoodInfo={neighbourhoodInfo}
                setNeighbourhoodInfo={setNeighbourhoodInfo}
                check={check}
                isMobileNoValid={isMobileNoValid}
                setIsMobileNoValid={setIsMobileNoValid}
                isEmailValid={isEmailValid}
                setIsEmailValid={setIsEmailValid}
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
            objName={neighbourhoodInfo}
            finishNo={25}
          />
        </div>
      </div>
    </div>
  );
};

export default NeighbourhoodStructure;
