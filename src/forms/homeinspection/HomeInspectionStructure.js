import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeInspection from './HomeInspection';
const HomeInfoStructure = () => {
  const [questionCount, setQuestionCount] = useState(1);

  const [homeInspectionInfo, sethomeInspectionInfo] = useState({
    livingRoomFlooringType: '',
    livingRoomCeramicTileType: '',
    livingRoomStoneFlooringType: '',
    livingRoomWoodenFlooringType: '',
    livingRoomPvcFlooringType: '',
    livingRoomFlooringDefects: '',
    livingRoomWalls: '',
    livingRoomWallFinishing: '',
    livingRoomPaint: '',
    livingRoomWallTileCeramicType: '',
    livingRoomWallDefects: '',
    livingRoomCeiling: '',
    livingRoomCeilingPaint: '',
    livingRoomCeilingDefects: '',
    livingRoomDoorFrame: '',
    livingRoomDoorFrameDefects: '',
    livingRoomDoorDefects: '',
    livingRoomDoorHardware: '',
    livingRoomDoorHardwareDefects: '',
    livingRoomWindowFrame: '',
    livingRoomWindowFrameDefects: '',
    livingRoomWindowHardware: '',
    livingRoomWindowHardwareDefects: '',
    livingRoomWindowShutter: '',
    livingRoomWindowShutterDefects: '',
    livingRoomWallPanelDefects: '',
    livingRoomPartition: '',
    livingRoomPartitionDefects: '',
    livingRoomElectricalWiring: '',
    livingRoomElectricalWiringDefects: '',
    livingRoomElectricalPoints: '',
    livingRoomElectricalPointsDefects: '',
    livingRoomCeilingLight: '',
    livingRoomCeilingLightDefects: '',
    livingRoomCeilingFanDefects: '',
    livingRoomAcDefects: '',
    kitchenPlatform: '',
    kitchenPlatformDefects: '',
    kitchenPlatformSink: '',
    kitchenPlatformSinkDefects: '',
    kitchenPlumbingDefects: '',
    kitchenPlumbingFixturesTap: '',
    kitchenFlooringType: '',
    kitchenCeramicTileType: '',
    kitchenStoneFlooringType: '',
    kitchenWoodenFlooringType: '',
    kitchenPvcFlooringType: '',
    kitchenFlooringDefects: '',
    kitchenWalls: '',
    kitchenWallPlasterDefects: '',
    kitchenWallFinishing: '',
    kitchenPaint: '',
    kitchenWallTileCeramicType: '',
    kitchenWallDefects: '',
    kitchenCeiling: '',
    kitchenCeilingPaint: '',
    kitchenCeilingDefects: '',
    kitchenDoorFrame: '',
    kitchenDoorFrameDefects: '',
    kitchenDoorDefects: '',
    kitchenDoorHardware: '',
    kitchenDoorHardwareDefects: '',
    kitchenWindowFrame: '',
    kitchenWindowFrameDefects: '',
    kitchenWindowHardware: '',
    kitchenWindowHardwareDefects: '',
    kitchenWindowShutter: '',
    kitchenWindowShutterDefects: '',
    kitchenWallPanelDefects: '',
    kitchenWallPartition: '',
    kitchenWallPartitionDefects: '',
    kitchenElectricalWiring: '',
    kitchenElectricalWiringDefects: '',
    kitchenElectricalPoints: '',
    kitchenElectricalPointsDefects: '',
    kitchenCeilingLight: '',
    kitchenCeilingLightDefects: '',
    kitchenFanType: '',
    kitchenFanDefects: '',
    kitchenChimney: '',
    kitchenChimneyDefects: '',
    bathroomPlumbing: '',
    bathroomSanitaryFixtures: '',
    bathroomPlumbingFixtures: '',
    bathroomPlumbingFixturesType: '',
    bathroomPlumbingDefects: '',
    bathroomFlooringType: '',
    bathroomCeramicTileType: '',
    bathroomStoneFlooringType: '',
    bathroomWoodenFlooringType: '',
    bathroomPvcFlooringType: '',
    bathroomFlooringDefects: '',
    bathroomWalls: '',
    bathroomWallDefects: '',
    bathroomWallFinishing: '',
    bathroomPaint: '',
    bathroomWallTileCeramicType: '',
    bathroomCeiling: '',
    bathroomCeilingPaint: '',
    bathroomCeilingDefects: '',
    bathroomDoorFrame: '',
    bathroomDoorFrameDefects: '',
    bathroomDoorDefects: '',
    bathroomDoorHardware: '',
    bathroomDoorHardwareDefects: '',
    bathroomWindowFrame: '',
    bathroomWindowFrameDefects: '',
    bathroomWindowHardware: '',
    bathroomWindowHardwareDefects: '',
    bathroomWindowShutter: '',
    bathroomWindowShutterDefects: '',
    bathroomWallPanelDefects: '',
    bathroomWallPartition: '',
    bathroomWallPartitionDefects: '',
    bathroomElectricalWiring: '',
    bathroomElectricalWiringDefects: '',
    bathroomElectricalPoints: '',
    bathroomElectricalPointsDefects: '',
    bathroomCeilingLight: '',
    bathroomCeilingLightDefects: '',
    bathroomFan: '',
    bathroomFanDefects: '',
    bedroomFlooringType: '',
    bedroomCeramicTileType: '',
    bedroomStoneFlooringType: '',
    bedroomWoodenFlooringType: '',
    bedroomPvcFlooringType: '',
    bedroomFlooringDefects: '',
    bedroomWalls: '',
    bedroomWallDefects: '',
    bedroomWallFinishing: '',
    bedroomPaint: '',
    bedroomWallTileCeramicType: '',
    bedroomCeiling: '',
    bedroomCeilingPaint: '',
    bedroomCeilingDefects: '',
    bedroomDoorFrame: '',
    bedroomDoorFrameDefects: '',
    bedroomDoorDefects: '',
    bedroomDoorHardware: '',
    bedroomDoorHardwareDefects: '',
    bedroomWindowFrame: '',
    bedroomWindowFrameDefects: '',
    bedroomWindowHardware: '',
    bedroomWindowHardwareDefects: '',
    bedroomWindowShutter: '',
    bedroomWindowShutterDefects: '',
    bedroomWallPanelDefects: '',
    bedroomElectricalWiring: '',
    bedroomElectricalWiringDefects: '',
    bedroomElectricalPoints: '',
    bedroomElectricalPointsDefects: '',
    bedroomCeilingLight: '',
    bedroomCeilingLightDefects: '',
    bedroomFan: '',
    bedroomFanDefects: '',
    bedroomAc: '',
    bedroomAcDefects: '',
  });
  const successNotify = () =>
    toast.success('form filled Successfully', {
      position: 'bottom-center',
    });
  const failedNotify = () =>
    toast.error('something went wrong', {
      position: 'bottom-center',
    });
  const navigate = useNavigate();

  const Questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160,
  ];
  const Title = [
    "Living Room",
    "Kitchen",
    "Bathroom",
    "Bedroom",

  ];
  const onSubmit = e => {
    e.preventDefault();

    const body = {
     
      living_room_flooring_type: +homeInspectionInfo.livingRoomFlooringType,
      living_room_ceramic_tile_type: +homeInspectionInfo.livingRoomCeramicTileType,
      living_room_stone_flooring_type: +homeInspectionInfo.livingRoomStoneFlooringType,
      living_room_wooden_flooring_type: +homeInspectionInfo.livingRoomWoodenFlooringType,
      living_room_pvc_flooring_type: +homeInspectionInfo.livingRoomPvcFlooringType,
      living_room_flooring_defects: homeInspectionInfo.livingRoomFlooringDefects,
      living_room_walls:  +homeInspectionInfo.livingRoomWalls,
      living_room_wall_finishing:  +homeInspectionInfo.livingRoomWallFinishing,
      living_room_paint:  +homeInspectionInfo.livingRoomPaint,
      living_room_wall_tile_ceramic_type:  +homeInspectionInfo.livingRoomWallTileCeramicType,
      living_room_wall_defects:  homeInspectionInfo.livingRoomWallDefects,
      living_room_ceiling:  +homeInspectionInfo.livingRoomCeiling,
      
      living_room_ceiling_paint:  +homeInspectionInfo.livingRoomCeilingPaint,
      living_room_ceiling_defects:  homeInspectionInfo.livingRoomCeilingDefects,
      living_room_door_frame:  +homeInspectionInfo.livingRoomDoorFrame,
      living_room_door_frame_defects:   homeInspectionInfo.livingRoomDoorFrameDefects,
      living_room_door_defects:  homeInspectionInfo.livingRoomDoorDefects,
      living_room_door_hardware:  +homeInspectionInfo.livingRoomDoorHardware,
      living_room_door_hardware_defects:  homeInspectionInfo.livingRoomDoorHardwareDefects,
      living_room_window_frame:   +homeInspectionInfo.livingRoomWindowFrame,
      living_room_window_frame_defects:  homeInspectionInfo.livingRoomWindowFrameDefects,
      living_room_window_hardware:  +homeInspectionInfo.livingRoomWindowHardware,
      living_room_window_hardware_defects:  homeInspectionInfo.livingRoomWindowHardwareDefects,
      living_room_window_shutter:  +homeInspectionInfo.livingRoomWindowShutter,
      living_room_window_shutter_defects:  homeInspectionInfo.livingRoomWindowShutterDefects,
      living_room_wall_panel_defects:  homeInspectionInfo.livingRoomWallPanelDefects,
      living_room_partition:  +homeInspectionInfo.livingRoomPartition,
      living_room_partition_defects:  homeInspectionInfo.livingRoomPartitionDefects,
      living_room_electrical_wiring:  +homeInspectionInfo.livingRoomElectricalWiring,
      living_room_electrical_wiring_defects:  homeInspectionInfo.livingRoomElectricalWiringDefects,
      living_room_electrical_points:  +homeInspectionInfo.livingRoomElectricalPoints,
      living_room_electrical_points_defects:  homeInspectionInfo.livingRoomElectricalPointsDefects,
      living_room_ceiling_light:  +homeInspectionInfo.livingRoomCeilingLight,
      living_room_ceiling_light_defects: homeInspectionInfo.livingRoomCeilingLightDefects,
      living_room_ceiling_fan_defects:  homeInspectionInfo.livingRoomCeilingFanDefects,
      living_room_ac_defects:  homeInspectionInfo.livingRoomAcDefects,
      kitchen_platform:  +homeInspectionInfo.kitchenPlatform,
      kitchen_platform_defects:  homeInspectionInfo.kitchenPlatformDefects,
      kitchen_platform_sink:  +homeInspectionInfo.kitchenPlatformSink,
      kitchen_platform_sink_defects:  homeInspectionInfo.kitchenPlatformSinkDefects,
      kitchen_plumbing_defects:  homeInspectionInfo.kitchenPlumbingDefects,
      kitchen_plumbing_fixtures_tap:  +homeInspectionInfo.kitchenPlumbingFixturesTap,
      kitchen_flooring_type:  +homeInspectionInfo.kitchenFlooringType,
      kitchen_ceramic_tile_type:  +homeInspectionInfo.kitchenCeramicTileType,
      kitchen_stone_flooring_type:  +homeInspectionInfo.kitchenStoneFlooringType,
      kitchen_wooden_flooring_type:  +homeInspectionInfo.kitchenWoodenFlooringType,
      kitchen_pvc_flooring_type:  +homeInspectionInfo.kitchenPvcFlooringType,
      kitchen_flooring_defects:  homeInspectionInfo.kitchenFlooringDefects,
      kitchen_walls:    +homeInspectionInfo.kitchenWalls,
      kitchen_wall_plaster_defects:  homeInspectionInfo.kitchenWallPlasterDefects,
      kitchen_wall_finishing:  +homeInspectionInfo.kitchenWallFinishing,
      kitchen_paint:    +homeInspectionInfo.kitchenPaint,
      kitchen_wall_tile_ceramic_type:  +homeInspectionInfo.kitchenWallTileCeramicType,
      kitchen_wall_defects:  homeInspectionInfo.kitchenWallDefects,
      kitchen_ceiling:  +homeInspectionInfo.kitchenCeiling,
      kitchen_ceiling_paint:  +homeInspectionInfo.kitchenCeilingPaint,
      kitchen_ceiling_defects:  homeInspectionInfo.kitchenCeilingDefects,
      kitchen_door_frame:   +homeInspectionInfo.kitchenDoorFrame,
      kitchen_door_frame_defects:   homeInspectionInfo.kitchenDoorFrameDefects,
      kitchen_door_defects:   homeInspectionInfo.kitchenDoorDefects,
      kitchen_door_hardware:  +homeInspectionInfo.kitchenDoorHardware,
      kitchen_door_hardware_defects:  homeInspectionInfo.kitchenDoorHardwareDefects,
      kitchen_window_frame:   +homeInspectionInfo.kitchenWindowFrame,
      kitchen_window_frame_defects:   homeInspectionInfo.kitchenWindowFrameDefects,
      kitchen_window_hardware:  +homeInspectionInfo.kitchenWindowHardware,
      kitchen_window_hardware_defects:  homeInspectionInfo.kitchenWindowHardwareDefects,
      kitchen_window_shutter:   +homeInspectionInfo.kitchenWindowShutter,
      kitchen_window_shutter_defects:   homeInspectionInfo.kitchenWindowShutterDefects,
      kitchen_wall_panel_defects:   homeInspectionInfo.kitchenWallPanelDefects,
      kitchen_wall_partition:   +homeInspectionInfo.kitchenWallPartition,
      kitchen_wall_partition_defects:   homeInspectionInfo.kitchenWallPartitionDefects,
      kitchen_electrical_wiring:  +homeInspectionInfo.kitchenElectricalWiring,
      kitchen_electrical_wiring_defects:  homeInspectionInfo.kitchenElectricalWiringDefects,
      kitchen_electrical_points:  +homeInspectionInfo.kitchenElectricalPoints,
      kitchen_electrical_points_defects:  homeInspectionInfo.kitchenElectricalPointsDefects, 
      kitchen_ceiling_light:  +homeInspectionInfo.kitchenCeilingLight,
      kitchen_ceiling_light_defects:  homeInspectionInfo.kitchenCeilingLightDefects,
      kitchen_fan_type:   +homeInspectionInfo.kitchenFanType,
      kitchen_fan_defects:  homeInspectionInfo.kitchenFanDefects,
      kitchen_chimney:  +homeInspectionInfo.kitchenChimney,
      kitchen_chimney_defects:  homeInspectionInfo.kitchenChimneyDefects,
      bathroom_plumbing:  +homeInspectionInfo.bathroomPlumbing,
      bathroom_sanitary_fixtures:   +homeInspectionInfo.bathroomSanitaryFixtures,
      bathroom_plumbing_fixtures:   +homeInspectionInfo.bathroomPlumbingFixtures,
      bathroom_plumbing_fixtures_type:  +homeInspectionInfo.bathroomPlumbingFixturesType,
      bathroom_plumbing_defects:  homeInspectionInfo.bathroomPlumbingDefects,
      bathroom_flooring_type:   +homeInspectionInfo.bathroomFlooringType,
      bathroom_ceramic_tile_type:   +homeInspectionInfo.bathroomCeramicTileType,
      bathroom_stone_flooring_type:   +homeInspectionInfo.bathroomStoneFlooringType,
      bathroom_wooden_flooring_type:  +homeInspectionInfo.bathroomWoodenFlooringType,
      bathroom_pvc_flooring_type:   +homeInspectionInfo.bathroomPvcFlooringType,
      bathroom_flooring_defects:  homeInspectionInfo.bathroomFlooringDefects,
      bathroom_walls:   +homeInspectionInfo.bathroomWalls,
      bathroom_wall_defects:  homeInspectionInfo.bathroomWallDefects,
      bathroom_wall_finishing:  +homeInspectionInfo.bathroomWallFinishing,
      bathroom_paint:   +homeInspectionInfo.bathroomPaint,
      bathroom_wall_tile_ceramic_type:  +homeInspectionInfo.bathroomWallTileCeramicType,
      bathroom_ceiling:   +homeInspectionInfo.bathroomCeiling,
      bathroom_ceiling_paint:   +homeInspectionInfo.bathroomCeilingPaint,
      bathroom_ceiling_defects:   homeInspectionInfo.bathroomCeilingDefects,
      bathroom_door_frame:  +homeInspectionInfo.bathroomDoorFrame,
      bathroom_door_frame_defects:  homeInspectionInfo.bathroomDoorFrameDefects,
      bathroom_door_defects:  homeInspectionInfo.bathroomDoorDefects,
      bathroom_door_hardware:   +homeInspectionInfo.bathroomDoorHardware,
      bathroom_door_hardware_defects:   homeInspectionInfo.bathroomDoorHardwareDefects,
      bathroom_window_frame:  +homeInspectionInfo.bathroomWindowFrame,
      bathroom_window_frame_defects:  homeInspectionInfo.bathroomWindowFrameDefects,
      bathroom_window_hardware:   +homeInspectionInfo.bathroomWindowHardware,
      bathroom_window_hardware_defects:   homeInspectionInfo.bathroomWindowHardwareDefects,
      bathroom_window_shutter:  +homeInspectionInfo.bathroomWindowShutter,
      bathroom_window_shutter_defects:  homeInspectionInfo.bathroomWindowShutterDefects,
      bathroom_wall_panel_defects:  homeInspectionInfo.bathroomWallPanelDefects,
      bathroom_wall_partition:  +homeInspectionInfo.bathroomWallPartition,
      bathroom_wall_partition_defects:  homeInspectionInfo.bathroomWallPartitionDefects,
      bathroom_electrical_wiring:   +homeInspectionInfo.bathroomElectricalWiring,
      bathroom_electrical_wiring_defects:   homeInspectionInfo.bathroomElectricalWiringDefects,
      bathroom_electrical_points:   +homeInspectionInfo.bathroomElectricalPoints,
      bathroom_electrical_points_defects:   homeInspectionInfo.bathroomElectricalPointsDefects,
      bathroom_ceiling_light:   +homeInspectionInfo.bathroomCeilingLight,
      bathroom_ceiling_light_defects:   homeInspectionInfo.bathroomCeilingLightDefects,
      bathroom_fan:   +homeInspectionInfo.bathroomFan,
      bathroom_fan_defects:   homeInspectionInfo.bathroomFanDefects,
      bedroom_flooring_type:  +homeInspectionInfo.bedroomFlooringType,
      bedroom_ceramic_tile_type:  +homeInspectionInfo.bedroomCeramicTileType,
      bedroom_stone_flooring_type:  +homeInspectionInfo.bedroomStoneFlooringType,
      bedroom_wooden_flooring_type:   +homeInspectionInfo.bedroomWoodenFlooringType,
      bedroom_pvc_flooring_type:  +homeInspectionInfo.bedroomPvcFlooringType,
      bedroom_flooring_defects:   homeInspectionInfo.bedroomFlooringDefects,
      bedroom_walls:  +homeInspectionInfo.bedroomWalls,
      bedroom_wall_defects:   homeInspectionInfo.bedroomWallDefects,
      bedroom_wall_finishing:   +homeInspectionInfo.bedroomWallFinishing,
      bedroom_paint:  +homeInspectionInfo.bedroomPaint,
      bedroom_wall_tile_ceramic_type:   +homeInspectionInfo.bedroomWallTileCeramicType,
      bedroom_ceiling:  +homeInspectionInfo.bedroomCeiling,
      bedroom_ceiling_paint:    +homeInspectionInfo.bedroomCeilingPaint,
      bedroom_ceiling_defects:  homeInspectionInfo.bedroomCeilingDefects,
      bedroom_door_frame:   +homeInspectionInfo.bedroomDoorFrame,
      bedroom_door_frame_defects:   homeInspectionInfo.bedroomDoorFrameDefects,
      bedroom_door_defects:   homeInspectionInfo.bedroomDoorDefects,
      bedroom_door_hardware:  +homeInspectionInfo.bedroomDoorHardware, 
      bedroom_door_hardware_defects:  homeInspectionInfo.bedroomDoorHardwareDefects,
      bedroom_window_frame:   +homeInspectionInfo.bedroomWindowFrame,
      bedroom_window_frame_defects:   homeInspectionInfo.bedroomWindowFrameDefects,
      bedroom_window_hardware:  +homeInspectionInfo.bedroomWindowHardware,
      bedroom_window_hardware_defects:  homeInspectionInfo.bedroomWindowHardwareDefects,
      bedroom_window_shutter:   +homeInspectionInfo.bedroomWindowShutter,
      bedroom_window_shutter_defects:   homeInspectionInfo.bedroomWindowShutterDefects,
      bedroom_wall_panel_defects:   homeInspectionInfo.bedroomWallPanelDefects,
      bedroom_electrical_wiring:  +homeInspectionInfo.bedroomElectricalWiring,
      bedroom_electrical_wiring_defects:  homeInspectionInfo.bedroomElectricalWiringDefects,
      bedroom_electrical_points:  +homeInspectionInfo.bedroomElectricalPoints,
      bedroom_electrical_points_defects:  homeInspectionInfo.bedroomElectricalPointsDefects,
      bedroom_ceiling_light:  +homeInspectionInfo.bedroomCeilingLight,
      bedroom_ceiling_light_defects:  homeInspectionInfo.bedroomCeilingLightDefects,
      bedroom_fan:  +homeInspectionInfo.bedroomFan,
      bedroom_fan_defects:  homeInspectionInfo.bedroomFanDefects,
      bedroom_ac:   +homeInspectionInfo.bedroomAc,
      bedroom_ac_defects:   homeInspectionInfo.bedroomAcDefects,
    };
    const data = {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    axios
      .put(
        `api/tasks/${localStorage.getItem('task_id')}/home-inspection/`,
        body,
        {
          headers: data,
        },
      )
      .then(res => {
        successNotify();
        navigate('/form-list', { replace: true });
        // const status = { status: "P" };
        // axios.patch(`api/tasks/${localStorage.getItem("task_id")}/`, status, {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // });
      })
      .catch(err => {
        failedNotify();
      });
  };

  return (
    <div>
      <ToastContainer autoClose={1500} />
      <div className='p-3 text-center mt-10 bg-slate-100'>
        <h2 className='text-sky-600 text-2xl font-bold'>Home Inspection</h2>
        <div className='text-left'>
          <div className='progress'></div>
          <div className="flex px-5 mt-10 justify-between">
            <div className="text-lg font-bold text-sky-500  ">
              {" "}
              {questionCount <= 35 ? Title[0]: questionCount <= 82 ? Title[1]: questionCount <= 123 ? Title[2] :  Title[3] }
             
            </div>
            <div className="font-normal  ">
              Total Questions: {Questions.length}
            </div>
          </div>
          <div className='form-container border-4 border-solid shadow-2xl shadow-indigo-500/40 rounded-2xl border-zinc-400   py-10 px-5 '>
            <div className='main-body  '>
              <HomeInspection
                questionCount={questionCount}
                homeInspectionInfo={homeInspectionInfo}
                sethomeInspectionInfo={sethomeInspectionInfo}
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
            {questionCount == 160 ? (
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

export default HomeInfoStructure;
