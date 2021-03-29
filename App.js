import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens 
import CreateuserScreen from './screens/CreateUserScreen'
import UserDetailScreen from './screens/UserDetailScreen'
import UserListScreen from './screens/UserListScreen'

const Stack = createStackNavigator()
const MyStack = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name='CreateUser' component={CreateuserScreen} />
      <Stack.Screen name='UserList' component={UserListScreen} />
     
      <Stack.Screen name='UserDetails' component={UserDetailScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )

}




export default App 