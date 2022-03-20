import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from "../Dialogs.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";
import {NewMessageFormValuesType} from "../Dialogs";

const maxLength10 = maxLengthCreator(10)

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>;
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
    = (props) => {

    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>('Enter your message', "message_area", [required, maxLength10], Textarea)}
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);