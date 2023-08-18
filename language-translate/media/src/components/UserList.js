import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skleton from "./skleton";

export default function UserList() {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    if (isLoading)
        return (
            <Skleton times={6} className="h-10 w-full"></Skleton>
        )
    if (error) {
      return  <div> Error....</div>
    }
const renderedUsers = data.map((user)=>{
    return <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
        </div>
    </div>
})

    return (
        <div>
            {renderedUsers}
        </div>
    )
}