import React, {useState, useEffect} from "react";

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";

import NewTask from "./components/NewExpense/NewTask";
import Tasks from "./components/Tasks/Tasks";

const DUMMY_TASKS = [
    {
        id: 'e1',
        date: new Date(2023, 9, 11),
        title: 'aaa',
        priority: 'low'
    },
    {
        id: 'e2',
        date: new Date(2023, 8, 3),
        title: 'bbb',
        priority: 'medium'
    },
    {
        id: 'e3',
        date: new Date(2023, 6, 7),
        title: 'ccc',
        priority: 'high'
    },

]

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [tasks, setTasks] = useState(DUMMY_TASKS)
    const addTaskHandler = (task) => {
        console.log('In App.js')
        setTasks((previousTasks) => {
            return [task, ...previousTasks]
        })
    }
    console.log(tasks)

    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem('isLoggedIn')
        if (storedUserLoggedIn === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    };

    return (
        <div>
            <AuthContext.Provider value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler
            }}>
                <MainHeader onLogout={logoutHandler}/>
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler}/>}
                    {isLoggedIn && <NewTask onAddTask={addTaskHandler}/>}
                </main>
            </AuthContext.Provider>

            <div className="App">
                <Tasks taskData={tasks}></Tasks>
            </div>
        </div>
    );
}

export default App;
