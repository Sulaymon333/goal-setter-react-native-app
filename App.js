import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

const App = props => {
    const [goalTitle, setGoalTitle] = useState('');
    const [goals, setGoals] = useState([]);

    const goalInputHandler = enteredText => {
        setGoalTitle(enteredText);
    };

    const addGoalHandler = () => {
        setGoals([goalTitle, ...goals]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a goal"
                    onChangeText={goalInputHandler}
                    value={goalTitle}
                />
                <Button title="ADD" onPress={addGoalHandler} />
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.goalList}>
                    {goals.map(goal => (
                        <View key={goal} style={styles.goalItem}>
                            <Text>{goal}</Text>
                        </View>
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
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%'
    },
    scrollContainer: {
        paddingHorizontal: 10
    },
    goalList: {
        marginVertical: 10
    },
    goalItem: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#ddd9dd',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 15
    }
});
