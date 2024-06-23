import React from 'react'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import { Card } from './Card'
import { TBoardColumn, TTodo, TTodoInputProps, TTodoState } from '@/models/Todo'
import { DialogHeader, DialogFooter } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/input'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@radix-ui/react-label'
import { Button } from '@/components/ui/button'
import { RefreshCcwIcon, PlusIcon, Trash2Icon, QrCodeIcon } from 'lucide-react'
import { CircleLoader } from '@/components/common/CircleLoader'
import { TUser } from '@/models/User'
import { useWinReady } from '@/hooks/useWinReady'
import Link from 'next/link'
import { TOrganization } from '@/models/Organization'

type DashboardProps = {
  orgId?: TOrganization["id"];
  mode?: "view" | "edit";
}

export const Dashboard: React.FC<DashboardProps> = ({ orgId, mode = "edit" }) => {
  return <div>HELLO</div>;
  // const viewMode = mode === "view";
  // const { winReady } = useWinReady();

  // const [dragging, setDragging] = React.useState(false);
  // const [selectedTodo, setSelectedTodo] = React.useState<TTodo>();
  // const [dialog, setDialog] = React.useState(false);
  // const [dialogMode, setDialogMode] = React.useState<"add" | "edit">();

  // const openDialog = (todo: TTodo, mode: "add" | "edit" = "edit") => {
  //   setDialogMode(mode);
  //   setDialog(true);
  //   setSelectedTodo(todo);
  // }

  // const dialogActionHandle = () => {
  //   const params: TTodoInputProps = {
  //     name: selectedTodo?.name!,
  //     description: selectedTodo?.description!,
  //     state: selectedTodo?.state!,
  //     organization_id: orgId!,
  //   };
  //   if(dialogMode === "add") dispatch(createTodo(params))
  //   else dispatch(editTodo({ id: selectedTodo?.ID!, params: params }));
  // }

  // const onThumbClick = (id: string) => {
  //   if(viewMode) {
  //     dispatch(vote({
  //       todo_id: id,
  //     }));
  //   }
  // }

  // const onDragEnd = (result: DropResult) => {
  //   setDragging(false);
  //   if (!result.destination) return
  //   const { source, destination } = result
  //   if (source.droppableId !== destination.droppableId) {
  //     let newData: TBoardColumn[] = JSON.parse(JSON.stringify(data));

  //     const sourceColIndex = newData.findIndex(e => e.id === source.droppableId)
  //     const sourceCol = newData[sourceColIndex]
  //     if (!sourceCol.tasks) newData[sourceColIndex].tasks = [];
  //     const sourceTask = [...sourceCol.tasks]
  //     const todo = sourceTask[source.index];
  //     const [removed] = sourceTask.splice(source.index, 1)
  //     newData[sourceColIndex].tasks = sourceTask

  //     if (destination.droppableId !== "delete") {
  //       const destinationColIndex = newData.findIndex(e => e.id === destination.droppableId)
  //       const destinationCol = newData[destinationColIndex]
  //       if (!destinationCol.tasks) newData[destinationColIndex].tasks = [];
  //       const destinationTask = [...destinationCol.tasks]
  //       destinationTask.splice(destination.index, 0, removed)
  //       newData[destinationColIndex].tasks = destinationTask

  //       if (todo) {
  //         dispatch(editTodo({
  //           id: todo.todo.ID,
  //           params: {
  //             name: todo.todo.name,
  //             description: todo.todo.description,
  //             state: destination.droppableId as TTodoState,
  //           },
  //         }));
  //       }
  //     } else {
  //       if(todo) {
  //         dispatch(deleteTodo({id: todo.todo.ID}));
  //       }
  //     }

  //     setData(newData)
  //   }
  // }

  // const onSectionClick = (id: TTodoState) => {
  //   openDialog({
  //     name: '',
  //     description: '',
  //     state: id,
  //     ID: '',
  //     sender: {} as TUser,
  //     CreatedAt: '',
  //     sender_id: '',
  //     organization_id: 0,
  //   }, "add");
  // }

  // const query = new URLSearchParams({ data: "dashboard", "title": "Книга жалоб" })

  // return (
  //   <section className={`${editResponse.status === StatusEnum.PENDING ? "cursor-wait" : ""} w-full overflow-clip min-h-screen`}>
  //     <div className="w-full h-1 fixed top-0 left-0 bg-background"></div>
  //     <div className={`${editResponse.status === StatusEnum.PENDING ? "opacity-40 pointer-events-none" : ""}`}>
  //       <div className="w-full bg-background sticky top-1 left-0 z-[1] flex items-center">
  //         <div className={`px-2 pt-2 pb-3 flex items-center gap-3 flex-wrap ${!viewMode ? "bg-accent text-xl" : "text-2xl" } rounded-t-md max-w-fit`}>
  //           <span>
  //             Доска отзывов
  //           </span>
  //           <Button size="xsm" variant="outline" onClick={() => {dispatch(getTodos({ orgId: orgId! }))}}>
  //             {
  //               todosResponse.status === StatusEnum.PENDING || editResponse.status === StatusEnum.PENDING 
  //               ? <CircleLoader size='1rem' variant="outline" /> 
  //               : <RefreshCcwIcon size={16} />
  //             }
  //           </Button>
  //           {viewMode && (
  //             <Button onClick={() => onSectionClick("todo")} size="xsm" variant="default">
  //               Оставить отзыв
  //               <PlusIcon size={16} />
  //             </Button>
  //           )}
  //         </div>
  //         {!viewMode && (
  //           <Button className="ml-auto p-2" variant="ghost" asChild>
  //             <Link href={`/manager/qr?${query}`}>
  //               <QrCodeIcon />
  //             </Link>
  //           </Button>
  //         )}
  //       </div>
  //       <DragDropContext onDragEnd={onDragEnd} onBeforeDragStart={() => setDragging(true)}>
  //         <div className="flex w-full gap-1 pb-3 md:pb-0 max-w-[100vw] overflow-x-scroll md:overflow-x-visible">
  //           {winReady && data && data.map((section, sectionIndex) => (
  //             <Droppable
  //               key={section.id}
  //               droppableId={section.id}
  //             >
  //               {(provided, snapshot) => (
  //                 <div
  //                   {...provided.droppableProps}
  //                   className={`w-full pb-0 transition flex flex-col min-w-[15.625rem] md:min-w-0`}
  //                   ref={provided.innerRef}
  //                 >
  //                   <div className={`md:sticky top-[3.3rem] left-0 z-[1] p-1 bg-accent rounded-t-md flex items-center justify-between ${sectionIndex === 0 && !viewMode ? "rounded-tl-none" : ""}`}>
  //                     <div className="text-md text-bold pt-2 pb-2 px-2">
  //                       {section.name}
  //                     </div>
  //                     {!viewMode &&
  //                       <Button size="xsm" variant="outline" onClick={() => onSectionClick(section.id)}>
  //                         <PlusIcon size={16} />
  //                       </Button>
  //                     }
  //                   </div>
  //                   <div className={`flex flex-col gap-1 bg-accent rounded-b-md p-1 h-full ${snapshot.draggingFromThisWith ? "bg-destructive/10" : ""} ${snapshot.draggingOverWith ? "bg-primary/10" : ""} `}>
  //                     {section.tasks && section.tasks.map((task, index) => (
  //                       <Draggable
  //                         isDragDisabled={viewMode}
  //                         key={task.todo.ID}
  //                         draggableId={task.todo.ID}
  //                         index={index}
  //                       >
  //                         {(provided, snapshot) => (
  //                           <div
  //                             ref={provided.innerRef}
  //                             {...provided.draggableProps}
  //                             {...provided.dragHandleProps}
  //                             className={`${snapshot.isDragging ? "opacity-50 scale-90" : "opacity-100"} ${!viewMode ? "active:scale-90" : ""} transition`}
  //                             style={{
  //                               ...provided.draggableProps.style,
  //                             }}
  //                             onClick={() => !viewMode && openDialog(task.todo)}
  //                           >
  //                             <Card mode={mode} onClick={() => onThumbClick(task.todo.ID)} card={task} />
  //                           </div>
  //                         )}
  //                       </Draggable>
  //                     ))}
  //                     {!viewMode || sectionIndex === 0 &&
  //                     <div
  //                         className={`${section.tasks && section.tasks.length > 0 ? "h-10" : "h-full"} flex items-center justify-center bg-background/70 rounded-md ${!dragging ? "hover:opacity-100" : ""} ${!viewMode ? "opacity-0" : ""} text-primary cursor-pointer`}
  //                         onClick={() => onSectionClick(section.id)}
  //                       >
  //                         {viewMode ? "Оставить отзыв" : "Добавить задачу"}
  //                       </div>
  //                     }
  //                     {provided.placeholder}
  //                   </div>
  //                 </div>
  //               )}
  //             </Droppable>
  //           ))}
  //           {winReady && data && !viewMode && <Droppable droppableId='delete'>
  //             {(provided, snapshot) => (
  //               <div
  //                 {...provided.droppableProps}
  //                 className={`w-10 sticky top-[3.3rem] left-0 z-[1]`}
  //                 style={{ height: "calc(100vh - 3.55rem)" }}
  //                 ref={provided.innerRef}
  //                 >
  //                 <div className={`h-full px-2 transition rounded-md flex items-center justify-center ${snapshot.isDraggingOver ? "bg-destructive/80" : "bg-destructive/40"}`}>
  //                   <Trash2Icon />
  //                 </div>
  //                 {provided.placeholder}
  //               </div>
  //             )}
  //           </Droppable>}
  //         </div>
  //       </DragDropContext>
  //       <Dialog open={dialog} onOpenChange={setDialog}>
  //         <DialogContent className="sm:max-w-[525px]">
  //           <DialogHeader>
  //             <DialogTitle>
  //               {viewMode ? (
  //                 <>
  //                   {dialogMode === "add" ? "Добавить" : "Посмотреть"}
  //                 </>
  //               ) : (
  //                 <>
  //                   {dialogMode === "add" ? "Добавить" : "Редактировать"}
  //                 </>
  //               )} задачу
  //             </DialogTitle>
  //           </DialogHeader>
  //           <div className="grid gap-4 py-4">
  //             {viewMode && (
  //               <div>
  //                 Оставив отзыв, вы добавите его в список задач, за которым можно следить на этой странице. Задачи видны всем пользователям
  //               </div>
  //             )}
  //             <div className="grid items-center gap-4">
  //               <Label htmlFor="name" className="text-left">
  //                 Задача
  //               </Label>
  //               <Textarea id="name" readOnly={viewMode && dialogMode !== "add"} value={selectedTodo?.name} onChange={(e) => {
  //                 const updatedTodo = { ...selectedTodo, name: e.target.value } as TTodo
  //                 setSelectedTodo(updatedTodo)
  //               }} className="col-span-3 max-h-40" />
  //             </div>
  //             <div className="grid items-center gap-4">
  //               <Label htmlFor="description" className="text-left">
  //                 Описание
  //               </Label>
  //               <Textarea id="description" readOnly={viewMode && dialogMode !== "add"} value={selectedTodo?.description} onChange={(e) => {
  //                 const updatedTodo = { ...selectedTodo, description: e.target.value } as TTodo
  //                 setSelectedTodo(updatedTodo)
  //               }} className="col-span-3 max-h-56" />
  //             </div>
  //           </div>
  //           <DialogFooter>
  //             <Button
  //               onClick={() => dialogActionHandle()}
  //               state={editResponse.status}
  //               disabled={!selectedTodo?.name || !selectedTodo?.description}
  //               type="submit"
  //             >
  //               Сохранить
  //             </Button>
  //           </DialogFooter>
  //         </DialogContent>
  //       </Dialog>
  //     </div>
  //   </section>
  // )
}