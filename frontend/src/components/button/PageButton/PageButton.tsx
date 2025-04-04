import { Link } from 'react-router-dom';
import './PageButton.css';

interface PageButtonProps {
    to: string;
    label: string;
    variant?: 'primary' | 'secondary';
}

const PageButton = ({ to, label, variant = 'primary' }: PageButtonProps) => {

    const buttonClass = variant === 'secondary' ?
        'page-button-secondary' :
        'page-button';
    return (
        <Link to={to} className={buttonClass}>
            {label}
        </Link>
    )
}
export default PageButton;