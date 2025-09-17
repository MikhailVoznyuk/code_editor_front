import type {Action, State} from "@/components/CodeEditor/CodeEditor.types";

export default function codeEditorReducer(state: State, action: Action) {
    switch (action.type) {
        case 'setLanguage':
            return {
                ...state,
                language: action.language
            }
        case 'setCodeContent':
            return {
                ...state,
                codeContent: action.codeContent
            }
        case 'setOutputContent':
            return {
                ...state,
                outputContent: action.outputContent
            }
        default:
            throw new Error('Unknown action type');
    }
}