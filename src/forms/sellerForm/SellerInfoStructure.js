import React, { useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SellerInfo from './SellerInfo';
import {  ActionButtons } from '../../components';

const SellerInfoStructure = () => {
  const navigate = useNavigate();

  const [check, setCheck] = useState(false);
  const [questionCount, setQuestionCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMobileNoValid, setIsMobileNoValid] = useState(1);
  const [isEmailValid, setIsEmailValid] = useState(1);
  const [knowYourSellerInfo, setKnowYourSellerInfo] = useState({
    HusbandName: '',
    WifeName: '',
    ContactNoPrimary: '',
    ContactNoSecondary: '',
    Email: '',
    SocietyName: '',
    GeoLocation: '',
    SellerNativePlace: '',
    TotalFamilyMembers: '',
    SelectFamilyMember: '',
    HusbandAge: '',
    WifeAge: '',
    FamilyMemberSpecialNeeds: '',
    PetFriendlyHome: '',
    PetFriendlySociety: '',
    Handymen: '',
    HusbandQualification: '',
    HusbandStream: '',
    HusbandCollegeName: '',
    WifeQualification: '',
    WifeStream: '',
    WifeCollegeName: '',
    InfoChildrenInstituteName: '',
    TopUniversity: '',
    TopInstitute: '',
    HusbandProfessionType: '',
    HusbandOrganization: '',
    WifeProfessionType: '',
    WifeOrganization: '',
    HusbandLinkedInProfile: '',
    WifeLinkedInProfile: '',
    TravelBy: '',
    HusbandSocialStatus: '',
    HusbandSocialCircle: '',
    HusbandInterest: '',
    WifeSocialStatus: '',
    WifeSocialCircle: '',
    WifeInterest: '',
    Languages: '',
    Cuisine: '',
    NeighbourHouse: '',
    NeighbourFamilyConfig: '',
    NeighbourprofessionType: '',
    NeighbourNature: '',
    Intent: '',
    // Sellerphoto: "",
    // SellerFamilyphoto: "",
    SellerStory: '',
    SellerRentedDuration: '',
    SellerPurschaseDuration: '',
    familyInfo: '',
    ExperienceWithHome: '',
    PositiveStory: '',
    AdviceToBuyer: '',
  });

  const Questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
  ];
  const mandatory = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
  ];
  const Title = [
    'About seller',
    'Family Details',
    'Education',
    'Profession',
    'Likes & Interest',
    'Neighbour',
    'Intent of Selling',
    'Seller Story',
  ];

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
    const body = {
      husband_name: knowYourSellerInfo.HusbandName,
      wife_name: knowYourSellerInfo.WifeName,
      contact_number: knowYourSellerInfo.ContactNoPrimary,
      alternate_contact_number: knowYourSellerInfo.ContactNoSecondary,
      email: knowYourSellerInfo.Email,
      geo_location: knowYourSellerInfo.GeoLocation,
      native_place: knowYourSellerInfo.SellerNativePlace,
      total_family_members: knowYourSellerInfo.TotalFamilyMembers,
      family_members: knowYourSellerInfo.SelectFamilyMember,
      husband_age: knowYourSellerInfo.HusbandAge,
      wife_age: knowYourSellerInfo.WifeAge,
      pet_friendly: knowYourSellerInfo.PetFriendlyHome,
      neighbours_pet_friendly: knowYourSellerInfo.PetFriendlySociety,
      access_to_helpers: knowYourSellerInfo.Handymen,
      husband_qualification: knowYourSellerInfo.HusbandQualification,
      husband_stream: knowYourSellerInfo.HusbandStream,
      husband_college: knowYourSellerInfo.HusbandCollegeName,
      wife_qualification: knowYourSellerInfo.WifeQualification,
      wife_stream: knowYourSellerInfo.WifeStream,
      wife_college: knowYourSellerInfo.WifeCollegeName,
      children_school: knowYourSellerInfo.InfoChildrenInstituteName,
      family_belongs_to_college: knowYourSellerInfo.TopUniversity,
      family_belongs_to_institute: +knowYourSellerInfo.TopInstitute,
      husband_profession: knowYourSellerInfo.HusbandProfessionType,
      husband_organization: knowYourSellerInfo.HusbandOrganization,
      wife_profession: knowYourSellerInfo.WifeProfessionType,
      wife_organization: knowYourSellerInfo.WifeOrganization,
      husband_linkedin_url: knowYourSellerInfo.HusbandLinkedInProfile,
      wife_linkedin_url: knowYourSellerInfo.WifeLinkedInProfile,
      mode_of_transport: knowYourSellerInfo.TravelBy,
      husband_social_status: knowYourSellerInfo.HusbandSocialStatus,
      husband_social_circle: knowYourSellerInfo.HusbandSocialCircle,
      wife_social_status: knowYourSellerInfo.WifeSocialStatus,
      wife_social_circle: knowYourSellerInfo.WifeSocialCircle,
      husband_likes: knowYourSellerInfo.HusbandInterest,
      wife_likes: knowYourSellerInfo.WifeInterest,
      language_known: knowYourSellerInfo.Languages,
      cuisine_preference: knowYourSellerInfo.Cuisine,
      neighbour_house_number: knowYourSellerInfo.NeighbourHouse,
      neighbour_family_members: knowYourSellerInfo.NeighbourFamilyConfig,
      neighbour_profession: knowYourSellerInfo.NeighbourprofessionType,
      neighbour_social_status: knowYourSellerInfo.NeighbourNature,
      intent_of_selling: knowYourSellerInfo.Intent,
      // seller_photo: knowYourSellerInfo.Sellerphoto,
      // family_photo: knowYourSellerInfo.SellerFamilyphoto,
      seller_story: knowYourSellerInfo.SellerStory,
      rent_living_duration: knowYourSellerInfo.SellerRentedDuration,
      purchase_living_duration: knowYourSellerInfo.SellerPurschaseDuration,
      family_info: knowYourSellerInfo.familyInfo,
      experience_with_home: knowYourSellerInfo.ExperienceWithHome,
      positive_story: knowYourSellerInfo.PositiveStory,
      advice_to_buyer: knowYourSellerInfo.AdviceToBuyer,
    };

    const data = {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    axios
      .put(`api/tasks/${localStorage.getItem('task_id')}/seller-info/`, body, {
        headers: data,
      })
      .then(res => {
        successNotify();
        navigate('/todays-task', { replace: true });
        const status = { status: 'C' };
        axios.patch(`api/tasks/${localStorage.getItem('task_id')}/`, status, {
          headers: data,
        });
      })
      .catch(err => {
        var msg = 'Form uploading Failed';
        failedNotify(msg);
        setLoading(false);
      });
  };

  let keysArr = Object.keys(knowYourSellerInfo);

  console.log(
    keysArr,
    'keysArr >>>>',
    questionCount,
    'ques',
    knowYourSellerInfo[keysArr[questionCount - 1]],
  );



  return (
    <div className=''>
      <ToastContainer autoClose={1500} />
      <div className='p-3 text-center mt-10 bg-slate-100'>
        <h2 className='text-sky-600 text-2xl font-bold'>Know Your Seller</h2>
        <div className='text-left '>
          <div className='flex px-5 mt-10 justify-between'>
            <div className='text-lg font-bold text-sky-500  '>
              {' '}
              {questionCount <= 8
                ? Title[0]
                : questionCount <= 16
                ? Title[1]
                : questionCount <= 25
                ? Title[2]
                : questionCount <= 32
                ? Title[3]
                : questionCount <= 40
                ? Title[4]
                : questionCount <= 44
                ? Title[5]
                : Title[6]}
            </div>
            <div className='font-normal  '>
              Total Questions: {Questions.length}
            </div>
          </div>
          <div className='form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 '>
            <div className='main-body  '>
              <SellerInfo
                questionCount={questionCount}
                knowYourSellerInfo={knowYourSellerInfo}
                setKnowYourSellerInfo={setKnowYourSellerInfo}
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
            objName={knowYourSellerInfo}
            finishNo={52}
          />
        </div>
      </div>
    </div>
  );
};

export default SellerInfoStructure;
