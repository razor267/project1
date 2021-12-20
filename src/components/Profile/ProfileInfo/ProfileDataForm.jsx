import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {required} from "../../../utils/validators/validators";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name:</b> {createField("Fullname", "fullName", [required], Input)}
        </div>
        <div>
            <b>Looking for a job:</b> {createField(null, "lookingForAJob", null, Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills:</b> {createField("Description", "lookingForAJobDescription", [required], Textarea)}
        </div>
        <div>
            <b>About me:</b> {createField("About me", "aboutMe", [required], Textarea)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;