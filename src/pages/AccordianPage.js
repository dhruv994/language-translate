import React from 'react';
import Accordion from '../components/Accordion';

export default function AccordianPage() {

    const items = [
        {
            id: 'ws23d',
            label: 'how are you ?',
            content: 'lourem ispum sd;jsdkjsdlkjsdkjsdkjsd'
        },
        {id: 'ws23def',
            label: 'how are you ?',
            content: 'lourem ispum sd;jsdkjsdlkjsdkjsdkjsd'
        },
        {id: 'ws23d1',
            label: 'how are you ?',
            content: 'lourem ispum sd;jsdkjsdlkjsdkjsdkjsd'
        }
    ]
    return (<>
        <Accordion items={items} />
    </>
    )
}