import React from "react";
import { Text, View, Button, StyleSheet, Alert } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>This is a footer</Text>
            <Button title="Click me!" onPress={() => Alert.alert("Button clicked", "This button does nothing!")} />
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Footer;