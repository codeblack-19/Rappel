import {StyleSheet} from "react-native"

export const globalStyle = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fefefe',
        padding: 15,
        paddingTop : 5
    },
    search : {
        backgroundColor : '#eee',
        marginBottom: 5,
        marginLeft: 2,
        marginRight: 2,
        borderRadius: 10,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        padding: 5,
    },
    searchBox : {
        height : 30,
        width : '90%',
        marginLeft: 5,
        fontSize: 17,
        color: 'gray'
    }, searchIcon : {
        marginLeft: 5,
        marginRight: 5,
        color: 'gray'
    },
    mainArea : {
        flex : 1,
    }, header : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 7,
    }, headerText : {
        fontSize: 24,
        fontWeight : 'bold',
        color: '#AF5B60',
        paddingRight: 5,
    }, BottomBar :{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, BottomBarbottom: {
        width: '48%',
        backgroundColor: '#AF5B60',
        padding: 10,
        borderRadius: 15,
    }, BottomBarbottomText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
})