import {Image, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";


let styles =  {
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#e8e8e8',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    content: {
        width: '65%',
        paddingHorizontal: 20
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    small: {
        fontSize: 12,
        color: 'gray',
    }
}

function sumTimers(timers) {

    let sum = 0;
    timers.forEach(timer => {
        sum += timer.secs;
    })

    const hours = Math.floor(sum / 3600);
    const minutes = Math.floor((sum % 3600) / 60);

    if (hours > 0) {
       return `${hours}h ${minutes} min`;
    }

    if ((minutes === 0) && (hours === 0)) {
        return `less than a minute`;
    }

    if (sum === 60) {
        return `1 minute`;
    }

    return `${minutes} minutes`;
}

const RecipeListItem = ({ recipe, navigation }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RecipeDetails', {recipe: recipe})}>
            <Image source={recipe.image} resizeMode={'cover'} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.title}>{recipe.title}</Text>
                <Text style={styles.small}>{sumTimers(recipe.timers)} | {recipe.ingredients.length} ingredients</Text>
            </View>
        </TouchableOpacity>
    );
}


export default RecipeListItem;