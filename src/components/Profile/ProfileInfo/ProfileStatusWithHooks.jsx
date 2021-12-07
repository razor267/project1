import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, SetEditMode] = useState(false);
    let [status, SetStatus] = useState(props.status);

    const activateEditMode = () => {
        SetEditMode(true);
    }

    const deactivateEditMode = () => {
        SetEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        SetStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'Not status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                       value={status}/>
            </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;