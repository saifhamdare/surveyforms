import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CommunityLeader from './CommunityLeader';
import { ActionButtons } from '../../../components';
const CommunityLeaderStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [isMobileNoValid, setIsMobileNoValid] = useState(1);
  const [isEmailValid, setIsEmailValid] = useState(1);

  const [communityLeaderInfo, setCommunityLeaderInfo] = useState({
    fullName: '',
    mobileNo: '',
    emailId: '',
    gender: '',
    address: '',
    reraNumber: '',
  });

  const Questions = [1, 2, 3, 4, 5, 6];
  const mandatory = [1, 2, 3, 4, 5, 6];
  const successNotify = () =>
    toast.success('form filled Successfully', {
      position: 'bottom-center',
    });
  const failedNotify = msg =>
    toast.error(`${msg}`, {
      position: 'bottom-center',
    });
  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (
      communityLeaderInfo.fullName == '' ||
      communityLeaderInfo.mobileNo == '' ||
      communityLeaderInfo.gender == '' ||
      communityLeaderInfo.emailId == '' ||
      communityLeaderInfo.address == '' ||
      communityLeaderInfo.reraNumber == ''
    ) {
      var msg = 'fill complete form';
      failedNotify(msg);
    }
    const body = {
      name: communityLeaderInfo.fullName,
      contact: communityLeaderInfo.mobileNo,
      gender: communityLeaderInfo.gender,
      email: communityLeaderInfo.emailId,
      rera_number: communityLeaderInfo.reraNumber,
      address: communityLeaderInfo.address,
    };
    const data = {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    axios
      .post(`api/channel-partners/`, body, { headers: data })
      .then(res => {
        successNotify();
        navigate('/dashboard', { replace: true });
        const status = { status: 'P' };
        // axios.patch(`api/tasks/${localStorage.getItem("task_id")}/`, status, {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}`
        // }
        // ,
        // });
      })
      .catch(err => {
        failedNotify(err);
        setLoading(false);
      });
  };

  let keysArr = Object.keys(communityLeaderInfo);

  console.log(
    keysArr,
    'keysArr >>>>',
    questionCount,
    'ques',
    communityLeaderInfo[keysArr[questionCount - 1]],
  );
  console.log();
  return (
    <div className=''>
      <ToastContainer autoClose={1500} />
      <div className='p-3 text-center mt-10 '>
        <h2 className='text-sky-600 text-2xl font-bold'>Channel Partner</h2>
        <div className='text-left'>
          <div className='progress'></div>
          <div className='font-normal text-right pr-3 mt-10'>
            Total Questions: {Questions.length}
          </div>
          <div className='form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 '>
            <div className='main-body  '>
              <CommunityLeader
                questionCount={questionCount}
                communityLeaderInfo={communityLeaderInfo}
                setCommunityLeaderInfo={setCommunityLeaderInfo}
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
            objName={communityLeaderInfo}
            finishNo={6}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityLeaderStructure;
