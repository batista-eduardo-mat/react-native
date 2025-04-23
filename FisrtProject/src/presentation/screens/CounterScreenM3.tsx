import React, { useState } from 'react';
import { Text, View } from 'react-native';

export const CounterScreen = () => {

    const [count, setcount] = useState(0)
    return (
        <View >
            <Text> {count} </Text>
        </View>
    )
}