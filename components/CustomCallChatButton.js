import { View, StyleSheet, Platform, Alert, Linking } from 'react-native'
import CustomButton from './CustomButton';

const chatGradientColor = ['#FFEEED', '#FFEEED'];
const callGradeintColor = ['#F06100', '#F04900', '#F03000', '#F00030', '#F0006D'];  
const CustomCallChatButton = () => {
    const onChatPress = () => {
        Alert.alert("Coming soon...");
    }

    const onCallPress = () => {
        if (Platform.OS === 'android') {
            Linking.openURL("tel:0544021112");
        } else {
            Linking.openURL("telprompt:0544021112");
        }
    }
    return (
        <View style={styles.buttonsContainer}>
            <CustomButton gradientColor={chatGradientColor}
                onPress={onChatPress}
                styles={styles.chatButton}
                textStyles={styles.chatText}
                text="Chat"
            />
            <CustomButton gradientColor={callGradeintColor}
                onPress={onCallPress}
                styles={styles.callButton}
                textStyles={styles.callText}
                text="Call"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        marginBottom: 14,
        flexWrap: "wrap",
        alignContent: "stretch",
        height: 30,
        columnGap: 8,
    },
    chatButton: {
        alignItems: 'center',
        padding: 6,
        borderRadius: 5,
    },
    chatText: {
        fontWeight: "600",
        color: "#F04438",
        fontSize: 14
    },
    callButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        borderRadius: 5,
    },
    callText: {
        fontWeight: "800",
        color: "#FFFFFF",
        fontSize: 14
    }
});

export default CustomCallChatButton;