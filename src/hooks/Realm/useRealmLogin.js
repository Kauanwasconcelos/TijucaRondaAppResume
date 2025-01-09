const defineLoginAtual = async (realm, idUsuario, token, nomedeUsuario) => {
    let login = await realm.objectForPrimaryKey('loginStatus', 1);
    
    
    if (!login) {
      await realm.write(async () => {
        console.log('caindo aqui');
        console.log(token)
        const write = await realm.create('loginStatus', {
          _id: 1,
          idUsuario: 0,
          token: "",
          nomedeUsuario: ""
        });
        // console.log(write);
        // console.log('teste');
        login.idUsuario = idUsuario;
        login.token = token,
        login.nomedeUsuario = nomedeUsuario;
      });
    } else {
      realm.write(() => {
        console.log("CAINDO NESSE ELSE")
        login.idUsuario = idUsuario;
        login.token = token,
        login.nomedeUsuario = nomedeUsuario;
      });
    }
  };
  
  export default defineLoginAtual;
  