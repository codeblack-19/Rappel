import React, { useState, useContext } from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
} from "react-native"

import { globalStyle } from "../Stylsheets/Globals"
import { addtaskstyles } from "../Stylsheets/AddtaskmodelStyles"
import { TaskStyle } from "../Stylsheets/Tasks"
import Context from "./TaskmodelContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function UpdateTaskModal({item}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [task, settask] = useContext(Context)
    const [error, setError] = useState("")

    const [taskname, settaskname] = useState("")

    const updatetask = () => {
        if (taskname === "") {
            return setError("Task name is required")
        } else {
            settask((prevtasks) => {
                return prevtasks.filter(data => data.key != item.key)
            })

            settask((prev) => {
                return [
                    ...prev, {
                        key : item.key,
                        name : taskname
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

    return (
        <>
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
                                Update Task name
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
                                defaultValue={item.name}
                                onChangeText={(e) => settaskname(e)}
                            />
                        </View>
                        <View style={addtaskstyles.modelButtons}>
                            <TouchableOpacity
                                onPress={() => {
                                    updatetask()
                                }}
                                style={addtaskstyles.modelButton}
                            >
                                <Text style={addtaskstyles.modalbuttontext}>Update</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    closemodal()
                                }}
                                style={addtaskstyles.modelButton}
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
                <FontAwesomeIcon icon={faEdit} style={TaskStyle.updateIcon} size={29} />
            </TouchableOpacity>
        </>
    )
}

