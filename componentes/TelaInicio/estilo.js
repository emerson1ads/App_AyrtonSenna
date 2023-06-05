import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    fundo: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20
    },
    img: {
        width: 250,
        height: 250,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#202020',
        marginBottom: 50
    },

    box: {
        width: 340,
        backgroundColor: 'rgba(0,0,0,0.9)',
        borderRadius: 20,
        alignItems: "center",
        paddingVertical: 10
    },
    titulo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },

    texto: {
        color: '#a6a6a6',
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 10
    }
});

export default estilo;