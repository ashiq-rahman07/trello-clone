import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:item-center md:justify-between'>
                <span className='flex text-sm text-gray-500 sm:text-center'>
                    @ 2024 <li className='hover:underline'>trello</li>, All Rights
                </span>
                <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0'>
                    <li className='hover:underline me-4 md:me6'>About</li>
                    <li className='hover:underline me-4 md:me6'>Privacy Policy</li>
                    <li className='hover:underline me-4 md:me6'>Licening</li>
                    <li className='hover:underline me-4 md:me6'>Contact</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer