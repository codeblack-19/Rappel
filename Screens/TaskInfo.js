import React from "react"
import {View, Text, TouchableOpacity, ScrollView} from "react-native"
import RmD from "../Components/TaskInfoCompo/RmD"
import RmL from "../Components/TaskInfoCompo/RmL"
import {TaskInfoStyles} from "../Stylsheets/TaskInfo"
import MakeNote from "../Components/TaskInfoCompo/Note"

export default function TaskDetailScreen({navigation}){
    const preshandler = () => {
        navigation.goBack()
    }

    return (
        <View style={TaskInfoStyles.container}>
            <View style={TaskInfoStyles.header}>
                <Text style={TaskInfoStyles.textheading}>
                    {navigation.getParam('name')}
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
            
            <ScrollView style={{marginTop: -20}}
                keyboardShouldPersistTaps = {'handled'}
            >
                {/* remaind me on a day */}
                <RmD />

                {/* remind me at location */}
                <RmL />

                {/* short note */}
                <MakeNote />
            </ScrollView>
        </View>
    );
}

