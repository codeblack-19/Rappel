import React, { useContext } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {globalStyle} from "../Stylsheets/Globals"
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Tasks from '../Components/tasks';
import AddtaskModel from '../Components/addTaskModel';
import Context from '../Components/TaskmodelContext';

export default function Home({navigation}) {
  const [task, settask] = useContext(Context)
    const preshandler = () => {
        navigation.push('Settings')
    }

    // function searchtask(e){
    //   settask((prev) => {
    //     return prev.filter((data) => data.name === e);
    //   })

    // }

  return (
    <View style={globalStyle.container}>
        <View style={globalStyle.search}>
            <FontAwesomeIcon icon={faSearch} style={globalStyle.searchIcon}/>
            <TextInput
                style={globalStyle.searchBox}
                placeholder = {"Search"}
                // onChangeText = {(e) => searchtask(e)}
            />
        </View>

        <View style={globalStyle.mainArea}>
          <View style={globalStyle.header}>
            <Text style={globalStyle.headerText} >
              Tasks
            </Text>
            <Text style={globalStyle.headerText}>
              {task.length}
            </Text>
          </View>

          <Tasks navigation={navigation} />
          
        </View>
        
        <View style={globalStyle.BottomBar}>

          <AddtaskModel />
          <TouchableOpacity style={globalStyle.BottomBarbottom} onPress={preshandler}>
            <Text style={globalStyle.BottomBarbottomText}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

