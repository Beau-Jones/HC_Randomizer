let chosenRace = "";
let chosenClass = "";


function resetAllRaces() {
    let races = document.querySelectorAll('.race');
    for (let i = 0; i < races.length; i++) {
        races[i].style.backgroundColor = "transparent";
    }
    document.getElementById("classLogo").innerHTML="";
}

function resetAllClasses() {
    let classes = document.querySelectorAll('.class');
    for (let i = 0; i < classes.length; i++) {
        classes[i].style.display = "none";
    }
    document.getElementById("classLogo").innerHTML="";
}

function showAlly() {
    resetAllRaces();
    resetAllClasses();
    document.getElementById("classContainer").style.display="none";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("horde").style.backgroundColor="white";
    document.getElementById("alliance").style.backgroundColor="blue";
    document.getElementById("alliance").style.color="black";
    document.getElementById("allianceRaces").style.display="inline-block";
    document.getElementById("hordeRaces").style.display="none";
    document.getElementById("divider1").style.borderBottom="20px solid blue";
    document.getElementById("divider2").style.borderBottom="20px solid blue";
}

function showHorde() {
    resetAllRaces();
    resetAllClasses();
    document.getElementById("classContainer").style.display="none";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("alliance").style.backgroundColor="white";
    document.getElementById("horde").style.backgroundColor="red";
    document.getElementById("horde").style.color="black";
    document.getElementById("allianceRaces").style.display="none";
    document.getElementById("hordeRaces").style.display="inline-block";
    document.getElementById("divider1").style.borderBottom="20px solid red";
    document.getElementById("divider2").style.borderBottom="20px solid red";
}

function showHuman() {
    resetAllRaces();
    resetAllClasses();
    chosenRace = "Human";
    document.getElementById("classContainer").style.display="inline-block";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("humanbtn").style.backgroundColor="blue";
    document.getElementById("raceFace").innerHTML="<img src=\"human.PNG\">";
    // Display available classes
    document.getElementById("warrior").style.display="inline-block";
    document.getElementById("paladin").style.display="inline-block";
    document.getElementById("rogue").style.display="inline-block";
    document.getElementById("priest").style.display="inline-block";
    document.getElementById("mage").style.display="inline-block";
    document.getElementById("warlock").style.display="inline-block";
}

function showDwarf() {
    resetAllRaces();
    resetAllClasses();
    chosenRace = "Dwarf";
    document.getElementById("classContainer").style.display="inline-block";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("dwarfbtn").style.backgroundColor="blue";
    document.getElementById("raceFace").innerHTML="<img src=\"dwarf.PNG\">";
    // Display available classes
    document.getElementById("warrior").style.display="inline-block";
    document.getElementById("paladin").style.display="inline-block";
    document.getElementById("hunter").style.display="inline-block";
    document.getElementById("rogue").style.display="inline-block";
    document.getElementById("priest").style.display="inline-block";
}

function showNightElf() {
    resetAllRaces();
    resetAllClasses();
    chosenRace = "Night Elf";
    document.getElementById("classContainer").style.display="inline-block";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("nelfbtn").style.backgroundColor="blue";
    document.getElementById("raceFace").innerHTML="<img src=\"nightelf.PNG\">";
    // Display available classes
    document.getElementById("warrior").style.display="inline-block";
    document.getElementById("hunter").style.display="inline-block";
    document.getElementById("rogue").style.display="inline-block";
    document.getElementById("druid").style.display="inline-block";
    document.getElementById("priest").style.display="inline-block";
}

function showGnome() {
    resetAllRaces();
    resetAllClasses();
    chosenRace = "Gnome";
    document.getElementById("classContainer").style.display="inline-block";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("gnomebtn").style.backgroundColor="blue";
    document.getElementById("raceFace").innerHTML="<img src=\"gnome.PNG\">";
    // Display available classes
    document.getElementById("warrior").style.display="inline-block";
    document.getElementById("rogue").style.display="inline-block";
    document.getElementById("mage").style.display="inline-block";
    document.getElementById("warlock").style.display="inline-block";
}

function showOrc() {
    resetAllRaces();
    resetAllClasses();
    chosenRace = "Orc";
    document.getElementById("classContainer").style.display="inline-block";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("orcbtn").style.backgroundColor="red";
    document.getElementById("raceFace").innerHTML="<img src=\"orc.PNG\">";
    // Display available classes
    document.getElementById("warrior").style.display="inline-block";
    document.getElementById("hunter").style.display="inline-block";
    document.getElementById("shaman").style.display="inline-block";
    document.getElementById("rogue").style.display="inline-block";
    document.getElementById("warlock").style.display="inline-block";
}

