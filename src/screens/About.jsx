import React from "react";
import { Text, View} from "react-native";
import MainLayout from '../layouts/MainLayout';

function About({ navigation }) {
  return (
    <MainLayout>
        <View>
            <Text>This is an about screen</Text>
        </View>
    </MainLayout>
  )
};

export default About;