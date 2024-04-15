import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Badge = ({ title, category}) => {
    const premium = ['#F06100', '#F04900', '#F03000', '#F00030', '#F0006D'];
    const featured = ['#0BA5EC', '#0BA5EC'];
    const gradientColor = category === "Premium"? premium: featured;
    return (<LinearGradient
        colors={gradientColor}
        style={{ justifyContent: 'center', alignItems: 'center', padding: 6, borderRadius: 5, width:94,
        hight:18, }}>
    <Text style={{fontWeight:"600" ,color: "white", fontSize: 14 }}>{title}</Text>
    </LinearGradient>
    )
};

export default Badge;