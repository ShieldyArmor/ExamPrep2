const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("../the.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://europe-west.firebaseio.com"
});

const db = getFirestore();


const requireAuth = (req, res, next) => {


        const token = req.cookies.jwt

        if (token){
            jwt.verify(token, "n0!Ds[Lfs*2Bs!TsSd", (err, decodedToken) => {
                if (err) {
                    res.redirect("/")
                }
                else {
                    console.log(decodedToken);
                    next();
                }
            })
        }
        else {
            res.redirect("/")
        }

}

const checkUser = (req, res, next) => {

const token = req.cookies.jwt

    if (token){
        jwt.verify(token, "n0!Ds[Lfs*2Bs!TsSd", async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null
                next();
            }
            else {
                console.log(decodedToken);
                db.collection('adminCol').doc(id).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        const userDetails = doc.data ()
                        res.locals.user = userDetails
                    });
                });
                console.log(user);
                next();
            }
        })
    }
    else {
        res.locals.user = null
        next();
    }
}

module.exports = { requireAuth, checkUser };