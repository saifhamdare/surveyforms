import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const HomeInfo = ({ questionCount, homeInfo, sethomeInfo ,check}) => {
  const [washroom, setWashroom] = useState('');
  const [parkingtype, setparkingtype] = useState('');
  const [washingAreaAttached, setwashingAreaAttached] = useState('');
  const [applianceIncludedKitchen, setapplianceIncludedKitchen] = useState('');
  const [applianceIncludedLivingRoom, setapplianceIncludedLivingRoom] =
    useState('');
  const [applianceIncludedBedroom1, setapplianceIncludedBedroom1] =
    useState('');
  const [applianceIncludedBedroom2, setapplianceIncludedBedroom2] =
    useState('');
  const [applianceIncludedWashroom, setapplianceIncludedWashroom] =
    useState('');
  const [fixedSystems, setfixedSystems] = useState('');
  const [fireFightingSystem, setfireFightingSystem] = useState('');
  const [viewFromWindow, setviewFromWindow] = useState('');

  const handleCheckboxChange = (event, state, setState) => {
    console.log(+event.target.value);
    const newNames = state?.includes(+event.target.value)
      ? state?.filter(name => name !== +event.target.value)
      : [...(state ?? []), +event.target.value];
    setState(newNames);
  };


  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      washrooms: washroom,
    }));
  }, [washroom]);

  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      washingAreaAttachedTo: washingAreaAttached,
    }));
  }, [washingAreaAttached]);

  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      applianceIncludedKitchen: applianceIncludedKitchen,
    }));
  }, [applianceIncludedKitchen]);

  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      applianceIncludedLivingRoom: applianceIncludedLivingRoom,
    }));
  }, [applianceIncludedLivingRoom]);

  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      applianceIncludedBedroom1: applianceIncludedBedroom1,
    }));
  }, [applianceIncludedBedroom1]);
  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      applianceIncludedBedroom2: applianceIncludedBedroom2,
    }));
  }, [applianceIncludedBedroom2]);

  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      applianceIncludedWashroom: applianceIncludedWashroom,
    }));
  }, [applianceIncludedWashroom]);

  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      fixedSystems: fixedSystems,
    }));
  }, [fixedSystems]);

  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      fireFightingSystem: fireFightingSystem,
    }));
  }, [fireFightingSystem]);

  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      viewFromWindow: viewFromWindow,
    }));
  }, [viewFromWindow]);
  useEffect(() => {
    sethomeInfo(prevState => ({
      ...prevState,
      ParkingType: parkingtype,
    }));
  }, [parkingtype]);

  return (
    //             <p className='italic font-light text-sm'></p>
    <div>
      {questionCount === 1 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Property address</h4>
          </div>
          <Input
            placeholder='address'
            value={homeInfo.address}
            onChange={e =>
              sethomeInfo({
                ...homeInfo,
                address: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount === 2 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Property Location</h4>
          </div>
          <Input
            placeholder='location'
            value={homeInfo.location}
            onChange={e =>
              sethomeInfo({
                ...homeInfo,
                location: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount === 3 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Property age</h4>
          </div>
          <Input
            placeholder='property Age'
            value={homeInfo.PropertyAge}
            onChange={e =>
              sethomeInfo({
                ...homeInfo,
                PropertyAge: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 4 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              configuration: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Property configuration</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='configuration'
            value='1'
            onChange={e => {}}
            checked={homeInfo.configuration === '1'}
          />
          <label className='ml-2'>1 RK</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='configuration'
            value='2'
            onChange={e => {}}
            checked={homeInfo.configuration === '2'}
          />
          <label className='ml-2'>1 BHK</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='configuration'
            value='8'
            onChange={e => {}}
            checked={homeInfo.configuration === '8'}
          />
          <label className='ml-2'>1.5 BHK</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='configuration'
            value='3'
            onChange={e => {}}
            checked={homeInfo.configuration === '3'}
          />
          <label className='ml-2'>2 BHK</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='configuration'
            value='4'
            onChange={e => {}}
            checked={homeInfo.configuration === '4'}
          />
          <label className='ml-2'>2.5 BHK</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='configuration'
            value='5'
            onChange={e => {}}
            checked={homeInfo.configuration === '5'}
          />
          <label className='ml-2'>3 BHK</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='configuration'
            value='6'
            onChange={e => {}}
            checked={homeInfo.configuration === '6'}
          />
          <label className='ml-2'>3.5 BHK</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='configuration'
            value='7'
            onChange={e => {}}
            checked={homeInfo.configuration === '7'}
          />
          <label className='ml-2'>4 BHK</label>
        </div>
      )}
      {questionCount === 5 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Carpet Area</h4>
          </div>
          <Input
            placeholder='Carpet Area in Sq.ft'
            value={homeInfo.carpetArea}
            onChange={e =>
              sethomeInfo({
                ...homeInfo,
                carpetArea: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 6 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Your Quoted Price</h4>
          </div>
          <Input
            placeholder='Price in ₹'
            value={homeInfo.quotedPrice}
            onChange={e =>
              sethomeInfo({
                ...homeInfo,
                quotedPrice: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 7 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Floor Number</h4>
          </div>
          <Input
            placeholder='floor'
            value={homeInfo.floorNumber}
            onChange={e =>
              sethomeInfo({
                ...homeInfo,
                floorNumber: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 8 && (
        <div
          className='question   '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              ownerType: e.target.value,
            })
          }
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Owner Type</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='ownerType'
            value='1'
            onChange={e => {}}
            checked={homeInfo.ownerType === '1'}
          />
          <label className='ml-2'>1st Owner</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='ownerType'
            value='2'
            onChange={e => {}}
            checked={homeInfo.ownerType === '2'}
          />
          <label className='ml-2'>2nd Owner</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='ownerType'
            value='3'
            onChange={e => {}}
            checked={homeInfo.ownerType === '3'}
          />
          <label className='ml-2'>3rd Owner</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='ownerType'
            value='4'
            onChange={e => {}}
            checked={homeInfo.ownerType === '4'}
          />
          <label className='ml-2'>3+</label>
        </div>
      )}
      {questionCount === 9 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Washrooms</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Attached'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.washrooms.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, washroom, setWashroom);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Common'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.washrooms.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, washroom, setWashroom);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 10 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Washing area / Storage area attached to
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Kitchen'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.washingAreaAttachedTo.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        washingAreaAttached,
                        setwashingAreaAttached,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Washroom'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.washingAreaAttachedTo.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        washingAreaAttached,
                        setwashingAreaAttached,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bedroom'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.washingAreaAttachedTo.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        washingAreaAttached,
                        setwashingAreaAttached,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Living room'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInfo.washingAreaAttachedTo.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        washingAreaAttached,
                        setwashingAreaAttached,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInfo.washingAreaAttachedTo.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        washingAreaAttached,
                        setwashingAreaAttached,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 11 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Select Appliances and Fixtures Included with Purchase(Kitchen)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Inbuilt Gas Stove'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fridge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chimney'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(31)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Oven/ Microwave'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Washing Machine'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dryer'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Dishwasher'
                control={
                  <Checkbox
                    value='7'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(7)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Geyser'
                control={
                  <Checkbox
                    value='8'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(8)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='8'
                    defaultChecked={homeInfo.applianceIncludedKitchen.includes(9)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedKitchen,
                        setapplianceIncludedKitchen,
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
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Select Appliances and Fixtures Included with Purchase(Living Room)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='AC'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.applianceIncludedLivingRoom.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedLivingRoom,
                        setapplianceIncludedLivingRoom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='CCTV'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.applianceIncludedLivingRoom.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedLivingRoom,
                        setapplianceIncludedLivingRoom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Door Camera With Screen'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.applianceIncludedLivingRoom.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedLivingRoom,
                        setapplianceIncludedLivingRoom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Home Theater System'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInfo.applianceIncludedLivingRoom.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedLivingRoom,
                        setapplianceIncludedLivingRoom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='TV'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInfo.applianceIncludedLivingRoom.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedLivingRoom,
                        setapplianceIncludedLivingRoom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Projector'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={homeInfo.applianceIncludedLivingRoom.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedLivingRoom,
                        setapplianceIncludedLivingRoom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={homeInfo.applianceIncludedLivingRoom.includes(7)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedLivingRoom,
                        setapplianceIncludedLivingRoom,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 13 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Select Appliances Included with Purchase(Bedroom 1)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='AC'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.applianceIncludedBedroom1.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedBedroom1,
                        setapplianceIncludedBedroom1,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='TV'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.applianceIncludedBedroom1.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedBedroom1,
                        setapplianceIncludedBedroom1,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Projector'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.applianceIncludedBedroom1.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedBedroom1,
                        setapplianceIncludedBedroom1,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.applianceIncludedBedroom1.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedBedroom1,
                        setapplianceIncludedBedroom1,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 14 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Select Appliances Included with Purchase(Bedroom 2)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='AC'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.applianceIncludedBedroom2.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedBedroom2,
                        setapplianceIncludedBedroom2,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='TV'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.applianceIncludedBedroom2.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedBedroom2,
                        setapplianceIncludedBedroom2,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Projector'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.applianceIncludedBedroom2.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedBedroom2,
                        setapplianceIncludedBedroom2,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.applianceIncludedBedroom2.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedBedroom2,
                        setapplianceIncludedBedroom2,
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
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Select Appliances Included with Purchase(washroom)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Geyser'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.applianceIncludedWashroom.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedWashroom,
                        setapplianceIncludedWashroom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Boiler'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.applianceIncludedWashroom.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedWashroom,
                        setapplianceIncludedWashroom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Shower'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.applianceIncludedWashroom.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedWashroom,
                        setapplianceIncludedWashroom,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.applianceIncludedWashroom.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        applianceIncludedWashroom,
                        setapplianceIncludedWashroom,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 16 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Installed systems / services, which cannot be removed)
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='HVAC System'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.fixedSystems.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, fixedSystems, setfixedSystems);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Centeral Security System'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.fixedSystems.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, fixedSystems, setfixedSystems);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fire Fighting System'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.fixedSystems.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, fixedSystems, setfixedSystems);
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Gas Pipeline'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInfo.fixedSystems.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, fixedSystems, setfixedSystems);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Music System'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInfo.fixedSystems.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(e, fixedSystems, setfixedSystems);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInfo.fixedSystems.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(e, fixedSystems, setfixedSystems);
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
            <h4 className='font-semibold text-lg'>Fire Fighting System</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Sprinkler System'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.fireFightingSystem.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        fireFightingSystem,
                        setfireFightingSystem,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Smoke Detector'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.fireFightingSystem.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        fireFightingSystem,
                        setfireFightingSystem,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fire Detector'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.fireFightingSystem.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        fireFightingSystem,
                        setfireFightingSystem,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fire Extinguisher'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInfo.fireFightingSystem.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        fireFightingSystem,
                        setfireFightingSystem,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInfo.fireFightingSystem.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        fireFightingSystem,
                        setfireFightingSystem,
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
            sethomeInfo({
              ...homeInfo,
              viewFromWindowRating: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>View From Window(Rate)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='Rateview'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.viewFromWindowRating === '1'}
          />
          <label className='ml-2'>Wow</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='Rateview'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.viewFromWindowRating === '2'}
          />
          <label className='ml-2'>Pleasent</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='Rateview'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.viewFromWindowRating === '3'}
          />
          <label className='ml-2'>Routine</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='Rateview'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.viewFromWindowRating === '4'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}
      {questionCount === 19 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>View From Window</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Slums'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.viewFromWindow.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Building'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.viewFromWindow.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Open Land'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.viewFromWindow.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Beach / Seaface'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInfo.viewFromWindow.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Lake / Pond'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={homeInfo.viewFromWindow.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='River'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={homeInfo.viewFromWindow.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Mountains'
                control={
                  <Checkbox
                    value='7'
                    defaultChecked={homeInfo.viewFromWindow.includes(7)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Valley'
                control={
                  <Checkbox
                    value='8'
                    defaultChecked={homeInfo.viewFromWindow.includes(8)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Internal Road'
                control={
                  <Checkbox
                    value='9'
                    defaultChecked={homeInfo.viewFromWindow.includes(9)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Highway'
                control={
                  <Checkbox
                    value='10'
                    defaultChecked={homeInfo.viewFromWindow.includes(10)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Metro'
                control={
                  <Checkbox
                    value='11'
                    defaultChecked={homeInfo.viewFromWindow.includes(11)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Temple /Church /Mosque'
                control={
                  <Checkbox
                    value='12'
                    defaultChecked={homeInfo.viewFromWindow.includes(12)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Crematorium/ Graveyard/ Kabrastan'
                control={
                  <Checkbox
                    value='13'
                    defaultChecked={homeInfo.viewFromWindow.includes(13)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Iconic structure'
                control={
                  <Checkbox
                    value='14'
                    defaultChecked={homeInfo.viewFromWindow.includes(14)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Podium garden'
                control={
                  <Checkbox
                    value='15'
                    defaultChecked={homeInfo.viewFromWindow.includes(15)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Skyline'
                control={
                  <Checkbox
                    value='16'
                    defaultChecked={homeInfo.viewFromWindow.includes(16)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Horizon'
                control={
                  <Checkbox
                    value='17'
                    defaultChecked={homeInfo.viewFromWindow.includes(17)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Swimming Pool'
                control={
                  <Checkbox
                    value='18'
                    defaultChecked={homeInfo.viewFromWindow.includes(18)}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        viewFromWindow,
                        setviewFromWindow,
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
            sethomeInfo({
              ...homeInfo,
              mainDoorDirection: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Living Room Maindoor Position
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='MaindoorPosition'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorDirection === '1'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='MaindoorPosition'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorDirection === '2'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='MaindoorPosition'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorDirection === '3'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='MaindoorPosition'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorDirection === '4'}
          />
          <label className='ml-2'>South-West</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='MaindoorPosition'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorDirection === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='MaindoorPosition'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorDirection === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='MaindoorPosition'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorDirection === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='MaindoorPosition'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorDirection === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 21 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              kitchenDirection: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Kitchen Position (Vaastu)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='KitchenPosition'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenDirection === '1'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenPosition'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenDirection === '2'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenPosition'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenDirection === '3'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenPosition'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenDirection === '4'}
          />
          <label className='ml-2'>South-West</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='KitchenPosition'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenDirection === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenPosition'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenDirection === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenPosition'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenDirection === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenPosition'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenDirection === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 22 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              kitchenSinkDirection: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Kitchen Sink Position (Vaastu)
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='sinkPosition'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenSinkDirection === '1'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='sinkPosition'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenSinkDirection === '2'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='sinkPosition'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenSinkDirection === '3'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input className='ml-2' type='radio' name='sinkPosition' value='4'onChange={e => {}}
          defaultChecked={homeInfo.kitchenSinkDirection === '4'} />
          <label className='ml-2'>South-West</label>
          
          <br />
          <input
            type='radio'
            className='ml-2'
            name='sinkPosition'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenSinkDirection === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='sinkPosition'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenSinkDirection === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='sinkPosition'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenSinkDirection === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='sinkPosition'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.kitchenSinkDirection === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 23 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              mandirDirection: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Mandir Pooja Room Position (Vaastu)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='mandirPosition'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.mandirDirection === '1'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='mandirPosition'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.mandirDirection === '2'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='mandirPosition'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.mandirDirection === '3'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='mandirPosition'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.mandirDirection === '4'}
          />
          <label className='ml-2'>South-West</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='mandirPosition'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.mandirDirection === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='mandirPosition'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.mandirDirection === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='mandirPosition'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.mandirDirection === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='mandirPosition'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.mandirDirection === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 24 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              bedroom1Direction: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Bedroom 1 Position (Vaastu)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroom1Position'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom1Direction === '1'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Position'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom1Direction === '2'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Position'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom1Direction === '3'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Position'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom1Direction === '4'}
          />
          <label className='ml-2'>South-West</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bedroom1Position'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom1Direction === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Position'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom1Direction === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Position'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom1Direction === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Position'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom1Direction === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 25 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              bedroom2Direction: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Bedroom 2 Position (Vaastu)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroom2Position'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom2Direction === '2'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Position'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom2Direction === '3'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Position'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom2Direction === '4'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Position'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom2Direction === '5'}
          />
          <label className='ml-2'>South-West</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='bedroom2Position'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom2Direction === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Position'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom2Direction === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Position'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom2Direction === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Position'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.bedroom2Direction === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 26 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              washroom1Direction: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Washroom 1 Position (Vaastu)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='washroom1Position'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom1Direction === '1'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom1Position'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom1Direction === '2'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom1Position'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom1Direction === '3'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom1Position'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom1Direction === '4'}
          />
          <label className='ml-2'>South-West</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='washroom1Position'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom1Direction === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom1Position'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom1Direction === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom1Position'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom1Direction === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom1Position'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom1Direction === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 27 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              washroom2Direction: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Washroom 2 Position (Vaastu)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='washroom2Position'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom2Direction === '1'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom2Position'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom2Direction === '2'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom2Position'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom2Direction === '3'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom2Position'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom2Direction === '4'}
          />
          <label className='ml-2'>South-West</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='washroom2Position'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom2Direction === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom2Position'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom2Direction === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom2Position'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom2Direction === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom2Position'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom2Direction === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 28 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              washroom3Direction: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Washroom 3 Position (Vaastu)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='washroom3Position'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom3Direction === '1'}
          />
          <label className='ml-2'>East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom3Position'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom3Direction === '2'}
          />
          <label className='ml-2'>South-East</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom3Position'
            value='3'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom3Direction === '3'}
          />
          <label className='ml-2'>South</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom3Position'
            value='4'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom3Direction === '4'}
          />
          <label className='ml-2'>South-West</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='washroom3Position'
            value='5'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom3Direction === '5'}
          />
          <label className='ml-2'>West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom3Position'
            value='6'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom3Direction === '6'}
          />
          <label className='ml-2'>North-West</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom3Position'
            value='7'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom3Direction === '7'}
          />
          <label className='ml-2'>North</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroom3Position'
            value='8'
            onChange={e => {}}
            defaultChecked={homeInfo.washroom3Direction === '8'}
          />
          <label className='ml-2'>North-East</label>
        </div>
      )}
      {questionCount === 29 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              mainDoorLarger: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Main door larger than other doors of the house?
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='mainDoorLarger'
            value='True'
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorLarger === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='mainDoorLarger'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.mainDoorLarger === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 30 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              wellLitEntrance: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>A well lit entrance area</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='wellLitEntrance'
            value='True'
            onChange={e => {}}
            defaultChecked={homeInfo.wellLitEntrance === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wellLitEntrance'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.wellLitEntrance === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 31 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              washroomNearMainEntrance: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              A washroom near main entrance?
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='washroomNearMainEntrance'
            value='True'
            onChange={e => {}}
            defaultChecked={homeInfo.washroomNearMainEntrance === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='washroomNearMainEntrance'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.washroomNearMainEntrance === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 32 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              hobNextToSink: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Hob placed next to sink </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='hobNextToSink'
            value='True'
            onChange={e => {}}
            defaultChecked={homeInfo.hobNextToSink === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hobNextToSink'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.hobNextToSink === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 33 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              poojaRoomWallNotWithWashroom: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Pooja room does not share wall with washroom{' '}
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='poojaRoomWallNotWithWashroom'
            value='True'
            onChange={e => {}}
            defaultChecked={homeInfo.poojaRoomWallNotWithWashroom === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='poojaRoomWallNotWithWashroom'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.poojaRoomWallNotWithWashroom === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 34 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              {' '}
              Number of Four Wheeler parking
            </h4>
          </div>
          <Input
            placeholder='Four Wheeler parking'
            value={homeInfo.numberOfFourWheelerParking}
            onChange={e =>
              sethomeInfo({
                ...homeInfo,
                numberOfFourWheelerParking: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 35 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              {' '}
              Number of Two Wheeler parking
            </h4>
          </div>
          <Input
            placeholder='Two Wheeler parking'
            value={homeInfo.numberOfTwoWheelerParking}
            onChange={e =>
              sethomeInfo({
                ...homeInfo,
                numberOfTwoWheelerParking: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 36 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Parking type</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Open'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={homeInfo.ParkingType.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingtype, setparkingtype);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Covered'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={homeInfo.ParkingType.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingtype, setparkingtype);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Automated'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={homeInfo.ParkingType.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingtype, setparkingtype);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={homeInfo.ParkingType.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingtype, setparkingtype);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 37 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              parkingEasyToAccess: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              is Owner's Parking Easily Available?
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='parkingEasyToAccess'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.parkingEasyToAccess === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='parkingEasyToAccess'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.parkingEasyToAccess === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 38 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              highNoiseLevel: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              is noise level High inside Property?{' '}
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='highNoiseLevel'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.highNoiseLevel === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='highNoiseLevel'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.highNoiseLevel === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 39 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              peopleProfession: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              What is the profession of people living in the society ?
            </h4>
          </div>

          <input
            className='ml-2'
            type='radio'
            name='peopleprofessionType'
            value='1'
            onChange={e => {}}
            defaultChecked={homeInfo.peopleProfession === '1'}
          />
          <label className='ml-2'>Working</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='peopleprofessionType'
            value='2'
            onChange={e => {}}
            defaultChecked={homeInfo.peopleProfession === '2'}
          />
          <label className='ml-2'>Self Employed</label>
        </div>
      )}
      {questionCount === 40 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              frequentElderlyActivities: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Are there frequent activities held for elderly people?
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='frequentElderlyActivities'
            value='True'
            onChange={e => {}}
            defaultChecked={homeInfo.frequentElderlyActivities === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='frequentElderlyActivities'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.frequentElderlyActivities === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 41 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              frequentChildrenActivities: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Are there frequent activities held for small children?
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='frequentChildrenActivities'
            value='True'
            onChange={e => {}}
            defaultChecked={homeInfo.frequentChildrenActivities === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='frequentChildrenActivities'
            value=''
            onChange={e => {}}
            defaultChecked={homeInfo.frequentChildrenActivities === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
         { check && <p className='text-red-500'>Required Question </p>}
    </div>
  );
};

export default HomeInfo;
{
  /* {questionCount === 18 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              livingRoomFlooring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Flooring Type(Living room)
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='LivingroomFloor'
            value='1'
            onChange={e => {}}
            checked={homeInfo.livingRoomFlooring === '1'}
          />
          <label className='ml-2'>Vitrified / Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='LivingroomFloor'
            value='2'
            onChange={e => {}}
            checked={homeInfo.livingRoomFlooring === '2'}
          />
          <label className='ml-2'>Stoned FLooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='LivingroomFloor'
            value='3'
            onChange={e => {}}
            checked={homeInfo.livingRoomFlooring === '3'}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='LivingroomFloor'
            value='4'
            onChange={e => {}}
            checked={homeInfo.livingRoomFlooring === '4'}
          />
          <label className='ml-2'>PVC</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='LivingroomFloor'
            value='5'
            onChange={e => {}}
            checked={homeInfo.livingRoomFlooring === '5'}
          />
          <label className='ml-2'>Cement /IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='LivingroomFloor'
            value='6'
            onChange={e => {}}
            checked={homeInfo.livingRoomFlooring === '6'}
          />
          <label className='ml-2'>Artificial Lawn</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='LivingroomFloor'
            value='7'
            onChange={e => {}}
            checked={homeInfo.livingRoomFlooring === '7'}
          />
          <label className='ml-2'>Fabric Carpet</label>
        </div>
      )}
      {questionCount === 19 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              kitchenFlooring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Flooring Type(Kitchen)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='KitchenFloor'
            value='1'
            onChange={e => {}}
            checked={homeInfo.kitchenFlooring === '1'}
          />
          <label className='ml-2'>Vitrified / Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenFloor'
            value='2'
            onChange={e => {}}
            checked={homeInfo.kitchenFlooring === '2'}
          />
          <label className='ml-2'>Stoned FLooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenFloor'
            value='3'
            onChange={e => {}}
            checked={homeInfo.kitchenFlooring === '3'}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenFloor'
            value='4'
            onChange={e => {}}
            checked={homeInfo.kitchenFlooring === '4'}
          />
          <label className='ml-2'>PVC</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenFloor'
            value='5'
            onChange={e => {}}
            checked={homeInfo.kitchenFlooring === '5'}
          />
          <label className='ml-2'>Cement /IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenFloor'
            value='6'
            onChange={e => {}}
            checked={homeInfo.kitchenFlooring === '6'}
          />
          <label className='ml-2'>Artificial Lawn</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='KitchenFloor'
            value='7'
            onChange={e => {}}
            checked={homeInfo.kitchenFlooring === '7'}
          />
          <label className='ml-2'>Fabric Carpet</label>
        </div>
      )}
      {questionCount === 20 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              bedroom1Flooring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Flooring Type(Bedroom 1)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroom1Floor'
            value='1'
            onChange={e => {}}
            checked={homeInfo.bedroom1Flooring === '1'}
          />
          <label className='ml-2'>Vitrified / Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Floor'
            value='2'
            onChange={e => {}}
            checked={homeInfo.bedroom1Flooring === '2'}
          />
          <label className='ml-2'>Stoned FLooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Floor'
            value='3'
            onChange={e => {}}
            checked={homeInfo.bedroom1Flooring === '3'}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Floor'
            value='4'
            onChange={e => {}}
            checked={homeInfo.bedroom1Flooring === '4'}
          />
          <label className='ml-2'>PVC</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Floor'
            value='5'
            onChange={e => {}}
            checked={homeInfo.bedroom1Flooring === '5'}
          />
          <label className='ml-2'>Cement /IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Floor'
            value='6'
            onChange={e => {}}
            checked={homeInfo.bedroom1Flooring === '6'}
          />
          <label className='ml-2'>Artificial Lawn</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom1Floor'
            value='7'
            onChange={e => {}}
            checked={homeInfo.bedroom1Flooring === '7'}
          />
          <label className='ml-2'>Fabric Carpet</label>
        </div>
      )}
      {questionCount === 21 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              bedroom2Flooring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Flooring Type(Bedroom 2)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='bedroom2Floor'
            value='1'
            onChange={e => {}}
            checked={homeInfo.bedroom2Flooring === '1'}
          />
          <label className='ml-2'>Vitrified / Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Floor'
            value='2'
            onChange={e => {}}
            checked={homeInfo.bedroom2Flooring === '2'}
          />
          <label className='ml-2'>Stoned FLooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Floor'
            value='3'
            onChange={e => {}}
            checked={homeInfo.bedroom2Flooring === '3'}
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Floor'
            value='4'
            onChange={e => {}}
            checked={homeInfo.bedroom2Flooring === '4'}
          />
          <label className='ml-2'>PVC</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Floor'
            value='5'
            onChange={e => {}}
            checked={homeInfo.bedroom2Flooring === '5'}
          />
          <label className='ml-2'>Cement /IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Floor'
            value='6'
            onChange={e => {}}
            checked={homeInfo.bedroom2Flooring === '6'}
          />
          <label className='ml-2'>Artificial Lawn</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='bedroom2Floor'
            value='7'
            onChange={e => {}}
            checked={homeInfo.bedroom2Flooring === '7'}
          />
          <label className='ml-2'>Fabric Carpet</label>
        </div>
      )}
      {questionCount === 22 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              washroomFlooring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Flooring Type(Washroom)</h4>
          </div>

          <input type='radio' className='ml-2' name='washroomFloor' value='1' />
          <label className='ml-2'>Vitrified / Ceramic Tile</label>
          <br />
          <input className='ml-2' type='radio' name='washroomFloor' value='2' />
          <label className='ml-2'>Stoned FLooring</label>
          <br />
          <input className='ml-2' type='radio' name='washroomFloor' value='3' />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input className='ml-2' type='radio' name='washroomFloor' value='4' />
          <label className='ml-2'>PVC</label>
          <br />
          <input className='ml-2' type='radio' name='washroomFloor' value='5' />
          <label className='ml-2'>Cement /IPS</label>
          <br />
          <input className='ml-2' type='radio' name='washroomFloor' value='6' />
          <label className='ml-2'>Artificial Lawn</label>
          <br />
          <input className='ml-2' type='radio' name='washroomFloor' value='7' />
          <label className='ml-2'>Fabric Carpet</label>
        </div>
      )}
      {questionCount === 23 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              lobbyFlooring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Flooring Type(lobby)</h4>
          </div>

          <input type='radio' className='ml-2' name='lobbyFloor' value='1' />
          <label className='ml-2'>Vitrified / Ceramic Tile</label>
          <br />
          <input className='ml-2' type='radio' name='lobbyFloor' value='2' />
          <label className='ml-2'>Stoned FLooring</label>
          <br />
          <input className='ml-2' type='radio' name='lobbyFloor' value='3' />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input className='ml-2' type='radio' name='lobbyFloor' value='4' />
          <label className='ml-2'>PVC</label>
          <br />
          <input className='ml-2' type='radio' name='lobbyFloor' value='5' />
          <label className='ml-2'>Cement /IPS</label>
          <br />
          <input className='ml-2' type='radio' name='lobbyFloor' value='6' />
          <label className='ml-2'>Artificial Lawn</label>
          <br />
          <input className='ml-2' type='radio' name='lobbyFloor' value='7' />
          <label className='ml-2'>Fabric Carpet</label>
        </div>
      )}
      {questionCount === 24 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              balconyFlooring: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Flooring Type(Balcony)</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='balconyFlooring'
            value='1'
          />
          <label className='ml-2'>Vitrified / Ceramic Tile</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='balconyFlooring'
            value='2'
          />
          <label className='ml-2'>Stoned FLooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='balconyFlooring'
            value='3'
          />
          <label className='ml-2'>Wooden Flooring</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='balconyFlooring'
            value='4'
          />
          <label className='ml-2'>PVC</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='balconyFlooring'
            value='5'
          />
          <label className='ml-2'>Cement /IPS</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='balconyFlooring'
            value='6'
          />
          <label className='ml-2'>Artificial Lawn</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='balconyFlooring'
            value='7'
          />
          <label className='ml-2'>Fabric Carpet</label>
        </div>
      )} */
}

{
  /* {questionCount === 43 && (
        <div
          className='question '
          onChange={e =>
            sethomeInfo({
              ...homeInfo,
              parkingType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10  font-semibold text-xl text-sky-700 '>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Type of parking </h4>
          </div>

          <input type='radio' className='ml-2' name='parkingType' value='1' />
          <label className='ml-2'></label>
          <br />
          <input className='ml-2' type='radio' name='parkingType' value='2' />
          <label className='ml-2'></label>
          <br />
          <input className='ml-2' type='radio' name='parkingType' value='3' />
          <label className='ml-2'></label>
          <br />
          <input className='ml-2' type='radio' name='parkingType' value='4' />
          <label className='ml-2'></label>
        </div>
      )} */
}
