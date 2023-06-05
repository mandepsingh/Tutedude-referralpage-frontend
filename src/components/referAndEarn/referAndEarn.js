import React from 'react'
import Referral from './referral/referral.js'
import Howitworks from './howitwork/howitworks.js'
import Refercode from './refercode/refercode.js'
import Navbar from '../navbar/navbar.js'
import Fileindexing from './fileIndexing/fileIndexing.js'
import "./referAndEarn.css"

function referAndEarn() {
  return (
    <div>
        <Navbar/>
        <div className='referral-body'>
          <Fileindexing/>
          <div className='referral-col'>
              <Referral/>
              <Refercode/>
          </div>
          <div>
              <Howitworks/>
          </div>
          <p className='referral-footer'>Friends Who Enrolled</p>
          <p className='referral-footer'>Terms & Conditions</p>
        </div>
    </div>
  )
}

export default referAndEarn