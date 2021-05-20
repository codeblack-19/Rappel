import {StyleSheet} from 'react-native'

export const TaskStyle = StyleSheet.create({
    holdBox: {
        marginTop: 5,
        marginLeft: 1,
        marginRight: 1,
        marginBottom: 5,
        paddingBottom: 5,
        height: '90%',
    }, taskview : {
        alignItems: 'center',
        paddingTop: 13,
        paddingBottom: 13,
        marginLeft: 7,
        marginRight: 7,
        marginTop: 5,
        marginBottom: 8,
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: .5,
        borderRadius: 10
    }, taskname : {
        fontSize : 23,
        // fontWeight: 'bold',
        height: 30,
        width: '80%'
    }, tasksetting : {
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, tasksettingIcon: {
        color: '#AF5B60',
    }, _du_Button : {
        display: 'flex',
        justifyContent: 'center',
    }, deleteIcon: {
        color : "red",
        marginRight: 7
    }, updateIcon : {
        color: "green",
        marginLeft: 7,
    }
})