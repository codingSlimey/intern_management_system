import React from 'react'
import styles from './styles.module.css'
import Image from '../Image/Image'
import { Link, useLocation } from 'react-router-dom'
import { FiEdit3 } from 'react-icons/fi'
import { TbNotes } from 'react-icons/tb'
import { FaRegUser } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import { BiSolidDashboard } from 'react-icons/bi'
import { MdInsertChartOutlined } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { IoIosLogOut } from "react-icons/io";
import HeaderTwo from '../Header/HeaderTwo'

const SideBar = () => {

  const [t, i18n] = useTranslation("global")
  const location = useLocation();
  console.log(location.pathname);


  // FUNCTION TO HANDLE LOGOUT
  const handleLogout = () => {
    console.log('Logout!')
  }

  return (
    <div className={styles.sideBar}>
        <Image 
            src={'https://res.cloudinary.com/dmyvdqjso/image/upload/v1700391819/navijje30m4wcf2epexl.png'}
            height={"100px"}
            width={"100px"}
            margin={"2rem auto 1rem auto"}
        />
        <div className='navDiv'>
            <Link to={'/student/dashboard'} className={styles.link}><BiSolidDashboard style={{fontSize: '22px', marginRight: '0.5rem'}} /> {t("sidebar.home")}</Link>
            <Link to={'/student/profile'} className={styles.link}><FaRegUser style={{fontSize: '22px', marginRight: '0.5rem'}} /> {t("sidebar.prof")}</Link>
            <Link className={styles.link}><FiEdit3 style={{fontSize: '22px', marginRight: '0.5rem'}} /> {t("sidebar.applications")}</Link>
            <Link to={'/student/logbook'} className={styles.link}><TbNotes style={{fontSize: '22px', marginRight: '0.5rem'}} /> {t("sidebar.logbook")}</Link>
            <Link className={styles.link}><TbNotes style={{fontSize: '22px', marginRight: '0.5rem'}} /> {t("sidebar.docs")}</Link>
            <Link className={styles.link}><MdInsertChartOutlined style={{fontSize: '22px', marginRight: '0.5rem'}} /> {t("sidebar.reports")}</Link>
            <Link className={styles.link}><CiSettings style={{fontSize: '22px', marginRight: '0.5rem'}} /> {t("sidebar.settings")}</Link>
        </div>
        <button className={styles.logout} onClick={handleLogout}>
          <IoIosLogOut style={{fontSize: '22px', fontWeight: '800', marginRight: '5px', color: '#003976'}} />
          <HeaderTwo 
            text={t("log.logout")} 
            fontSize={'18px'}
            margin={'0'}
            color={'#003976'}
          />
        </button>
    </div>
  )
}

export default SideBar;
