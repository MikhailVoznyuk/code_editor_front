'use client'

import {useContext} from 'react';

import RunButton from "@/ui/RunButton/RunButton";
import executor from "@/lib/api/executor";
import {StateContext, DispatchContext} from "@/components/CodeEditor/contexts";


export default function CodeFieldHeader () {
    const state= useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const runCode = async () => {
        const output = await executor(state?.language ?? '', state?.codeContent ?? '')
        if (dispatch) {
            dispatch({
                type: 'setOutputContent',
                outputContent: output
            })
        }
    }

    return (
        <div className='flex items-center gap-2 w-fit h-14 px-2 bg-[#272C35] rounded-xl'>
            <select className={'bg-[#435C7B] h-9 text-white rounded-xl px-1'}>
                <option value='js'>JavaScript</option>
                <option disabled value='python'>Python</option>
                <option disabled value='cpp'>C++</option>
                <option disabled value='java'>Java</option>
            </select>
            <RunButton callback={runCode}/>
        </div>
    )
}