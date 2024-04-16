function addUser()
    user_nmae = document.getElementByid("user_name").value
    localStorage.setitem("user_name",user_name);
    window.location = "kwitter_room.html";