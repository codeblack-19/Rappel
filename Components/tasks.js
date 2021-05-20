import React, {useState, useContext} from "react"
import {Alert, FlatList, TextInput, TouchableOpacity, View, Text} from "react-native"
import {TaskStyle} from "../Stylsheets/Tasks"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Context from "./TaskmodelContext"
import Swipeable from "react-native-gesture-handler/Swipeable"


export default function Tasks({navigation}){
    const [tasks, settasks] = useContext(Context)
    
    function removeTask (key){
        settasks((prevtasks) => {
            return prevtasks.filter(data => data.key != key)
        })
    }

    function swipeLeftswipe(id){
        return (
            <View style={TaskStyle._du_Button}>
                <TouchableOpacity onPress={() => removeTask(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} style={TaskStyle.deleteIcon} size={29} />
                </TouchableOpacity>
            </View>
        )
    }

    function swipeRightswipe(id){
        return (
            <View style={TaskStyle._du_Button}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faEdit} style={TaskStyle.updateIcon} size={29} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={TaskStyle.holdBox}>
            <FlatList  
                data = {tasks}
                renderItem = {({item}) => 
                    <Swipeable 
                        renderLeftActions={() => swipeLeftswipe(item.key)}  
                        renderRightActions={() => swipeRightswipe(item.key)}
                    >
                        <View style={TaskStyle.taskview}>
                            <TouchableOpacity style={TaskStyle.tasksetting}
                                onPress={() => {
                                    navigation.navigate('TaskDetail', item)
                                }}
                            >
                                <Text
                                    style={TaskStyle.taskname}>
                                    {item.name}
                                </Text>
                                <FontAwesomeIcon icon={faArrowRight} style={TaskStyle.tasksettingIcon} size={19} />
                            </TouchableOpacity>
                        </View>
                    </Swipeable>
                }
            />
        </View>
    )
}