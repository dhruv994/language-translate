import { useContext } from 'react';
import NavigationContext from '../context/navigation';

export default function Link({ to, children }) {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        console.log("INSIDE LINK METHOD", to);
        event.preventDefault();
        navigate(to);
    }
    return <a onClick={handleClick}>{children}</a>

}