import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [goalTitle, setGoalTitle] = useState('');

    const goalInputHandler = enteredText => {
        setGoalTitle(enteredText);
    };

    const addGoalHandler = () => {
        props.addGoalHandler(goalTitle);
        setGoalTitle('');
    };

    return (
        <Modal visible={props.modalStatus} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a goal"
                    onChangeText={goalInputHandler}
                    value={goalTitle}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 5,
        marginBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});
