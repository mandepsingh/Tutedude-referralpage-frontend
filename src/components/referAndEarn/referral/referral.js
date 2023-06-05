import React from 'react'
import "./referral.css"

function referral() {
  return (
    <div className='withdraw-balance-card'>
      <div className='withdraw-card'>
        <div className='withdraw-data-box'>
          <div className='withdraw-data-heading'>Referral Earning</div>
          <div className='withdraw-data'>₹ 2,500</div>
        </div>
        <div className='withdraw-data-box'>
          <div className='withdraw-data-heading'>Total Referrals</div>
          <div className='withdraw-data'>7</div>
        </div>
        <div className='withdraw-data-box'>
          <div className='withdraw-data-heading'>Wallet Balance</div>
          <div className='withdraw-data'>₹ 500</div>
        </div>
      </div>
      <button className='withdraw-balance-button'>Withdraw Balance</button>
    </div>
  )
}

export default referral