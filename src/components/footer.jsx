import {AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
    return(
        <div className="pb-10 bg-white" id={'contact'}>
            <div className="flex flex-col md:flex-row justify-center mt-20 mx-10 md:mx-20 lg:mx-40 border-b border-gray-200 pb-20">
                <h1 className="mb-10 md:mb-0 text-4xl font-bold font-head mr-5 w-full md:w-7/12 text-start">
                    Amely
                </h1>
                <ul className="mr-5 mb-10 md:mb-0 w-full md:w-7/12">
                    <li className="text-gray-500 font-main uppercase mb-1">
                        About</li>
                    <li className="text-sm text-gray-600">Leading software company to turn your ideas into technological wonders.</li>
                </ul>

                <ul className="mr-5 mb-10 md:mb-0 w-full md:w-7/12">
                    <li className="text-gray-500 font-main uppercase mb-1">
                        Contact
                    </li>
                    <li className="text-sm text-gray-600">amely@fakedomain.com</li>
                </ul>

                <ul>
                <li className="text-gray-500 font-main uppercase mb-1">Socials</li>
                    <li className='flex justify-start md:justify-evenly items-center text-3xl md:text-lg'>
                        <span>
                            <AiFillTwitterSquare />
                        </span>
                        <span>
                            <AiFillInstagram />
                        </span>
                        <span>
                            <AiFillLinkedin />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="mx-10 lg:mx-40 md:mx-20 pt-10 font-head">
                <p className="text-sm text-gray-400">Designed & Programmed by <b>Riade Boughaba</b> All Rights Reserved 2022 </p>
            </div>
        </div>
    )
}

export default Footer