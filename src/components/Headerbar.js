import { Avatar, Badge, Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Fade, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useStateContext } from '../contexts/ContextProvider';
import { ArrowCircleDown, CardTravel, Chat, ChatRounded, Logout, LogoutOutlined, Menu, Notifications, Settings, ShoppingCart, UsbRounded } from "@mui/icons-material";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deepPurple } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";


function HeaderBar() {
    const [userProfile, setUserProfile] = useState(false);
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click is outside the card
            if (userProfile && !document.getElementById('card-container').contains(event.target)) {
                setUserProfile(false);
            }
        };

        // Attach the event listener to the document body
        document.body.addEventListener('click', handleOutsideClick);

        // Cleanup the event listener on component unmount
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [userProfile]);
    const handleButtonClick = () => {
        // Toggle the card visibility when the button is clicked
        setUserProfile(!userProfile);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: 2,
            top: 4,
            border: `0px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <Grid justifyContent={"right"} id="card-container" className="headerbar" position={"fixed"} container m={2} columns={10} p={1} height={'55px'} direction="row"  >
            
            <Grid sx={{ flexGrow: 0.02 }}>
                <Tooltip title="Notification" arrow>
                    <IconButton>
                        <StyledBadge color="error" variant="dot" badgeContent={1}>
                            <Notifications style={{ color: "#0098e5" }} />
                        </StyledBadge>
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid >
                <Tooltip title="Profile" arrow >
                    <Button onClick={handleButtonClick}>
                        <Avatar sx={{ bgcolor: deepPurple[500], width: 25, height: 25 }}><span style={{ fontSize: "14px", fontWeight: "500" }}>M</span></Avatar>
                        <span style={{ fontSize: '14px', margin: '0 2px', fontWeight: 600, color: "rgba(80,80,180,0.9)", fontFamily: '"Brush Script MT", cursive !important"' }}>Hi,</span>
                        <span style={{ fontSize: '15px', margin: '0 2px', fontWeight: 700 }}>Soukrat</span>
                        <FontAwesomeIcon style={{ fontSize: '10px', margin: '0 0 0 15px', fontWeight: 700 }} icon={faAngleDown} />
                    </Button>
                </Tooltip>
            </Grid>
            {userProfile ?
                <Card sx={{ minWidth: 175, position: "absolute", top: 60, right: 0, zIndex: 10, paddingTop: '10px', borderRadius: '10px' }}>
                    <IconButton style={{ position: "absolute", right: 8, top: 0 }} color="error" onClick={() => { setUserProfile(false) }}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </IconButton>
                    <CardContent style={{ display: 'grid', gap: 10, marginTop: '8px' }}>
                        <Link  style={{display: 'grid',textDecoration:"none"}} to={"/Settings"}>
                            <Button style={{ justifyContent: "left" }} color="primary" size="small" startIcon={<Settings />}>
                                Settings
                            </Button>
                        </Link>
                        <Button style={{ justifyContent: "left" }} color="primary" size="small" startIcon={<LogoutOutlined />}>
                            Logout
                        </Button>
                    </CardContent>

                </Card> : <></>}

        </Grid>
    );
}
export default HeaderBar;