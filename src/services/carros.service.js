const bdConexao = require('../bdConexao/bdConexao.js')

const findAllService = () => {
  return new Promise((aceito, rejeitado)=>{
    bdConexao.query('SELECT * FROM carros', (error, results)=>{
      if(error){
        rejeitado(error)
        return
      }else{
        aceito(results)
      }
    })
  })
}

const findOneByPlacaService = (placa) => {
  return new Promise((aceito, rejeitado)=>{
    bdConexao.query('SELECT * FROM carros WHERE placa = ?',[placa], (error, results)=>{
      if(error){
        rejeitado(error)
        return
      }else{
        aceito(results)
      }
    })
  })
}

const findOneByIdService = (id) => {
  return new Promise((aceito, rejeitado)=>{
    bdConexao.query('SELECT * FROM carros WHERE idcarros = ?',[id], (error, results)=>{
      if(error){
        rejeitado(error)
        return
      }else{
        aceito(results)
      }
    })
  })
}

const createService = (body) => {
  return new Promise((aceito, rejeitado)=>{
    bdConexao.query('INSERT INTO carros SET ?', body, (error, results)=>{
      if(error){
        rejeitado(error)
        return
      }else{
        aceito(results)
      }
    })
  })
} 

const updateService = (id, body) => {
  return new Promise((aceito, rejeitado)=>{
    bdConexao.query('UPDAte carros SET placa = ?, cor = ? WHERE idcarros = ?',
      [body.placa, body.cor, id], (error, results)=>{
      if(error){
        rejeitado(error)
        return
      }else{
        aceito(results)
      }
    })
  })
} 

const removeService = (id) => {
  return new Promise((aceito, rejeitado)=>{
    bdConexao.query('DELETE FROM carros WHERE idcarros = ?',[id], (error, results)=>{
      if(error){
        rejeitado(error)
        return
      }else{
        aceito(results)
      }
    })
  })
}

module.exports = {
    findAllService,
    findOneByPlacaService,
    findOneByIdService,
    createService,
    updateService,
    removeService
}