import React, {useState} from 'react'
import Modal from './Modal'
import { Bell, CalendarDay, Clock, Palette, X }  from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function AddNewToDo(){

    const [showModal, setShowModal] = useState(false)
    const[text, setText] = useState('')
    const[day, setDay] = useState(new Date())
    const[time, setTime] = useState(new Date())

    return (
        <div className="AddNewToDo">
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New ToDo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <form>
                        <div className="text">
                            <h3>Add New ToDo!</h3>
                            <input 
                            type="text" 
                            value={text} 
                            onChange={e => setText(e.target.value)} 
                            placeholder='To Do...'
                            autoFocus
                            />                    
                        </div>
                        <div className="remind">
                            <Bell/>
                            <p>Remind ME!</p>
                        </div>
                        <div className="pick-day">
                            <div className="title">
                                <CalendarDay />
                                <p>Choose a Day</p>
                            </div>
                            <DatePicker 
                                value={day}
                                onChange={day => setDay(day) }
                            />
                        </div>
                        <div className="pick-time">
                            <div className="title">
                                <Clock />
                                <p>Choose a Time</p>
                            </div>
                            <TimePicker 
                                value={time}
                                onChange={time => setTime(time)}
                            />
                        </div>
                        <div className="pick-project">
                            <div className="title">
                                <Palette />
                                <p>Choose a Project</p>
                            </div>
                            <div className="projects">
                                <div className="project active">
                                    personal
                                </div>
                                <div className="project">
                                    work
                                </div>
                            </div>
                        </div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='40' />
                        </div>
                        <div className="confirm">
                            <button>+ Add ToDo</button>
                        </div>
                    </form>
                </MuiPickersUtilsProvider>                
            </Modal>
        </div>
    )
}

export default AddNewToDo
