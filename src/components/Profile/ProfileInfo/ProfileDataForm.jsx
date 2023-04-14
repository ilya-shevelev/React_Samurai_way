import React from "react";
import { createField, Input, TextArea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import styles from '../Profile.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills</b>: {createField('My professional skills', 'lookingForAJobDescription', [], TextArea)} {/* аттрибут "name" должен соответствовать запрашиваему в API */}
            </div>
            <div>
                <b>About me</b>: {createField('About me', 'aboutMe', [], TextArea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={styles.contact}>
                        <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                    </div>
                })}
            </div>
            <div><button>save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
        </form>
    );
};

const ProfileDataFormRedux = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormRedux;
