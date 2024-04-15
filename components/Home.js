import React from "react";
import { StyleSheet, View, Text, Pressable, Platform, Image, Alert, ScrollView } from "react-native";
import HomeCategory from "./HomeCategory";
import Header from "./Header";
const addImage = require("../assets/advertisement.png");
const showroom = require("../assets/toyota.png");
import { categoryDetails } from "./HomeCategoryDetails";
import { useEffect, useReducer } from 'react';
import showroomReducer from "../reducer/showroomReducer";
import { envUrl } from "../env";

const intialState = {
    data: []
};
const Home = () => {

    const [showroomState, dispatch] = useReducer(showroomReducer, intialState);


    const onClickViewAll = () => {
        Alert.alert("Coming soon...");
    }

    const getShowrooms = async () => {
        console.log("Inside fetch")
        try {
            let url  = envUrl.concat(`/showrooms`)
            const response = await fetch(url);
            const data = await response.json();
            dispatch({
                type: 'getShowrooms',
                data
            });
        } catch (e) {
            console.log("e", e);
        }
    }

    useEffect(() => {
        console.log("Inside useeffect")
        getShowrooms();
    }, []);

    const showroomsData = showroomState.data;
    console.log("showroomsData", showroomsData);
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.cardsContainer}>
                    {categoryDetails.map((item) => <HomeCategory key={item.id} name={item.name} image={item.image} id={item.id} />)}
                </View>

                <View style={styles.imageContainer}>
                    <Image style={styles.addImage} source={addImage} resizeMode='stretch' />
                </View>

                <View style={styles.showroomContainer}>
                    <Text style={{ color: "#1D2939", fontSize: 16, fontWeight: 800 }}> Top Showrooms </Text>
                    <Pressable onPress={onClickViewAll}>
                        <Text style={{ color: "#F04438", fontSize: 12, fontWeight: 500, alignSelf: "baseline", }}> View All </Text>
                    </Pressable>
                </View>

                <ScrollView style={styles.showroomDetails} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>

                    {showroomsData.map((item) => {
                        return (
                            <View key={item.id} style={styles.showroomImageContainer}>
                                <Image style={styles.showroomImage} source={showroom} resizeMode='stretch' />
                                <View style={styles.logoContainer}>
                                    <Image style={styles.logoImage} source={showroom} resizeMode='stretch' />
                                    <View style={styles.showroomName}>
                                        <Text style={{ color: "#1D2939", fontSize: 12, fontWeight: 600 }}>{item.name}</Text>
                                        <Text style={{ color: "#1D2939", fontSize: 10, fontWeight: 500 }}> {item.distance + " " + item.distanceUnit + " Away"} </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 12,
    },
    cardsContainer: {
        flexWrap: "wrap",
        height: 304,
        alignContent: "stretch",
        columnGap: 10,
        rowGap: 15
    },
    imageContainer: {
        marginTop: 20,
        borderRadius: 8,
        borderColor: "grey",
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    addImage: {
        width: "100%",
        height: 150,
        borderRadius: 8,
    },
    showroomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    showroomDetails: {
        marginTop: 20,
    },
    showroomImageContainer: {
        flexDirection: "column",
        marginBottom: 8,
        marginLeft: 8,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    showroomImage: {
        width: 152,
        height: 120,
        borderRadius: 8,
    },
    logoContainer: {
        flexDirection: "row",
        marginTop: 16,
        marginBottom: 4

    },
    logoImage: {
        width: 32,
        height: 32,
    },
    showroomName: {
        rowGap: 4,
        marginLeft: 8
    }

});

export default Home;