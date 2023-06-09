import {SafeAreaView, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const TabHeader = ({ title, desc, icon }) => {
    return (
        <View style={styles.headerSection}>
            <View style={{width: '75%'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            <MaterialCommunityIcons name={icon} color={'black'} size={50} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: '#e0e0e0',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 14,
        marginTop: 10,
        color: '#646464',
    }
});

export default TabHeader;