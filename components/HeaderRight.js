import { StyleSheet, View, Text, Pressable, Platform, Image, Alert, ScrollView } from "react-native";
const search = require("../assets/search.png");

const HeaderRight = (display) => {
    return (
        <View >
            <Image style={styles.locationImage} source={search} resizeMode='stretch' />
        </View>
    )
};
const styles = StyleSheet.create({
    headerContiner: {
        height: "100%",
        width: "100%",
    },
    locationImage: {
        width: 20,
        height: 20,
    },
});

export default HeaderRight;