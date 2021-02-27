function changeTheme(){

    var arr = [
        {
            color: "theme--red",
            img: "./assets/images/skull.svg",
            name: "skull"
        },
        {
            color: "theme--purple",
            img: "./assets/images/ghosts.svg",
            name: "ghosts"
        },
        {
            color: "theme--green",
            img: "./assets/images/spooky.svg",
            name: "spooky"
        }];

    var random = Math.floor(Math.random() * 3);

    if (document.getElementsByClassName('vector')[0].attributes.index === random){
        changeTheme();
        console.log("im running");
    } else {
        document.getElementById('bdy').className = arr[random].color;
        document.getElementsByClassName('vector')[0].id = arr[random].name;
        document.getElementsByClassName('vector')[0].src = arr[random].img;
        document.getElementsByClassName('vector')[0].attributes.index = random;
    }
}