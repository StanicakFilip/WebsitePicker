//Get all images
imageArray = [
    'Abella Danger.gif',
    'Abigaiil Morris.jpg',
    'Abigail Mac.jpg',
    'Adria Rae.gif',
    'Adriana Chechik.jpg',
    'Aidra Fox.gif',
    'AJ Applegate.jpg',
    'Alena Croft.jpg',
    'Alina Lopez.jpg',
    'Alison Tyler.gif',
    'Angela White.jpg',
    'Anna Bell Peaks.jpg',
    'Annabel Redd.jpg',
    'Aria Alexander.jpg',
    'Aria Lee.jpg',
    'Ariella Ferrera.jpg',
    'August Ames.jpg',
    'Avi Love.jpg',
    'Becky Bandini.gif',
    'Blair Williams.jpg',
    'Blake Blossom.gif',
    'Bridgette B.gif',
    'Britney Amber.jpg',
    'Brooklyn Gray.jpg',
    'Cali Carter.jpg',
    'Cherie Deville.jpg',
    'Codi Vore.jpg',
    'Crystal Rush.jpg',
    'Dani Daniels.gif',
    'Desiree Dulce.jpg',
    'Diamond Foxxx.jpg',
    'Dillion Harper.jpg',
    'Emily Willis.jpg',
    'Emma Leigh.jpg',
    'Emma Magnolia.jpg',
    'Eva Elfie.jpg',
    'Eva Lovia.jpg',
    'Eva Notty.gif',
    'India Summer.jpg',
    'Indica Flower.jpg',
    'Ivy Lebelle.jpg',
    'Jennifer White.jpg',
    'Jewelz Blu.jpg',
    'Josephine Jackson.jpg',
    'Julia Ann.jpg',
    'Kagney Linn Karter.jpg',
    'Kali Roses.jpg',
    'Karlee Grey.jpg',
    'Keira Croft.jpg',
    'Kelsi Monroe.gif',
    'Kendra Lust.jpg',
    'Kendra Sunderland.jpg',
    'Kenzie Anne.jpg',
    'Kenzie Reeves.jpg',
    'Kimmy Granger.jpg',
    'La Sirena.gif',
    'Lacy Lennon.jpg',
    'Lana Rhoades.jpg',
    'Lauren Phillips.jpg',
    'Leana Lovings.jpg',
    'Lena Paul.jpg',
    'Lexi Luna.gif',
    'Lily Lou.jpg',
    'Lily Love.jpg',
    'Mandy Waters.jpg',
    'Megan Rain.jpg',
    'Melissa Moore.gif',
    'Mia Malkova.gif',
    'Michele James.jpg',
    'Missy Martinez.jpg',
    'Monique Alexander.jpg',
    'Natasha Nice.gif',
    'Nicole Aniston.jpg',
    'Phoenix Marie.gif',
    'Raquel Adan.jpg',
    'Reena Sky.jpg',
    'Remy LaCroix.jpg',
    'Riley Reid.jpg',
    'Ryan Keely.gif',
    'Samantha Saint.jpg',
    'Sheena Ryder.jpg',
    'Siri Dahl.gif',
    'Sky Bri.jpg',
    'Skye Blue.jpg',
    'Skyla Novea.jpg',
    'Sophie Dee.jpg',
    'Spencer Bradley.jpg',
    'Sybil A.jpg',
    'Syren De Mer.jpg',
    'Tegan Summers.jpg',
    'Uma Jolie.jpg',
    'Valentina Nappi.gif',
    'Violet Myers.jpg',
    'Violet Starr.jpg',
]

var startImages = imageArray.map(image => image.replace(/ /g, '+'));
var winnerImages = startImages
var loserImages = []
var imageLink = "https://starpicker.s3.eu-north-1.amazonaws.com/"

window.onload = function () {
    startUp()
    console.log(window.location.href)
    startImages.forEach(element => {
        preLoadImages(imageLink + element)
    });
}

window.addEventListener('keydown', function(event) {
    if (winnerImages.length !== 1) {
    switch (event.key) {
        case 'ArrowLeft':
            // Call the function for the left image
            removeLoser('right');
            break;
        case 'ArrowRight':
            // Call the function for the right image
            removeLoser('left');
            break;
    }
}
});

function preLoadImages(url) {
    var img=new Image();
    img.src=url;
}

