import { StyleSheet } from "react-native"

export const TaskInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow : 'scroll'
    },header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingTop : 35,
        paddingBottom: 0,
        backgroundColor: '#AF5B60',
        borderBottomRightRadius : 0
    }, textheading : {
        fontSize: 25,
        color: '#fff',
        paddingLeft: 10,
    }, headerbutton : {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 5,
        marginRight: 10,
    }, headerbtntext: {
        fontSize: 20
    }, headerCurve:{
        width: '100%',
        backgroundColor: '#AF5B60',
    }, curve : {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        marginTop: 20,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
    }
})

export const RMD = StyleSheet.create({
     _rmD: {
        paddingLeft: 15,
        paddingRight: 15,
        // marginTop: -25,
        marginBottom: 25
    }, _rmDhead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#AF5B60',
        borderBottomWidth: 1.5,
        paddingTop: 5,
        paddingBottom: 13
    }, _rmDheadtext: {
        fontSize: 20
    }, _rmD_dt : {
    }, _rmD_dt_b: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 5,
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: .4,
        borderRadius: 5
    }, _rmD_dt_b_tch : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, _rmD_dt_b_text : {
        color: '#AF5B60',
        fontSize: 22
    }, _rmD_dt_b_text_icon : {
        color: '#AF5B60',
        marginRight: 5
    }, _rmD_dt_dp_bx : {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }, _rmD_dt_dp : {
        width: '60%',
    }, _rmD_dt_dp_2: {
        width: '40%'
    }, _rmD_dt_sel : {
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'right',
        fontSize: 17,
        color: '#AF5B60'
    }
})

export const RML = StyleSheet.create({
    _rmL: {
        paddingLeft: 15,
        paddingRight: 15,
    }, _rmL_map : {
        marginTop: 12,
        width: '100%',
        height: 300
    }
})

export const Note = StyleSheet.create({
    _notebx: {
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15
    }, _notehead : {
        fontSize : 17
    }, _note_input : {
        marginTop: 5,
        marginBottom : 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 13,
        paddingRight: 13,
        shadowColor: 'grey',
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: .4,
        borderRadius: 5,
        backgroundColor: 'white',
        minHeight: 250,
        fontSize : 18
    }
})