const TodoItem = ({ task, isCompleted, onToggleComplete, onDeleteTask }) => {
    const handleToggleComplete = () => {
        onToggleComplete(task.id);
    };

    const handleDeleteTask = () => {
        onDeleteTask(task.id);
    };

    return (
        <View style={styles.container}>
            <CheckBox
                value={isCompleted}
                onValueChange={handleToggleComplete}
            />
            <Text style={styles.taskText}>{task.text}</Text>
            <TouchableOpacity onPress={handleDeleteTask}>
                <Icon name="delete" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    taskText: {
        flex: 1,
        marginLeft: 10,
        textDecorationLine: 'none',
    },
});

export default TodoItem;