const lerLoginAtual = async realm => {
  try {
    let login = await realm.objectForPrimaryKey('loginStatus', 1);
    // const rondaRealmVerify = typeof(ronda)
    // return login
    console.log(login);
    console.log('login realm');
    if (login === null) {
      await realm.write(async () => {
        console.log('caindo aqui');
        const write = await realm.create('loginStatus', {
          _id: 1,
          idUsuario: 0,
          token: '',
          nomedeUsuario: '',
        });
      });
    } else {
      return login;
    }
  } catch (e) {
    console.log(e + 'LOGIN l');
  }
};

export default lerLoginAtual;
