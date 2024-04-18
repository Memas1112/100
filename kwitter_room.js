
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyDctfhg5SLpVyGXpb8gNYLnD1C1xaFUBng",
      authDomain: "p101-b96a1.firebaseapp.com",
      projectId: "p101-b96a1",
      storageBucket: "p101-b96a1.appspot.com",
      messagingSenderId: "1084683651440",
      appId: "1:1084683651440:web:10e125db083adb0f0167b5",
      measurementId: "G-Z5YSYP07WQ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
