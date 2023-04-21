import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className='py-4 px-3 bg-purple-400 flex justify-center items-center'>
                <div className=' flex justify-center w-40'>
                    <img className=' w-3/5' src={'/blog2.png'} alt="" />
                </div>
                <h1 className=' text-white font-light font-sans text-center text-4xl'>Blog Topic</h1>
            </div>
            <div className=" px-6 grid grid-cols-1 gap-3 py-3">
                <div className=' relative py-8 px-4 tablet:px-2 rounded shadow-sm bg-indigo-200 shadow-slate-400'>
                    <img className='blg-img absolute left-3 top-2 tablet:w-1/12' src="/code.png" alt="img" />
                    <h1 className=' text-center text-indigo-500 font-semibold font-sans text-2xl pb-3'>What is the purpose of React Router?
                    </h1>
                    <p className=' p-2 text-slate-800 text-base font-medium'>
                        React Router is a popular routing library for React applications that allows developers to define and manage the routing of the application. The main purpose of React Router is to enable single-page applications (SPAs) to have multiple "pages" that are presented to the user without requiring a full page refresh.
                        React Router provides a declarative way to map URLs to components in the application, making it easier to manage the state of the application as the user navigates through it. It allows developers to create complex UI layouts and navigation structures that would otherwise be difficult or impossible to achieve.
                    </p>
                </div>
                <div className=' relative py-8 px-4 tablet:px-2 rounded shadow-sm bg-indigo-200 shadow-slate-400'>
                    <img className='blg-img absolute left-3 top-2 tablet:w-1/12' src="/code.png" alt="img" />
                    <h1 className=' text-center text-indigo-500 font-semibold font-sans text-2xl pb-3'>How dose the context api works?</h1>
                    <p className=' p-2 text-slate-800 text-base font-medium'>
                        The Context API is a feature in React that allows data to be passed down the component tree without having to pass props manually at every level. This makes it easier to share data between components that are not directly connected.
                    </p>
                </div>
                <div className=' relative py-8 px-4 tablet:px-2 rounded shadow-sm bg-indigo-200 shadow-slate-400'>
                    <img className='blg-img absolute left-3 top-2 tablet:w-1/12' src="/code.png" alt="img" />
                    <h1 className=' text-center text-indigo-500 font-semibold font-sans text-2xl pb-3'>Explain how the useRef hook works in React</h1>
                    <p className=' p-2 text-slate-800 text-base font-medium'>
                        The useRef hook in React allows you to create a mutable reference to a DOM element or a value that persists across component re-renders. It returns an object with a current property that can be used to read or modify the value of the reference. It is commonly used for accessing DOM elements, managing focus, and storing values that do not trigger a re-render of the component when modified.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;