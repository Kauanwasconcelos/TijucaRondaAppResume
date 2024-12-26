const defineLoginAtual = async (realm, idUsuario) => {
    let login = await realm.objectForPrimaryKey('loginStatus', 1);
    // let ronda = await realm.objects("ronda")
    
    if (!login) {
      realm.write(async () => {
        console.log('caindo aqui');
        const write = await realm.create('rondaStatus', {
          _id: 1,
          status: 0,
        });
        console.log(write);
        console.log('teste');
        login.idUsuario = idUsuario;
      });
    } else {
      realm.write(() => {
        login.idUsuario = idUsuario;
      });
    }
  };
  
  export default defineLoginAtual;
  