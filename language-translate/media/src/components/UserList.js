import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from './Button'
import Skleton from "./skleton";
import { useThunk } from "../hooks/use-thunk";
import UserListItem from "./UserListItem";


export default function UserList() {
    const [doFetchUsers, isLoadingUsers, loadingUserError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)
    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    const handleUserAdd = () => {
        doCreateUser();
    }
    let content;
    if (isLoadingUsers) {
        return (
            content = <Skleton times={6} className="h-10 w-full"></Skleton>
        )
    } else if (loadingUserError) {
        content = <div> Error....</div>
    } else {
        content = data.map((user) => {
            return <UserListItem key={user.id}  user={user}/>
        })
    }


    return (
        <div>
            <div className="flex flex-row justify-between m-3 items-center">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}> + Add User</Button>
                {creatingUserError && 'Error creating user'}
            </div>
            {content}

        </div >
    )
}