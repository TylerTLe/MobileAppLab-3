import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button } from 'react-native';

function ToDoList({tasks}) {
    const [todos, setTodos] = useState(tasks);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                {todos.map((todo, index) => (
                    <Pressable key={index}>
                        <View style={[styles.task, todo.completed && styles.completed]}>
                            <Text style={styles.taskText}>{todo}</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    type="text"
                    value={newTodo}
                    onChangeText={(text) => setNewTodo(text)}
                />
                <Button title='Add' onPress={handleAddTodo}>Add Todo</Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

export default ToDoList;
