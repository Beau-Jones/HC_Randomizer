function showAlly() {
    document.getElementById("horde").style.backgroundColor="white";
    document.getElementById("alliance").style.backgroundColor="blue";
    document.getElementById("alliance").style.color="black";
    document.getElementById("allianceRaces").style.display="inline-block";
    document.getElementById("hordeRaces").style.display="none";
    document.getElementById("divider").style.borderBottom="20px solid blue";
}

function showHorde() {
    document.getElementById("alliance").style.backgroundColor="white";
    document.getElementById("horde").style.backgroundColor="red";
    document.getElementById("horde").style.color="black";
    document.getElementById("allianceRaces").style.display="none";
    document.getElementById("hordeRaces").style.display="inline-block";
    document.getElementById("divider").style.borderBottom="20px solid red";
}

function showHuman() {
    document.getElementById("raceFace").innerHTML="<img src=\"human.png\">";
}

function showDwarf() {
    document.getElementById("raceFace").innerHTML="<img src=\"dwarf.png\">";
}

function showNightElf() {
    document.getElementById("raceFace").innerHTML="<img src=\"nightelf.png\">";
}

function showGnome() {
    document.getElementById("raceFace").innerHTML="<img src=\"gnome.png\">";
}

function showOrc() {
    document.getElementById("raceFace").innerHTML="<img src=\"orc.png\">";
}

function showUndead() {
    document.getElementById("raceFace").innerHTML="<img src=\"undead.png\">";
}

function showTauren() {
    document.getElementById("raceFace").innerHTML="<img src=\"tauren.png\">";
}

function showTroll() {
    document.getElementById("raceFace").innerHTML="<img src=\"troll.png\">";
}