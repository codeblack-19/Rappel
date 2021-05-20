import { faBell, faCheck, faPlay, faStop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React, { useState } from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import { MainSetting } from "../../Stylsheets/Settings"
import { RMD } from "../../Stylsheets/TaskInfo"

export default function Tones(){
    const [tone, settone] = useState('001')
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
                            Jingle bell
                        </Text>
                    </TouchableOpacity>
                    
                    <View style={MainSetting.controllbtns}>
                        <TouchableOpacity>
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
                            Umbrella
                        </Text>
                    </TouchableOpacity>

                    <View style={MainSetting.controllbtns}>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faPlay} size={25} color={'#AF5B60'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faStop} size={25} color={'#AF5B60'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={MainSetting._a_tone_default} >
                    <TouchableOpacity style={MainSetting._name_tick} onPress={() => settone('003')}>
                        {
                            tone === '003' ? (
                                <FontAwesomeIcon icon={faCheck} size={20} style={{ marginRight: 5, marginLeft: 5 }} color={'#AF5B60'} />
                            ) : (
                                <Text></Text>
                            )
                        }
                        <Text style={{ fontSize: 19, fontWeight: '500', color: '#AF5B60', marginLeft: 5 }}>
                            He's a pirate
                        </Text>
                    </TouchableOpacity>

                    <View style={MainSetting.controllbtns}>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faPlay} size={25} color={'#AF5B60'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faStop} size={25} color={'#AF5B60'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={MainSetting._a_tone_default} >
                    <TouchableOpacity style={MainSetting._name_tick} onPress={() => settone('004')}>
                        {
                            tone === '004' ? (
                                <FontAwesomeIcon icon={faCheck} size={20} style={{ marginRight: 5, marginLeft: 5 }} color={'#AF5B60'} />
                            ) : (
                                <Text></Text>
                            )
                        }
                        <Text style={{ fontSize: 19, fontWeight: '500', color: '#AF5B60', marginLeft: 5 }}>
                            Singing One
                        </Text>
                    </TouchableOpacity>

                    <View style={MainSetting.controllbtns}>
                        <TouchableOpacity>
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