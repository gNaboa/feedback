import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "../Loading";

type ScreenshotButtonProps={
    onScreenShotTook:(screenshot:string)=>void,
    screenshot:string | null
    
}


export function ScreenshotButton({onScreenShotTook,screenshot}:ScreenshotButtonProps){

    const [isTakingScreenshot,setTakingScreenshot] = useState(false)

    async function handleScreenshot(){

    
        setTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image =  canvas.toDataURL('image/png')

        console.log(base64image)
        onScreenShotTook(base64image)
        setTakingScreenshot(false)
    }

    if(screenshot){
        return(
            <button 
            onClick={()=>onScreenShotTook(null)}
            type="button"
            className="p-1 w-10 h-10 rounded-md  border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            style={{
                backgroundImage:`url(${screenshot})`
            }}
            >
                 <Trash weight="fill"/>
            </button>
        )
    }
    
    return(
        <button 
        onClick={handleScreenshot}
        type="button"
        className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-500 transition-colors "
        >
         {isTakingScreenshot? <Loading/> : <Camera className="w-6 h-6 text-zinc-100"/>}
        </button>

    )
}
