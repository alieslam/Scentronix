import { Box, Modal } from "@mui/material";
import React from "react";
import CustomTypography from "./CustomTypography";

export default function BuyModalError(props) {
  const { open, handleClose, errorHeaderMessage, errorBodyMessage } = props;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Error Buy"
      aria-describedby="issue when buying product"
    >
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 bg-white border-2 border-slate-300 rounded-md shadow-24 p-4">
        <CustomTypography id="Header Error message" variant="h3" component="h3">
          {errorHeaderMessage}
        </CustomTypography>
        <CustomTypography id="Body Error message" className="mt-2">
          {errorBodyMessage}
        </CustomTypography>
      </Box>
    </Modal>
  );
}
