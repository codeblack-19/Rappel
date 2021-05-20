import React, { useState } from "react"
import {RMD, RML} from "../../Stylsheets/TaskInfo"
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Switch, View, Text, TouchableOpacity } from "react-native"
import MapView from "react-native-maps"

export default function RmL() {
    const [rml, setrml] = useState(false)
    const [openlc, setlc] = useState(false)

    const handleRmdChange = () => {
        if(openlc){
            setlc(false)
        }
        setrml(!rml)
    }

    return(
        <View style={RML._rmL}>
            <View style={RMD._rmDhead}>
                <Text style={RMD._rmDheadtext}>
                    Remind me at a location
                </Text>
                <Switch
                    value={rml}
                    onValueChange={() => handleRmdChange()}
                    trackColor={{ true: '#AF5B60' }}
                />
            </View>
            {
                rml ? (
                    <View>
                        <View style={RMD._rmD_dt_b}>
                            <TouchableOpacity style={RMD._rmD_dt_b_tch} onPress={() => setlc(!openlc)} >
                                <Text style={RMD._rmD_dt_b_text}>
                                    Pick a location
                        </Text>
                                <FontAwesomeIcon icon={faMapMarkedAlt} style={RMD._rmD_dt_b_text_icon} size={25} />
                            </TouchableOpacity>
                        </View>
                        {
                            openlc ? (
                                <View>
                                    <MapView style={RML._rmL_map} />
                                </View>
                            ) : (
                                <View></View>
                            )
                        }

                    </View>
                ) : (
                    <View></View>
                )
            }
        </View>
    )
}