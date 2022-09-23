
const Process = () => {
    
    return(
        <div className='bg-slate-100/50 h-auto' id={'services'}>
            <div className="flex flex-col justify-center items-start p-10 md:p-20">
                <p className='text-center md:text-start w-full lg:w-2/3 font-head font-bold text-3xl md:text-5xl lg:text-6xl my-10 md:my-20 text-violet-900 leading-relaxed capitalize'>
                    Turn you ideas into <br className='hidden md:block'/> cutting edge technologies.
                </p>
            </div>
                <div className='grid grid-cols-12 gap-4 p-10'>
                    {[
                        {
                            name: "Web Design", 
                            img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        },
                        {
                            name: "Web Development", 
                            img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        },
                        {
                            name: "Software Design", 
                            img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                        },
                        {
                            name: "Software Development", 
                            img: "https://images.unsplash.com/photo-1542744095-0d53267d353e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }
                    ].map((item, idx) => (
                        <div className='col-span-12 md:col-span-6 lg:col-span-3 w-full md:mb-5' key={idx}>
                            <img src={item.img}
                            className='' alt="1"/>
                            <h6 className='w-full text-2xl text-start font-main font-bold text-violet-900 pt-5'>
                                 {item.name}
                            </h6>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Process