import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataFormRedux from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => { // можно с помощью промиса
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            {/* <div>
                <img src='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRODAepevJESvKmoYWQ8YAJJQO0j_a_ZgVaTFAobP3lXgETKX-kTOowNQH9_zxyUGC-aLS53LuzzNt0qys8gO4'></img>
            </div> */}
            <div>
                <img src={profile.photos.large || userPhoto} className={styles.avatar} />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            </div>
            {editMode
                ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile} isOwner={isOwner} onEditMode={() => { setEditMode(true) }} />
            }
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    )
}

const Contact = ({ contactKey, contactValue }) => {
    return (
        <div className={styles.contact}>
            <b>{contactKey}</b>:
            {contactValue}
        </div>
    )
}

const ProfileData = ({ profile, isOwner, onEditMode }) => {
    return (
        <div>
            <div>
                <h2>{profile.fullName}</h2>
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills: </b>{profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me: </b>{profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactKey={key} contactValue={profile.contacts[key]} />
                })}
            </div>
            {isOwner && <div><button onClick={onEditMode}>edit</button></div>}
        </div>
    )
}

export default ProfileInfo;
