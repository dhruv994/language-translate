import Link from "./Link";

export default function Sidebar() {

    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordian', path: '/accordian' },
        { label: 'Buttons', path: '/button' },

    ];

    const renderLinks = links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {renderLinks}
        </div>
    )
}