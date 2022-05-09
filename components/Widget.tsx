import { ChatCenteredDots } from 'phosphor-react'
import { useState } from 'react'
import { WidgetForm } from './WidgetForm'
export function Widget() {
      const [isOpen, setIsOpen] = useState(false)

      function widgetVisibility() {
            setIsOpen(!isOpen)
      }

      return (
            <div className='absolute bottom-5 right-5 flex flex-col items-end text-center'>
                  {isOpen && <WidgetForm />}
                  <button onClick={widgetVisibility} className='bg-violet-500 rounded-full px-3 h-12 text-white hover:bg-violet-800 transition-colors duration-5000 flex items-center group'>
                        <ChatCenteredDots className='w-7 h-7' weight='duotone' />
                        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500'>
                              <span className='pl-2'>
                                    feedback
                              </span>
                        </span>
                  </button>
            </div>
      )
}