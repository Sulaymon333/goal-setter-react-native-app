import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [goalTitle, setGoalTitle] = useState('');

    const goalInputHandler = enteredText => {
        setGoalTitle(enteredText);
    };

    const addGoalHandler = () => {
        props.addGoalHandler(goalTitle);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Enter a goal"
                onChangeText={goalInputHandler}
                value={goalTitle}
            />
            <Button title="ADD" onPress={addGoalHandler} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
    }
});
