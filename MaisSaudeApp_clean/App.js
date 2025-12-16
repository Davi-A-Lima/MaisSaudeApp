import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/App/HomeScreen';
import ActivityTrackerScreen from './src/screens/App/ActivityTrackerScreen';
import RouteDetailScreen from './src/screens/App/RouteDetailScreen';
import RoutesHistoryScreen from './src/screens/App/RoutesHistoryScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import MainTabs from './src/navigation/MainTabs';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPasswordScreen';
import EditProfileScreen from './src/screens/App/EditProfileScreen';
import CreatePostScreen from './src/screens/App/CreatePostScreen';
import WorkoutTrackerScreen from './src/screens/App/WorkoutTrackerScreen';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<AuthProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
					<Stack.Screen name="MainApp" component={MainTabs} />
					<Stack.Screen name="EditProfile" component={EditProfileScreen} />
					<Stack.Screen name="ActivityTracker" component={ActivityTrackerScreen} />
					<Stack.Screen name="RoutesHistory" component={RoutesHistoryScreen} />
					<Stack.Screen name="RouteDetail" component={RouteDetailScreen} />
					<Stack.Screen name="CreatePost" component={CreatePostScreen} />
					<Stack.Screen name="WorkoutTracker" component={WorkoutTrackerScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</AuthProvider>
	);
}
