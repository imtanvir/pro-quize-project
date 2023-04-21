import React, { useEffect } from 'react';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Quiz = ({ questionDetails, getOptionValue, optionValue, correctCounter }) => {
    const { options } = questionDetails;
    const { question, correctAnswer, id } = questionDetails;
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [isDisable, setDisable] = useState(false);
    const [isDisableSubmit, setDisableSubmit] = useState(true);

    return (
        <div id={question} className={`quiz-card text-left justify-center border shadow-md border-slate-200 rounded w-full p-6`}>
            <div className='flex justify-between'>
                <h1 className=' mb-3 text-indigo-500 font-bold text-base font-mono' dangerouslySetInnerHTML={{ __html: question }}></h1>
                <span className='ml-3 flex flex-row'><i id={id} className=" text-indigo-500 text-lg mr-2 fa-solid fa-hand-point-right"></i><i onClick={() => setOpen(true)} title='Show answer' className=" cursor-pointer fa-solid fa-eye"></i></span>
            </div>
            <div className=' grid md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    options.map(option => (
                        <div key={option} htmlFor={option} className='px-4 border-2 rounded border-indigo-200 text-left flex'>
                            <input disabled={isDisable ? true : false} onClick={() => setDisableSubmit(false)} onChange={getOptionValue} id={option} name={question} value={option} type="radio" className=" checked:bg-blue-500 mr-2" />
                            <label className=' py-6 w-full ' htmlFor={option}>{option}</label>
                        </div>))
                }
            </div>
            <div className='flex justify-center pt-4'>
                <button disabled={isDisableSubmit ? true : false} className=' py-1 px-4 font-semibold rounded border-2 border-indigo-500 bg-indigo-600 hover:bg-indigo-500 text-white disabled:pointer-events-none disabled:bg-slate-500 disabled:border-slate-600 disabled:text-slate-300' onClick={() => { correctCounter(correctAnswer); setDisable(true); setDisableSubmit(true); }}>Submit</button>
            </div>
            {/* Tailwind Modal  */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-indigo-200 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-indigo-200 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                                                {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                                                <svg className=" text-yellow-600 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                                </svg>

                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Correct Answer:
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-600">{correctAnswer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-indigo-200 px-4 py-3 sm:px-6 flex justify-end">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default Quiz;