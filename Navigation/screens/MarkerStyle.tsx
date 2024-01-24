import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export const MarkerStyle = StyleSheet.create({
    header: {
        borderColor: "#efe4be", 
        borderWidth: 5, 
        borderRadius: 15, 
        marginTop: -25, 
        marginBottom: 10, 
        backgroundColor: 'rgb(88, 141, 152)', 
        maxWidth: width/1.2, 
        shadowOpacity: 0.3, 
        shadowRadius: 20
    },
    headerText: {
        padding: 10, 
        fontFamily: "Times New Roman", 
        fontSize: 30, 
        alignSelf: "center", 
        color: "white"
    },
    button: {
        borderColor: "#efe4be", 
        borderWidth: 3, 
        borderRadius: 15, 
        backgroundColor: "rgb(217, 81, 31)", 
        maxWidth: width/1.2,
        marginBottom: 10, 
        marginTop: 10, 
        marginLeft: 5, 
        shadowOpacity: 0.3, 
        shadowRadius: 10,
        width: width/3.2
    },
    buttonText: {
        padding: 5, 
        paddingVertical: 10,
        fontFamily: "Times New Roman", 
        fontSize: 20, 
        alignSelf: "center", 
        color: "white"
    },
    modal: {
        display: 'flex', 
        backgroundColor: "#efe4be", 
        margin: 30, 
        marginTop: 250, 
        padding: 15, 
        borderRadius: 10, 
        width: width/1.15, 
        maxHeight: height/2, 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center'
    },
    pagination: {
        backgroundColor: 'grey', 
        maxHeight: height/16, 
        maxWidth: width/6, 
        alignSelf: 'flex-end', 
        marginRight:10, 
        marginTop: -50, 
        borderRadius: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 17,
        padding: 5
    },
    image: {
        top: 0,
        resizeMode: "stretch",
        height: height*0.4, 
        width: width,
    },
    mapView: {
        display: 'flex', 
        backgroundColor: "#efe4be", 
        margin: 30, 
        marginTop: 120, 
        padding: 5, 
        borderRadius: 10, 
        width: width/1.1, 
        maxHeight: height/1.28, 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center'
    },
    map: {
        resizeMode: "stretch",
        height: height*0.47, 
        width: width * 0.8,
        borderRadius: 10,
    }
})
