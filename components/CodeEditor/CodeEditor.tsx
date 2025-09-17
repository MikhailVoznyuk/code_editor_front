'use client'

import {useReducer} from 'react';

import CodeField from "@/components/CodeEditor/CodeField/CodeField";
import ContentField from "@/ui/ContentField/ContentField";
import CodeFieldHeader from "@/components/CodeEditor/CodeFieldHeader/CodeFieldHeader";
import {StateContext, DispatchContext} from "@/components/CodeEditor/contexts";
import codeEditorReducer from "@/components/CodeEditor/reducer";


export default function CodeEditor() {
    const [state, dispatch] = useReducer(codeEditorReducer, {
        language: 'js',
        codeContent: 'console.log("Hello world")',
        outputContent: ''
    })

    return (
        <div className='flex flex-col content-start  h-[640px] gap-4'>
            <StateContext value={state}>
                <DispatchContext value={dispatch}>
                    <CodeFieldHeader></CodeFieldHeader>
                </DispatchContext>

                <div className='flex gap-4'>
                    <DispatchContext value={dispatch}>
                        <CodeField/>
                    </DispatchContext>

                    <ContentField fieldLabel={'Output'} width={'300px'} height={'100px'}>
                        <div className='px-2'>
                            <h5>{state.outputContent}</h5>
                        </div>
                    </ContentField>
                </div>
            </StateContext>
        </div>
    )

}