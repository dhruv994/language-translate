import React from 'react';
import Sidebar from './components/Sidebar';
import Routes from './components/Routes';
import AccordianPage from './pages/AccordianPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
export default function App() {

    return (<>
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <Sidebar></Sidebar>
            <div className='col-span-5'>
                <Routes path='/accordian'>
                    <AccordianPage></AccordianPage>
                </Routes>
                <Routes path='/'>
                    <DropdownPage></DropdownPage>
                </Routes>
                <Routes path='/button'>
                    <ButtonPage />
                </Routes>
                <Routes path='/modal'>
                    <ModalPage />
                </Routes>
            </div>
        </div>

    </>)
}