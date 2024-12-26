import axios from 'axios';

const idUsuario = 1;
const idRonda = 132;
const idLocal = 1;
const latitude = 1;
const longitude = 1;

const url = "http://192.168.9.247:9010/geral/createLo";

const requisicao = async (idUsuario, rondaAtual,valueqr, latitude, longitude, idRonda) => {
    const body = {
        idUsuario: idUsuario,
        idRonda: idRonda,
        idLocal: idLocal,
        latitude: latitude,
        longitude: longitude
    };

    try {
        const response = await axios.post(url, body);
        if(response.data.success){
            return true
        }
        else{return false}
    } catch (error) {
        return false
        console.error('Error:', error);
    }
};

export default requisicao