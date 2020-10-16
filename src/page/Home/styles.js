import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heroes:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2.4,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 12,
        marginBottom: 40,
        elevation: 3,
    },
    texto:{
       fontSize: 40,
    },
    foto: {
        height: 300, width: 300, borderRadius: 25
    },
    ScrollView:{
        marginTop: '11%',
    }
});

export default styles;