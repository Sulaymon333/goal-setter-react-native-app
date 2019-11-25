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
        setGoals(currentGoals => [{ id: Math.random().toString(), value: goalTitle }, ...currentGoals]);
        setModalStatus(false);
    };

    const deleteGoal = goalId => {
        setGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
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
            <View style={styles.addBtnContainer}>
                <View style={styles.addBtn}>
                    <Button title="Add a Goal" onPress={openModal} />
                </View>
            </View>
            <FlatList
                style={styles.goalList}
                keyExtractor={(item, index) => item.id}
                data={goals}
                renderItem={itemData => (
                    <GoalItem id={itemData.item.id} goal={itemData.item.value} onDelete={deleteGoal} />
                )}
            />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    addBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    addBtn: {
        width: '50%',
        borderRadius: 20,
        overflow: 'hidden'
    },
    goalList: {
        paddingHorizontal: 10,
        marginVertical: 10
    }
});
