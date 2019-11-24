import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({ goal }) => {
    return (
        <View style={styles.goalItem}>
            <Text>{goal}</Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#ddd9dd',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20
    }
});
