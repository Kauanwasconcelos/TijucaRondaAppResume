const lerLoginAtual = async realm => {
    let login = await realm.objectForPrimaryKey('loginStatus', 1);
    // const rondaRealmVerify = typeof(ronda)

    if (login === null) {
      realm.write(async () => {
        console.log('caindo aqui');
        const write = await realm.create('loginStatus', {
          _id: 1,
          idUsuario: 0,
          token: "",
          nomedeUsuario: ""
        });
        lerLoginAtual(realm)
      });
    } else {
      return login;
    }
  };

export default lerLoginAtual