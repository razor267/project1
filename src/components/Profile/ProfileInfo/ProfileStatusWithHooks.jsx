import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, SetStatus] = useState(props.status);

    useEffect(() => {
        SetStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        SetStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || 'Not status'}</span>
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