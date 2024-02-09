import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PageRestricted from '../../components/PageRestricted'
import { getLocalStore } from '../../utils/local'

const TeacherTemplate = () => {
  const user = getLocalStore('user_info')
  return (
    <>
      <div>
      <Header/>
        {
          user.maLoaiNguoiDung === 'GV' ? (
            <Outlet/>
          ) : <PageRestricted/>
        }
      <Footer/>
      </div>
    </>
    
  )
}

export default TeacherTemplate