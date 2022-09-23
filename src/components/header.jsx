const Header = () => {
    return(
        <header 
        className="h-head w-full px-10 md:px-15 flex flex-col items-start justify-center relative bg-white
        ">
            <span className="capitalize font-thin font-main mb-5 text-base lg:text-2xl md:text-lg text-center md:text-start w-full">
                One-Stop solution for all your business needs
                </span>
                <h1 className="font-head text-4xl lg:text-8xl md:text-7xl text-center md:text-start font-bold">
                    Creating <span className="text-violet-800">Softwares</span> <br className="hidden lg:block" /> & Designing Excelence
                </h1>
                <button className="w-full md:w-auto py-5 px-12 rounded-md hover:bg-violet-800/40 hover:text-violet-800 border-2 border-violet-800 mt-5 text-lg font-bold bg-violet-800 text-white font-main transition-all md:text-start">
                    See Our Work
                </button>
                <div className="absolute h-96 w-1/2 right-0 -bottom-48 z-10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80"
                    className="max-h-full max-w-full hidden lg:block rounded-md" alt="Team" />
                </div>
        </header>
    )
}

export default Header