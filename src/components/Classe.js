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
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'classename',
        headerName: 'Classe Name',
        width: 200,
        editable: true,
    },
    {
        field: 'Groupe',
        headerName: 'Groupe',
        width: 200,
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
    { id: 1, classename:'Premiére ANNEE',Groupe: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 2, classename:'Premiére ANNEE',Groupe: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 3, classename:'Premiére ANNEE',Groupe: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 4, classename:'Premiére ANNEE',Groupe: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 5, classename:'Premiére ANNEE',Groupe: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 6, classename:'Premiére ANNEE',Groupe: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 7, classename:'Troisième ANNEE',Groupe: 'G2',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 8, classename:'Deuxième ANNEE',Groupe: 'G3',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 9, classename:'Deuxième ANNEE',Groupe: 'G1',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },
    { id: 10,classename:'Deuxième ANNEE', Groupe: 'G2',created:'12/12/2023 10:10',Updated:'01/01/2024 12:12' },

];
export default function Classe() {
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
            <Box sx={{ height: 'auto'}}className='gridview'>
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