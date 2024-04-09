import React from 'react'
import Header from '../../Header/Header'
import {Outlet} from "react-router-dom"

const RootNavigation = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default RootNavigation