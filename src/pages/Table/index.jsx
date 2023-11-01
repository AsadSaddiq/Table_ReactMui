import React, { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import {
  Box,
  Button,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import "./styles.css";

import {
  title,
  topBtn,
  topBar,
  btnText,
  btnSection,
  topToolBar,
  titleName,
  toolBarRightSection,
  toolBarRightBtn,
  arrowBtn,
  arrowColor,
  rightBtn,
  rightBtnA,
  rightBtnB,
  rightBtnC,
  rightBtnD,
  rightBtnE,
} from "./styles";
import { Data } from "./Data";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const options = ["Option 1", "Option 2"];

const Example = () => {
  const isNotMonday = (date) => {
    return dayjs(date).day() !== 1; // 0 is Sunday, 1 is Monday, 2 is Tuesday, and so on
  };
  const currentDate = dayjs();
  const daysUntilMonday = (8 - currentDate.day()) % 7;
  const defaultDate = currentDate.add(daysUntilMonday, "day");
  const handleNextMondayClick = () => {
    // Calculate the next Monday from the current date
    const nextMonday = dateValue.add(7, "day");
    setDateValue(nextMonday);
  };
  const handlePreviousMondayClick = () => {
    // Calculate the next Monday from the current date
    const nextMonday = dateValue.add(-7, "day");
    setDateValue(nextMonday);
  };

  const theme = useTheme();
  const [projects, setProjects] = useState({});
  const [rowCount, setRowCount] = useState(0);
  const [sorting, setSorting] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 25,
  });
  const [rowSelection, setRowSelection] = useState({});
  const [tableLoading, setTableLoading] = useState(false);
  const [value, setValue] = React.useState(options[0]);
  const [fieldState, useFieldState] = useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [dateValue, setDateValue] = React.useState(defaultDate);

  const approvalColumns = useMemo(
    () => [
      {
        id: "id",
        columns: [
          {
            accessorKey: "EmployeeNum",
            header: "EMPID",
            size: 1,
          },
          {
            accessorKey: "TotalHours",
            header: "Total HRS",
            // size: 1,
            // Cell: ({ cell }) => (
            //   <Box>{"$" + commaFormattedString(cell.getValue())}</Box>
            // ),
            size: 100,
            muiTableHeadCellProps: {
              align: "right",
            },
            muiTableBodyCellProps: {
              align: "right",
            },
          },
          {
            accessorKey: "RemainingHrsS",
            header: "Submitted HRS",
            // size: 1,
            // Cell: ({ cell }) => (
            //   <Box>{"$" + commaFormattedString(cell.getValue())}</Box>
            // ),
            size: 100,
            muiTableHeadCellProps: {
              align: "right",
            },
            muiTableBodyCellProps: {
              align: "right",
            },
          },
          {
            accessorKey: "Overtime",
            header: "Over Time",
            // size: 1,
            // Cell: ({ cell }) => (
            //   <Box>{"$" + commaFormattedString(cell.getValue())}</Box>
            // ),
            size: 100,
            muiTableHeadCellProps: {
              align: "right",
            },
            muiTableBodyCellProps: {
              align: "right",
            },
          },
          {
            accessorKey: "RemainingHrsE",
            header: "Entered HRS",
            // size: 1,
            // Cell: ({ cell }) => (
            //   <Box>{"$" + commaFormattedString(cell.getValue())}</Box>
            // ),
            size: 100,
            muiTableHeadCellProps: {
              align: "right",
            },
            muiTableBodyCellProps: {
              align: "right",
            },
          },
          {
            accessorKey: "ApprovedHrs",
            header: "Approved HRS",
            // size: 1,
            // Cell: ({ cell }) => (
            //   <Box>{"$" + commaFormattedString(cell.getValue())}</Box>
            // ),
            size: 100,
            muiTableHeadCellProps: {
              align: "right",
            },
            muiTableBodyCellProps: {
              align: "right",
            },
          },
          {
            accessorKey: "RejectedHrs",
            header: "Rejected HRS",
            // size: 1,
            // Cell: ({ cell }) => (
            //   <Box>{"$" + commaFormattedString(cell.getValue())}</Box>
            // ),
            size: 100,
            muiTableHeadCellProps: {
              align: "right",
            },
            muiTableBodyCellProps: {
              align: "right",
            },
          },
          {
            accessorFn: (row) => new Date(row.StartDate),
            accessorKey: "StartDate",
            header: "Order Date",
            // size: 1,
            size: 100,
            invertSorting: true,
            Cell: ({ cell }) => (
              <Box sx={{ fontSize: "12px !important" }}>
                {cell.getValue()?.toLocaleDateString()}
              </Box>
            ),
          },
          {
            accessorFn: (row) => new Date(row.EndDate),
            accessorKey: "EndDate",
            header: "End Date",
            // size: 1,
            size: 100,
            invertSorting: true,
            Cell: ({ cell }) => (
              <Box sx={{ fontSize: "12px !important" }}>
                {cell.getValue()?.toLocaleDateString()}
              </Box>
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <Box>
      <Box sx={topBar}>
        <Box sx={title}>
          <NotificationsActiveIcon />
          <Typography variant="span">Time Entry</Typography>
        </Box>
        <Box sx={btnSection}>
          <Button variant="contained" sx={topBtn}>
            <InsertDriveFileIcon sx={btnText} />
            Monthly Summary
          </Button>
          <Button variant="contained" sx={topBtn}>
            <AddIcon sx={btnText} />
            New Record
          </Button>
          <Button variant="contained" sx={topBtn}>
            <CheckCircleIcon sx={btnText} />
            Submit Week
          </Button>
          <Button variant="contained" sx={topBtn}>
            <FileCopyIcon sx={btnText} />
            Copy Previous Week
          </Button>
        </Box>
      </Box>

      <MaterialReactTable
        initialState={{
          density: "compact",
          pagination: {
            pageIndex: 0,
            pageSize: 15,
          },
        }}
        columns={approvalColumns}
        data={Data || []}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableGlobalFilter={false}
        enableExpandAll={false}
        enableFullScreenToggle={false}
        enableFilters={false}
        enableDensityToggle={false}
        enableHiding={false}
        state={{
          showProgressBars: tableLoading,
          expanded,
        }}
        // onExpandedChange={setExpanded}
        muiLinearProgressProps={{
          color: "secondary",
        }}
        positionToolbarAlertBanner="bottom"
        muiTablePaginationProps={{
          sx: {
            "& .MuiTablePagination-selectLabel": {
              fontSize: "12px !important",
            },
            "& .MuiTablePagination-displayedRows": {
              fontSize: "12px !important",
            },
            fontSize: "12px !important",
          },
        }}
        muiTableBodyRowProps={({ row }) => ({
          selected: rowSelection[row.id],
        })}
        muiTableHeadCellProps={{
          sx: {
            border: "1px solid grey",
            fontSize: "12px",
            py: 0,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: "1px solid grey",
            py: 0,
            fontSize: "12px",
          },
        }}
        muiTableDetailPanelProps={{
          sx: {
            backgroundColor: "background.paper",
          },
        }}
        muiTablePaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "0",
          },
        }}
        renderDetailPanel={({ row }) => <div>asdf</div>}
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <Box sx={topToolBar}>
              <Typography sx={titleName}>Employees:</Typography>
              <Box>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo1"
                  disableClearable={true}
                  options={options}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  sx={{ width: 120 }}
                  ListboxProps={{ sx: { fontSize: "12px" } }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputLabelProps={{
                        sx: {
                          fontSize: "12px",
                          top: "-3px",
                        },
                        ...params.InputLabelProps,
                      }}
                      InputProps={{
                        sx: {
                          height: "30px",
                          minHeight: "5px",
                          fontSize: "12px",
                        },
                        ...params.InputProps,
                      }}
                      label="Customer"
                      size="small"
                      required
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Box>
              <Typography sx={titleName}>Week Data:</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "30px",
                      fontSize: "12px",
                    },
                    width: "140px",
                    // height: "20px",
                  }}
                  label="Date  ."
                  value={dateValue}
                  onChange={(newValue) => setDateValue(newValue)}
                  shouldDisableDate={isNotMonday}
                />
              </LocalizationProvider>

              <Box sx={toolBarRightSection}>
                <Box sx={toolBarRightBtn}>
                  <Button
                    variant="contained"
                    sx={arrowBtn}
                    onClick={handlePreviousMondayClick}
                  >
                    <ArrowBackIcon sx={arrowColor} />
                  </Button>

                  <Button
                    variant="contained"
                    sx={arrowBtn}
                    onClick={handleNextMondayClick}
                  >
                    <ArrowForwardIcon sx={arrowColor} />
                  </Button>
                </Box>

                <Box>
                  <Button variant="outlined" sx={rightBtn}>
                    Entered
                  </Button>
                  <Button variant="contained" sx={rightBtnA}>
                    Submitted
                  </Button>
                  <Button variant="contained" sx={rightBtnB}>
                    Overtime
                  </Button>
                  <Button variant="contained" sx={rightBtnC}>
                    Approved
                  </Button>
                  <Button variant="contained" sx={rightBtnD}>
                    Rejected
                  </Button>
                  <Button variant="contained" sx={rightBtnE}>
                    Entry from an other plan
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default Example;
