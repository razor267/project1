import React from "react";
import styles from './FormsControls.module.css'

const FromControl = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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