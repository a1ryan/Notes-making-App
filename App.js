import React from 'react'
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/index';
import {Provider as StoreProvider} from 'react-redux'
import store from './src/reducers/store'

export default function App(){
  return (
    <StoreProvider store = {store}>
      <PaperProvider>
        <AppNavigator/>
      </PaperProvider>
    </StoreProvider>
  )
};