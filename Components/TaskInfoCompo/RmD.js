import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React, { useState } from "react"
import {Switch, View, Text, TouchableOpacity} from "react-native"
import {RMD} from "../../Stylsheets/TaskInfo"
import DateTimePicker from "@react-native-community/datetimepicker"

export default function RmD(){
    const [rmd, setrmd] = useState(false)
    const [openDt, setopdt] = useState(false)
    const [date, setdate] = useState(`mm/dd/yy`);
    const [time, setime] = useState("00:00:00");

    const handleRmdChange = () =>{
        if(openDt){
            setopdt(false);
        }

        setdate('mm/dd/yy');
        setime('00:00:00');
        setrmd(!rmd)
    }

    return(
        <View style={RMD._rmD}>
            <View style={RMD._rmDhead}>
                <Text style={RMD._rmDheadtext}>
                    Remind me on a day
                </Text>
                <Switch 
                    value={rmd} 
                    onValueChange={() => handleRmdChange()} 
                    trackColor={{ true: '#AF5B60'}}
                />
            </View>
            {
                rmd ? (
                    <View style={RMD._rmD_dt}>
                        <View style={RMD._rmD_dt_b}>
                            <TouchableOpacity style={RMD._rmD_dt_b_tch} onPress={() => setopdt(!openDt)}>
                                <Text style={RMD._rmD_dt_b_text}>
                                    Select data and time
                                </Text>
                                <FontAwesomeIcon icon={faCalendarAlt} style={RMD._rmD_dt_b_text_icon} size={25} />
                            </TouchableOpacity>
                        </View>
                        {
                            openDt ? (
                                <View style={RMD._rmD_dt_dp_bx}>
                                    <DateTimePicker
                                        value={new Date()}
                                        mode='date'
                                        display='default'
                                        style={RMD._rmD_dt_dp}
                                        onChange={(event, value) => setdate(new Date(value).toDateString())}
                                    />
                                    <DateTimePicker
                                        value={new Date()}
                                        mode='time'
                                        display='default'
                                        style={RMD._rmD_dt_dp_2}
                                        onChange={(event, value) => setime(new Date(value).toLocaleTimeString())}
                                    />
                                </View>
                            ) : <View></View>
                        }

                        <Text style={RMD._rmD_dt_sel}>
                            {date} {time}
                        </Text>
                    </View>
                ) : <View></View>
            }
            
        </View>
    )
}