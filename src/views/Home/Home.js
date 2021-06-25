import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to="/top">TOP</Link>
            <Link to ="/bottom">BOTTOM</Link>
        </div>
    )
}

export default Home
