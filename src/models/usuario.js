module.exports=(sequelize,type)=>{
    const usuario = sequelize.define('usuario',{
        idUsuario:{
            unique:true,
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        nombres:{
            type: type.STRING
        },
        frase:{
            type: type.STRING
        },
        direccion:{
            type: type.STRING(1000)
        },
        descripcion:{
            type: type.STRING(5000)
        },
        logo:{
            type: type.STRING
        },
        telefono:{
            type: type.INTEGER
        },
        propietario:{
            type: type.STRING
        },
        fechaInicio:{
            type: 'TIMESTAMP'
        },
        fotografia:{
            type: type.STRING(1000)
        }       
    },
    {
        timestamps:true,
        tableName: "usuario"
    }
    )
    return usuario;
}