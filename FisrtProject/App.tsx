import React from 'react'
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1}}>
        {/* <HelloWorldScreen name='Main'/> */}
        <CounterScreen/>
      </SafeAreaView>
    </PaperProvider>
  )
}