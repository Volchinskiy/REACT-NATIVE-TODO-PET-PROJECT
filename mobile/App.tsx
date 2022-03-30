import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/router/AppRouter';
import 'react-native-gesture-handler';
import React from 'react';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

