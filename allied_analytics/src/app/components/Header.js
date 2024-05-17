import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='main-header'>
        <div className='sub-header'>
            <div className="container">
                <ul className='flex-box justify-end align-start'>
                    <li>
                        <Link className="" href="tel:+1-888-961-4454" title='+1-888-961-4454'>
                            <Image/>
                            +1-888-961-4454
                        </Link>
                    </li>
                    <li>
                        <Link className="" title='support@researchdive.com' href=" mailto:support@researchdive.com">
                            <Image/>
                            support@researchdive.com
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container">
            <header className='flex-box align-center'>
                <Link className='logo' href="">
                    <Image/>
                </Link>
                <div className='menu'>
                    <ul className='flex-box'>
                        <li>
                            <Link className="" href="">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className="" href="">
                                Consulting
                            </Link>
                        </li>
                        <li>
                            <Link className="" href="">
                                Reports
                            </Link>
                        </li>
                        <li>
                            <Link className="" href="">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link className="blue-btn login-btn" href="">
                    Login
                </Link>
            </header>
        </div>
    </div>
    </>
  )
}

export default Header