import {Animated, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Snackbar, Text} from "react-native-paper";
import React, {useEffect, useRef, useState} from "react";
import {icons} from "../style/icons";
import TimerWidgetComponent from "../components/TimerWidget";


const HEADER_HEIGHT = 300;


function countRecipeTime(timers) {
    let totalSeconds = 0;
    for (const timer of timers) {
        totalSeconds += timer.secs;
    }
    return totalSeconds;
}

const RecipeDetails = ({route, navigation}) => {

    const [recipe, setRecipe] = useState([]);
    const scrollY = useRef(new Animated.Value(0)).current;
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    useEffect(() => {
        let {recipe} = route.params;
        setRecipe(recipe);

    }, []);


    function renderHeaderBar() {
        return (
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, height: 90, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 25, paddingBottom: 10}}>

                <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'grey', opacity: scrollY.interpolate({ inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT- 70], outputRange: [0, 1]}) }}>

                </Animated.View>

                <Animated.View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 10, opacity: scrollY.interpolate({inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50], outputRange: [0,1]})}}>
                    <Text style={{ fontSize: 15}}> {recipe.title}</Text>
                    <Text style={{ fontSize: 11}}> {getRecipeTime()}</Text>
                </Animated.View>

                <TouchableOpacity style={{width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 18, backgroundColor: 'rgba(222, 226, 230, 0.65)' }} onPress={() => {navigation.goBack()}}>
                    <Image source={{uri: icons.leftArrow}} style={{width: 20, height: 20, overlayColor: 'white'}}/>
                </TouchableOpacity>


                <TouchableOpacity style={{width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 18, backgroundColor: 'rgba(222, 226, 230, 0.65)' }} onPress={() => {setSnackbarVisible(true)}}>
                    <Image source={{uri: icons.share}} style={{width: 20, height: 20, overlayColor: 'white'}}/>
                </TouchableOpacity>

            </View>
        )
    }
    function renderRecipeHeader() {
        return (
            <View style={{marginTop: -1000, paddingTop: 1000, alignItems: 'center', overflow: 'hidden'}}>
                <Animated.Image
                    source={recipe?.image}
                    resizeMode="contain"
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                                })
                            },
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [2, 1, 0.75]
                                })
                            }
                        ]
                    }}
                />

                <Animated.View style={{ position: 'absolute', bottom: 10, left: 30, right: 30, height: 80, transform: [{translateY: scrollY.interpolate({inputRange: [0, 170, 250], outputRange: [0, 0, 100], extrapolate: 'clamp'})}]}} >
                    <TimerWidgetComponent timers={recipe.timers}/>
                </Animated.View>
            </View>
            );
    }

    const getRecipeTime = () => {

          if (recipe === undefined || recipe.timers === undefined) {
            return null;
          }

          let totalSeconds = countRecipeTime(recipe.timers);

          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);

          if (hours > 0) {
            return `${hours}h ${minutes} min`;
          }

          if ((minutes === 0) && (hours === 0)) {
            return `less than a minute`;
          }

          if (totalSeconds === 60) {
              return `1 minute`;
          }

          return `${minutes} minutes`;
        };

    function renderRecipeInfo() {

        const getIngredients = () => {
            if (recipe === undefined || recipe.ingredients === undefined) {
                return `0 ingredients`;
            }

            let len = recipe.ingredients.length;
            if (len === 1) {
                return `${len} ingredient`;
            }
            return `${len} ingredients`;
        }

        return (
            <View style={{flexDirection: 'row', height: 130, width: '100%', paddingHorizontal: 30, paddingVertical: 20, alignItems: 'center'}}>
                <View style={{flex: 1.5, justifyContent: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>{recipe?.title} </Text>
                    <Text style={{fontSize: 13, marginTop: 5, color: 'grey', }}>{getRecipeTime()} | {getIngredients()}</Text>
                </View>

            </View>
        )
    }
    function renderRecipeDescription() {
        return (
            <View style={{ flexDirection: 'column', paddingHorizontal: 30, marginTop: 0, marginBottom: 15}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}} >Description</Text>
                <Text style={{fontSize: 12, color: 'grey', marginTop: 10}} >{recipe.desc}</Text>
            </View>
        )
    }
    function renderTimersList() {

        if (recipe === undefined || recipe.timers === undefined) {
            return null;
        }

        const time = (secs) => {
            const hours = Math.floor(secs / 3600);
            const minutes = Math.floor(secs / 60);
            const seconds = secs % 60;

            if (hours > 0) {
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }

            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        }

        return (
            <View style={{ flexDirection: 'column', paddingHorizontal: 30, marginTop: 0, marginBottom: 15}}>
                <Text style={{flex: 1, fontSize: 16, fontWeight: 'bold'}} >Timers</Text>
                {recipe.timers.map((timer, index) => (
                    <View key={index} style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                        <View style={{flex: 1}}>
                            <Text style={{color: 'grey'}}>{index+1}. {timer.name}</Text>
                        </View>

                        <View style={styles.listBoxAmount}>
                            <Text style={{color: 'grey'}}>{time(timer.secs)}</Text>
                        </View>
                    </View>
                ))}
            </View>
        )
    }
    function renderIngredientsHeader() {
        return (
            <View style={{ flexDirection: 'row', paddingHorizontal: 30, marginTop: 0, marginBottom: 10}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}} >Ingredients</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={recipe.ingredients}
                keyExtractor={item => `${item.id}`}
                ListHeaderComponent={
                    <View>
                        {renderRecipeHeader()}
                        {renderRecipeInfo()}

                        {renderRecipeDescription()}
                        {renderTimersList()}
                        {renderIngredientsHeader()}

                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([{nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}

                renderItem={({item}) => (
                    <View style={styles.listBox}>
                        <View style={styles.listBoxImageView}>
                            <Image source={{uri: item.icon}} style={styles.listBoxImage}/>
                        </View>

                        <View style={styles.listBoxName}>
                            <Text style={{color: 'grey'}}>{item.name}</Text>
                        </View>

                        <View style={styles.listBoxAmount}>
                            <Text style={{color: 'grey'}}>{item.amount} {item.unit}</Text>
                        </View>
                    </View>
                )}
            />
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                action={{
                  label: 'Close',
                  onPress: () => {
                    setSnackbarVisible(false)
                  },
                }}>
            Sharing is not implemented yet. This is an empty action.
            </Snackbar>
            {renderHeaderBar()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    listBox: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginVertical: 5
    },
    listBoxImageView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 5,
    },
    listBoxName: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    listBoxAmount: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    listBoxImage: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(108, 117, 125, 0.15)',
        borderRadius: 8
    },
    headerButton: {

    }

});
export default RecipeDetails;