import React from 'react'
function Footer() {
  return (
    <div>
       <div className='py-10'>
      <div className='h-[1px] w-full bg-gray-700'>
        
      </div>
      <div className='flex flex-col items-center justify-center py-5 mt-10 opacity-70'>
      <p className='font-bold'>Made With ❤️ by</p>
      <p className=''>-Akhil Sood</p>
      <div className='flex space-x-5'>  
      <a href='https://www.instagram.com/sood_akhil_1322/'> <i class="fa-brands fa-square-instagram" /></a>
      <a href='https://www.linkedin.com/in/akhil-sood-940711255/'><i class="fa-brands fa-linkedin"></i></a>
     <a href='https://github.com/soodakhil1322'> <i class="fa-brands fa-github"></i></a>
      <a href='https://mail.google.com/mail/u/0/#inbox'><i class="fa-solid fa-envelope"></i></a>
      </div>
      </div>

    </div>
    </div>
  )
}

export default Footer
