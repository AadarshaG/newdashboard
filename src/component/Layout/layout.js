import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderD } from '../Header/header'
import { Sidebar } from '../sidebar/sidebar'

export function LayoutD(){

    return(
        <div className="flex flex-row h-screen w-screen overflow-hidden">
            <Sidebar />
           <div className="flex-1">
                <HeaderD />
                <Outlet />
           </div>
        </div>
    )
}