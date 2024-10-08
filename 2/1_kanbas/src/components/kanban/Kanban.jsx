import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { Card } from "../card/Card";
import { useState } from "react";
import "./kanban.scss";

export  function Kanban () {
    const[data,setData]=useState(mockData);
    
    const onDragEnd=(result)=>{
        if (!result.destination) return;
        const {source,destination}=result;
        if(source.droppableid !==destination.droppableid)
            {
                const sourceColIndex=data.findIndex(e=>e.id===source.droppableid)
                const destinationColIndex=data.findIndex(e=>e.id===destination.droppableid)
                
                const sourceCol = data[sourceColIndex];
                const destinationCol = data[destinationColIndex];
            
                const sourceTask = [...sourceCol.tasks];
                const destinationTask = [...destinationCol.tasks];
            
                const [removed] = sourceTask.splice(source.index, 1);
                destinationTask.splice(destination.index, 0, removed);
            
                data[sourceColIndex].tasks = sourceTask;
                data[destinationColIndex].tasks = destinationTask;
                
                setData(data);
            }
    }   
    return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban">
            {data.map((section)=>(
                <Droppable key={section.id} droppableId={section.id}>
                    {(provided)=>(
                        <div {...provided.droppableProps} className="kanban__section" ref={provided.innerRef}>
                            <div className="kanban__section__title">{section.title}</div>
                            <div className="kanban__section__content">{section.tasks.map((tasks,index)=>(
                                <Draggable key={tasks.id} draggableId={tasks.id}index={index}>
                                    {(provided,snapshot)=>(
                                        <div ref={provided.innerRef}{... provided.draggableProps}
                                        {... provided.dragHandleProps} style={
                                            {...provided.draggableProps.style,opacity:snapshot.isDragging?"0.5":"1"}
                                        }>
                                                    <Card>{tasks.title}</Card>
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    </div>
                    )}
                </Droppable>
                ))}
            </div>
            </DragDropContext>
        );
        }

