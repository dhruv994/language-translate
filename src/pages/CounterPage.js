import { number } from "prop-types";
import { useReducer, useState } from "react"
import Button from "../components/Button";
import Pannel from "../components/Pannel";


const INCREMENT = 'increment';
const VALUE_TO_CHANGE = 'value_to_change';
const DECREMENT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case VALUE_TO_CHANGE:
            return {
                ...state,
                valuetoAdd: action.payload
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valuetoAdd,
                valuetoAdd:0
            }
        default:
            return state;

    }
    //
    // if (action.type === INCREMENT) {
    //     return {
    //         ...state,
    //         count: state.count + 1
    //     }
    // } if (action.type === DECREMENT) {
    //     return {
    //         ...state,
    //         count: state.count - 1
    //     }
    // }
    // if (action.type === VALUE_TO_CHANGE) {
    //     return {
    //         ...state,
    //         valuetoAdd: action.payload
    //     }
    // }
    // return state;
}


export default function CounterPage({ initialCount }) {

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valuetoAdd: 0
    })

    // const [count, setCount] = useState(initialCount);
    // const [valuetoAdd, setValueToAdd] = useState(0);

    const incrementCount = () => {
        dispatch({
            type: INCREMENT
        });
    }

    const decrementCount = () => {
        dispatch({
            type: DECREMENT
        })
    }
    const handleChange = (event) => {
        const value = +event.target.value || 0
        console.log("WWhic we are putting it in handle change", value)
        dispatch({
            type: VALUE_TO_CHANGE,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
        // setValueToAdd(0)

    }

    return (
        <Pannel className="m-3">
            <h1 className="text-lg"> Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={incrementCount}>Increment </Button>
                <Button onClick={decrementCount}>Decrement </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label> Add a lot!</label>
                <input
                    value={state.valuetoAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-5- border border-gray-300" />
                <Button> Add It!</Button>
            </form>
        </Pannel>
    )
}