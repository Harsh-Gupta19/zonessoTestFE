import { StyleSheet, View, Text, Image } from "react-native";
const location = require("../assets/location.png");
const search = require("../assets/search.png");
const arrow = require("../assets/arrow_down.png");
import HeaderLeft from "./HeaderLeft";


const Header = () => {
    return (
        <View style={styles.headerContiner}>
            <Text style={{ color: "#1D2939", fontSize: 16, fontWeight: 600 }}> Text ting jjs</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    headerContiner: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Header;