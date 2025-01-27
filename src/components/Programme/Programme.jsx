import React from 'react'
import './Programme.css'

const Programme = () => {
  return (
    <div className='container flex'>
        <div className='space'></div>
        <div className='main_mid'>
            <p>OUR PROGRAM</p>
            <h1>WHAT WE OFFER</h1>
            <div className='offers flex'>
                <div className='backof'>
                    <div className='infoof'>
                        <div>
                            <p>Graduated Degree</p>
                        </div>
                    </div>
                </div>
                <div className='backof'>
                    <div className='infoof'>
                        <div>
                            <p>Master Degree</p>
                        </div>
                    </div>
                </div>
                <div className='backof'>
                    <div className='infoof'>
                        <div>
                            <p>Post Graduation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="space"></div>
    </div>
  )
}

export default Programme