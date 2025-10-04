import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, CheckBox } from 'react-native';

const HomeScreen = () => {
  const tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ];

  return (
    <View>
      <Text>Todo List</Text>
      {tasks.map(task => (
        <View key={task.id}>
          <CheckBox value={task.completed} />
          <Text>{task.title}</Text>
        </View>
      ))}
      <Button title="Add Task" onPress={() => navigation.navigate('AddTaskScreen')} />
    </View>
  );
};

const AddTaskScreen = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    // Add task logic here
  };

  return (
    <View>
      <TextInput
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={text => setTaskTitle(text)}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const EditTaskScreen = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleEditTask = () => {
    // Edit task logic here
  };

  return (
    <View>
      <TextInput
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={text => setTaskTitle(text)}
      />
      <Button title="Edit Task" onPress={handleEditTask} />
    </View>
  );
};

const DeleteTaskConfirmationScreen = () => {
  const handleDeleteTask = () => {
    // Delete task logic here
  };

  return (
    <View>
      <Text>Are you sure you want to delete this task?</Text>
      <Button title="Delete Task" onPress={handleDeleteTask} />
    </View>
  );
};

const TaskDetailScreen = () => {
  const task = { id: 1, title: 'Task 1', completed: false };

  return (
    <View>
      <Text>{task.title}</Text>
      <Text>Task ID: {task.id}</Text>
      <Text>Completed: {task.completed ? 'Yes' : 'No'}</Text>
    </View>
  );
};

export { HomeScreen, AddTaskScreen, EditTaskScreen, DeleteTaskConfirmationScreen, TaskDetailScreen };