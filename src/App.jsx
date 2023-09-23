import React from 'react'

function App() {
  return (
    <div className='bg-[#000000] h-screen w-full row overflow-y-auto'>
      <div className='px-8 py-8 bg-[#fca311]'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-rows gap-48'>
            <div className='text-2xl font-black'>
              BLOG 📝
            </div>
            <div className='flex flex-rows gap-10'>
              <button className='text-2xl font-semibold hover:text-[#e5e5e5] duration-200'>
                Blog
              </button>
              <button className='text-2xl font-semibold hover:text-[#e5e5e5] duration-200'>
                Post
              </button>
              <button className='text-2xl font-semibold hover:text-[#e5e5e5] duration-200'>
                Write
              </button>
              <button className='text-2xl font-semibold hover:text-[#e5e5e5] duration-200'>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-48 py-10 mt-10'>
        <div className='text-[#fca311] font-black text-3xl'>
          The Basic Language of the web: HTML
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-10'>
          All modern websites and web applications are built using three fundamental technologies: HTML, CSS and JavaScript. These are the languages of the web.
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-2'>
          In this post, let's focus on HTML. We will learn what HTML is all about, and why you too should learn it.
        </div>
      </div>

      <div className='flex flex-col px-48 py-10'>
        <div className='text-[#fca311] font-black text-3xl'>
          What is HTML?
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-10'>
          HTML stands for HyperText Markup Language. It's a markup language that web developers use to structure and describe the content of a webpage (not a programming language).
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-2'>
          HTML consists of elements that describe different types of content: paragraphs, links, headings, images, video, etc. Web browsers understand HTML and render HTML code as websites.
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-2'>
          In HTML, each element is made up of 3 parts:
          <div className='flex flex-col'>
            <div className='text-[#fca311] font-semibold text-xl mt-3'>
              1. The opening tag
            </div>
            <div className='text-[#fca311] font-semibold text-xl mt-3'>
              2. The closing tag
            </div>
            <div className='text-[#fca311] font-semibold text-xl mt-3'>
              3. The actual element
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col px-48 py-10'>
        <div className='text-[#fca311] font-black text-3xl'>
          Why should you learn HTML?
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-10'>
          There are countless reasons for learning the fundamental language of the web. Here are 5 of them:
        </div>
        <div className='flex flex-col'>
          <div className='text-[#fca311] font-semibold text-xl mt-3'>
            1. To be able to use the fundamental web dev language
          </div>
          <div className='text-[#fca311] font-semibold text-xl mt-3'>
            2. To hand-craft beautiful websites instead of relying on tools like Wordpress or Wix
          </div>
          <div className='text-[#fca311] font-semibold text-xl mt-3'>
            3. To build web applications
          </div>
          <div className='text-[#fca311] font-semibold text-xl mt-3'>
            3. To impress friends
          </div>
          <div className='text-[#fca311] font-semibold text-xl mt-3'>
            3. To have fun 😃
          </div>
          <div className='flex flex-rows items-center gap-3'>
            <div className='text-[#fca311] font-semibold text-xl mt-3'>
              You can learn more at
              <div>
                <a className='text-slate-100 font-bold text-xl hover:text-rose-300 duration-200' href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                  MDN Web Docs
                </a>
              </div>
              <div className='text-[#fca311] font-black text-2xl mt-7'>
                Hopefully you learned something new here. See you next time!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App