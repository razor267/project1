import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import userPhoto from "../../assets/images/avatar.jpg";
import {InitialStateType} from "../../redux/dialogsReducer";
import {ProfileInitialStateType} from "../../redux/profileReducer";

type PropsType = {
    dialogs: InitialStateType
    setCurrentDialog: (id: number) => void
    newMessage: (idMessage: number, idDialog: number, message_area: string) => void
    profile: ProfileInitialStateType
}

export type NewMessageFormValuesType = {
    idMessage: number
    idDialog: number
    message_area: string
}

const Dialogs: React.FC<PropsType> = (props) => {

    const profile = props.profile.profile;

    let dialogId = props.dialogs.currentDialog;
    let currentDialog = dialogId - 1

    let onDialogChange = (id: number) => {
        props.setCurrentDialog(id);
    }

    let newMessage = (values: NewMessageFormValuesType) => {
        let idDialog = currentDialog;
        let idMessage = props.dialogs.dialogs[idDialog].dialog.length + 1
        props.newMessage(idMessage, idDialog, values.message_area);
    }

    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}
                                                                     key={d.id}
                                                                     currentDialog={props.dialogs.currentDialog}
                                                                     onDialogChange={onDialogChange}/>);

    if (!dialogId) {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
        )
    }
    let messagesElements = props.dialogs.dialogs[currentDialog].dialog.map(m => <Message
        message={m.message}
        iOrNot={m.iOrNot}
        avatar={props.dialogs.dialogs[currentDialog].avatar}
        myAvatar={profile === null ? userPhoto : profile.photos.large} key={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={newMessage}/>
        </div>
    )
}

export default Dialogs;