function showUndead() {
    resetAllRaces();
    resetAllClasses();
    chosenRace = "Undead";
    document.getElementById("classContainer").style.display="inline-block";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("undeadbtn").style.backgroundColor="red";
    document.getElementById("raceFace").innerHTML="<img src=\"undead.PNG\">";
    // Display available classes
    document.getElementById("warrior").style.display="inline-block";
    document.getElementById("rogue").style.display="inline-block";
    document.getElementById("mage").style.display="inline-block";
    document.getElementById("priest").style.display="inline-block";
    document.getElementById("warlock").style.display="inline-block";
}

function showTauren() {
    resetAllRaces();
    resetAllClasses();
    chosenRace = "Tauren";
    document.getElementById("classContainer").style.display="inline-block";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("taurenbtn").style.backgroundColor="red";
    document.getElementById("raceFace").innerHTML="<img src=\"tauren.PNG\">";
    // Display available classes
    document.getElementById("warrior").style.display="inline-block";
    document.getElementById("hunter").style.display="inline-block";
    document.getElementById("shaman").style.display="inline-block";
    document.getElementById("druid").style.display="inline-block";
}

function showTroll() {
    resetAllRaces();
    resetAllClasses();
    chosenRace = "Troll";
    document.getElementById("classContainer").style.display="inline-block";
    document.getElementById("addBtn").style.display="none";
    document.getElementById("trollbtn").style.backgroundColor="red";
    document.getElementById("raceFace").innerHTML="<img src=\"troll.PNG\">";
    // Display available classes
    document.getElementById("warrior").style.display="inline-block";
    document.getElementById("hunter").style.display="inline-block";
    document.getElementById("shaman").style.display="inline-block";
    document.getElementById("rogue").style.display="inline-block";
    document.getElementById("mage").style.display="inline-block";
    document.getElementById("priest").style.display="inline-block";
}

