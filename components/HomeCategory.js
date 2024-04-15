import React from "react";
import { StyleSheet, View, Text, Pressable, Platform, Image, Alert } from "react-native";
const item = require("../assets/motors.png");
import { useNavigation } from "@react-navigation/native";

const HomeCategory = ({ name, image, id }) => {
    const navigation  = useNavigation();
    const handleOnClick = (id) => {
        switch (id) {
            case "1":
                navigation.navigate("Vehicles");
                break;
            default:
                Alert.alert("Coming soon...");
        }
    }
    return (
        <Pressable onPress={() => handleOnClick(id)}>
            <View style={styles.box}>
                <Image style={styles.categoryImage} source={image} resizeMode='stretch' />
                <Text style={styles.text}>{name}</Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        height: 88,
        gap: 4,
        borderRadius: 8,
        borderColor: "#DCDCDC",
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
    imageContainer: {
        marginTop: "20",
    },
    categoryImage: {
        top: 0,
        position: "absolute",
        width: 70,
        height: 70,
    },
    text: {
        fontSize: 10,
        fontWeight: "600",
        textAlign: "center",
        color: "#101828",
        marginTop: 55,
    },

});

export default HomeCategory;