import React from 'react'
import ItemsList from '../../Components/ItemsList/ItemsList'
import {Link} from 'react-router-dom'
function Top() {
    return (
        <div>
            <Link to ="/bottom">BOTTOM</Link>
            <ItemsList/>
        </div>
    )
}

export default Top
