import {ScrollView, StyleSheet, View} from "react-native";
import React from "react";
import RecipeListItem from "../../components/RecipeListItem";
import TabHeader from "../../components/TabHeader";


const FoodView = ({ navigation, route }) => {

    const { foods } = route.params;

    if (foods === undefined) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TabHeader title={'Food'} desc={'Indulge in delectable delights. Explore diverse flavors, try new recipes, and satisfy your taste buds. A culinary journey awaits!'} icon={'food'}/>
            <ScrollView style={styles.scrollView}>
                {foods.map((recipe) => <RecipeListItem key={recipe.id} recipe={recipe} navigation={navigation} />)}
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

export default FoodView;