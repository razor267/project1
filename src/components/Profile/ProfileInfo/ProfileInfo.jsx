import React from "react";
import s from "./ProfileInfo.module.css";
import Loading from "../../common/loading/loading";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/avatar.jpg";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Loading/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;