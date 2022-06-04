import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import KnowYourSociety from './KnowYourSociety';
import { ActionBtn, ActionButtons } from '../../components';
const KnowYourSocietyStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [KnowYourSocietyInfo, setKnowYourSocietyInfo] = useState({
    FlatsAvailable: '',
    Floor: '',
    Landmarks: '',
    buildingtype: '',
    ParkingType: '',
    amenitieArea: '',
    societyStructure: '',
    CommercialEntity: '',
    Lift: '',
    liftType: '',
    liftCondition: '',
    liftremark: '',
    liftLobby: '',
    liftLobbyCondition: '',
    liftlobbyremark: '',
    staircaseCondition: '',
    staircaseremark: '',
    entranceLobbyremark: '',
    conditionofMeetingRoom: '',
    MeetingRoomremark: '',
    ClubHouseCondition: '',
    ClubHouseremark: '',
    PlayGroundtype: '',
    PlayGroundCondition: '',
    PlayGroundremark: '',
    SwimmingPoolType: '',
    SwimmingPoolConditiion: '',
    SwimmingPoolRemark: '',
    JoggingTrackCondition: '',
    JoggingTrackRemark: '',
    ElectricitySupplier: '',
    ReflexologyCondition: '',
    ReflexologyRemark: '',
    CycleTrackCondition: '',
    CycleTrackRemark: '',
    Greenary: '',
    PublicAreaLightingCondition: '',
    PublicAreaLightingRemark: '',
    gymCondition: '',
    otherAmenities: '',
    otherAmenitiesCondition: '',
    otherAmenitiesRemark: '',
    DailyWasteCollecion: '',
    WaterStoargeFacility: '',
    SatelliteTV: '',
    Agency: '',
    InsideFlat: '',
    FireFightingSystem: '',
    SecurityService: '',
    GuardAtLobby: '',
    NonMemberDeliveryboy: '',
    EatingHabitsAllowed: '',
    MajorityAgeGroup: '',
    MembersAllowed: '',
    MajorityMemberType: '',
    BatchlorsAllowed: '',
    nonMarriedAllowed: '',
    ChildrenPlayingAround: '',
    CalmMember: '',
    ElderPeopleActivity: '',
    Celebration: '',
    SocietyMeetings: '',
    FunctionsAllowed: '',
    Cleanliness: '',
    CleanlinessMaintained: '',
    Handymen: '',
    Ramp: '',
    OneBHK: '',
    TwoBHK: '',
    ThreeBHK: '',
    Visitor: '',
    Noise: '',
    StrayDogs: '',
    Crack: '',
    Deed: '',
  });

  useEffect(() => {
    console.log(KnowYourSocietyInfo);
  }, [KnowYourSocietyInfo]);

  const mandatory = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  ];
  const Questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  ];
  const Title = [
    'Basic Details',
    'Amenities and Service',
    'Security Systems',
    'Community and Culture',
    'Cleanliness',
    'Usefull for You',
  ];
  const successNotify = () =>
    toast.success('form filled Successfully', {
      position: 'bottom-center',
    });
  const failedNotify = () =>
    toast.error(`form not submited. fill complete form`, {
      position: 'bottom-center',
    });

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const body = {
      number_of_flats: +KnowYourSocietyInfo.FlatsAvailable,
      floor: +KnowYourSocietyInfo.Floor,
      nearby_landmarks: KnowYourSocietyInfo.Landmarks,
      building_type: +KnowYourSocietyInfo.buildingtype,
      parking_type: KnowYourSocietyInfo.ParkingType,
      amenities_location: +KnowYourSocietyInfo.amenitieArea,
      society_structure: +KnowYourSocietyInfo.societyStructure,
      commercial_entities: KnowYourSocietyInfo.CommercialEntity,
      lift: KnowYourSocietyInfo.Lift,
      lift_type: +KnowYourSocietyInfo.liftType,
      lift_condition: +KnowYourSocietyInfo.liftCondition,
      lift_remark: KnowYourSocietyInfo.liftremark,
      lift_lobby: +KnowYourSocietyInfo.liftLobby,
      lift_lobby_condition: +KnowYourSocietyInfo.liftLobbyCondition,
      lift_lobby_remark: KnowYourSocietyInfo.liftlobbyremark,
      staircase_condition: +KnowYourSocietyInfo.staircaseCondition,
      staircase_remark: KnowYourSocietyInfo.staircaseremark,
      entrance_lobby_remark: KnowYourSocietyInfo.entranceLobbyremark,
      society_meeting_room_condition:
        +KnowYourSocietyInfo.conditionofMeetingRoom,
      society_meeting_room_remark: KnowYourSocietyInfo.MeetingRoomremark,
      club_house_condition: +KnowYourSocietyInfo.ClubHouseCondition,
      club_house_remark: KnowYourSocietyInfo.ClubHouseremark,
      play_ground_type: KnowYourSocietyInfo.PlayGroundtype,
      play_ground_condition: KnowYourSocietyInfo.PlayGroundCondition,
      play_ground_remark: KnowYourSocietyInfo.PlayGroundremark,
      swimming_pool_type: KnowYourSocietyInfo.SwimmingPoolType,
      swimming_pool_condition: KnowYourSocietyInfo.SwimmingPoolConditiion,
      swimming_pool_remark: KnowYourSocietyInfo.SwimmingPoolRemark,
      jogging_track_condition: KnowYourSocietyInfo.JoggingTrackCondition,
      jogging_track_remark: KnowYourSocietyInfo.JoggingTrackRemark,
      electricity_supplier: KnowYourSocietyInfo.ElectricitySupplier,
      reflexology_path_condition: KnowYourSocietyInfo.ReflexologyCondition,
      reflexology_path_remark: KnowYourSocietyInfo.ReflexologyRemark,
      cycling_track_condition: KnowYourSocietyInfo.CycleTrackCondition,
      cycling_track_remark: KnowYourSocietyInfo.CycleTrackRemark,
      greenery: KnowYourSocietyInfo.Greenary,
      public_area_lighting_condition:
        KnowYourSocietyInfo.PublicAreaLightingCondition,
      public_area_lighting_remark: KnowYourSocietyInfo.PublicAreaLightingRemark,
      gym_condition: KnowYourSocietyInfo.gymCondition,
      amenities: KnowYourSocietyInfo.otherAmenities,
      amenities_condition: KnowYourSocietyInfo.otherAmenitiesCondition,
      amenities_remark: KnowYourSocietyInfo.otherAmenitiesRemark,

      waste_collection: +KnowYourSocietyInfo.DailyWasteCollecion,
      water_storage_facility: KnowYourSocietyInfo.WaterStoargeFacility,
      common_satellite_tv: KnowYourSocietyInfo.SatelliteTV,
      facility_management_agency: KnowYourSocietyInfo.Agency,
      entry_without_security: KnowYourSocietyInfo.InsideFlat,
      fire_fighting_system: KnowYourSocietyInfo.FireFightingSystem,
      security_services: KnowYourSocietyInfo.SecurityService,
      security_guard_only_in_lift_lobby: KnowYourSocietyInfo.GuardAtLobby,
      non_members_allowed_without_permission:
        KnowYourSocietyInfo.NonMemberDeliveryboy,
      eating_habits: KnowYourSocietyInfo.EatingHabitsAllowed,
      majority_age_group: KnowYourSocietyInfo.MajorityAgeGroup,
      members_allowed: KnowYourSocietyInfo.MembersAllowed,
      members_type: +KnowYourSocietyInfo.MajorityMemberType,
      bachelors_allowed_on_rent: KnowYourSocietyInfo.BatchlorsAllowed,
      non_married_couples_allowed_on_rent:
        KnowYourSocietyInfo.nonMarriedAllowed,
      many_children_playing: KnowYourSocietyInfo.ChildrenPlayingAround,
      calm_natured_people: KnowYourSocietyInfo.CalmMember,
      place_for_elderly: KnowYourSocietyInfo.ElderPeopleActivity,
      society_celebrations: KnowYourSocietyInfo.Celebration,
      society_meeting: KnowYourSocietyInfo.SocietyMeetings,
      family_functions_allowed: KnowYourSocietyInfo.FunctionsAllowed,
      cleanliness: +KnowYourSocietyInfo.Cleanliness,
      society_maintenance: KnowYourSocietyInfo.CleanlinessMaintained,
      access_to_helpers: KnowYourSocietyInfo.Handymen,
      elderly_friendly: KnowYourSocietyInfo.Ramp,
      one_bhk_resale_price: KnowYourSocietyInfo.OneBHK,
      two_bhk_resale_price: KnowYourSocietyInfo.TwoBHK,
      three_bhk_resale_price: KnowYourSocietyInfo.ThreeBHK,
      number_of_visitor_parking: KnowYourSocietyInfo.Visitor,
      high_noise_level: KnowYourSocietyInfo.Noise,
      stray_animals: KnowYourSocietyInfo.StrayDogs,
      leakage_or_cracks: KnowYourSocietyInfo.Crack,
      conveyance_deed: +KnowYourSocietyInfo.Deed,
    };

    // console.log(formdata);
    const data = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    axios
      .put(`api/tasks/${localStorage.getItem('task_id')}/society-info/`, body, {
        headers: data,
      })
      .then(res => {
        successNotify();
        navigate('/dashboard', { replace: true });
        const status = { status: 'C' };
        axios.patch(`api/tasks/${localStorage.getItem('task_id')}/`, status, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      })
      .catch(err => {
        failedNotify();
        setLoading(false);
      });
  };

  return (
    <div className=''>
      <ToastContainer autoClose={1500} />
      <div className='p-3 text-center mt-10 '>
        <h2 className='text-sky-600 text-2xl font-bold'>Know Your Society</h2>
        <div className='text-left '>
          <div className='flex px-5 mt-10 justify-between'>
            <div className='text-lg font-bold text-sky-500  '>
              {' '}
              {questionCount <= 8
                ? Title[0]
                : questionCount <= 57
                ? Title[1]
                : questionCount <= 61
                ? Title[2]
                : questionCount <= 65
                ? Title[3]
                : questionCount <= 75
                ? Title[4]
                : Title[5]}
            </div>
            <div className='font-normal  '>
              Total Questions: {Questions.length}
            </div>
          </div>
          <div className='form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 '>
            <div className='main-body  '>
              <KnowYourSociety
                questionCount={questionCount}
                KnowYourSocietyInfo={KnowYourSocietyInfo}
                setKnowYourSocietyInfo={setKnowYourSocietyInfo}
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
            objName={KnowYourSocietyInfo}
            finishNo={75}
          />
        </div>
      </div>
    </div>
  );
};

export default KnowYourSocietyStructure;
