import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ProfileSettings() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Box>
            <Box display={'grid'} gridAutoFlow={'column'} className='gridview'>
                <div style={{ padding: '15px 5px', marginBottom: '8px', marginTop: '32px' }}>
                    <Typography
                        variant="body2"
                        fontSize={25}
                        fontWeight={600}
                        color={'#20466c'}
                    // style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                    >
                        Profile Settings
                    </Typography>
                </div>
            </Box>
            <Box sx={{ height: 'auto' }} >

                <Box gap={5} display={'grid'} gridAutoFlow={'row'} width={580}>
                    <Box gap={10} gridTemplateColumns={"250px 250px"} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="First Name" size='small'   > </TextField>
                        <TextField label="Last Name" size='small'   > </TextField>
                    </Box>
                    <Box display={'grid'} gridTemplateColumns={"580px"} gridAutoFlow={'column'}>
                        <TextField label="Email" size='small'   ></TextField>
                    </Box>
                    <Box gap={10} gridTemplateColumns={"250px 250px"} display={'grid'} gridAutoFlow={'column'}>
                        <TextField type="password" label="Password"  size='small' > </TextField>
                        <TextField type="password" label="Confirm Password" size='small'   > </TextField>

                    </Box>
                    <Box gap={10} gridTemplateColumns={"250px 250px"} display={'grid'} gridAutoFlow={'column'}>
                        <span></span>
                        <Button variant="contained" size='medium' >
                            Save Changes
                        </Button>


                    </Box>

                </Box>
            </Box>
        </Box>
    )
}