import React, {} from "react"
import { TextInput, View, Text } from "react-native"
import {Note} from "../../Stylsheets/TaskInfo"

export default function MakeNote(){
    return (
        <View style={Note._notebx}>
            <Text style={Note._notehead} >
                Make a short note
            </Text>
            <TextInput
                style={Note._note_input}
                multiline={true}
                placeholder = 'type here ....'
            />
        </View>
    )
}