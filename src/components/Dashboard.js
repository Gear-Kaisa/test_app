import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import { Modal } from 'react-bootstrap';
import { Box, Button, Chip, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import interactionPlugin from '@fullcalendar/interaction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { Button as ButtonStrap } from 'react-bootstrap';
import DoneIcon from '@mui/icons-material/Done';


export default function Dashboard() {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('01:00');
    const [categorie, setCategorie] = useState('Evénement');
    const [salle, setSalle] = useState('Digital Lab');
    const [module, setModule] = useState('Design');
    const [classe, setClasse] = useState('S1 G1');
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    const handleChange = (event) => {
        setTime(event.target.value);
    };
    const handleChangecat = (event) => {
        setCategorie(event.target.value);
    };
    const handleChangesalle = (event) => {
        setSalle(event.target.value);
    };
    const handleChangemodule = (event) => {
        setModule(event.target.value);
    };
    const handleChangeclasse = (event) => {
        setClasse(event.target.value);
    };

    const handleClose = () => setShow(false);
    const handleShow = (event) => { setShow(true); setDate(event.dateStr); }
    return (<div >
        <Modal show={show} onHide={handleClose} animation>
            <Modal.Header closeButton>
                <Modal.Title>Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Box gap={2} display={'grid'} gridAutoFlow={'row'}>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Title" size='small' value={date} inputProps={{ readOnly: true }}  > </TextField>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Date Start" size='small' value={date} inputProps={{ readOnly: true }}  > </TextField>
                        <FormControl size='small'>
                            <InputLabel id="demo-simple-select-label">Time Start</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={time}
                                label="Time Start"
                                onChange={handleChange}
                            >
                                <MenuItem value={"01:00"}>01:00</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Date End" size='small' value={date} inputProps={{ readOnly: true }}  ></TextField>
                        <FormControl size='small'>
                            <InputLabel id="demo-simple-select-label">Time End</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={time}
                                label="Time End"
                                onChange={handleChange}
                            >
                                <MenuItem value={time}>{time}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>

                        <FormControl size='small'>
                            <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categorie}
                                label="Categorie"
                                onChange={handleChangecat}
                            >
                                <MenuItem value={categorie}>{categorie}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>

                        <FormControl size='small'>
                            <InputLabel id="demo-simple-select-label">Salle</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={salle}
                                label="Salle"
                                onChange={handleChangesalle}
                            >
                                <MenuItem value={salle}>{salle}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>

                        <FormControl size='small'>
                            <InputLabel id="demo-simple-select-label">Module</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={module}
                                label="Module"
                                onChange={handleChangemodule}
                            >
                                <MenuItem value={module}>{module}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>

                        <FormControl size='small'>
                            <InputLabel id="demo-simple-select-label">Classe</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={classe}
                                label="Classe"
                                onChange={handleChangeclasse}
                            >
                                <MenuItem value={classe}>{classe}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <Chip
                            label="IN PROGRESS"
                            color="primary"
                            icon={<DoneIcon />}
                        />
                    </Box>
                </Box>
            </Modal.Body>
            <Modal.Footer>
                <Box gap={3} display={'grid'} gridAutoFlow={'column'}>
                    <ButtonStrap variant="outline-primary" style={{ width: '80px', fontWeight: '500' }} size='sm' onClick={handleClose}>
                        Validate
                    </ButtonStrap>
                    <ButtonStrap variant="outline-danger" style={{ width: '80px', fontWeight: '500' }} size='sm' onClick={handleClose}>
                        Reject
                    </ButtonStrap>
                    <ButtonStrap variant="outline-secondary" style={{ width: '80px', fontWeight: '500' }} size='sm' onClick={handleClose}>
                        close
                    </ButtonStrap>
                </Box>
            </Modal.Footer>

        </Modal>
        <div style={{ width: '100%', display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: 'minmax(calc(100% - 250px), 85%) minmax(200px, 15%)' }}>
            <div style={{ width: '100%' }} >
                <FullCalendar height={"100%"} weekends={false}
                    themeSystem="standard"
                    events={[
                        { title: 'Metting', date: '2024-01-25 10:10', end: '2024-01-25 11:11', classNames: 'fc-event-encour', borderColor: "transparent" },
                        { title: 'Aménagement', date: '2024-01-25 10:10', end: '2024-01-25 11:11', className: 'fc-event-refuse', borderColor: "transparent" },
                        { title: 'Aménagement', date: '2024-01-25 10:10', end: '2024-01-25 11:11', className: 'fc-event-accept', borderColor: "transparent" },
                        { title: 'Aménagement', date: '2024-01-31 10:10', end: '2024-01-31 11:11', className: 'fc-event-accept', borderColor: "transparent" },
                        { title: 'Aménagement', date: '2024-01-31 10:31', end: '2024-01-31 11:11', className: 'fc-event-refuse', borderColor: "transparent" },
                        { title: 'Aménagement', date: '2024-01-31 10:31', end: '2024-01-31 11:11', className: 'fc-event-encour', borderColor: "transparent" },
                        { title: 'Aménagement', date: '2024-02-07 10:31', end: '2024-02-07 11:11', className: 'fc-event-encour', borderColor: "transparent" },
                        { title: 'Aménagement', date: '2024-02-07 10:31', end: '2024-02-07 11:11', className: 'fc-event-refuse', borderColor: "transparent" },
                        { title: 'Aménagement', date: '2024-02-07 10:31', end: '2024-02-07 11:11', className: 'fc-event-encour', borderColor: "transparent" }]}
                    headerToolbar={{
                        left: 'prev,today',
                        center: 'title',
                        right: 'today,next'
                    }}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    eventClick={handleShow}
                    initialView="dayGridMonth"
                    displayEventTime={true}
                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        meridiem: true
                    }}
                    displayEventEnd={true}

                />

            </div>
            <div className='py-5 my-3' style={{ display: 'grid', padding: "20px", gridAutoFlow: 'row', justifyContent: 'center', gridAutoRows: 'min-content' }}>
                <div class="card bg-light mb-2 py-2" style={{ width: '100px !important' }}>
                    <div class="card-body px-3 py-0" style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateRows: '20px' }}>
                        <div style={{}}>
                            <Typography
                                variant="body2"
                                fontSize={14}
                                fontWeight={600}
                                color={'#20466c'}
                            // style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                            >
                                Self Events
                            </Typography>
                        </div>
                        <Box justifyContent={'end'} style={{ display: 'flex', padding: '3px 0' }}>
                            <FontAwesomeIcon color='#20466c' icon={faListDots} />
                        </Box>
                    </div>

                </div>
                {numbers.map(() => {
                    return (
                        <div class="card  text-secondary fw-normal border-primary mb-2" style={{ maxWidth: "18rem" }}>
                            <div class="card-header text-dark" style={{ fontSize: '14px' }}>10:00 AM - 11:11 AM</div>
                            <div class="card-body px-3 py-2">
                                <p class="card-text" style={{ fontSize: '14px' }}>Aménagement d'espace FAB-LAB.</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
    )
}
