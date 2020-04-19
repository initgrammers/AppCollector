import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/functions";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

firebase.initializeApp(Expo.Constants.manifest.extra.firebase);

export default firebase;
