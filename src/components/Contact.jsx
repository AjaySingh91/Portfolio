import React from "react";
import Gmap from '../images/google-maps.png'
import Phone from '../images/phone-call.png'
import Gmail from '../images/gmail.png'
import Share from '../images/share.png' 

function Contact() {
  return (
    <div>
      <div class="contactMe py-10 bg-slate-800">
        <div class="abt flex space-x-2">
          <div class="tittle text-white text-5xl ml-10 hover:underline font-bold">
            Contact
          </div>
          <div class="bg-green-600 h-1 w-20 mt-7"></div>
        </div>
        <div class="abtMe text-4xl text-white ml-12 my-5">Contact Me</div>
        <div class="contactitems">
          <div class="left md:flex">
            <div class="address bg-slate-400 bg-opacity-20 mx-10 my-10 px-5 py-5 space-x-4 flex md:w-1/2 rounded-xl">
              <img
                src={Gmap}
                alt="map"
                class="w-12 h-12 mt-2 bg-slate-600 p-2 rounded-full"
              />
              <div class="adddesc">
                <div class="addres text-white text-2xl font-bold opacity-40">
                  My Address
                </div>
                <div class=" text-white ">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
            <div class="Spcial bg-slate-400 bg-opacity-20 mx-10 my-10 px-5 py-5 space-x-4 flex md:w-1/2 rounded-xl">
              <img
                src={Share}
                alt="map"
                class="w-12 h-12 mt-3 bg-slate-600 p-2 rounded-full"
              />
              <div class="socialIcon">
                <div class="addres text-white text-2xl font-bold opacity-40">
                  Social Profiles
                </div>
                <div class="flex space-x-4 text-white">
                  <div className="onlinemeet p-2 text-2xl hover:text-green-400 hover:bg-white hover:rounded ">
              <a href="https//:whatsap.com">
                <i className="fa fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div className="onlinemeet p-2 text-2xl hover:text-green-400 hover:bg-white hover:rounded">
            <a href="https//:whatsap.com">

                <i className="fa fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="onlinemeet p-2 text-2xl hover:text-green-400 hover:bg-white hover:rounded">
            <a href="https//:whatsap.com">

                <i className="fa fa-brands fa-github"></i>
              </a>
            </div>
            <div className="onlinemeet p-2 text-2xl hover:text-green-400 hover:bg-white hover:rounded">
            <a href="https//:whatsap.com">
                <i className="fa fa-brands fa-telegram"></i>
              </a>
            </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right md:flex">
            <div class="address bg-slate-400 bg-opacity-20 mx-10 my-10 px-5 py-5 space-x-4 flex md:w-1/2 rounded-xl">
              <img
                src={Gmail}
                alt="map"
                class="w-12 h-12 mt-2 bg-slate-600 p-2 rounded-full"
              />
              <div class="adddesc">
                <div class="addres text-white text-2xl font-bold opacity-40">
                  Email Me
                </div>
                <div class=" text-white">ajaysingh002001@gmail.com</div>
              </div>
            </div>
            <div class="address bg-slate-400 bg-opacity-20 mx-10 my-10 px-5 py-5 space-x-4 flex md:w-1/2 rounded-xl">
              <img
                src={Phone}
                alt="map"
                class="w-12 h-12 mt-2 bg-slate-600 p-2 rounded-full"
              />
              <div class="adddesc">
                <div class="addres text-white text-2xl font-bold opacity-40">
                  Call Me
                </div>
                <div class=" text-white">+91 9199338788</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
