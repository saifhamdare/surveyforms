import { Autocomplete, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchSeller = () => {
  const [searchResultSeller, setSearchResultSeller] = useState([]);
  const [saveResultSeller, setSaveResultSeller] = useState("");
  const [filteredResultSeller, setFilteredResultSeller] = useState([]);

  useEffect(() => {
    axios
      .get(`api/sellers/`, {
        headers: {
          Authorization: `Bearer  ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setSearchResultSeller(res.data);
      });
  }, []);

  useEffect(() => {
    if (saveResultSeller) {
      const filteredArr = searchResultSeller.filter(
        (sr) => sr.name === saveResultSeller.name
      );

      setFilteredResultSeller([...filteredArr]);
      console.log(filteredArr, searchResultSeller);
    } else {
      setFilteredResultSeller([]);
    }
  }, [saveResultSeller]);

  return (
    <div className="p-5 px-md-20 px-2xl-40 ">
      <Stack>
        <Autocomplete
          id="SearchSeller"
          getOptionLabel={(searchResultSeller) => `${searchResultSeller.contact}`}
          options={searchResultSeller}
          inputValue={saveResultSeller?.contact}
          isOptionEqualToValue={(option, value) => option.contact === value.contact}
          onChange={(event, v) => {
            setSaveResultSeller(v);
          }}
          noOptionsText={"No Such Seller Available"}
          renderOption={(props, searchResultSeller) => (
            <Box component="li" {...props} key={searchResultSeller.society_id}>
              {searchResultSeller.contact} {searchResultSeller.address}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              label="Search Seller By Number"
            
            />
          )}
        />
      </Stack>
      {filteredResultSeller.length > 0 ? (
        <div>
          <div className="mt-10">
            {filteredResultSeller?.map((item, idx) => (
              <div key={idx} className="border-2 border-sky-500 rounded-lg p-5">
                <h2 className="font-bold text-xl" >Name: {item.name}</h2>
                <h2 className="font-semibold text-normal">Contact No: {item.contact}</h2>
                <h2 className="font-semibold text-normal">Address: {item.address}</h2>
                <h2 className="font-semibold text-normal">Email Id: {item.email}</h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>No Data!</div>
      )}
    </div>
  );
};

export default SearchSeller;
