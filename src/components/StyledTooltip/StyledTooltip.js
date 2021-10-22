import React from "react";
import { Fade, Tooltip } from "@mui/material";

const StyledTooltip = ({ children, title }) => {
  return (
    <Tooltip
      title={title}
      TransitionComponent={Fade}
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: 15,
          },
        },
      }}
      TransitionProps={{ timeout: 600 }}
    >
      {children}
    </Tooltip>
  );
};

export default StyledTooltip;
