import React from "react";
import s from "./Friends.module.css";
import StoreContext from "../../../StoreContext";

const Friends = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().navBarFriends;
                    debugger;

                    return (
                        <div className={s.friendsBar}>
                            <div className={s.header}>Friends</div>
                            <div className={s.f1}>
                                <img src={state[0].avatar}/>
                                <div>{state[0].name}</div>
                            </div>
                            <div className={s.f2}>
                                <img src={state[1].avatar}/>
                                <div>{state[1].name}</div>
                            </div>
                            <div className={s.f3}>
                                <img src={state[2].avatar}/>
                                <div>{state[2].name}</div>
                            </div>
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default Friends;