import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { CloseButton } from "../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"
import { FeedBackType, feedbackTypes } from "../WidgetForm"

interface FeedbackContenteProps {
    onTypeChange: FeedBackType,
    onTypeRestart:() =>void,
    onFeedbackSent:()=>void
}

export function FeedbackContentStep({
     onTypeChange,
     onTypeRestart,
    onFeedbackSent }: FeedbackContenteProps) {

  const feedbackTypeInfo = feedbackTypes[onTypeChange]
  const [screenshot,setScreenshot] = useState<string | null>(null)
  const [comment,setComment] = useState('')

  function handleFormSubmit(event:FormEvent){
     event.preventDefault()
     console.log(screenshot,comment)
     setComment('')

     onFeedbackSent()
  }

  console.log(comment)
    return (
        <div>
            <header >
              <button 
              type="button"
               onClick={onTypeRestart}
               className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
                  <ArrowLeft className="w-4 h-4" />
              </button>
                <span className="text-xl leading-6 text-white flex  gap-2 content-center">
                <img src={feedbackTypeInfo.image.source} alt=""  className="h-6 w-6 " />
                    {feedbackTypeInfo.title}
                    
                </span>
                <CloseButton />

            </header>
           <form action="" className="my-4 w-full"  onSubmit={handleFormSubmit}>
                      <textarea 
                      value={comment}
                      onChange={event=>setComment(event.target.value)}
                      className=" resize-none min-w-[304px] min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-violet-500 focus:ring-violet-500 focus:ring-1 focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                      placeholder="Conte com detalhes o que está acontecendo..."
                      ></textarea>
                      <footer className="flex gap-2 mt-2">
                        
                            <ScreenshotButton  screenshot={screenshot}  onScreenShotTook={setScreenshot}/>
                          <button
                          disabled={comment.length==0}
                          type="submit"
                          className="p-2 bg-violet-500 text-white rounded-md flex-1 flex justify-center items-center text-sm hover:bg-violet-400 focus:outline-none transition-colors disabled:opacity-50  disabled:hover:bg-violet-500"
                          >
                            Enviar feedback
                          </button>
                          
                      </footer>
           </form>
        </div>
    )
}