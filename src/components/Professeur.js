import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@mui/styles';
import { Label, Password } from '@mui/icons-material';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
        },

        '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            outline: 'none',
        }
    },
});


const rows = [
    { id: 1, FirstName: 'MOHAMMED', LastName: 'SOUKRAT', Username: 'MOHAMMED.SOUKRAT@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 2, FirstName: 'SALAH', LastName: 'BOUKERKOUR', Username: 'SALAH.BOUKERKOUR@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 3, FirstName: 'AMINE', LastName: 'ENNAWAOUI', Username: 'AMINE.ENNAWAOUI@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 4, FirstName: 'ACHRAF', LastName: 'NOUR-EDDINE', Username: 'ACHRAF.NOUR-EDDINE@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 5, FirstName: 'TARIQ', LastName: 'EL-GARNAOUI', Username: 'TARIQ.EL-GARNAOUI@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 6, FirstName: 'SALWA', LastName: 'AMOUR', Username: 'SALWA.AMOUR@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 7, FirstName: 'IKRAM', LastName: 'BOUCHRA', Username: 'IKRAM.BOUCHRA@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 8, FirstName: 'BADER-EDDINE', LastName: 'MAHBOUL', Username: 'BADER-EDDINE.MAHBOUL@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 9, FirstName: 'ANAS', LastName: 'DAHMANE', Username: 'ANAS.DAHMANE@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 10, FirstName: 'RACHID', LastName: 'ALILOUCH', Username: 'RACHID.ALILOUCH@um6p.ma', Password: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },

];
export default function Professeur() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'FirstName',
            headerName: 'First Name',
            width: 180,
        },
        {
            field: 'LastName',
            headerName: 'Last Name',
            width: 180,
        },
        {
            field: 'Username',
            headerName: 'User Name',
            width: 300,
        },
        {
            field: 'Password',
            type: 'password',
            headerName: 'Password',
            width: 180,
            renderCell: (params) => {


                return (<div>
                    <Typography
                        variant="body2"
                        //fontSize={14}
                        fontWeight={600}
                        className='password'
                        style={{ opacity: 0.7, letterSpacing: '0.5px' }}
                    >
                        Password
                    </Typography>
                </div>);
            }
        },
        {
            field: 'created',
            headerName: 'Created AT',
            //type:'date',
            width: 180,
        },
        {
            field: 'Updated',
            headerName: 'Updated AT',
            //type:'date',
            width: 180,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 180,
            renderCell: (params) => {


                return (<div style={{ display: 'grid', gridAutoFlow: 'column', gap: '15px' }}>
                    <IconButton onClick={() => { handleShowupdate(params) }} color="primary">
                        <FontAwesomeIcon icon={faPen} style={{ height: '14px', width: '14px' }} />
                    </IconButton>
                    <IconButton color="error">
                        <FontAwesomeIcon icon={faTrash} style={{ height: '14px', width: '14px' }} />
                    </IconButton>
                </div>);
            }
        },
    ];
    const classes = useStyles();
    const [showadd, setShowadd] = useState(false);
    const [showupdate, setShowupdate] = useState(false);
    const [currentname, setCurrentname] = useState("");
    const [currentlast, setCurrentlast] = useState("");
    const [currentuser, setCurrentuser] = useState("");
    const [currentpassword, setCurrentpassword] = useState("");
    const handleTextChangename = (event) => {
        setCurrentname(event.target.value);
    };
    const handleTextChangelast = (event) => {
        setCurrentlast(event.target.value);
    };
    const handleTextChangeuser = (event) => {
        setCurrentuser(event.target.value);
    };
    const handleTextChangepassword = (event) => {
        setCurrentpassword(event.target.value);
    };
    const handleClose = () => { setShowadd(false); setShowupdate(false);setCurrentlast();setCurrentname();setCurrentpassword();setCurrentuser() };
    const handleShowadd = () => { setShowadd(true); }
    const handleShowupdate = (params) => { setShowupdate(true); setCurrentname(params.row.FirstName); setCurrentlast(params.row.LastName);setCurrentuser(params.row.Username) }
    return (
        <Box>
            {/* ADD Professeur */}
            <Modal show={showadd} onHide={handleClose} animation>
                <Modal.Header closeButton>
                    <Modal.Title>ADD Professeur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box gap={4} display={'grid'} gridAutoFlow={'row'}>
                            <TextField label="First Name" size='small'> </TextField>
                            <TextField label="Last Name" size='small' > </TextField>
                            <TextField label="User Name" size='small'> </TextField>
                            <TextField label="Password" type={"password"} size='small' > </TextField>
                    </Box>
                </Modal.Body>
                <Modal.Footer>
                    <Box gap={3} display={'grid'} gridAutoFlow={'column'}>
                        <Button variant="contained" size='small' onClick={handleClose}>
                            Save
                        </Button>
                        <Button variant="contained" size='small' color='error' onClick={handleClose}>
                            Close
                        </Button>
                    </Box>
                </Modal.Footer>
            </Modal>
            {/* Update Professeur */}
            <Modal show={showupdate} onHide={handleClose} animation>
                <Modal.Header closeButton>
                    <Modal.Title>Update Professeur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box gap={4} display={'grid'} gridAutoFlow={'row'}>
                            <TextField value={currentname} onChange={handleTextChangename} label="First Name" size='small'> </TextField>
                            <TextField value={currentlast} onChange={handleTextChangelast} label="Last Name" size='small' > </TextField>
                            <TextField value={currentuser} onChange={handleTextChangeuser} label="User Name" size='small'> </TextField>
                            <TextField value={currentpassword} onChange={handleTextChangepassword} label="Password" type={"password"} size='small' > </TextField>
                    </Box>
                </Modal.Body>
                <Modal.Footer>
                    <Box gap={3} display={'grid'} gridAutoFlow={'column'}>
                        <Button variant="contained" size='small' onClick={handleClose}>
                            Save
                        </Button>
                        <Button variant="contained" size='small' color='error' onClick={handleClose}>
                            Close
                        </Button>
                    </Box>
                </Modal.Footer>
            </Modal>
            <Box display={'grid'} gridAutoFlow={'column'} className='gridview'>
                <div style={{ padding: '15px 5px', marginBottom: '8px', marginTop: '32px' }}>
                    <Typography
                        variant="body2"
                        fontSize={25}
                        fontWeight={600}
                        color={'#20466c'}
                    >
                        Professeur List
                    </Typography>
                </div>
                <Box justifyContent={'end'} style={{ display: 'flex', padding: '15px 0', marginBottom: '8px', marginTop: '32px' }}>
                    <Button variant="outlined" size='small' onClick={handleShowadd} startIcon={<FontAwesomeIcon icon={faPlus} />}>
                        ADD Professeur
                    </Button>
                </Box>
            </Box>
            <Box sx={{ height: 'auto' }} className='gridview'>
                <DataGrid
                    className={classes.root}
                    rows={rows}
                    editMode='false'
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}

                    disableRowSelectionOnClick
                />
            </Box>
        </Box>
    )
}