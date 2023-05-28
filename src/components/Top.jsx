import MainPic from '../images/AJAY.PIC.jpeg'

function Top() {
  return (
    <>
      <div className="top bg-slate-700 m-0 p-0">
        <div className="nav md:flex md:py-5 md:text-2xl">
          {/* <div className="main pt-3 text-5xl ml-10 text-green-500">Name AJ</div> */}
          <div className="navitem flex justify-evenly space-x-5 ml-10 py-5 md:ml-24 text-white hover:text-green-400">
            <div className="navItem cursor-pointer p-2 hover:bg-black hover:text-white hover:rounded">Home</div>
            <div className="navItem cursor-pointer p-2 hover:bg-black hover:text-white hover:rounded">About</div>
            <div className="navItem cursor-pointer p-2 hover:bg-black hover:text-white hover:rounded">Skills</div>
            <div className="navItem cursor-pointer p-2 hover:bg-black hover:text-white hover:rounded">Resume</div>
            <div className="navItem cursor-pointer p-2 hover:bg-black hover:text-white hover:rounded">Contact</div>
          </div>
          <div className="visitMe flex justify-evenly space-x-10 ml-48 md:py-5">
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
        <div className="header md:flex md:ml-24">
          <div className="intro md:w-1/2">
            <div className="name text-3xl m-10">
              I'm <span className="nme text-green-600 text-6xl"> Ajay Singh </span>
            </div>
            <div className="abt  md:w-1/2 m-10 text-xl">
              I'm a passionate <span className="underline">Web Developer</span> from
              Rajkot Gujarat
            </div>
          </div>
          <div className="image flex justify-center py-5">
            <img src={MainPic} alt="mainImg" className="h-80 rounded-full"/>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Top;
