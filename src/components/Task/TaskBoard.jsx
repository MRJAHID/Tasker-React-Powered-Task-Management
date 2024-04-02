import SearchTask from "./SearchTask.jsx";
import TaskActions from "./TaskActions.jsx";
import TaskList from "./TaskList.jsx";
import {useState} from "react";
import AddTaskModal from "./AddTaskModal.jsx";

const TaskBoard = () => {
    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': "Learn React Native",
        'description': "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        'tags': ['Web', 'React', 'JS'],
        'priority': 'High',
        'isFavorite': true,
    }
    const [tasks, setTask] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    function handleAddEditTask(newTask, isAdd) {
        if (isAdd) {
            setTask([...tasks, newTask]);
        } else {
            setTask(tasks.map((task) => {
                if (task.id === newTask.id) {
                    return newTask;
                }
                return task;
            }))
        }
        setShowAddModal(false);

    }

    function handleEditTask(task) {
        setTaskToUpdate(task);
        setShowAddModal(true);
    }

    function handleCloseClick() {
        setShowAddModal(false);
        setTaskToUpdate(null);
    }

    function handleDeleteTask(taskId) {
        const taskAfterDelete = tasks.filter(task => task.id !== taskId);
        setTask(taskAfterDelete);
    }

    function handleDeleteAllTask() {
        tasks.length = 0;
        setTask([...tasks]);
    }

    function handleFavTask(taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        const newTask = [...tasks];
        newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
        setTask(newTask);
    }

    return (
        <section className="mb-20" id="tasks">

            {/* Show Modal */}
            {showAddModal &&
                <AddTaskModal taskToUpdate={taskToUpdate} onSave={handleAddEditTask} onCloseClick={handleCloseClick}/>}

            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask/>
                </div>

                <div
                    className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">

                    <TaskActions onAddTask={() => setShowAddModal(true)} onDeleteAllTask={handleDeleteAllTask}/>

                    <TaskList task={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onFavourite={handleFavTask}/>
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;
