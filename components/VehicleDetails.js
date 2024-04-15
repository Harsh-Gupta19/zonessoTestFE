import { View, Text, StyleSheet, Platform, Image, ScrollView, FlatList } from 'react-native'
import Badge from './Badge';
import { useState } from 'react';
import CustomCallChatButton from './CustomCallChatButton';
const carImage = require("../assets/lamborghini.png");
const share = require("../assets/share-icon.png");
const heart = require("../assets/heart-icon.png");
import { useEffect, useReducer } from 'react';
import vehiclesReducer from "../reducer/vehiclesReducer";
import { envUrl } from '../env';


const intialState = {
    data: []
};


const VehicleDetails = ({route}) => {
    const {id, name, category, currency, price, type}= route.params; 
    console.log("idddd",id)
    const [vehicleDetailsState, dispatch] = useReducer(vehiclesReducer, intialState);

    const getMotorsDetails = async () => {
        console.log("Inside fetch")
        try {
            let url  = envUrl.concat(`/api/motors/${id}`)
            const response = await fetch(url);
            const data = await response.json();
            const {type, price, name, currency} = data[0];
            dispatch({
                type: 'getMotorsDetails',
                data
            });
        } catch (e) {
            console.log("e", e);
        }
    }

    useEffect(() => {
        getMotorsDetails();
    }, []);


    const vehiclesDetails = vehicleDetailsState.data;
    console.log("motorsData", vehiclesDetails);
    const [showFooter, setShowFooter] = useState(true);
    let allType = type.reduce((acc, type, index, arr) => {
        let len = arr.length - 1;
        acc += len === index ? type : type + " | ";
        return acc;
    }, "");
    return (
        <ScrollView>
            <View key={1} style={styles.card}>
                <Image
                    source={carImage}
                    accessibilityLabel={`Cars`}
                    style={styles.image}
                    resizeMode="stretch"
                />
                <View style={styles.nameContainer}>

                    <View style={styles.iconContainer}>
                        <Image style={styles.iconImage} source={share} resizeMode='stretch' />
                        <Image style={styles.iconImage} source={heart} resizeMode='stretch' />
                    </View>
                </View>
                <View style={{ marginHorizontal: 8 }}>
                    <View style={{ marginBottom: 16, flexDirection: "row", columnGap: 12 }}>
                        <Text style={{ marginTop: 4, color: "#F00030", fontSize: 16, fontWeight: 900 }}>{currency+ " " +price}</Text>
                        <Badge title={category === "Premium" ? "Premium" : "Featured"} category={category} />
                    </View>
                    <View style={{ marginBottom: 16 }}>
                        <Text style={{ color: "#1D2939", fontSize: 16, fontWeight: 700 }}> {name}</Text>
                    </View>


                    <View style={{ marginBottom: 22, height: 4, backgroundColor: "#EAECF0" }}></View>
                    <View style={{ marginBottom: 16, marginLeft: 2 }}>
                        <Text style={{ color: "#1D2939", fontSize: 16, fontWeight: 700 }}> Details</Text>
                    </View>
                    <View style={{ marginBottom: 12 }}>

                        <FlatList
                            data={vehiclesDetails}
                            renderItem={({ item }) => {
                                
                                return (
                                    <View key={item.id}>
                                        <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 2, justifyContent: 'flex-start' }}>
                                            <Text style={{ width: "45%", color: "#000000", fontSize: 14, fontWeight: 400 }}> {item.key}</Text>
                                            <Text style={{ width: "55%", color: "#000000", fontSize: 14, fontWeight: 400 }}> {item.value}</Text>
                                        </View>
                                        <View style={{ marginBottom: 8, marginHorizontal: 8, height: 2, backgroundColor: "#EAECF0" }}></View>
                                    </View>
                                );
                            }}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                    <View style={{ marginBottom: 8 }}>
                        <Text style={{ color: "#475467", fontSize: 16, fontWeight: 700 }}> Description </Text>
                    </View>

                    <View style={{ marginBottom: 26 }}>
                        <Text style={{ color: "#475467", fontSize: 12, fontWeight: 600 }}> {allType} </Text>
                    </View>
                     <CustomCallChatButton />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        marginHorizontal: 2,
        marginTop: 16,
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
        justifyContent: "flex-end",
        width: "100%",
        paddingHorizontal: 8,
        paddingTop: 10,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 12,

    },
    iconImage: {
        height: 18,
        width: 20,
    },
    image: {
        width: "100%",
        height: 243,
        marginBottom: 16,
    },
});

export default VehicleDetails;