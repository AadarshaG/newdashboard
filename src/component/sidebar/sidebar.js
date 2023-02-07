import classNames from 'classnames'
import React from 'react'
import {AiOutlineHome,AiOutlineLogout} from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { Menus, Settings } from './sidebardata'

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-sky-300 hover:no-underline active:bg-sky-700 rounded-sm text-base'

export function Sidebar(){

    return(
        <div className="bg-sky-900 flex flex-col text-white w-60 p-3">
            <div className="flex justify-start items-center gap-x-3 px-1 py-3">
                <AiOutlineHome size={25} />
                <span className="text-xl">Admin</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {
                    Menus.map((item)=>(
                        <MenuLinks key={item.key} item={item} />
                    ))
                }
            </div>
            <div className="flex flex-col pt-2 gap-0.5 border-t border-gray-900">
                {
                    Settings.map((item)=>(
                        <MenuLinks key={item.key} item={item} />
                    ))
                }
                <div  className={classNames('text-red-500',linkClasses)}>
                    <span className="text-white"><AiOutlineLogout /></span> Logout
                </div>
            </div>
        </div>
    )
}

function MenuLinks({item}){
    const {pathname} = useLocation()
    return(
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-sky-300 text-white' : '',linkClasses)}>
            <span className="text-xl">{item.icon}</span> {item.label}
        </Link>
    )
}