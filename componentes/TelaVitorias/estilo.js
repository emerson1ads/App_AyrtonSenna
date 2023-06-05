import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    box1: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        width: 340,
        marginBottom: 50
    },

    tituloBox1: {
        textAlign: "center",
        color: '#fff',
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10
    },
    texto: {
        textAlign: "center",
        color: '#a6a6a6',
        marginBottom: 10
    },

    boxIcones: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    texto1: {
        color: '#eecb01',
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 5
    },
    texto2: {
        color: '#a6a6a6',
        fontSize: 16,
        textTransform: 'uppercase'
    },

    box2: {
        backgroundColor:  'rgba(0,0,0,0.6)',
        marginBottom: 20
    },

    tituloBox2: {
        color: '#fff',
        fontSize: 16,
        margin: 15,
        textAlign: "center"
    },
    img: {
        width: 300,
        height: 200
    }
});

export default estilo;