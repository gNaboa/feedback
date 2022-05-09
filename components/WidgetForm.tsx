import { useState } from "react";
import { CloseButton } from "./CloseButton";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./steps/feedbackTypeStep";


export const feedbackTypes = {

    BUG: {
        title: 'Problema',
        image: {
            source: '/emoji.svg'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: '/ideia.svg'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: '/Thought.svg'
        }
    }
}
export type FeedBackType = keyof typeof feedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)
    function handleRestartFeeback() {
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col shadow-lg">
            {
                feedbackSent ?
                    <FeedbackSuccessStep /> :
                    <>
                        {!feedbackType ?
                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} /> :
                            <FeedbackContentStep
                                onTypeRestart={handleRestartFeeback}
                                onTypeChange={feedbackType}
                                onFeedbackSent={() => setFeedbackSent(true)} 
                            />
                        }
                    </>
            }

            <footer className="text-xs text-neutral-500">
                Feito com s2 pela <a className="underline underline-offset-2" target="_blank" href="https://www.rocketseat.com.br/">gNaboa</a>
            </footer>
        </div>
    )
}