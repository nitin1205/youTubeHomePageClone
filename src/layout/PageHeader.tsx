import logo from '../assets/logo.png';

export function PageHeader() {
 return <div className="flex gap-10 lg:gap-20 justify-between">
    <div className="flex gap-4 items-center shrink-0">
        <button></button>
        <a href='/'>
         <img src={logo} className='h-10' />
        </a>
    </div>

 </div>   
}