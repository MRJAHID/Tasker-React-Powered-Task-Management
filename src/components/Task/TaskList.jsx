const TaskList = ({task,onEdit ,onDelete, onFavourite}) => {
    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title</th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description</th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags</th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority</th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options</th>
                </tr>
                </thead>
                <tbody>
                {
                    task.map((item) => (<tr key={item.id}
                                            className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                        <td>
                           <button onClick={() => onFavourite(item.id)}>
                               {item.isFavorite ? (<svg xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-star" width="24"
                                                        height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="yellow"
                                                        fill="yellow"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                   <path
                                       d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                               </svg>) : (<svg xmlns="http://www.w3.org/2000/svg"
                                               className="icon icon-tabler icon-tabler-star" width="24"
                                               height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                               fill="none"
                                               strokeLinecap="round" strokeLinejoin="round">
                                   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                   <path
                                       d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                               </svg>)
                               }
                           </button>

                        </td>
                        <td>{item.title}</td>
                        <td>
                            <div>
                                {item.description}
                            </div>
                        </td>
                        <td>
                            <ul className="flex justify-center gap-1.5 flex-wrap">
                                {
                                    item.tags.map(tag => (
                                        <li key={tag}>
											<span
                                                className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">{tag}</span>
                                        </li>
                                    ))
                                }
                                {/*<li>*/}
								{/*			<span*/}
                                {/*                className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#1C92FFB0] px-2.5 text-sm capitalize text-[#F4F5F6]">Python</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
								{/*			<span*/}
                                {/*                className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">API</span>*/}
                                {/*</li>*/}
                            </ul>
                        </td>
                        <td className="text-center">{item.priority}</td>
                        <td>
                            <div className="flex items-center justify-center space-x-3">
                                <button onClick={() => onDelete(item.id)} className="text-red-500">Delete</button>
                                <button onClick={() => onEdit(item)} className="text-blue-500">Edit</button>
                            </div>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
