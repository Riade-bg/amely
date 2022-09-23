import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
const Nav = () => {
    const [menu, setMenu] = useState(false)
    return(
        <>
            <nav className="backdrop-blur px-5 md:px-10 py-4 drop-shadow flex justify-between items-center sticky top-0 z-20 bg-white/90 w-full">
                <h1 className="text-black font-medium font-head text-3xl">Amely</h1>
                <ul className="flex justify-end items-center flex-1 font-main">
                    {["Services", "Projects", "Contact"].map((item, idx) => (
                        <li className="hidden md:flex mr-5" key={idx}>
                            <a href={`#${item.toLowerCase()}`} className='hover:text-violet-800'>{item}</a>
                        </li>
                    ))}
                    <li className='hidden md:flex'>
                        <button className="hover:text-violet-800 font-main rounded border-2 border-violet-800 text-base font-bold px-7 py-2 bg-violet-800 hover:bg-violet-800/20 transition-all text-white">Let's Talk</button>
                    </li>
                    <li className="md:hidden text-black bg-slate-200 rounded-md p-2 cursor-pointer" onClick={() => setMenu(true)}>
                        <AiOutlineMenu />
                    </li>
                </ul>
            </nav>
            <AnimatePresence>
                {menu && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3, ease:"easeInOut"}}
                        className={`right-0 bottom-0 top-0 flex justify-end fixed md:hidden h-screen w-screen z-30 bg-white/50 backdrop-blur overflow-hidden`} 
                    >
                        <ul className='relative h-full flex flex-col items-center justify-center text-xl font-main bg-white w-9/12 px-10'>
                            <li className="absolute top-5 p-3 rounded-md right-5 m-2 flex justify-end cursor-pointer bg-slate-200" onClick={() => setMenu(false)}>
                                <AiOutlineClose />
                            </li>
                            {["Services", "Projects", "Contact"].map((link, idx) => (
                                <li className='hover:text-violet-800 mb-6' onClick={() => setMenu(false)}>
                                    <a href={`#${link.toLowerCase()}`} className='pb-4 text-3xl' key={idx}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                                <li className='w-full'>
                                    <button className="w-full font-main rounded-md border-2 border-violet-800 text-base font-bold px-7 py-4 bg-violet-800 text-white">Let's Talk</button>
                                </li>
                            </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nav