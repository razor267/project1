import React from "react";
import styles from './FormsControls.module.css'
import {Field} from "redux-form";

const FromControl = ({input, meta: {touched, error}, children}) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FromControl {...props}><textarea {...input} {...restProps}/></FromControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FromControl {...props}><input {...input} {...restProps}/></FromControl>
}

export const createField = (placeholder, name, validators, component, props={}, text="") => (
    <div>
        <Field name={name} placeholder={placeholder}
               component={component}
               validate={validators}
               {...props}
        /> {text}
    </div>
)