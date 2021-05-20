import React, {useState, useContext} from "react"
import {
    View,
    Text, 
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
} from "react-native"

import {globalStyle} from "../Stylsheets/Globals"
import {addtaskstyles} from "../Stylsheets/AddtaskmodelStyles"
import Context from "./TaskmodelContext";

export default function AddtaskModel(){
    const [modalVisible, setModalVisible] = useState(false);
    const [tast, settask] = useContext( Context )
    const [error, setError] = useState("")

    const [taskname, settaskname] = useState("")

    const addtask = () => {
        if(taskname === ""){
            return setError("Task name is required")
        }else{
            var id = Math.floor((Math.random() * 100) + 1);

            settask((prev) => {
                return [
                    ...prev, {
                        key: id.toString(),
                        name: taskname
                    }
                ]
            })

            closemodal()
        }
    }

    const closemodal = () => {
        settaskname("")
        setError("")
        setModalVisible(false)
    }

    return(
        <View style={globalStyle.BottomBarbottom}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={addtaskstyles.centeredView}>
                    <View style={addtaskstyles.modalView}>
                        <View style={addtaskstyles.addtaskbox}>
                            <Text style={addtaskstyles.taskboxName}>
                                Task Name
                            </Text>
                            {
                                error ? (
                                    <Text style={addtaskstyles.error}>
                                        {error}
                                    </Text>
                                ) : (
                                    <Text></Text>
                                )
                            }
                            <TextInput
                                style={addtaskstyles.taskboxInput}
                                placeholder={"type your task"}
                                onChangeText={(e) => settaskname(e)}
                            />
                        </View>
                        <View style={addtaskstyles.modelButtons}>
                            <TouchableOpacity
                                onPress={() => {
                                    addtask()
                                }}
                                style={addtaskstyles.modelButton}
                            >
                                <Text style={addtaskstyles.modalbuttontext}>Add</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    closemodal()
                                }}
                                style={addtaskstyles.modelButton }
                            >
                                <Text style={addtaskstyles.modalbuttontext}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity 
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={globalStyle.BottomBarbottomText}>
                    Add task
                </Text>
            </TouchableOpacity>

        </View>
    )
}

