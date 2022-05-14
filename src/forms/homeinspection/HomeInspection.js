import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const HomeInspection = ({
  questionCount,
  homeInspectionInfo,
  sethomeInspectionInfo,
}) => {
  const [livingRoomFlooringDefects, setLivingRoomFlooringDefects] =
    useState('');
  const [livingRoomWallDefects, setlivingRoomWallDefects] = useState('');
  const [livingRoomCeilingDefects, setlivingRoomCeilingDefects] = useState('');
  const [livingRoomDoorFrameDefects, setlivingRoomDoorFrameDefects] =
    useState('');
  const [livingRoomDoorDefects, setlivingRoomDoorDefects] = useState('');
  const [livingRoomDoorHardwareDefects, setlivingRoomDoorHardwareDefects] =
    useState('');
  const [livingRoomWindowFrameDefects, setlivingRoomWindowFrameDefects] =
    useState('');
  const [livingRoomWindowHardwareDefects, setlivingRoomWindowHardwareDefects] =
    useState('');
  const [livingRoomWindowShutterDefects, setlivingRoomWindowShutterDefects] =
    useState('');
  const [livingRoomWallPanelDefects, setlivingRoomWallPanelDefects] =
    useState('');
  const [livingRoomPartitionDefects, setlivingRoomPartitionDefects] =
    useState('');
  const [
    livingRoomElectricalWiringDefects,
    setlivingRoomElectricalWiringDefects,
  ] = useState('');
  const [livingRoomCeilingLightDefects, setlivingRoomCeilingLightDefects] =
    useState('');
  const [livingRoomCeilingFanDefects, setlivingRoomCeilingFanDefects] =
    useState('');
  const [livingRoomAcDefects, setlivingRoomAcDefects] = useState('');
  const [kitchenPlatformDefects, setkitchenPlatformDefects] = useState('');
  const [kitchenFlooringDefects, setkitchenFlooringDefects] = useState('');
  const [kitchenWallPlasterDefects, setkitchenWallPlasterDefects] =
    useState('');
  const [kitchenWallDefects, setkitchenWallDefects] = useState('');
  const [kitchenCeilingDefects, setkitchenCeilingDefects] = useState('');
  const [kitchenDoorFrameDefects, setkitchenDoorFrameDefects] = useState('');
  const [kitchenDoorDefects, setkitchenDoorDefects] = useState('');
  const [kitchenDoorHardwareDefects, setkitchenDoorHardwareDefects] =
    useState('');
  const [kitchenWindowFrameDefects, setkitchenWindowFrameDefects] =
    useState('');
  const [kitchenWindowHardwareDefects, setkitchenWindowHardwareDefects] =
    useState('');
  const [kitchenWindowShutterDefects, setkitchenWindowShutterDefects] =
    useState('');
  const [kitchenWallPanelDefects, setkitchenWallPanelDefects] = useState('');

  const [kitchenPlumbingDefects, setkitchenPlumbingDefects] = useState('');
  const [kitchenPlatformSinkDefects, setkitchenPlatformSinkDefects] =
    useState('');

  const [kitchenWallPartitionDefects, setkitchenWallPartitionDefects] =
    useState('');
  const [kitchenElectricalWiringDefects, setkitchenElectricalWiringDefects] =
    useState('');
  const [kitchenElectricalPointsDefects, setkitchenElectricalPointsDefects] =
    useState('');
  const [kitchenCeilingLightDefects, setkitchenCeilingLightDefects] =
    useState('');
  // const [kitchenFanType, setkitchenFanType] = useState('');
  const [kitchenFanDefects, setkitchenFanDefects] = useState('');
  const [kitchenChimneyDefects, setkitchenChimneyDefects] = useState('');
  const [bathroomPlumbingDefects, setbathroomPlumbingDefects] = useState('');
  const [bathroomFlooringDefects, setbathroomFlooringDefects] = useState('');
  const [bathroomWallDefects, setbathroomWallDefects] = useState('');
  const [bathroomCeilingDefects, setbathroomCeilingDefects] = useState('');
  const [bathroomDoorFrameDefects, setbathroomDoorFrameDefects] = useState('');
  const [bathroomDoorDefects, setbathroomDoorDefects] = useState('');
  const [bathroomDoorHardwareDefects, setbathroomDoorHardwareDefects] =
    useState('');
  const [bathroomWindowFrameDefects, setbathroomWindowFrameDefects] =
    useState('');
  const [bathroomWindowHardwareDefects, setbathroomWindowHardwareDefects] =
    useState('');
  const [bathroomWindowShutterDefects, setbathroomWindowShutterDefects] =
    useState('');
  const [bathroomWallPanelDefects, setbathroomWallPanelDefects] = useState('');
  const [bathroomWallPartitionDefects, setbathroomWallPartitionDefects] =
    useState('');
  const [bathroomElectricalWiringDefects, setbathroomElectricalWiringDefects] =
    useState('');
  const [bathroomElectricalPointsDefects, setbathroomElectricalPointsDefects] =
    useState('');
  const [bathroomCeilingLightDefects, setbathroomCeilingLightDefects] =
    useState('');
  const [bathroomFan, setbathroomFan] = useState('');
  const [bathroomFanDefects, setbathroomFanDefects] = useState('');
  const [bedroomFlooringDefects, setbedroomFlooringDefects] = useState('');
  const [bedroomWallDefects, setbedroomWallDefects] = useState('');
  const [bedroomCeilingDefects, setbedroomCeilingDefects] = useState('');
  const [bedroomDoorFrameDefects, setbedroomDoorFrameDefects] = useState('');
  const [bedroomDoorDefects, setbedroomDoorDefects] = useState('');
  const [bedroomDoorHardwareDefects, setbedroomDoorHardwareDefects] =
    useState('');
  const [bedroomWindowFrameDefects, setbedroomWindowFrameDefects] =
    useState('');
  const [bedroomWindowHardwareDefects, setbedroomWindowHardwareDefects] =
    useState('');
  const [bedroomWindowShutterDefects, setbedroomWindowShutterDefects] =
    useState('');
  const [bedroomWallPanelDefects, setbedroomWallPanelDefects] = useState('');
  const [bedroomElectricalWiringDefects, setbedroomElectricalWiringDefects] =
    useState('');
  const [bedroomElectricalPointsDefects, setbedroomElectricalPointsDefects] =
    useState('');
  const [bedroomCeilingLightDefects, setbedroomCeilingLightDefects] =
    useState('');
  const [bedroomFanDefects, setbedroomFanDefects] = useState('');
  const [bedroomAcDefects, setbedroomAcDefects] = useState('');

  const handleCheckboxChange = (event, state, setState) => {
    const newNames = state?.includes(+event.target.value)
      ? state?.filter(name => name !== event.target.value)
      : [...(state ?? []), +event.target.value];
    setState(newNames);
  };

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomFlooringDefects: livingRoomFlooringDefects,
    }));
  }, [livingRoomFlooringDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomWallDefects: livingRoomWallDefects,
    }));
  }, [livingRoomWallDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomCeilingDefects: livingRoomCeilingDefects,
    }));
  }, [livingRoomCeilingDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomDoorFrameDefects: livingRoomDoorFrameDefects,
    }));
  }, [livingRoomDoorFrameDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomDoorDefects: livingRoomDoorDefects,
    }));
  }, [livingRoomDoorDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomDoorHardwareDefects: livingRoomDoorHardwareDefects,
    }));
  }, [livingRoomDoorHardwareDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomWindowFrameDefects: livingRoomWindowFrameDefects,
    }));
  }, [livingRoomWindowFrameDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomWindowHardwareDefects: livingRoomWindowHardwareDefects,
    }));
  }, [livingRoomWindowHardwareDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomWindowShutterDefects: livingRoomWindowShutterDefects,
    }));
  }, [livingRoomWindowShutterDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomWallPanelDefects: livingRoomWallPanelDefects,
    }));
  }, [livingRoomWallPanelDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomPartitionDefects: livingRoomPartitionDefects,
    }));
  }, [livingRoomPartitionDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomElectricalWiringDefects: livingRoomElectricalWiringDefects,
    }));
  }, [livingRoomElectricalWiringDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomCeilingLightDefects: livingRoomCeilingLightDefects,
    }));
  }, [livingRoomCeilingLightDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomCeilingFanDefects: livingRoomCeilingFanDefects,
    }));
  }, [livingRoomCeilingFanDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomAcDefects: livingRoomAcDefects,
    }));
  }, [livingRoomAcDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenPlatformDefects: kitchenPlatformDefects,
    }));
  }, [kitchenPlatformDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenFlooringDefects: kitchenFlooringDefects,
    }));
  }, [kitchenFlooringDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWallPlasterDefects: kitchenWallPlasterDefects,
    }));
  }, [kitchenWallPlasterDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWallDefects: kitchenWallDefects,
    }));
  }, [kitchenWallDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenCeilingDefects: kitchenCeilingDefects,
    }));
  }, [kitchenCeilingDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenElectricalWiringDefects: kitchenElectricalWiringDefects,
    }));
  }, [kitchenElectricalWiringDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenDoorFrameDefects: kitchenDoorFrameDefects,
    }));
  }, [kitchenDoorFrameDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenPlumbingDefects: kitchenPlumbingDefects,
    }));
  }, [kitchenPlumbingDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenPlatformSinkDefects: kitchenPlatformSinkDefects,
    }));
  }, [kitchenPlatformSinkDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenDoorDefects: kitchenDoorDefects,
    }));
  }, [kitchenDoorDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenDoorHardwareDefects: kitchenDoorHardwareDefects,
    }));
  }, [kitchenDoorHardwareDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWindowFrameDefects: kitchenWindowFrameDefects,
    }));
  }, [kitchenWindowFrameDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWindowHardwareDefects: kitchenWindowHardwareDefects,
    }));
  }, [kitchenWindowHardwareDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWindowShutterDefects: kitchenWindowShutterDefects,
    }));
  }, [kitchenWindowShutterDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWallPanelDefects: kitchenWallPanelDefects,
    }));
  }, [kitchenWallPanelDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWallPartitionDefects: kitchenWallPartitionDefects,
    }));
  }, [kitchenWallPartitionDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenElectricalPointsDefects: kitchenElectricalPointsDefects,
    }));
  }, [kitchenElectricalPointsDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenCeilingLightDefects: kitchenCeilingLightDefects,
    }));
  }, [kitchenCeilingLightDefects]);

  // useEffect(() => {
  //   sethomeInspectionInfo(prevState => ({
  //     ...prevState,
  //     kitchenFanType: kitchenFanType,
  //   }));
  // }, [kitchenFanType]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenFanDefects: kitchenFanDefects,
    }));
  }, [kitchenFanDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenChimneyDefects: kitchenChimneyDefects,
    }));
  }, [kitchenChimneyDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomPlumbingDefects: bathroomPlumbingDefects,
    }));
  }, [bathroomPlumbingDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomFlooringDefects: bathroomFlooringDefects,
    }));
  }, [bathroomFlooringDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomWallDefects: bathroomWallDefects,
    }));
  }, [bathroomWallDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomCeilingDefects: bathroomCeilingDefects,
    }));
  }, [bathroomCeilingDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomDoorFrameDefects: bathroomDoorFrameDefects,
    }));
  }, [bathroomDoorFrameDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomDoorDefects: bathroomDoorDefects,
    }));
  }, [bathroomDoorDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomDoorHardwareDefects: bathroomDoorHardwareDefects,
    }));
  }, [bathroomDoorHardwareDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomWindowFrameDefects: bathroomWindowFrameDefects,
    }));
  }, [bathroomWindowFrameDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomWindowHardwareDefects: bathroomWindowHardwareDefects,
    }));
  }, [bathroomWindowHardwareDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomWindowShutterDefects: bathroomWindowShutterDefects,
    }));
  }, [bathroomWindowShutterDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomWallPanelDefects: bathroomWallPanelDefects,
    }));
  }, [bathroomWallPanelDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomWallPartitionDefects: bathroomWallPartitionDefects,
    }));
  }, [bathroomWallPartitionDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomElectricalWiringDefects: bathroomElectricalWiringDefects,
    }));
  }, [bathroomElectricalWiringDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomElectricalPointsDefects: bathroomElectricalPointsDefects,
    }));
  }, [bathroomElectricalPointsDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomCeilingLightDefects: bathroomCeilingLightDefects,
    }));
  }, [bathroomCeilingLightDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomFan: bathroomFan,
    }));
  }, [bathroomFan]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomFanDefects: bathroomFanDefects,
    }));
  }, [bathroomFanDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomFlooringDefects: bedroomFlooringDefects,
    }));
  }, [bedroomFlooringDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomWallDefects: bedroomWallDefects,
    }));
  }, [bedroomWallDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomCeilingDefects: bedroomCeilingDefects,
    }));
  }, [bedroomCeilingDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomDoorFrameDefects: bedroomDoorFrameDefects,
    }));
  }, [bedroomDoorFrameDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomDoorDefects: bedroomDoorDefects,
    }));
  }, [bedroomDoorDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomDoorHardwareDefects: bedroomDoorHardwareDefects,
    }));
  }, [bedroomDoorHardwareDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomWindowFrameDefects: bedroomWindowFrameDefects,
    }));
  }, [bedroomWindowFrameDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomWindowHardwareDefects: bedroomWindowHardwareDefects,
    }));
  }, [bedroomWindowHardwareDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomWindowShutterDefects: bedroomWindowShutterDefects,
    }));
  }, [bedroomWindowShutterDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomWallPanelDefects: bedroomWallPanelDefects,
    }));
  }, [bedroomWallPanelDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomElectricalWiringDefects: bedroomElectricalWiringDefects,
    }));
  }, [bedroomElectricalWiringDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomElectricalPointsDefects: bedroomElectricalPointsDefects,
    }));
  }, [bedroomElectricalPointsDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomCeilingLightDefects: bedroomCeilingLightDefects,
    }));
  }, [bedroomCeilingLightDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomFanDefects: bedroomFanDefects,
    }));
  }, [bedroomFanDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomAcDefects: bedroomAcDefects,
    }));
  }, [bedroomAcDefects]);

  return (
    <div>
      {questionCount === 1 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Civil Work (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomFlooringType'
            value='1'
            checked={homeInspectionInfo.livingRoomFlooringType === 1}
          />
          <label className='ml-2'>Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomFlooringType'
            value='2'
            checked={homeInspectionInfo.livingRoomFlooringType === 2}
          />
          <label className='ml-2'>Stone Flooring</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='livingRoomFlooringType'
            value='3'
            checked={homeInspectionInfo.livingRoomFlooringType === 3}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomFlooringType'
            value='4'
            checked={homeInspectionInfo.livingRoomFlooringType === 4}
          />
          <label className='ml-2'>Cement / IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomFlooringType'
            value='5'
            checked={homeInspectionInfo.livingRoomFlooringType === 5}
          />
          <label className='ml-2'>PVC</label>
          <br />
        </div>
      )}
      {questionCount === 2 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomCeramicTileType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceramic Tile (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomCeramicTileType'
            value='1'
            checked={homeInspectionInfo.livingRoomCeramicTileType === 1}
          />
          <label className='ml-2'>High Gloss</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeramicTileType'
            value='2'
            checked={homeInspectionInfo.livingRoomCeramicTileType === 2}
          />
          <label className='ml-2'>Matt</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='livingRoomCeramicTileType'
            value='3'
            checked={homeInspectionInfo.livingRoomCeramicTileType === 3}
          />
          <label className='ml-2'>Anti Skid</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeramicTileType'
            value='4'
            checked={homeInspectionInfo.livingRoomCeramicTileType === 4}
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 3 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomStoneFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Stone Flooring (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomStoneFlooringType'
            value='1'
            checked={homeInspectionInfo.livingRoomStoneFlooringType === 1}
          />
          <label className='ml-2'>Marble</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomStoneFlooringType'
            value='2'
            checked={homeInspectionInfo.livingRoomStoneFlooringType === 2}
          />
          <label className='ml-2'>Italian Marble</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='livingRoomStoneFlooringType'
            value='3'
            checked={homeInspectionInfo.livingRoomStoneFlooringType === 3}
          />
          <label className='ml-2'>Granite</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomStoneFlooringType'
            value='4'
            checked={homeInspectionInfo.livingRoomStoneFlooringType === 4}
          />
          <label className='ml-2'>Kota</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomStoneFlooringType'
            value='5'
            checked={homeInspectionInfo.livingRoomStoneFlooringType === 5}
          />
          <label className='ml-2'>Sandstone</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomStoneFlooringType'
            value='6'
            checked={homeInspectionInfo.livingRoomStoneFlooringType === 6}
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 4 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomWoodenFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wooden Flooring (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomWoodenFlooringType'
            value='1'
            checked={homeInspectionInfo.livingRoomWoodenFlooringType === 1}
          />
          <label className='ml-2'>Engineered Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWoodenFlooringType'
            value='2'
            checked={homeInspectionInfo.livingRoomWoodenFlooringType === 2}
          />
          <label className='ml-2'>Hard Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWoodenFlooringType'
            value='3'
            checked={homeInspectionInfo.livingRoomWoodenFlooringType === 3}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 5 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomPvcFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>PVC (Living Room)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomPvcFlooringType'
            value='1'
            checked={homeInspectionInfo.livingRoomPvcFlooringType === 1}
          />
          <label className='ml-2'>Planks</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPvcFlooringType'
            value='2'
            checked={homeInspectionInfo.livingRoomPvcFlooringType === 2}
          />
          <label className='ml-2'>Carpet</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPvcFlooringType'
            value='3'
            checked={homeInspectionInfo.livingRoomPvcFlooringType === 3}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 6 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='1'
                    checked={ livingRoomFlooringDefects.setLivingRoomFlooringDefects}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation / Squeezed'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbles'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swallow'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Peeling'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Torned'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomFlooringDefects,
                        setLivingRoomFlooringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 7 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomWalls: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Walls (Living Room)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomWalls'
            value='1'
          />
          <label className='ml-2'>Wall Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWalls'
            value='2'
          />
          <label className='ml-2'>Wall Finishing</label>
        </div>
      )}
      {questionCount === 8 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomWallFinishing: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Finishing (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomWallFinishing'
            value='1'
          />
          <label className='ml-2'>Painting</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWallFinishing'
            value='2'
          />
          <label className='ml-2'>Wall-Paper</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWallFinishing'
            value='3'
          />
          <label className='ml-2'>Wall Tiles (civil work)</label>
        </div>
      )}
      {questionCount === 9 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomPaint: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Painting (Living Room)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomPaint'
            value='1'
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPaint'
            value='2'
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPaint'
            value='3'
          />
          <label className='ml-2'>Royal Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPaint'
            value='4'
          />
          <label className='ml-2'>Textured Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPaint'
            value='5'
          />
          <label className='ml-2'>Oil Paint</label>
        </div>
      )}
      {questionCount === 10 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomWallTileCeramicType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Tiles Ceramic Tile (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomWallTileCeramicType'
            value='1'
          />
          <label className='ml-2'>High Gloss</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWallTileCeramicType'
            value='2'
          />
          <label className='ml-2'>Matt</label>
        </div>
      )}
      {questionCount === 11 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbled Surface'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Internal Leakage'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='External Leakage'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Powder Residue'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubble Formation'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDefects,
                        setlivingRoomWallDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 12 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomCeiling: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling (LIving Room)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomCeiling'
            value='1'
          />
          <label className='ml-2'>Ceiling Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeiling'
            value='2'
          />
          <label className='ml-2'>Ceiling Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeiling'
            value='3'
          />
          <label className='ml-2'>False Ceiling (POP / GYPSUM)</label>
        </div>
      )}

      {questionCount === 13 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomCeiling: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Paint (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomCeiling'
            value='1'
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeiling'
            value='2'
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeiling'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 14 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    checked={true}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );

                      // if checkbox.value exists in livingRoomCeilingDefects
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbled Surface'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Internal Leakage'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='External Leakage'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Reinforcement Seen '
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubble Formation'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingDefects,
                        setlivingRoomCeilingDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 15 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomDoorFrame: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Door Frames(Living Room)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomDoorFrame'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomDoorFrame'
            value='2'
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 16 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Frame Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorFrameDefects,
                        setlivingRoomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 17 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Entry Door / Safety Door (WOODEN) Defects. (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorDefects,
                        setlivingRoomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorDefects,
                        setlivingRoomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorDefects,
                        setlivingRoomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorDefects,
                        setlivingRoomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorDefects,
                        setlivingRoomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorDefects,
                        setlivingRoomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorDefects,
                        setlivingRoomDoorDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorDefects,
                        setlivingRoomDoorDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 18 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomDoorHardware: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomDoorHardware'
            value='1'
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomDoorHardware'
            value='2'
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomDoorHardware'
            value='3'
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 19 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorHardwareDefects,
                        setlivingRoomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorHardwareDefects,
                        setlivingRoomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorHardwareDefects,
                        setlivingRoomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorHardwareDefects,
                        setlivingRoomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorHardwareDefects,
                        setlivingRoomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomDoorHardwareDefects,
                        setlivingRoomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 20 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomWindowFrame: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomWindowFrame'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWindowFrame'
            value='2'
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 21 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowFrameDefects,
                        setlivingRoomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 22 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomWindowHardware: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Hardware & Fasteners (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomWindowHardware'
            value='1'
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWindowHardware'
            value='2'
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWindowHardware'
            value='3'
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 23 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Hardware & Fasteners Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowHardwareDefects,
                        setlivingRoomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowHardwareDefects,
                        setlivingRoomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowHardwareDefects,
                        setlivingRoomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowHardwareDefects,
                        setlivingRoomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowHardwareDefects,
                        setlivingRoomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowHardwareDefects,
                        setlivingRoomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 24 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomWindowShutter: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Shutters (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomWindowShutter'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWindowShutter'
            value='2'
          />
          <label className='ml-2'>Aluminium</label>
        </div>
      )}
      {questionCount === 25 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Shutters Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Swollen Edge'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowShutterDefects,
                        setlivingRoomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Laminate Peeling'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowShutterDefects,
                        setlivingRoomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Laminate Chip Off'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowShutterDefects,
                        setlivingRoomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowShutterDefects,
                        setlivingRoomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowShutterDefects,
                        setlivingRoomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowShutterDefects,
                        setlivingRoomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowShutterDefects,
                        setlivingRoomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWindowShutterDefects,
                        setlivingRoomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 26 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Paneling WOODEN Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallPanelDefects,
                        setlivingRoomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallPanelDefects,
                        setlivingRoomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallPanelDefects,
                        setlivingRoomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallPanelDefects,
                        setlivingRoomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallPanelDefects,
                        setlivingRoomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 27 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomPartition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Partition (Living Room)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomPartition'
            value='1'
          />
          <label className='ml-2'>Normal Glass</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPartition'
            value='2'
          />
          <label className='ml-2'>Frosted Glass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPartition'
            value='3'
          />
          <label className='ml-2'>MDF / Wooden</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPartition'
            value='4'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 28 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Partition Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomPartitionDefects,
                        setlivingRoomPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomPartitionDefects,
                        setlivingRoomPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomPartitionDefects,
                        setlivingRoomPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Crack On Glass'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomPartitionDefects,
                        setlivingRoomPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Clumsy'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomPartitionDefects,
                        setlivingRoomPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomPartitionDefects,
                        setlivingRoomPartitionDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 29 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomElectricalWiring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomElectricalWiring'
            value='1'
          />
          <label className='ml-2'>Cocealed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomElectricalWiring'
            value='2'
          />
          <label className='ml-2'>Exposed</label>
        </div>
      )}
      {questionCount === 30 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Local'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Roomwise And Kitchen + Washroom'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Roomwise / Unitwise'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Telecom Cable'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Telecom Connection Working'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='WIFI (LAN Wire Connection)'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 31 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomElectricalPoints: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomElectricalPoints'
            value='1'
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomElectricalPoints'
            value='2'
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}
      {questionCount === 32 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalWiringDefects,
                        setlivingRoomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 33 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomCeilingLight: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Lights (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='livingRoomCeilingLight'
            value='1'
          />
          <label className='ml-2'>Panel Light</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeilingLight'
            value='2'
          />
          <label className='ml-2'>Tube Light</label>
        </div>
      )}
      {questionCount === 34 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Light Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingLightDefects,
                        setlivingRoomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingLightDefects,
                        setlivingRoomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingLightDefects,
                        setlivingRoomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 35 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Fan Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingFanDefects,
                        setlivingRoomCeilingFanDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingFanDefects,
                        setlivingRoomCeilingFanDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomCeilingFanDefects,
                        setlivingRoomCeilingFanDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 36 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>AC Defects (Living Room)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Stain'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Inadequate Cooling'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Surface Piping'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Concealed Piping'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Pelmet (FOR SPLIT AC)'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='No Pelmet(FOR SPLIT AC)'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Leakage In Piping'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAcDefects,
                        setlivingRoomAcDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {/* <p>36 kitchen</p> */}
      {questionCount === 37 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenPlatform: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Kitchen Platform</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPlatform'
            value='1'
          />
          <label className='ml-2'>Semi Modular (Conventional)</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlatform'
            value='2'
          />
          <label className='ml-2'>Modular</label>
        </div>
      )}
      {questionCount === 38 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Kitchen Platform Defects</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformDefects,
                        setkitchenPlatformDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear On Top'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformDefects,
                        setkitchenPlatformDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformDefects,
                        setkitchenPlatformDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformDefects,
                        setkitchenPlatformDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformDefects,
                        setkitchenPlatformDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Slope Towards Sink'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformDefects,
                        setkitchenPlatformDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear On Verticles'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformDefects,
                        setkitchenPlatformDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformDefects,
                        setkitchenPlatformDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 39 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenPlatformSink: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Platform Sink (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPlatformSink'
            value='1'
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlatformSink'
            value='2'
          />
          <label className='ml-2'>PVC</label>
        </div>
      )}
      {questionCount === 40 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Kitchen Platform Defects</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Bottle Trap'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformSinkDefects,
                        setkitchenPlatformSinkDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformSinkDefects,
                        setkitchenPlatformSinkDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Leakage at Sink Trap'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformSinkDefects,
                        setkitchenPlatformSinkDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Floor Trap Water Logging'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformSinkDefects,
                        setkitchenPlatformSinkDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformSinkDefects,
                        setkitchenPlatformSinkDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlatformSinkDefects,
                        setkitchenPlatformSinkDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 41 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Plumbing Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='GI'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlumbingDefects,
                        setkitchenPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='PVC'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlumbingDefects,
                        setkitchenPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loft Tank Drinking Water'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlumbingDefects,
                        setkitchenPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loft Tank Borewell Water'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlumbingDefects,
                        setkitchenPlumbingDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Concealed'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlumbingDefects,
                        setkitchenPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Drinking Water'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlumbingDefects,
                        setkitchenPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Borewell Water'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlumbingDefects,
                        setkitchenPlumbingDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenPlumbingDefects,
                        setkitchenPlumbingDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 42 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenPlumbingFixturesTap: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Plumbing Fixtures Taps (Kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPlumbingFixturesTap'
            value='1'
          />
          <label className='ml-2'>Local</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlumbingFixturesTap'
            value='2'
          />
          <label className='ml-2'>Branded</label>
        </div>
      )}
      {questionCount === 43 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenPlatformSink: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Plumbing Fixtures Taps Defects (Kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPlatformSink'
            value='1'
          />
          <label className='ml-2'>Any Wear & Tear</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlatformSink'
            value='2'
          />
          <label className='ml-2'>Leakage Issues</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlatformSink'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 44 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Civil Work (Kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenFlooringType'
            value='1'
          />
          <label className='ml-2'>Ceramic Tile</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFlooringType'
            value='2'
          />
          <label className='ml-2'>Stone Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFlooringType'
            value='3'
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFlooringType'
            value='4'
          />
          <label className='ml-2'>Cement / IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFlooringType'
            value='5'
          />
          <label className='ml-2'>PVC</label>
        </div>
      )}
      {questionCount === 45 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenCeramicTileType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceramic Tile (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenCeramicTileType'
            value='1'
          />
          <label className='ml-2'>High Gloss</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeramicTileType'
            value='2'
          />
          <label className='ml-2'>Matt</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeramicTileType'
            value='3'
          />
          <label className='ml-2'>Anti Skid</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeramicTileType'
            value='4'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 46 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenStoneFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Stone Flooring (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenStoneFlooringType'
            value='1'
          />
          <label className='ml-2'>Marble</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='2'
          />
          <label className='ml-2'>Italian Marble</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='3'
          />
          <label className='ml-2'>Granite</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='4'
          />
          <label className='ml-2'>Kota</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='5'
          />
          <label className='ml-2'>Sandstone</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='6'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 47 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWoodenFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wooden Flooring (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWoodenFlooringType'
            value='1'
          />
          <label className='ml-2'>Engineered Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWoodenFlooringType'
            value='2'
          />
          <label className='ml-2'>Hard Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWoodenFlooringType'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 48 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenPvcFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>PVC (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPvcFlooringType'
            value='1'
          />
          <label className='ml-2'>Planks</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPvcFlooringType'
            value='2'
          />
          <label className='ml-2'>Carpet</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPvcFlooringType'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}

      {questionCount === 49 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation / Squeezed'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbles'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swallow'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Peeling'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Torned'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFlooringDefects,
                        setkitchenFlooringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 50 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWalls: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Walls (Kitchen)</h4>
          </div>

          <input type='radio' className='ml-2' name='kitchenWalls' value='1' />
          <label className='ml-2'>Wall Plaster</label>

          <br />
          <input className='ml-2' type='radio' name='kitchenWalls' value='2' />
          <label className='ml-2'>Wall Finishing</label>
        </div>
      )}
      {questionCount === 51 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Plaster civil work Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbled Surface'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Internal Leakage'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='External Leakage'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Powder Residue'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubble Formation'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Defected'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Defected'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='16'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='17'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='18'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='19'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation'
                control={
                  <Checkbox
                    value='20'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='21'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPlasterDefects,
                        setkitchenWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 52 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWallFinishing: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Finishing (Kitchen)</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='kitchenWallFinishing'
            value='1'
          />
          <label className='ml-2'>Painting</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallFinishing'
            value='2'
          />
          <label className='ml-2'>Wall-Paper</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallFinishing'
            value='3'
          />
          <label className='ml-2'>Wall Tiles (civil work)</label>
        </div>
      )}
      {questionCount === 53 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenPaint: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Painting (Kitchen)</h4>
          </div>

          <input type='radio' className='ml-2' name='kitchenPaint' value='1' />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input className='ml-2' type='radio' name='kitchenPaint' value='2' />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input className='ml-2' type='radio' name='kitchenPaint' value='3' />
          <label className='ml-2'>Royal Paint</label>
          <br />
          <input className='ml-2' type='radio' name='kitchenPaint' value='4' />
          <label className='ml-2'>Textured Paint</label>
          <br />
          <input className='ml-2' type='radio' name='kitchenPaint' value='5' />
          <label className='ml-2'>Oil Paint</label>
        </div>
      )}
      {questionCount === 54 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWallTileCeramicType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceramic Tile (Living Room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWallTileCeramicType'
            value='1'
          />
          <label className='ml-2'>High Gloss</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallTileCeramicType'
            value='2'
          />
          <label className='ml-2'>Matt</label>

          <br />
        </div>
      )}
      {questionCount === 55 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Defects (Kitchen)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbles Formation'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Defected'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Defected'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDefects,
                        setkitchenWallDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 56 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenCeiling: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenCeiling'
            value='1'
          />
          <label className='ml-2'>Ceiling Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeiling'
            value='2'
          />
          <label className='ml-2'>Ceiling Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeiling'
            value='3'
          />
          <label className='ml-2'>False Ceiling (POP / GYPSUM)</label>
        </div>
      )}
      {questionCount === 57 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenCeilingPaint: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Paint (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenCeilingPaint'
            value='1'
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeilingPaint'
            value='2'
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeilingPaint'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 58 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Defects (Kitchen)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbled Surface'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Internal Leakage'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='External Leakage'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Powder Residue'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubble Formation'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingDefects,
                        setkitchenCeilingDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 59 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenDoorFrame: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Door Frames (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenDoorFrame'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenDoorFrame'
            value='2'
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 60 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Frames Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorFrameDefects,
                        setkitchenDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 61 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Entry Door / Safety Door) (WOODEN) Defects. (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorDefects,
                        setkitchenDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorDefects,
                        setkitchenDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorDefects,
                        setkitchenDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorDefects,
                        setkitchenDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorDefects,
                        setkitchenDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorDefects,
                        setkitchenDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorDefects,
                        setkitchenDoorDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorDefects,
                        setkitchenDoorDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 62 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenDoorHardware: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners (kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenDoorHardware'
            value='1'
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenDoorHardware'
            value='2'
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenDoorHardware'
            value='3'
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 63 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorHardwareDefects,
                        setkitchenDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorHardwareDefects,
                        setkitchenDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorHardwareDefects,
                        setkitchenDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorHardwareDefects,
                        setkitchenDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorHardwareDefects,
                        setkitchenDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDoorHardwareDefects,
                        setkitchenDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 64 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWindowFrame: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry (Kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWindowFrame'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWindowFrame'
            value='2'
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 65 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowFrameDefects,
                        setkitchenWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 66 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWindowHardware: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Hardware & Fasteners (Kitchen)
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='kitchenWindowHardware'
            value='1'
          />
          <label className='ml-2'>Steel</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWindowHardware'
            value='2'
          />
          <label className='ml-2'>Stainless Steel</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWindowHardware'
            value='3'
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 67 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowHardwareDefects,
                        setkitchenWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowHardwareDefects,
                        setkitchenWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowHardwareDefects,
                        setkitchenWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowHardwareDefects,
                        setkitchenWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowHardwareDefects,
                        setkitchenWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowHardwareDefects,
                        setkitchenWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 68 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWindowShutter: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Window Shutters (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWindowShutter'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWindowShutter'
            value='2'
          />
          <label className='ml-2'>Aluminium</label>
        </div>
      )}
      {questionCount === 69 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Shutters Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Swollen Edge'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowShutterDefects,
                        setkitchenWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Laminate Peeling'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowShutterDefects,
                        setkitchenWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Laminate Chip Off'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowShutterDefects,
                        setkitchenWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowShutterDefects,
                        setkitchenWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowShutterDefects,
                        setkitchenWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowShutterDefects,
                        setkitchenWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowShutterDefects,
                        setkitchenWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWindowShutterDefects,
                        setkitchenWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 70 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Paneling WOODEN Defects (KITCHEN)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPanelDefects,
                        setkitchenWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPanelDefects,
                        setkitchenWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPanelDefects,
                        setkitchenWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPanelDefects,
                        setkitchenWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPanelDefects,
                        setkitchenWallPanelDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 71 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWallPartition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Partition (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWallPartition'
            value='1'
          />
          <label className='ml-2'>Normal Glass</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallPartition'
            value='2'
          />
          <label className='ml-2'>Frosted Glass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallPartition'
            value='3'
          />
          <label className='ml-2'>MDF / Wooden</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPartition'
            value='4'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 72 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Partition Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPartitionDefects,
                        setkitchenWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPartitionDefects,
                        setkitchenWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPartitionDefects,
                        setkitchenWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Crack On Glass'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPartitionDefects,
                        setkitchenWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Clumsy'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPartitionDefects,
                        setkitchenWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPartitionDefects,
                        setkitchenWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 73 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenElectricalWiring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring (Kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenElectricalWiring'
            value='1'
          />
          <label className='ml-2'>Cocealed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenElectricalWiring'
            value='2'
          />
          <label className='ml-2'>Exposed</label>
        </div>
      )}
      {questionCount === 74 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Local'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Roomwise And Kitchen + Washroom'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Roomwise / Unitwise'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Telecom Cable'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Telecom Connection Working'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='WIFI (LAN Wire Connection)'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalWiringDefects,
                        setkitchenElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 75 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenElectricalPoints: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) (Kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenElectricalPoints'
            value='1'
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenElectricalPoints'
            value='2'
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}
      {questionCount === 76 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalPointsDefects,
                        setkitchenElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalPointsDefects,
                        setkitchenElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenElectricalPointsDefects,
                        setkitchenElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 77 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenCeilingLight: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Lights (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenCeilingLight'
            value='1'
          />
          <label className='ml-2'>Panel Light</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeilingLight'
            value='2'
          />
          <label className='ml-2'>Tube Light</label>
        </div>
      )}

      {questionCount === 78 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Lights Defects (Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingLightDefects,
                        setkitchenCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingLightDefects,
                        setkitchenCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenCeilingLightDefects,
                        setkitchenCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 79 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenFanType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>FAN (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenFanType'
            value='1'
          />
          <label className='ml-2'>Ceiling Fan</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFanType'
            value='2'
          />
          <label className='ml-2'>Exhaust fan</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFanType'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}

      {questionCount === 80 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>FAN Defects (Kitchen))</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFanDefects,
                        setkitchenFanDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFanDefects,
                        setkitchenFanDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenFanDefects,
                        setkitchenFanDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 81 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenChimney: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Chimney(Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenChimney'
            value='1'
          />
          <label className='ml-2'>Ducted</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenChimney'
            value='2'
          />
          <label className='ml-2'>Duct Less</label>
        </div>
      )}
      {questionCount === 82 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>FAN Defects (Kitchen))</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenChimneyDefects,
                        setkitchenChimneyDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Part Damaged'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenChimneyDefects,
                        setkitchenChimneyDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenChimneyDefects,
                        setkitchenChimneyDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Damage In Duct'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenChimneyDefects,
                        setkitchenChimneyDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenChimneyDefects,
                        setkitchenChimneyDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {/* <p>82 bathroom</p> */}

      {questionCount === 83 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomPlumbing: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Plumbing (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomPlumbing'
            value='1'
          />
          <label className='ml-2'>Sanitary Fixtures</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbing'
            value='2'
          />
          <label className='ml-2'>Plumbing</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbing'
            value='3'
          />
          <label className='ml-2'>Plumbing Fixtures</label>
        </div>
      )}
      {questionCount === 84 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomSanitaryFixtures: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Sanitary Fixtures (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomSanitaryFixtures'
            value='1'
          />
          <label className='ml-2'>Wash Basin</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomSanitaryFixtures'
            value='2'
          />
          <label className='ml-2'>Indian WC</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomSanitaryFixtures'
            value='3'
          />
          <label className='ml-2'>Western WC</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomSanitaryFixtures'
            value='3'
          />
          <label className='ml-2'>Bath Tub</label>
        </div>
      )}
      {questionCount === 85 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomPlumbingFixtures: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Plumbing Fixtures (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomPlumbingFixtures'
            value='1'
          />
          <label className='ml-2'>Taps</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbingFixtures'
            value='2'
          />
          <label className='ml-2'>Flush Tank</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbingFixtures'
            value='3'
          />
          <label className='ml-2'>Geyser</label>
        </div>
      )}
      {questionCount === 86 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomPlumbingFixturesType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Plumbing Fixtures (Taps / Flush Tank / Gyser) (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomPlumbingFixturesType'
            value='1'
          />
          <label className='ml-2'>Local</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbingFixturesType'
            value='2'
          />
          <label className='ml-2'>Branded</label>
        </div>
      )}
      {questionCount === 87 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Plumbing Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='GI'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomPlumbingDefects,
                        setbathroomPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='PVC'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomPlumbingDefects,
                        setbathroomPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loft Tank Drinking Water'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomPlumbingDefects,
                        setbathroomPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loft Tank Borewell Water'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomPlumbingDefects,
                        setbathroomPlumbingDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Concealed'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomPlumbingDefects,
                        setbathroomPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Drinking Water'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomPlumbingDefects,
                        setbathroomPlumbingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Borewell Water'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomPlumbingDefects,
                        setbathroomPlumbingDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomPlumbingDefects,
                        setbathroomPlumbingDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 88 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Civil Work (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomFlooringType'
            value='1'
          />
          <label className='ml-2'>Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomFlooringType'
            value='2'
          />
          <label className='ml-2'>Stone Flooring</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bathroomFlooringType'
            value='3'
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomFlooringType'
            value='4'
          />
          <label className='ml-2'>Cement / IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomFlooringType'
            value='5'
          />
          <label className='ml-2'>PVC</label>
          <br />
        </div>
      )}
      {questionCount === 89 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomCeramicTileType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceramic Tile (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomCeramicTileType'
            value='1'
          />
          <label className='ml-2'>High Gloss</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeramicTileType'
            value='2'
          />
          <label className='ml-2'>Matt</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bathroomCeramicTileType'
            value='3'
          />
          <label className='ml-2'>Anti Skid</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeramicTileType'
            value='4'
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 90 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomStoneFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Stone Flooring (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomStoneFlooringType'
            value='1'
          />
          <label className='ml-2'>Marble</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomStoneFlooringType'
            value='2'
          />
          <label className='ml-2'>Italian Marble</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bathroomStoneFlooringType'
            value='3'
          />
          <label className='ml-2'>Granite</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomStoneFlooringType'
            value='4'
          />
          <label className='ml-2'>Kota</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomStoneFlooringType'
            value='5'
          />
          <label className='ml-2'>Sandstone</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomStoneFlooringType'
            value='6'
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 91 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomWoodenFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wooden Flooring (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomWoodenFlooringType'
            value='1'
          />
          <label className='ml-2'>Engineered Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWoodenFlooringType'
            value='2'
          />
          <label className='ml-2'>Hard Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWoodenFlooringType'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 92 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomPvcFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>PVC (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomPvcFlooringType'
            value='1'
          />
          <label className='ml-2'>Planks</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPvcFlooringType'
            value='2'
          />
          <label className='ml-2'>Carpet</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPvcFlooringType'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 93 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation / Squeezed'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbles'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swallow'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Peeling'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Torned'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFlooringDefects,
                        setbathroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 94 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomWalls: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Walls (Bathroom)</h4>
          </div>

          <input type='radio' className='ml-2' name='bathroomWalls' value='1' />
          <label className='ml-2'>Wall Plaster</label>

          <br />
          <input className='ml-2' type='radio' name='bathroomWalls' value='2' />
          <label className='ml-2'>Wall Finishing</label>
        </div>
      )}
      {questionCount === 95 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Defects (Bathroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbled Surface'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Internal Leakage'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='External Leakage'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Powder Residue'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubble Formation'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Defected'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Defected'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='16'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='17'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='18'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='19'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation'
                control={
                  <Checkbox
                    value='20'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='21'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallDefects,
                        setbathroomWallDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 96 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomWallFinishing: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Finishing (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomWallFinishing'
            value='1'
          />
          <label className='ml-2'>Painting</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallFinishing'
            value='2'
          />
          <label className='ml-2'>Wall-Paper</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallFinishing'
            value='3'
          />
          <label className='ml-2'>Wall Tiles (civil work)</label>
        </div>
      )}
      {questionCount === 97 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomPaint: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Painting (Bathroom)</h4>
          </div>

          <input type='radio' className='ml-2' name='bathroomPaint' value='1' />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input className='ml-2' type='radio' name='bathroomPaint' value='2' />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input className='ml-2' type='radio' name='bathroomPaint' value='3' />
          <label className='ml-2'>Royal Paint</label>
          <br />
          <input className='ml-2' type='radio' name='bathroomPaint' value='4' />
          <label className='ml-2'>Textured Paint</label>
          <br />
          <input className='ml-2' type='radio' name='bathroomPaint' value='5' />
          <label className='ml-2'>Oil Paint</label>
        </div>
      )}
      {questionCount === 98 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomWallTileCeramicType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Tiles Ceramic Tile (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomWallTileCeramicType'
            value='1'
          />
          <label className='ml-2'>High Gloss</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallTileCeramicType'
            value='2'
          />
          <label className='ml-2'>Matt</label>
        </div>
      )}
      {questionCount === 99 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomCeiling: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomCeiling'
            value='1'
          />
          <label className='ml-2'>Ceiling Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeiling'
            value='2'
          />
          <label className='ml-2'>Ceiling Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeiling'
            value='3'
          />
          <label className='ml-2'>False Ceiling (POP / GYPSUM)</label>
        </div>
      )}
      {questionCount === 100 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomCeilingPaint: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Paint (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomCeilingPaint'
            value='1'
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeilingPaint'
            value='2'
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeilingPaint'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 101 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbled Surface'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Internal Leakage'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='External Leakage'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Reinforcement Seen '
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubble Formation'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingDefects,
                        setbathroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 102 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomDoorFrame: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Door Frames (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomDoorFrame'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomDoorFrame'
            value='2'
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 103 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Frame Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorFrameDefects,
                        setbathroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 104 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Entry Door / Safety Door (WOODEN) Defects. (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorDefects,
                        setbathroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorDefects,
                        setbathroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorDefects,
                        setbathroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorDefects,
                        setbathroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorDefects,
                        setbathroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorDefects,
                        setbathroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorDefects,
                        setbathroomDoorDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorDefects,
                        setbathroomDoorDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 105 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomDoorHardware: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomDoorHardware'
            value='1'
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomDoorHardware'
            value='2'
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomDoorHardware'
            value='3'
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 106 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorHardwareDefects,
                        setbathroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorHardwareDefects,
                        setbathroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorHardwareDefects,
                        setbathroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorHardwareDefects,
                        setbathroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorHardwareDefects,
                        setbathroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomDoorHardwareDefects,
                        setbathroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 107 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomWindowFrame: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomWindowFrame'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWindowFrame'
            value='2'
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}

      {questionCount === 108 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowFrameDefects,
                        setbathroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 109 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomWindowHardware: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Hardware & Fasteners (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomWindowHardware'
            value='1'
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWindowHardware'
            value='2'
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWindowHardware'
            value='3'
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 110 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Hardware & Fasteners Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowHardwareDefects,
                        setbathroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowHardwareDefects,
                        setbathroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowHardwareDefects,
                        setbathroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowHardwareDefects,
                        setbathroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowHardwareDefects,
                        setbathroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowHardwareDefects,
                        setbathroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 111 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomWindowShutter: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Shutters (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomWindowShutter'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWindowShutter'
            value='2'
          />
          <label className='ml-2'>Aluminium</label>
        </div>
      )}

      {questionCount === 112 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Shutters Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Swollen Edge'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowShutterDefects,
                        setbathroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Laminate Peeling'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowShutterDefects,
                        setbathroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Laminate Chip Off'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowShutterDefects,
                        setbathroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowShutterDefects,
                        setbathroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowShutterDefects,
                        setbathroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowShutterDefects,
                        setbathroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowShutterDefects,
                        setbathroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWindowShutterDefects,
                        setbathroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 113 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Paneling WOODEN Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPanelDefects,
                        setbathroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPanelDefects,
                        setbathroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPanelDefects,
                        setbathroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPanelDefects,
                        setbathroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPanelDefects,
                        setbathroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 114 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomWallPartition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Partition (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomWallPartition'
            value='1'
          />
          <label className='ml-2'>Normal Glass</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallPartition'
            value='2'
          />
          <label className='ml-2'>Frosted Glass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallPartition'
            value='3'
          />
          <label className='ml-2'>MDF / Wooden</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallPartition'
            value='4'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 115 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Partition Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPartitionDefects,
                        setbathroomWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPartitionDefects,
                        setbathroomWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPartitionDefects,
                        setbathroomWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Crack On Glass'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPartitionDefects,
                        setbathroomWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Clumsy'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPartitionDefects,
                        setbathroomWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomWallPartitionDefects,
                        setbathroomWallPartitionDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 116 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomElectricalWiring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomElectricalWiring'
            value='1'
          />
          <label className='ml-2'>Cocealed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomElectricalWiring'
            value='2'
          />
          <label className='ml-2'>Exposed</label>
        </div>
      )}
      {questionCount === 117 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring Defects (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Local'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Roomwise And Kitchen + Washroom'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Roomwise / Unitwise'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Telecom Cable'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Telecom Connection Working'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='WIFI (LAN Wire Connection)'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalWiringDefects,
                        setbathroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 118 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomElectricalPoints: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) (Bathroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomElectricalPoints'
            value='1'
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomElectricalPoints'
            value='2'
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}
      {questionCount === 119 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalPointsDefects,
                        setbathroomElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalPointsDefects,
                        setbathroomElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomElectricalPointsDefects,
                        setbathroomElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 120 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomCeilingLight: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Lights (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bathroomCeilingLight'
            value='1'
          />
          <label className='ml-2'>Panel Light</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeilingLight'
            value='2'
          />
          <label className='ml-2'>Tube Light</label>
        </div>
      )}
      {questionCount === 121 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Lights Defects (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingLightDefects,
                        setbathroomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingLightDefects,
                        setbathroomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomCeilingLightDefects,
                        setbathroomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 122 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>FAN (Bathroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Exhaust fan'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(e, bathroomFan, setbathroomFan);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(e, bathroomFan, setbathroomFan);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 123 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>FAN Defects (Bathroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFanDefects,
                        setbathroomFanDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFanDefects,
                        setbathroomFanDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bathroomFanDefects,
                        setbathroomFanDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {/* <p>123 bedroom</p> */}

      {questionCount === 124 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Civil Work (Bedroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomFlooringType'
            value='1'
          />
          <label className='ml-2'>Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomFlooringType'
            value='2'
          />
          <label className='ml-2'>Stone Flooring</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bedroomFlooringType'
            value='3'
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomFlooringType'
            value='4'
          />
          <label className='ml-2'>Cement / IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomFlooringType'
            value='5'
          />
          <label className='ml-2'>PVC</label>
          <br />
        </div>
      )}
      {questionCount === 125 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomCeramicTileType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceramic Tile (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomCeramicTileType'
            value='1'
          />
          <label className='ml-2'>High Gloss</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeramicTileType'
            value='2'
          />
          <label className='ml-2'>Matt</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bedroomCeramicTileType'
            value='3'
          />
          <label className='ml-2'>Anti Skid</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeramicTileType'
            value='4'
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 126 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomStoneFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Stone Flooring (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomStoneFlooringType'
            value='1'
          />
          <label className='ml-2'>Marble</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomStoneFlooringType'
            value='2'
          />
          <label className='ml-2'>Italian Marble</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bedroomStoneFlooringType'
            value='3'
          />
          <label className='ml-2'>Granite</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomStoneFlooringType'
            value='4'
          />
          <label className='ml-2'>Kota</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomStoneFlooringType'
            value='5'
          />
          <label className='ml-2'>Sandstone</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomStoneFlooringType'
            value='6'
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 127 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomWoodenFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wooden Flooring (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomWoodenFlooringType'
            value='1'
          />
          <label className='ml-2'>Engineered Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWoodenFlooringType'
            value='2'
          />
          <label className='ml-2'>Hard Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWoodenFlooringType'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 128 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomPvcFlooringType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>PVC (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomPvcFlooringType'
            value='1'
          />
          <label className='ml-2'>Planks</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomPvcFlooringType'
            value='2'
          />
          <label className='ml-2'>Carpet</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomPvcFlooringType'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 129 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation / Squeezed'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbles'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swallow'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Peeling'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Torned'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFlooringDefects,
                        setbedroomFlooringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 130 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomWalls: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Walls (Bedroom)</h4>
          </div>

          <input type='radio' className='ml-2' name='bedroomWalls' value='1' />
          <label className='ml-2'>Wall Plaster</label>

          <br />
          <input className='ml-2' type='radio' name='bedroomWalls' value='2' />
          <label className='ml-2'>Wall Finishing</label>
        </div>
      )}
      {questionCount === 131 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Plaster civil work Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbled Surface'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Internal Leakage'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='External Leakage'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Powder Residue'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubble Formation'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Defected'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Defected'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='16'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='17'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='18'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='19'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation'
                control={
                  <Checkbox
                    value='20'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='21'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 132 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomWallFinishing: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Finishing (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomWallFinishing'
            value='1'
          />
          <label className='ml-2'>Painting</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWallFinishing'
            value='2'
          />
          <label className='ml-2'>Wall-Paper</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWallFinishing'
            value='3'
          />
          <label className='ml-2'>Wall Tiles (civil work)</label>
        </div>
      )}
      {questionCount === 133 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomPaint: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Painting (Bedroom)</h4>
          </div>

          <input type='radio' className='ml-2' name='bedroomPaint' value='1' />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input className='ml-2' type='radio' name='bedroomPaint' value='2' />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input className='ml-2' type='radio' name='bedroomPaint' value='3' />
          <label className='ml-2'>Royal Paint</label>
          <br />
          <input className='ml-2' type='radio' name='bedroomPaint' value='4' />
          <label className='ml-2'>Textured Paint</label>
          <br />
          <input className='ml-2' type='radio' name='bedroomPaint' value='5' />
          <label className='ml-2'>Oil Paint</label>
        </div>
      )}
      {questionCount === 134 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomWallTileCeramicType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Tiles Ceramic Tile (Bedroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomWallTileCeramicType'
            value='1'
          />
          <label className='ml-2'>High Gloss</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWallTileCeramicType'
            value='2'
          />
          <label className='ml-2'>Matt</label>
        </div>
      )}
      {questionCount === 135 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Defects (Bedroom)</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbles Formation'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Defected'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Defected'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dark Joints'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Loose Tile'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Patch'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Undulation'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='15'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDefects,
                        setbedroomWallDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 136 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomCeiling: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomCeiling'
            value='1'
          />
          <label className='ml-2'>Ceiling Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeiling'
            value='2'
          />
          <label className='ml-2'>Ceiling Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeiling'
            value='3'
          />
          <label className='ml-2'>False Ceiling (POP / GYPSUM)</label>
        </div>
      )}

      {questionCount === 137 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomCeilingPaint: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Paint (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomCeilingPaint'
            value='1'
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeilingPaint'
            value='2'
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeilingPaint'
            value='3'
          />
          <label className='ml-2'>NA</label>
        </div>
      )}

      {questionCount === 138 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Defects (Bedroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubbled Surface'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Internal Leakage'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='External Leakage'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Powder Residue'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fresh'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bubble Formation'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Flacking (PAPDI)'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wet Patch'
                control={
                  <Checkbox
                    value='12'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='13'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='14'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingDefects,
                        setbedroomCeilingDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 139 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomDoorFrame: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Door Frames (Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomDoorFrame'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomDoorFrame'
            value='2'
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}

      {questionCount === 140 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Frame Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorFrameDefects,
                        setbedroomDoorFrameDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 141 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Entry Door / Safety Door (WOODEN) Defects.(Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorDefects,
                        setbedroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorDefects,
                        setbedroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorDefects,
                        setbedroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorDefects,
                        setbedroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorDefects,
                        setbedroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorDefects,
                        setbedroomDoorDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorDefects,
                        setbedroomDoorDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorDefects,
                        setbedroomDoorDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 142 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomDoorHardware: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners (Bedroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomDoorHardware'
            value='1'
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomDoorHardware'
            value='2'
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomDoorHardware'
            value='3'
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 143 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorHardwareDefects,
                        setbedroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorHardwareDefects,
                        setbedroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorHardwareDefects,
                        setbedroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorHardwareDefects,
                        setbedroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorHardwareDefects,
                        setbedroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomDoorHardwareDefects,
                        setbedroomDoorHardwareDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 144 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomWindowFrame: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry (Bedroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomWindowFrame'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWindowFrame'
            value='2'
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 145 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swollen'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fungus Formation'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Residue'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cracks'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chip Off'
                control={
                  <Checkbox
                    value='10'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='11'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowFrameDefects,
                        setbedroomWindowFrameDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 146 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomWindowHardware: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Hardware & Fasteners (Bedroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomWindowHardware'
            value='1'
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWindowHardware'
            value='2'
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWindowHardware'
            value='3'
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 147 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Hardware & Fasteners Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowHardwareDefects,
                        setbedroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowHardwareDefects,
                        setbedroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowHardwareDefects,
                        setbedroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowHardwareDefects,
                        setbedroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowHardwareDefects,
                        setbedroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowHardwareDefects,
                        setbedroomWindowHardwareDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 148 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomWindowShutter: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Window Shutters (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomWindowShutter'
            value='1'
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWindowShutter'
            value='2'
          />
          <label className='ml-2'>Aluminium</label>
        </div>
      )}
      {questionCount === 149 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Shutters Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Swollen Edge'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowShutterDefects,
                        setbedroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Laminate Peeling'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowShutterDefects,
                        setbedroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Laminate Chip Off'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowShutterDefects,
                        setbedroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowShutterDefects,
                        setbedroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Misaligned'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowShutterDefects,
                        setbedroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowShutterDefects,
                        setbedroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hard To Use'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowShutterDefects,
                        setbedroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWindowShutterDefects,
                        setbedroomWindowShutterDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 150 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Paneling WOODEN Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPanelDefects,
                        setbedroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPanelDefects,
                        setbedroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Termite'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPanelDefects,
                        setbedroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intact / Damaged'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPanelDefects,
                        setbedroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPanelDefects,
                        setbedroomWallPanelDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 151 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomElectricalWiring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring (Bedroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomElectricalWiring'
            value='1'
          />
          <label className='ml-2'>Cocealed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomElectricalWiring'
            value='2'
          />
          <label className='ml-2'>Exposed</label>
        </div>
      )}
      {questionCount === 152 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Local'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Roomwise And Kitchen + Washroom'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Roomwise / Unitwise'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Telecom Cable'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Telecom Connection Working'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='WIFI (LAN Wire Connection)'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='9'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalWiringDefects,
                        setbedroomElectricalWiringDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 153 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomElectricalPoints: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) (Bedroom)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomElectricalPoints'
            value='1'
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomElectricalPoints'
            value='2'
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}
      {questionCount === 154 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalPointsDefects,
                        setbedroomElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalPointsDefects,
                        setbedroomElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomElectricalPointsDefects,
                        setbedroomElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 155 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomCeilingLight: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Lights (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomCeilingLight'
            value='1'
          />
          <label className='ml-2'>Panel Light</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeilingLight'
            value='2'
          />
          <label className='ml-2'>Tube Light</label>
        </div>
      )}
      {questionCount === 156 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Light Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingLightDefects,
                        setbedroomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingLightDefects,
                        setbedroomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomCeilingLightDefects,
                        setbedroomCeilingLightDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 157 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomFan: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring (Bedroom)
            </h4>
          </div>

          <input type='radio' className='ml-2' name='bedroomFan' value='1' />
          <label className='ml-2'>Ceiling Fan</label>

          <br />
          <input className='ml-2' type='radio' name='bedroomFan' value='2' />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 158 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Fan Defects (Bedroom))
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFanDefects,
                        setbedroomFanDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFanDefects,
                        setbedroomFanDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomFanDefects,
                        setbedroomFanDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 159 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bedroomAc: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>AC (Bedroom)</h4>
          </div>

          <input type='radio' className='ml-2' name='bedroomAc' value='1' />
          <label className='ml-2'>Split</label>

          <br />
          <input className='ml-2' type='radio' name='bedroomAc' value='2' />
          <label className='ml-2'>Window</label>
          <br />
          <input className='ml-2' type='radio' name='bedroomAc' value='3' />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 160 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
             AC Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomAcDefects,
                        setbedroomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Stain'
                control={
                  <Checkbox
                    value='2'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomAcDefects,
                        setbedroomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Inadequate Cooling'
                control={
                  <Checkbox
                    value='3'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomAcDefects,
                        setbedroomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Surface Piping'
                control={
                  <Checkbox
                    value='4'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomAcDefects,
                        setbedroomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Concealed Piping'
                control={
                  <Checkbox
                    value='5'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomAcDefects,
                        setbedroomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='No Pelemet'
                control={
                  <Checkbox
                    value='6'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomAcDefects,
                        setbedroomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Not Working'
                control={
                  <Checkbox
                    value='7'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomAcDefects,
                        setbedroomAcDefects,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Leakage In Piping'
                control={
                  <Checkbox
                    value='8'
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomAcDefects,
                        setbedroomAcDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default HomeInspection;
