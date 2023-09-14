const bitacora = [
    {
        id:1,
        titulo: 'Registro',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual: {
                    id: 1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se ingresaron nuevos datos en la tabla persona'

    },
    {
        id:1,
        titulo: 'Modificacion',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [
                    {
                        id: 1,
                        nombres: 'Juan',
                        apellidos: 'Hernandez'
                    }
                ],
                actual: {
                    id: 1,
                    nombres: 'Juann Carlos',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se modificaron datos en la tabla persona'

    }
]


for (const{titulo, detalles:{hora,fecha},descripcion} of bitacora){
console.log(hora,fecha,titulo,descripcion)
}

function des([{titulo,descripcion}] ) {

        return `${titulo} 
${descripcion}`
    
}

console.log(des(bitacora))



let [, {detalles : {campos:{actual,anterior}}}] = bitacora
console.log(actual, anterior)