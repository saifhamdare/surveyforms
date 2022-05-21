import React, { useEffect, useState } from 'react';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
} from '@mui/material';
const SellerInfo = ({
  knowYourSellerInfo,
  questionCount,
  setKnowYourSellerInfo,
}) => {
  const [GeoLocation, setGeoLocation] = useState('');
  const [selectFamily, setSelectFamily] = useState('');
  // const [University, setUniversity] = useState("");
  // const [Institute, setInstitute] = useState("");
  const [transport, setTransport] = useState('');
  const [hinterest, sethInterest] = useState('');
  const [winterest, setwInterest] = useState('');
  const [neigbourConfig, setNeigbourConfig] = useState('');
  const [language, setlanguage] = useState('');
  const [specialneeds, setspecialneeds] = useState('');
  const [positiveStory, setpositiveStory] = useState('');

  // console.log(questionCount, setKnowYourSellerInfo, knowYourSellerInfo)

  const handleCheckboxChange = (event, state, setState) => {
    console.log(+event.target.value);
    const newNames = state?.includes(+event.target.value)
      ? state?.filter(name => name !== +event.target.value)
      : [...(state ?? []), +event.target.value];
    setState(newNames);
    console.log(state);
  };

  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      SelectFamilyMember: selectFamily,
    }));
  }, [selectFamily]);

  // useEffect(() => {
  //   setKnowYourSellerInfo({
  //     ...knowYourSellerInfo,
  //     TopUniversity: University,
  //   });
  // }, [University]);

  // useEffect(() => {
  //   setKnowYourSellerInfo({
  //     ...knowYourSellerInfo,
  //     TopInstitute: Institute,
  //   });
  // }, [Institute]);
  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      HusbandInterest: hinterest,
    }));
  }, [hinterest]);
  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      TravelBy: transport,
    }));
  }, [transport]);
  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      WifeInterest: winterest,
    }));
  }, [winterest]);

  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      NeighbourFamilyConfig: neigbourConfig,
    }));
  }, [neigbourConfig]);
  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      Languages: language,
    }));
  }, [language]);
  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      FamilyMemberSpecialNeeds: specialneeds,
    }));
  }, [specialneeds]);
  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      PositiveStory: positiveStory,
    }));
  }, [positiveStory]);

  const getLoaction = e => {
    e.preventDefault();
    // console.group("hit")
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeoLocation({
        lat: position?.coords.latitude,
        long: position?.coords.longitude,
      });
    });
  };

  const updateLoaction = `${GeoLocation.lat} , ${GeoLocation.long}`;
  useEffect(() => {
    setKnowYourSellerInfo(prevState => ({
      ...prevState,
      GeoLocation: updateLoaction,
    }));
  }, [updateLoaction]);

  return (
    <div className=' capitalize	 '>
      {questionCount == 1 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband's Name </h4>
          </div>

          <Input
            placeholder='eg. Tarak Mehta'
            value={knowYourSellerInfo.HusbandName}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                HusbandName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 2 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wife's Name </h4>
          </div>
          <Input
            placeholder='eg. Daya Mehta'
            value={knowYourSellerInfo.WifeName}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                WifeName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 3 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Contact Number</h4>
          </div>

          <Input
            placeholder='eg. 9874563210'
            value={knowYourSellerInfo.ContactNoPrimary}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                ContactNoPrimary: e.target.value,
              })
            }
            required
            type='number'
            fullWidth
          />
        </div>
      )}

      {questionCount == 4 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Alternate Contact Number</h4>
          </div>

          <Input
            placeholder='eg. 9874563210'
            value={knowYourSellerInfo.ContactNoSecondary}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                ContactNoSecondary: e.target.value,
              })
            }
            required
            type='number'
            fullWidth
          />
        </div>
      )}

      {questionCount == 5 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Email</h4>
          </div>

          <Input
            placeholder='eg. champak@gmail.com'
            value={knowYourSellerInfo.Email}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                Email: e.target.value,
              })
            }
            required
            type='email'
            fullWidth
          />
        </div>
      )}

      {questionCount == 6 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Society Name</h4>
          </div>

          <Input
            placeholder='Gokuldam Society'
            value={knowYourSellerInfo.SocietyName}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                SocietyName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 7 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Enter geolocation of seller
            </h4>
          </div>

          <p className='italic font-light text-sm'>
            Enter comma separated value of geo-coordinates.
          </p>
          <Input
            placeholder='no.'
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                GeoLocation: e.target.value,
              })
            }
            value={updateLoaction}
            required
            disabled
          />
          <button
            className='border-2 border-slate-400 bg-sky-500 text-white font-medium p-1 px-2 rounded-xl ml-3 '
            onClick={event => getLoaction(event)}
          >
            get location
          </button>
        </div>
      )}

      {questionCount == 8 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Seller Native Place</h4>
          </div>

          <Input
            placeholder='Mirzapur'
            value={knowYourSellerInfo.SellerNativePlace}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                SellerNativePlace: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 9 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Total Family Members</h4>
          </div>

          <Input
            placeholder='eg: 4'
            value={knowYourSellerInfo.TotalFamilyMembers}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                TotalFamilyMembers: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}

      {questionCount == 10 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Select Family Members</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Yourself'
                control={
                  <Checkbox
                    value='1'
                    checked={knowYourSellerInfo.SelectFamilyMember.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, selectFamily, setSelectFamily);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Your Spouse'
                control={
                  <Checkbox
                    value='2'
                    checked={knowYourSellerInfo.SelectFamilyMember.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, selectFamily, setSelectFamily);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Children'
                control={
                  <Checkbox
                    value='3'
                    checked={knowYourSellerInfo.SelectFamilyMember.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, selectFamily, setSelectFamily);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Parent'
                control={
                  <Checkbox
                    value='4'
                    checked={knowYourSellerInfo.SelectFamilyMember.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, selectFamily, setSelectFamily);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Siblings'
                control={
                  <Checkbox
                    value='5'
                    checked={knowYourSellerInfo.SelectFamilyMember.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(e, selectFamily, setSelectFamily);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Alone'
                control={
                  <Checkbox
                    value='6'
                    checked={knowYourSellerInfo.SelectFamilyMember.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(e, selectFamily, setSelectFamily);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount == 11 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband Age</h4>
          </div>

          <Input
            placeholder='eg: 46'
            value={knowYourSellerInfo.HusbandAge}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                HusbandAge: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}

      {questionCount == 12 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wife Age</h4>
          </div>

          <Input
            placeholder='eg: 42'
            value={knowYourSellerInfo.WifeAge}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                WifeAge: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}

      {questionCount == 13 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              FamilyMemberSpecialNeeds: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Family Member with Special Needs
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Elderly Parents/Grand Parents'
                control={
                  <Checkbox
                    value='1'
                    checked={knowYourSellerInfo.FamilyMemberSpecialNeeds.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, specialneeds, setspecialneeds);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Small Children'
                control={
                  <Checkbox
                    value='2'
                    checked={knowYourSellerInfo.FamilyMemberSpecialNeeds.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, specialneeds, setspecialneeds);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Differently Enabled Person'
                control={
                  <Checkbox
                    value='3'
                    checked={knowYourSellerInfo.FamilyMemberSpecialNeeds.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, specialneeds, setspecialneeds);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='N/A'
                control={
                  <Checkbox
                    value='4'
                    checked={knowYourSellerInfo.FamilyMemberSpecialNeeds.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(e, specialneeds, setspecialneeds);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount == 14 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              PetFriendlyHome: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Pet Friendly (Home)</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='PetAtHome'
            value='Yes'
            onChange={e => {}}
            checked={knowYourSellerInfo.PetFriendlyHome === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='PetAtHome'
            value=''
            onPetFriendlyHome={e => {}}
            checked={knowYourSellerInfo.change === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 15 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              PetFriendlySociety: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Is Society/Neighbors Pet Friendly
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='PetAtSociety'
            value='Yes'
            onChange={e => {}}
            checked={knowYourSellerInfo.PetFriendlySociety === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='PetAtSociety'
            value=''
            onChange={e => {}}
            checked={knowYourSellerInfo.PetFriendlySociety === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 16 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              Handymen: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Is it easy to get Maid,Helper and Handymen (carpenter, plumber
              etc)?
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='Handymen'
            value='Yes'
            onChange={e => {}}
            checked={knowYourSellerInfo.Handymen === true}
          />
          <label className='ml-2'>Yes</label> <br />
          <input
            className='ml-2'
            type='radio'
            name='Handymen'
            value=''
            onChange={e => {}}
            checked={knowYourSellerInfo.Handymen === false}
          />
          <label className='ml-2'>No</label>
        </div>
      )}

      {questionCount == 17 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              HusbandQualification: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Husband Highest Qualification
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='hedu'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandQualification === '1'}
          />
          <label className='ml-2'>less than 10th Class</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hedu'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandQualification === '2'}
          />
          <label className='ml-2'>10th Pass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hedu'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandQualification === '3'}
          />
          <label className='ml-2'>12th Pass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hedu'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandQualification === '4'}
          />
          <label className='ml-2'>Graduate</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hedu'
            value='5'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandQualification === '5'}
          />
          <label className='ml-2'>Post Graduate</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hedu'
            value='6'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandQualification === '6'}
          />
          <label className='ml-2'>Other Higher Qualification</label>
        </div>
      )}
      {questionCount == 18 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              HusbandStream: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband's Stream</h4>
          </div>

          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '1'}
          />
          <label className='ml-2'>Arts</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '2'}
          />
          <label className='ml-2'>Science</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '3'}
          />
          <label className='ml-2'>Commerce</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '4'}
          />
          <label className='ml-2'>Engineering</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='5'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '5'}
          />
          <label className='ml-2'>Design</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='6'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '6'}
          />
          <label className='ml-2'>Law</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='7'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '7'}
          />
          <label className='ml-2'>Doctor</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='8'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '8'}
          />
          <label className='ml-2'>Management</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hstream'
            value='9'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandStream === '9'}
          />
          <label className='ml-2'>Other</label>
        </div>
      )}
      {questionCount == 19 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband's College Name</h4>
          </div>
          <Input
            placeholder='eg. National college'
            value={knowYourSellerInfo.HusbandCollegeName}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                HusbandCollegeName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 20 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              WifeQualification: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Wife's Highest Qualification
            </h4>
          </div>

          <input
            className='ml-2'
            type='radio'
            name='wedu'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeQualification === '1'}
          />
          <label className='ml-2'>less than 10th Class</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wedu'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeQualification === '2'}
          />
          <label className='ml-2'>10th Pass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wedu'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeQualification === '3'}
          />
          <label className='ml-2'>12th Pass</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wedu'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeQualification === '4'}
          />
          <label className='ml-2'>Graduate</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wedu'
            value='5'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeQualification === '5'}
          />
          <label className='ml-2'>Post Graduate</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wedu'
            value='6'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeQualification === '6'}
          />
          <label className='ml-2'>Other Higher Qualification</label>
        </div>
      )}

      {questionCount == 21 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              WifeStream: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wife's Stream</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '1'}
          />
          <label className='ml-2'>Arts</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '2'}
          />
          <label className='ml-2'>Science</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '3'}
          />
          <label className='ml-2'>Commerce</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '4'}
          />
          <label className='ml-2'>Engineering</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='5'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '5'}
          />
          <label className='ml-2'>Design</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='6'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '6'}
          />
          <label className='ml-2'>Law</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='7'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '7'}
          />
          <label className='ml-2'>Doctor</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='8'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '8'}
          />
          <label className='ml-2'>Management</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wstream'
            value='9'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeStream === '9'}
          />
          <label className='ml-2'>Other</label>
        </div>
      )}

      {questionCount == 22 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wife's College Name</h4>
          </div>
          <Input
            placeholder='eg. National college'
            value={knowYourSellerInfo.WifeCollegeName}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                WifeCollegeName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 23 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Pre-school/ School/ College/ University Name of your Children
            </h4>
          </div>
          <p className='italic font-light text-sm'>
            Please Enter Comma Seperated Values
          </p>
          <Input
            placeholder='podar International School'
            value={knowYourSellerInfo.InfoChildrenInstituteName}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                InfoChildrenInstituteName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 24 && (
        <div
          className='question'
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              TopUniversity: e.target.value,
            })
          }
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Children or any other member belongs to following College /
              University
            </h4>
          </div>
          <div>
            {/* <FormControl>
            <FormGroup>
              <FormControlLabel
                label="IIM"
                control={
                  <Checkbox
                    value="1"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="IIT"
                control={
                  <Checkbox
                    value="2"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="NLIU"
                control={
                  <Checkbox
                    value="3"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="AIIMS"
                control={
                  <Checkbox
                    value="4"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="IISc"
                control={
                  <Checkbox
                    value="5"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="SEPT"
                control={
                  <Checkbox
                    value="6"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="BITS Pilani"
                control={
                  <Checkbox
                    value="7"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="JNU "
                control={
                  <Checkbox
                    value="8"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="SPA Mumbai"
                control={
                  <Checkbox
                    value="9"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="NIT"
                control={
                  <Checkbox
                    value="10"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="VJTI Mumbai"
                control={
                  <Checkbox
                    value="11"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="NIFT"
                control={
                  <Checkbox
                    value="12"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="BHU"
                control={
                  <Checkbox
                    value="13"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="AMU"
                control={
                  <Checkbox
                    value="14"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="St Stephan's"
                control={
                  <Checkbox
                    value="15"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="Jamia milia Islamia"
                control={
                  <Checkbox
                    value="16"
                    onChange={(e) => {
                      handleCheckboxChange(e, University, setUniversity);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl> */}
          </div>
          <input
            type='radio'
            name='topUniversity'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '1'}
          />
          <label>IIM</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '2'}
          />
          <label>IIT</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '3'}
          />
          <label>NLIU</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '4'}
          />
          <label>AIIMS</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='5'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '5'}
          />
          <label>IISc</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='6'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '6'}
          />
          <label>SEPT</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='7'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '7'}
          />
          <label>BITS Pilani</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='8'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '8'}
          />
          <label>JNU</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='9'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '9'}
          />
          <label>SPA Mumbai</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='10'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '10'}
          />
          <label>VJTI Mumbai</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='11'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '11'}
          />
          <label>NIT</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='12'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '12'}
          />
          <label>NIFT</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='13'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '13'}
          />
          <label>BHU</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='14'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '14'}
          />
          <label>AMU</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='15'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '15'}
          />
          <label>St Stephan's</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='16'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '16'}
          />
          <label>Jamia milia Islamia</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='17'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '17'}
          />
          <label>VIT</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='18'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '18'}
          />
          <label>SRCC</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='19'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '19'}
          />
          <label>LSR</label>
          <br />
          <input
            type='radio'
            name='topUniversity'
            value='20'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopUniversity === '20'}
          />
          <label>None</label>
        </div>
      )}

      {questionCount == 25 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              TopInstitute: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Children or any other member belongs to following
              Institute/services
            </h4>
          </div>

          {/* <FormControl>
            <FormGroup>
              <FormControlLabel
                label="ISRO"
                control={
                  <Checkbox
                    value="1"
                    onChange={(e) => {
                      handleCheckboxChange(e, Institute, setInstitute);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="DRDO"
                control={
                  <Checkbox
                    value="2"
                    onChange={(e) => {
                      handleCheckboxChange(e, Institute, setInstitute);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="UPSC(IAS,IPS,IRS)"
                control={
                  <Checkbox
                    value="3"
                    onChange={(e) => {
                      handleCheckboxChange(e, Institute, setInstitute);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="IAF"
                control={
                  <Checkbox
                    value="4"
                    onChange={(e) => {
                      handleCheckboxChange(e, Institute, setInstitute);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="INS"
                control={
                  <Checkbox
                    value="5"
                    onChange={(e) => {
                      handleCheckboxChange(e, Institute, setInstitute);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="Army"
                control={
                  <Checkbox
                    value="6"
                    onChange={(e) => {
                      handleCheckboxChange(e, Institute, setInstitute);
                    }}
                  />
                }
              />
              <FormControlLabel
                label="Bhabha Atomic center"
                control={
                  <Checkbox
                    value="7"
                    onChange={(e) => {
                      handleCheckboxChange(e, Institute, setInstitute);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl> */}
          <input
            type='radio'
            name='TopInsititute'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '1'}
          />
          <label>ISRO</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '2'}
          />
          <label>DRDO</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '3'}
          />
          <label>UPSC(IAS,IPS,IRS)</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '4'}
          />
          <label>IAF</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='5'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '5'}
          />
          <label>INS</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='6'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '6'}
          />
          <label>Army</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='7'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '7'}
          />
          <label>Bhabha Atomic center</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='8'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '8'}
          />
          <label>CSIR</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='9'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '9'}
          />
          <label>ICMR</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='10'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '10'}
          />
          <label>ICAR</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='11'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '11'}
          />
          <label>TIFR</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='12'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '12'}
          />
          <label>NIF</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='13'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '13'}
          />
          <label>NRDC</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='14'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '14'}
          />
          <label>NIBMG</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='15'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '15'}
          />
          <label>IAS</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='16'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '16'}
          />
          <label>IPS</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='17'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '17'}
          />
          <label>IRS</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='18'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '18'}
          />
          <label>IFS (FOREIGN SERVICES)</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='19'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '19'}
          />
          <label>IFS (FOREST SERVICES)</label>
          <br />
          <input
            type='radio'
            name='TopInsititute'
            value='20'
            onChange={e => {}}
            checked={knowYourSellerInfo.TopInstitute === '20'}
          />
          <label>None</label>
        </div>
      )}

      {/* <h2 className="text-lg font-bold text-sky-500 px-1 py-6"></h2> */}

      {questionCount == 26 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              HusbandProfessionType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband's Profession Type</h4>
          </div>

          <input
            className='ml-2'
            type='radio'
            name='hprofessionType'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandProfessionType === '1'}
          />
          <label className='ml-2'>Working</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='hprofessionType'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandProfessionType === '2'}
          />
          <label className='ml-2'>Self Employed</label>
        </div>
      )}

      {questionCount == 27 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Name of Your Organization (Husband)
            </h4>
          </div>

          <Input
            placeholder='Gada Electronics'
            value={knowYourSellerInfo.HusbandOrganization}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                HusbandOrganization: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 28 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              WifeProfessionType: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wife's Profession Type</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='wprofessionType'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeProfessionType === '1'}
          />
          <label className='ml-2'>HouseWife</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wprofessionType'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeProfessionType === '2'}
          />
          <label className='ml-2'>Working</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='wprofessionType'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeProfessionType === '3'}
          />
          <label className='ml-2'>Self Employed</label>
        </div>
      )}
      {questionCount == 29 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Name of Your Organization (Wife){' '}
            </h4>
          </div>

          <Input
            placeholder='Gada Electronics'
            value={knowYourSellerInfo.WifeOrganization}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                WifeOrganization: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 30 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband LinkedIn Profile</h4>
          </div>

          <Input
            placeholder='Only Add url (Optional) '
            value={knowYourSellerInfo.HusbandLinkedInProfile}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                HusbandLinkedInProfile: e.target.value,
              })
            }
            fullWidth
          />
        </div>
      )}
      {questionCount == 31 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wife LinkedIn Profile</h4>
          </div>
          <Input
            placeholder='Only Add url (Optional)'
            value={knowYourSellerInfo.WifeLinkedInProfile}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                WifeLinkedInProfile: e.target.value,
              })
            }
            fullWidth
          />
        </div>
      )}
      {questionCount == 32 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              TravelBy: e.target.value,
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Mode of Transportation used to travel to work Generally
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Private Vehicle'
                control={
                  <Checkbox
                    value='1'
                    checked={knowYourSellerInfo.TravelBy.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, transport, setTransport);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Public transport'
                control={
                  <Checkbox
                    value='2'
                    checked={knowYourSellerInfo.TravelBy.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, transport, setTransport);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Cab Services'
                control={
                  <Checkbox
                    value='3'
                    checked={knowYourSellerInfo.TravelBy.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, transport, setTransport);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {/* <h2 className="text-lg font-bold text-sky-500    px-1 py-6"></h2> */}

      {questionCount == 33 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              HusbandSocialStatus: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              How do you rate yourself in being social(Husband)
            </h4>
          </div>

          <input
            className='ml-2'
            type='radio'
            name='HusbandSocialStatus'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandSocialStatus === '1'}
          />
          <label className='ml-2'>Introvert</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='HusbandSocialStatus'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandSocialStatus === '2'}
          />
          <label className='ml-2'>Semi Social(ambivert)</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='HusbandSocialStatus'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandSocialStatus === '3'}
          />
          <label className='ml-2'>Extrovert</label>
        </div>
      )}
      {questionCount == 34 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              HusbandSocialCircle: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband's Social Circle</h4>
          </div>

          <input
            className='ml-2'
            type='radio'
            name='HusbandSocialCircle'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandSocialCircle === '1'}
          />
          <label className='ml-2'>Family Member</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='HusbandSocialCircle'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandSocialCircle === '2'}
          />
          <label className='ml-2'>Society Friends</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='HusbandSocialCircle'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandSocialCircle === '3'}
          />
          <label className='ml-2'>College & School Friends</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='HusbandSocialCircle'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.HusbandSocialCircle === '4'}
          />
          <label className='ml-2'>Professional Friends</label>
        </div>
      )}

      {questionCount == 35 && (
        <div className='question  ' required>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband's Interest</h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Travel'
                control={
                  <Checkbox
                    value='1'
                    checked={knowYourSellerInfo.HusbandInterest.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, hinterest, sethInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Music'
                control={
                  <Checkbox
                    value='2'
                    checked={knowYourSellerInfo.HusbandInterest.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, hinterest, sethInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Books'
                control={
                  <Checkbox
                    value='3'
                    checked={knowYourSellerInfo.HusbandInterest.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, hinterest, sethInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Charity'
                control={
                  <Checkbox
                    value='4'
                    checked={knowYourSellerInfo.HusbandInterest.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, hinterest, sethInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Sports'
                control={
                  <Checkbox
                    value='5'
                    checked={knowYourSellerInfo.HusbandInterest.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(e, hinterest, sethInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Spiritual Groups'
                control={
                  <Checkbox
                    value='6'
                    checked={knowYourSellerInfo.HusbandInterest.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(e, hinterest, sethInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Clubs'
                control={
                  <Checkbox
                    value='7'
                    checked={knowYourSellerInfo.HusbandInterest.includes(7)}
                    onChange={e => {
                      handleCheckboxChange(e, hinterest, sethInterest);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount == 36 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              WifeSocialStatus: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              How do you rate yourself in being social(Wife)
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='WifeSocialStatus'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeSocialStatus === '1'}
          />
          <label className='ml-2'>Introvert</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='WifeSocialStatus'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeSocialStatus === '2'}
          />
          <label className='ml-2'>Semi Social(ambivert)</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='WifeSocialStatus'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeSocialStatus === '3'}
          />
          <label className='ml-2'>Extrovert</label>
        </div>
      )}
      {questionCount == 37 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              WifeSocialCircle: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wife's Social Circle</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='WifeSocialCircle'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeSocialCircle === '1'}
          />
          <label className='ml-2'>Family Member</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='WifeSocialCircle'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeSocialCircle === '2'}
          />
          <label className='ml-2'>Society Friends</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='WifeSocialCircle'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeSocialCircle === '3'}
          />
          <label className='ml-2'>College & School Friends</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='WifeSocialCircle'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.WifeSocialCircle === '4'}
          />
          <label className='ml-2'>Professional Friends</label>
        </div>
      )}

      {questionCount == 38 && (
        <div className='question  ' required>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Wife's Interest</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Travel'
                control={
                  <Checkbox
                    value='1'
                    checked={knowYourSellerInfo.WifeInterest.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, winterest, setwInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Music'
                control={
                  <Checkbox
                    value='2'
                    checked={knowYourSellerInfo.WifeInterest.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, winterest, setwInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Books'
                control={
                  <Checkbox
                    value='3'
                    checked={knowYourSellerInfo.WifeInterest.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, winterest, setwInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Charity'
                control={
                  <Checkbox
                    value='4'
                    checked={knowYourSellerInfo.WifeInterest.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, winterest, setwInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Sports'
                control={
                  <Checkbox
                    value='5'
                    checked={knowYourSellerInfo.WifeInterest.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(e, winterest, setwInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Spiritual Groups'
                control={
                  <Checkbox
                    value='6'
                    checked={knowYourSellerInfo.WifeInterest.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(e, winterest, setwInterest);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Clubs'
                control={
                  <Checkbox
                    value='7'
                    checked={knowYourSellerInfo.WifeInterest.includes(7)}
                    onChange={e => {
                      handleCheckboxChange(e, winterest, setwInterest);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount == 39 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              Languages: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Languages You Speak</h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='English'
                control={
                  <Checkbox
                    value='1'
                    checked={knowYourSellerInfo.Languages.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Hindi'
                control={
                  <Checkbox
                    value='2'
                    checked={knowYourSellerInfo.Languages.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Marathi'
                control={
                  <Checkbox
                    value='3'
                    checked={knowYourSellerInfo.Languages.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Gujrati'
                control={
                  <Checkbox
                    value='4'
                    checked={knowYourSellerInfo.Languages.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Marwari'
                control={
                  <Checkbox
                    value='5'
                    checked={knowYourSellerInfo.Languages.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Tamil'
                control={
                  <Checkbox
                    value='6'
                    checked={knowYourSellerInfo.Languages.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Urdu'
                control={
                  <Checkbox
                    value='7'
                    checked={knowYourSellerInfo.Languages.includes(7)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Sindhi'
                control={
                  <Checkbox
                    value='8'
                    checked={knowYourSellerInfo.Languages.includes(8)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Punjabi'
                control={
                  <Checkbox
                    value='9'
                    checked={knowYourSellerInfo.Languages.includes(9)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bhili'
                control={
                  <Checkbox
                    value='10'
                    checked={knowYourSellerInfo.Languages.includes(10)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Kinnauri'
                control={
                  <Checkbox
                    value='11'
                    checked={knowYourSellerInfo.Languages.includes(11)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Kannada'
                control={
                  <Checkbox
                    value='12'
                    checked={knowYourSellerInfo.Languages.includes(12)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Gondi'
                control={
                  <Checkbox
                    value='13'
                    checked={knowYourSellerInfo.Languages.includes(13)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Santali'
                control={
                  <Checkbox
                    value='14'
                    checked={knowYourSellerInfo.Languages.includes(14)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bangla'
                control={
                  <Checkbox
                    value='15'
                    checked={knowYourSellerInfo.Languages.includes(15)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='lakher'
                control={
                  <Checkbox
                    value='16'
                    checked={knowYourSellerInfo.Languages.includes(16)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Garo'
                control={
                  <Checkbox
                    value='17'
                    checked={knowYourSellerInfo.Languages.includes(17)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Tripuri'
                control={
                  <Checkbox
                    value='18'
                    checked={knowYourSellerInfo.Languages.includes(18)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Bhotia'
                control={
                  <Checkbox
                    value='19'
                    checked={knowYourSellerInfo.Languages.includes(19)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Lepcha'
                control={
                  <Checkbox
                    value='20'
                    checked={knowYourSellerInfo.Languages.includes(20)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Thadoa'
                control={
                  <Checkbox
                    value='21'
                    checked={knowYourSellerInfo.Languages.includes(21)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Tangkul'
                control={
                  <Checkbox
                    value='22'
                    checked={knowYourSellerInfo.Languages.includes(22)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Boro'
                control={
                  <Checkbox
                    value='23'
                    checked={knowYourSellerInfo.Languages.includes(23)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Nepali'
                control={
                  <Checkbox
                    value='24'
                    checked={knowYourSellerInfo.Languages.includes(24)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Sema'
                control={
                  <Checkbox
                    value='25'
                    checked={knowYourSellerInfo.Languages.includes(25)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Konyak'
                control={
                  <Checkbox
                    value='26'
                    checked={knowYourSellerInfo.Languages.includes(26)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='French'
                control={
                  <Checkbox
                    value='27'
                    checked={knowYourSellerInfo.Languages.includes(27)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Spanish'
                control={
                  <Checkbox
                    value='28'
                    checked={knowYourSellerInfo.Languages.includes(28)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Chinese'
                control={
                  <Checkbox
                    value='29'
                    checked={knowYourSellerInfo.Languages.includes(29)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Japanese'
                control={
                  <Checkbox
                    value='30'
                    checked={knowYourSellerInfo.Languages.includes(30)}
                    onChange={e => {
                      handleCheckboxChange(e, language, setlanguage);
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
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              Cuisine: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Family Cuisine Preference</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='cuisine'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.Cuisine === '1'}
          />
          <label className='ml-2'>Veg</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='cuisine'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.Cuisine === '2'}
          />
          <label className='ml-2'>Non Veg</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='cuisine'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.Cuisine === '3'}
          />
          <label className='ml-2'>Eggetarian</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='cuisine'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.Cuisine === '4'}
          />
          <label className='ml-2'>Jain</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='cuisine'
            value='5'
            onChange={e => {}}
            checked={knowYourSellerInfo.Cuisine === '5'}
          />
          <label className='ml-2'>Vegan</label>
        </div>
      )}

      {/* <h2 className="text-lg font-bold text-sky-500 px-1 py-6"></h2> */}

      {questionCount == 41 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Neighbour's House number</h4>
          </div>
          <p className='italic font-light text-sm'>(No. to be mention)</p>
          <Input
            placeholder=''
            value={knowYourSellerInfo.NeighbourHouse}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                NeighbourHouse: e.target.value,
              })
            }
            type='number'
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 42 && (
        <div className='question  ' required>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Neighbour's Family Configuiration(to be mentioned)
            </h4>
          </div>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='Couple'
                control={
                  <Checkbox
                    value='1'
                    checked={knowYourSellerInfo.NeighbourFamilyConfig.includes(
                      1,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        neigbourConfig,
                        setNeigbourConfig,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Small Kid'
                control={
                  <Checkbox
                    value='2'
                    checked={knowYourSellerInfo.NeighbourFamilyConfig.includes(
                      2,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        neigbourConfig,
                        setNeigbourConfig,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Elder Persons'
                control={
                  <Checkbox
                    value='3'
                    checked={knowYourSellerInfo.NeighbourFamilyConfig.includes(
                      3,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        neigbourConfig,
                        setNeigbourConfig,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Teenagers'
                control={
                  <Checkbox
                    value='4'
                    checked={knowYourSellerInfo.NeighbourFamilyConfig.includes(
                      4,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        neigbourConfig,
                        setNeigbourConfig,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Other Adults'
                control={
                  <Checkbox
                    value='5'
                    checked={knowYourSellerInfo.NeighbourFamilyConfig.includes(
                      5,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        neigbourConfig,
                        setNeigbourConfig,
                      );
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Single Person'
                control={
                  <Checkbox
                    value='6'
                    checked={knowYourSellerInfo.NeighbourFamilyConfig.includes(
                      6,
                    )}
                    onChange={e => {
                      handleCheckboxChange(
                        e,
                        neigbourConfig,
                        setNeigbourConfig,
                      );
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}

      {questionCount == 43 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              NeighbourprofessionType: e.target.value,
            })
          }
          required
        >
          {' '}
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Husband's Profession Type</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='nprofessionType'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.NeighbourprofessionType === '1'}
          />
          <label className='ml-2'>Working</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='nprofessionType'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.NeighbourprofessionType === '2'}
          />
          <label className='ml-2'>Self Employed</label>
        </div>
      )}
      {questionCount == 44 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              NeighbourNature: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Neighbour Nature</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='nNature'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.NeighbourNature === '1'}
          />
          <label className='ml-2'>Talkative</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='nNature'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.NeighbourNature === '2'}
          />
          <label className='ml-2'>Helpful</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='nNature'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.NeighbourNature === '3'}
          />
          <label className='ml-2'>Silent</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='nNature'
            value='4'
            onChange={e => {}}
            checked={knowYourSellerInfo.NeighbourNature === '4'}
          />
          <label className='ml-2'>Painful</label>
        </div>
      )}

      {questionCount == 45 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              Intent: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Intent of Selling</h4>
          </div>

          <input
            className='ml-2'
            type='radio'
            name='intent'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.Intent === '1'}
          />
          <label className='ml-2'>Changing/city/state/country</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='intent'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.Intent === '2'}
          />
          <label className='ml-2'>Upgradation</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='intent'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.Intent === '3'}
          />
          <label className='ml-2'>Other</label>
        </div>
      )}
      {/* {questionCount == 46 && (
        <div className="question  ">
                   <div className="flex mb-10 font-semibold text-xl text-sky-700">
            <h1 className="mr-2 ">{questionCount}.</h1>
            <h4 className="font-semibold text-lg">
            Photo upload of Seller</h4>
          </div>

          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                Sellerphoto: e.target.value,
              })
            }
            placeholder="individual"
            fullWidth
          />
        </div>
      )}

      {questionCount == 47 && (
        <div className="question  ">
          <h4 className="font-semibold text-lg">
            Photo upload of Seller Family
          </h4>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                SellerFamilyphoto: e.target.value,
              })
            }
            placeholder="family"
            fullWidth
          />
        </div>
      )} */}

      {/* <h2 className="text-lg font-bold text-sky-500 px-1 py-6"></h2> */}

      {questionCount == 46 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Seller Story</h4>
          </div>

          <Input
            placeholder='Tell us about your home'
            value={knowYourSellerInfo.SellerStory}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                SellerStory: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 47 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Your Family Living in this House On Rent?
            </h4>
          </div>

          <Input
            placeholder='number of years'
            value={knowYourSellerInfo.SellerRentedDuration}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                SellerRentedDuration: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount == 48 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Your Family staying here after Purchase ?
            </h4>
          </div>
          <Input
            placeholder='number of years'
            value={knowYourSellerInfo.SellerPurschaseDuration}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                SellerPurschaseDuration: e.target.value,
              })
            }
            required
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount == 49 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Sir/Madam, tell us a little about your family ?
            </h4>
          </div>
          <p className='italic font-light text-sm'>
            (Members, Professions, Children and what they are doing, Elderly
            parents and what they are upto)
          </p>
          <Input
            placeholder='story'
            value={knowYourSellerInfo.familyInfo}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                familyInfo: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 50 && (
        <div
          className='question  '
          onChange={e =>
            setKnowYourSellerInfo({
              ...knowYourSellerInfo,
              ExperienceWithHome: e.target.value,
            })
          }
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              In one word please describe your experience with this home
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='ExperienceWithHome'
            value='1'
            onChange={e => {}}
            checked={knowYourSellerInfo.ExperienceWithHome === '1'}
          />
          <label className='ml-2'>Lucky</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='ExperienceWithHome'
            value='2'
            onChange={e => {}}
            checked={knowYourSellerInfo.ExperienceWithHome === '2'}
          />
          <label className='ml-2'>Protective</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='ExperienceWithHome'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.ExperienceWithHome === '3'}
          />
          <label className='ml-2'>Growth</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='ExperienceWithHome'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.ExperienceWithHome === '4'}
          />
          <label className='ml-2'>Prosperity</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='ExperienceWithHome'
            value='3'
            onChange={e => {}}
            checked={knowYourSellerInfo.ExperienceWithHome === '5'}
          />
          <label className='ml-2'>Memories</label>
        </div>
      )}
      {questionCount == 51 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              What has been your most positive story about this house?
            </h4>
          </div>

          <FormControl>
            <FormGroup>
              <FormControlLabel
                label='First Home'
                control={
                  <Checkbox
                    value='1'
                    checked={knowYourSellerInfo.PositiveStory.includes(1)}
                    onChange={e => {
                      handleCheckboxChange(e, positiveStory, setpositiveStory);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Career/ Business progress'
                control={
                  <Checkbox
                    value='2'
                    checked={knowYourSellerInfo.PositiveStory.includes(2)}
                    onChange={e => {
                      handleCheckboxChange(e, positiveStory, setpositiveStory);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Started family'
                control={
                  <Checkbox
                    value='3'
                    checked={knowYourSellerInfo.PositiveStory.includes(3)}
                    onChange={e => {
                      handleCheckboxChange(e, positiveStory, setpositiveStory);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Growth'
                control={
                  <Checkbox
                    value='4'
                    checked={knowYourSellerInfo.PositiveStory.includes(4)}
                    onChange={e => {
                      handleCheckboxChange(e, positiveStory, setpositiveStory);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Prosperity'
                control={
                  <Checkbox
                    value='5'
                    checked={knowYourSellerInfo.PositiveStory.includes(5)}
                    onChange={e => {
                      handleCheckboxChange(e, positiveStory, setpositiveStory);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Abundance'
                control={
                  <Checkbox
                    value='6'
                    checked={knowYourSellerInfo.PositiveStory.includes(6)}
                    onChange={e => {
                      handleCheckboxChange(e, positiveStory, setpositiveStory);
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Memories'
                control={
                  <Checkbox
                    value='7'
                    checked={knowYourSellerInfo.PositiveStory.includes(7)}
                    onChange={e => {
                      handleCheckboxChange(e, positiveStory, setpositiveStory);
                    }}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
      )}
      {questionCount == 52 && (
        <div className='question  '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              {' '}
              What is your advice to our buyers about buying this home?
            </h4>
          </div>
          <p className='italic font-light text-sm'>
            (Convincing aspect that helps buyer make decision either emotional
            like based on his own experience and successes or rational like well
            connected, good community, convenience)
          </p>
          <Input
            placeholder='eg. Tarak Mehta'
            value={knowYourSellerInfo.AdviceToBuyer}
            onChange={e =>
              setKnowYourSellerInfo({
                ...knowYourSellerInfo,
                AdviceToBuyer: e.target.value,
              })
            }
            required
            fullWidth
          />

        </div>
      )}
    </div>
  );
};

export default SellerInfo;
