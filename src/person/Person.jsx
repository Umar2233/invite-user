import "./person.css"
import Button from "../button/Button"

const Person = ({  removeUser, users }) => {
    return (
        <div>
            {users.map((user) => (
                <div className="centerTitle">
                    <div className="centerName">
                        <div className="icon four" style={{ backgroundColor: user.color }} >{user.icon}</div>
                        <h1 className="name">{user.name}</h1>
                    </div>
                    <div className="centerButton">
                        {user.name !== "Evelin (You)" ? <Button removeUser={removeUser} user={user} /> : "Owner"}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Person