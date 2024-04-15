import React from "react";
import { View,Text, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ gradientColor, styles, textStyles, text, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient
                colors={gradientColor}
                style={styles}>
                <Text style={textStyles}>{text}</Text>
            </LinearGradient>
        </Pressable>
    )
};

export default CustomButton;