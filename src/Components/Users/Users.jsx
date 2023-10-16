import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData();

   

    return (
        <div>
            <h2>our users:{users.length} </h2>
            <h4>this is users</h4>
            <div className="users grid grid-cols-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;