import React from 'react'

function SendMsg() {
  return (
    <div>
        <div class="sendMessage bg-slate-700 py-10">
          <form action="#">
            <div class="abtmessenger  mr-10 md:space-x-10 space-y-5 md:flex ">
                <div></div>
              <input
                type="text"
                placeholder="Your Name"
                class="opacity-30 placeholder:text-black px-2 py-2 w-4/5 md:w-1/2 rounded-xl"
              />
              <input
                type="text"
                placeholder="Your Email"
                class="opacity-30 placeholder:text-black px-2 py-2 w-4/5 md:w-1/2 rounded-xl"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              class="opacity-30 placeholder:text-black mx-10 md:ml-10 my-5 px-2 py-2 rounded-xl"
            />
            <div class="textarea">
              <textarea
                name="Enter Your Text"
                id=""
                cols="55"
                rows="7"
                placeholder="Message"
                class="opacity-30 placeholder:text-black md:ml-10 mx-10 px-2 py-2 rounded-lg"
              ></textarea>
            </div>
            <div class="submitbtn">
              <button class="text-white bg-green-600 px-2 py-2 rounded-lg ml-28 my-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default SendMsg