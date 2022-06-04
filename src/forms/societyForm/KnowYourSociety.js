import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const KnowYourSociety = ({
  questionCount,
  setKnowYourSocietyInfo,
  KnowYourSocietyInfo,
  
  check
}) => {
  const [commercialEntities, setCommercialEntities] = useState('');
  const [parkingType, setParkingtype] = useState('');
  const [lift, setlift] = useState('');
  const [playground, setPlayrground] = useState('');
  const [swimmingpool, setswimmingpool] = useState('');
  const [amenities, setAmenities] = useState('');
  const [securityService, setSecurityService] = useState('');
  const [fire, setFire] = useState('');
  const [eating, setEating] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [funcs, setFuncs] = useState('');
  const [meeting, setMeeting] = useState('');
  const [members, setMembers] = useState('');
  

  const handleCheckboxChange = (event, state, setState) => {
    console.log(+event.target.value);
    const newNames = state?.includes(+event.target.value)
      ? state?.filter(name => name !== +event.target.value)
      : [...(state ?? []), +event.target.value];
    setState(newNames);
  };

  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      ParkingType: parkingType,
    }));
  }, [parkingType]);

  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      CommercialEntity: commercialEntities,
    }));
  }, [commercialEntities]);

  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({ ...prevState, Lift: lift }));
  }, [lift]);

  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      PlayGroundtype: playground,
    }));
  }, [playground]);

  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      SwimmingPoolType: swimmingpool,
    }));
  }, [swimmingpool]);
  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      otherAmenities: amenities,
    }));
  }, [amenities]);

  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      FireFightingSystem: fire,
    }));
  }, [fire]);
  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      SecurityService: securityService,
    }));
  }, [securityService]);
  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      EatingHabitsAllowed: eating,
    }));
  }, [eating]);
  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      MajorityAgeGroup: ageGroup,
    }));
  }, [ageGroup]);
  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      MembersAllowed: members,
    }));
  }, [members]);
  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({ 
      ...prevState, Celebration: funcs ,
    }));
  }, [funcs]);
  useEffect(() => {
    setKnowYourSocietyInfo(prevState => ({
      ...prevState,
      SocietyMeetings: meeting,
    }));
  }, [meeting]);

  return (
    <div className=''>
       { questionCount === 1 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Kitne rooms(Flats) Available hai Society Mein ?
            </h4>
          </div>

          <Input
          variant="standard"
          placeholder='Flats Available in number'
          value={KnowYourSocietyInfo.FlatsAvailable}
          onChange={e =>{
          
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              FlatsAvailable: e.target.value,
            }) 
         
           

          }}
          fullWidth
          type='number'
          />
        </div>
      )}
      {questionCount === 2 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Kitne Floor ki building hai
            </h4>
          </div>

          <Input
            placeholder='8'
            value={KnowYourSocietyInfo.Floor}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                Floor: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 3 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Famous Landmarks</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.Landmarks}
            onChange={e =>{
              setKnowYourSocietyInfo({...KnowYourSocietyInfo,Landmarks: e.target.value,})

            }}
            required
            fullWidth
          />
        </div>
      )}
      {questionCount === 4 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.buildingtype}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              buildingtype: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Society Type Kaisi hai?</h4>
          </div>
          {/* <p>Type of Society</p> */}
          <input
            type='radio'
            className='ml-2'
            name='township'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.buildingtype === '1'}
          />
          <label className='ml-2'>Multiple wings(High Rise)</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='township'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.buildingtype === '2'}
          />
          <label className='ml-2'>Single structure building(High Rise)</label>{' '}
          <br />
          <input
            className='ml-2'
            type='radio'
            name='township'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.buildingtype === '3'}
          />
          <label className='ml-2'>Multiple wings(Low rise)</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='township'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.buildingtype === '4'}
          />
          <label className='ml-2'>Single structure building(Low rise)</label>{' '}
        </div>
      )}
      {questionCount === 5 && (
        <div
          className='question '
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              ParkingType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Parking Kis Type ki hai</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Podium Parking'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.ParkingType?.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingType, setParkingtype);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Basement'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.ParkingType?.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingType, setParkingtype);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='with stilt'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.ParkingType?.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingType, setParkingtype);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.ParkingType?.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingType, setParkingtype);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
 
        </div>
      )}
      {questionCount === 6 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.amenitieArea}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              amenitieArea: Number(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Amenities kahan par hai</h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='subtype'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.amenitieArea === 1}
          />
          <label className='ml-2'>Podium / Terrace Par</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='subtype'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.amenitieArea === 2}
          />
          <label className='ml-2'>Open Area mein</label>
        </div>
      )}

      {questionCount === 7 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.societyStructure}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              societyStructure: Number(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Society structure</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='societystructure'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.societyStructure === 1}
          />
          <label className='ml-2'>
            Single Structure (Only Residential - No Commercial)
          </label>{' '}
          <br />
          <input
            className='ml-2'
            type='radio'
            name='societystructure'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.societyStructure === 2}
          />
          <label className='ml-2'>
            Small Township (with commercials front mein)
          </label>{' '}
          <br />
          <input
            className='ml-2'
            type='radio'
            name='societystructure'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.societyStructure === 3}
          />
          <label className='ml-2'>
            High Rise Single Structure (Front mein Commercial)
          </label>{' '}
          <br />
          <input
            className='ml-2'
            type='radio'
            name='societystructure'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.societyStructure === 4}
          />
          <label className='ml-2'>Big Township (Only residential)</label> <br />
        </div>
      )}
      {questionCount === 8 && (
        <div className='question ' required>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Kis Type kaa commercials hai society mein
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Retail shop'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.CommercialEntity.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        commercialEntities,
                        setCommercialEntities,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Healthcase'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.CommercialEntity.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        commercialEntities,
                        setCommercialEntities,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hospitality'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.CommercialEntity.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        commercialEntities,
                        setCommercialEntities,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bank'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.CommercialEntity.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        commercialEntities,
                        setCommercialEntities,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Gym'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={KnowYourSocietyInfo.CommercialEntity.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        commercialEntities,
                        setCommercialEntities,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Officies inside Flats'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={KnowYourSocietyInfo.CommercialEntity.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        commercialEntities,
                        setCommercialEntities,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Other'
                control={
                  <Checkbox
                    value='7'
                    defaultChecked={KnowYourSocietyInfo.CommercialEntity.includes(
                      7,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        commercialEntities,
                        setCommercialEntities,
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
                    defaultChecked={KnowYourSocietyInfo.CommercialEntity.includes(
                      8,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        commercialEntities,
                        setCommercialEntities,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {/* amenities and service */}
      {questionCount === 9 && (
        <div
          className='question '

        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Lift</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Common Members Lift'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.Lift.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, lift, setlift);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Service lift'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.Lift.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, lift, setlift);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fire lift'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.Lift.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, lift, setlift);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='No Lift'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.Lift.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, lift, setlift);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 10 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.liftType}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              liftType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Lift Type</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='lifttype'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftType === '1'}
          />
          <label className='ml-2'>Automatic Door</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='lifttype'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftType === '2'}
          />
          <label className='ml-2'>Door + Sliding (Channel gate jaisi)</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='lifttype'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftType === '3'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}
      {questionCount === 11 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.liftCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              liftCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Condition of lift</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='condition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='condition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='condition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount === 12 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Lift Remark</h4>
          </div>
          <Input
            placeholder=''
            value={KnowYourSocietyInfo.liftremark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                liftremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount === 13 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.liftLobby}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              liftLobby: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Lift Lobby Kaisi Dikhti hai (Entrance Par)
            </h4>
          </div>
          <p className='italic font-light text-sm'>Lobby in from of flats</p>
          <input
            type='radio'
            className='ml-2'
            name='lobby'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftLobby === '1'}
          />
          <label className='ml-2'>
            Private Lobby (Members aur servants ke liye)
          </label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='lobby'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftLobby === '2'}
          />
          <label className='ml-2'>
            Common Lobby (Members aur servants ke liye)
          </label>
        </div>
      )}
      {questionCount === 14 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.liftLobbyCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              liftLobbyCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Condition of lift Lobby</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='lobbycondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftLobbyCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='lobbycondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftLobbyCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='lobbycondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.liftLobbyCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount === 15 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Lobby Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.liftlobbyremark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                liftlobbyremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount === 16 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.staircaseCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              staircaseCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Staircase (Siddiyaan) saaf aur achi hai ?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='staircasecondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.staircaseCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='staircasecondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.staircaseCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='staircasecondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.staircaseCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount === 17 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Staircase Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.staircaseremark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                staircaseremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount === 18 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Entrance Lobby Remark</h4>
          </div>
          <Input
            placeholder=''
            value={KnowYourSocietyInfo.entranceLobbyremark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                entranceLobbyremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount === 19 && (
        <div
          className='question '
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              conditionofMeetingRoom: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Society Meeting room ki condition kaisi hai?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='entrancelobbycondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.conditionofMeetingRoom === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='entrancelobbycondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.conditionofMeetingRoom === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='entrancelobbycondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.conditionofMeetingRoom === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='entrancelobbycondition'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.conditionofMeetingRoom === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount === 20 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Meeting Room Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.MeetingRoomremark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                MeetingRoomremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount === 21 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.ClubHouseCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              ClubHouseCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Condition - Club House Ki Kaise Hein
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='gymcondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ClubHouseCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='gymcondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ClubHouseCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='gymcondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ClubHouseCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='gymcondition'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ClubHouseCondition === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount === 22 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Club House Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.ClubHouseremark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                ClubHouseremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount === 23 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.PlayGroundtype}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              PlayGroundtype: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              PLAY GROUND - Kon Kon Se hai?
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Kids Play Area'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.PlayGroundtype.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, playground, setPlayrground);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Toddlers Play area'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.PlayGroundtype.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, playground, setPlayrground);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Party Lawn'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.PlayGroundtype.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, playground, setPlayrground);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Adult Play Area'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.PlayGroundtype.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, playground, setPlayrground);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Yoga Lawn'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={KnowYourSocietyInfo.PlayGroundtype.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, playground, setPlayrground);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Other'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={KnowYourSocietyInfo.PlayGroundtype.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, playground, setPlayrground);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='7'
                    defaultChecked={KnowYourSocietyInfo.PlayGroundtype.includes(
                      7,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, playground, setPlayrground);
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
          value={KnowYourSocietyInfo.PlayGroundCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              PlayGroundCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Condition of Play Ground</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='playGroundcondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.PlayGroundCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='playGroundcondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.PlayGroundCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='playGroundcondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.PlayGroundCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount === 25 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Play Ground Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.PlayGroundremark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                PlayGroundremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount === 26 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.SwimmingPoolType}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              SwimmingPoolType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Swimming Pool</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Lap Pool '
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.SwimmingPoolType.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, swimmingpool, setswimmingpool);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Kids Pool'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.SwimmingPoolType.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, swimmingpool, setswimmingpool);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.SwimmingPoolType.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, swimmingpool, setswimmingpool);
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
          value={KnowYourSocietyInfo.SwimmingPoolConditiion}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              SwimmingPoolConditiion: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Condition of Swimming Pool
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='SwimmingPoolcondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.SwimmingPoolConditiion === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='SwimmingPoolcondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.SwimmingPoolConditiion === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='SwimmingPoolcondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.SwimmingPoolConditiion === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='SwimmingPoolcondition'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.SwimmingPoolConditiion === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 28 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Swimming Pool Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.SwimmingPoolRemark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                SwimmingPoolRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount === 29 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.JoggingTrackCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              JoggingTrackCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Jogging Track -Condition</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='JoggingTrackcondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.JoggingTrackCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='JoggingTrackcondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.JoggingTrackCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='JoggingTrackcondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.JoggingTrackCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='JoggingTrackcondition'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.JoggingTrackCondition === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount === 30 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Jogging Track Remark</h4>
          </div>
          <Input
            placeholder=''
            value={KnowYourSocietyInfo.JoggingTrackRemark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                JoggingTrackRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount === 31 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.ElectricitySupplier}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              ElectricitySupplier: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Electricity Supplier kon Hai
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='electricitysupplier'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ElectricitySupplier === '1'}
          />
          <label className='ml-2'>Government</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='electricitysupplier'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ElectricitySupplier === '2'}
          />
          <label className='ml-2'>Private</label>
        </div>
      )}

      {questionCount === 32 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.ReflexologyCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              ReflexologyCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Condition - Jogging, Walking Ke floor ki kaisi hai ?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='Reflexologycondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ReflexologyCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Reflexologycondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ReflexologyCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Reflexologycondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ReflexologyCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Reflexologycondition'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ReflexologyCondition === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}
      {questionCount === 33 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Jogging, Walking Ke Remark
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.ReflexologyRemark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                ReflexologyRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount === 34 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.CycleTrackCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              CycleTrackCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Cycle Track - Condition</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='CycleTrackcondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CycleTrackCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='CycleTrackcondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CycleTrackCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='CycleTrackcondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CycleTrackCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='CycleTrackcondition'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CycleTrackCondition === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount === 35 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Cycle Track Remark</h4>
          </div>
          <Input
            placeholder=''
            value={KnowYourSocietyInfo.CycleTrackRemark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                CycleTrackRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount === 36 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.Greenary}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              Greenary: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Society - Green (Trees and Plants) hai
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='Greenary'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Greenary === '1'}
          />
          <label className='ml-2'>Bahut and Acche</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Greenary'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Greenary === '2'}
          />
          <label className='ml-2'>Thik Thak</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Greenary'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Greenary === '3'}
          />
          <label className='ml-2'>Bahut Kam</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Greenary'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Greenary === '4'}
          />
          <label className='ml-2'>N/A</label>
          <br />
        </div>
      )}

      {/* {  questionCount === 36 &&   <div
            className="question "
                 value={KnowYourSocietyInfo.PublicAreaLightingCondition}
              onChange={(e) =>
                setKnowYourSocietyInfo({
                  ...KnowYourSocietyInfo,
                  PublicAreaLightingCondition: e.target.value,
                })
              }
            required
          >
            <h4 className="font-semibold text-lg">Public Area Lighting</h4>
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLighting"
              value="For Public Area Lighting"
            />
            <label className="ml-2" >For Public Area Lighting</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLighting"
              value="For Semi Public Area Lighting"
            />
            <label className="ml-2" >For Semi Public Area Lighting</label>
            <br />
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLighting"
              value="For Personal Home Use"
            />
            <label className="ml-2" >For Personal Home Use</label> <br />
            <input
            className="ml-2"
              type="radio"
              name="PublicAreaLighting"
              value="For Water Heating"
            />
            <label className="ml-2" >For Water Heating</label>
            <br />
          </div>} */}

      {questionCount === 37 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.PublicAreaLightingCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              PublicAreaLightingCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Society ke andar aur aas pass lighting kaisi hai ?
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='PublicAreaLightingcondition'
            value='1'
            onChange={e => {}}
            defaultChecked={
              KnowYourSocietyInfo.PublicAreaLightingCondition === '1'
            }
          />
          <label className='ml-2'>Good</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='PublicAreaLightingcondition'
            value='2'
            onChange={e => {}}
            defaultChecked={
              KnowYourSocietyInfo.PublicAreaLightingCondition === '2'
            }
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='PublicAreaLightingcondition'
            value='3'
            onChange={e => {}}
            defaultChecked={
              KnowYourSocietyInfo.PublicAreaLightingCondition === '3'
            }
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='PublicAreaLightingcondition'
            value='4'
            onChange={e => {}}
            defaultChecked={
              KnowYourSocietyInfo.PublicAreaLightingCondition === '4'
            }
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 38 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Public Area Lighting Remark
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.PublicAreaLightingRemark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                PublicAreaLightingRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount === 39 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.gymCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              gymCondition: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Society ke andar aur aas pass lighting kaisi hai ?
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='Gymcondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.gymCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='Gymcondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.gymCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='Gymcondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.gymCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='Gymcondition'
            value='4'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.gymCondition === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount === 40 && (
        <div className='question ' required>
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Other Amenities</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Rain Water Harvesting'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.otherAmenities.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, amenities, setAmenities);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Ground Water Recharge'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.otherAmenities.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, amenities, setAmenities);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Water Treatment Plant'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.otherAmenities.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, amenities, setAmenities);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Wifi Lounge'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.otherAmenities.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, amenities, setAmenities);
                    }}
                  />
                }
              />
              {/* <FormControlLabel
                label="Gym"
                control={
                  <Checkbox
                    value="5"
                    onChange={(e) => {
                      handleCheckboxChange(e, amenities, setAmenities);
                    }}
                  />
                }
              /> */}
              <FormControlLabel
                label='Solar Plant'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={KnowYourSocietyInfo.otherAmenities.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(e, amenities, setAmenities);
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Power Backup'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={KnowYourSocietyInfo.otherAmenities.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(e, amenities, setAmenities);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 41 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.otherAmenitiesCondition}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              otherAmenitiesCondition: e.target.value,
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Condition of Other Amenities
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='OtherAmenitiescondition'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.otherAmenitiesCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='OtherAmenitiescondition'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.otherAmenitiesCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='OtherAmenitiescondition'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.otherAmenitiesCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount === 42 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Other Amenities Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.otherAmenitiesRemark}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                otherAmenitiesRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      
      {questionCount === 43 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.DailyWasteCollecion}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              DailyWasteCollecion: e.target.value,
            })
          }
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Ghar ke kachre ki safai kaise hoti hai ?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='DailyWasteCollecion'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.DailyWasteCollecion === '1'}
          />
          <label className='ml-2'>Ghar ke bahar se pick up </label> <br />
          <input
            className='ml-2'
            type='radio'
            name='DailyWasteCollecion'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.DailyWasteCollecion === '2'}
          />
          <label className='ml-2'>
            Society ke common dustbin mein (flat member) ko aana padta hai
          </label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='DailyWasteCollecion'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.DailyWasteCollecion === '3'}
          />
          <label className='ml-2'>Other</label>
        </div>
      )}

      
      {questionCount === 44 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.WaterStoargeFacility}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              WaterStoargeFacility: e.target.value,
            })
          }
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Water Storage Facility Kis type ki hai
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='WaterStoargeFacility'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.WaterStoargeFacility === '1'}
          />
          <label className='ml-2'>UnderGround Tank</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='WaterStoargeFacility'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.WaterStoargeFacility === '2'}
          />
          <label className='ml-2'>OverHead Tank</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='WaterStoargeFacility'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.WaterStoargeFacility === '3'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount === 45 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.SatelliteTV}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              SatelliteTV: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Common satellite TV facilities
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='SatelliteTV'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.SatelliteTV === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='SatelliteTV'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.SatelliteTV === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 46 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Facility Management - Koi acchi agency sambhatli hai ya aise hi
              security guard hai?
            </h4>
          </div>

          <p className='italic font-light text-sm'>
            Write name of agency if yes else mention NA
          </p>
          <Input
            placeholder=''
            value={KnowYourSocietyInfo.Agency}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                Agency: e.target.value,
              })
            }
            fullWidth
          />
        </div>
      )}

      {questionCount === 47 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.InsideFlat}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              InsideFlat: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Inside Flat Without Security Allowed hai
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='InsideFlat'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.InsideFlat === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='InsideFlat'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.InsideFlat === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 48 && (
        <div className='question '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Fire Fighting System in Society
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Sprinklers System'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.FireFightingSystem.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, fire, setFire);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Smoke Detection'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.FireFightingSystem.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, fire, setFire);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fire Detection'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.FireFightingSystem.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, fire, setFire);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fire Extinguishers'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.FireFightingSystem.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, fire, setFire);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fire Hydrants'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={KnowYourSocietyInfo.FireFightingSystem.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(e, fire, setFire);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Fire Breaching Point (To Connect fire Fighting truck Supply)'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={KnowYourSocietyInfo.FireFightingSystem.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(e, fire, setFire);
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Lightening Arrestors'
                control={
                  <Checkbox
                    value='7'
                    defaultChecked={KnowYourSocietyInfo.FireFightingSystem.includes(7)}
                    onChange={e => {
                      handleCheckboxChange(e, fire, setFire);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='NA'
                control={
                  <Checkbox
                    value='8'
                    defaultChecked={KnowYourSocietyInfo.FireFightingSystem.includes(8)}
                    onChange={e => {
                      handleCheckboxChange(e, fire, setFire);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 49 && (
        <div className='question ' value={KnowYourSocietyInfo.SecurityService}>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Security Service</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Physical Security'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.SecurityService.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        securityService,
                        setSecurityService,
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
                    defaultChecked={KnowYourSocietyInfo.SecurityService.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        securityService,
                        setSecurityService,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Intercom'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.SecurityService.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        securityService,
                        setSecurityService,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Anti Theft Alarm'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.SecurityService.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        securityService,
                        setSecurityService,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Metal Detection Screening'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={KnowYourSocietyInfo.SecurityService.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        securityService,
                        setSecurityService,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Temperature Screening'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={KnowYourSocietyInfo.SecurityService.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        securityService,
                        setSecurityService,
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
          value={KnowYourSocietyInfo.GuardAtLobby}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              GuardAtLobby: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Kya security guards society gate ke entrance aur reception/lift
              lobby dono jagah par khade hai?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='GuardAtLobby'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.GuardAtLobby === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='GuardAtLobby'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.GuardAtLobby === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 51 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.NonMemberDeliveryboy}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              NonMemberDeliveryboy: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Non-members delivery boy aaraam se aate hein ... kei members ki
              permission chahihye
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='NonMemberDeliveryboy'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.NonMemberDeliveryboy === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='NonMemberDeliveryboy'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.NonMemberDeliveryboy === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 52 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.EatingHabitsAllowed}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              EatingHabitsAllowed: e.target.value,
            })
          }
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Kis Eating type ke members allowed hai?
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Veg'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.EatingHabitsAllowed.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, eating, setEating);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Non Veg'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.EatingHabitsAllowed.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, eating, setEating);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 53 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.MajorityAgeGroup}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              MajorityAgeGroup: e.target.value,
            })
          }
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Konsi age group ke members sab se jyada hai(Select Top 2)
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Small Children (Less then 13)'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.MajorityAgeGroup.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, ageGroup, setAgeGroup);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Teenagers(13- 19)'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.MajorityAgeGroup.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, ageGroup, setAgeGroup);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Young Adults(20-30)'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.MajorityAgeGroup.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, ageGroup, setAgeGroup);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Adults(30-55)'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.MajorityAgeGroup.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, ageGroup, setAgeGroup);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Old(55+)'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={KnowYourSocietyInfo.MajorityAgeGroup.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, ageGroup, setAgeGroup);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 54 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.MembersAllowed}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              MembersAllowed: e.target.value,
            })
          }
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Kaun Kaun reh sakta hai</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Bachelors '
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.MembersAllowed.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, members, setMembers);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Family'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.MembersAllowed.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, members, setMembers);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='foreign Nationals'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.MembersAllowed.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, members, setMembers);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 55 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.MajorityMemberType}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              MajorityMemberType: e.target.value,
            })
          }
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Majority Member Type</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='MajorityMemberType'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.MajorityMemberType === '1'}
          />
          <label className='ml-2'>Rented</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='MajorityMemberType'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.MajorityMemberType === '2'}
          />
          <label className='ml-2'>Self Owned</label>
        </div>
      )}

      {/* {questionCount === 64 &&  <div
            className="question "
                  value={KnowYourSocietyInfo.NationalityAllowed}
              onChange={(e) =>
                setKnowYourSocietyInfo({
                  ...KnowYourSocietyInfo,
                  NationalityAllowed: e.target.value,
                })
              }
          >
            <h4 className="font-semibold text-lg">
              Nationality Allowed in Society
            </h4>
            <input type="radio" className="ml-2" name="NationalityAllowed" value="Indian" />
            <label className="ml-2" >Indian</label> <br />
            <input type="radio" className="ml-2" name="NationalityAllowed" value="Foriegner" />
            <label className="ml-2" >Foriegner</label>
            <br />
            <input type="radio" className="ml-2" name="NationalityAllowed" value="Both" />
            <label className="ml-2" >Both</label>
          </div>} */}

      {questionCount === 56 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.BatchlorsAllowed}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              BatchlorsAllowed: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Bachelor allowed hai ke nahin
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='BatchlorsAllowed'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.BatchlorsAllowed === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='BatchlorsAllowed'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.BatchlorsAllowed === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {/* { questionCount === 66 && <div
            className="question "
                  value={KnowYourSocietyInfo.nonMarriedAllowed}
              onChange={(e) =>
                setKnowYourSocietyInfo({
                  ...KnowYourSocietyInfo,
                  nonMarriedAllowed: e.target.value,
                })
              }
            required
          >
            <h4 className="font-semibold text-lg">
              Non married couples are allowed to stay on rent in Society
            </h4>
            <input type="radio" className="ml-2" name="nonMarried" value="Yes" />
            <label className="ml-2" >Yes</label> <br />
            <input type="radio" className="ml-2" name="nonMarried" value="" />
            <label className="ml-2" >No</label>
          </div>} */}
      {questionCount === 57 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.nonMarriedAllowed}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              nonMarriedAllowed: Boolean(e.target.value),
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Sham ko ladies group banakar kar baate karti hein...kitty party
              hoti hein kya
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='nonMarried'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.nonMarriedAllowed === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='nonMarried'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.nonMarriedAllowed === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 58 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.ChildrenPlayingAround}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              ChildrenPlayingAround: Boolean(e.target.value),
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Children society mein khelte hein daily?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='ChildrenPlayingAround'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ChildrenPlayingAround === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='ChildrenPlayingAround'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ChildrenPlayingAround === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 59 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.CalmMember}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              CalmMember: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Shaant nature ke member jyada hein?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='CalmMember'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CalmMember === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='CalmMember'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CalmMember === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 60 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.ElderPeopleActivity}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              ElderPeopleActivity: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Aged logo ke liye yoga, walking ke liye koi separate area banaya
              hein kya?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='ElderPeopleActivity'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ElderPeopleActivity === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='ElderPeopleActivity'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.ElderPeopleActivity === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 61 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.Celebration}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              Celebration: e.target.value,
            })
          }
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Parties, Functions, societies mein hote hein
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Ganpati Celeb in Society'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Diwali Celeb in Society'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Kite Flying at Terrace'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Holi Celeb.'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Rang panchami Event in Society'
                control={
                  <Checkbox
                    value='5'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Eid Celeb in Society'
                control={
                  <Checkbox
                    value='6'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Republic and Independence day Celeb.'
                control={
                  <Checkbox
                    value='7'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      7,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Christmas Celeb.'
                control={
                  <Checkbox
                    value='8'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      8,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='New Year Celeb.'
                control={
                  <Checkbox
                    value='9'
                    defaultChecked={KnowYourSocietyInfo?.Celebration?.includes(
                      9,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              {/* <FormControlLabel
                label='Other Celeb.'
                control={
                  <Checkbox
                    value='10'
                    defaultChecked={KnowYourSocietyInfo?.Celebrtion?.includes(10)}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              /> */}
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount === 62 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.SocietyMeetings}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              SocietyMeetings: e.target.value,
            })
          }
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Society ka management kitna acchey se kaam karta hein?
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Annual Meeting'
                control={
                  <Checkbox
                    value='1'
                    defaultChecked={KnowYourSocietyInfo.SocietyMeetings.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, meeting, setMeeting);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Quarterly Meeting'
                control={
                  <Checkbox
                    value='2'
                    defaultChecked={KnowYourSocietyInfo.SocietyMeetings.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, meeting, setMeeting);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Monthly Meeting'
                control={
                  <Checkbox
                    value='3'
                    defaultChecked={KnowYourSocietyInfo.SocietyMeetings.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, meeting, setMeeting);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Any Matter(Jaldi se response)'
                control={
                  <Checkbox
                    value='4'
                    defaultChecked={KnowYourSocietyInfo.SocietyMeetings.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, meeting, setMeeting);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount === 63 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.FunctionsAllowed}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              FunctionsAllowed: Boolean(e.target.value),
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Members ko functions karna andar society ke allowed hai ya nahi ?
              (Eg Marriage)
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='FunctionsAllowed'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.FunctionsAllowed === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='FunctionsAllowed'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.FunctionsAllowed === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 64 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.Cleanliness}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              Cleanliness: e.target.value,
            })
          }
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Society / Building clean / clean hein kya ?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='Cleanliness'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Cleanliness === '1'}
          />
          <label className='ml-2'>Bahut clean</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Cleanliness'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Cleanliness === '2'}
          />
          <label className='ml-2'>Thik thak</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Cleanliness'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Cleanliness === '3'}
          />
          <label className='ml-2'>Kharab</label>
        </div>
      )}

      {questionCount === 65 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.CleanlinessMaintained}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              CleanlinessMaintained: e.target.value,
            })
          }
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Society staircase / lift / compound / other internal areas - clean
              hein kya ?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='CleanlinessMaintained'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CleanlinessMaintained === '1'}
          />
          <label className='ml-2'>Bahut clean</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='CleanlinessMaintained'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CleanlinessMaintained === '2'}
          />
          <label className='ml-2'>Thik thak</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='CleanlinessMaintained'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.CleanlinessMaintained === '3'}
          />
          <label className='ml-2'>Kharab</label>
        </div>
      )}

      {questionCount === 66 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.Handymen}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              Handymen: Boolean(e.target.value),
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Servants, maharaaj aasan se mil jaate hein ( Asking from security
              guards etc)
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='Handymen'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Handymen === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Handymen'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Handymen === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 67 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.Ramp}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              Ramp: Boolean(e.target.value),
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Handicap/Elderly friendly facilities like Ramp etc
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='ramp'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Ramp === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='ramp'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Ramp === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 68 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              1 BHK last flat sale - price
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.OneBHK}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                OneBHK: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 69 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              2 BHK last flat sale price
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.TwoBHK}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                TwoBHK: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 70 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              3 BHK last last flat - sale price
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.ThreeBHK}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                ThreeBHK: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}

      {questionCount === 71 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Visitor parking kitni hai ?
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSocietyInfo.Visitor}
            onChange={e =>
              setKnowYourSocietyInfo({
                ...KnowYourSocietyInfo,
                Visitor: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 72 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.Noise}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              Noise: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Noise (traffic, construction) bahut hai society ke andar see?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='noise'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Noise === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='noise'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Noise === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 73 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.StrayDogs}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              StrayDogs: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Stray dogs / animals andar hai kya, society ke?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='straydogs'
            value='Yes'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.StrayDogs === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='straydogs'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.StrayDogs === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount === 74 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.Crack}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              Crack: Boolean(e.target.value),
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Leakages / Cracks society ke building ke uppar?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='crack'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Crack === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='crack'
            value=''
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Crack === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount === 75 && (
        <div
          className='question '
          value={KnowYourSocietyInfo.Deed}
          onChange={e =>
            setKnowYourSocietyInfo({
              ...KnowYourSocietyInfo,
              Deed: e.target.value,
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>OC or BCC approved or not</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='Deed'
            value='1'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Deed === '1'}
          />
          <label className='ml-2'>OC</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Deed'
            value='2'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Deed === '2'}
          />
          <label className='ml-2'>BCC</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Deed'
            value='3'
            onChange={e => {}}
            defaultChecked={KnowYourSocietyInfo.Deed === '3'}
          />
          <label className='ml-2'>Not Approved</label>
        </div>
      )}
      { check && <p className='text-red-500'>Required Question </p>}
    </div>
  );
};

export default KnowYourSociety;
