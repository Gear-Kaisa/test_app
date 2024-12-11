import { faBars, faCircle, faListDots, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dashboard, CalendarMonth } from '@mui/icons-material';
import { Box, Chip, IconButton, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
function SideBar() {
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(true);
    const [hasImage, setHasImage] = useState(true);
    const [theme, setTheme] = useState('light');
    const { currentColor, currentImage, colapsed, setColapsed, iscolapsed } = useStateContext();

    useEffect(() => {
        const handleResize = () => {
            // Check if the window size is very small, indicating it might be minimized
            if (window.innerWidth <= 1200) {
                setColapsed(true);
            } else {
                setColapsed(false);
            }
        };
        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    // hex to rgba converter
    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const themes = {
        light: {
            sidebar: {
                backgroundColor: '#ffffff',
                color: '#607489',
            },
            menu: {
                menuContent: '#fbfcfd',
                icon: '#ea3b15',

                hover: {
                    backgroundColor: '#c5e4ff',
                    color: '#44596e',
                },
                disabled: {
                    color: '#9fb6cf',
                },
            },
        },
        dark: {
            sidebar: {
                backgroundColor: '#0b2948',
                color: '#8ba1b7',
            },
            menu: {
                menuContent: '#082440',
                icon: '#59d0ff',
                hover: {
                    backgroundColor: '#00458b',
                    color: '#b6c8d9',
                },
                disabled: {
                    color: '#3e5e7e',
                },
            },
        },
    };
    const menuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        icon: {
            color: themes[theme].menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,

            },
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(themes[theme].menu.menuContent, hasImage && !colapsed ? 0.4 : 1)
                    : 'transparent',
        }),
        button: {
            borderRadius: '10px',
            margin: '10px 10px',
            fontWeight: '600',
            padding: '12px',
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: hexToRgba(currentColor, hasImage ? 0.9 : 1),
                color: themes[theme].menu.hover.color,
            },
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
                backgroundColor: hexToRgba(currentColor, hasImage ? 0.9 : 1),
                transition: '.5s',
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };
    const submenuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,

        },
        icon: {
            color: themes[theme].menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,

            },
        },
        SubMenuExpandIcon: {
            color: '#ea3b15',
        },
        SubMenuExpand: {
            margin: '50px',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0 && !colapsed
                    ? 'transparent'
                    : '#eee',
        }),
        button: {
            borderRadius: '10px',
            margin: '2px 10px',
            fontWeight: '600',
            padding: '12px',
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: hexToRgba(currentColor, hasImage ? 0.9 : 1),
                color: themes[theme].menu.hover.color,
            },
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
                backgroundColor: hexToRgba(currentColor, hasImage ? 0.9 : 1),
                transition: '.5s',
            },

        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
        icon: ({ level }) => ({
            color: '#ea3b15', 
            fontSize: level === 1 ? '5px' : '15px',
        })
    };
    return (
        <div style={{ display: 'flex', position: 'fixed', zIndex: 1000, height: '100%' }}>
            <Sidebar collapsed={colapsed} image={currentImage} toggled={toggled} onBackdropClick={() => setToggled(false)}
                onBreakPoint={setBroken} backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
                rootStyles={{
                    color: themes[theme].sidebar.color,
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {!colapsed ? <Box my="20px">

                        <Box textAlign="center" position={'relative'}>
                            <svg width="200" height="50" viewBox="0 0 493 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="133" y="40" width="60" height="51" fill="#044522" />
                                <rect x="336" y="3" width="157" height="147" fill="#ea3b15" />
                                <path d="M0 3H162V150H0V3Z" fill="#044522" />
                                <rect x="164" y="3" width="162" height="147" fill="#044522" />
                                <path d="M100.182 54.1818C99.6364 49.5758 97.4242 46 93.5455 43.4545C89.6667 40.9091 84.9091 39.6364 79.2727 39.6364C75.1515 39.6364 71.5455 40.303 68.4545 41.6364C65.3939 42.9697 63 44.803 61.2727 47.1364C59.5758 49.4697 58.7273 52.1212 58.7273 55.0909C58.7273 57.5758 59.3182 59.7121 60.5 61.5C61.7121 63.2576 63.2576 64.7273 65.1364 65.9091C67.0152 67.0606 68.9848 68.0151 71.0455 68.7727C73.1061 69.5 75 70.0909 76.7273 70.5455L86.1818 73.0909C88.6061 73.7273 91.303 74.6061 94.2727 75.7273C97.2727 76.8485 100.136 78.3788 102.864 80.3182C105.621 82.2273 107.894 84.6818 109.682 87.6818C111.47 90.6818 112.364 94.3636 112.364 98.7273C112.364 103.758 111.045 108.303 108.409 112.364C105.803 116.424 101.985 119.652 96.9545 122.045C91.9545 124.439 85.8788 125.636 78.7273 125.636C72.0606 125.636 66.2879 124.561 61.4091 122.409C56.5606 120.258 52.7424 117.258 49.9545 113.409C47.197 109.561 45.6364 105.091 45.2727 100H56.9091C57.2121 103.515 58.3939 106.424 60.4545 108.727C62.5455 111 65.1818 112.697 68.3636 113.818C71.5758 114.909 75.0303 115.455 78.7273 115.455C83.0303 115.455 86.8939 114.758 90.3182 113.364C93.7424 111.939 96.4545 109.97 98.4545 107.455C100.455 104.909 101.455 101.939 101.455 98.5455C101.455 95.4545 100.591 92.9394 98.8636 91C97.1364 89.0606 94.8636 87.4848 92.0455 86.2727C89.2273 85.0606 86.1818 84 82.9091 83.0909L71.4545 79.8182C64.1818 77.7273 58.4242 74.7424 54.1818 70.8636C49.9394 66.9848 47.8182 61.9091 47.8182 55.6364C47.8182 50.4242 49.2273 45.8788 52.0455 42C54.8939 38.0909 58.7121 35.0606 63.5 32.9091C68.3182 30.7273 73.697 29.6364 79.6364 29.6364C85.6364 29.6364 90.9697 30.7121 95.6364 32.8636C100.303 34.9848 104 37.8939 106.727 41.5909C109.485 45.2879 110.939 49.4848 111.091 54.1818H100.182ZM134.716 124H122.898L157.08 30.9091H168.716L202.898 124H191.08L163.261 45.6364H162.534L134.716 124ZM139.08 87.6364H186.716V97.6364H139.08V87.6364ZM217.398 124V30.9091H248.852C256.155 30.9091 262.125 32.2273 266.761 34.8636C271.428 37.4697 274.883 41 277.125 45.4545C279.367 49.9091 280.489 54.8788 280.489 60.3636C280.489 65.8485 279.367 70.8333 277.125 75.3182C274.913 79.803 271.489 83.3788 266.852 86.0455C262.216 88.6818 256.277 90 249.034 90H226.489V80H248.67C253.67 80 257.686 79.1364 260.716 77.4091C263.746 75.6818 265.943 73.3485 267.307 70.4091C268.701 67.4394 269.398 64.0909 269.398 60.3636C269.398 56.6364 268.701 53.303 267.307 50.3636C265.943 47.4242 263.731 45.1212 260.67 43.4545C257.61 41.7576 253.549 40.9091 248.489 40.9091H228.67V124H217.398ZM322.148 119.364V53.5455H340.466V119.364H322.148ZM298.375 95.6364V77.3182H364.193V95.6364H298.375ZM415.25 124H386.523V30.9091H416.523C425.553 30.9091 433.28 32.7727 439.705 36.5C446.129 40.197 451.053 45.5151 454.477 52.4545C457.902 59.3636 459.614 67.6364 459.614 77.2727C459.614 86.9697 457.886 95.3182 454.432 102.318C450.977 109.288 445.947 114.652 439.341 118.409C432.735 122.136 424.705 124 415.25 124ZM397.795 114H414.523C422.22 114 428.598 112.515 433.659 109.545C438.72 106.576 442.492 102.348 444.977 96.8636C447.462 91.3788 448.705 84.8485 448.705 77.2727C448.705 69.7576 447.477 63.2879 445.023 57.8636C442.568 52.4091 438.902 48.2273 434.023 45.3182C429.144 42.3788 423.068 40.9091 415.795 40.9091H397.795V114Z" fill="rgba(255,255,255,1)" />
                            </svg>
                            {window.innerWidth <= 1200?
                            <IconButton onClick={iscolapsed} style={{ position: 'absolute', right: '10px', bottom: '-40px' }} >
                                <FontAwesomeIcon icon={faXmark} style={{ color: '#FE3003', height: "25", width: "25" }} />
                            </IconButton>:<></>}
                            <Typography variant="h5" my={1} fontWeight="600" fontSize={14} color="#565656"/*#29af8c*/>
                                School of Architecture,<br />
                                Planning & Design
                            </Typography>
                        </Box>

                    </Box> : <Menu menuItemStyles={menuItemStyles} style={{ marginTop: '10px', right: '5px', top: '10px' }}>
                        <MenuItem onClick={iscolapsed} icon={< FontAwesomeIcon icon={faBars} style={{ height: '19px', width: '19px' }} />} >  </MenuItem>
                    </Menu>}
                    <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '20px' }}>
                        <Typography
                            variant="body2"
                            fontSize={12}
                            fontWeight={600}
                            style={{ opacity: colapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                        >
                            General
                        </Typography>
                    </div>
                    <Menu menuItemStyles={menuItemStyles}>
                        <MenuItem icon={<Dashboard style={{ height: '19px', width: '19px' }}></Dashboard>} component={<NavLink to="/Dashboard" />}> Dashboard </MenuItem>
                        <MenuItem icon={<CalendarMonth style={{ height: '19px', width: '19px' }} />} suffix={<Chip label="New" variant="outlined" color="error" size="small" />} component={<NavLink to="/Calendar" />}> Calendar </MenuItem>
                    </Menu>
                    <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '20px' }}>
                        <Typography
                            variant="body2"
                            fontSize={12}
                            fontWeight={600}
                            style={{ opacity: colapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                        >
                            Management
                        </Typography>
                    </div>
                    <Menu menuItemStyles={submenuItemStyles}>
                        <SubMenu label="Management" icon={<FontAwesomeIcon icon={faListDots} />}>
                            <MenuItem style={{ height: '40px' }} icon={<FontAwesomeIcon icon={faCircle} />} component={<NavLink to="/Salle" />}> Salle </MenuItem>
                            <MenuItem style={{ height: '40px' }} icon={<FontAwesomeIcon icon={faCircle} />} component={<NavLink to="/Classe" />}> Classe </MenuItem>
                            <MenuItem style={{ height: '40px' }} icon={<FontAwesomeIcon icon={faCircle} />} component={<NavLink to="/Professeur" />}> Professeur </MenuItem>
                            <MenuItem style={{ height: '40px' }} icon={<FontAwesomeIcon icon={faCircle} />} component={<NavLink to="/Module" />}> Module </MenuItem>
                            <MenuItem style={{ height: '40px' }} icon={<FontAwesomeIcon icon={faCircle} />} component={<NavLink to="/Categorie" />}> Categorie </MenuItem>
                        </SubMenu>

                    </Menu>
                </div>
            </Sidebar>
        </div>
    )
}
export default SideBar;