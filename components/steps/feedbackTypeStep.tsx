import { CloseButton } from "../CloseButton"
import { FeedBackType, feedbackTypes } from "../WidgetForm"

interface FeedbackTypeStepProps{
    onFeedbackTypeChanged:(type:FeedBackType)=>void
}

export function FeedbackTypeStep({onFeedbackTypeChanged}:FeedbackTypeStepProps){
    return(
  <>
        <header>
        <span className="text-xl leading-6 text-white">Deixe seu feedback</span>
        <CloseButton/>
    
        </header>
        <div className="flex py-8 gap-2 w-full">
               {Object.entries(feedbackTypes).map(([key,value])=>{
                    return(
                        <button
                         className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col text-white items-center gap-2 border-2 border-transparent hover:border-violet-700  transition-colors duration-5000 focus:border-violet-700 focus:outline-none"
                         key={key}
                        onClick={()=>onFeedbackTypeChanged(key as FeedBackType)}
                        >
                             <img src={value.image.source} alt="" />
                              <span>{value.title}</span>
                             
                        </button>
                      
                    )
               })}
            </div>
            </> 
            )

}