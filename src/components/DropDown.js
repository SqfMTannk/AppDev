import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const DropDownContainer = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#BC9193",
  };

  return (
    <div style={containerStyle}>
      <div>
        <label style={{ color: "#000000", marginBottom: "5px", marginLeft: "15px" }}>Subject</label>
        <Select
          value=""
          style={{ backgroundColor: "#CED4DA", color: "#fff", minWidth: "120px", marginLeft: "15px" }}
        >
          <MenuItem value="" disabled>
            Choose an option
          </MenuItem>
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
          <MenuItem value={30}>Option 3</MenuItem>
        </Select>
      </div>

      <div>
        <label style={{ color: "#000000", marginBottom: "5px", marginLeft: "15px" }}>Section</label>
        <Select
          value=""
          style={{ backgroundColor: "#CED4DA", color: "#fff", minWidth: "120px", marginLeft: "15px" }}
        >
          <MenuItem value="" disabled>
            Choose an option
          </MenuItem>
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
          <MenuItem value={30}>Option 3</MenuItem>
        </Select>
      </div>

      <Button variant="contained" style={{ marginLeft: "5px",backgroundColor: "#E8D9D9", color: "#8A3539"}}>
        Notification
      </Button>

      <Button variant="contained" style={{ marginLeft: "5px",backgroundColor: "#E8D9D9" , color: "#8A3539"}}>
        Generate Sheet
      </Button>
    </div>
  );
};

export default DropDownContainer;