import React from 'react'
import Layout from '../components/Layouts/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi';
const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
        <div className='row contactus'>
          <div className='col-md-6'>
            <img
            src='https://th.bing.com/th/id/OIP.iyqAA6Ff5J5ZMfSu1atvRgHaEU?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='contactus'
            style={{width:'100%'}}
            /> 
          </div>
          <div className='col-md-4'>
            <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
            <p className='text-justify mt-2'>any query and info about product feel free to call anytime 24x7 available</p>
            <p className='mt-3'><BiMailSend/>:www.help@ecommerceapp.com</p>
            <p className='mt-3'><BiPhoneCall/>:012-3456789</p>
            <p className='mt-3'><BiSupport/>1800-0000-0000 (Toll Free)</p>
          </div>
        </div>
    </Layout>
  )
}

export default Contact