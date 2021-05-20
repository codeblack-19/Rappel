import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Tones from '../Components/SettingsCompo/Tones';
import { TaskInfoStyles } from "../Stylsheets/TaskInfo"

export default function Settings({navigation}) {

    const preshandler = () => {
        navigation.goBack()
    }

  return (
    <View style={TaskInfoStyles.container}>
      <View style={TaskInfoStyles.header}>
        <Text style={TaskInfoStyles.textheading}>
          Setting
        </Text>
        <TouchableOpacity style={TaskInfoStyles.headerbutton} onPress={preshandler}>
          <Text style={TaskInfoStyles.headerbtntext}>
            Done
          </Text>
        </TouchableOpacity>
        <View style={TaskInfoStyles.headerCurve}>
          <View style={TaskInfoStyles.curve}>
          </View>
        </View>
      </View>

      <ScrollView
        style={{ marginTop: -20, padding: 15}}
      >

        {/* tone selection */}
        <Tones />

      </ScrollView>
    </View>
  );
}