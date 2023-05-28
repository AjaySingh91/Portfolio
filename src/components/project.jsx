import React from 'react'

function Project() {
  return (
    <div>
        <div class="projects py-20 bg-slate-700">
        <div class="abt flex space-x-2 ">
            <div class="tittle text-white text-5xl ml-10 hover:underline">Projects</div>
            <div class="bg-green-600 h-1 w-20 mt-7"></div>
        </div>
        <div class="allprojct  md:flex">
            <div class="projectItem md:w-1/2 space-y-3 mt-5 ml-10">
                <div class="projectName text-4xl text-white">vdhfjvkgf</div>
                <div class="projectDetails ">vdhfjvkgf Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus non aliquid tenetur sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                    ipsa veniam ipsum!</div>
                <div class="projectlinks text-2xl"><a href="http://google.com ">Project-- </a></div>
            </div>
            <div class="projectItem md:w-1/2 space-y-3 mt-5 ml-10">
                <div class="projectName text-4xl text-white">vdhfjvkgf</div>
                <div class="projectDetails ">vdhfjvkgf Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus non aliquid tenetur sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                    ipsa veniam ipsum!</div>
                <div class="projectlinks text-2xl"><a href="http://google.com ">Project -- </a></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Project