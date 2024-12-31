import axios from 'axios';

const url = "http://192.168.9.247:9010/geral/createLog";

const requisicao = async (idUsuario, rondaAtual,valueqr, latitude, longitude) => {
    try {
        console.log(idUsuario)
        const body = {
            idUsuario: idUsuario.idUsuario,
            idRonda: rondaAtual,
            idLocal: valueqr,
            latitude: latitude,
            longitude: longitude
        };
        console.log(body)
        const response = await axios.post("http://192.168.9.247:9010/geral/createLog", body);
        console.log(response.data)
        
        if(response.data.success){
            return true
        }
        else{return false}
    } catch (error) {
        console.log(error)
        return false
        console.error('Error:', error);
    }
};

export default requisicao