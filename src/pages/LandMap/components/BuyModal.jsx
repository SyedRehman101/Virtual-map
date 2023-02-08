import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
const BuyModal = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault();
        CloseModal();

    }

    const CloseModal = () => {
        const div = document.getElementById("buy-modal");
        div.classList.add('scale-0')

        const modalDiv = document.getElementById("modal");
        modalDiv.classList.add("translate-x-96")
    }

    return (

        <div id='buy-modal' className='absolute scale-0 p-8 w-1/3 border-0 border-gray-100 top-44 rounded-lg bg-black z-30 h-auto left-1/3 transition-all duration-500'>
            <div className='flex justify-end transition-all'>
                <button onClick={() => {
                    CloseModal()
                }}>
                    <AiOutlineClose className='text-gray-400 text-lg hover:animate-spin hover:text-purple-400' />
                </button>
            </div>

            <br />
            <form onSubmit={(e) => SubmitHandler(e)}>

                <div class="relative z-0">
                    <input autoComplete={false} type="text" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                    <label for="Name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <br />
                <div class="relative z-0">
                    <input type="text" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                    <label for="Facebook link" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Facebook link</label>
                </div>
                <br />
                <div class="relative z-0">
                    <input autoComplete={false} type="text" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                    <label for="Twitter link" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Twitter link</label>
                </div>
                <br />
                <div class="relative z-0">
                    <input type="text" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                    <label for="Reddit link" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Reddit link</label>
                </div>
                <br />
                <button type='submit' className='w-full h-auto bg-purple-600 text-sm  text-white p-2 uppercase transition-all hover:bg-purple-700 hover:text-white'>
                    Submit
                </button>
            </form>

        </div>
    )
}

export default BuyModal