import React from 'react'
import {GiMinotaur} from 'react-icons/gi'


export function Boards(){

    return(
        <div className="flex gap-4 w-full p-5">
            <div className="bg-white rounded-md p-4 flex-1 border border-gray-300 flex items-center gap-6 shadow-lg">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-600">
                    <GiMinotaur className="text-white" size={40} />
                </div>
                <div className="flex flex-col">
                    <span>Total Sales</span>
                    <span>4000+</span>
                </div>
            </div>
            <div className="bg-white rounded-md p-4 flex-1 border border-gray-300 flex items-center gap-6 shadow-lg">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-600">
                    <GiMinotaur className="text-white" size={40} />
                </div>
                <div className="flex flex-col">
                    <span>Total Sales</span>
                    <span>4000+</span>
                </div>
            </div>
            <div className="bg-white rounded-md p-4 flex-1 border border-gray-300 flex items-center gap-6 shadow-lg">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-600">
                    <GiMinotaur className="text-white" size={40} />
                </div>
                <div className="flex flex-col">
                    <span>Total Sales</span>
                    <span>4000+</span>
                </div>
            </div>
            <div className="bg-white rounded-md p-4 flex-1 border border-gray-300 flex items-center gap-6 shadow-lg">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-600">
                    <GiMinotaur className="text-white" size={40} />
                </div>
                <div className="flex flex-col">
                    <span>Total Sales</span>
                    <span>4000+</span>
                </div>
            </div>
           
        </div>
    )
}