const Product= require ('./models.product');

function getAll(req, res){

    res.json({
        name: 'patricio',
        descriprion:'ewrwerewre'
        });
    //llamada a la mongo
    
}


//Libro.find({}, function(err, libros) {
  //  3        Autor.populate(libros, {path: "autor"},function(err, libros){
  //  4            res.status(200).send(libros);
  //  5        }); 
  //  6    });