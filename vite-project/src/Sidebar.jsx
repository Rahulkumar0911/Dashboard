import React from 'react'
import { BsActivity,   BsStripe } from 'react-icons/bs'
import { MdDashboard, MdLogout, MdSettings } from "react-icons/md";
import { PiUserFocus } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';





function Sidebar({openSidebarToggle}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-reponsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsStripe className='icon_header'/>S.M.A.R.T
            </div>
                <span className='icon close_icon'>Shared Market of Assets & Real-Estate Tokens</span>
                </div>
                <ul className='sidebar-h4'>
                    <h4 className='sidebar-h4-menu1'>
                        <a href="">
                            <MdDashboard className='icon'/>Dashboard
                        </a>
                    </h4>
                    <h4 className='sidebar-h4-menu'>
                        <a href="">
                            <BsActivity className='icon'/>Assets
                        </a>
                    </h4>
                    <h4 className='sidebar-h4-menu'>
                        <a href="">
                            <PiUserFocus className='icon'/>User Management
                        </a>
                    </h4>
                    <h4 className='sidebar-h4-menu'>
                        <a href="">
                            <TbReportSearch className='icon'/>Report
                        </a>
                    </h4>
                    <h4 className='sidebar-h4-menu'>
                        <a href="">
                            <MdOutlineAccountBalanceWallet className='icon'/>Finance
                        </a>
                    </h4>
                    <h4 className='sidebar-h4-menu'>
                        <a href="">
                            <MdSettings className='icon'/>Settings
                        </a>
                    </h4>
                    <h4 className='sidebar-h4-menu'>
                        <a href="">
                            <MdLogout className='icon'/>Log Out
                        </a>
                    </h4>
                </ul>

    </aside>
  )
}

export default Sidebar
