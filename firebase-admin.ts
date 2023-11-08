import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";

let app;

const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
};

if (!admin.app.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
  });
}

const adminDB = initFirestore({
  credential: admin.credential.cert(firebaseConfig),
});

const adminAuth = admin.auth(app);

export { adminDB, adminAuth };
