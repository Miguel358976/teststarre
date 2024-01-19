const firebaseConfig = {
    apiKey: "AIzaSyA3tEMTak2oxLLVvQuHpNO3CYE0IO3CKnk",
    authDomain: "starre-ea41a.firebaseapp.com",
    projectId: "starre-ea41a",
    storageBucket: "starre-ea41a.appspot.com",
    messagingSenderId: "530981906825",
    appId: "1:530981906825:web:894a88bb6f7256e3645958"
  };
  




firebase.initializeApp(firebaseConfig);





user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a)" + user_name + "!";


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adicionar sala"
    })

    localStorage.setItem("room_name", room_name);

    window.location = "starre_Page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById ("output"). innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
console. log("Room Name — " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document .getElementById ("output"). innerHTML += row;
});

});
}

getData()

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "starrePage.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}