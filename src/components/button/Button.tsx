import React from 'react';
import styles from './Button.module.scss';

export class Button extends React.Component {

    render() {
        return (
            <div >
                <button className={styles.tc_button}>Submit</button>
            </div>
        );
    }
}
