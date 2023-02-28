import React, { useState } from 'react'
import { Menu, MenuItem, Sidebar as SidebarPro, useProSidebar, sidebarClasses, menuClasses } from 'react-pro-sidebar'
import { useTheme, Box, IconButton, Typography, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AdminPhoto from '../../common/admin.png'

const Item = ({ title, to, icon, selected, setSelected }) => (
    <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
        component={<Link to={to} />}
    >
        <Typography>{title}</Typography>
    </MenuItem>
);

const Sidebar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const { collapseSidebar, collapsed } = useProSidebar()
    const [selected, setSelected] = useState('Dashboard')

    return (
        <SidebarPro
            rootStyles={{
                border: "none",
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: colors.primary[400],
                },
                [`.${menuClasses.subMenuContent}`]: {
                    backgroundColor: colors.primary[400],
                    [`.${menuClasses.button}`]: {
                        paddingLeft: !collapsed && "15%"
                    }
                },
                [`.${menuClasses.button}`]: {
                    "&:hover": {
                        backgroundColor: colors.blueAccent[900],
                    }
                },
                [`.${menuClasses.active}`]: {
                    zIndex: 10,
                    color: colors.blueAccent[200],
                    [`.${menuClasses.button}`]: {
                        boxShadow: `inset 0px 0px 70px ${colors.blueAccent[800]}`,
                        transition: 'all 0.2s ease',
                    }
                },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                ml={2}
            >
                {!collapsed &&
                    <Typography variant='h3' color={colors.gray[100]}>
                        Admins
                    </Typography>
                }
                <IconButton onClick={() => collapseSidebar()}>
                    <MenuOutlinedIcon />
                </IconButton>
            </Box>
            {/* USER */}
            {!collapsed && (
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" m={2}>
                    <Avatar
                        alt="Admin"
                        src={AdminPhoto}
                        sx={{ width: '50%', height: '50%', borderRadius: 0 }}
                    />
                    <Typography fontWeight="bold" variant='h4' color={colors.gray[100]}>
                        Nikita Kucherenko
                    </Typography>
                    <Typography variant='h5' color={colors.greenAccent[500]}>
                        Status: Admin
                    </Typography>
                </Box>
            )
            }
            {/* MENU */}
            <Menu>
                <Item title="Dashboard" selected={selected} setSelected={setSelected} icon={<HomeOutlinedIcon />} to='/' />

                <Typography display="flex" justifyContent="center" variant='h5' color={colors.gray[400]}>Data</Typography>
                <Item title="Manage Team" selected={selected} setSelected={setSelected} icon={<PeopleOutlinedIcon />} to='/team' />
                <Item title="Contscts Information" selected={selected} setSelected={setSelected} icon={<ContactsOutlinedIcon />} to='/contacts' />
                <Item title="Invoices Balances" selected={selected} setSelected={setSelected} icon={<ReceiptOutlinedIcon />} to='/invoices' />

                <Typography display="flex" justifyContent="center" variant='h5' color={colors.gray[400]}>Pages</Typography>
                <Item title="Profile Form" selected={selected} setSelected={setSelected} icon={<PersonOutlinedIcon />} to='/form' />
                <Item title="Calendar" selected={selected} setSelected={setSelected} icon={<CalendarTodayOutlinedIcon />} to='/calendar' />
                <Item title="FAQ" selected={selected} setSelected={setSelected} icon={<HelpOutlinedIcon />} to='/faq' />

                <Typography display="flex" justifyContent="center" variant='h5' color={colors.gray[400]}>Charts</Typography>
                <Item title="Geograhpy Chart" selected={selected} setSelected={setSelected} icon={<MapOutlinedIcon />} to='/geography' />
                <Item title="Line Chart" selected={selected} setSelected={setSelected} icon={<TimelineOutlinedIcon />} to='/line' />
                <Item title="Pie Chart" selected={selected} setSelected={setSelected} icon={<PieChartOutlineOutlinedIcon />} to='/pie' />
                <Item title="Bar Chart" selected={selected} setSelected={setSelected} icon={<BarChartOutlinedIcon />} to='/bar' />
            </Menu>
        </SidebarPro >
    )
}

export default Sidebar