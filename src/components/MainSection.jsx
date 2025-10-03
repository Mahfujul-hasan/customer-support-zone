import React, { use, useState } from 'react';
import CountBox from './CountBox';
import CustomTicketContainer from './CustomTicketContainer';
import Container from './Container';
import { toast } from 'react-toastify';

const MainSection = ({fetchPromise}) => {
    const data= use(fetchPromise)

    const[promiseData, setPromiseData]=useState(data);
    const[task, setTask]=useState([]);
    const[resolved, setResolved]=useState([]);

    


    const handleTask=(data)=>{
        toast.success('In progress')
        const newTask=[...task,data];
        setTask(newTask);
       
        
        
    }
    const handleResolve=(data)=>{
        toast.success('Completed')
        const newResolved=[...resolved, data]
        setResolved(newResolved)
        const taskRemaining= task.filter(element=>element.id!==data.id)
        setTask(taskRemaining) 
        const ticketsRemaining = promiseData.filter(element=> element.id!==data.id)
        setPromiseData(ticketsRemaining)
        
    }
    return (
        <Container>
        <div>
            <CountBox totalTask={task.length} totalResolved={resolved.length}></CountBox>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 '>
                <div className="col-span-4">
                    <h1 className='text-2xl font-semibold text-[#34485A] mb-4 text-center lg:text-left'>Customer Tickets</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2 lg:mx-auto">
                        {
                            promiseData.map(data=>{
                                return(
                                    <CustomTicketContainer key={data.id} data={data} handleTask={handleTask}></CustomTicketContainer>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="lg:col-span-1 mt-2.5 mx-2.5 lg:mx-0">
                    <div className="">
                        <h1 className='text-2xl font-semibold text-[#34485A] mb-2.5'>Task Status</h1>
                        <div className="min-h-20 bg-white p-2.5 rounded-lg border-2 border-gray-200">
                            {
                                task.map(item=>{
                                    return(
                                        <div key={item.id} className='p-4 bg-white flex flex-col mb-2.5 rounded-lg shadow-lg border-2 border-gray-200'>
                                            <h3 className="text-xl font-medium text-[#001931] mb-4 text-center">{item.title}</h3>
                                            <button onClick={()=>handleResolve(item)} className='w-full rounded-md text-white bg-[#02A53B] font-semibold px-3 py-3'>Complete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-semibold text-[#34485A] mb-2.5 '>Resolved Task</h1>
                        <div className="min-h-20 bg-white p-2.5 rounded-lg">
                            {
                                resolved.map(item=>{
                                    return(
                                        <div key={item.id} className='p-4 bg-[#E0E7FF] mb-2.5 rounded-lg shadow-md'>
                                            
                                            <h3 className="text-xl font-medium text-[#001931] mb-4 text-center">{item.title}</h3>
                                           
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default MainSection;