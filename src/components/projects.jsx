const Projects = () => {
    return(
        <div className="bg-slate-900 px-5 md:px-10 lg:px-40 pb-24" id={'projects'}>
            <h1 className="text-4xl text-white font-head font-bold py-20">Latest Projects</h1>
            <div className="grid grid-cols-2 gap-5 mb-10">
                <div className="col-span-2 lg:col-span-1">
                    <img src="https://cdn.dribbble.com/userupload/3226417/file/original-f58697b13a0052e1825bf78029431f65.png?compress=1&resize=1024x768" 
                    alt=""/>
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col justify-center">
                    <h4 className="text-4xl text-white font-main capilatize font-bold mb-5">E-commerce website design for fashion brand</h4>
                    <p className="text-white">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis et itaque harum provident quo, ratione nisi. Molestiae ea, quidem neque iusto quisquam, provident nostrum ex architecto veritatis harum temporibus? 
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 lg:col-span-1">
                    <img src="https://cdn.dribbble.com/userupload/3652303/file/original-171da293eef9756e49b004dc9f81764c.png?compress=1&resize=1024x768" 
                    alt=""/>
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col justify-center">
                    <h4 className="text-4xl text-white font-main capilatize font-bold mb-5">
                        AI-Powered software for digital recruiteur
                    </h4>
                    <p className="text-white">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis et itaque harum provident quo, ratione nisi. Molestiae ea, quidem neque iusto quisquam, provident nostrum ex architecto veritatis harum temporibus? 
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Projects