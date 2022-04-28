import { Autocomplete, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchProperty = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [saveResult, setSaveResult] = useState("");
  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    axios
      .get(`api/societies/`, {
        headers: {
          Authorization: `Bearer  ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setSearchResult(res.data);
      });
  }, []);

  useEffect(() => {
    if (saveResult) {
      const filteredArr = searchResult.filter(
        (sr) => sr.name === saveResult.name
      );

      setFilteredResult([...filteredArr]);
      console.log(filteredArr, searchResult);
    } else {
      setFilteredResult([]);
    }
  }, [saveResult]);

  return (
    <div className="p-5 px-md-20 px-2xl-40 ">
      <Stack>
        <Autocomplete
          id="SearchProperty"
          getOptionLabel={(searchResult) => `${searchResult.name}`}
          options={searchResult}
          inputValue={saveResult?.name}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          onChange={(event, v) => {
            setSaveResult(v);
          }}
          noOptionsText={"No Such Property Available"}
          renderOption={(props, searchResult) => (
            <Box component="li" {...props} key={searchResult.society_id}>
              {searchResult.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              label="Search Property By Name"
            
            />
          )}
        />
      </Stack>
      {filteredResult.length > 0 ? (
        <div>
          <div className="">
            {filteredResult?.map((item, idx) => (
              <div key={idx}>
                <h2>{item.name}</h2>
                <h2>{item.society_id}</h2>
                <h2>{item.name}</h2>
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

export default SearchProperty;
