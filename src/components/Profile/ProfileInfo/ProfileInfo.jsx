import React from "react";
import s from "./ProfileInfo.module.css";
import Loading from "../../common/loading/loading";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Loading/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;