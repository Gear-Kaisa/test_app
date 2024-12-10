import { Box, Button, IconButton, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { faPlus,faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@mui/styles';

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
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'modulename',
        headerName: 'Module Name',
        width: 350,
    },
    {
        field: 'professeur',
        headerName: 'Professeur',
        width: 250,
    },
    
    {
        field: 'created',
        headerName: 'Created AT',
        width: 180,
    },
    {
        field: 'Updated',
        headerName: 'Updated AT',
        width: 180,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => {


            return (<div style={{display:'grid',gridAutoFlow:'column',gap:'15px'}}>
                <IconButton  color="primary">
                    <FontAwesomeIcon icon={ faPen} style={{height:'14px',width:'14px'}} />
                </IconButton>
                <IconButton  color="error">
                    <FontAwesomeIcon icon={ faTrash} style={{height:'14px',width:'14px'}} />
                </IconButton>
            </div>);
        }
    },
];

const rows = [
    { id: 1, modulename:'Architectural History and Styles',professeur: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 2, modulename:'Design Principles and Concepts',professeur: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 3, modulename:'Architectural Drafting and Drawing',professeur: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 4, modulename:'Structural Engineering in Architecture',professeur: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 5, modulename:'Sustainable Architecture',professeur: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 6, modulename:'Urban Planning and Design',professeur: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 7, modulename:'Building Materials and Construction',professeur: 'G2',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 8, modulename:'Interior Architecture and Design',professeur: 'G3',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 9, modulename:'Building Information Modeling (BIM)',professeur: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 10,modulename:'Landscape Architecture', professeur: 'G2',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },

];
export default function Module() {
    const classes = useStyles();
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
                        Classe List
                    </Typography>
                </div>
                <Box justifyContent={'end'} style={{ display: 'flex', padding: '15px 0', marginBottom: '8px', marginTop: '32px' }}>
                    <Button variant="outlined" size='small' startIcon={<FontAwesomeIcon icon={faPlus} />}>
                        ADD Classe
                    </Button>
                </Box>
            </Box>
            <div sx={{ height: 'auto'}}className='gridview'>
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
            </div>
        </Box>
    )
}