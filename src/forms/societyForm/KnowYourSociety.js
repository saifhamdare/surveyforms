import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const KnowYourSociety = ({
  questionCount,
  setKnowYourSoceity,
  KnowYourSoceity,
}) => {
  const [commercialEntities, setCommercialEntities] = useState([]);
  const [parkingType, setParkingtype] = useState([]);
  const [lift, setlift] = useState([]);
  const [playground, setPlayrground] = useState([]);
  const [swimmingpool, setlswimmingpool] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [securityService, setSecurityService] = useState([]);
  const [fire, setFire] = useState([]);
  const [eating, setEating] = useState([]);
  const [ageGroup, setAgeGroup] = useState([]);
  const [funcs, setFuncs] = useState([]);
  const [meeting, setMeeting] = useState([]);
  const [members, setMembers] = useState([]);

  const [management, setManagement] = useState([]);

  const handleCheckboxChange = (event, state, setState) => {
    console.log(+event.target.value);
    const newNames = state?.includes(+event.target.value)
      ? state?.filter(name => name !== event.target.value)
      : [...(state ?? []), +event.target.value];
    setState(newNames);
    console.log(state);
  };

  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      ParkingType: parkingType,
    });
  }, [parkingType]);

  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      CommercialEntity: commercialEntities,
    });
  }, [commercialEntities]);

  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      Lift: lift,
    });
  }, [lift]);

  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      PlayGroundtype: playground,
    });
  }, [playground]);

  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      SwimmingPoolType: swimmingpool,
    });
  }, [swimmingpool]);
  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      otherAmenities: amenities,
    });
  }, [amenities]);

  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      FireFightingSystem: fire,
    });
  }, [fire]);
  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      SecurityService: securityService,
    });
  }, [securityService]);
  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      EatingHabitsAllowed: eating,
    });
  }, [eating]);
  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      MajorityAgeGroup: ageGroup,
    });
  }, [ageGroup]);
  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      MembersAllowed: members,
    });
  }, [members]);
  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      Celebration: funcs,
    });
  }, [funcs]);
  useEffect(() => {
    setKnowYourSoceity({
      ...KnowYourSoceity,
      SocietyMeetings: meeting,
    });
  }, [meeting]);

  return (
    <div className='	'>
      {questionCount == 1 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Kitne rooms(Flats) Available hai Society Mein ?
            </h4>
          </div>

          <Input
            placeholder='Flats Available in number'
            value={KnowYourSoceity.FlatsAvailable}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                FlatsAvailable: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount == 2 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Kitne Floor ki building hai
            </h4>
          </div>

          <Input
            placeholder='8'
            value={KnowYourSoceity.Floor}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                Floor: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount == 3 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Famous Landmarks</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.Landmarks}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                Landmarks: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 4 && (
        <div
          className='question '
          value={KnowYourSoceity.buildingtype}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.KnowYourSoceity === '1'}
          />
          <label className='ml-2'>Multiple wings(High Rise)</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='township'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.KnowYourSoceity === '2'}
          />
          <label className='ml-2'>Single structure building(High Rise)</label>{' '}
          <br />
          <input
            className='ml-2'
            type='radio'
            name='township'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.KnowYourSoceity === '3'}
          />
          <label className='ml-2'>Multiple wings(Low rise)</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='township'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.KnowYourSoceity === '4'}
          />
          <label className='ml-2'>Single structure building(Low rise)</label>{' '}
        </div>
      )}
      {questionCount == 5 && (
        <div
          className='question '
          value={KnowYourSoceity.ParkingType}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
                    checked={KnowYourSoceity.parkingType.includes(1)}
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
                    checked={KnowYourSoceity.parkingType.includes(2)}
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
                    checked={KnowYourSoceity.parkingType.includes(3)}
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
                    checked={KnowYourSoceity.parkingType.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, parkingType, setParkingtype);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
          {/* <input type="checkbox" className="ml-2" name="subtype" value="1" onChange={(e) => {console.log(e.target.value)}} />
    
          <label className="ml-2">Podium Parking</label>
          <br />
          <input type="checkbox" className="ml-2" name="subtype" value="2" onChange={(e) => {handleCheckboxChange(e)}} />
          <label className="ml-2">Basement</label> */}
        </div>
      )}
      {questionCount == 6 && (
        <div
          className='question '
          value={KnowYourSoceity.amenitieArea}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
              amenitieArea: e.target.value,
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
            checked={KnowYourSoceity.amenitieArea === '1'}
          />
          <label className='ml-2'>Podium / Terrace Par</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='subtype'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.amenitieArea === '2'}
          />
          <label className='ml-2'>Open Area mein</label>
        </div>
      )}

      {questionCount == 7 && (
        <div
          className='question '
          value={KnowYourSoceity.society_structure}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
              society_structure: Number(e.target.value),
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
            checked={KnowYourSoceity.society_structure === 1}
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
            checked={KnowYourSoceity.society_structure === 2}
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
            checked={KnowYourSoceity.society_structure === 3}
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
            checked={KnowYourSoceity.society_structure === 4}
          />
          <label className='ml-2'>Big Township (Only residential)</label> <br />
        </div>
      )}
      {questionCount == 8 && (
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
                    checked={KnowYourSoceity.commercialEntities.includes(1)}
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
                    checked={KnowYourSoceity.commercialEntities.includes(2)}
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
                    checked={KnowYourSoceity.commercialEntities.includes(3)}
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
                    checked={KnowYourSoceity.commercialEntities.includes(4)}
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
                    checked={KnowYourSoceity.commercialEntities.includes(5)}
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
                    checked={KnowYourSoceity.commercialEntities.includes(6)}
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
                    checked={KnowYourSoceity.commercialEntities.includes(7)}
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
                    checked={KnowYourSoceity.commercialEntities.includes(8)}
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
      {questionCount == 9 && (
        <div
          className='question '
          value={KnowYourSoceity.lift}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
              lift: e.target.value,
            })
          }
          required
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
                    checked={KnowYourSoceity.lift.includes(1)}
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
                    checked={KnowYourSoceity.lift.includes(2)}
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
                    checked={KnowYourSoceity.lift.includes(3)}
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
                    checked={KnowYourSoceity.lift.includes(4)}
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
      {questionCount == 10 && (
        <div
          className='question '
          value={KnowYourSoceity.liftType}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.liftType === '1'}
          />
          <label className='ml-2'>Automatic Door</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='lifttype'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.liftType === '2'}
          />
          <label className='ml-2'>Door + Sliding (Channel gate jaisi)</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='lifttype'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.liftType === '3'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}
      {questionCount == 11 && (
        <div
          className='question '
          value={KnowYourSoceity.liftCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.liftCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='condition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.liftCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='condition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.liftCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount == 12 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Lift Remark</h4>
          </div>
          <Input
            placeholder=''
            value={KnowYourSoceity.liftremark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                liftremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 13 && (
        <div
          className='question '
          value={KnowYourSoceity.liftLobby}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.liftLobby === '1'}
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
            checked={KnowYourSoceity.liftLobby === '2'}
          />
          <label className='ml-2'>
            Common Lobby (Members aur servants ke liye)
          </label>
        </div>
      )}
      {questionCount == 14 && (
        <div
          className='question '
          value={KnowYourSoceity.liftLobbyCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.liftLobbyCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='lobbycondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.liftLobbyCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='lobbycondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.liftLobbyCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount == 15 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Lobby Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.liftlobbyremark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                liftlobbyremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 16 && (
        <div
          className='question '
          value={KnowYourSoceity.staircaseCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.staircaseCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='staircasecondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.staircaseCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='staircasecondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.staircaseCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount == 17 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Staircase Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.staircaseremark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                staircaseremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 18 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Entrance Lobby Remark</h4>
          </div>
          <Input
            placeholder=''
            value={KnowYourSoceity.entranceLobbyremark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                entranceLobbyremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 19 && (
        <div
          className='question '
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.conditionofMeetingRoom === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='entrancelobbycondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.conditionofMeetingRoom === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='entrancelobbycondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.conditionofMeetingRoom === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='entrancelobbycondition'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.conditionofMeetingRoom === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount == 20 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Meeting Room Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.MeetingRoomremark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                MeetingRoomremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 21 && (
        <div
          className='question '
          value={KnowYourSoceity.ClubHouseCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.ClubHouseCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='gymcondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.ClubHouseCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='gymcondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.ClubHouseCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='gymcondition'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.ClubHouseCondition === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount == 22 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Club House Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.ClubHouseremark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                ClubHouseremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 23 && (
        <div
          className='question '
          value={KnowYourSoceity.PlayGroundtype}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
                    checked={KnowYourSoceity.PlayGroundtype.includes(1)}
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
                    checked={KnowYourSoceity.PlayGroundtype.includes(2)}
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
                    checked={KnowYourSoceity.PlayGroundtype.includes(3)}
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
                    checked={KnowYourSoceity.PlayGroundtype.includes(4)}
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
                    checked={KnowYourSoceity.PlayGroundtype.includes(5)}
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
                    checked={KnowYourSoceity.PlayGroundtype.includes(6)}
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
                    checked={KnowYourSoceity.PlayGroundtype.includes(7)}
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

      {questionCount == 24 && (
        <div
          className='question '
          value={KnowYourSoceity.PlayGroundCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.PlayGroundCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='playGroundcondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.PlayGroundCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='playGroundcondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.PlayGroundCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount == 25 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Play Ground Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.PlayGroundremark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                PlayGroundremark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 26 && (
        <div
          className='question '
          value={KnowYourSoceity.SwimmingPoolType}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
                    checked={KnowYourSoceity.SwimmingPoolType.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, swimmingpool, setlswimmingpool);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Kids Pool'
                control={
                  <Checkbox
                    value='2'
                    checked={KnowYourSoceity.SwimmingPoolType.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, swimmingpool, setlswimmingpool);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='3'
                    checked={KnowYourSoceity.SwimmingPoolType.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, swimmingpool, setlswimmingpool);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount == 27 && (
        <div
          className='question '
          value={KnowYourSoceity.SwimmingPoolConditiion}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.SwimmingPoolConditiion === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='SwimmingPoolcondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.SwimmingPoolConditiion === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='SwimmingPoolcondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.SwimmingPoolConditiion === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='SwimmingPoolcondition'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.SwimmingPoolConditiion === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount == 28 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Swimming Pool Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.SwimmingPoolRemark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                SwimmingPoolRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 29 && (
        <div
          className='question '
          value={KnowYourSoceity.JoggingTrackCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.JoggingTrackCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='JoggingTrackcondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.JoggingTrackCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='JoggingTrackcondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.JoggingTrackCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='JoggingTrackcondition'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.JoggingTrackCondition === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount == 30 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Jogging Track Remark</h4>
          </div>
          <Input
            placeholder=''
            value={KnowYourSoceity.JoggingTrackRemark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                JoggingTrackRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 31 && (
        <div
          className='question '
          value={KnowYourSoceity.ElectricitySupplier}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.ElectricitySupplier === '1'}
          />
          <label className='ml-2'>Government</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='electricitysupplier'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.ElectricitySupplier === '2'}
          />
          <label className='ml-2'>Private</label>
        </div>
      )}

      {questionCount == 32 && (
        <div
          className='question '
          value={KnowYourSoceity.ReflexologyCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.ReflexologyCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Reflexologycondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.ReflexologyCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Reflexologycondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.ReflexologyCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Reflexologycondition'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.ReflexologyCondition === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}
      {questionCount == 33 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Jogging, Walking Ke Remark
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.ReflexologyRemark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                ReflexologyRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 34 && (
        <div
          className='question '
          value={KnowYourSoceity.CycleTrackCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.CycleTrackCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='CycleTrackcondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.CycleTrackCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='CycleTrackcondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.CycleTrackCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='CycleTrackcondition'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.CycleTrackCondition === '4'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount == 35 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Cycle Track Remark</h4>
          </div>
          <Input
            placeholder=''
            value={KnowYourSoceity.CycleTrackRemark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                CycleTrackRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 36 && (
        <div
          className='question '
          value={KnowYourSoceity.Greenary}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.Greenary === '1'}
          />
          <label className='ml-2'>Bahut and Acche</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Greenary'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.Greenary === '2'}
          />
          <label className='ml-2'>Thik Thak</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Greenary'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.Greenary === '3'}
          />
          <label className='ml-2'>Bahut Kam</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Greenary'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.Greenary === '4'}
          />
          <label className='ml-2'>N/A</label>
          <br />
        </div>
      )}

      {/* {  questionCount == 36 &&   <div
            className="question "
                 value={KnowYourSoceity.PublicAreaLightingCondition}
              onChange={(e) =>
                setKnowYourSoceity({
                  ...KnowYourSoceity,
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

      {questionCount == 37 && (
        <div
          className='question '
          value={KnowYourSoceity.PublicAreaLightingCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.PublicAreaLightingCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='PublicAreaLightingcondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.PublicAreaLightingCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='PublicAreaLightingcondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.PublicAreaLightingCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='PublicAreaLightingcondition'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.PublicAreaLightingCondition === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount == 38 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Public Area Lighting Remark
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.PublicAreaLightingRemark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                PublicAreaLightingRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 39 && (
        <div
          className='question '
          value={KnowYourSoceity.gymCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.gymCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='Gymcondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.gymCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='Gymcondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.gymCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='Gymcondition'
            value='4'
            onChange={e => {}}
            checked={KnowYourSoceity.gymCondition === '4'}
          />
          <label className='ml-2'>NA</label>
        </div>
      )}
      {questionCount == 39 && (
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
                    checked={KnowYourSoceity.amenities.includes(1)}
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
                    checked={KnowYourSoceity.amenities.includes(2)}
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
                    checked={KnowYourSoceity.amenities.includes(3)}
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
                    checked={KnowYourSoceity.amenities.includes(4)}
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
                    checked={KnowYourSoceity.amenities.includes(5)}
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
                    checked={KnowYourSoceity.amenities.includes(6)}
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

      {questionCount == 40 && (
        <div
          className='question '
          value={KnowYourSoceity.otherAmenitiesCondition}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.otherAmenitiesCondition === '1'}
          />
          <label className='ml-2'>Good</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='OtherAmenitiescondition'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.otherAmenitiesCondition === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='OtherAmenitiescondition'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.otherAmenitiesCondition === '3'}
          />
          <label className='ml-2'>Bad</label>
        </div>
      )}

      {questionCount == 41 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Other Amenities Remark</h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.otherAmenitiesRemark}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                otherAmenitiesRemark: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {/* {questionCount == 42 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Photo upload of lift</h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                liftphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 43 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              {" "}
              Photo upload of lift Lobby
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                liftlobbyphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 44 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Photo upload of staircase</h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                staircasephoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 45 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of entrance Lobby
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                entrancelobbyephoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 46 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of Society Meeting room
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                MeetingRoomphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 47 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of ClubHouse(Gym)
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                ClubHousephoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 48 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of PlayGround
            </h4>
          </div>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                PlayGroundphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 49 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of Swimming Pool
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                SwimmingPoolphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 50 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of Jogging Track
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                JoggingTrackphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 51 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of running walking track
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                Reflexologyphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 52 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">Photo upload of Greenary</h4>
          </div>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                Greenaryphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 53 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of Cycle Track
            </h4>
          </div>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                cyclingTrackPhoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 54 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of Public Area Lighting
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                PublicAreaLightingphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )}
      {questionCount == 55 && (
        <div className="question">
          <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
              Photo upload of Other Amenities
            </h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                otherAmenitiesphoto: e.target.files[0],
              })
            }
            placeholder="no."
            fullWidth
          />
        </div>
      )} */}

      {questionCount == 43 && (
        <div
          className='question '
          value={KnowYourSoceity.DailyWasteCollecion}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.DailyWasteCollecion === '1'}
          />
          <label className='ml-2'>Ghar ke bahar se pick up </label> <br />
          <input
            className='ml-2'
            type='radio'
            name='DailyWasteCollecion'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.DailyWasteCollecion === '2'}
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
            checked={KnowYourSoceity.DailyWasteCollecion === '3'}
          />
          <label className='ml-2'>Other</label>
        </div>
      )}

      {/* {questionCount == 54 && <div
            className="question "
                  value={KnowYourSoceity.WaterStorage}
              onChange={(e) =>
                setKnowYourSoceity({
                  ...KnowYourSoceity,
                  WaterStorage: e.target.value,
                })
              }
          >
            <h4 className="font-semibold text-lg"> Water Storage Facility Kis type ki hein</h4>
            <input type="radio" className="ml-2" name="WaterStorage" value="1" />
            <label className="ml-2" >UNDERGROUND TANK</label> <br />
            <input type="radio" className="ml-2" name="WaterStorage" value="2" />
            <label className="ml-2" >OVERHEAD TANK</label>
            <br />
            <input type="radio" className="ml-2" name="WaterStorage" value="3" />
            <label className="ml-2" >NA</label>
          
          </div>} */}
      {questionCount == 43 && (
        <div
          className='question '
          value={KnowYourSoceity.WaterStoargeFacility}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.WaterStoargeFacility === '1'}
          />
          <label className='ml-2'>UnderGround Tank</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='WaterStoargeFacility'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.WaterStoargeFacility === '2'}
          />
          <label className='ml-2'>OverHead Tank</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='WaterStoargeFacility'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.WaterStoargeFacility === '3'}
          />
          <label className='ml-2'>N/A</label>
        </div>
      )}

      {questionCount == 44 && (
        <div
          className='question '
          value={KnowYourSoceity.SatelliteTV}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.SatelliteTV === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='SatelliteTV'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.SatelliteTV === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount == 45 && (
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
            value={KnowYourSoceity.Agency}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                Agency: e.target.value,
              })
            }
            fullWidth
          />
        </div>
      )}

      {questionCount == 46 && (
        <div
          className='question '
          value={KnowYourSoceity.InsideFlat}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.InsideFlat === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='InsideFlat'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.InsideFlat === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 47 && (
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
                    checked={KnowYourSoceity.fire.includes(1)}
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
                    checked={KnowYourSoceity.fire.includes(2)}
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
                    checked={KnowYourSoceity.fire.includes(3)}
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
                    checked={KnowYourSoceity.fire.includes(4)}
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
                    checked={KnowYourSoceity.fire.includes(5)}
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
                    checked={KnowYourSoceity.fire.includes(6)}
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
                    checked={KnowYourSoceity.fire.includes(7)}
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
                    checked={KnowYourSoceity.fire.includes(8)}
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
      {questionCount == 48 && (
        <div className='question ' value={KnowYourSoceity.SecurityService}>
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
                    checked={KnowYourSoceity.securityService.includes(1)}
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
                    checked={KnowYourSoceity.securityService.includes(2)}
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
                    checked={KnowYourSoceity.securityService.includes(3)}
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
                    checked={KnowYourSoceity.securityService.includes(4)}
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
                    checked={KnowYourSoceity.securityService.includes(5)}
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
                    checked={KnowYourSoceity.securityService.includes(6)}
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
      {questionCount == 49 && (
        <div
          className='question '
          value={KnowYourSoceity.GuardAtLobby}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.GuardAtLobby === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='GuardAtLobby'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.GuardAtLobby === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount == 50 && (
        <div
          className='question '
          value={KnowYourSoceity.NonMemberDeliveryboy}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.NonMemberDeliveryboy === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='NonMemberDeliveryboy'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.NonMemberDeliveryboy === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 51 && (
        <div
          className='question '
          value={KnowYourSoceity.EatingHabitsAllowed}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
                    checked={KnowYourSoceity.EatingHabitsAllowed.includes(1)}
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
                    checked={KnowYourSoceity.EatingHabitsAllowed.includes(2)}
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
      {questionCount == 52 && (
        <div
          className='question '
          value={KnowYourSoceity.MajorityAgeGroup}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
                    checked={KnowYourSoceity.MajorityAgeGroup.includes(1)}
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
                    checked={KnowYourSoceity.MajorityAgeGroup.includes(2)}
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
                    checked={KnowYourSoceity.MajorityAgeGroup.includes(3)}
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
                    checked={KnowYourSoceity.MajorityAgeGroup.includes(4)}
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
                    checked={KnowYourSoceity.MajorityAgeGroup.includes(5)}
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

      {questionCount == 53 && (
        <div
          className='question '
          value={KnowYourSoceity.MembersAllowed}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
                    checked={KnowYourSoceity.MembersAllowed.includes(1)}
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
                    checked={KnowYourSoceity.MembersAllowed.includes(2)}
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
                    checked={KnowYourSoceity.MembersAllowed.includes(3)}
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

      {questionCount == 54 && (
        <div
          className='question '
          value={KnowYourSoceity.MajorityMemberType}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.change === '1'}
          />
          <label className='ml-2'>Rented</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='MajorityMemberType'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.change === '2'}
          />
          <label className='ml-2'>Self Owned</label>
        </div>
      )}

      {/* {questionCount == 64 &&  <div
            className="question "
                  value={KnowYourSoceity.NationalityAllowed}
              onChange={(e) =>
                setKnowYourSoceity({
                  ...KnowYourSoceity,
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

      {questionCount == 55 && (
        <div
          className='question '
          value={KnowYourSoceity.BatchlorsAllowed}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.BatchlorsAllowed === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='BatchlorsAllowed'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.BatchlorsAllowed === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {/* { questionCount == 66 && <div
            className="question "
                  value={KnowYourSoceity.nonMarriedAllowed}
              onChange={(e) =>
                setKnowYourSoceity({
                  ...KnowYourSoceity,
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
      {questionCount == 56 && (
        <div
          className='question '
          value={KnowYourSoceity.nonMarriedAllowed}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.nonMarriedAllowed === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='nonMarried'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.nonMarriedAllowed === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 57 && (
        <div
          className='question '
          value={KnowYourSoceity.ChildrenPlayingAround}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.ChildrenPlayingAround === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='ChildrenPlayingAround'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.ChildrenPlayingAround === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 58 && (
        <div
          className='question '
          value={KnowYourSoceity.CalmMember}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.CalmMember === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='CalmMember'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.CalmMember === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 59 && (
        <div
          className='question '
          value={KnowYourSoceity.ElderPeopleActivity}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.ElderPeopleActivity === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='ElderPeopleActivity'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.ElderPeopleActivity === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 60 && (
        <div
          className='question '
          value={KnowYourSoceity.Celebration}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
                    checked={KnowYourSoceity.Celebration.includes(1)}
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
                    checked={KnowYourSoceity.Celebration.includes(2)}
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
                    checked={KnowYourSoceity.Celebration.includes(3)}
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
                    checked={KnowYourSoceity.Celebration.includes(4)}
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
                    checked={KnowYourSoceity.Celebration.includes(5)}
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
                    checked={KnowYourSoceity.Celebration.includes(6)}
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
                    checked={KnowYourSoceity.Celebration.includes(7)}
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
                    checked={KnowYourSoceity.Celebration.includes(8)}
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
                    checked={KnowYourSoceity.Celebration.includes(9)}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Other Celeb.'
                control={
                  <Checkbox
                    value='10'
                    checked={KnowYourSoceity.Celebration.includes(10)}
                    onChange={e => {
                      handleCheckboxChange(e, funcs, setFuncs);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount == 61 && (
        <div
          className='question '
          value={KnowYourSoceity.SocietyMeetings}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
                    checked={KnowYourSoceity.SocietyMeetings.includes(1)}
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
                    checked={KnowYourSoceity.SocietyMeetings.includes(2)}
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
                    checked={KnowYourSoceity.SocietyMeetings.includes(3)}
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
                    checked={KnowYourSoceity.SocietyMeetings.includes(4)}
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

      {questionCount == 62 && (
        <div
          className='question '
          value={KnowYourSoceity.FunctionsAllowed}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
              (E.G. MARRIAGES)
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='FunctionsAllowed'
            value='Yes'
            onChange={e => {}}
            checked={KnowYourSoceity.FunctionsAllowed === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='FunctionsAllowed'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.FunctionsAllowed === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 63 && (
        <div
          className='question '
          value={KnowYourSoceity.Cleanliness}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.Cleanliness === '1'}
          />
          <label className='ml-2'>Bahut clean</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Cleanliness'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.Cleanliness === '2'}
          />
          <label className='ml-2'>Thik thak</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Cleanliness'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.Cleanliness === '3'}
          />
          <label className='ml-2'>Kharab</label>
        </div>
      )}

      {questionCount == 64 && (
        <div
          className='question '
          value={KnowYourSoceity.CleanlinessMaintained}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.CleanlinessMaintained === '1'}
          />
          <label className='ml-2'>Bahut clean</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='CleanlinessMaintained'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.CleanlinessMaintained === '2'}
          />
          <label className='ml-2'>Thik thak</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='CleanlinessMaintained'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.CleanlinessMaintained === '3'}
          />
          <label className='ml-2'>Kharab</label>
        </div>
      )}

      {questionCount == 65 && (
        <div
          className='question '
          value={KnowYourSoceity.Handymen}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.Handymen === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='Handymen'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.Handymen === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 66 && (
        <div
          className='question '
          value={KnowYourSoceity.Ramp}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.Ramp === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='ramp'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.Ramp === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 67 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              1 BHK last flat sale - price
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.OneBHK}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                OneBHK: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount == 68 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              2 BHK last flat sale price
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.TwoBHK}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                TwoBHK: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount == 69 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              3 BHK last last flat - sale price
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.ThreeBHK}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                ThreeBHK: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}

      {questionCount == 70 && (
        <div className='question'>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Visitor parking kitni hai ?
            </h4>
          </div>

          <Input
            placeholder=''
            value={KnowYourSoceity.Visitor}
            onChange={e =>
              setKnowYourSoceity({
                ...KnowYourSoceity,
                Visitor: e.target.value,
              })
            }
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount == 71 && (
        <div
          className='question '
          value={KnowYourSoceity.Noise}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.Noise === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='noise'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.Noise === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount == 72 && (
        <div
          className='question '
          value={KnowYourSoceity.StrayDogs}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.StrayDogs === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            type='radio'
            className='ml-2'
            name='straydogs'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.StrayDogs === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}
      {questionCount == 73 && (
        <div
          className='question '
          value={KnowYourSoceity.Crack}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.Crack === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='crack'
            value=''
            onChange={e => {}}
            checked={KnowYourSoceity.Crack === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 74 && (
        <div
          className='question '
          value={KnowYourSoceity.Deed}
          onChange={e =>
            setKnowYourSoceity({
              ...KnowYourSoceity,
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
            checked={KnowYourSoceity.Deed === '1'}
          />
          <label className='ml-2'>OC</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Deed'
            value='2'
            onChange={e => {}}
            checked={KnowYourSoceity.Deed === '2'}
          />
          <label className='ml-2'>BCC</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='Deed'
            value='3'
            onChange={e => {}}
            checked={KnowYourSoceity.Deed === '3'}
          />
          <label className='ml-2'>Not Approved</label>
        </div>
      )}
    </div>
  );
};

export default KnowYourSociety;