//At the start of a new game the initial pictures are loaded
function startUp() {
    startImages = shuffle(startImages)
    document.getElementById("leftName").innerHTML = startImages[0].substring(0, startImages[0].length - 4).replaceAll("+", " ")
    document.getElementById("leftName").setAttribute("style", "cursor:pointer")
    document.getElementById("leftImage").src = imageLink + startImages[0]
    document.getElementById("leftImage").setAttribute("style", "cursor:pointer;height:960px; width:639.75px;")
    document.getElementById("rightName").innerHTML = startImages[1].substring(0, startImages[1].length - 4).replaceAll("+", " ")
    document.getElementById("rightName").setAttribute("style", "cursor:pointer")
    document.getElementById("rightImage").src = imageLink + startImages[1]
    //document.getElementById("rightImage").src = `./img/${startImages[1]}`
    document.getElementById("rightImage").setAttribute("style", "cursor:pointer;height:960px; width:639.75px;")
    document.getElementById("topCounter").innerHTML = `Choose between ${startImages.length} Models`
}

function seeMore() {
    var name = this.textContent
    var changedName = name.replaceAll(" ", "-")
    var lowerCaseChangedName = changedName.toLowerCase();
    window.open("https://www.pornpics.com/pornstars/" + lowerCaseChangedName, "myWindows", "width=1000,height=800")
}

// Removes the loser and checks if there is only one image left
function removeLoser(loser) {
    if (loser == "right") {
        addLoserList(winnerImages[1].substring(0, winnerImages[1].length - 4).replaceAll("+", " "))
        winnerImages.splice(1, 1)
        if (winnerImages.length == 1) {
            displayWinner()
            return
        } else {
            newRound()
        }
    } else {
        addLoserList(winnerImages[0].substring(0, winnerImages[0].length - 4).replaceAll("+", " "))
        winnerImages.splice(0, 1)
        if (winnerImages.length == 1) {
            displayWinner()
            return
        } else {
            newRound()
        }
    } document.getElementById("topCounter").innerHTML = `There are ${winnerImages.length} Models left`
    document.getElementById("topCounter").setAttribute("style", "color: white;font-size: 20px;margin-top: 0;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; text-align: left")
}

function newRound() {
    winnerImages = shuffle(winnerImages);
    const leftName = winnerImages[0].substring(0, winnerImages[0].length - 4).replaceAll("+", " ");
    const rightName = winnerImages[1].substring(0, winnerImages[1].length - 4).replaceAll("+", " ");

    document.getElementById("leftName").textContent = leftName;
    document.getElementById("leftImage").src = imageLink + startImages[0]
    document.getElementById("rightName").textContent = rightName;
    document.getElementById("rightImage").src = imageLink + startImages[1]
}

function displayWinner() {
    const name = winnerImages[0].substring(0, winnerImages[0].length - 4).replaceAll("+", " ");

    // Get elements
    const elementsToRemove = ["leftImage", "rightImage", "leftName", "rightName", "devider"].map(id => document.getElementById(id)).concat(Array.from(document.querySelectorAll(".moreInfo")));

    // Remove elements
    elementsToRemove.forEach(element => {
        if (element) {
            element.remove();
        }
    });

    //Display winner
    const winnerImage = document.getElementById("winnerImage");
    winnerImage.style.visibility = "visible";
    winnerImage.style.height = "960px";
    winnerImage.style.width = "639.75px";
    winnerImage.style.cursor = "standard";
    winnerImage.textContent = name;
    winnerImage.src = imageLink + winnerImages[0]
    document.getElementById("winnerName").textContent = "Your winner is: " + name;
    document.getElementById("topCounter").textContent = "The losers (click on a name to see what you missed):";
}


function addLoserList(name) {
    const ul = document.getElementById("loserList");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = name;
    var linkname = name.toLowerCase().replaceAll(" ", "-");
    a.href = `https://www.pornpics.com/pornstars/${linkname}`; // replace with your actual link
    a.target = "_blank"; // open link in a new window
    a.setAttribute("onclick", "window.open(this.href, 'myWindow', 'width=1000,height=800'); return false;"); // specify width and height
    a.style.textDecoration = "none"; // remove underlining
    a.style.color = "white"; // set font color to white
    li.appendChild(a);
    ul.appendChild(li);
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}