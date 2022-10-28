const Acerca=()=>{

    const imagef="face.jpg"
    const imagem="insta.png"
    const imagew="what.png"

    return (
        

        <div className="red">
            <h1 className="soci"> Redes Sociales </h1>

            <a href="https://www.facebook.com/FUNDACION.DEDONACIONES"> <img src={imagef}/> </a>  &nbsp; &nbsp; &nbsp; &nbsp; 
            
            <a href="https://www.instagram.com/donamosorg/?hl=es"><img src={imagem}/> </a> &nbsp; &nbsp; &nbsp; &nbsp; 

            <a href="https://wa.me/573125312846"><img src={imagew}/> </a>
        </div>

        
        
    )
}
export default Acerca