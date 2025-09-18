'use client'

import {useContext, useCallback} from "react";
import ReactCodeMirror from "@uiw/react-codemirror";

import {javascript} from "@codemirror/lang-javascript";
import {atomone} from "@uiw/codemirror-theme-atomone";

import ContentField from "@/ui/ContentField/ContentField";
import {StateContext, DispatchContext} from "@/components/CodeEditor/contexts";

export default function CodeField() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const onChange = useCallback((value: string) => dispatch && dispatch({
        type: 'setCodeContent',
        codeContent: value
    }), [dispatch]);

    return (
        <ContentField fieldLabel={'Code'} width={'400px'} height={'500px'}>
            <ReactCodeMirror
                value={state?.codeContent ?? ''}
                width={'100%'}

                onChange={onChange}
                extensions={
                    [javascript({jsx: false})]
                }
                theme={atomone}
            >

            </ReactCodeMirror>
        </ContentField>
    )
}