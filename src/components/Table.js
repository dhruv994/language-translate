import { Fragment } from 'react';

export default function Table({ data, config, keyFunc }) {


    const renderedHeader = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>

    })
    const renderRows = data.map((rowData) => {
        const renderCells = config.map((column) => <td className="p-3" key={column.label}>{column.render(rowData)}</td>)
        return (<tr className="border-b" key={keyFunc(rowData)}>{renderCells}</tr>);
    })
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeader}
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    );
}