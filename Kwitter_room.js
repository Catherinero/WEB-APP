function addRoom() {

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({

        puopruse: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

    function getData() {
        firebase.database().ref("/").on('value',


            function (snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;
                    //Start code
                    console.log(firebase_message_id);
                    console.log(message_data);
                    name = message_data['name'];
                    message = message_data['message'];
                    like = message_data['like'];
                    name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                    row = name_with_tag + message_with_tag + like_button + span_with_tag;
                    document.getElementById("output").innerHTML += row;
                    //End code
                });
            });
    }
} getData();

function redirectToRoomName(name) {

    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kittwer_page.html";

}