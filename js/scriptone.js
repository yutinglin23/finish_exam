$(document).ready(function () {
    // REGISTER DOM ELEMENTS
    const $title = $('#title');
    const $doc = $("#doc");
    // INITIALIZE FIREBASE
    firebase.initializeApp({
        apiKey: "AIzaSyAw2Ghry9Ab5JfkvelyabMuK_ZYU8ykjik",
        authDomain: "final-exam-b5318.firebaseapp.com",
        projectId: "final-exam-b5318",
        storageBucket: "final-exam-b5318.appspot.com",
        messagingSenderId: "353101181514",
        appId: "1:353101181514:web:efcc0a8c96ed7bf17dacb3"
        
    });
    // REFERENCE CHATROOM DOCUMENT
    let chatroomDocRef = firebase.firestore()
    .collection("user")
    .doc("name");    
    // REFERENCE CHATROOM MESSAGES
    let messagesCollectionRef 
    = chatroomDocRef.collection("form");
    // QUERY MESSAGES BY TIMESTAMP ORDERING 
    let queryMessagesCollectionRef 
    = messagesCollectionRef.orderBy("timeStamp", "asc");
    
    // REGISTER DOM ELEMENTS
    const $nameone = $('#nameone');
    const $phone = $('#phone');
    const $address = $('#address');
    const $email = $('#email');
    const $main = $('#main');
    const $content = $('#content');
    
    // LISTEN FOR KEYPRESS EVENT
    $("#submit").click(function (e) { 
        //FIELD VALUES
        let senderName = $nameone.val();
        let phone = $phone.val();
        let address = $address.val();
        let email = $email.val();
        let main = $main.val();
        let content = $content.val(); 
        if (senderName=="") {
            alert("姓名欄位未填寫");
        } 
        else if(email==""){
            alert("電子郵件欄位未填寫");
        }
        else if(content==""){
            alert("內容欄位未填寫");
        }
        else {
            //SAVE DATA TO FIREBASE
            messagesCollectionRef.add({
                senderName: senderName,
                phone: phone,
                address : address,
                email : email,
                main : main,
                content : content,
            })
            
            console.log("87");
            alert("送出成功");
        }
        $nameone.val('');
    $phone.val('');
    $address.val('');
    $email.val('');
    $content.val('');
    $main.val(''); 
    });
    //版本一無then版之後要加動畫
    //EMPTY INPUT FIELD
   
            
    
    // docRef.get().then(function(doc){
    // $title.html(`user name = ${doc.data().name}`)
    // });
    // messagesCollectionRef.add().then(function(doc){
    //     //$title.html(`user name = ${doc.data().nameone}`)
    //     console.log("456");
    // });
});
