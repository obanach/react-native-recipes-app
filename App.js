import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetails from "./src/screens/RecipeDetails";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FoodView from "./src/screens/home/food";
import DrinksView from "./src/screens/home/drinks";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {recipes} from "./src/data/recipes";
import {useState} from "react";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {

    const [allRecipes, setAllRecipes] = useState(recipes);


  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Food" component={FoodView} initialParams={{foods: allRecipes.food}} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Drinks" component={DrinksView} initialParams={{drinks: allRecipes.drinks}} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="beer-outline" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;