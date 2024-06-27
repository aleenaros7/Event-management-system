import { Box } from "@mui/material";
const { styled } = require("@mui/system");

const DataGridContainer = styled(Box)(({ theme }) => ({
  mt: "20px",
  pb: "20px",
  height: "75vh",
  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    borderBottom: "none",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: theme.palette.secondary.light,
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary[100],
    borderTop: "none",
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: `${theme.palette.primary.main} !important`,
  },
}));

export default DataGridContainer;
