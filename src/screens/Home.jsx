import React from "react";
import { SafeAreaView, Button} from "react-native";
import { useState } from "react";
import ToDoList from "../ToDoList";
import ToDoForum from "../ToDoForum";
import MainLayout from '../layouts/MainLayout';

function Home({ navigation }) {
    const [tasks, setTasks] = useState(['Do laundry','Go to gym','Walk dog']);

    const handleAddTask = ( task ) => {
        setTasks([...tasks, task]);
    };

  return (
    <MainLayout>
        <SafeAreaView>
            <ToDoList tasks={tasks}/>
            <ToDoForum onAddTask={handleAddTask}/>
        </SafeAreaView>
    </MainLayout>
  )
};



export default Home;