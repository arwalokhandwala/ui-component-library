import React from 'react';
import styles from './Input.module.scss';

export class Input extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <input className={styles.container__input}></input>
            </div>
        );
    }
}
