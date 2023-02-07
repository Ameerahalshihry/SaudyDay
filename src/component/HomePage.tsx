import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function HomePage() {
  return (
    <div>
            <Nav />

      <h1 className='text' align='center' marginBottom="30px">أرررحب</h1>
    <div className="grid-container">
  <a href="#" className="block block-1">
    <div className="image">
      <img src="https://images.pexels.com/photos/11309513/pexels-photo-11309513.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2>الزي السعودي</h2>
    </div>
  </a>
  <a href="#" className="block block-2">
    <div className="image">
      <img src="https://images.pexels.com/photos/4493205/pexels-photo-4493205.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2 className="sub">خريطة المملكة</h2>
    </div>
  </a>
  <a href="#" className="block block-3">
    <div className="image">
      <img src="https://images.pexels.com/photos/4552350/pexels-photo-4552350.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2 className="sub">أيام زمان </h2>
    </div>
  </a>
  <a href="#" className="block block-4">
    <div className="image">
      <img src="https://images.pexels.com/photos/13126897/pexels-photo-13126897.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2 className="sub">أشهر المواشي</h2>
    </div>
  </a>
  <a href="#" className="block block-5">
    <div className="image">
      <img src="https://images.pexels.com/photos/11695881/pexels-photo-11695881.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
    </div>
    <div className="title">
      <h2 className="sub">تراث</h2>
    </div>
  </a>
</div>
      <Footer />
    </div>
  )
}

export default HomePage