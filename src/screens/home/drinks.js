import {ScrollView, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import React from "react";
import TabHeader from "../../components/TabHeader";
import RecipeListItem from "../../components/RecipeListItem";


const DrinksView = ({ navigation, route }) => {

    const { drinks } = route.params;

    if (drinks === undefined) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TabHeader title={'Drinks'} desc={'Quench your thirst for exceptional beverages. Discover tantalizing flavors, explore refreshing recipes, and elevate your drink experience. Cheers to a delightful journey!'} icon={'beer-outline'}/>
            <ScrollView style={styles.scrollView}>
                {drinks.map((recipe) => <RecipeListItem key={recipe.id} recipe={recipe} navigation={navigation} />)}
            </ScrollView>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
});

export default DrinksView;