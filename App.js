import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = props => {
    const [goals, setGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setGoals([goalTitle, ...goals]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput addGoalHandler={addGoalHandler} />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.goalList}>
                    {goals.map(goal => (
                        <GoalItem key={goal} goal={goal} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
