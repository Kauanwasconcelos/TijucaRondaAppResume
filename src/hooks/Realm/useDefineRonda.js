const lerRondaAtual = async realm => {
  let ronda = await realm.objectForPrimaryKey('rondaStatus', 1);
  // const rondaRealmVerify = typeof(ronda)
  console.log(ronda)
  console.log("ronda realm")

  if (ronda === null) {
    console.log("CAI NA RONDAAA222")
    realm.write(async () => {
      console.log('caindo aqui');
      const write = await realm.create('rondaStatus', {
        _id: 1,
        status: 0,
      });
      lerRondaAtual()
    });
  } else {
    console.log("CAI NA RONDAAA")
    return ronda.status;
  }
};

export default lerRondaAtual; // Exportando a função como default
