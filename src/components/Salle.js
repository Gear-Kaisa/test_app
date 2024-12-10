import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@mui/styles';
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
    { id: 1, salleName: 'A01', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 2, salleName: 'A02', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 3, salleName: 'A03', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 4, salleName: 'A04', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 5, salleName: 'A05', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 6, salleName: 'A06', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 7, salleName: 'FAB-DESIGN-LAB', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 8, salleName: 'DIGITAL-LAB', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 9, salleName: 'AMPHI', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },
    { id: 10, salleName: 'CREATIVE LAB', Reference: 'RS6-E0-S38', created: '12/12/2023 10:10', Updated: '01/01/2024 12:12' },

];
export default function Salle() {
    const classes = useStyles();
    const [showadd, setShowadd] = useState(false);
    const [showupdate, setShowupdate] = useState(false);
    const [currentname, setCurrentname] = useState("");
    const [currentref, setCurrentref] = useState("");
    const handleTextChangename = (event) => {
        setCurrentname(event.target.value);
    };
    const handleTextChangeref = (event) => {
        setCurrentref(event.target.value);
    };
    const handleClose = () => { setShowadd(false); setShowupdate(false) };
    const handleShowadd = () => { setShowadd(true); }
    const handleShowupdate = (params) => { setShowupdate(true); setCurrentname(params.row.salleName);setCurrentref(params.row.Reference) }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'salleName',
            headerName: 'Salle Name',
            width: 200,
            editable: true,
        },
        {
            field: 'Reference',
            headerName: 'Reference',
            width: 150,
            editable: true,
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
            width: 200,
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
    return (
        <Box>
            {/* ADD SALLE */}
            <Modal show={showadd} onHide={handleClose} animation>
                <Modal.Header closeButton>
                    <Modal.Title>ADD Salle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box gap={2} display={'grid'} gridAutoFlow={'row'}>
                        <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                            <TextField label="Salle Name" size='small'> </TextField>
                            <TextField label="Reference" size='small' > </TextField>
                        </Box>
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
            {/* Update SALLE */}
            <Modal show={showupdate} onHide={handleClose} animation>
                <Modal.Header closeButton>
                    <Modal.Title>Update Salle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box gap={2} display={'grid'} gridAutoFlow={'row'}>
                        <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                            <TextField label="Salle Name" onChange={handleTextChangename} size='small' value={currentname} > </TextField>
                            <TextField label="Reference"  onChange={handleTextChangeref} size='small' value={currentref} > </TextField>
                        </Box>
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
                    // style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                    >
                        Salle List
                    </Typography>
                </div>
                <Box justifyContent={'end'} style={{ display: 'flex', padding: '15px 0', marginBottom: '8px', marginTop: '32px' }}>
                    <Button variant="outlined" size='small' onClick={handleShowadd} startIcon={<FontAwesomeIcon icon={faPlus} />}>
                        ADD Salle
                    </Button>
                </Box>
            </Box>
            <Box className='gridview' >
                <DataGrid
                    className={classes.root}
                    rows={rows}

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