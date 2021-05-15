import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchScreen from "../Screen/SearchScreen";
import HomeScreen from "../Screen/Component/Component";
import FoodScreen from "../Screen/Food";
import NutrionScreen from "../Screen/Nutrion";
import OrderScreen from "../Screen/Order";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f2404c",
        inactiveTintColor: "#000119",
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#FFF",
          elevation: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-compass" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-compass" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Nurion"
        component={NutrionScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-compass" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="order"
        component={OrderScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-compass" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const ChatNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Chat" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
