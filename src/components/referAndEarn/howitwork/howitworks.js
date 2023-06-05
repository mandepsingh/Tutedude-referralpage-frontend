import React from 'react'
import './howitworks.css'
import Rupee from '../../../icons/rupee.png'
import People from '../../../icons/people.png'
import Purchase from '../../../icons/purchase.png'
import Referal from '../../../icons/referal.png'
import Wallet from '../../../icons/wallet.png'

function howitworks() {
  return (
    <div className='howitworks'>
      <div className='howitworks-heading'>
        How does it work ?
      </div>
      <div className='howitworks-li-box'>
        <div className='howitworks-li'>
          <img src={People} alt="People" className='howitworks-icon'/>
          <div>
            <p className='howitworks-li-head'>Invite your Friends</p>
            <p className='howitworks-li-body'>Share the link tutedude.com with your friends</p>
          </div>
        </div>
        <div className='howitworks-li'>
          <img src={People} alt="People" className='howitworks-icon'/>
          <div>
            <p className='howitworks-li-head'>Friend purchases any course</p>
            <p className='howitworks-li-body'>Using your REFERRAL CODE in the payments page</p>
          </div>
        </div>
        <div className='howitworks-li'>
          <img src={People} alt="People" className='howitworks-icon'/>
          <div>
            <p className='howitworks-li-head'>You get ₹ 200 as referral money</p>
            <p className='howitworks-li-body'>On total purchase the friend makes, into your wallet</p>
          </div>
        </div>
        <div className='howitworks-li'>
          <img src={People} alt="People" className='howitworks-icon'/>
          <div>
            <p className='howitworks-li-head'>Your Friend gets ₹ 200 Off </p>
            <p className='howitworks-li-body'>On his overall fee on successful purchase using your referral code </p>
          </div>
        </div>
        <div className='howitworks-li'>
          <img src={People} alt="People" className='howitworks-icon'/>
          <div>
            <p className='howitworks-li-head'>Transfer money from wallet</p>
            <p className='howitworks-li-body'>When the wallet balance reaches ₹200 or more, you can withdraw it</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default howitworks