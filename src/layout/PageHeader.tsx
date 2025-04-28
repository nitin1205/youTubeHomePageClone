import { useState } from 'react';
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';

import logo from '../assets/logo.png';
import { Button } from '../components/Button';
 
export function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

 return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
    <div className={`gap-4 items-center shrink-0 
        ${showFullWidthSearch? 'hidden' : 'flex'}`}>
        <Button variant='ghost' size='icon'>
            <Menu/>
        </Button>
        <a href='/'>
         <img src={logo} className='h-6' />
        </a>
        
    </div>
    <form className={`gap-4 grow justify-center
        ${showFullWidthSearch? 'flex' : 'hidden md:flex'}`}>
        {showFullWidthSearch &&
         <Button onClick={()=> setShowFullWidthSearch(false)} 
            type='button' size='icon' variant='ghost' className='shrink-0'>
            <ArrowLeft />
        </Button> }
        <div className='flex grow max-w-[600px]'>
            <input type='search' placeholder='search'
                className='rounded-l-full border
                    border-secondary-border
                    shadow-inner shadow-secondary-Default py-1 px-4 text-lg w-full
                    focus:border-blue-500 outline-none'
            />
            <Button className='py-2 px-4 rounded-r-full
                        border border-secondary-border border-l-0 shrink-0' 
            >
                <Search />
            </Button>
        </div>
        <Button type='button' size='icon' className='shrink-0'>
            <Mic/>
        </Button>
    </form>
    
    <div className={`flex shrink-0 md:gap-2 
        ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
        <Button onClick={()=> setShowFullWidthSearch(true)} 
            size='icon' variant='ghost' className='md:hidden'>
            <Search />
        </Button>
        <Button size='icon' variant='ghost' className='md:hidden'>
            <Mic />
        </Button>
        <Button size='icon' variant='ghost'>
            <Upload/>
        </Button>
        <Button size='icon' variant='ghost'>
            <Bell/>
        </Button>
        <Button size='icon' variant='ghost'>
            <User/>
        </Button>
        
    </div>
 </div>   
}