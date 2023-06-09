import {Button, Surface,} from "react-native-paper";
import {ScrollView} from "react-native";
import RecipeListItemOld from "../components/RecipeListItemOld";
import {style} from "../style/style";
import {recipes} from "../data/recipes";


const MainScreen = ({ navigation, theme }) => {

    return (
      <Surface style={style.container} elevation={4}>
          <ScrollView>
              {recipes.map((recipe) => <RecipeListItemOld key={recipe.id} recipe={recipe} navigation={navigation} />)}
              <Button mode={'contained'} > TEST</Button>
          </ScrollView>
      </Surface>
    )
}

export default MainScreen;