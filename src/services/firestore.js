
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBqZy5lVFg-5aX0WJt2qPDuO4vyG0pIlJM",
    authDomain: "proyecto-9ba8c.firebaseapp.com",
    projectId: "proyecto-9ba8c",
    storageBucket: "proyecto-9ba8c.appspot.com",
    messagingSenderId: "341467172956",
    appId: "1:341467172956:web:97fc14a7b6108130ab9699",
    measurementId: "G-T2X7YW7Q25"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export async function getItems() {
    const miCollection = collection(firestore, "productos");
    let respuesta = await getDocs(miCollection)


    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id }
        return docFormateado;
    })

    return dataDocs;


}

export async function getSingleItem(idParams){

    const docRef = doc(firestore, "productos", idParams);
    const docSnapshot = await getDoc(docRef)


    return  {...docSnapshot.data(), id: docSnapshot.id}

}
export default app;
export { firestore };   