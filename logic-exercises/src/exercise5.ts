
let formataOsSegundos = new Date(null)
formataOsSegundos.setSeconds(3868)
const quantoTempoOtempoTem = formataOsSegundos.toISOString().substr(11,8)

console.log(quantoTempoOtempoTem)