export type State = {
    language: string,
    codeContent: string,
    outputContent: string
}

export type Action = {
    type: 'setLanguage',
    language: string
} | {
    type: 'setCodeContent',
    codeContent: string
} | {
    type: 'setOutputContent',
    outputContent: string
}
