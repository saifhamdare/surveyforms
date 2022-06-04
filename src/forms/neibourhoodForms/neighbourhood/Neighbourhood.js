import { Input } from '@mui/material';

import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { checkForMobileNumber } from '../../../utils/helpers';

const Neighbourhood = ({
  neighbourhoodInfo,
  questionCount,
  setNeighbourhoodInfo,
  check,
  isMobileNoValid,
  setIsMobileNoValid,
  isEmailValid,
  setIsEmailValid,
}) => {
  return (
    <div className=''>
      {questionCount === 1 && (
        <div className='question font-semibold text-xl text-sky-700 '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className='font-semibold text-lg'>
              Party Name (Jiss See Information Collect Kari Hein){' '}
            </h4>
          </div>
          <Input
            placeholder='John Doe'
            value={neighbourhoodInfo.fullName}
            onChange={e =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                fullName: e.target.value,
              })
            }
            required
            fullWidth
          />
        </div>
      )}
      {questionCount === 2 && (
        <div className='question font-semibold text-xl text-sky-700 '>
          <div className='flex mb-10'>
            <h1 className='mr-2 '>{questionCount}.</h1>

            <h4 className='font-semibold text-lg'>Uska Mobile Number </h4>
          </div>
          <Input
            placeholder='9876543211'
            value={neighbourhoodInfo.mobileNo}
            onChange={e =>
              checkForMobileNumber(
                e,
                setNeighbourhoodInfo,
                neighbourhoodInfo,
                'mobileNo',
                setIsMobileNoValid,
              )
            }
            required
            fullWidth
            type='number'
          />
          {(neighbourhoodInfo.mobileNo.length > 0 && isMobileNoValid) ? (
            <small className='text-red-500'>Enter Valid Mobile No.</small>
          ): null}
        </div>
      )}
      {questionCount === 3 && (
        <div
          className='question bg-white  '
          value={neighbourhoodInfo.gender}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              gender: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Gender </h4>
          </div>
          <input
            checked={neighbourhoodInfo.gender === 'M'}
            type='radio'
            className='ml-2'
            name='gender'
            id='male'
            value='M'
          />
          <label className='ml-2'>Male</label>
          <br />
          <input
            checked={neighbourhoodInfo.gender === 'F'}
            type='radio'
            className='ml-2'
            name='gender'
            id='female'
            value='F'
          />
          <label className='ml-2'>Female</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='gender'
            id='female'
            checked={neighbourhoodInfo.gender === 'O'}
            value='O'
          />
          <label className='ml-2'>Other</label>
        </div>
      )}
      {questionCount === 4 && (
        <div
          className='question bg-white  '
          value={neighbourhoodInfo.profession}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              profession: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>

            <h4 className=''>Kya Kaam Karte hai ? </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='General Stores/Kirana'
            value='1'
            checked={neighbourhoodInfo.profession === '1'}
          />
          <label className='ml-2'>General Stores/Kirana</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Convenience Store/Mini Mart'
            value='2'
            checked={neighbourhoodInfo.profession === '2'}
          />
          <label className='ml-2'>Convenience Store/Mini Mart</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='profession'
            id='Grocer'
            value='3'
            checked={neighbourhoodInfo.profession === '3'}
          />
          <label className='ml-2'>Grocer</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Beauty Salon'
            value='4'
            checked={neighbourhoodInfo.profession === '4'}
          />
          <label className='ml-2'>Beauty Salon</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='General Hair Salon'
            value='5'
            checked={neighbourhoodInfo.profession === '5'}
          />
          <label className='ml-2'>General Hair Salon</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Restaurant'
            value='6'
            checked={neighbourhoodInfo.profession === '6'}
          />
          <label className='ml-2'>Restaurant</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Laundry'
            value='7'
            checked={neighbourhoodInfo.profession === '7'}
          />
          <label className='ml-2'>Laundry</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='profession'
            id='Bakery'
            value='8'
            checked={neighbourhoodInfo.profession === '8'}
          />
          <label className='ml-2'>Bakery</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Newspaper/Magazine'
            value='9'
            checked={neighbourhoodInfo.profession === '9'}
          />
          <label className='ml-2'>Newspaper/Magazine</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Hardware/Electrical'
            value='10'
            checked={neighbourhoodInfo.profession === '10'}
          />
          <label className='ml-2'>Hardware/Electrical</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Medical Stores'
            value='11'
            checked={neighbourhoodInfo.profession === '11'}
          />
          <label className='ml-2'>Medical Stores</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Snacks & Beverages'
            value='12'
            checked={neighbourhoodInfo.profession === '12'}
          />
          <label className='ml-2'>Snacks & Beverages</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Stationery'
            value='13'
            checked={neighbourhoodInfo.profession === '13'}
          />
          <label className='ml-2'>Stationery</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='profession'
            id='Meat & Poultry'
            value='14'
            checked={neighbourhoodInfo.profession === '14'}
          />
          <label className='ml-2'>Meat & Poultry</label>
          <br />
          {/* <Input
            name="profession"
            placeholder="if other Please specify"
            fullWidth
          />*/}
        </div>
      )}
      {questionCount === 5 && (
        <div
          className=''
          value={neighbourhoodInfo.redevelopment}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              redevelopment: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Have you heard, this society is going for redevelopment?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='redevelopment'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.redevelopment === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='redevelopment'
            id='No'
            value='2'
            checked={neighbourhoodInfo.redevelopment === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='redevelopment'
            id='not sure'
            value='3'
            checked={neighbourhoodInfo.redevelopment === '3'}
          />
          <label className='ml-2'>Not sure</label>
          <br />
        </div>
      )}
      {questionCount === 6 && (
        <div
          className=''
          value={neighbourhoodInfo.reputation}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              reputation: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Building ki reputation kaisi hai ?</h4>
          </div>
          <p className='italic font-light text-sm'>
            Provide overall opinion-the first top of the mind response.
          </p>
          <input
            type='radio'
            className='ml-2'
            name='reputation'
            id='Good'
            value='1'
            checked={neighbourhoodInfo.reputation === '1'}
          />
          <label className='ml-2'>Good</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='reputation'
            id='Okay'
            value='2'
            checked={neighbourhoodInfo.reputation === '2'}
          />
          <label className='ml-2'>Okay</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='reputation'
            id='Bad'
            value='3'
            checked={neighbourhoodInfo.reputation === '3'}
          />
          <label className='ml-2'>Bad</label>
          <br />
        </div>
      )}
      {questionCount === 7 && (
        <div
          className=''
          value={neighbourhoodInfo.complaint}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              complaint: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Koi Complaints society ke members ke baare mein suni hai?
            </h4>
          </div>
          <p className='italic font-light text-sm'>
            Capture in single words or adjectives
          </p>
          <input
            type='radio'
            className='ml-2'
            name='complaints'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.complaint === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='complaints'
            id='No'
            value='2'
            checked={neighbourhoodInfo.complaint === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <Input
            name='complaints'
            placeholder='if Yes then Specify'
            fullWidth
          />
        </div>
      )}
      {questionCount === 8 && (
        <div
          className=''
          value={neighbourhoodInfo.peopleInSociety}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              peopleInSociety: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Society ke members ka nature kiis type kaa hai ?
            </h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='peopleinsociety'
            id='Friendly, Social, Helpfull'
            value='1'
            checked={neighbourhoodInfo.peopleInSociety === '1'}
          />
          <label className='ml-2'>Friendly, Social, Helpfull</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='peopleinsociety'
            id='Quite and Aloof'
            value='2'
            checked={neighbourhoodInfo.peopleInSociety === '2'}
          />
          <label className='ml-2'>Quite and Aloof (Chup Chap)</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='peopleinsociety'
            id='Quarrelsome and Complaining'
            value='3'
            checked={neighbourhoodInfo.peopleInSociety === '3'}
          />
          <label className='ml-2'>Quarrelsome and Complaining(Jhagdalu)</label>
          <br />
        </div>
      )}
      {questionCount === 9 && (
        <div
          className=''
          value={neighbourhoodInfo.societyManagement}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              societyManagement: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Society management (secertary, chairman, etc.) friendly nature ke
              hai?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='management'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.societyManagement === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='management'
            id='No'
            value='2'
            checked={neighbourhoodInfo.societyManagement === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='management'
            id='Not Sure'
            value='3'
            checked={neighbourhoodInfo.societyManagement === '3'}
          />
          <label className='ml-2'>Not Sure</label>
          <br />
        </div>
      )}
      {questionCount === 10 && (
        <div
          className=''
          value={neighbourhoodInfo.deliveryServices}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              deliveryServices: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Aap kuch iss building mein deliver / bechte hai ?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='deliveryservices'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.deliveryServices === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='deliveryservices'
            id='No'
            value='2'
            checked={neighbourhoodInfo.deliveryServices === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='deliveryservices'
            id='Not Applicable'
            value='3'
            checked={neighbourhoodInfo.deliveryServices === '3'}
          />
          <label className='ml-2'>Not Applicable</label>
          <br />
        </div>
      )}
      {questionCount === 11 && (
        <div
          className=''
          value={neighbourhoodInfo.deliveringEssential}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              deliveringEssential: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Daily items iss building mein easily mil jaati hai?
            </h4>
          </div>
          <p className='italic font-light text-sm'>
            Essential items mean mean milk, bread, butter, grocery, fruits,
            vegetables.
          </p>
          <input
            type='radio'
            className='ml-2'
            name='essential'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.deliveringEssential === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='essential'
            id='No'
            value='2'
            checked={neighbourhoodInfo.deliveringEssential === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
        </div>
      )}
      {questionCount === 12 && (
        <div
          className=''
          value={neighbourhoodInfo.socialEvents}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              socialEvents: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Aapne society mein functions / parties hote huein dekhe hai
              (ganpati, new year, holi, etc...)kya ?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='socialevents'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.socialEvents === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='socialevents'
            id='No'
            value='2'
            checked={neighbourhoodInfo.socialEvents === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='socialevents'
            id='Not Sure'
            value='3'
            checked={neighbourhoodInfo.socialEvents === '3'}
          />
          <label className='ml-2'>Not Sure</label>
          <br />
        </div>
      )}
      {questionCount === 13 && (
        <div
          className=''
          value={neighbourhoodInfo.children}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              children: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Kis age ke bacche yahaan par sabse jyada hai?</h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='children'
            id='Teens'
            value='1'
            checked={neighbourhoodInfo.children === '1'}
          />
          <label className='ml-2'>Teens (15 yrs and above)</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='children'
            id='Younger'
            value='2'
            checked={neighbourhoodInfo.children === '2'}
          />
          <label className='ml-2'>Younger (5-15 yrs)</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='children'
            id='No'
            value='3'
            checked={neighbourhoodInfo.children === '3'}
          />
          <label className='ml-2'>toddler (1-5 yrs)</label>
          <br />
        </div>
      )}
      {questionCount === 14 && (
        <div
          className=''
          value={neighbourhoodInfo.older}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              older: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Kis type ke Older people iss building mein rehte hai ?{' '}
            </h4>
          </div>
          <h4 className='font-semibold text-lg'></h4>
          <input
            type='radio'
            className='ml-2'
            name='older'
            id='Active'
            value='1'
            checked={neighbourhoodInfo.older === '1'}
          />
          <label className='ml-2'>Active (Society mein ghumne wale)</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='older'
            id='Stay Home'
            value='2'
            checked={neighbourhoodInfo.older === '2'}
          />
          <label className='ml-2'>Stay Home (Ghar par rehnee wale)</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='older'
            id='No'
            value='3'
            checked={neighbourhoodInfo.older === '3'}
          />
          <label className='ml-2'>No</label>
          <br />
        </div>
      )}
      {questionCount === 15 && (
        <div
          className=''
          value={neighbourhoodInfo.electricityBreakDown}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              electricityBreakDown: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Electricity iss area mein jaati rehti hai kya?</h4>
          </div>
          <input
            className='ml-2'
            type='radio'
            name='electricitybreakdown'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.electricityBreakDown === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='electricitybreakdown'
            id='No'
            value='2'
            checked={neighbourhoodInfo.electricityBreakDown === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='electricitybreakdown'
            id='Not Sure'
            value='3'
            checked={neighbourhoodInfo.electricityBreakDown === '3'}
          />
          <label className='ml-2'>Not Sure</label>
          <br />
        </div>
      )}
      {questionCount === 16 && (
        <div
          className=''
          value={neighbourhoodInfo.waterSupply}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              waterSupply: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Koi Water ke supply ka issues hai kya ? </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='watersupply'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.waterSupply === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='watersupply'
            id='No'
            value='2'
            checked={neighbourhoodInfo.waterSupply === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='watersupply'
            id='Not Sure'
            value='3'
            checked={neighbourhoodInfo.waterSupply === '3'}
          />
          <label className='ml-2'>Not Sure</label>
          <br />
        </div>
      )}
      {questionCount === 17 && (
        <div
          className=''
          value={neighbourhoodInfo.traffic}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              traffic: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Traffic kaisa hai ?</h4>
          </div>
          <p>Peak hour is 8 am to 10.30 and 6.30pm to 9pm.</p>
          <input
            className='ml-2'
            type='radio'
            name='traffic'
            id='Peak Hour Jam'
            value='1'
            checked={neighbourhoodInfo.traffic === '1'}
          />
          <label className='ml-2'>Office timings par</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='traffic'
            id='Always Jam'
            value='2'
            checked={neighbourhoodInfo.traffic === '2'}
          />
          <label className='ml-2'>Hamesha</label>
          <br />
          <input
            className='ml-2'
            type='radio'
            name='traffic'
            id='Random Jam'
            value='3'
            checked={neighbourhoodInfo.traffic === '3'}
          />
          <label className='ml-2'>Kabhi Kabhi</label>
          <br />
        </div>
      )}
      {questionCount === 18 && (
        <div
          className=''
          value={neighbourhoodInfo.sellingProperty}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              sellingProperty: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Are the lot of people selling property in this society?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='SellingProperty'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.sellingProperty === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='SellingProperty'
            id='No'
            value='2'
            checked={neighbourhoodInfo.sellingProperty === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='SellingProperty'
            id='Not Sure'
            value='3'
            checked={neighbourhoodInfo.sellingProperty === '3'}
          />
          <label className='ml-2'>Not Sure</label>
          <br />
        </div>
      )}
      {questionCount === 19 && (
        <div
          className=''
          value={neighbourhoodInfo.policeComplaints}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              policeComplaints: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>Koi police complaints in society ? </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='policecomplaint'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.policeComplaints === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='policecomplaint'
            id='No'
            value='2'
            checked={neighbourhoodInfo.policeComplaints === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='policecomplaint'
            id='Not Sure'
            value='3'
            checked={neighbourhoodInfo.policeComplaints === '3'}
          />
          <label className='ml-2'>Not Sure</label>
          <br />
        </div>
      )}
      {questionCount === 20 && (
        <div
          className=''
          value={neighbourhoodInfo.easyToGet}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              easyToGet: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Kaam wali, electrician, maharaaj, driver araam se mil jaate
              hai...ki taklif hoti hai?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='easytoget'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.easyToGet === '1'}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='easytoget'
            id='No'
            value='2'
            checked={neighbourhoodInfo.easyToGet === '2'}
          />
          <label className='ml-2'>No</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='easytoget'
            id='Not Sure'
            value='3'
            checked={neighbourhoodInfo.easyToGet === '3'}
          />
          <label className='ml-2'>Not Sure</label>
          <br />
        </div>
      )}
      {questionCount === 21 && (
        <div
          className=''
          value={neighbourhoodInfo.kindOfProfessions}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              kindOfProfessions: e.target.value,
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Kis type ke members is building mein jyada rehte hai ?
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='typeofprofession'
            value='1'
            checked={neighbourhoodInfo.kindOfProfessions === '1'}
          />
          <label className='ml-2'>Working</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='typeofprofession'
            value='2'
            checked={neighbourhoodInfo.kindOfProfessions === '2'}
          />
          <label className='ml-2'>Self Employed</label>
        </div>
      )}

      {questionCount === 22 && (
        <div
          className=''
          value={neighbourhoodInfo.strayDogs}
          onChange={e =>
            setNeighbourhoodInfo({
              ...neighbourhoodInfo,
              strayDogs: Boolean(e.target.value),
            })
          }
          required
        >
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              Dogs, Cow, Cat ka bahut taklif hai kya ? Yahaan par
            </h4>
          </div>
          <input
            type='radio'
            className='ml-2'
            name='straydogs'
            id='Yes'
            value='1'
            checked={neighbourhoodInfo.strayDogs === true}
          />
          <label className='ml-2'>Yes</label>
          <br />
          <input
            type='radio'
            className='ml-2'
            name='straydogs'
            id='No'
            value=''
            checked={neighbourhoodInfo.strayDogs === false}
          />
          <label className='ml-2'>No</label>
          <br />
        </div>
      )}

      {questionCount === 23 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              1 BHK sale hua hai - uska Sale Price - Last 6 months
            </h4>
          </div>
          <Input
            value={neighbourhoodInfo.oneBHK}
            onChange={e =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                oneBHK: e.target.value,
              })
            }
            placeholder='Enter Number Only'
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 24 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              2 BHK sale hua hai - uska Sale Price - Last 6 months
            </h4>
          </div>

          <Input
            value={neighbourhoodInfo.twoBHK}
            onChange={e =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                twoBHK: e.target.value,
              })
            }
            placeholder='Enter Number Only'
            fullWidth
            type='number'
          />
        </div>
      )}
      {questionCount === 25 && (
        <div className=''>
          <div className='flex mb-10 font-semibold text-xl text-sky-700'>
            <h1 className='mr-2 '>{questionCount}.</h1>
            <h4 className=''>
              3 BHK sale hua hai - uska Sale Price - Last 6 months
            </h4>
          </div>
          <h4 className='font-semibold text-lg'></h4>
          <Input
            value={neighbourhoodInfo.threeBHK}
            onChange={e =>
              setNeighbourhoodInfo({
                ...neighbourhoodInfo,
                threeBHK: e.target.value,
              })
            }
            placeholder='Enter Number Only'
            fullWidth
            type='number'
          />
        </div>
      )}
      {check && <p className='text-red-500'>Required Question </p>}
    </div>
  );
};

export default Neighbourhood;

{
  /* <div className="flex justify-around">
<div className="border-2 border-sky-600  bg-white px-6 py-2 my-4  rounded-md">
  <button
    onClick={() => {
      let result = window.confirm(
        "you will you will loose all your data"
      );
      if (result === true) {
        navigate("/form-list", { replace: true });
      }
    }}
    className="text-sky-600 font-bold"
  >
    Back
  </button>
</div>
<div className="border-2  border-sky-400 bg-sky-300 px-6 py-2 my-4 rounded-md">
  <button className=" text-white font-bold" type="submit">
    Save
  </button>
</div>
</div> */
}
