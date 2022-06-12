import "./users.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Button from "../button/Button"
import Person from "../person/Person"
import { useState } from "react"

const Users = () => {

  const [users, setUsers] = useState([
    {
      name : "Evelin (You)",
      icon : "E",
      color : "black",
      id : 1
    },
    {
      name : "Sophia Doe",
      icon : "S",
      color : '#ee6e84',
      id : 2
    },
    {
      name : 'Jacob jones',
      icon : 'J',
      color : '#66d49a',
      id : 3
    },
    {
      name : 'Albert Flores',
      icon : 'A',
      color : '#ec71b5',
      id : 4
    },
    {
      name : 'Cody Fisher',
      icon : 'C',
      color : '#c084fc',
      id : 5
    },
    {
      name : 'Jane Cooper',
      icon : 'J',
      color : '#58d4ee',
      id : 6
    }
  ])

  const remove = (id) => {
   setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <h1 className="title">Invite users</h1>
            <div className="inputData">
              <input type="text" placeholder="Email (press enter for multiple)" className="input" />
              <button className="btn">Send invite</button>
            </div>
          </div>
          <div className="center">
              <Person removeUser={remove} users={users} />
          </div>
          <div className="bottom">
            <div className="bottomLeft">
              <FontAwesomeIcon icon={faLink} className='bottomIcon' />
              <h3>Copy Link</h3>
            </div>
            <div className="bottomRight">
              <h3>Anyone with link:</h3>
                <Button type='Nothing' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users