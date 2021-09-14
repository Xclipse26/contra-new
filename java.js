let userpress;
let move = false;
let press;
let x = 0;
//start btn
const startbtn = document.getElementById("startbtn");
//human
const h =document.querySelector(".con");
const human = document.querySelector(".human");

//landmine
const stone = document.querySelector('.stone');
const d = document.querySelector(".bomb");
//vertical missile
const aerial = document.querySelector(".aerial");
const missile = document.querySelector(".missile");
//horizontal bomb
const nuke = document.querySelector(".nuke");
const nu = document.querySelector(".nu");
//gameover 
const game = document.querySelector("span:first-child");
const over = document.querySelector("span:last-of-type");
//border Style
const col = document.querySelector(".container");
const cpl = document.querySelector(".ground")

//restart
const restart =document.querySelector(".restart");
//bullet
const bullet = document.querySelector(".bullet");
//enemy
const enemy = document.querySelector(".enemy");
const ene = document.querySelector(".ene");
//jet
const jet = document.querySelector(".jet");
//audio
//const aud = document.querySelector("aud");
//Death check
var checkTouch = setInterval(() => {

    broke();
    die();
    die1();
    die2();
    bul();
}, 0);

// Start startbtn
startbtn.addEventListener("click", () => {
    // console.log("hay");
    startbtn.classList.add('click');
    setTimeout(() => {
        startbtn.style.display = "none";
    }, 2 * 1000);
    human.style.left = "0px";
    jet.classList.add("ag");
    missile.classList.add("ad");
    stone.classList.add('ab');
    nuke.classList.add("ac");
    enemy.classList.add("en");
    document.querySelector(".container").classList.add("junglebg");
    document.querySelector('.ground').style.display = "flex";
    move = true;
});

//restart Btn

let cik = () =>{
    location.reload();
}

//keybinging
window.addEventListener("keydown", (event) => {
    press = String.fromCharCode(event.which).toLowerCase();
    console.log(press);
//restart
    if(press == "r"){
        location.reload();
    }

    userpress(press);
     console.log(human.getBoundingClientRect());
    // // collesion(human, stone);
    // console.log(stone.getBoundingClientRect());
})


userpress = (user) => {
    if(move){
    switch (user) {
        case " ":
            move = false;
            // alert("1" + move);
            human.style.bottom = "125px";
            setTimeout(() => {
                human.style.bottom = "10px";
            }, 500);
            setTimeout(() => {
                // alert("2" + move);
                move = true;
            }, 850);
            break;
        case "d":
            if (human.style.left != "1850px") {
                x = x + 10;
                console.log(x + "go");
                //zayar
                //human direction to right when he goes forward
                human.style.transform="scaleX(1)"
                human.style.left = x + "px";
            }
            
            break;
        case "a":
            // window.alert(press);
            if (human.style.left > "0px") {
                x = x - 10;
                console.log(x + "back");
                //zayar
                //human direction to right when he goes forward
                human.style.transform="scaleX(-1)"
                human.style.left = x + "px";
            }
            
            break;
            case "f":
                bullet.classList.add("shoot");
                move = false;
                setTimeout(() => {
                    // bullet.style.transform = "translateX(0px)";
                    bullet.classList.remove('shoot');
                    move = true;
                }, 400)
                break;
    }
}
}
//death function(1)
function broke() {
    let hx = human.getBoundingClientRect().x;
    let hy = human.getBoundingClientRect().y;
    let sx = stone.getBoundingClientRect().x;
    let sy = stone.getBoundingClientRect().y;

    let hw = human.getBoundingClientRect().width;
    let hh = human.getBoundingClientRect().height;
    let sw = stone.getBoundingClientRect().width;
    let sh = stone.getBoundingClientRect().height;
    // console.log(hx, hy, sx, sy, hw, hh, sw, sh);

    if ((hx < sx + sw && hx + hw > sx && hy < sy + sh && hy + hh > sy)) {

                        //restart
                        restart.style.bottom = "430px";
         //pic change
        aerial.style.display ="none";
        stone.classList.remove("ab");
        nuke.classList.remove("ac")
        enemy.classList.remove("en")
        jet.style.display ="none";
        h.src="boom.png"
        move = false;
        //Death border Color Change
        col.style.borderTopColor = "red";
        col.style.borderRightColor = "red"
        col.style.borderLeftColor = "red"
        cpl.style.borderBottomColor = "red";
        cpl.style.borderRightColor = "red"
        cpl.style.borderLeftColor = "red"
        //gameover style
        game.style.left = "765px";
        over.style.right = "765px";

                //audio
                //audio.src = "loser1.mp3"

        
        
        d.style.display ="none";
        
    }
}
//death function(2)
function die() {
    let hx = human.getBoundingClientRect().x;
    let hy = human.getBoundingClientRect().y;
    let rx = missile.getBoundingClientRect().x,
    ry = missile.getBoundingClientRect().y;
    let hw = human.getBoundingClientRect().width;
    let hh = human.getBoundingClientRect().height;
    let rw = missile.getBoundingClientRect().width,
        rh = missile.getBoundingClientRect().height;
    // console.log(hx, hy, sx, sy, hw, hh, sw, sh);

    if ((hx < rx + rw && hx + hw > rx && hy < ry + rh && hy + hh > ry)) {
         //pic change
         move = false;
        missile.style.display = "none";
        aerial.style.display ="none";
        stone.classList.remove("ab");
        nuke.classList.remove("ac")
        enemy.classList.remove("en")
        jet.style.display ="none";
        h.src="boom.png";
        //gameover style
        game.style.left = "765px";
        over.style.right = "765px";
        //Death border Color Change
        col.style.borderTopColor = "red";
        col.style.borderRightColor = "red"
        col.style.borderLeftColor = "red"
        cpl.style.borderBottomColor = "red";
        cpl.style.borderRightColor = "red"
        cpl.style.borderLeftColor = "red"
        //restart
        restart.style.bottom = "430px";

       
        
    }
}
//death function (3)
function die1() {
    let hx = human.getBoundingClientRect().x;
    let hy = human.getBoundingClientRect().y;
    let sx =nuke.getBoundingClientRect().x;
    let sy = nuke.getBoundingClientRect().y;

    let hw = human.getBoundingClientRect().width;
    let hh = human.getBoundingClientRect().height;
    let sw = nuke.getBoundingClientRect().width;
    let sh = nuke.getBoundingClientRect().height;
    // console.log(hx, hy, sx, sy, hw, hh, sw, sh);

    if ((hx < sx + sw && hx + hw > sx && hy < sy + sh && hy + hh > sy)) {
        //pic change
        nu.style.display = "none";
        h.src="boom.png";
        aerial.style.display = "none";
        jet.style.display ="none";
        stone.style.display = "none";
        nuke.classList.remove(".ac");
        enemy.classList.remove("en")
        //gameove style
        game.style.left = "765px";
        over.style.right = "765px";
        //Death border Color Change
        col.style.borderTopColor = "red";
        col.style.borderRightColor = "red"
        col.style.borderLeftColor = "red"
        cpl.style.borderBottomColor = "red";
        cpl.style.borderRightColor = "red"
        cpl.style.borderLeftColor = "red"
                //restart
                restart.style.bottom = "430px";
        move = false;
    }
}

