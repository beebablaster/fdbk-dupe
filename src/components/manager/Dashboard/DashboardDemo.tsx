import React from 'react'
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd'
import {Card} from './Card'
import {TBoardColumn, TTodo, TTodoState} from '@/models/Todo'
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import {Textarea} from '@/components/ui/input'
import {Label} from '@radix-ui/react-label'
import {Button} from '@/components/ui/button'
import {PlusIcon, PlusSquareIcon, ThumbsUpIcon, Trash2Icon} from 'lucide-react'
import {TUser} from '@/models/User'
import {useWinReady} from '@/hooks/useWinReady'
import {TOrganization} from '@/models/Organization'
import useUserStore from "@/store/useUserStore";
import {ShellLayout} from "@/components/Layout/ShellLayout";
import useTodosStore from "@/store/useTodosStore";
import {todoAPI} from "@/services/todo";
import {CircleAvatar} from "@/components/ui/avatar";
import {limitName} from "@/utils/limitName";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import {Separator} from "@/components/ui/separator";
import { searchGuides } from '@/utils/searchGuides'
import Link from 'next/link'

type DashboardProps = {
    orgId?: TOrganization["id"];
    mode?: "view" | "edit";
}

export const mockTodoHistory = [
    {},
    {},
    {},
    {},
    {}
]

