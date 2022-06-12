import "./button.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Button = ({removeUser, user , type}) => {

  const [open, setOpen] = useState(false)

  const [data, setdata] = useState("Can edit")

  return (
    <div>
      <div className="btnContainer" >
        <div className="link" onClick={() => setOpen(!open)} >
          <h3 className={data === 'Can view' ? 'btnBlack' : data === 'Can edit' ? 'btnGreen' : 'btnRed'} >{data}</h3>
          <FontAwesomeIcon icon={faChevronDown} className='btnIcon' />
        </div>
        {open && <div className="dropDown" >
          <span className="view" onClick={() => (setdata('Can view'), setOpen(false))} >Can view</span>
          <span className="edit" onClick={() => (setdata('Can edit'), setOpen(false))} >Can edit</span>
          <span className="remove" onClick={() => type === 'Nothing' ? (setdata('Remove user'), setOpen(false)) : (removeUser(user.id), setOpen(false))} >Remove user</span>
        </div>}
      </div>
    </div>
  )
}

export default Button