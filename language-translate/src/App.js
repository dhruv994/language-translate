import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalsShow";

function getRandomAnimals() {
    const animals = ['cow', 'bird', 'gator', 'dog', 'horse', 'cat']
    return animals[Math.floor(Math.random() * animals.length)]
}

export default function App() {

    const [animals, setAnimal] = useState([]);

    const handleCLick = () => {
        setAnimal([...animals, getRandomAnimals()]);
    }

    const renderAnimals =  animals.map((animal, index) => {
        return    <AnimalShow type={animal} key={index} />
        });


    return (
        <div className='app'>
            <button onClick={handleCLick}> Add Animal</button>

            <div className='animal-list'>
                {renderAnimals}
            </div>
        </div>
    )
}