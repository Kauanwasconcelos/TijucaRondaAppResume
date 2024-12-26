
import axios from 'axios';

const useFetchLocais = async (idRonda) => {
    try {
      console.log(idRonda)
      const response = await axios.get(`http://192.168.9.247:9010/ronda/listLocals`,{
        params: {idRonda: idRonda}
      });
      console.log("aqui estou")
      console.log(response.data)

      return response.data;
    } catch (err) {
      return err
    }
  
};

export default useFetchLocais;
