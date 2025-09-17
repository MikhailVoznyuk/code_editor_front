export default async function executor(language: string, codeContent:string) {
    await new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000)
    })
    console.log(`${language}: ${codeContent}`);
    return codeContent;
}