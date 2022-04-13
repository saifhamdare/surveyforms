import { Input } from '@mui/material';
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';

const ConnectionWithHouse = () => {
const [cwhRented,setcwhRented]=useState('')
const [cwhPurchase,setcwhPurchase]=useState('')
const [cwhIntent,setcwhIntent]=useState('')
const [cwhSellerphoto,setcwhSellerphoto]=useState('')
const [cwhSellerFamilyphoto,setcwhSellerFamilyphoto]=useState('')
const [cwhSellerStory,setcwhSellerStory]=useState('')

const onSubmit = () => {};
  return (
  
  <div className="bg-slate-200 capitalize	">
    <ToastContainer autoClose={1500} />
    <div className="form-container className=' m-1 mt-5 ' ">
      <h2 className="text-lg font-bold text-sky-500  border-2 px-1 py-6">
      Connection With House/ Intent of Selling / Photo / seller Story
      </h2>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
           <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setcwhRented(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
             Your Family Living In the House on Rent(How Many Years)
            </h4>
            <input type="radio" name="rented" value="1 to 5" />
            <label>1 to 5</label>
            <br />
            <input type="radio" name="rented" value="5 to 10" />
            <label>5 to 10</label>
            <br />
            <input type="radio" name="rented" value="10 to 15" />
            <label>10 to 15</label>
            <br />
            <input type="radio" name="rented" value="more than 15" />
            <label>more than 15</label>
            <br />
            <input type="radio" name="rented" value="N/A" />
            <label>N/A</label>
          </div> 
   
           <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setcwhPurchase(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
             Your Family Staying here After Purchase(How Many Years)
            </h4>
            <input type="radio" name="purchase" value="1 to 5" />
            <label>1 to 5</label>
            <br />
            <input type="radio" name="purchase" value="5 to 10" />
            <label>5 to 10</label>
            <br />
            <input type="radio" name="purchase" value="10 to 15" />
            <label>10 to 15</label>
            <br />
            <input type="radio" name="purchase" value="more than 15" />
            <label>more than 15</label>
          </div> 

           <div
            className="question bg-white border-2 rounded-lg mt-2 p-4 "
            onChange={(e) => setcwhIntent(e.target.value)}
            required
          >
            <h4 className="font-semibold text-lg">
            Intent of Selling
            </h4>
            <input type="radio" name="intent" value="Changing/city/state/country" />
            <label>Changing/city/state/country</label>
            <br />
            <input type="radio" name="intent" value="Upgradation" />
            <label>Upgradation</label>
            <br />
            <input type="radio" name="intent" value="Other" />
            <label>Other</label>
          </div> 

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Seller</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setcwhSellerphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="individual"
              fullWidth
            />
            </div>

          <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Photo upload of Seller Family</h4>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setcwhSellerFamilyphoto(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              placeholder="family"
              fullWidth
            />
            </div>

            <div className="question bg-white border-2 rounded-lg mt-2 p-4 ">
            <h4 className="font-semibold text-lg">Seller Story</h4>
            <Input
              placeholder="tell us about the your home"
              onChange={(e) => setcwhSellerStory(e.target.value)}
              required
              fullWidth
            />
          </div>

    </form>
    </div>
    </div>
  )
}

export default ConnectionWithHouse