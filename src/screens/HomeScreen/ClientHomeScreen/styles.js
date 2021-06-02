import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7a205'
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#ffba3b',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    text: {
        color: '#101010',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 60
    },
    titleText: {
        fontFamily: 'sans-serif-light',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 30
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    TextInput: {
        borderRadius: 10,
        margin: 10,
        color: '#000',
        borderColor: 'white',
        backgroundColor: '#FFF',
        borderWidth: 1,
        height: 55,
        width: 20,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    scrollView: {
        backgroundColor: '#f0b11f',
        marginHorizontal: 10,
        alignContent: 'center',
        width: 350
      },
    Card: {
        width: 300,
        height: 400,
        backgroundColor: '#f5f3eb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        color: '#f0b11f',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 