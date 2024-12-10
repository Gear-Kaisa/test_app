import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import { Modal } from 'react-bootstrap';
import { Box,  Chip, FormControl,InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import interactionPlugin from '@fullcalendar/interaction';
import DoneIcon from '@mui/icons-material/Done';
import moment from 'moment/moment';
import { Button as ButtonStrap } from 'react-bootstrap';
export default function Calendar() {
    const [showevent, setShowevent] = useState(false);
    const [showadd, setShowadd] = useState(false);
    const time = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [title, setTitle] = useState('');
    const [timeStart, setTimeStart] = useState('00:00');
    const [timeEnd, setTimeEnd] = useState('00:00');
    const [categorie, setCategorie] = useState('Evénement');
    const [professeur, setProfesseur] = useState('Evénement');
    const [salle, setSalle] = useState('Digital Lab');
    const [module, setModule] = useState('Design');
    const [classe, setClasse] = useState('S1 G1');

    const handleChangetimestr = (event) => {
        setTimeStart(event.target.value);
    };
    const handleChangetimeend = (event) => {
        setTimeEnd(event.target.value);
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

    const handleClose = () => { setShowadd(false); setShowevent(false) };
    const handleShowadd = (event) => { setShowadd(true); setDateStart(moment(event.dateStr).format("DD-MM-YYYY")); setDateEnd(moment(event.dateStr).format("DD-MM-YYYY")); setTitle(event.event?.title); setProfesseur(event.event?.extendedProps.professeur) }
    const handleShowevent = (event) => { setShowevent(true); setDateStart(moment(event.event?.startStr).format("DD-MM-YYYY HH:mm")); setDateEnd(moment(event.event?.endStr).format("DD-MM-YYYY HH:mm")); setProfesseur(event.event?.extendedProps.professeur); setTitle(event.event?.title); setProfesseur(event.event?.extendedProps.professeur) }

    return (<div >
        {/* show event */}
        <Modal show={showevent} onHide={handleClose} animation>
            <Modal.Header closeButton>
                <Modal.Title>Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Box gap={2} display={'grid'} gridAutoFlow={'row'}>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Title" size='small' value={title} inputProps={{ readOnly: true }}  > </TextField>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Date Start" size='small' value={dateStart} inputProps={{ readOnly: true }}  > </TextField>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Date End" size='small' value={dateEnd} inputProps={{ readOnly: true }}  ></TextField>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Professeur" size='small' value={professeur} inputProps={{ readOnly: true }}  ></TextField>
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
                    <ButtonStrap variant="outline-secondary" style={{ width: '80px', fontWeight: '500' }} size='sm' onClick={handleClose}>
                        close
                    </ButtonStrap>
                </Box>
            </Modal.Footer>

        </Modal>
        {/* ADD event */}
        <Modal show={showadd} onHide={handleClose} animation>
            <Modal.Header closeButton>
                <Modal.Title>ADD Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Box gap={2} display={'grid'} gridAutoFlow={'row'}>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Title" size='small' value={title} inputProps={{ readOnly: true }}  > </TextField>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Date Start" size='small' value={dateStart} inputProps={{ readOnly: true }}  > </TextField>
                        <FormControl size='small'>
                            <InputLabel id="demo-simple-select-label">Time Start</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={timeStart}
                                label="Time Start"
                                onChange={handleChangetimestr}
                            >
                                {time.map((data) => {
                                    return (<MenuItem value={data}>{data}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Date End" size='small' value={dateEnd} inputProps={{ readOnly: true }}  ></TextField>
                        <FormControl size='small'>
                            <InputLabel id="demo-simple-select-label">Time End</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={timeEnd}
                                label="Time End"
                                onChange={handleChangetimeend}
                            >
                                {time.map((data) => {
                                    return (<MenuItem value={data}>{data}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box gap={5} display={'grid'} gridAutoFlow={'column'}>
                        <TextField label="Professeur" size='small' value={professeur} inputProps={{ readOnly: true }}  ></TextField>
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

                </Box>
            </Modal.Body>
            <Modal.Footer>
                <Box gap={3} display={'grid'} gridAutoFlow={'column'}>
                    <ButtonStrap variant="outline-primary" style={{ width: '80px', fontWeight: '500' }} size='sm' onClick={handleClose}>
                        Save
                    </ButtonStrap>
                    <ButtonStrap variant="outline-secondary" style={{ width: '80px', fontWeight: '500' }} size='sm' onClick={handleClose}>
                        close
                    </ButtonStrap>
                </Box>
            </Modal.Footer>

        </Modal>

        <div style={{ width: '98%', zIndex: 0, position: 'relative' }} >
            <FullCalendar height={900} weekends={false}
                themeSystem="standard"
                events={[
                    { id: "1", professeur: "test1", title: 'Metting', date: '2024-01-25 10:10', end: '2024-01-25 11:11', classNames: 'fc-event-encour', borderColor: "transparent" },
                    { id: "2", professeur: "test2", title: 'Aménagement', date: '2024-01-25 10:10', end: '2024-01-25 11:11', className: 'fc-event-refuse', borderColor: "transparent" },
                    { id: "3", professeur: "test3", title: 'Aménagement', date: '2024-01-25 10:10', end: '2024-01-25 11:11', className: 'fc-event-accept', borderColor: "transparent" }]}
                headerToolbar={{
                    left: 'prev,today',
                    center: 'title',
                    right: 'today,next'
                }}
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleShowadd}
                eventClick={handleShowevent}
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
    </div>
    )
}
