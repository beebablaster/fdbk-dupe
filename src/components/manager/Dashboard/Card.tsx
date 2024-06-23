import {CircleAvatar} from '@/components/ui/avatar';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {TTodoResult} from '@/models/Todo';
import {Button} from '@/components/ui/button';
import {ThumbsUpIcon} from 'lucide-react';
import {limitName} from '@/utils/limitName';
import React from 'react';

interface IProps {
    card: TTodoResult;
    mode: "view" | "edit";
}

export const Card: React.FC<IProps> = ({card, mode}) => {
    const viewMode = mode === "view";
    const date = new Date(card.todo.CreatedAt).toLocaleDateString("ru-RU");
    return (
        <div className='p-2 rounded-md bg-secondary'>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div>
                            <div className='text-xl mb-2 line-clamp-2 overflow-ellipsis'>
                                {card.todo.name}
                            </div>
                            <div className="text-md mb-2 line-clamp-6 overflow-ellipsis">
                                {card.todo.description}
                            </div>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent className='max-w-sm'>
                        <p className='text-sm mb-1'>
                            {card.todo.name}
                        </p>
                        <p className='text-xs'>
                            {card.todo.description}
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div className="flex gap-2 mt-4 text-m">
                <CircleAvatar className='w-8 h-8 border-0 mb-0' firstName={card.todo.sender.name!}
                              lastName={card.todo.sender.surname!}/>
                <div>
          <span>
            {card.todo.sender.name[0].toUpperCase()}. {limitName(card.todo.sender.surname, 11, true)}
          </span>
                    <p className='text-xs text-muted'>
                        {date}
                    </p>
                </div>
                <Button onClick={(event) => {
                    event.stopPropagation();
                }} variant="default" className={`flex items-center gap-1 ms-auto`}>
                    <div className='mt-[2px]'>
                        {card.vote_count}
                    </div>
                    <ThumbsUpIcon size={16}/>
                </Button>
            </div>
        </div>
    )
}