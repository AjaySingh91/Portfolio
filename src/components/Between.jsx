import React from 'react'
import MainPic from '../images/AJAY.PIC.jpeg'

function Between() {
  return (
    <div>

<div className="between bg-slate-800 md:flex md:pt-20 py-10 md:space-x-20 space-y-3">
        <div className="left">
            <div className="abt flex space-x-2">
                <div className="tittle text-white text-5xl ml-10 hover:underline">About</div>
                <div className="bg-green-600 h-1 hover:w-32 w-20 mt-7"></div>
            </div>
            <div className="abtMe text-4xl text-white ml-10 my-5">
                Learn More About Me
            </div>
            <div className="img mx-24 md:ml-14 py-3">
                <img src={MainPic} alt="imageI" className="img rounded-full h-80 md:w-80" />
            </div>
        </div>
        <div className="about md:mt-28 ml-10 md:w-1/2 space-y-5">
            <div className="profesion text-3xl text-green-600">Web Developer</div>
            <div className="detail text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
                voluptatum eos consequatur repudiandae minus? Quis iste animi expedita
                blanditiis aperia.
            </div>
            <div className="abtttt grid grid-cols-2">
                <div className="left">
                    <div className="abtbt flex space-x-2 space-y-3">
                        <i className="fa fa-regular fa-circle mt-5"></i>
                        <div className="abt text-xl text-white">Age - 20</div>
                    </div>
                    <div className="abtbt flex  space-x-2 space-y-3">
                        <i className="fa fa-regular fa-circle mt-5"></i>
                        <div className="abt text-xl text-white">Birthday - 01/01/2001</div>
                    </div>
                    <div className="abtbt flex space-x-2 space-y-3">
                        <i className="fa fa-regular fa-circle mt-5"></i>
                        <div className="abt text-xl text-white">Phone - +91 8210624970</div>
                    </div>
                    <div className="abtbt flex  space-x-2 space-y-3">
                        <i className="fa fa-regular fa-circle mt-5"></i>
                        <div className="abt text-xl text-white">E-Mail - ajaysingh002001@gmail.com</div>
                    </div>
                </div>
                <div className="right">
                    <div className="abtbt flex space-x-2 space-y-3">
                        <i className="fa fa-regular fa-circle mt-5"></i>
                        <div className="abt text-xl text-white">Age - 20</div>
                    </div>
                    <div className="abtbt flex  space-x-2 space-y-3">
                        <i className="fa fa-regular fa-circle mt-5"></i>
                        <div className="abt text-xl text-white">Birthday - 01/01/2001</div>
                    </div>
                    <div className="abtbt flex  space-x-2 space-y-3">
                        <i className="fa fa-regular fa-circle mt-5"></i>
                        <div className="abt text-xl text-white">Phone - +91 8210624970</div>
                    </div>
                    <div className="abtbt flex space-x-2 space-y-3">
                        <i className="fa fa-regular fa-circle mt-5"></i>
                        <div className="abt text-xl text-white">E-Mail - ajaysingh002001@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Between