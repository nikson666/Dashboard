import * as React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataInvoices } from '../../data/mockData'
import { tokens } from '../../theme'
import Header from '../../components/Header'


const Invoices = () => {
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      )
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1
    },
  ]
  console.log(columns)

  return (
    <Box m={5}>
      <Header title="Invoices Balances" subtitle="List of Invoices Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <DataGrid
          rows={mockDataInvoices}
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

export default Invoices