import React from 'react'
import BecomeInstructer from './BecomeInstructer'
import Records from './Records'
import Start from './Start'
import { getLocalStore } from '../../utils/local'
import PageRestricted from "../../components/PageRestricted";

const TeacherPage = () => {
  
  return (
    <div>
      <Start/>
      <Records/>
      <BecomeInstructer/>
    </div>
  )
}

export default TeacherPage