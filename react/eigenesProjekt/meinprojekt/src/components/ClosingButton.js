import React, {Component} from 'react';
import styles from './ClosingButton.module.css';

class ClosingButton extends Component {
    render() {
        return (
            <div className={styles.main}  onClick={window.close}>
                Close
            </div>
        );
    }
}

export default ClosingButton;