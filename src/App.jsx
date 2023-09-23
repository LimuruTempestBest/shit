import React from 'react'

function App() {
  return (
    <div className='bg-[#000000] h-screen w-full row "bg-fixed'>
      <div className='px-8 py-8 bg-[#fca311]'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-rows gap-48'>
            <div className='text-2xl font-black'>
              BLOG 📝
            </div>
            <div className='flex flex-rows gap-10'>
              <div className='text-2xl font-semibold hover:text-[#e5e5e5] duration-200'>
                Blog
              </div>
              <div className='text-2xl font-semibold hover:text-[#e5e5e5] duration-200'>
                Post
              </div>
              <div className='text-2xl font-semibold hover:text-[#e5e5e5] duration-200'>
                Write
              </div>
              <div className='text-2xl font-semibold hover:text-[#e5e5e5] duration-200'>
                Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-48 py-16'>
        <div className='text-[#fca311] font-black text-3xl'>
          The Basic Language of the web: HTML
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-3'>
          All modern websites and web applications are built using three fundamental technologies: HTML, CSS and JavaScript. These are the languages of the web.
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-2'>
          In this post, let's focus on HTML. We will learn what HTML is all about, and why you too should learn it.         </div>
      </div>

      <div className='flex flex-col px-48 py-16 mb-10'>
        <div className='text-[#fca311] font-black text-3xl'>
          What is HTML?
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-3'>
          HTML stands for HyperText Markup Language. It's a markup language that web developers use to structure and describe the content of a webpage (not a programming language).         </div>
        <div className='text-[#fca311] font-semibold text-xl mt-2'>
          HTML consists of elements that describe different types of content: paragraphs, links, headings, images, video, etc. Web browsers understand HTML and render HTML code as websites.       </div>
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

      <div className='flex flex-col px-48 py-16'>
        <div className='text-[#fca311] font-black text-3xl'>
          The Basic Language of the web: HTML
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-3'>
          All modern websites and web applications are built using three fundamental technologies: HTML, CSS and JavaScript. These are the languages of the web.
        </div>
        <div className='text-[#fca311] font-semibold text-xl mt-2'>
          In this post, let's focus on HTML. We will learn what HTML is all about, and why you too should learn it.         </div>
      </div>
    </div>

  )
}

export default App