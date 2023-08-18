
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from '../store';
import { useThunk } from "../hooks/use-thunk";


export default function UserListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }

    return (
        <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <Button loading={isLoading} onClick={handleClick}>
                    <GoTrash />
                </Button>
                {error && <div> Error Deleteing User </div>}
                {user.name}
            </div>
        </div>
    )
}