import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodoListPage from '../pages/TodoListPage';
import TodoAddPage from '../pages/TodoAddPage';


const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TodoListPage'
        component={TodoListPage}
        options={{ title: 'Your Task' }}
      />
      <Stack.Screen
        name='TodoAddPage'
        component={TodoAddPage}
        options={{ title: 'Add new Task' }}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
