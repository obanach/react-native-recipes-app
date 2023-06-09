import React, { useState, useEffect } from 'react';
import {View, Image, TouchableOpacity, Alert} from 'react-native';
import {icons} from "../style/icons";
import {Button, Dialog, Portal, Snackbar, Text} from "react-native-paper";

const TimerWidgetComponent = ({ timers }) => {

    if (timers === undefined) {
        return null;
    }

    const [currentTimerIndex, setCurrentTimerIndex] = useState(0);
    const [remainingTime, setRemainingTime] = useState(timers[currentTimerIndex].secs);
    const [isRunning, setIsRunning] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
          intervalId = setInterval(() => {
            setRemainingTime(prevTime => {
              if (prevTime === 0) {
                handleCountdownEnd();
                return 0;
              } else {
                return prevTime - 1;
              }
            });
          }, 1000);
        }

        return () => {
          clearInterval(intervalId);
        };
    }, [isRunning, isActive]);

    const handleCountdownEnd = () => {
        handleResetTimer();
        setModalVisible(true);
    }

    const handleModalClose = () => setModalVisible(false);
    const handleModalContinue = () => {
        setModalVisible(false);
        handleSwitchTimer();
        handleStartTimer();
    }

    const handleSwitchTimer = () => {
        setIsRunning(false);
        setIsActive(false)
        setCurrentTimerIndex(prevIndex => (prevIndex + 1) % timers.length);
        setRemainingTime(timers[currentTimerIndex].secs);
    };


    const handleStopTimer = () => {
        setIsRunning(false);
    };

    const handleStartTimer = () => {
        setIsRunning(true);
        setIsActive(true);
    };

    const handleResetTimer = () => {
        setIsRunning(false);
        setIsActive(false);
        setRemainingTime(timers[currentTimerIndex].secs);
    };

    const formatTime = time => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <View style={{ flex: 1, borderRadius: 20, backgroundColor: 'rgba(5, 5, 5, 0.65)'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                <View style={{ width: 45, height: 45, marginLeft: 20 }}>
                    <Image source={{uri: icons.timer}} style={{width: 45, height: 45, borderRadius: 25}}/>
                </View>

                <View style={{flex: 1, marginHorizontal: 20}}>
                    <Text style={{color: 'white', fontSize: 11}}>{timers[currentTimerIndex].name}</Text>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{formatTime(remainingTime)}</Text>
                </View>

                {isActive ? (
                    <TouchableOpacity style={styles.roundButton} onPress={() => {handleResetTimer()}}>
                        <Image source={icons.stop} style={{width: 25, height: 25}}></Image>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.roundButton} onPress={() => {handleSwitchTimer()}}>
                        <Image source={icons.change} style={{width: 25, height: 25}}></Image>
                    </TouchableOpacity>
                )}

                {isRunning ? (
                    <TouchableOpacity style={styles.roundButton} onPress={() => {handleStopTimer()}}>
                        <Image source={icons.pause} style={{width: 25, height: 25}}></Image>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.roundButton} onPress={() => {handleStartTimer()}}>
                        <Image source={icons.play} style={{width: 25, height: 25}}></Image>
                    </TouchableOpacity>
                )}

            </View>

            <Portal>
              <Dialog visible={modalVisible} onDismiss={handleModalClose}>
                <Dialog.Title>Countdown ended!</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">Countdown for {<Text style={{fontWeight: 'bold'}}>{timers[currentTimerIndex].name}</Text>} completed!</Text>
                    <Text style={{marginBottom: 25}}>Ready to start {<Text style={{fontWeight: 'bold'}}>{timers[(currentTimerIndex + 1) % timers.length].name}</Text>}?</Text>
                    <Text>Estimated time: {<Text style={{fontWeight: 'bold'}}>{formatTime(timers[(currentTimerIndex + 1) % timers.length].secs)}</Text>}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={handleModalClose}>Close</Button>
                  <Button mode={'contained'} onPress={handleModalContinue}>Start countdown</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>

            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                action={{
                  label: 'Undo',
                  onPress: () => {
                    // Do something
                  },
                }}>
            Hey there! I'm a Snackbar.
            </Snackbar>
        </View>
    );
};

const styles = {
    roundButton: {
        width: 40,
        height: 40,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(222, 226, 230, 0.6)'
    }
}

export default TimerWidgetComponent;
