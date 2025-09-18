'use server'

import {WebSocket} from 'ws'

const url = process.env.NEXT_PUBLIC_WS_URL ?? "ws://localhost:8080";

export default async function executor(language: string, codeContent: string) {
    const socket = new WebSocket(url);
    let output: string = '';
    await new Promise((resolve) => {
        socket.addEventListener('open', () => {
            console.log('connection open');
            socket.send(codeContent);
        })
        socket.addEventListener('message', (e) => {
            output = e.data.toString();
            socket.close();
            resolve(true);
        })
    })

    return output;
}