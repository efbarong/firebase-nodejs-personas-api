import { Router } from 'express';
import { db } from '../config/firebase.config.js'
import { collection, addDoc, getDocs } from "firebase/firestore"

let router = Router();

router.get('/', async function(req, res) {

    const gdocs = await getDocs(collection(db, "personas"));
    const docs = [];
    gdocs.forEach((doc) => {
        docs.push(
            {
                id: doc.id,
                data: doc.data()
            }
        )
    });
    
    if (docs.length > 0) {
        res.json({status: true, personas: docs});
    } else {
        res.json({status: true, personas: []});
    }

});
router.post('/save', async function(req, res) {
    const {nombre, edad, altura, peso } = req.body;
    const toSend = { nombre, edad, altura, peso };
    try {
        const docRef = await addDoc(collection(db, "personas"), toSend);
        res.json({status: true, message: 'Se ha guardado la persona con ID: '+ docRef.id});
      } catch (e) {
        res.json({status: false, message: 'Ha ocurrido un error al guardar la persona', error: e});
      }
});

export {router};