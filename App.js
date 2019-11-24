import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = props => {
    const [goals, setGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setGoals([{ id: Math.random().toString(), value: goalTitle }, ...goals]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput addGoalHandler={addGoalHandler} />
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
