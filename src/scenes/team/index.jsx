import * as React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { mockDataTeam } from '../../data/mockData'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    {
      field: "id",
      headerName: "ID"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left"
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "access",
      tabindex: 0,
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.gray[100]} ml="5px" >
              {access}
            </Typography>
          </Box>
        )
      }
    },

  ]
  console.log(columns)

  return (
    <Box m={5}>
      <Header title="Manage Team" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[800],
              border: "none",
            },
            "& .MuiDataGrid-row": {
              "&:hover": {
                backgroundColor: colors.blueAccent[800],
              },
              "&:active": {
                backgroundColor: colors.blueAccent[800],
              }
            },
            "& .MuiDataGrid-row.Mui-selected": {
              backgroundColor: colors.blueAccent[800],
              "&:hover": {
                backgroundColor: colors.blueAccent[700],
              },
            },
            "& .MuiDataGrid-cell": {
              "&:hover": {
                backgroundColor: colors.blueAccent[600],
              },
              "&:focus": {
                backgroundColor: colors.blueAccent[600],
              },
              "&:active": {
                backgroundColor: colors.blueAccent[600],
              }
            },
            "& .name-column--cell": {
              color: colors.blueAccent[300]
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default Team