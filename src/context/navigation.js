import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();


export function NavigationProvider({ children }) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {

        }
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler)
        }
    });

    return (<NavigationContext.Provider value={{}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>)

};
export default NavigationContext;
