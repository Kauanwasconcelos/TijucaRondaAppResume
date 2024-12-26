const ronda = require ('../../../rondaRealm.json')
const login = require("../../../loginRealm.json")
import Realm from 'realm';

const initializeRealm = async () => {
    try {
      const realmInstance = await Realm.open({
        path: 'tijucaRonda',
        schema: [ronda, login],
      });
      
      return realmInstance
    } catch (e) {
      console.log(e);
    }
  };

  export default initializeRealm;