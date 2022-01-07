import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
//necessito desse import para que o roteamento funcione com o RectButton
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StackRoutes } from './stack.routes'

export function Routes(){
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
