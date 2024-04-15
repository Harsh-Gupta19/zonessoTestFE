import React from "react";
import { StyleSheet, View, Text, Pressable, Platform, Image, Alert } from "react-native";
const login = require("../assets/login.png");
const google = require("../assets/google.png");
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";


const createAccGradeintColor = ['#FECDCA', '#FECDCA'];
const setupAccGradeintColor = ['#F06100', '#F04900', '#F03000', '#F00030', '#F0006D'];

const Login = () => {
    const navigation  = useNavigation();
    const onCreateAccountPress = () => {
        Alert.alert("Coming soon...");
    }
    
    const onSignInBusinessPress = () => {
        navigation.navigate("Home");
    }

    const onGoogleSignInPress= () =>{
        console.log("Hello");
    }

    return (
        <View style={styles.mainContainer}>
            <Image style={styles.loginImage} source={login} resizeMode='stretch' />

            <View style={styles.buttonsContainer}>
            <CustomButton gradientColor={setupAccGradeintColor}
                    onPress={onCreateAccountPress}
                    styles={styles.businessButton}
                    textStyles={styles.businessText}
                    text="Create a new account"
                />
                <CustomButton gradientColor={createAccGradeintColor}
                    onPress={onSignInBusinessPress}
                    styles={styles.createAccButton}
                    textStyles={styles.createAccText}
                    text="Go To Next Screen"
                />
                <Pressable onPress={onGoogleSignInPress}>
                <View style={styles.goggleSignInButton}>
                <Image style={styles.googleImage} source={google} resizeMode='stretch' />
                    <Text style={{ color: "#344054", fontSize: 16, fontWeight: 700 }}>Continue with Google</Text>
                </View>
                </Pressable>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 2
    },
    loginImage: {
        height: 360,
        width: "100%"
    },
    text: {
        fontSize: 10,
        fontWeight: "600",
        textAlign: "center",
        color: "#101828",
        marginTop: 55,
    },
    buttonsContainer:{
        marginHorizontal:12,
        marginTop:20
    },
    createAccButton: {
        alignItems: 'center',
        padding:12,
        borderRadius: 5,
        marginBottom:16
    },
    createAccText: {
        fontWeight: "600",
        color: "#F04438",
        fontSize: 14
    },
    businessButton:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5,
        marginBottom:20
    },
    businessText:{
        fontWeight:"800",
        color: "#FFFFFF",
        fontSize: 14 
    },
    goggleSignInButton:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width: "100%",
        marginTop: 8,
        borderRadius:10,
        borderColor:"#D0D5DD",
        borderWidth: 2,
        height:50,
        columnGap:8,
        
    },


});

export default Login;