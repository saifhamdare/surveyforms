import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import KnowYourSociety from './KnowYourSociety';
const KnowYourSocietyStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);
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
    PlayGroundCondition: '',
    PlayGroundtype: '',
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
    PublicAreaLighting: '',
    PublicAreaLightingCondition: '',
    PublicAreaLightingRemark: '',
    otherAmenities: '',
    otherAmenitiesCondition: '',
    otherAmenitiesRemark: '',
    DailyWasteCollecion: '',

    WaterStoargeFacility: '',
    FireFightingSystem: '',
    SecurityService: '',
    GuardAtLobby: '',
    NonMemberDeliveryboy: '',
    SatelliteTV: '',
    Agency: '',
    InsideFlat: '',
    // liftphoto: '',
    // liftlobbyphoto: '',
    // staircasephoto: '',
    // entrancelobbyephoto: '',
    // MeetingRoomphoto: '',
    // ClubHousephoto: '',
    // PlayGroundphoto: '',
    // SwimmingPoolphoto: '',
    // JoggingTrackphoto: '',
    // Reflexologyphoto: '',
    // cyclingTrackPhoto: '',
    // Greenaryphoto: '',
    // PublicAreaLightingphoto: '',
    // otherAmenitiesphoto: '',
    gymCondition:'',
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

  const Questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,75
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
    // if (
    //   KnowYourSoceity.FlatsAvailable === '' ||
    //   KnowYourSoceity.Floor === '' ||
    //   KnowYourSoceity.Landmarks === '' ||
    //   KnowYourSoceity.buildingtype === '' ||
    //   KnowYourSoceity.ParkingType === '' ||
    //   KnowYourSoceity.amenitieArea === '' ||
    //   KnowYourSoceity.society_structure === '' ||
    //   KnowYourSoceity.CommercialEntity === '' ||
    //   KnowYourSoceity.Lift === '' ||
    //   KnowYourSoceity.liftType === '' ||
    //   KnowYourSoceity.liftCondition === '' ||
    //   KnowYourSoceity.liftremark === '' ||
    //   KnowYourSoceity.liftLobby === '' ||
    //   KnowYourSoceity.liftLobbyCondition === '' ||
    //   KnowYourSoceity.liftlobbyremark === '' ||
    //   KnowYourSoceity.staircaseCondition === '' ||
    //   KnowYourSoceity.staircaseremark === '' ||
    //   KnowYourSoceity.entranceLobbyremark === '' ||
    //   KnowYourSoceity.conditionofMeetingRoom === '' ||
    //   KnowYourSoceity.MeetingRoomremark === '' ||
    //   KnowYourSoceity.ClubHouseCondition === '' ||
    //   KnowYourSoceity.ClubHouseremark === '' ||
    //   KnowYourSoceity.PlayGroundCondition === '' ||
    //   KnowYourSoceity.PlayGroundtype === '' ||
    //   KnowYourSoceity.PlayGroundremark === '' ||
    //   KnowYourSoceity.SwimmingPoolType === '' ||
    //   KnowYourSoceity.SwimmingPoolConditiion === '' ||
    //   KnowYourSoceity.SwimmingPoolRemark === '' ||
    //   KnowYourSoceity.JoggingTrackCondition === '' ||
    //   KnowYourSoceity.JoggingTrackRemark === '' ||
    //   KnowYourSoceity.ElectricitySupplier === '' ||
    //   KnowYourSoceity.ReflexologyCondition === '' ||
    //   KnowYourSoceity.ReflexologyRemark === '' ||
    //   KnowYourSoceity.CycleTrackCondition === '' ||
    //   KnowYourSoceity.CycleTrackRemark === '' ||
    //   KnowYourSoceity.Greenary === '' ||
    //   KnowYourSoceity.PublicAreaLighting === '' ||
    //   KnowYourSoceity.PublicAreaLightingCondition === '' ||
    //   KnowYourSoceity.PublicAreaLightingRemark === '' ||
    //   KnowYourSoceity.otherAmenities === '' ||
    //   KnowYourSoceity.otherAmenitiesCondition === '' ||
    //   KnowYourSoceity.otherAmenitiesRemark === '' ||
    //   KnowYourSoceity.DailyWasteCollecion === '' ||
    //   KnowYourSoceity.WaterStoargeFacility === '' ||
    //   KnowYourSoceity.FireFightingSystem === '' ||
    //   KnowYourSoceity.SecurityService === '' ||
    //   KnowYourSoceity.GuardAtLobby === '' ||
    //   KnowYourSoceity.NonMemberDeliveryboy === '' ||
    //   KnowYourSoceity.SatelliteTV === '' ||
    //   KnowYourSoceity.Agency === '' ||
    //   KnowYourSoceity.InsideFlat === '' ||
    //   KnowYourSoceity.liftphoto === '' ||
    //   KnowYourSoceity.liftlobbyphoto === '' ||
    //   KnowYourSoceity.staircasephoto === '' ||
    //   KnowYourSoceity.entrancelobbyephoto === '' ||
    //   KnowYourSoceity.MeetingRoomphoto === '' ||
    //   KnowYourSoceity.ClubHousephoto === '' ||
    //   KnowYourSoceity.PlayGroundphoto === '' ||
    //   KnowYourSoceity.SwimmingPoolphoto === '' ||
    //   KnowYourSoceity.JoggingTrackphoto === '' ||
    //   KnowYourSoceity.Reflexologyphoto === '' ||
    //   KnowYourSoceity.cyclingTrackPhoto === '' ||
    //   KnowYourSoceity.Greenaryphoto === '' ||
    //   KnowYourSoceity.PublicAreaLightingphoto === '' ||
    //   KnowYourSoceity.otherAmenitiesphoto === '' ||
    //   KnowYourSoceity.EatingHabitsAllowed === '' ||
    //   KnowYourSoceity.MajorityAgeGroup === '' ||
    //   KnowYourSoceity.MembersAllowed === '' ||
    //   KnowYourSoceity.MajorityMemberType === '' ||
    //   KnowYourSoceity.BatchlorsAllowed === '' ||
    //   KnowYourSoceity.nonMarriedAllowed === '' ||
    //   KnowYourSoceity.ChildrenPlayingAround === '' ||
    //   KnowYourSoceity.CalmMember === '' ||
    //   KnowYourSoceity.ElderPeopleActivity === '' ||
    //   KnowYourSoceity.Celebration === '' ||
    //   KnowYourSoceity.SocietyMeetings === '' ||
    //   KnowYourSoceity.FunctionsAllowed === '' ||
    //   KnowYourSoceity.Cleanliness === '' ||
    //   KnowYourSoceity.CleanlinessMaintained === '' ||
    //   KnowYourSoceity.Handymen === '' ||
    //   KnowYourSoceity.Ramp === '' ||
    //   KnowYourSoceity.OneBHK === '' ||
    //   KnowYourSoceity.TwoBHK === '' ||
    //   KnowYourSoceity.ThreeBHK === '' ||
    //   KnowYourSoceity.Visitor === '' ||
    //   KnowYourSoceity.Noise === '' ||
    //   KnowYourSoceity.StrayDogs === '' ||
    //   KnowYourSoceity.Crack === '' ||
    //   KnowYourSoceity.Deed === ''
    // ) {
    //   var msg = 'fill complete form';
    //   failedNotify(msg);
    // }else{

    // formdata.append("lift_photo", KnowYourSoceity.liftphoto);
    // formdata.append("lift_lobby_photo", KnowYourSoceity.liftlobbyphoto);
    // formdata.append("staircase_photo", KnowYourSoceity.staircasephoto);
    // formdata.append("entrance_lobby_photo",KnowYourSoceity.entrancelobbyephoto);
    // formdata.append("society_meeting_room_photo",KnowYourSoceity.MeetingRoomphoto);
    // formdata.append("club_house_photo", KnowYourSoceity.ClubHousephoto);
    // formdata.append("play_ground_photo", KnowYourSoceity.PlayGroundphoto);
    // formdata.append("swimming_pool_photo", KnowYourSoceity.SwimmingPoolphoto);
    // formdata.append("jogging_track_photo", KnowYourSoceity.JoggingTrackphoto);
    // formdata.append("reflexology_path_photo", KnowYourSoceity.Reflexologyphoto);
    // formdata.append("cycling_track_photo", KnowYourSoceity.cyclingTrackPhoto);
    // formdata.append("greenery_photo", KnowYourSoceity.Greenaryphoto);
    // formdata.append("public_area_lighting_photo",KnowYourSoceity.PublicAreaLightingphoto);
    // formdata.append("amenities_photo", KnowYourSoceity.otherAmenitiesphoto);
    // formdata.append("entrance_lobby_condition",KnowYourSoceity.EntranceLobbyCondition);
    // formdata.append("water_storage_type",KnowYourSoceity.WaterStorage);
    // formdata.append("nationality_allowed",KnowYourSoceity.NationalityAllowed);
    // formdata.append("number_of_flats", +KnowYourSoceity.FlatsAvailable);
    // formdata.append("floor", +KnowYourSoceity.Floor);
    // formdata.append("nearby_landmarks", KnowYourSoceity.Landmarks);
    // formdata.append("building_type", +KnowYourSoceity.buildingtype);
    // formdata.append("parking_type", KnowYourSoceity.ParkingType);
    // formdata.append("amenities_location", +KnowYourSoceity.amenitieArea);
    // formdata.append("society_structure", +KnowYourSoceity.PropertySubtype);
    // formdata.append("commercial_entities", KnowYourSoceity.CommercialEntity);

    // formdata.append("lift", KnowYourSoceity.Lift);
    // formdata.append("lift_type", +KnowYourSoceity.liftType);
    // formdata.append("lift_condition", +KnowYourSoceity.liftCondition);
    // formdata.append("lift_remark", KnowYourSoceity.liftremark);
    // formdata.append("lift_lobby", +KnowYourSoceity.liftLobby);
    // formdata.append("lift_lobby_condition", +KnowYourSoceity.liftLobbyCondition);
    // formdata.append("lift_lobby_remark", KnowYourSoceity.liftlobbyremark);
    // formdata.append("staircase_condition", +KnowYourSoceity.staircaseCondition);
    // formdata.append("staircase_remark", KnowYourSoceity.staircaseremark);
    // formdata.append("entrance_lobby_remark",
    //   KnowYourSoceity.entranceLobbyremark
    // );
    // formdata.append("society_meeting_room_condition",
    //   +KnowYourSoceity.conditonofMeetingRoom
    // );
    // formdata.append("society_meeting_room_remark",
    //   KnowYourSoceity.MeetingRoomremark
    // );
    // formdata.append("club_house_condition", +KnowYourSoceity.ClubHouseCondition);
    // formdata.append("club_house_remark", KnowYourSoceity.ClubHouseremark);
    // formdata.append("play_ground_type", KnowYourSoceity.PlayGroundtype);
    // formdata.append("play_ground_condition",
    //   +KnowYourSoceity.PlayGroundCondition
    // );
    // formdata.append("play_ground_remark", KnowYourSoceity.PlayGroundremark);
    // formdata.append("swimming_pool_type", KnowYourSoceity.SwimmingPoolType);
    // formdata.append("swimming_pool_condition",
    //   +KnowYourSoceity.SwimmingPoolConditiion
    // );
    // formdata.append("swimming_pool_remark", KnowYourSoceity.SwimmingPoolRemark);
    // formdata.append("jogging_track_condition",
    //   +KnowYourSoceity.JoggingTrackCondition
    // );
    // formdata.append("jogging_track_remark", KnowYourSoceity.JoggingTrackRemark);
    // formdata.append("electricity_supplier",
    //   KnowYourSoceity.ElectricitySupplier
    // );
    // formdata.append("reflexology_path_condition",
    //   +KnowYourSoceity.ReflexologyCondition
    // );
    // formdata.append("reflexology_path_remark",
    //   KnowYourSoceity.ReflexologyRemark
    // );
    // formdata.append("cycling_track_condition",
    //   +KnowYourSoceity.CycleTrackCondition
    // );
    // formdata.append("cycling_track_remark", KnowYourSoceity.CycleTrackRemark);
    // formdata.append("greenery", KnowYourSoceity.Greenary);
    // formdata.append("public_area_lighting_condition",
    //   +KnowYourSoceity.PublicAreaLightingCondition
    // );
    // formdata.append("public_area_lighting_remark",
    //   KnowYourSoceity.PublicAreaLightingRemark
    // );
    // formdata.append("amenities", KnowYourSoceity.otherAmenities);
    // formdata.append("amenities_condition",
    //   +KnowYourSoceity.otherAmenitiesCondition
    // );
    // formdata.append("amenities_remark", KnowYourSoceity.otherAmenitiesRemark);

    // formdata.append("waste_collection", +KnowYourSoceity.DailyWasteCollecion);
    // formdata.append("water_storage_facility",+KnowYourSoceity.WaterStoargeFacility);
    // formdata.append("common_satellite_tv", KnowYourSoceity.SatelliteTV);
    // formdata.append("facility_management_agency", KnowYourSoceity.Agency);
    // formdata.append("entry_without_security", KnowYourSoceity.InsideFlat);
    // formdata.append("fire_fighting_system", KnowYourSoceity.FireFightingSystem);
    // formdata.append("security_services", KnowYourSoceity.SecurityService);
    // formdata.append("security_guard_only_in_lift_lobby",KnowYourSoceity.GuardAtLobby);
    // formdata.append("non_members_allowed_without_permission",KnowYourSoceity.NonMemberDeliveryboy);
    // formdata.append("eating_habits", KnowYourSoceity.EatingHabitsAllowed);
    // formdata.append("majority_age_group", KnowYourSoceity.MajorityAgeGroup);
    // formdata.append("members_allowed", KnowYourSoceity.MembersAllowed);
    // formdata.append("members_type", +KnowYourSoceity.MajorityMemberType);
    // formdata.append("bachelors_allowed_on_rent",KnowYourSoceity.BatchlorsAllowed);
    // formdata.append("non_married_couples_allowed_on_rent",KnowYourSoceity.nonMarriedAllowed);
    // formdata.append("many_children_playing",KnowYourSoceity.ChildrenPlayingAround);
    // formdata.append("calm_natured_people", KnowYourSoceity.CalmMember);
    // formdata.append("place_for_elderly", KnowYourSoceity.ElderPeopleActivity);
    // formdata.append("society_celebrations", KnowYourSoceity.Celebration);
    // formdata.append("society_meeting", KnowYourSoceity.SocietyMeetings);
    // formdata.append("family_functions_allowed",KnowYourSoceity.FunctionsAllowed);
    // formdata.append("cleanliness", +KnowYourSoceity.Cleanliness);
    // formdata.append("society_maintenance",+KnowYourSoceity.CleanlinessMaintained);
    // formdata.append("access_to_helpers", KnowYourSoceity.Handymen);
    // formdata.append("elderly_friendly", KnowYourSoceity.Ramp);
    // formdata.append("one_bhk_resale_price", KnowYourSoceity.OneBHK);
    // formdata.append("two_bhk_resale_price", KnowYourSoceity.TwoBHK);
    // formdata.append("three_bhk_resale_price", KnowYourSoceity.ThreeBHK);
    // formdata.append("number_of_visitor_parking", KnowYourSoceity.Visitor);
    // formdata.append("high_noise_level", KnowYourSoceity.Noise);
    // formdata.append("stray_animals", KnowYourSoceity.StrayDogs);
    // formdata.append("leakage_or_cracks", KnowYourSoceity.Crack);
    // formdata.append("conveyance_deed", +KnowYourSoceity.Deed);
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
      society_meeting_room_condition: +KnowYourSocietyInfo.conditionofMeetingRoom,
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
      public_area_lighting_condition: KnowYourSocietyInfo.PublicAreaLightingCondition,
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
      non_members_allowed_without_permission:KnowYourSocietyInfo.NonMemberDeliveryboy,
      eating_habits: KnowYourSocietyInfo.EatingHabitsAllowed,
      majority_age_group: KnowYourSocietyInfo.MajorityAgeGroup,
      members_allowed: KnowYourSocietyInfo.MembersAllowed,
      members_type: +KnowYourSocietyInfo.MajorityMemberType,
      bachelors_allowed_on_rent: KnowYourSocietyInfo.BatchlorsAllowed,
      non_married_couples_allowed_on_rent: KnowYourSocietyInfo.nonMarriedAllowed,
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
      }).catch((err) => failedNotify());
    
  
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
              />
            </div>
          </div>
          <div className='footer text-center m-5 mt-10 flex justify-around'>
            <button
              className='border-2 border-sky-700 px-3 py-1 rounded-lg text-sky-700 font-medium'
              disabled={questionCount == 1}
              onClick={() => {
                setQuestionCount(currentPage => currentPage - 1);
              }}
            >
              previous
            </button>
            {questionCount == 75 ? (
              <button
                className='border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium'
                onClick={onSubmit}
              >
                finish
              </button>
            ) : (
              <button
                className='border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium'
                disabled={questionCount == Questions.length}
                onClick={() => {
                  setQuestionCount(currentPage => currentPage + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowYourSocietyStructure;
