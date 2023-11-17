import React from 'react'
import Email from './Email'
import Name from './Name'
import Address from './Address'
import PersonalInfo from './PersonalInfo'
import './Profile.css'
function Profile() {
  return (
    <div class="big">
        <h1>Profil</h1>
        <Name/>
        <Email/>
        <PersonalInfo/>
        <Address/>
    </div>
  )
}

export default Profile