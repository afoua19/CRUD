const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/create',(req,res,next)=>{
    var appareil = req.body;
    query = "INSERT INTO appareil ( nom, description, statut, adresse_ip, adresse_mac, cle_chiffrement, algo_chiffrement, nom_wifi, mot_de_passe_wifi, caracterisque, id_utilisateur, id_piece, id_appareil, id_type_appareil) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    connection.query(query,[appareil.nom,appareil.description,appareil.statut,appareil.adresse_ip,appareil.adresse_mac,appareil.cle_chiffrement,appareil.algo_chiffrement,appareil.nom_wifi,appareil.mot_de_passe_wifi,appareil.caracteristique,appareil.id_utilisateur,appareil.id_piece,appareil.id_appareil,appareil.id_type_appareil],(err,results) =>{
    if(!err){
        return res.status(200).json({message: "appareil added successfully"});
      }
      else
      return res.status(500).json(err);
    });
});

router.get('/read',(req,res,next) =>{
    const query = "select * from appareil";
    connection.query(query,(err,results) =>{
        if(!err){
            return res.status(200).json( results);
        }
        else{
            return res.status(400).json({message: "bad requeste"}); 
        };                                            
    });
});

    router.patch('/update/:id',(req,res,next) =>{
        const id = req.params.id;
        let appareil = req.body;
        var query = "update appareil set nom=?,description=?,statut=?,adresse_ip=?,adresse_mac=?,cle_chiffrement=?,algo_chiffrement=?, nom_wifi=?, mot_de_passe_wifi=?, caracterisque=?, id_utilisateur=?, id_piece=?, id_appareil=?, id_type_appareil=? where id=?";
        connection.query(query,[appareil.nom,appareil.description,appareil.statut,appareil.adresse_ip,appareil.adresse_mac,appareil.cle_chiffrement,appareil.algo_chiffrement,appareil.nom_wifi,appareil.mot_de_passe_wifi,appareil.caracteristique,appareil.id_utilisateur,appareil.id_piece,appareil.id_appareil,appareil.id_type_appareil,id],(err,results) => {
            if(!err){
                if(results.affectedRows == 0){
                    return res.status(404).json({message: "appareil id does not found"});
                    }
                return res.status(200).json({message: "update success"});
            }
            else{
                return res.status(500).json(err);
            };
        });
    });

    router.delete('/delete/:id',(req,res,next) =>{
        const id = req.params.id;
        var query = "delete from appareil where id=?";
        connection.query(query,[id],(err,results) =>{
            if(!err){
                if(results.affectedRows == 0){
                     return res.status(404).json({message: "appareil id does not found"});

                }
                 return res.status(200).json({message: "delete success"});
            }
             else{
                return res.status(500).json(err);
            };
        });
    });


module.exports = router;