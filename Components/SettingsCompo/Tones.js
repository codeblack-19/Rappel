import { faBell, faCheck, faPlay, faStop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React, { useState } from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import { MainSetting } from "../../Stylsheets/Settings"
import { RMD } from "../../Stylsheets/TaskInfo"
import { Audio } from "expo-av"
import { useEffect } from "react"

export default function Tones(){
    const [tone, settone] = useState('001')
    const [sound, setsound] = useState('');

    async function playtone1(){
        
        const { sound } = await Audio.Sound.createAsync(
            require(`../AudioCompo/Squeaky-toy-sound-effect.mp3`)
        )

        setsound(sound)

        await sound.playAsync();
    }

    async function playtone2() {

        const { sound } = await Audio.Sound.createAsync(
            require(`../AudioCompo/Car-crash-sound-effect.mp3`)
        )

        setsound(sound)

        await sound.playAsync();
    }

    useEffect(() => {
        return sound 
            ? () => {
                sound.unloadAsync()
            } : undefined
    },[sound])

    return(
        <View style={MainSetting.toneContainer}>
            <View style={RMD._rmDhead}>
                <Text style={MainSetting.heading}>
                    Select a tone
                </Text>
                
                <FontAwesomeIcon icon={faBell} size={25} style={MainSetting.bellicon}/>
            </View>
            
            <View>
                <View style={MainSetting._a_tone_default} >
                    <TouchableOpacity style={MainSetting._name_tick} onPress={() => settone('001')}>
                        {
                            tone === '001' ? (
                                <FontAwesomeIcon icon={faCheck} size={20} style={{ marginRight: 5, marginLeft: 5 }} color={'#AF5B60'} />
                            ) : (
                                <Text></Text>
                            )
                        }
                        <Text style={{ fontSize: 19, fontWeight: '500', color: '#AF5B60', marginLeft: 5}}>
                            Squeaky toy
                        </Text>
                    </TouchableOpacity>
                    
                    <View style={MainSetting.controllbtns}>
                        <TouchableOpacity onPress={() => { playtone1() }}>
                            <FontAwesomeIcon icon={faPlay} size={25} color={'#AF5B60'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faStop} size={25} color={'#AF5B60'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={MainSetting._a_tone_default} >
                    <TouchableOpacity style={MainSetting._name_tick} onPress={() => settone('002')} >
                        {
                            tone === '002' ? (
                                <FontAwesomeIcon icon={faCheck} size={20} style={{ marginRight: 5, marginLeft: 5 }} color={'#AF5B60'} />
                            ) : (
                                <Text></Text>
                            )
                        }
                        <Text style={{ fontSize: 19, fontWeight: '500', color: '#AF5B60', marginLeft: 5 }}>
                            Car crash
                        </Text>
                    </TouchableOpacity>

                    <View style={MainSetting.controllbtns}>
                        <TouchableOpacity onPress={() => { playtone2() }}>
                            <FontAwesomeIcon icon={faPlay} size={25} color={'#AF5B60'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faStop} size={25} color={'#AF5B60'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}