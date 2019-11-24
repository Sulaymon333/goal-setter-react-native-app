import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = props => {
    const [goals, setGoals] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);

    const addGoalHandler = goalTitle => {
        if (!goalTitle) {
            return;
        }
        setGoals(currentGoal => [{ id: Math.random().toString(), value: goalTitle }, ...currentGoal]);
        setModalStatus(false);
    };

    const openModal = () => {
        setModalStatus(true);
    };

    const cancelGoalInputHandler = () => {
        setModalStatus(false);
    };

    return (
        <View style={styles.screen}>
            <GoalInput addGoalHandler={addGoalHandler} modalStatus={modalStatus} onCancel={cancelGoalInputHandler} />
            <Button title="Add a Goal" onPress={openModal} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                style={styles.scrollContainer}
                data={goals}
                renderItem={itemData => <GoalItem goal={itemData.item.value} />}
            />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    scrollContainer: {
        paddingHorizontal: 10
    },
    goalList: {
        marginVertical: 10
    }
});