function showWarrior() {
    chosenClass = "Warrior";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"warrior.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

function showPaladin() {
    chosenClass = "Paladin";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"paladin.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

function showHunter() {
    chosenClass = "Hunter";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"hunter.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

function showShaman() {
    chosenClass = "Shaman";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"shaman.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

function showRogue() {
    chosenClass = "Rogue";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"rogue.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

function showDruid() {
    chosenClass = "Druid";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"druid.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

function showMage() {
    chosenClass = "Mage";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"mage.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

function showPriest() {
    chosenClass = "Priest";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"priest.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

function showWarlock() {
    chosenClass = "Warlock";
    document.getElementById("classLogo").innerHTML="<img class=\"logo\" src=\"warlock.PNG\">";
    document.getElementById("addBtn").style.display="inline-block";
}

/* How to do the randomize button:

    1. Choose a random race out of the 8 available (array of all 8 races)
    2. Based on the race chosen, chose a random class available for that race (array of classes corresponding to race)
    3. Based on the race chosen, run those functions, for example: Troll, Rogue.
            showHorde();
            ShowTroll();
            ShowRogue();

    4. Won't get impossible combinations, ie. Tauren, Priest. 


*/


function randomize() {
    let races = ["Human", "Dwarf", "Night Elf", "Gnome", "Orc", "Undead", "Tauren", "Troll"];
    chosenRace = races[Math.floor(Math.random() * (7 - 0 + 1)) + 0];
    if (chosenRace == "Human") {
        showAlly();
        showHuman();
        let humanArr = ["Warrior", "Paladin", "Rogue", "Mage", "Priest", "Warlock"];
        chosenClass = humanArr[Math.floor(Math.random() * humanArr.length)];
        if (chosenClass == "Warrior") {
            showWarrior();
        } else if (chosenClass == "Paladin") {
            showPaladin();
        }else if (chosenClass == "Rogue") {
            showRogue();
        } else if (chosenClass == "Mage") {
            showMage();
        } else if (chosenClass == "Priest") {
            showPriest();
        } else if (chosenClass == "Warlock") {
            showWarlock();
        }
    } else if (chosenRace == "Dwarf") {
        showAlly();
        showDwarf();
        let dwarfArr = ["Warrior", "Paladin", "Hunter", "Rogue", "Priest"];
        chosenClass = dwarfArr[Math.floor(Math.random() * dwarfArr.length)];
        if (chosenClass == "Warrior") {
            showWarrior();
        } else if (chosenClass == "Paladin") {
            showPaladin();
        } else if (chosenClass == "Hunter") {
            showHunter();
        } else if (chosenClass == "Rogue") {
            showRogue();
        } else if (chosenClass == "Priest") {
            showPriest();
        } 
    } else if (chosenRace == "Night Elf") {
        showAlly();
        showNightElf();
        let nightElfArr = ["Warrior", "Hunter", "Rogue", "Druid", "Priest"];
        chosenClass = nightElfArr[Math.floor(Math.random() * nightElfArr.length)];
        if (chosenClass == "Warrior") {
            showWarrior();
        } else if (chosenClass == "Hunter") {
            showHunter();
        } else if (chosenClass == "Rogue") {
            showRogue();
        } else if (chosenClass == "Druid") {
            showDruid();
        } else if (chosenClass == "Priest") {
            showPriest();
        }
    } else if (chosenRace == "Gnome") {
        showAlly();
        showGnome();
        let gnomeArr = ["Warrior", "Rogue", "Mage", "Warlock"];
        chosenClass = gnomeArr[Math.floor(Math.random() * gnomeArr.length)];
        if (chosenClass == "Warrior") {
            showWarrior();
        } else if (chosenClass == "Rogue") {
            showRogue();
        } else if (chosenClass == "Mage") {
            showMage();
        } else if (chosenClass == "Warlock") {
            showWarlock();
        }
    } else if (chosenRace == "Orc") {
        showHorde();
        showOrc();
        let orcArr = ["Warrior", "Hunter", "Shaman", "Rogue", "Warlock"];
        chosenClass = orcArr[Math.floor(Math.random() * orcArr.length)];
        if (chosenClass == "Warrior") {
            showWarrior();
        } else if (chosenClass == "Hunter") {
            showHunter();
        } else if (chosenClass == "Shaman") {
            showShaman();
        } else if (chosenClass == "Rogue") {
            showRogue();
        } else if (chosenClass == "Warlock") {
            showWarlock();
        }
    } else if (chosenRace == "Undead") {
        showHorde();
        showUndead();
        let undeadArr = ["Warrior", "Rogue", "Mage", "Priest", "Warlock"];
        chosenClass = undeadArr[Math.floor(Math.random() * undeadArr.length)];
        if (chosenClass == "Warrior") {
            showWarrior();
        } else if (chosenClass == "Rogue") {
            showRogue();
        } else if (chosenClass == "Mage") {
            showMage();
        } else if (chosenClass == "Priest") {
            showPriest();
        } else if (chosenClass == "Warlock") {
            showWarlock();
        }
    } else if (chosenRace == "Tauren") {
        showHorde();
        showTauren();
        let taurenArr = ["Warrior", "Hunter", "Shaman", "Druid"];
        chosenClass = taurenArr[Math.floor(Math.random() * taurenArr.length)];
        if (chosenClass == "Warrior") {
            showWarrior();
        } else if (chosenClass == "Hunter") {
            showHunter();
        } else if (chosenClass == "Shaman") {
            showShaman();
        } else if (chosenClass == "Druid") {
            showDruid();
        }
    } else if (chosenRace == "Troll") {
        showHorde();
        showTroll();
        let trollArr = ["Warrior", "Hunter", "Shaman", "Mage", "Priest"];
        chosenClass = trollArr[Math.floor(Math.random() * trollArr.length)];
        if (chosenClass == "Warrior") {
            showWarrior();
        } else if (chosenClass == "Hunter") {
            showHunter();
        } else if (chosenClass == "Shaman") {
            showShaman();
        } else if (chosenClass == "Rogue") {
            showRogue();
        } else if (chosenClass == "Mage") {
            showMage();
        } else if (chosenClass == "Priest") {
            showPriest();
    }
}

} 

function addToList() {
    console.log(chosenRace);
    console.log(chosenClass);

    document.getElementById("listHeader").style.display="block";
    let li = document.createElement("li");
    document.getElementById("myList").appendChild(li);
    li.textContent = `${chosenRace}` + " " + `${chosenClass}`;
}

function removeLast() {
    let list = document.getElementById("myList");
    list.removeChild(list.lastElementChild);
}


/*

if (chosenClass == "Warrior") {
    showWarrior();
} else if (chosenClass = "Paladin") {
    showPaladin();
} else if (chosenClass = "Hunter") {
    showHunter();
} else if (chosenClass = "Shaman") {
    showShaman();
} else if (chosenClass = "Rogue") {
    showRogue();
} else if (chosenClass = "Druid") {
    showDruid();
} else if (chosenClass = "Mage") {
    showMage();
} else if (chosenClass = "Priest") {
    showPriest();
} else if (chosenClass = "Warlock") {
    showWarlock();
}

*/




