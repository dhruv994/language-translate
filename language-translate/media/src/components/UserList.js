import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

export default function UserList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])


    return "users list"
}