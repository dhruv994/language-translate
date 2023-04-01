import React from 'react';
import Link from './components/Link';
import Routes from './components/Routes';
import AccordianPage from './pages/AccordianPage';
import DropdownPage from './pages/DropdownPage';

export default function App() {

    return (<>
        <Link to="/accordian">Go to accordian</Link>
        <Link to="/dropdown">Go to dropdown</Link>
        <div>
            <Routes path='/accordian'>
                <AccordianPage></AccordianPage>
            </Routes>
            <Routes path='/dropdown'>
                <DropdownPage></DropdownPage>
            </Routes>
        </div>

    </>)
}