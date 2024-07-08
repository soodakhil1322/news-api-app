import React from 'react'

function Header({ userdata }) {

    return (
        <div className='flex'>
            <div className='flex h-20 bg-black  w-full sm:w-full'>
                <img src={require('./newsing.jpeg')} className='h-[10vh] px-5 sm:5vh ' />

                <div className='flex items-center justify-center space-x-10 text-white px-8'>
                    <a href='https://www.aajtak.in/' className='text-white no-underline'>AJJTAKK</a>
                    <a href='https://www.thelallantop.com/' className='text-white no-underline'>LALLANTOP</a>
                    <a href='https://www.gnttv.com/' className='text-white no-underline'> GNTTV</a>
                    <a href='https://www.businesstoday.in/' className='text-white no-underline'>BUSINESS TODAY</a>
                    <a href='https://bangla.aajtak.in/' className='text-white no-underline'>BANGLA</a>
                    <a href='https://malayalam.indiatoday.in/' className='text-white no-underline'>MALYALAM</a>
                    <a href='https://www.indiatodayne.in/' className='text-white no-underline'>NORTEAST</a>
                    <a href='https://bazaar.businesstoday.in/' className='text-white no-underline'>BTBAZAR</a>
                    <a href='https://thesportstak.com/' className='text-white no-underline'>SPORTS TAK</a>
                </div>
            </div>



        </div>
    )
}

export default Header
