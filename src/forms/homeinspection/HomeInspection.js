
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const HomeInspection = ({
  questionCount,
  homeInspectionInfo,
  sethomeInspectionInfo,
  check,
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
  const [
    livingRoomElectricalPointsDefects,
    setlivingRoomElectricalPointsDefects,
  ] = useState('');
  const [livingRoomCeilingLightDefects, setlivingRoomCeilingLightDefects] =
    useState('');
  const [livingRoomCeilingFanDefects, setlivingRoomCeilingFanDefects] =
    useState('');
  const [livingRoomAcDefects, setlivingRoomAcDefects] = useState('');
  const [livingRoomAlteration, setlivingRoomAlteration] = useState('');
  const [livingRoomWallDemolition, setlivingRoomWallDemolition] = useState('');
  const [livingRoomWallBuild, setlivingRoomWallBuild] = useState('');
  const [livingRoomBalconyFloorExtended, setlivingRoomBalconyFloorExtended] =
    useState('');
  const [
    livingRoomBoxWindowSpaceUtilized,
    setlivingRoomBoxWindowSpaceUtilized,
  ] = useState('');

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
  const [kitchenAlteration, setkitchenAlteration] = useState('');
  const [kitchenWallDemolition, setkitchenWallDemolition] = useState('');
  const [kitchenWallBuilt, setkitchenWallBuilt] = useState('');
  const [kitchenBalconyFloorExtended, setkitchenBalconyFloorExtended] =
    useState('');
  const [kitchenBuiltPlatform, setkitchenBuiltPlatform] = useState('');
  const [kitchenDemolishedPlatform, setkitchenDemolishedPlatform] =
    useState('');
  const [kitchenBoxWindowSpaceUtilized, setkitchenBoxWindowSpaceUtilized] =
    useState('');

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
  // const [bathroomFan, setbathroomFan] = useState('');
  const [BathroomAlteration, setBathroomAlteration] = useState('');
  const [BathroomWallDemolition, setBathroomWallDemolition] = useState('');
  const [BathroomWallBuilt, setBathroomWallBuilt] = useState('');
  const [BathroomBalconyFloorExtended, setBathroomBalconyFloorExtended] =
    useState('');
  const [BathroomBoxWindowSpaceUtilized, setBathroomBoxWindowSpaceUtilized] =
    useState('');
  const [BathroomBuiltPlatform, setBathroomBuiltPlatform] = useState('');
  const [BathroomDemolishedPlatform, setBathroomDemolishedPlatform] =
    useState('');
  const [bathroomFanDefects, setbathroomFanDefects] = useState('');
  const [bedroomFlooringDefects, setbedroomFlooringDefects] = useState('');
  const [bedroomWallPlasterDefects, setbedroomWallPlasterDefects] =
    useState('');
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
  const [BedroomAlteration, setBedroomAlteration] = useState('');
  const [bedroomWallDemolition, setbedroomWallDemolition] = useState('');
  const [bedroomWallBuild, setbedroomWallBuild] = useState('');
  const [BedroomBalconyFloorExtended, setBedroomBalconyFloorExtended] =
    useState('');
  const [BedroomBoxWindowSpaceUtilized, setBedroomBoxWindowSpaceUtilized] =
    useState('');

  const handleCheckboxChange = (event, state, setState) => {
    // event.target.checked =  !event.target.checked;
    const newNames = state?.includes(+event.target.value)
      ? state?.filter(name => name !== +event.target.value)
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
      livingRoomElectricalPointsDefects: livingRoomElectricalPointsDefects,
    }));
  }, [livingRoomElectricalPointsDefects]);

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
      livingRoomAlteration: livingRoomAlteration,
    }));
  }, [livingRoomAlteration]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomWallDemolition: livingRoomWallDemolition,
    }));
  }, [livingRoomWallDemolition]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomWallBuild: livingRoomWallBuild,
    }));
  }, [livingRoomWallBuild]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomBalconyFloorExtended: livingRoomBalconyFloorExtended,
    }));
  }, [livingRoomBalconyFloorExtended]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      livingRoomBoxWindowSpaceUtilized: livingRoomBoxWindowSpaceUtilized,
    }));
  }, [livingRoomBoxWindowSpaceUtilized]);

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
      kitchenWallPanelDefects: kitchenWallPanelDefects,
    }));
  }, [kitchenWallPanelDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWindowShutterDefects: kitchenWindowShutterDefects,
    }));
  }, [kitchenWindowShutterDefects]);



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
      kitchenAlteration: kitchenAlteration,
    }));
  }, [kitchenAlteration]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWallDemolition: kitchenWallDemolition,
    }));
  }, [kitchenWallDemolition]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenWallBuilt: kitchenWallBuilt,
    }));
  }, [kitchenWallBuilt]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenBalconyFloorExtended: kitchenBalconyFloorExtended,
    }));
  }, [kitchenBalconyFloorExtended]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenBuiltPlatform: kitchenBuiltPlatform,
    }));
  }, [kitchenBuiltPlatform]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenDemolishedPlatform: kitchenDemolishedPlatform,
    }));
  }, [kitchenDemolishedPlatform]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      kitchenBoxWindowSpaceUtilized: kitchenBoxWindowSpaceUtilized,
    }));
  }, [kitchenBoxWindowSpaceUtilized]);

  // useEffect(() => {
  //   sethomeInspectionInfo(prevState => ({
  //     ...prevState,
  //     kitchenWallDemolition: kitchenWallDemolition,
  //   }));
  // }, [kitchenWallDemolition]);

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

  // useEffect(() => {
  //   sethomeInspectionInfo(prevState => ({
  //     ...prevState,
  //     bathroomFan: bathroomFan,
  //   }));
  // }, [bathroomFan]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomFanDefects: bathroomFanDefects,
    }));
  }, [bathroomFanDefects]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomAlterations: BathroomAlteration,
    }));
  }, [BathroomAlteration]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomWallDemolition: BathroomWallDemolition,
    }));
  }, [BathroomWallDemolition]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomWallBuilt: BathroomWallBuilt,
    }));
  }, [BathroomWallBuilt]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomBalconyFloorExtended: BathroomBalconyFloorExtended,
    }));
  }, [BathroomBalconyFloorExtended]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomBoxWindowSpaceUtilized: BathroomBoxWindowSpaceUtilized,
    }));
  }, [BathroomBoxWindowSpaceUtilized]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomBuiltPlatform: BathroomBuiltPlatform,
    }));
  }, [BathroomBuiltPlatform]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bathroomDemolishedPlatform: BathroomDemolishedPlatform,
    }));
  }, [BathroomDemolishedPlatform]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomFlooringDefects: bedroomFlooringDefects,
    }));
  }, [bedroomFlooringDefects]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomWallPlasterDefects: bedroomWallPlasterDefects,
    }));
  }, [bedroomWallPlasterDefects]);
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

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomAlterations: BedroomAlteration,
    }));
  }, [BedroomAlteration]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomWallDemolition: bedroomWallDemolition,
    }));
  }, [bedroomWallDemolition]);

  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomWallBuilt: bedroomWallBuild,
    }));
  }, [bedroomWallBuild]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomBalconyFloorExtended: BedroomBalconyFloorExtended,
    }));
  }, [BedroomBalconyFloorExtended]);
  useEffect(() => {
    sethomeInspectionInfo(prevState => ({
      ...prevState,
      bedroomBoxWindowSpaceUtilized: BedroomBoxWindowSpaceUtilized,
    }));
  }, [BedroomBoxWindowSpaceUtilized]);

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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomFlooringType === '1'}
          />
          <label className='ml-2'>Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomFlooringType === '2'}
          />
          <label className='ml-2'>Stone Flooring</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='livingRoomFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomFlooringType === '3'}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomFlooringType'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomFlooringType === '4'}
          />
          <label className='ml-2'>Cement / IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomFlooringType'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomFlooringType === '5'}
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomCeramicTileType === '1'
            }
          />
          <label className='ml-2'>High Gloss</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeramicTileType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomCeramicTileType === '2'
            }
          />
          <label className='ml-2'>Matt</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='livingRoomCeramicTileType'
            value='3'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomCeramicTileType === '3'
            }
          />
          <label className='ml-2'>Anti Skid</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeramicTileType'
            value='4'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomCeramicTileType === '4'
            }
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomStoneFlooringType === '1'
            }
          />
          <label className='ml-2'>Marble</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomStoneFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomStoneFlooringType === '2'
            }
          />
          <label className='ml-2'>Italian Marble</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='livingRoomStoneFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomStoneFlooringType === '3'
            }
          />
          <label className='ml-2'>Granite</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomStoneFlooringType'
            value='4'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomStoneFlooringType === '4'
            }
          />
          <label className='ml-2'>Kota</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomStoneFlooringType'
            value='5'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomStoneFlooringType === '5'
            }
          />
          <label className='ml-2'>Sandstone</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomStoneFlooringType'
            value='6'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomStoneFlooringType === '6'
            }
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomWoodenFlooringType === '1'
            }
          />
          <label className='ml-2'>Engineered Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWoodenFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomWoodenFlooringType === '2'
            }
          />
          <label className='ml-2'>Hard Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWoodenFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomWoodenFlooringType === '3'
            }
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomPvcFlooringType === '1'
            }
          />
          <label className='ml-2'>Planks</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPvcFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomPvcFlooringType === '2'
            }
          />
          <label className='ml-2'>Carpet</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPvcFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomPvcFlooringType === '3'
            }
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      14,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomFlooringDefects.includes(
                      15,
                    )}
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
      {questionCount == 7 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Flooring Remark (Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomFlooringRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomFlooringRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 8 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWalls === '1'}
          />
          <label className='ml-2'>Wall Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWalls'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWalls === '2'}
          />
          <label className='ml-2'>Wall Finishing</label>
        </div>
      )}
      {questionCount === 9 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWallFinishing === '1'}
          />
          <label className='ml-2'>Painting</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWallFinishing'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWallFinishing === '2'}
          />
          <label className='ml-2'>Wall-Paper</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWallFinishing'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWallFinishing === '3'}
          />
          <label className='ml-2'>Wall Tiles (civil work)</label>
        </div>
      )}
      {questionCount === 10 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomPaint === '1'}
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPaint'
            value='2'
            defaultChecked={homeInspectionInfo.livingRoomPaint === '2'}
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPaint'
            value='3'
            defaultChecked={homeInspectionInfo.livingRoomPaint === '3'}
          />
          <label className='ml-2'>Royal Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPaint'
            value='4'
            defaultChecked={homeInspectionInfo.livingRoomPaint === '4'}
          />
          <label className='ml-2'>Textured Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPaint'
            value='5'
            defaultChecked={homeInspectionInfo.livingRoomPaint === '5'}
          />
          <label className='ml-2'>Oil Paint</label>
        </div>
      )}
      {questionCount === 11 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomWallTileCeramicType === '1'
            }
          />
          <label className='ml-2'>High Gloss</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWallTileCeramicType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomWallTileCeramicType === '2'
            }
          />
          <label className='ml-2'>Matt</label>
        </div>
      )}
      {questionCount === 12 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDefects.includes(
                      14,
                    )}
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

      {questionCount == 13 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Wall Remark (living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomWallRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomWallRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 14 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomCeiling === '1'}
          />
          <label className='ml-2'>Ceiling Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeiling'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomCeiling === '2'}
          />
          <label className='ml-2'>Ceiling Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeiling'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomCeiling === '3'}
          />
          <label className='ml-2'>False Ceiling (POP / GYPSUM)</label>
        </div>
      )}
      {questionCount === 15 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              livingRoomCeilingPaint: e.target.value,
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomCeilingPaint === '1'}
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeiling'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomCeilingPaint === '2'}
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeiling'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomCeilingPaint === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 16 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      1,
                    )}
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
                label='Not Hollow'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingDefects.includes(
                      14,
                    )}
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
      {questionCount == 17 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Ceiling Remark (Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomCeilingRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomCeilingRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 18 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomDoorFrame === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomDoorFrame'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomDoorFrame === '2'}
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 19 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorFrameDefects.includes(
                      11,
                    )}
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

      {questionCount === 20 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorDefects.includes(
                      8,
                    )}
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
      {questionCount === 21 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomDoorHardware === '1'}
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomDoorHardware'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomDoorHardware === '2'}
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomDoorHardware'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomDoorHardware === '3'}
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 22 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorHardwareDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorHardwareDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorHardwareDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorHardwareDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorHardwareDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomDoorHardwareDefects.includes(
                      6,
                    )}
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
      {questionCount == 23 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Door Remark (Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomDoorRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomDoorRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 24 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWindowFrame === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWindowFrame'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWindowFrame === '2'}
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 25 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowFrameDefects.includes(
                      11,
                    )}
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
      {questionCount === 26 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWindowHardware === '1'}
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWindowHardware'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWindowHardware === '2'}
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWindowHardware'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWindowHardware === '3'}
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}

      {questionCount === 27 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowHardwareDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowHardwareDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowHardwareDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowHardwareDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowHardwareDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowHardwareDefects.includes(
                      6,
                    )}
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
      {questionCount === 28 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWindowShutter === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomWindowShutter'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomWindowShutter === '2'}
          />
          <label className='ml-2'>Aluminium</label>
        </div>
      )}
      {questionCount === 29 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowShutterDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowShutterDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowShutterDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowShutterDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowShutterDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowShutterDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowShutterDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWindowShutterDefects.includes(
                      8,
                    )}
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
      {questionCount == 30 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Wall Remark (living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomWindowRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomWindowRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 31 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomWallPanelDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallPanelDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallPanelDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallPanelDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomWallPanelDefects.includes(
                      5,
                    )}
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
      {questionCount === 32 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Wall Paneling Remark (Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomWallPanelRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomWallPanelRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 33 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomPartition === '1'}
          />
          <label className='ml-2'>Normal Glass</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPartition'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomPartition === '2'}
          />
          <label className='ml-2'>Frosted Glass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPartition'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomPartition === '3'}
          />
          <label className='ml-2'>MDF / Wooden</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPartition'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomPartition === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 34 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomPartitionDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomPartitionDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomPartitionDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomPartitionDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomPartitionDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomPartitionDefects.includes(
                      6,
                    )}
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
      {questionCount == 35 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Partition Remark (Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomPartitionRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomPartitionRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}

      {questionCount === 36 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomElectricalWiring === '1'
            }
          />
          <label className='ml-2'>Cocealed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomElectricalWiring'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomElectricalWiring === '2'
            }
          />
          <label className='ml-2'>Exposed</label>
        </div>
      )}

      {questionCount === 37 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      3,
                    )}
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
                label='Roomwise And kitchen + Washroom'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalWiringDefects.includes(
                      9,
                    )}
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
      {questionCount == 38 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Electrical Wiring Remark( Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomElectricalWiringRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomElectricalWiringRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 39 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomElectricalPoints === '1'
            }
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomElectricalPoints'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.livingRoomElectricalPoints === '2'
            }
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}

      {questionCount === 40 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalPointsDefects.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalPointsDefects,
                        setlivingRoomElectricalPointsDefects,
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalPointsDefects.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalPointsDefects,
                        setlivingRoomElectricalPointsDefects,
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
                    defaultChecked={homeInspectionInfo.livingRoomElectricalPointsDefects.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomElectricalPointsDefects,
                        setlivingRoomElectricalPointsDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount == 41 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Electrical Points Remark(Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomElectricalPointsRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomElectricalPointsRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 42 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomCeilingLight === '1'}
          />
          <label className='ml-2'>Panel Light</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomCeilingLight'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.livingRoomCeilingLight === '2'}
          />
          <label className='ml-2'>Tube Light</label>
        </div>
      )}
      {questionCount === 43 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingLightDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingLightDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingLightDefects.includes(
                      3,
                    )}
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

      {questionCount == 44 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Ceiling Lights Remark (Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomCeilingLightRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomCeilingLightRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 45 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingFanDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingFanDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomCeilingFanDefects.includes(
                      3,
                    )}
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
      {questionCount === 46 && (
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.livingRoomAcDefects.includes(
                      11,
                    )}
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
      {questionCount == 47 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>AC Remark (Living Room)</h4>
          </div>
          <Input
            value={homeInspectionInfo.livingRoomAcRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                livingRoomAcRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}

      {questionCount === 48 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Alterations (Living Room)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Wall Demolition'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.livingRoomAlteration.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAlteration,
                        setlivingRoomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wall Built'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.livingRoomAlteration.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAlteration,
                        setlivingRoomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Balcony Floor Extended'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.livingRoomAlteration.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAlteration,
                        setlivingRoomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Box Window Space Utilized'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.livingRoomAlteration.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAlteration,
                        setlivingRoomAlteration,
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
                    defaultChecked={homeInspectionInfo.livingRoomAlteration.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomAlteration,
                        setlivingRoomAlteration,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 49 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Demolition (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.livingRoomWallDemolition.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDemolition,
                        setlivingRoomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Open kitchen'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.livingRoomWallDemolition.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDemolition,
                        setlivingRoomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Window Expantion'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.livingRoomWallDemolition.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDemolition,
                        setlivingRoomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Entry'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.livingRoomWallDemolition.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDemolition,
                        setlivingRoomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Window'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.livingRoomWallDemolition.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDemolition,
                        setlivingRoomWallDemolition,
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
                    defaultChecked={homeInspectionInfo.livingRoomWallDemolition.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallDemolition,
                        setlivingRoomWallDemolition,
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
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Built (Living Room)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Closed Entry'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.livingRoomWallBuild.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallBuild,
                        setlivingRoomWallBuild,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Space Reduced'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.livingRoomWallBuild.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallBuild,
                        setlivingRoomWallBuild,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Enclosed kitchen'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.livingRoomWallBuild.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallBuild,
                        setlivingRoomWallBuild,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common Wash Basin'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.livingRoomWallBuild.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallBuild,
                        setlivingRoomWallBuild,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Room'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.livingRoomWallBuild.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallBuild,
                        setlivingRoomWallBuild,
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
                    defaultChecked={homeInspectionInfo.livingRoomWallBuild.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomWallBuild,
                        setlivingRoomWallBuild,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 51 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Balcony Floor Extended (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Floor Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.livingRoomBalconyFloorExtended.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomBalconyFloorExtended,
                        setlivingRoomBalconyFloorExtended,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Sitting ledge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.livingRoomBalconyFloorExtended.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomBalconyFloorExtended,
                        setlivingRoomBalconyFloorExtended,
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
                    defaultChecked={homeInspectionInfo.livingRoomBalconyFloorExtended.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomBalconyFloorExtended,
                        setlivingRoomBalconyFloorExtended,
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
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Box Window Space Utilized (Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Floor Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.livingRoomBoxWindowSpaceUtilized.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomBoxWindowSpaceUtilized,
                        setlivingRoomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Sitting ledge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.livingRoomBoxWindowSpaceUtilized.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomBoxWindowSpaceUtilized,
                        setlivingRoomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Additional Storage'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.livingRoomBoxWindowSpaceUtilized.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomBoxWindowSpaceUtilized,
                        setlivingRoomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.livingRoomBoxWindowSpaceUtilized.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        livingRoomBoxWindowSpaceUtilized,
                        setlivingRoomBoxWindowSpaceUtilized,
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
      {questionCount === 53 && (
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
            <h4 className='font-semibold text-lg'>kitchen Platform</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPlatform'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPlatform === '1'}
          />
          <label className='ml-2'>Semi Modular (Conventional)</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlatform'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPlatform === '2'}
          />
          <label className='ml-2'>Modular</label>
        </div>
      )}
      {questionCount === 54 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>kitchen Platform Defects</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenPlatformDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformDefects.includes(
                      8,
                    )}
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
      {questionCount === 55 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Platform Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenPlatformRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenPlatformRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 56 && (
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
            <h4 className='font-semibold text-lg'>Platform Sink (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPlatformSink'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPlatformSink === '1'}
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlatformSink'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPlatformSink === '2'}
          />
          <label className='ml-2'>PVC</label>
        </div>
      )}
      {questionCount === 57 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              kitchen Platform Sink Defects
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Normal Trap'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenPlatformSinkDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformSinkDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformSinkDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformSinkDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformSinkDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlatformSinkDefects.includes(
                      6,
                    )}
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
      {questionCount === 58 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Platform Sink Remark( kitchen)</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenPlatformSinkRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenPlatformSinkRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 59 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Plumbing Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusted'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenPlumbingDefects.includes(
                      1,
                    )}
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
                label='Old PVC pipe / Leak in PVC pipe'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.kitchenPlumbingDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlumbingDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlumbingDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlumbingDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlumbingDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlumbingDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenPlumbingDefects.includes(
                      8,
                    )}
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

      {questionCount === 60 && (
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
              Plumbing Fixtures Taps (kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPlumbingFixturesTap'
            value='1'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.kitchenPlumbingFixturesTap === '1'
            }
          />
          <label className='ml-2'>Local</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlumbingFixturesTap'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.kitchenPlumbingFixturesTap === '2'
            }
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
          {/* <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Plumbing Fixtures Taps Defects (kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPlatformSink'
            value='1'
            defaultChecked={livingRoomFlooringDefects.kitchenPlatformSink === 1}
          />
          <label className='ml-2'>Any Wear & Tear</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlatformSink'
            value='2'
            defaultChecked={livingRoomFlooringDefects.kitchenPlatformSink === 2}
          />
          <label className='ml-2'>Leakage Issues</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPlatformSink'
            value='3'
            defaultChecked={livingRoomFlooringDefects.kitchenPlatformSink === 3}
          />
          <label className='ml-2'>NA</label> */}
        </div>
      )}
      {questionCount === 61 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Platform Sink Remark( kitchen)</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenPlumbingRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenPlumbingRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 62 && (
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
              Flooring Civil Work (kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenFlooringType'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenFlooringType === '1'}
          />
          <label className='ml-2'>Ceramic Tile</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenFlooringType === '2'}
          />
          <label className='ml-2'>Stone Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenFlooringType === '3'}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFlooringType'
            value='4'
            defaultChecked={homeInspectionInfo.kitchenFlooringType === '4'}
          />
          <label className='ml-2'>Cement / IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFlooringType'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenFlooringType === '5'}
          />
          <label className='ml-2'>PVC</label>
        </div>
      )}
      {questionCount === 63 && (
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
            <h4 className='font-semibold text-lg'>Ceramic Tile (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenCeramicTileType'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeramicTileType === '1'}
          />
          <label className='ml-2'>High Gloss</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeramicTileType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeramicTileType === '2'}
          />
          <label className='ml-2'>Matt</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeramicTileType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeramicTileType === '3'}
          />
          <label className='ml-2'>Anti Skid</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeramicTileType'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeramicTileType === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 64 && (
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
            <h4 className='font-semibold text-lg'>Stone Flooring (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenStoneFlooringType'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenStoneFlooringType === '1'}
          />
          <label className='ml-2'>Marble</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenStoneFlooringType === '2'}
          />
          <label className='ml-2'>Italian Marble</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenStoneFlooringType === '3'}
          />
          <label className='ml-2'>Granite</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='4'
            defaultChecked={homeInspectionInfo.kitchenStoneFlooringType === '4'}
          />
          <label className='ml-2'>Kota</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenStoneFlooringType === '5'}
          />
          <label className='ml-2'>Sandstone</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenStoneFlooringType'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenStoneFlooringType === '6'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 65 && (
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
            <h4 className='font-semibold text-lg'>Wooden Flooring (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWoodenFlooringType'
            value='1'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.kitchenWoodenFlooringType === '1'
            }
          />
          <label className='ml-2'>Engineered Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWoodenFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.kitchenWoodenFlooringType === '2'
            }
          />
          <label className='ml-2'>Hard Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWoodenFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.kitchenWoodenFlooringType === '3'
            }
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 66 && (
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
            <h4 className='font-semibold text-lg'>PVC (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPvcFlooringType'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPvcFlooringType === '1'}
          />
          <label className='ml-2'>Planks</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPvcFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPvcFlooringType === '2'}
          />
          <label className='ml-2'>Carpet</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPvcFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPvcFlooringType === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}

      {questionCount === 67 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Scratches'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      14,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFlooringDefects.includes(
                      15,
                    )}
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

      {questionCount === 68 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Flooring Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenFlooringRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenFlooringRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 69 && (
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
            <h4 className='font-semibold text-lg'>Walls (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWalls === '1'}
            name='kitchenWalls'
            value='1'
          />
          <label className='ml-2'>Wall Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWalls === '2'}
            name='kitchenWalls'
            value='2'
          />
          <label className='ml-2'>Wall Finishing</label>
        </div>
      )}
      {questionCount === 70 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Plaster civil work Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      14,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      15,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      16,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      17,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      18,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      19,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      20,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPlasterDefects.includes(
                      21,
                    )}
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

      {questionCount === 71 && (
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
            <h4 className='font-semibold text-lg'>Wall Finishing (kitchen)</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='kitchenWallFinishing'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallFinishing === '1'}
          />
          <label className='ml-2'>Painting</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallFinishing'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallFinishing === '2'}
          />
          <label className='ml-2'>Wall-Paper</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallFinishing'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallFinishing === '3'}
          />
          <label className='ml-2'>Wall Tiles (civil work)</label>
        </div>
      )}
      {questionCount === 72 && (
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
            <h4 className='font-semibold text-lg'>Painting (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenPaint'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPaint === '1'}
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPaint'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPaint === '2'}
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPaint'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPaint === '3'}
          />
          <label className='ml-2'>Royal Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPaint'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPaint === '4'}
          />
          <label className='ml-2'>Textured Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenPaint'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenPaint === '5'}
          />
          <label className='ml-2'>Oil Paint</label>
        </div>
      )}
      {questionCount === 73 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.kitchenWallTileCeramicType === '1'
            }
          />
          <label className='ml-2'>High Gloss</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallTileCeramicType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.kitchenWallTileCeramicType === '2'
            }
          />
          <label className='ml-2'>Matt</label>

          <br />
        </div>
      )}
      {questionCount === 74 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Defects (kitchen)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Dull'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      14,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallDefects.includes(
                      15,
                    )}
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
      {questionCount === 75 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Wall Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenWallRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenWallRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 76 && (
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
            <h4 className='font-semibold text-lg'>Ceiling (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenCeiling'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeiling === '1'}
          />
          <label className='ml-2'>Ceiling Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeiling'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeiling === '2'}
          />
          <label className='ml-2'>Ceiling Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeiling'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeiling === '3'}
          />
          <label className='ml-2'>False Ceiling (POP / GYPSUM)</label>
        </div>
      )}
      {questionCount === 77 && (
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
            <h4 className='font-semibold text-lg'>Ceiling Paint (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenCeilingPaint'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeilingPaint === '1'}
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeilingPaint'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeilingPaint === '2'}
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeilingPaint'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeilingPaint === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 78 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Ceiling Defects (kitchen)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Hollow'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingDefects.includes(
                      14,
                    )}
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
      {questionCount === 79 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Ceiling Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenCeilingRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenCeilingRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 80 && (
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
            <h4 className='font-semibold text-lg'>Door Frames (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenDoorFrame'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenDoorFrame === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenDoorFrame'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenDoorFrame === '2'}
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 81 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Frames Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorFrameDefects.includes(
                      11,
                    )}
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
      {questionCount === 82 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Entry Door / Safety Door) (WOODEN) Defects. (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenDoorDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorDefects.includes(
                      8,
                    )}
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
      {questionCount === 83 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenDoorHardware === '1'}
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenDoorHardware'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenDoorHardware === '2'}
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenDoorHardware'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenDoorHardware === '3'}
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 84 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenDoorHardwareDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorHardwareDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorHardwareDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorHardwareDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorHardwareDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenDoorHardwareDefects.includes(
                      6,
                    )}
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
      {questionCount === 85 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Door Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenDoorRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenDoorRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 86 && (
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
              Window Frames Civil Work / Carpentry (kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWindowFrame'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWindowFrame === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWindowFrame'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWindowFrame === '2'}
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 87 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Frames Civil Work / Carpentry Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Polished / Unpolished'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowFrameDefects.includes(
                      11,
                    )}
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

      {questionCount === 88 && (
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
              Window Hardware & Fasteners (kitchen)
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='kitchenWindowHardware'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWindowHardware === '1'}
          />
          <label className='ml-2'>Steel</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWindowHardware'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWindowHardware === '2'}
          />
          <label className='ml-2'>Stainless Steel</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWindowHardware'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWindowHardware === '3'}
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 89 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Door Hardware & Fasteners Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rusting'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenWindowHardwareDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowHardwareDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowHardwareDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowHardwareDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowHardwareDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowHardwareDefects.includes(
                      6,
                    )}
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
      {questionCount === 90 && (
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
            <h4 className='font-semibold text-lg'>Window Shutters (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWindowShutter'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWindowShutter === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWindowShutter'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWindowShutter === '2'}
          />
          <label className='ml-2'>Aluminium</label>
        </div>
      )}
      {questionCount === 91 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Window Shutters Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Swollen Edge'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenWindowShutterDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowShutterDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowShutterDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowShutterDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowShutterDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowShutterDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowShutterDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWindowShutterDefects.includes(
                      8,
                    )}
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
      {questionCount === 92 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Window Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenWindowRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenWindowRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 93 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              kitchenWallPanel: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Paneling (KITCHEN)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWallPanel'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallPanel === '1'}
          />
          <label className='ml-2'>Fixed wall paneling</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallPanel'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallPanel === '2'}
          />
          <label className='ml-2'>Wooden Wall paneling</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallPanel'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallPanel === '3'}
          />
          <label className='ml-2'>Granite fixing</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallPanel'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallPanel === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {/* {questionCount === 93 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'></h4>
          </div>

          <FormControl>
            <FormGroup>

              <FormControlLabel
                label=''
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.kitchenWallPanel.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPanel,
                        setkitchenWallPanel,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label=''
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.kitchenWallPanel.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallPanel,
                        setkitchenWallPanel,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )} */}
      {questionCount === 94 && (
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
                    defaultChecked={homeInspectionInfo.kitchenWallPanelDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPanelDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPanelDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPanelDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPanelDefects.includes(
                      5,
                    )}
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
      {questionCount === 95 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Wall Panel Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenWallPanelRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenWallPanelRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 96 && (
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
            <h4 className='font-semibold text-lg'>Partition (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenWallPartition'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallPartition === '1'}
          />
          <label className='ml-2'>Normal Glass</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallPartition'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallPartition === '2'}
          />
          <label className='ml-2'>Frosted Glass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenWallPartition'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallPartition === '3'}
          />
          <label className='ml-2'>MDF / Wooden</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='livingRoomPartition'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenWallPartition === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 97 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Partition Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenWallPartitionDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPartitionDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPartitionDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPartitionDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPartitionDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenWallPartitionDefects.includes(
                      6,
                    )}
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
      {questionCount === 98 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Partition Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenWallPartitionRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenWallPartitionRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 99 && (
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
              Electrical Wiring (kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenElectricalWiring'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenElectricalWiring === '1'}
          />
          <label className='ml-2'>Cocealed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenElectricalWiring'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenElectricalWiring === '2'}
          />
          <label className='ml-2'>Exposed</label>
        </div>
      )}
      {questionCount === 100 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Wiring Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Local'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      3,
                    )}
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
                label='Roomwise And kitchen + Washroom'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalWiringDefects.includes(
                      9,
                    )}
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
      {questionCount === 101 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Electrical Wiring Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenElectricalWiringRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenElectricalWiringRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 102 && (
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
              Electrical Points (Switch Boards) (kitchen)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenElectricalPoints'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenElectricalPoints === '1'}
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenElectricalPoints'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenElectricalPoints === '2'}
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}
      {questionCount === 103 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electrical Points (Switch Boards) Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenElectricalPointsDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalPointsDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenElectricalPointsDefects.includes(
                      3,
                    )}
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
      {questionCount === 104 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Electrical Point Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenElectricalPointsRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenElectricalPointsRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 105 && (
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
            <h4 className='font-semibold text-lg'>Ceiling Lights (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenCeilingLight'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeilingLight === '1'}
          />
          <label className='ml-2'>Panel Light</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenCeilingLight'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenCeilingLight === '2'}
          />
          <label className='ml-2'>Tube Light</label>
        </div>
      )}

      {questionCount === 106 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Lights Defects (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenCeilingLightDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingLightDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenCeilingLightDefects.includes(
                      3,
                    )}
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
      {questionCount === 107 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Ceiling Light Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenCeilingLightRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenCeilingLightRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 108 && (
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
            <h4 className='font-semibold text-lg'>FAN (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenFanType'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenFanType === '1'}
          />
          <label className='ml-2'>Ceiling Fan</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFanType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenFanType === '2'}
          />
          <label className='ml-2'>Exhaust fan</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenFanType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenFanType === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}

      {questionCount === 109 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>FAN Defects (kitchen))</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenFanDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFanDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenFanDefects.includes(
                      3,
                    )}
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
      {questionCount === 110 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Fan Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenFanRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenFanRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 111 && (
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
            <h4 className='font-semibold text-lg'>Chimney(kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='kitchenChimney'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenChimney === '1'}
          />
          <label className='ml-2'>Ducted</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='kitchenChimney'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.kitchenChimney === '2'}
          />
          <label className='ml-2'>Duct Less</label>
        </div>
      )}
      {questionCount === 112 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Chimney Defects (kitchen))
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenChimneyDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenChimneyDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenChimneyDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenChimneyDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.kitchenChimneyDefects.includes(
                      5,
                    )}
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
      {questionCount === 113 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>kitchen Chimney Remark</h4>
          </div>
          <Input
            value={homeInspectionInfo.kitchenChimneyRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                kitchenChimneyRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}

      {questionCount === 114 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Alterations (kitchen)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Wall Demolition'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenAlteration.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenAlteration,
                        setkitchenAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wall Built'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.kitchenAlteration.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenAlteration,
                        setkitchenAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Balcony Floor Extended'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.kitchenAlteration.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenAlteration,
                        setkitchenAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Box Window Space Utilized'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.kitchenAlteration.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenAlteration,
                        setkitchenAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Platform'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.kitchenAlteration.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenAlteration,
                        setkitchenAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Demolished Platform'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={homeInspectionInfo.kitchenAlteration.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenAlteration,
                        setkitchenAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='7'
                    defaultChecked={homeInspectionInfo.kitchenAlteration.includes(
                      7,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenAlteration,
                        setkitchenAlteration,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 115 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Demolition (kitchen)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenWallDemolition.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDemolition,
                        setkitchenWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Open kitchen'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.kitchenWallDemolition.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDemolition,
                        setkitchenWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Window Expantion'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.kitchenWallDemolition.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDemolition,
                        setkitchenWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Entry'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.kitchenWallDemolition.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDemolition,
                        setkitchenWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Window'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.kitchenWallDemolition.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDemolition,
                        setkitchenWallDemolition,
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
                    defaultChecked={homeInspectionInfo.kitchenWallDemolition.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallDemolition,
                        setkitchenWallDemolition,
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
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Built (kitchen)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Closed Entry'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenWallBuilt.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallBuilt,
                        setkitchenWallBuilt,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Space Reduced'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.kitchenWallBuilt.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallBuilt,
                        setkitchenWallBuilt,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Enclosed kitchen'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.kitchenWallBuilt.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallBuilt,
                        setkitchenWallBuilt,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common Wash Basin'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.kitchenWallBuilt.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallBuilt,
                        setkitchenWallBuilt,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Room'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.kitchenWallBuilt.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallBuilt,
                        setkitchenWallBuilt,
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
                    defaultChecked={homeInspectionInfo.kitchenWallBuilt.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenWallBuilt,
                        setkitchenWallBuilt,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 117 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Balcony Floor Extended (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Floor Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenBalconyFloorExtended.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBalconyFloorExtended,
                        setkitchenBalconyFloorExtended,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Sitting ledge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.kitchenBalconyFloorExtended.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBalconyFloorExtended,
                        setkitchenBalconyFloorExtended,
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
                    defaultChecked={homeInspectionInfo.kitchenBalconyFloorExtended.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBalconyFloorExtended,
                        setkitchenBalconyFloorExtended,
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
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Box Window Space Utilized (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Floor Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenBoxWindowSpaceUtilized.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBoxWindowSpaceUtilized,
                        setkitchenBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Sitting ledge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.kitchenBoxWindowSpaceUtilized.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBoxWindowSpaceUtilized,
                        setkitchenBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Additional Storage'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.kitchenBoxWindowSpaceUtilized.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBoxWindowSpaceUtilized,
                        setkitchenBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.kitchenBoxWindowSpaceUtilized.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBoxWindowSpaceUtilized,
                        setkitchenBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 119 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Built Platform (kitchen)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Increased Length'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenBuiltPlatform.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBuiltPlatform,
                        setkitchenBuiltPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Change In Platform Layout'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.kitchenBuiltPlatform.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBuiltPlatform,
                        setkitchenBuiltPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Increased Storage'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.kitchenBuiltPlatform.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBuiltPlatform,
                        setkitchenBuiltPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.kitchenBuiltPlatform.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenBuiltPlatform,
                        setkitchenBuiltPlatform,
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
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Demolished Platform (kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Shortend Length'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.kitchenDemolishedPlatform.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDemolishedPlatform,
                        setkitchenDemolishedPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Reduced Storage'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.kitchenDemolishedPlatform.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDemolishedPlatform,
                        setkitchenDemolishedPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Change In Platform Layout'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.kitchenDemolishedPlatform.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDemolishedPlatform,
                        setkitchenDemolishedPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.kitchenDemolishedPlatform.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        kitchenDemolishedPlatform,
                        setkitchenDemolishedPlatform,
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

      {questionCount === 121 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPlumbing === '1'}
          />
          <label className='ml-2'>Sanitary Fixtures</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbing'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPlumbing === '2'}
          />
          <label className='ml-2'>Plumbing</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbing'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPlumbing === '3'}
          />
          <label className='ml-2'>Plumbing Fixtures</label>
        </div>
      )}
      {questionCount === 122 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomSanitaryFixtures === '1'}
          />
          <label className='ml-2'>Wash Basin</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomSanitaryFixtures'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomSanitaryFixtures === '2'}
          />
          <label className='ml-2'>Indian WC</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomSanitaryFixtures'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomSanitaryFixtures === '3'}
          />
          <label className='ml-2'>Western WC</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomSanitaryFixtures'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomSanitaryFixtures === '4'}
          />
          <label className='ml-2'>Bath Tub</label>
        </div>
      )}
      {questionCount === 123 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPlumbingFixtures === '1'}
          />
          <label className='ml-2'>Taps</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbingFixtures'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPlumbingFixtures === '2'}
          />
          <label className='ml-2'>Flush Tank</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbingFixtures'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPlumbingFixtures === '3'}
          />
          <label className='ml-2'>Geyser</label>
        </div>
      )}
      {questionCount === 124 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomPlumbingFixturesType === '1'
            }
          />
          <label className='ml-2'>Local</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPlumbingFixturesType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomPlumbingFixturesType === '2'
            }
          />
          <label className='ml-2'>Branded</label>
        </div>
      )}
      {questionCount === 125 && (
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
                    defaultChecked={homeInspectionInfo.bathroomPlumbingDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomPlumbingDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomPlumbingDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomPlumbingDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomPlumbingDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomPlumbingDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomPlumbingDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomPlumbingDefects.includes(
                      8,
                    )}
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
      {questionCount === 126 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Plumbing Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomPlumbingRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomPlumbingRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}

      {questionCount === 127 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomFlooringType === '1'}
          />
          <label className='ml-2'>Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomFlooringType === '2'}
          />
          <label className='ml-2'>Stone Flooring</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bathroomFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomFlooringType === '3'}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomFlooringType'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomFlooringType === '4'}
          />
          <label className='ml-2'>Cement / IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomFlooringType'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomFlooringType === '5'}
          />
          <label className='ml-2'>PVC</label>
          <br />
        </div>
      )}
      {questionCount === 128 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeramicTileType === '1'}
          />
          <label className='ml-2'>High Gloss</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeramicTileType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeramicTileType === '2'}
          />
          <label className='ml-2'>Matt</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bathroomCeramicTileType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeramicTileType === '3'}
          />
          <label className='ml-2'>Anti Skid</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeramicTileType'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeramicTileType === '4'}
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 129 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomStoneFlooringType === '1'
            }
          />
          <label className='ml-2'>Marble</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomStoneFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomStoneFlooringType === '2'
            }
          />
          <label className='ml-2'>Italian Marble</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bathroomStoneFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomStoneFlooringType === '3'
            }
          />
          <label className='ml-2'>Granite</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomStoneFlooringType'
            value='4'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomStoneFlooringType === '4'
            }
          />
          <label className='ml-2'>Kota</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomStoneFlooringType'
            value='5'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomStoneFlooringType === '5'
            }
          />
          <label className='ml-2'>Sandstone</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomStoneFlooringType'
            value='6'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomStoneFlooringType === '6'
            }
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 130 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomWoodenFlooringType === '1'
            }
          />
          <label className='ml-2'>Engineered Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWoodenFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomWoodenFlooringType === '2'
            }
          />
          <label className='ml-2'>Hard Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWoodenFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomWoodenFlooringType === '3'
            }
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 131 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPvcFlooringType === '1'}
          />
          <label className='ml-2'>Planks</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPvcFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPvcFlooringType === '2'}
          />
          <label className='ml-2'>Carpet</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPvcFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPvcFlooringType === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 132 && (
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      14,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFlooringDefects.includes(
                      15,
                    )}
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
      {questionCount === 133 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Flooring Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomFlooringRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomFlooringRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 134 && (
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

          <input
            type='radio'
            className='ml-2'
            name='bathroomWalls'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWalls === '1'}
          />
          <label className='ml-2'>Wall Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWalls'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWalls === '2'}
          />
          <label className='ml-2'>Wall Finishing</label>
        </div>
      )}
      {questionCount === 135 && (
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      14,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      15,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      16,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      17,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      18,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      19,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      20,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallDefects.includes(
                      21,
                    )}
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
      {questionCount === 136 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWallFinishing === '1'}
          />
          <label className='ml-2'>Painting</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallFinishing'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWallFinishing === '2'}
          />
          <label className='ml-2'>Wall-Paper</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallFinishing'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWallFinishing === '3'}
          />
          <label className='ml-2'>Wall Tiles (civil work)</label>
        </div>
      )}
      {questionCount === 137 && (
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

          <input
            type='radio'
            className='ml-2'
            name='bathroomPaint'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPaint === '1'}
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPaint'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPaint === '2'}
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPaint'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPaint === '3'}
          />
          <label className='ml-2'>Royal Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPaint'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPaint === '4'}
          />
          <label className='ml-2'>Textured Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomPaint'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomPaint === '5'}
          />
          <label className='ml-2'>Oil Paint</label>
        </div>
      )}
      {questionCount === 138 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomWallTileCeramicType === '1'
            }
          />
          <label className='ml-2'>High Gloss</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallTileCeramicType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bathroomWallTileCeramicType === '2'
            }
          />
          <label className='ml-2'>Matt</label>
        </div>
      )}
      {questionCount === 139 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Wall Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomWallRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomWallRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 140 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeiling === '1'}
          />
          <label className='ml-2'>Ceiling Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeiling'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeiling === '2'}
          />
          <label className='ml-2'>Ceiling Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeiling'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeiling === '3'}
          />
          <label className='ml-2'>False Ceiling (POP / GYPSUM)</label>
        </div>
      )}
      {questionCount === 141 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeilingPaint === '1'}
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeilingPaint'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeilingPaint === '2'}
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeilingPaint'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeilingPaint === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 142 && (
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingDefects.includes(
                      14,
                    )}
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
      {questionCount === 143 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Ceiling Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomCeilingRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomCeilingRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 144 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomDoorFrame === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomDoorFrame'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomDoorFrame === '2'}
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 145 && (
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorFrameDefects.includes(
                      11,
                    )}
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
      {questionCount === 146 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Door Frame Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomDoorFrameRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomDoorFrameRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 147 && (
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
                    defaultChecked={homeInspectionInfo.bathroomDoorDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorDefects.includes(
                      8,
                    )}
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
      {questionCount === 148 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomDoorHardware === '1'}
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomDoorHardware'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomDoorHardware === '2'}
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomDoorHardware'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomDoorHardware === '3'}
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 149 && (
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
                    defaultChecked={homeInspectionInfo.bathroomDoorHardwareDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorHardwareDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorHardwareDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorHardwareDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorHardwareDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomDoorHardwareDefects.includes(
                      6,
                    )}
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
      {questionCount === 150 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Door Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomDoorRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomDoorRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 151 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWindowFrame === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWindowFrame'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWindowFrame === '2'}
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}

      {questionCount === 152 && (
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowFrameDefects.includes(
                      11,
                    )}
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
      {questionCount === 153 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWindowHardware === '1'}
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWindowHardware'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWindowHardware === '2'}
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWindowHardware'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWindowHardware === '3'}
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 154 && (
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
                    defaultChecked={homeInspectionInfo.bathroomWindowHardwareDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowHardwareDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowHardwareDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowHardwareDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowHardwareDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowHardwareDefects.includes(
                      6,
                    )}
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
      {questionCount === 155 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWindowShutter === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWindowShutter'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWindowShutter === '2'}
          />
          <label className='ml-2'>Aluminium</label>
        </div>
      )}

      {questionCount === 156 && (
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
                    defaultChecked={homeInspectionInfo.bathroomWindowShutterDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowShutterDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowShutterDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowShutterDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowShutterDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowShutterDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowShutterDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWindowShutterDefects.includes(
                      8,
                    )}
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
      {questionCount === 157 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Window Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomWindowRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomWindowRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 158 && (
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
                    defaultChecked={homeInspectionInfo.bathroomWallPanelDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPanelDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPanelDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPanelDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPanelDefects.includes(
                      5,
                    )}
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
      {questionCount === 159 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Wall Panel Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomWallPanelRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomWallPanelRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 160 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWallPartition === '1'}
          />
          <label className='ml-2'>Normal Glass</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallPartition'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWallPartition === '2'}
          />
          <label className='ml-2'>Frosted Glass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallPartition'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWallPartition === '3'}
          />
          <label className='ml-2'>MDF / Wooden</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomWallPartition'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomWallPartition === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 161 && (
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
                    defaultChecked={homeInspectionInfo.bathroomWallPartitionDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPartitionDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPartitionDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPartitionDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPartitionDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomWallPartitionDefects.includes(
                      6,
                    )}
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
      {questionCount === 162 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Wall Partition Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomWallPartitionRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomWallPartitionRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 163 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomElectricalWiring === '1'}
          />
          <label className='ml-2'>Cocealed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomElectricalWiring'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomElectricalWiring === '2'}
          />
          <label className='ml-2'>Exposed</label>
        </div>
      )}

      {questionCount === 164 && (
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      3,
                    )}
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
                label='Roomwise And kitchen + Washroom'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalWiringDefects.includes(
                      9,
                    )}
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
      {questionCount === 165 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Electrical Wiring Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomElectricalWiringRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomElectricalWiringRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 166 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomElectricalPoints === '1'}
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomElectricalPoints'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomElectricalPoints === '2'}
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}
      {questionCount === 167 && (
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalPointsDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalPointsDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomElectricalPointsDefects.includes(
                      3,
                    )}
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
      {questionCount === 168 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Electrical Point Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomElectricalPointsRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomElectricalPointsRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 169 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeilingLight === '1'}
          />
          <label className='ml-2'>Panel Light</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bathroomCeilingLight'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomCeilingLight === '2'}
          />
          <label className='ml-2'>Tube Light</label>
        </div>
      )}
      {questionCount === 170 && (
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingLightDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingLightDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomCeilingLightDefects.includes(
                      3,
                    )}
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
      {questionCount === 171 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Ceiling Lights Remark(Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomCeilingLightRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomCeilingLightRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 172 && (
        <div
          className='question '
          onChange={e =>
            sethomeInspectionInfo({
              ...homeInspectionInfo,
              bathroomFan: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>FAN (Bathroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='Exhaust fan'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomFan === '1'}
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='NA'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bathroomFan === '2'}
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}
      {/* {questionCount === 172 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'></h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label=''
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bathroomFan.includes(1)}
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
                    defaultChecked={homeInspectionInfo.bathroomFan.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, bathroomFan, setbathroomFan);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )} */}
      {questionCount === 173 && (
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
                    defaultChecked={homeInspectionInfo.bathroomFanDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFanDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bathroomFanDefects.includes(
                      3,
                    )}
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

      {questionCount === 174 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Fan Remark (Bathroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bathroomFanRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bathroomFanRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}

      {questionCount === 175 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Alterations (Bathroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Wall Demolition'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bathroomAlterations.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomAlteration,
                        setBathroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wall Built'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bathroomAlterations.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomAlteration,
                        setBathroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Balcony Floor Extended'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bathroomAlterations.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomAlteration,
                        setBathroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Box Window Space Utilized'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bathroomAlterations.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomAlteration,
                        setBathroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Platform'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.bathroomAlterations.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomAlteration,
                        setBathroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Demolished Platform'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={homeInspectionInfo.bathroomAlterations.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomAlteration,
                        setBathroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='7'
                    defaultChecked={homeInspectionInfo.bathroomAlterations.includes(
                      7,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomAlteration,
                        setBathroomAlteration,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 176 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wall Demolition (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bathroomWallDemolition.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallDemolition,
                        setBathroomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Open Bathroom'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bathroomWallDemolition.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallDemolition,
                        setBathroomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Window Expantion'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bathroomWallDemolition.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallDemolition,
                        setBathroomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Entry'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bathroomWallDemolition.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallDemolition,
                        setBathroomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Window'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.bathroomWallDemolition.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallDemolition,
                        setBathroomWallDemolition,
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
                    defaultChecked={homeInspectionInfo.bathroomWallDemolition.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallDemolition,
                        setBathroomWallDemolition,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 177 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Built (Bathroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Closed Entry'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bathroomWallBuilt.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallBuilt,
                        setBathroomWallBuilt,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Space Reduced'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bathroomWallBuilt.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallBuilt,
                        setBathroomWallBuilt,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Enclosed Bathroom'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bathroomWallBuilt.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallBuilt,
                        setBathroomWallBuilt,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common Wash Basin'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bathroomWallBuilt.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallBuilt,
                        setBathroomWallBuilt,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Room'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.bathroomWallBuilt.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallBuilt,
                        setBathroomWallBuilt,
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
                    defaultChecked={homeInspectionInfo.bathroomWallBuilt.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomWallBuilt,
                        setBathroomWallBuilt,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 178 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Balcony Floor Extended (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Floor Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bathroomBalconyFloorExtended.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBalconyFloorExtended,
                        setBathroomBalconyFloorExtended,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Sitting ledge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bathroomBalconyFloorExtended.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBalconyFloorExtended,
                        setBathroomBalconyFloorExtended,
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
                    defaultChecked={homeInspectionInfo.bathroomBalconyFloorExtended.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBalconyFloorExtended,
                        setBathroomBalconyFloorExtended,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 179 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Box Window Space Utilized (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Floor Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bathroomBoxWindowSpaceUtilized.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBoxWindowSpaceUtilized,
                        setBathroomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Sitting ledge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bathroomBoxWindowSpaceUtilized.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBoxWindowSpaceUtilized,
                        setBathroomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Additional Storage'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bathroomBoxWindowSpaceUtilized.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBoxWindowSpaceUtilized,
                        setBathroomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bathroomBoxWindowSpaceUtilized.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBoxWindowSpaceUtilized,
                        setBathroomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 180 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Built Platform (Bathroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Increased Length'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bathroomBuiltPlatform.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBuiltPlatform,
                        setBathroomBuiltPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Change In Platform Layout'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bathroomBuiltPlatform.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBuiltPlatform,
                        setBathroomBuiltPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Increased Storage'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bathroomBuiltPlatform.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBuiltPlatform,
                        setBathroomBuiltPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bathroomBuiltPlatform.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomBuiltPlatform,
                        setBathroomBuiltPlatform,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 181 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Demolished Platform (Bathroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Shortend Length'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bathroomDemolishedPlatform.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomDemolishedPlatform,
                        setBathroomDemolishedPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Reduced Storage'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bathroomDemolishedPlatform.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomDemolishedPlatform,
                        setBathroomDemolishedPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Change In Platform Layout'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bathroomDemolishedPlatform.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomDemolishedPlatform,
                        setBathroomDemolishedPlatform,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bathroomDemolishedPlatform.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BathroomDemolishedPlatform,
                        setBathroomDemolishedPlatform,
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

      {questionCount === 182 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomFlooringType === '1'}
          />
          <label className='ml-2'>Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomFlooringType === '2'}
          />
          <label className='ml-2'>Stone Flooring</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bedroomFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomFlooringType === '3'}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomFlooringType'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomFlooringType === '4'}
          />
          <label className='ml-2'>Cement / IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomFlooringType'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomFlooringType === '5'}
          />
          <label className='ml-2'>PVC</label>
          <br />
        </div>
      )}
      {questionCount === 183 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeramicTileType === '1'}
          />
          <label className='ml-2'>High Gloss</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeramicTileType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeramicTileType === '2'}
          />
          <label className='ml-2'>Matt</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bedroomCeramicTileType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeramicTileType === '3'}
          />
          <label className='ml-2'>Anti Skid</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeramicTileType'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeramicTileType === '4'}
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 184 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomStoneFlooringType === '1'}
          />
          <label className='ml-2'>Marble</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomStoneFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomStoneFlooringType === '2'}
          />
          <label className='ml-2'>Italian Marble</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bedroomStoneFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomStoneFlooringType === '3'}
          />
          <label className='ml-2'>Granite</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomStoneFlooringType'
            value='4'
            defaultChecked={homeInspectionInfo.bedroomStoneFlooringType === '4'}
          />
          <label className='ml-2'>Kota</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomStoneFlooringType'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomStoneFlooringType === '5'}
          />
          <label className='ml-2'>Sandstone</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomStoneFlooringType'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomStoneFlooringType === '6'}
          />
          <label className='ml-2'>NA</label>
          <br />
        </div>
      )}
      {questionCount === 185 && (
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
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bedroomWoodenFlooringType === '1'
            }
          />
          <label className='ml-2'>Engineered Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWoodenFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bedroomWoodenFlooringType === '2'
            }
          />
          <label className='ml-2'>Hard Wood</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWoodenFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bedroomWoodenFlooringType === '3'
            }
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 186 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomPvcFlooringType === '1'}
          />
          <label className='ml-2'>Planks</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomPvcFlooringType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomPvcFlooringType === '2'}
          />
          <label className='ml-2'>Carpet</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomPvcFlooringType'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomPvcFlooringType === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 187 && (
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      14,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFlooringDefects.includes(
                      15,
                    )}
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
      {questionCount === 188 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Flooring Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomFlooringRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomFlooringRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 189 && (
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

          <input
            type='radio'
            className='ml-2'
            name='bedroomWalls'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWalls === '1'}
          />
          <label className='ml-2'>Wall Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWalls'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWalls === '2'}
          />
          <label className='ml-2'>Wall Finishing</label>
        </div>
      )}
      {questionCount === 190 && (
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      7,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      8,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      9,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      10,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      11,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      12,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      13,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      14,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      15,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      16,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      17,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      18,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      19,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      20,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
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
                    defaultChecked={homeInspectionInfo.bedroomWallPlasterDefects.includes(
                      21,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallPlasterDefects,
                        setbedroomWallPlasterDefects,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 191 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWallFinishing === '1'}
          />
          <label className='ml-2'>Painting</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWallFinishing'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWallFinishing === '2'}
          />
          <label className='ml-2'>Wall-Paper</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWallFinishing'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWallFinishing === '3'}
          />
          <label className='ml-2'>Wall Tiles (civil work)</label>
        </div>
      )}
      {questionCount === 192 && (
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

          <input
            type='radio'
            className='ml-2'
            name='bedroomPaint'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomPaint === '1'}
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomPaint'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomPaint === '2'}
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomPaint'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomPaint === '3'}
          />
          <label className='ml-2'>Royal Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomPaint'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomPaint === '4'}
          />
          <label className='ml-2'>Textured Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomPaint'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomPaint === '5'}
          />
          <label className='ml-2'>Oil Paint</label>
        </div>
      )}
      {questionCount === 193 && (
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
            defaultChecked={
              homeInspectionInfo.bedroomWallTileCeramicType === '1'
            }
          />
          <label className='ml-2'>High Gloss</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWallTileCeramicType'
            value='2'
            onChange={e => {}}
            defaultChecked={
              homeInspectionInfo.bedroomWallTileCeramicType === '2'
            }
          />
          <label className='ml-2'>Matt</label>
        </div>
      )}
      {questionCount === 194 && (
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      14,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallDefects.includes(
                      15,
                    )}
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

      {questionCount === 195 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Wall Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomWallRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomWallRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 196 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeiling === '1'}
          />
          <label className='ml-2'>Ceiling Plaster</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeiling'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeiling === '2'}
          />
          <label className='ml-2'>Ceiling Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeiling'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeiling === '3'}
          />
          <label className='ml-2'>False Ceiling (POP / GYPSUM)</label>
        </div>
      )}

      {questionCount === 197 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeilingPaint === '1'}
          />
          <label className='ml-2'>Plastic Paint</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeilingPaint'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeilingPaint === '2'}
          />
          <label className='ml-2'>Luster Paint</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeilingPaint'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeilingPaint === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}

      {questionCount === 198 && (
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      11,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      12,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      13,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingDefects.includes(
                      14,
                    )}
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
      {questionCount === 199 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Ceiling Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomCeilingRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomCeilingRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 200 && (
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
            <h4 className='font-semibold text-lg'>Door Frames (kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomDoorFrame'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomDoorFrame === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomDoorFrame'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomDoorFrame === '2'}
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}

      {questionCount === 201 && (
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorFrameDefects.includes(
                      11,
                    )}
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
      {questionCount === 202 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Door Frames Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomDoorFrameRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomDoorFrameRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 203 && (
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
                    defaultChecked={homeInspectionInfo.bedroomDoorDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorDefects.includes(
                      8,
                    )}
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
      {questionCount === 204 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomDoorHardware === '1'}
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomDoorHardware'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomDoorHardware === '2'}
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomDoorHardware'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomDoorHardware === '3'}
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 205 && (
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
                    defaultChecked={homeInspectionInfo.bedroomDoorHardwareDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorHardwareDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorHardwareDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorHardwareDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorHardwareDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomDoorHardwareDefects.includes(
                      6,
                    )}
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
      {questionCount === 206 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Door Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomDoorRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomDoorRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 207 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWindowFrame === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWindowFrame'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWindowFrame === '2'}
          />
          <label className='ml-2'>Stone</label>
        </div>
      )}
      {questionCount === 208 && (
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      9,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      10,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowFrameDefects.includes(
                      11,
                    )}
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
      {questionCount === 209 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWindowHardware === '1'}
          />
          <label className='ml-2'>Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWindowHardware'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWindowHardware === '2'}
          />
          <label className='ml-2'>Stainless Steel</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWindowHardware'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWindowHardware === '3'}
          />
          <label className='ml-2'>Brass</label>
        </div>
      )}
      {questionCount === 210 && (
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
                    defaultChecked={homeInspectionInfo.bedroomWindowHardwareDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowHardwareDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowHardwareDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowHardwareDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowHardwareDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowHardwareDefects.includes(
                      6,
                    )}
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
      {questionCount === 211 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWindowShutter === '1'}
          />
          <label className='ml-2'>Wooden</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomWindowShutter'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomWindowShutter === '2'}
          />
          <label className='ml-2'>Aluminium</label>
        </div>
      )}
      {questionCount === 212 && (
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
                    defaultChecked={homeInspectionInfo.bedroomWindowShutterDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowShutterDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowShutterDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowShutterDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowShutterDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowShutterDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowShutterDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWindowShutterDefects.includes(
                      8,
                    )}
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
      {questionCount === 213 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Window Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomWindowRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomWindowRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 214 && (
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
                    defaultChecked={homeInspectionInfo.bedroomWallPanelDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallPanelDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallPanelDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallPanelDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomWallPanelDefects.includes(
                      5,
                    )}
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
      {questionCount === 215 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Wall Panel Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomWallPanelRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomWallPanelRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 216 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomElectricalWiring === '1'}
          />
          <label className='ml-2'>Cocealed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomElectricalWiring'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomElectricalWiring === '2'}
          />
          <label className='ml-2'>Exposed</label>
        </div>
      )}
      {questionCount === 217 && (
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      3,
                    )}
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
                label='Roomwise And kitchen + Washroom'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      8,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalWiringDefects.includes(
                      9,
                    )}
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
      {questionCount === 218 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Electrical Wiring Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomElectricalWiringRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomElectricalWiringRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 219 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomElectricalPoints === '1'}
          />
          <label className='ml-2'>Flushed</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomElectricalPoints'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomElectricalPoints === '2'}
          />
          <label className='ml-2'>Surfaced</label>
        </div>
      )}
      {questionCount === 220 && (
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalPointsDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalPointsDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomElectricalPointsDefects.includes(
                      3,
                    )}
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
      {questionCount === 221 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Electrical Point Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomElectricalPointsRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomElectricalPointsRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 222 && (
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
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeilingLight === '1'}
          />
          <label className='ml-2'>Panel Light</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomCeilingLight'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomCeilingLight === '2'}
          />
          <label className='ml-2'>Tube Light</label>
        </div>
      )}
      {questionCount === 223 && (
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingLightDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingLightDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomCeilingLightDefects.includes(
                      3,
                    )}
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
      {questionCount === 224 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Ceiling Light Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomCeilingLightRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomCeilingLightRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 225 && (
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
            <h4 className='font-semibold text-lg'>FAN (Bedroom)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroomFan'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomFan === '1'}
          />
          <label className='ml-2'>Ceiling Fan</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomFan'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomFan === '2'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 226 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ceiling Fan Defects (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Non Adequate'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bedroomFanDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFanDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomFanDefects.includes(
                      3,
                    )}
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
      {questionCount === 227 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Fan Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomFanRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomFanRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 228 && (
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

          <input
            type='radio'
            className='ml-2'
            name='bedroomAc'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomAc === '1'}
          />
          <label className='ml-2'>Split</label>

          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomAc'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomAc === '2'}
          />
          <label className='ml-2'>Window</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroomAc'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInspectionInfo.bedroomAc === '3'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 229 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>AC Defects (Bedroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Any Wear & Tear'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bedroomAcDefects.includes(
                      1,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomAcDefects.includes(
                      2,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomAcDefects.includes(
                      3,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomAcDefects.includes(
                      4,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomAcDefects.includes(
                      5,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomAcDefects.includes(
                      6,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomAcDefects.includes(
                      7,
                    )}
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
                    defaultChecked={homeInspectionInfo.bedroomAcDefects.includes(
                      8,
                    )}
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
      {questionCount === 230 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Ac Remark (Bedroom)</h4>
          </div>
          <Input
            value={homeInspectionInfo.bedroomAcRemarks}
            onChange={e =>
              sethomeInspectionInfo({
                ...homeInspectionInfo,
                bedroomAcRemarks: e.target.value,
              })
            }
            placeholder='remark'
            fullWidth
          />
        </div>
      )}
      {questionCount === 231 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Alterations (Bedroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Wall Demolition'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bedroomAlterations.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomAlteration,
                        setBedroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wall Built'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bedroomAlterations.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomAlteration,
                        setBedroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Balcony Floor Extended'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bedroomAlterations.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomAlteration,
                        setBedroomAlteration,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Box Window Space Utilized'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bedroomAlterations.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomAlteration,
                        setBedroomAlteration,
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
                    defaultChecked={homeInspectionInfo.bedroomAlterations.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomAlteration,
                        setBedroomAlteration,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 232 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Demolition (Bedroom</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bedroomWallDemolition.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDemolition,
                        setbedroomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Open Bedroom'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bedroomWallDemolition.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDemolition,
                        setbedroomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Window Expantion'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bedroomWallDemolition.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDemolition,
                        setbedroomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Entry'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bedroomWallDemolition.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDemolition,
                        setbedroomWallDemolition,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Window'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.bedroomWallDemolition.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDemolition,
                        setbedroomWallDemolition,
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
                    defaultChecked={homeInspectionInfo.bedroomWallDemolition.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallDemolition,
                        setbedroomWallDemolition,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 233 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wall Built (Bedroom)</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Closed Entry'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bedroomWallBuilt.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallBuild,
                        setbedroomWallBuild,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Space Reduced'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bedroomWallBuilt.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallBuild,
                        setbedroomWallBuild,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Enclosed Bedroom'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bedroomWallBuilt.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallBuild,
                        setbedroomWallBuild,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common Wash Basin'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bedroomWallBuilt.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallBuild,
                        setbedroomWallBuild,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Created Room'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInspectionInfo.bedroomWallBuilt.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallBuild,
                        setbedroomWallBuild,
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
                    defaultChecked={homeInspectionInfo.bedroomWallBuilt.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        bedroomWallBuild,
                        setbedroomWallBuild,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 234 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Balcony Floor Extended (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Floor Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bedroomBalconyFloorExtended.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomBalconyFloorExtended,
                        setBedroomBalconyFloorExtended,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Sitting ledge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bedroomBalconyFloorExtended.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomBalconyFloorExtended,
                        setBedroomBalconyFloorExtended,
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
                    defaultChecked={homeInspectionInfo.bedroomBalconyFloorExtended.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomBalconyFloorExtended,
                        setBedroomBalconyFloorExtended,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 235 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Box Window Space Utilized (Bedroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Floor Space Increased'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInspectionInfo.bedroomBoxWindowSpaceUtilized.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomBoxWindowSpaceUtilized,
                        setBedroomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Built Sitting ledge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInspectionInfo.bedroomBoxWindowSpaceUtilized.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomBoxWindowSpaceUtilized,
                        setBedroomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Additional Storage'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInspectionInfo.bedroomBoxWindowSpaceUtilized.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomBoxWindowSpaceUtilized,
                        setBedroomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInspectionInfo.bedroomBoxWindowSpaceUtilized.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        BedroomBoxWindowSpaceUtilized,
                        setBedroomBoxWindowSpaceUtilized,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {check && <p className='text-red-500'>Required Question </p>}
    </div>
  );
};

export default HomeInspection;
