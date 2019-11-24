import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ id, goal, onDelete }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onDelete(id)}>
            <View style={styles.goalItem}>
                <Text>{goal}</Text>
            </View>
        </TouchableOpacity>
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