let die2 = () =>{
    let hx = human.getBoundingClientRect().x;
    let hy = human.getBoundingClientRect().y;
    let sx =enemy.getBoundingClientRect().x;
    let sy = enemy.getBoundingClientRect().y;

    let hw = human.getBoundingClientRect().width;
    let hh = human.getBoundingClientRect().height;
    let sw = enemy.getBoundingClientRect().width;
    let sh = enemy.getBoundingClientRect().height;
    // console.log(hx, hy, sx, sy, hw, hh, sw, sh);
    if ((hx < sx + sw && hx + hw > sx && hy < sy + sh && hy + hh > sy)) {
        nu.style.display = "none";
        h.src="boom.png";
        aerial.style.display = "none";
        stone.style.display = "none";
        jet.style.display ="none";
        nuke.classList.remove(".ac");
        enemy.classList.remove("en")
        //gameove style
        game.style.left = "765px";
        over.style.right = "765px";
        //Death border Color Change
        col.style.borderTopColor = "red";
        col.style.borderRightColor = "red"
        col.style.borderLeftColor = "red"
        cpl.style.borderBottomColor = "red";
        cpl.style.borderRightColor = "red"
        cpl.style.borderLeftColor = "red"
                //restart
                restart.style.bottom = "430px";
        move = false;
}
}





let bul = ()=>{
    let hx = bullet.getBoundingClientRect().x;
    let hy = bullet.getBoundingClientRect().y;
    let sx =enemy.getBoundingClientRect().x;
    let sy = enemy.getBoundingClientRect().y;

    let hw = bullet.getBoundingClientRect().width;
    let hh = bullet.getBoundingClientRect().height;
    let sw = enemy.getBoundingClientRect().width;
    let sh = enemy.getBoundingClientRect().height;

    if((hx < sx + sw && hx + hw > sx && hy < sy + sh && hy + hh > sy)){
        ene.src = "boom.png";
        console.log(ene.src);
        setTimeout(() => {

            enemy.style.display = "none";
        }, 200);
        // enemy.style.display = "none";
            
        setInterval(()=>{
            ene.src = "enemy.gif";
            enemy.style.bottom = "30px"
            enemy.style.display = "block";
        } ,2500)
    }
}