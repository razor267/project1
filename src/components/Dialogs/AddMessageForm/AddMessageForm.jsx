import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength10 = maxLengthCreator(10)

const AddMessageForm = (props) => {

    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='message_area' placeholder='Enter your message' validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)