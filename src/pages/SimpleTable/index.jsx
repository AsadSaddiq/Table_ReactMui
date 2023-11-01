import React, { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import {
  Box,
  Button,
  Typography,
  TextField,
  Autocomplete,
  styled,
  Paper,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import {
  title,
  topBtn,
  topBar,
  btnText,
  btnSection,
  topToolBar,
  selectBox,
  titleName,
  dateBox,
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
import { data } from "./Data";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { weekData } from "./Data";

const options = ["Option 1", "Option 2"];
const Example = () => {
  const isNotMonday = (date) => {
    return dayjs(date).day() !== 1;
  };
  const currentDate = dayjs();
  const daysUntilMonday = (8 - currentDate.day()) % 7;
  const defaultDate = currentDate.add(daysUntilMonday, "day");
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [fieldState, useFieldState] = useState(false);
  const [dateValue, setDateValue] = React.useState(defaultDate);
  const [expanded, setExpanded] = useState({});

  const handleNextMondayClick = () => {
    const nextMonday = dateValue.add(7, "day");
    setDateValue(nextMonday);
  };
  const handlePreviousMondayClick = () => {
    const nextMonday = dateValue.add(-7, "day");
    setDateValue(nextMonday);
  };
  const handleNextMonthMondayClick = () => {
    const nextMonday = dateValue.add(-28, "day");
    setDateValue(nextMonday);
  };
  const theme = useTheme();
  const columns = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "DATE",
        size: 10,
      },
      {
        accessorKey: "startTime",
        header: "START TIME",
        size: 10,
      },
      {
        accessorKey: "endTime",
        header: "END TIME",
        size: 10,
      },
      {
        accessorKey: "hrs",
        header: "HRS",
        size: 10,
      },
      {
        accessorKey: "labourType",
        header: "LABOUR TYPE",
        size: 10,
      },
      {
        accessorKey: "project",
        header: "PROJECT",
        size: 10,
      },
      {
        accessorKey: "phase",
        header: "PHASE",
        size: 40,
      },
      {
        accessorKey: "indirectCode",
        header: "INDIRECT CODE",
        size: 10,
      },
      {
        accessorKey: "comment",
        header: "COMMENTS",
        size: 20,
      },
      {
        accessorKey: "overTime",
        header: "OVERTIME",
        size: 20,
      },
      {
        accessorKey: "lunchTaken",
        header: "LUNCH TAKEN",
        size: 20,
      },
      {
        accessorKey: "operation",
        header: "OPERATION",
        size: 20,
      },
    ],
    []
  );

  const NewBox = styled(Box)({
    border: "1px solid #877D7D",
    minWidth: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    // m: "2px",
    borderRadius: "4px",
  });

  return (
    <Box
      sx={{
        backgroundColor: "#F7F3F3",
        m: 0,
        height: "100vh",
      }}
    >
      <Box sx={{ m: "8px", my: 0 }}>
        <Box sx={{ backgroundColor: "white" }}>
          <Paper elevation={2}>
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
          </Paper>
          <Paper elevation={2}>
            <MaterialReactTable
              columns={columns}
              data={data}
              enableColumnVirtualization
              enableGlobalFilter={false}
              enableFullScreenToggle={false}
              enableFilters={false}
              enableDensityToggle={false}
              enableColumnActions={false}
              enableHiding={false}
              // onExpandedChange={setExpanded}
              muiLinearProgressProps={{
                color: "secondary",
              }}
              muiTableHeadCellProps={{
                sx: {
                  fontSize: "12px",
                  // padding: 0,
                  py: 0,
                  paddingBottom: 0,
                  backgroundColor: "#A19B9B",
                  fontWeight: 500,
                },
              }}
              muiTableBodyCellProps={{
                sx: {
                  py: 0,
                  fontSize: "12px",
                },
              }}
              renderDetailPanel={({ row }) => (
                <Box
                  sx={{
                    display: "flex",
                    // justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="span">
                      Qty: &quot;{row.original.qty}&quot;
                    </Typography>
                    <Typography variant="span">
                      Resource: &quot;{row.original.resource}&quot;
                    </Typography>
                    <Typography variant="span">
                      Expense: &quot;{row.original.expenseCode}&quot;
                    </Typography>
                    <Typography variant="span">
                      JCDept: &quot;{row.original.jcdept}&quot;
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="span">Actions:</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          margin: "6px",
                        }}
                      >
                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              alignItems: "center",
                              backgroundColor: "red",
                              margin: "4px",
                              p: "1px",
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              alignItems: "center",
                              backgroundColor: "red",
                              margin: "4px",
                              p: "1px",
                            }}
                          >
                            <Typography variant="span">Delete</Typography>
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ margin: "4px", p: "1px" }}
                          >
                            Duplicat
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ margin: "4px", p: "1px" }}
                          >
                            Submit
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
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
                        }}
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
                          onClick={handleNextMonthMondayClick}
                        >
                          <ArrowUpwardIcon sx={arrowColor} />
                        </Button>
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
                        <Typography>Colors for different status:</Typography>
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
                  </Box>
                );
              }}
            />
          </Paper>
        </Box>

        <Box sx={{ my: 1 }}>
          <Paper elevation={2}>
            <Box sx={topBar}>
              <Box sx={title}>
                <NotificationsActiveIcon />
                <Typography variant="span">Weekly Report</Typography>
              </Box>
            </Box>
          </Paper>

          <Paper>
            <Box sx={{ p: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 3,
                  backgroundColor: "#877D7D",
                }}
              >
                <Box sx={{ minWidth: "125px" }}>
                  <Typography>Week Hours</Typography>
                </Box>
                <Box>
                  <Typography>11 JAN-2020</Typography>
                </Box>
                <Box>
                  <Typography>11 JAN-2020</Typography>
                </Box>
                <Box>
                  <Typography>11 JAN-2020</Typography>
                </Box>
                <Box>
                  <Typography>11 JAN-2020</Typography>
                </Box>
                <Box>
                  <Typography>11 JAN-2020</Typography>
                </Box>
                <Box>
                  <Typography>11 JAN-2020</Typography>
                </Box>
                <Box>
                  <Typography>11 JAN-2020</Typography>
                </Box>
                <Box>
                  <Typography>11 JAN-2020</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 3,
                  m: "4px",
                }}
              >
                <Box sx={{ minWidth: "130px" }}>
                  <Typography>Production Hours</Typography>
                </Box>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 3,
                  m: "4px",
                }}
              >
                <Box sx={{ minWidth: "130px" }}>
                  <Typography>Indirect Hours</Typography>
                </Box>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 3,
                  m: "4px",
                }}
              >
                <Box sx={{ minWidth: "130px" }}>
                  <Typography>Total Hours</Typography>
                </Box>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
                <NewBox>
                  <Typography>15.20</Typography>
                </NewBox>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Example;
