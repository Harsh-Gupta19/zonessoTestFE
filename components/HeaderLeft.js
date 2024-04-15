import { StyleSheet, View, Text, Pressable, Platform, Image } from "react-native";
const location = require("../assets/location.png");
const arrow = require("../assets/arrow_down.png");

const HeaderLeft = () => {
    return (
        <View style={styles.headerContiner}>
            <View style={styles.locationContainer}>
                <Image style={styles.locationImage} source={location} resizeMode='stretch' />
                <Text style={{ color: "#1D2939", fontSize: 16, fontWeight: 600 }}> Dubai </Text>
                <Image style={styles.arrowImage} source={arrow} resizeMode='stretch' />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    headerContiner: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        marginLeft:26,

        alignItems: "center",
        // marginBottom:16
    },
    locationContainer: {
        flexDirection: "row",
        rowGap: 4
    },
    locationImage: {
        width: 20,
        height: 20
    },
    arrowImage: {
        width: 16,
        height: 16,
        alignSelf: "center"
    },
});

export default HeaderLeft;