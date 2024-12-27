const lerLoginAtual = async realm => {
    let login = await realm.objectForPrimaryKey('loginStatus', 1);
    // const rondaRealmVerify = typeof(ronda)
    console.log(login)
    if (login === null) {
      realm.write(async () => {
        console.log('caindo aqui');
        const write = await realm.create('loginStatus', {
          _id: 1,
          idUsuario: 0,
        });
        lerLoginAtual()
      });
    } else {
      return login.idUsuario;
    }
  };

export default lerLoginAtual