import React from "react";
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from "../../assets/images/avatar.jpg";

let Users = (props) => {

    if (props.users.length === 0) {
        let tar = axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
        /*       props.setUsers([
                   {
                       id: 1,
                       photoUrl: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
                       followed: false,
                       fullName: 'Petr',
                       status: 'I am a boss',
                       location: {city: 'Moscow', country: 'Russia'}
                   },
                   {
                       id: 2,
                       photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRNmLw6jPNkjheKybsLrQ_MG5yB5Foe4Mj7WYKFUay-7bsHpRRNi2TE35jznFo3TNjPQ&usqp=CAU',
                       followed: true,
                       fullName: 'Maksim',
                       status: 'I am a boss too',
                       location: {city: 'Moscow', country: 'Russia'}
                   },
                   {
                       id: 3,
                       photoUrl: 'https://content.freelancehunt.com/textattach/00251/5fcec/635497/1581419181452.png',
                       followed: false,
                       fullName: 'Dennis',
                       status: 'I am a boss too',
                       location: {city: 'Kiev', country: 'Ukraine'}
                   }
               ]);*/
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;