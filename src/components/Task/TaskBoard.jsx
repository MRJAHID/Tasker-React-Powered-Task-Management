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

    function handleAddTask(newTask) {
        setTask([...tasks, newTask]);
        setShowAddModal(false);
    }

    return (
        <section className="mb-20" id="tasks">

            {/* Show Modal */}
            {showAddModal && <AddTaskModal onSave={handleAddTask}/>}

            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask/>
                </div>

                <div
                    className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions onAddTask={() => setShowAddModal(true)}/>
                    <TaskList task={tasks}/>
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;
