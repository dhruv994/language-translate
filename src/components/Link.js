import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

export default function Link({ to, children }) {
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500');

    const handleClick = (event) => {
        console.log("INSIDE LINK METHOD", event);
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return <a className={classes    } href={to} onClick={handleClick}>{children}</a>

}