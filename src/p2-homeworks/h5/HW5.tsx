import React, {useState} from 'react'
import {Header} from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {

    const [menuCollapsed, setMenuCollapsed] = useState(false)

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header onClick={() => setMenuCollapsed(!menuCollapsed)}
                        collapsed={menuCollapsed}
                />
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
