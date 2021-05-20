import {StyleSheet} from "react-native"

export const addtaskstyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, modalView :{
        marginTop: 22,
        borderRadius: 20,
        padding: 20,
        // alignItems: "center",
        shadowColor: "#000",
        backgroundColor: "white",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
    }, addtaskbox : {
        // width: 100,
    }, taskboxName : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 19,
        // width: '100%'
    }, taskboxInput : {
        marginTop : 5,
        // width: 100,
        fontSize: 17,
        color: 'gray',
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    }, modelButtons: {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }, modelButton : {
        width: '45%',
        backgroundColor: '#AF5B60',
        padding: 10,
        borderRadius: 15,
    }, modalbuttontext : {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }, error : {
        color: 'red',
        textAlign: 'center',
        margin: 5,
    }
})