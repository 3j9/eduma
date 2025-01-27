import React from 'react'
import "./Campus.css"
import campus1 from "../../assets/campus1.jpg"
import campus2 from "../../assets/campus2.jpg"
import campus3 from "../../assets/campus3.jpg"
import campus4 from "../../assets/campus4.jpg"


const Campus = () => {
    const images = [
        {id:1, url:campus1},
        {id:2, url:campus2},
        {id:3, url:campus3},
        {id:4, url:campus4}
    ];
  return (
    <div className='campus'>
        <div className='cam_info'>
            <p>GALLERY</p>
            <h1>Campus Photos</h1>
        </div>
        <div className='images flex'>
            <div className='space'></div>
            <div className='corr'>
                <div className='flex'>
                    {images.map((data, index) => (
                        <div key={index} className='image '>
                            <img src={data.url} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='space'></div>
        </div>
        <button>See more here <i className='icon-arrow-right'></i></button>
    </div>
  )
}

export default Campus