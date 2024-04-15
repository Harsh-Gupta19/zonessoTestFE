import { View, Text, StyleSheet, Platform, Image, ScrollView, Pressable } from 'react-native'
import Badge from './Badge';
import CustomCallChatButton from './CustomCallChatButton';
const share = require("../assets/share-icon.png");
const heart = require("../assets/heart-icon.png");
const showroom = require("../assets/toyota.png");
const carImage = require("../assets/lamborghini.png");
import { useEffect, useReducer } from 'react';
import vehiclesReducer from "../reducer/vehiclesReducer";
import { useNavigation } from "@react-navigation/native";
import { envUrl } from '../env';

const intialState = {
    data: []
};

export default function Vehicles() {

    const [motorsState, dispatch] = useReducer(vehiclesReducer, intialState);
    const navigation  = useNavigation();
    const getMotors = async () => {
        console.log("Inside fetch")
        try {
            let url = envUrl+  "/api/motors";
            const response = await fetch(url);
            const data = await response.json();
            console.log("data", data);
            dispatch({
                type: 'getMotors',
                data
            });
        } catch (e) {
            console.log("e", e);
        }
    }

    useEffect(() => {
        console.log("Inside useeffect")
        getMotors();
    }, []);

    const onCardPress =(id, name, category, currency, price, type) => {
      navigation.navigate("VehicleDetails", {id, name, category, currency, price, type
    });
    }
    const motorsData = motorsState.data;
    console.log("motorsData", motorsData);

    return (
        <ScrollView>
            {motorsData.map((item) => {
                let value = "";
                let allType = item.type.reduce((acc, type, index, arr) => {
                    let len = arr.length - 1;
                    acc += len === index ? type : type + " | ";
                    return acc;
                }, "");
                return (
                    <Pressable key={item.id} onPress={()=> onCardPress(item.id, item.name, item.category, item.currency, item.price, item.type)}>
                    <View  style={styles.card}>
                        <Image
                            source={carImage}
                            accessibilityLabel={`Cars`}
                            style={styles.image}
                            resizeMode="stretch"
                        />

                        <View style={styles.nameContainer}>
                            <Badge title={item.category === "Premium" ? "Premium" : "Featured"} category={item.category} />
                            <View style={styles.iconContainer}>
                                <Image style={styles.iconImage} source={share} resizeMode='stretch' />
                                <Image style={styles.iconImage} source={heart} resizeMode='stretch' />
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 8 }}>
                            <View style={{ marginBottom: 8 }}>
                                <Text style={{ color: "#F00030", fontSize: 16, fontWeight: 900 }}>{item.currency + " " + item.price}</Text>
                            </View>
                            <View style={{ marginBottom: 8 }}>
                                <Text style={{ color: "#1D2939", fontSize: 16, fontWeight: 700 }}> {item.name}</Text>
                            </View>

                            <View style={{ marginBottom: 8 }}>
                                <Text style={{ color: "#475467", fontSize: 12, fontWeight: 600 }}> {allType} </Text>
                            </View>
                            <View style={{ marginBottom: 8 }}>
                                <Text style={{ color: "#475467", fontSize: 10, fontWeight: 500 }}> Year {item.modelYear}</Text>
                            </View>

                            <View style={styles.showroomContainer}>
                                <Image
                                    source={showroom}
                                    accessibilityLabel={`Showroom`}
                                    style={{ width: 48, height: 48 }}
                                    resizeMode="stretch"
                                />

                                <View style={styles.detailsContainer}>
                                    <Text style={{ color: "#475467", fontSize: 10, fontWeight: 700 }}> Location: {item.location} </Text>
                                    <Text style={{ color: "#475467", fontSize: 10, fontWeight: 700 }}> Posted on: {item.postedDate} </Text>
                                    <Text style={{ color: "#475467", fontSize: 10, fontWeight: 700 }}> Posted By: {item.postedBy} </Text>
                                </View>
                            </View>

                            <CustomCallChatButton/>
                        </View>
                    </View>
                    </Pressable>
                )
            }
            )}
            {!motorsData &&
                <View style={styles.typeContainer}>
                    <Text>No Record Available</Text>
                </View>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        margin: 16,
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
    nameContainer: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 8,
        paddingTop: 10,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 12,

    },
    iconImage: {
        height: 18,
        width: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    typeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12,
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    showroomContainer: {
        flexDirection: "row",
        marginBottom: 12,
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    detailsContainer: {
        flexDirection: "column",
        marginBottom: 8,
        marginLeft: 8,
        rowGap: 5
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    },
});