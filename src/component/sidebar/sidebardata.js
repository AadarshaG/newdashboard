import {
    AiOutlineDashboard,
    AiOutlineBranches,
    AiOutlineLogout,
    AiOutlineSetting
    } from 'react-icons/ai'

import { RiProductHuntLine} from 'react-icons/ri'    
import { FiHelpCircle} from 'react-icons/fi'    

export const Menus = [
    {
        key: 'dashboard',
        label: "Dashboard",
        path: '/',
        icon: <AiOutlineDashboard />
    },
    {
        key: 'category',
        label: "Category",
        path: '/category',
        icon: <AiOutlineBranches />
    },
    {
        key: 'product',
        label: "Products",
        path: '/products',
        icon: <RiProductHuntLine />
    },
]

export const Settings = [
    {
        key: 'setting',
        label: "Setting",
        path: '/setting',
        icon: <AiOutlineSetting />
    },
    {
        key: 'help',
        label: "Help & Support",
        path: '/setting',
        icon: <FiHelpCircle />
    }
]