export const DashboardDemo: React.FC<DashboardProps> = ({orgId, mode = "edit"}) => {
    const {user} = useUserStore();
    const {todos, createTodo, editTodo, deleteTodo, vote} = useTodosStore();

    const mockData = [
        {
            id: 'todo',
            name: 'Задача',
            tasks: [
                {
                    todo: {
                        id: '102',
                        name: 'Нужны пуфики',
                        description: 'Иногда не хочется просто посидеть и поделать урок, но для этого нужно, чтобы хорошо работал Wi-FI. Иногда он прямо во время квиза или мидки выключиться, а мы сдаем через гугл формы. Таких моментов очень много. Хотелось ба, чтобы ситуация исправилась',
                        state: 'todo',
                        sender: user,
                        sender_id: '88005553535',
                        CreatedAt: '04.19.2024',
                        organization_id: 1738
                    },
                    user_voted: true,
                    vote_count: 420,
                },
                {
                    todo: {
                        ID: '120',
                        name: 'Нужны пуфики',
                        description: 'Иногда хочется просто посидеть и поделать урок, но для этого нужно, чтобы хорошо работал Wi-FI. Иногда он прямо во время квиза или мидки выключиться, а мы сдаем через гугл формы. Таких моментов очень много. Хотелось ба, чтобы ситуация исправилась',
                        state: 'todo',
                        sender: user,
                        sender_id: '2121312',
                        CreatedAt: '04.24.2024',
                        organization_id: 1738
                    },
                    user_voted: true,
                    vote_count: 420,
                }
            ]
        },
        {
            id: 'planning',
            name: 'На рассмотрении',
            tasks: [
                {
                    todo: {
                        ID: '103',
                        name: 'Застреваем при входе из-за Face-id',
                        description: 'Иногда хочется просто посидеть и поделать урок, нононононононононононононононононо для этого нужно...',
                        state: 'planning',
                        sender: user,
                        sender_id: '2121312',
                        CreatedAt: '01.24.2024',
                        organization_id: 1738
                    },
                    user_voted: true,
                    vote_count: 420,
                }
            ]
        },
        {
            id: 'doing',
            name: 'В процессе',
            tasks: [
                {
                    todo: {
                        ID: '104',
                        name: 'Очень часто не работает Wi-Fi когда много людей',
                        description: 'Иногда ИногдаИногдаИногдаИногдаИногдаИногдахочется просто посидеть и поделать урок, но для этого нужно...',
                        state: 'doing',
                        sender: user,
                        sender_id: '2121312',
                        CreatedAt: '11.30.2023',
                        organization_id: 1738
                    },
                    user_voted: true,
                    vote_count: 420,
                }
            ]
        },
        {
            id: 'done',
            name: 'Сделано',
            tasks: [
                {
                    todo: {
                        ID: '105',
                        name: 'Застреваем при входе из-за Face-id',
                        description: 'Иногда хочется просто посидеть и поделать урок, но для этого нужно...',
                        state: 'done',
                        sender: user,
                        sender_id: '2121312',
                        CreatedAt: '05.10.2020',
                        organization_id: 1738
                    },
                    user_voted: true,
                    vote_count: 420,
                }
            ]
        },]

    const viewMode = mode === "view";
    const {winReady} = useWinReady();

    const [dragging, setDragging] = React.useState(false);
    const [selectedTodo, setSelectedTodo] = React.useState<TTodo>();
    const guides = searchGuides(selectedTodo?.name || "");
    const popoverOpen = selectedTodo?.name && searchGuides(selectedTodo?.name).length > 0 ? true : false;
    const ref = React.useRef<HTMLTextAreaElement>(null);
    React.useEffect(() => {
        if(popoverOpen) ref.current?.focus();
    }, [popoverOpen])
    const [dialog, setDialog] = React.useState(false);
    const [dialogMode, setDialogMode] = React.useState<"add" | "edit" | "view">();
    const [data, setData] = React.useState<any>(mockData);

    const openDialog = (todo: TTodo, mode: "add" | "edit" | "view" = "edit") => {
        setDialogMode(mode);
        setDialog(true);
        setSelectedTodo(todo);
    }



    const dialogActionHandle = () => {
        const params: any = {
            name: selectedTodo?.name!,
            description: selectedTodo?.description!,
            state: selectedTodo?.state!,
            organization_id: orgId!,
        };
        if (dialogMode === "add") createTodo(params)
        else editTodo({id: selectedTodo?.ID!, params: params});
    }

    // const onThumbClick = (id: string) => {
    //     if (viewMode) {
    //         vote({
    //             todo_id: id,
    //         })
    //     }
    // }

    const onDragEnd = (result: DropResult) => {
        setDragging(false);
        if (!result.destination) return;
        const {source, destination} = result
        if (source.droppableId !== destination?.droppableId) {
            let newData: TBoardColumn[] = JSON.parse(JSON.stringify(data));

            const sourceColIndex = newData.findIndex(e => e.id === source.droppableId);
            const sourceCol = newData[sourceColIndex]

            if (!sourceCol.tasks) newData[sourceColIndex].tasks = [];
            const sourceTask = [...sourceCol.tasks];
            const todo = sourceTask[source.index];
            const [removed] = sourceTask.splice(source.index, 1)
            newData[sourceColIndex].tasks = sourceTask

            if (destination?.droppableId !== "delete") {
                const destinationColIndex = newData.findIndex(e => e.id === destination?.droppableId)
                const destinationCol = newData[destinationColIndex]
                if (!destinationCol.tasks) newData[destinationColIndex].tasks = [];
                const destinationTask = [...destinationCol.tasks]
                destinationTask.splice(destination.index, 1, removed)
                newData[destinationColIndex].tasks = destinationTask

                if (todo) {
                    editTodo({
                        id: todo.todo.ID,
                        params: {
                            name: todo.todo.name,
                            description: todo.todo.description,
                            state: destination?.droppableId as TTodoState,
                        },
                    });
                }
            } else {
                if (todo) {
                    // deleteTodo({id: todo.todo.ID});
                }
            }
            setData(newData)
        }
    }

    const onSectionClick = (id: TTodoState) => {
        openDialog({
            name: '',
            description: '',
            state: id,
            ID: '',
            sender: {} as TUser,
            CreatedAt: '',
            sender_id: '',
            organization_id: 0,
        }, "add");
    }

    const query = new URLSearchParams({data: "dashboard", "title": "Книга жалоб"})

    const getStatus = (todo: any) => {
        switch (todo?.state) {
            case "todo":
                return 'Задача'
            case "planning":
                return 'На рассмотрении'
            case "doing":
                return 'В процессе'
            case "done":
                return 'Сделано'
        }
    }

    return (
        <ShellLayout>
            <section className={`flex flex-col w-full overflow-y-scroll min-h-screen`}>
                <div
                    className="flex gap-4 items-center w-full bg-background sticky top-1 left-0 z-[1] flex items-center">
                <span className="text-4xl font-bold text-center ml-4 mt-4">
                    Доска отзывов
                </span>
                    <div className={`px-2 pt-2 flex items-center`}>
                        <Button variant="secondary">
                            <div className="flex items-center gap-2">
                                <PlusSquareIcon/>
                                Добавить задачу
                            </div>
                        </Button>
                    </div>
                </div>
                <div>

                    <DragDropContext onDragEnd={onDragEnd} onBeforeDragStart={() => setDragging(true)}>
                        <div className="flex flex-col gap-2">
                            <div
                                className="flex mt-4 gap-4 w-full h-full pb-3 md:pb-0 max-w-[100vw] overflow-x-scroll md:overflow-x-visible"
                                style={{height: "calc(100vh - 10rem)"}}
                            >
                                {winReady && data.map((section: any, sectionIndex: any) => (
                                    <Droppable
                                        key={section.id}
                                        droppableId={section.id}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                {...provided.droppableProps}
                                                className={`w-full pb-0 transition flex flex-col min-w-[15.625rem] md:min-w-0`}
                                                ref={provided.innerRef}
                                            >
                                                <div
                                                    className={`md:sticky top-[3.3rem] left-0 z-[1] p-1 bg-accent rounded-t-md flex items-center justify-between`}>
                                                    <div className="text-2xl font-bold pt-2 pb-2 px-2">
                                                        {section.name}
                                                    </div>
                                                    {!viewMode &&
                                                    <div className="mr-4">
                                                        <Button size="xsm" variant="outline"
                                                                onClick={() => onSectionClick(section.id)}>
                                                            <PlusIcon size={16}/>
                                                        </Button>
                                                    </div>
                                                    }
                                                </div>
                                                <div
                                                    key={section.id}
                                                    className={`flex flex-col gap-1 bg-accent rounded-b-md p-4 h-full ${snapshot.draggingFromThisWith ? "bg-destructive/10" : ""} ${snapshot.draggingOverWith ? "bg-primary/10" : ""} `}>
                                                    {section.tasks && section.tasks.map((task: any, index: any) => (
                                                        <Draggable
                                                            isDragDisabled={viewMode}
                                                            key={task.todo.ID}
                                                            draggableId={task.todo.ID}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className={`${snapshot.isDragging ? "opacity-50 scale-90" : "opacity-100"} ${!viewMode ? "active:scale-90" : ""} transition`}
                                                                    style={{
                                                                        ...provided.draggableProps.style,
                                                                    }}
                                                                    onClick={() => openDialog(task.todo)}
                                                                >
                                                                    <Card mode={mode} card={task}/>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {/*{!viewMode || sectionIndex === 0 &&*/}
                                                    {/*<div*/}
                                                    {/*    className={`${section.tasks && section.tasks.length > 0 ? "h-10" : "h-full"} flex items-center justify-center bg-background/70 rounded-md ${!dragging ? "hover:opacity-100" : ""} ${!viewMode ? "opacity-0" : ""} text-primary cursor-pointer`}*/}
                                                    {/*    onClick={() => onSectionClick(section.id)}*/}
                                                    {/*>*/}
                                                    {/*    {viewMode ? "Оставить отзыв" : "Добавить задачу"}*/}
                                                    {/*</div>*/}
                                                    {/*}*/}
                                                    {provided.placeholder}
                                                </div>
                                            </div>
                                        )}
                                    </Droppable>
                                ))}
                            </div>
                            <div>
                                {winReady && !viewMode && <Droppable droppableId='delete'>
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            className={`w-full sticky top-[3.3rem] left-0 z-[1]`}
                                            ref={provided.innerRef}
                                        >
                                            <div
                                                className={`w-full h-16 px-2 transition rounded-md flex items-center justify-center ${snapshot.isDraggingOver ? "bg-destructive/80" : "bg-destructive/40"}`}>
                                                <Trash2Icon/>
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>}
                            </div>
                        </div>

                    </DragDropContext>
                    <Dialog open={dialog} onOpenChange={setDialog}>
                        <DialogContent className="sm:max-w-[525px]">
                            <DialogHeader>
                                <DialogTitle>
                                    {viewMode ? (
                                        <>
                                            <div className="text-2xl">
                                                {selectedTodo?.name}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {dialogMode === "add" ? "Добавить" : "Редактировать"} задачу
                                        </>
                                    )}
                                </DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4">
                                {/*{viewMode && (*/}
                                {/*    <div>*/}
                                {/*        Оставив отзыв, вы добавите его в список задач, за которым можно следить на этой*/}
                                {/*        странице. Задачи видны всем пользователям*/}
                                {/*    </div>*/}
                                {/*)}*/}
                                {
                                    viewMode ? (
                                        <>
                                            <div className="grid items-center gap-4">
                                                <Label htmlFor="description" className="text-left">
                                                    {selectedTodo?.description}
                                                </Label>
                                                <div className="flex flex-col gap-7">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Статус
                                                        </div>

                                                        <div>
                                                            {getStatus(selectedTodo)}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            Выполняющий
                                                        </div>

                                                        <div>
                                                            <div className="flex gap-2 mt-4 text-m">
                                                                <CircleAvatar className='w-8 h-8 border-0 mb-0'
                                                                              firstName={selectedTodo?.sender?.name!}
                                                                              lastName={selectedTodo?.sender?.surname!}/>
                                                                <div>
                                                  <span>
                                                    {selectedTodo?.sender?.name[0].toUpperCase()}. {limitName(selectedTodo?.sender?.surname, 11, true)}
                                                  </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Организация
                                                        </div>

                                                        <div>
                                                            ДИТ
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        {/*{mockTodoHistory.map((history, index) => (*/}
                                                        {/*    <div key={index}>*/}
                                                        {/*        <div className="flex gap-2 mt-4 text-m">*/}
                                                        {/*            <CircleAvatar className='w-8 h-8 border-0 mb-0'*/}
                                                        {/*                          firstName={selectedTodo?.sender?.name!}*/}
                                                        {/*                          lastName={selectedTodo?.sender?.surname!}/>*/}
                                                        {/*            {index < (mockTodoHistory.length - 1) &&*/}
                                                        {/*            <Separator orientation={'vertical'}></Separator>}*/}
                                                        {/*            <div>*/}
                                                        {/*                <div className="flex flex-col">*/}
                                                        {/*                <span>*/}
                                                        {/*                    {selectedTodo?.sender?.name[0].toUpperCase()}.*/}
                                                        {/*                    {limitName(selectedTodo?.sender?.surname, 11, true)}*/}
                                                        {/*                </span>*/}
                                                        {/*                    <span className="text-xs text-[#A6A6A6]">*/}
                                                        {/*                    Студент*/}
                                                        {/*                </span>*/}
                                                        {/*                </div>*/}

                                                        {/*            </div>*/}
                                                        {/*        </div>*/}

                                                        {/*    </div>*/}
                                                        {/*))}*/}


                                                    </div>
                                                </div>

                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="grid items-center gap-4">
                                                <Label htmlFor="name" className="text-left">
                                                    Задача
                                                </Label>
                                                <Popover open={popoverOpen}>
                                                    <PopoverTrigger>
                                                        <Textarea id="name" readOnly={viewMode && dialogMode !== "add"}
                                                                value={selectedTodo?.name} onChange={(e) => {
                                                            const updatedTodo = {...selectedTodo, name: e.target.value} as TTodo
                                                            setSelectedTodo(updatedTodo)
                                                        }} className="col-span-3 max-h-40" ref={ref} />
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        Возможно, вы имели в виду:
                                                        <Separator orientation="horizontal" className='mt-2'/>
                                                        <div className='mt-4'>
                                                            {guides.map((guide, index) => (
                                                                <div key={index}>
                                                                    <Link key={index} href={`/guide/${guide.id}`}>
                                                                        {guide.title}
                                                                    </Link>
                                                                    <Separator orientation="horizontal" className='my-2'/>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className="grid items-center gap-4">
                                                <Label htmlFor="description" className="text-left">
                                                    Описание
                                                </Label>
                                                <Textarea id="description" readOnly={viewMode && dialogMode !== "add"}
                                                          value={selectedTodo?.description} onChange={(e) => {
                                                    const updatedTodo = {
                                                        ...selectedTodo,
                                                        description: e.target.value
                                                    } as TTodo
                                                    setSelectedTodo(updatedTodo)
                                                }} className="col-span-3 max-h-56"/>
                                            </div>

                                            <DialogFooter>
                                                <Button
                                                    onClick={() => dialogActionHandle()}
                                                    // state={selectedTodo.status}
                                                    disabled={!selectedTodo?.name || !selectedTodo?.description}
                                                    type="submit"
                                                >
                                                    Сохранить
                                                </Button>
                                            </DialogFooter>
                                        </>
                                    )
                                }

                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>
        </ShellLayout>
    )
}