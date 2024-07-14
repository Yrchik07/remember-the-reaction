import { Link } from "react-router-dom";
import styles from './RedirectSection.module.css';

const RedirectSection = ({text, linkText, linkTo}) => {
    return (
        <div className={styles.redirectSection}>
            <p>{text} <Link to={linkTo}>{linkText}</Link></p>
        </div>
    );
};

export default RedirectSection;