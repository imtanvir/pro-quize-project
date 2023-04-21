import React, { useEffect, useState } from 'react';
import './QuizeDetails.css';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';
const QuizeDetails = () => {
    const quizeData = useLoaderData().data;
    const questions = quizeData.questions;
    const [isHidden, setVisible] = useState(true);
    const [optionValue, setOptionValue] = useState('');
    const [correctCount, setCorrect] = useState(0);
    const [inCorrectQs, setIncorrcetQs] = useState([]);
    const [inCorrectQsId, setIncorrcetQsId] = useState([]);
    const getOptionValue = (event) => {
        let valueSet = event.target.value;
        setOptionValue(valueSet);
    }
    const correctCounter = (correctAns) => {
        let newArray = [];
        let idArray = [];
        if (correctAns === optionValue) {
            setCorrect(correctCount + 1);
        } else {
            for (const qs of questions) {
                for (const option of qs.options) {
                    if (option === optionValue) {
                        newArray = [...inCorrectQs, qs.question];
                        idArray = [...inCorrectQsId, qs.id];
                        setIncorrcetQs(newArray);
                        setIncorrcetQsId(idArray);
                    }
                }
            }
        }
    }
    const indicateWrongAns = () => {
        inCorrectQs.map(iqs => {
            const idGet = document.getElementById(iqs);
            idGet.classList.remove('border-slate-200');
            idGet.classList.remove('shadow-md');
            idGet.style.border = '1px solid rgb(220 38 38)';
            idGet.style.boxShadow = '0 4px 8px 0 rgb(220, 38, 38, 0.2), 0 6px 20px 0 rgb(220, 38, 38, 0.2)';
        })
        inCorrectQsId.map(id => {
            const elementGet = document.getElementById(id);
            elementGet.classList.remove('text-indigo-500');
            elementGet.classList.add('fa-beat');
            elementGet.style.color = 'rgb(220, 38, 38)';
        })
    }
    return (
        <div>
            <h1 className='text-center text-lg mt-5 font-bold text-indigo-400'>Quiz of {quizeData.name}</h1>
            <h1 className={`${isHidden ? ' hidden' : ' block'} text-center text-lg mt-5 font-bold text-indigo-400`}>
                Total Correct: {correctCount}
            </h1>
            <div className='flex justify-center'>
                <div className="quiz-section grid grid-cols-1 gap-5 text-center py-4 w-3/4">
                    {
                        questions.map(question => (<Quiz correctCounter={correctCounter} optionValue={optionValue} getOptionValue={getOptionValue} key={question.id} questionDetails={question}
                        ></Quiz>))
                    }
                    <a href="#headerTop" className=' py-2 rounded-sm text-white font-bold text-lg bg-purple-600'><button onClick={() => { setVisible(false); indicateWrongAns(); }} >Show Submission</button></a>
                </div>
            </div>
        </div>
    );
};

export default QuizeDetails;