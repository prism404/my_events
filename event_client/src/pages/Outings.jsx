import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from '@mui/material/TextField';
import axios from "axios";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

function Outings() {
  const [options, setOptions] = useState([]);

  const loadOptions = async (inputValue) => {
    try {
      const result = await axios.get(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&rows=100start=10`
      );
      setOptions(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Autocomplete
      sx={{ mt: 10 }}
      options={options}
      loadOptions={loadOptions}
      getOptionLabel={(option) => `${option.name} (${option.email})`}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search by name or email"
          variant="outlined"
        />
      )}
    />
  );
}

export default Outings;
