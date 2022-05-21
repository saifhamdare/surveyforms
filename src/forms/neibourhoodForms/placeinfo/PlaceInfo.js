import { Button,Input,Table,TableBody,TableCell,TableContainer,Paper, TableHead,TableRow} from '@mui/material';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as getRandomID } from 'uuid';
const PlaceInfo = ({questionCount,placeInfo,setPlaceInfo}) => {
 

  // vendor state

  // normalize the vegebtable object
  const normalizeVegetableVedorsObject = (inc = 0) => ({id: VegetablevendorCount + inc,VegetablevendorName: '',VegetableshopName: '',VegetablephoneNo: '',});
  const [vegetableVendor, setVegetableVendor] = useState([]);
  const [VegetablevendorCount, setVegetableVendorCount] = useState(1);
  const [currentVegetableVendorValues, setCurrentVegetableVendorValues] = useState(normalizeVegetableVedorsObject());
  const { VegetablevendorName, VegetableshopName, VegetablephoneNo } = currentVegetableVendorValues;
 
  const handleFromVegetableChange = e => {
    const { name, value } = e.target;
    setCurrentVegetableVendorValues(v => ({...v,[name]: value,}));
    console.log('vendor state => ', currentVegetableVendorValues);
    console.log('target state => ', e.target);
    };

  const handleVegetableSubmit = e => {
    e.preventDefault();
    setVegetableVendor([...vegetableVendor, currentVegetableVendorValues]);
    setCurrentVegetableVendorValues(normalizeVegetableVedorsObject(1));
    setVegetableVendorCount(VegetablevendorCount + 1);
  };


  const handleVegetableVendorDelete = (key) => {
    const newVendors = vegetableVendor.filter(v => v.id !== key);
    setVegetableVendor(newVendors);
  }
 



  const getLoaction = e => {
    // e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log(`${position.coords.latitude} , ${position.coords.longitude}`);
      setPlaceInfo({
        ...placeInfo,
        geoCode: `${position.coords.latitude} , ${position.coords.longitude}`,
      });
 
    });
  };
  useEffect(() => {
    setPlaceInfo({
      ...placeInfo,
      vegetablesStoresName: vegetableVendor,
    });
  }, [vegetableVendor]);

 // normalize the grocery object
 const normalizeGroceryVedorsObject = (incC = 6) => ({id: getRandomID() ,GroceryvendorName: '',GroceryshopName: '',GroceryphoneNo: '',});
 const [GroceryVendor, setGroceryVendor] = useState([]);
 const [GroceryvendorCount, setGroceryVendorCount] = useState(1);
 const [currentVendorValues, setCurrentGroceryVendorValues] = useState(normalizeGroceryVedorsObject(),);
 const { GroceryvendorName, GroceryshopName, GroceryphoneNo } = currentVendorValues;


 const handleFromGroceryChange = e => {
  const { name, value } = e.target;
  setCurrentGroceryVendorValues(v => ({...v,[name]: value,}));
  };
  const handleGrocerySubmit = e => {
    e.preventDefault();
    setGroceryVendor([...GroceryVendor, currentVendorValues]);
    setCurrentGroceryVendorValues(normalizeGroceryVedorsObject(1));
    setGroceryVendorCount(GroceryvendorCount + 1);
  };
  const handleGroceryeVendorDelete = (key) => {
    const newVendors = GroceryVendor.filter(v => v.id !== key);
    setGroceryVendor(newVendors);
  }
  useEffect(() => {
    setPlaceInfo({
      ...placeInfo,
      groceryStoresName: GroceryVendor,
    });
  }, [GroceryVendor]);

  console.log(vegetableVendor);
  console.log(GroceryVendor);

  return (
    <div className=''>
      {questionCount == 1 && (
        <div className='question font-semibold text-xl text-sky-700  '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Enter geolocation of society
            </h4>
          </div>
          <p className='italic font-light text-sm'>
            Enter comma separated value of geo-coordinates.
          </p>
          <div className='flex'>
            <Input
              placeholder='no.'
              // onChange={(e) => setpiGeocode(e.target.value)}
              // value={updateLoaction}
              value={placeInfo.geoCode}
              onChange={e =>
                setPlaceInfo({
                  ...placeInfo,
                  geoCode: e.target.value,
                })
              }
              required
              fullWidth
              disabled
            />
            <button
              className='border-2 bg-sky-500 text-white  p-1 px-3 rounded-xl  '
              onClick={event => getLoaction(event)}
            >
              geoLocation
            </button>
          </div>
        </div>
      )}

      {questionCount == 2 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Number of full time / part time maids/ cooks living near by
            </h4>
          </div>

          <p className='italic font-light text-sm'>Please enter in numbers.</p>
          <Input
            placeholder='no.'
            type='number'
            value={placeInfo.cookslivingNearby}
            onChange={e =>
              setPlaceInfo({
                ...placeInfo,
                cookslivingNearby: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount == 3 && (
        <div
          className='question  '
          value={placeInfo.surroundingArea}
          onChange={e =>
            setPlaceInfo({
              ...placeInfo,
              surroundingArea: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Please check whether the society surrounding area is clean or not
              ?{' '}
            </h4>
          </div>

          <p className='italic font-light text-sm'>
            Good means approach road, entrance are clean also no garbage dump is
            visible.
          </p>
          <input
            type='radio'
            className='ml-2'
            name='surrounding'
            id='Good'
            value='1'
            onChange={e => {}}
            checked={placeInfo.surroundingArea === '1'}
          />
          <label className='ml-2'>Good</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='surrounding'
            id='Okay'
            value='2'
            onChange={e => {}}
            checked={placeInfo.surroundingArea === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='surrounding'
            id='Bad'
            value='3'
            onChange={e => {}}
            checked={placeInfo.surroundingArea === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
        </div>
      )}
      {questionCount == 4 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              How long does it take to reach the highway from society ?{' '}
            </h4>
          </div>

          <p className='italic font-light text-sm'>
            Check Google for peak hours. Mention zero in hours when it is under
            an hour
          </p>
          <Input
            value={placeInfo.highwayFromSociety}
            onChange={e =>
              setPlaceInfo({
                ...placeInfo,
                highwayFromSociety: e.target.value,
              })
            }
            required
            fullWidth
            placeholder='01:15'
          />
        </div>
      )}

      {questionCount == 5 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Please provide the local market name{' '}
            </h4>
          </div>

          <p className='italic font-light text-sm'>
            We should system check on Google.
          </p>
          <Input
            placeholder='Bhindi Bazaar'
            value={placeInfo.localMarketName}
            onChange={e =>
              setPlaceInfo({
                ...placeInfo,
                localMarketName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}

      {questionCount == 6 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Please provide local market distance (in Km){' '}
            </h4>
          </div>

          <p className='italic font-light text-sm'>
            We should system check on Google.
          </p>
          <Input
            placeholder='no.'
            value={placeInfo.localMarketDistance}
            onChange={e =>
              setPlaceInfo({
                ...placeInfo,
                localMarketDistance: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
       {questionCount == 7 && (
                <div className='question   '>
                <div className='flex mb-10 font-semibold text-xl text-sky-700'>
                  <h1 className='mr-2 '>{questionCount}.</h1>
                  <h4 className='font-semibold text-lg'>
                  Please provide top 2 grocery stores' name.
                  </h4>
                </div>
                <form onSubmit={handleGrocerySubmit} onChange={handleFromGroceryChange}>
                  <div className='flex flex-row space-x-1'>
                    <Input
                      placeholder='Grocery vendor Name'
                      name='GroceryvendorName'
                      required
                      value={GroceryvendorName}
                    />
                    <Input
                      placeholder='Grocery Shop Name'
                      name='GroceryshopName'
                      required
                      value={ GroceryshopName}
                    />
                    <Input
                      placeholder='Grocery  Phone No'
                      name='GroceryphoneNo'
                      required
                      value={GroceryphoneNo}
                      type='number'
                    />
                    <Button type='submit'>ADD</Button>
                    <Button
                      onClick={e => setCurrentGroceryVendorValues(normalizeGroceryVedorsObject())}
                    >
                      Clear
                    </Button>
                  </div>
                </form>
                {GroceryVendor.length > 0 && (
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>Grocery vendor Name</TableCell>
                          <TableCell align='right'>Shop Name</TableCell>
                          <TableCell align='right'>Phone No.</TableCell>
                          <TableCell align='right'>Delete</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {GroceryVendor.map(row => (
                          <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component='th' scope='row'>{row.GroceryvendorName}</TableCell>
                            <TableCell align='center'>{row.GroceryshopName}</TableCell>
                            <TableCell align='center'>{row.GroceryphoneNo}</TableCell>
                            <TableCell align='center' onClick={e => handleGroceryeVendorDelete(row.id)}><Button >Delete</Button></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </div>

       
      )}
      {questionCount == 8 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Please provide top 2 vegetables stores' name.{' '}
            </h4>
          </div>
          <form onSubmit={handleVegetableSubmit} onChange={handleFromVegetableChange}>
            <div className='flex flex-row space-x-1'>
              <Input
                placeholder='Vendor Name'
                name='VegetablevendorName'
                required
                value={VegetablevendorName}
              />
              <Input
                placeholder='Shop Name'
                name='VegetableshopName'
                required
                value={VegetableshopName}
              />
              <Input
                placeholder='Phone No'
                name='VegetablephoneNo'
                required
                value={VegetablephoneNo}
                type='number'
              />
              <Button type='submit'>ADD</Button>
              <Button
                onClick={e => setCurrentVegetableVendorValues(normalizeVegetableVedorsObject())}
              >
                Clear
              </Button>
            </div>
          </form>
          {vegetableVendor.length > 0 && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Vendor Name</TableCell>
                    <TableCell align='right'>Shop Name</TableCell>
                    <TableCell align='right'>Phone No.</TableCell>
                    <TableCell align='right'>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vegetableVendor.map(row => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>{row.VegetablevendorName}</TableCell>
                      <TableCell align='center'>{row.VegetableshopName}</TableCell>
                      <TableCell align='center'>{row.VegetablephoneNo}</TableCell>
                      <TableCell align='center' onClick={e => handleVegetableVendorDelete(row.id)}><Button >Delete</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      )}

      {questionCount == 9 && (
        <div
          className='question '
          value={placeInfo.commercialEstablishments}
          onChange={e =>
            setPlaceInfo({
              ...placeInfo,
              commercialEstablishments: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Are there shops and commercial establishments within the society ?{' '}
            </h4>
          </div>

          <p className='italic font-light text-sm'>
            Check if the groundfloor has shops with general access to public or
            offices being run from the society.
          </p>
          <input
            type='radio'
            className='ml-2'
            name='commercial'
            id='Yes'
            value='true'
            
onChange={e => {}}
            checked={placeInfo.commercialEstablishments === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='commercial'
            id='No'
            value=''
            onChange={e => {}}
            checked={placeInfo.commercialEstablishments === false}
          />
          <label className='ml-2'>No</label>
          <br />
        </div>
      )}

      {questionCount == 10 && (
        <div
          className='question   '
          value={placeInfo.vicinity}
          onChange={e =>
            setPlaceInfo({
              ...placeInfo,
              vicinity: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Describe the vicinity/surroundings of the society ?
            </h4>
          </div>

          <input
            type='radio'
            className='ml-2'
            name='cleanliness'
            id='Clean'
            value='1'
            checked={placeInfo.vicinity === '1'}
          />
          <label className='ml-2'>Clean</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='cleanliness'
            id='Slums & Stalls'
            value='2'
            checked={placeInfo.vicinity === '2'}
          />
          <label className='ml-2'>Slums & Stalls</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='cleanliness'
            id='Trees & Greenery'
            value='3'
            checked={placeInfo.vicinity === '3'}
          />
          <label className='ml-2'>Trees & Greenery</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='cleanliness'
            id='Garbage & Dirt'
            value='4'
            checked={placeInfo.vicinity === '4'}
          />
          <label className='ml-2'>Garbage & Dirt</label>
          <br />
        </div>
      )}

      {questionCount == 11 && (
        <div
          className='question   '
          value={placeInfo.accessForVehicles}
          onChange={e =>
            setPlaceInfo({
              ...placeInfo,
              accessForVehicles: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Is the approach road easy to access for vehicles?{' '}
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='vehicle'
            id='Yes'
            value='true'
            checked={placeInfo.accessForVehicles === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='vehicle'
            id='No'
            value=''
            checked={placeInfo.accessForVehicles === false}
          />
          <label className='ml-2'>No</label>
          <br />
        </div>
      )}

      {questionCount == 12 && (
        <div
          className='question   '
          value={placeInfo.maintained}
          onChange={e =>
            setPlaceInfo({
              ...placeInfo,
              maintained: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Please check whether the society is maintained well like cleaning,
              staircase, lift, amenities, external painting, leakages etc.
            </h4>
          </div>
          <p className='italic font-light text-sm'>
            Ok means clean and no painting or leakage damage.Bad means unclean,
            unmaintained and with paint & leakage damages externally.
          </p>
          <input
            className='ml-2'
            type='radio'
            name='maintained'
            id='Good'
            value='1'
            onChange={e => {}}
            checked={placeInfo.maintained === '1'}
          />
          <label className='ml-2'>Good</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='maintained'
            id='Ok'
            value='2'
            onChange={e => {}}
            checked={placeInfo.maintained === '2'}
          />
          <label className='ml-2'>Ok</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='maintained'
            id='Bad'
            value='3'
            onChange={e => {}}
            checked={placeInfo.maintained === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
        </div>
      )}
      {questionCount == 13 && (
        <div
          className='question   '
          value={placeInfo.anyRepair}
          onChange={e =>
            setPlaceInfo({
              ...placeInfo,
              anyRepair: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Do you see any repair and maintenance work going on in society?{' '}
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='anyrepair'
            id='Yes'
            value='1'
            checked={placeInfo.anyRepair === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='anyrepair'
            id='No'
            value='2'
            checked={placeInfo.anyRepair === '2'}
          />
          <label className='ml-2'>No</label>

          <br />
        </div>
      )}

      {questionCount == 14 && (
        <div
          className='question   '
          value={placeInfo.structureQuality}
          onChange={e =>
            setPlaceInfo({
              ...placeInfo,
              structureQuality: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Is the building structure quality?{' '}
            </h4>
          </div>

          <p className='italic font-light text-sm'>
            Ok means minor visible cracks and/or plant growth on walls. Bad
            means large cracks and plaster holes and/or large leakages.
          </p>
          <input
            type='radio'
            className='ml-2'
            name='quality'
            id='Good'
            value='1'
            onChange={e => {}}
            checked={placeInfo.structureQuality === '1'}
          />
          <label className='ml-2'>Good</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='quality'
            id='Okay'
            value='2'
            onChange={e => {}}
            checked={placeInfo.structureQuality === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='quality'
            id='bad'
            value='3'
            onChange={e => {}}
            checked={placeInfo.structureQuality === '3'}
          />
          <label className='ml-2'>bad</label>
          <br />
        </div>
      )}
      {questionCount == 15 && (
        <div className='question   '>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>Your Remarks</h4>
          </div>
          <Input
            placeholder='Your Answer'
            value={placeInfo.remark}
            onChange={e =>
              setPlaceInfo({
                ...placeInfo,
                remark: e.target.value,
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

export default PlaceInfo;
