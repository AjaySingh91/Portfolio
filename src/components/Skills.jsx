import React from 'react'

function Skills() {
  return (
    <div>
        
        <div class="skills py-20 bg-black">
        <div class="abt flex space-x-2 ">
            <div class="tittle text-white text-5xl ml-10 hover:underline">Skills</div>
            <div class="bg-green-600 h-1 w-20 mt-7"></div>
        </div>
        <div class="skillitm grid grid-cols-2">
            <div class="left mt-10 md:ml-32">
                <div class="skillItems ml-10 space-y-3">
                    <div class="html flex text-2xl text-white">HTML <span
                            class="percentage ml-64 text-green-600">90%</span></div>
                    <div class="bg-slate-500 h-1 w-96">
                        <div class="currentSkil bg-green-600 h-1 w-80"></div>
                    </div>
                </div>
                <div class="skillItems ml-10 space-y-3 mt-5">
                    <div class="html flex text-2xl text-white">CSS <span
                            class="percentage ml-64 text-green-600">80%</span></div>
                    <div class="bg-slate-500 h-1 w-96">
                        <div class="currentSkil bg-green-600 h-1 w-80"></div>
                    </div>
                </div>
                <div class="skillItems ml-10 space-y-3 mt-5">
                    <div class="html flex text-2xl text-white">JavaScript<span
                            class="percentage ml-36 text-green-600">70%</span></div>
                    <div class="bg-slate-500 h-1 w-96">
                        <div class="currentSkil bg-green-600 h-1 w-64"></div>
                    </div>
                </div>

            </div>
            <div class="right  mt-10 md:ml-32">
                <div class="skillItems ml-10 space-y-3 mt-5">
                    <div class="html flex text-2xl text-white">React Js <span
                            class="percentage ml-56 text-green-600">80%</span></div>
                    <div class="bg-slate-500 h-1 w-96">
                        <div class="currentSkil bg-green-600 h-1 w-80"></div>
                    </div>
                </div>
                <div class="skillItems ml-10 space-y-3 mt-5">
                    <div class="html flex text-2xl text-white">PHP <span
                            class="percentage ml-40 text-green-600">60%</span></div>
                    <div class="bg-slate-500 h-1 w-96">
                        <div class="currentSkil bg-green-600 h-1 w-56"></div>
                    </div>
                </div>
                <div class="skillItems ml-10 space-y-3 mt-5">
                    <div class="html flex text-2xl text-white">Java <span
                            class="percentage ml-56 text-green-600">75%</span></div>
                    <div class="bg-slate-500 h-1 w-96">
                        <div class="currentSkil bg-green-600 h-1 w-72"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills