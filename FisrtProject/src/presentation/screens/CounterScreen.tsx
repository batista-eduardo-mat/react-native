import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components'
import { Button } from 'react-native-paper';
export const CounterScreen = () => {

    const [count, setcount] = useState(0)

  return (
    <View style={style.container}>
        <Text style={style.title}> {count} </Text>
        {/* <PrimaryButton 
        label='Incrementar'
        onPress={ () => setcount(count + 1)}
        onLongPress={ () => setcount(0)}
        >
        </PrimaryButton> */}
        <Button
        onPress={ () => setcount(count + 1)}
        onLongPress={ () => setcount(0)}
        mode='contained'
        >
            Incrementar
        </Button>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    }
})