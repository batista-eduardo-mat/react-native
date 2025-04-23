import React from 'react'
import {StyleSheet, Text, View } from 'react-native';

interface Props {
    name?: string;
}

export const HelloWorldScreen = ( {name = 'World'} : Props) => {
  return (
    <View style={style.contaier}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={style.title}>{name} Screen View</Text>
    </View>
  )
}

const style = StyleSheet.create({
    contaier: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
      fontSize: 48,
      textAlign: 'center',
      color: 'black',
      padding: 20  
    },
    
})