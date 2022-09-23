import { useState } from "react"

const News = () => {
    const [formSubmit, setFormSubmit] = useState(false)

    return(
        <div className="bg-slate-900 px-10 md:px-20 py-24" id={'news'}>
            <h1 className="text-white text-center text-6xl font-head">Subscribe To Our Newsletter</h1>
            <p className="text-center w-full lg:w-9/12 text-lg text-slate-400 mx-auto my-12">
                Subscribe to our newsletter so you can get the latests offers and updates about our products and services.</p>
            {!formSubmit ? (
                <>
                 <div className="relative flex justify-center w-full lg:w-9/12 mx-auto">
                     <input type="email" className="text-white w-full px-10 py-5 bg-gray-700 mx-auto rounded-md" placeholder="Type Your E-mail" />
                     <button onClick={() => setFormSubmit(true)} className="bg-violet-800 hover:bg-violet-800/80 font-main font-bold text-white px-10 py-5 rounded-md absolute right-0">Subscribe</button>
                 </div>
                 </>
            ) : (
                <h1 className="bg-green-100 text-green-900 w-96 mx-auto text-center font-bold rounded-md py-4">
                    Done!
                </h1>
            )}

        </div>
    )
}

export default News