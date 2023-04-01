import useNavigation from "../hooks/use-navigation";

export default function ({ path, children }) {
    const { currentPath } = useNavigation();

    if (path == currentPath)
        return children
    else
        return null
}