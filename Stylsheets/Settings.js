import {StyleSheet} from "react-native"

export const MainSetting = StyleSheet.create({
    toneContainer : {
    }, heading: {
        color: '#AF5B60',
        fontSize: 23, 
        marginLeft: 5
    } , bellicon: {
        color: '#AF5B60',
        marginRight : 10
    }, _a_tone_default: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: .4,
        borderRadius: 5
    }, _name_tick : {
        display: 'flex', 
        flexDirection: 'row',
        width: 200,
        alignItems: 'center'
    }, controllbtns: {
        display: 'flex',
        flexDirection: 'row',
        width: '35%',
        justifyContent: 'space-evenly'
    }
})