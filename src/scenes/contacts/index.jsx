import * as React from 'react'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataContacts } from '../../data/mockData'
import { tokens } from '../../theme'
import Header from '../../components/Header'


const Contacts = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
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
      field: "address",
      headerName: "Address",
      flex: 1.5
    },
    {
      field: "city",
      headerName: "City",
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
    },
    {
      field: "registrarId",
      headerName: "RegistrarID",
    },
  ]
  console.log(columns)

  return (
    <Box m={5}>
      <Header title="Contacts Information" subtitle="List of Contacts for Future Reference" />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{
            Toolbar: GridToolbar
          }}
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
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: colors.gray[100]
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default Contacts