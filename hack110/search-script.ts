import { Person, people } from "./people";

window.onload = function(): void {
    // main();
    main1();
    main();
};
// main();
let sEE: string = "";
interface Fun {
    (selec: string): void;
}
let searchFun: Fun;

function main1(): void {
    // let choice2: string = "string";
    let sE: HTMLSelectElement = document.getElementById("selSearch") as HTMLSelectElement;
    let head2: HTMLHeadingElement = document.getElementById("h2") as HTMLHeadingElement;
    
    // interface Fun {
    //     (selec: string): void;
    // }
    let searchFun1: Fun;
    // searchFun1 = sA;
    // searchFun = searchFun1;


    sE.onchange = function(e: Event): void {
        let choice2: string = sE.value;
        head2.innerText = choice2;
        sEE = choice2;


        if (sEE === "Interests") {
            searchFun1 = iS;
        } else if (sEE === "Why Computer Science?") {
            searchFun1 = sWCS;
        } else if (sEE === "UNC Status-Graduation Year") {
            searchFun1 = gY;
        } else if (sEE === "UNC Status-Majors and Minors") {
            searchFun1 = sMM;
        } else if (sEE === "Hometown") {
            searchFun1 = sH;
        } else if (sEE === "Favorite Programming Keyword") {
            searchFun1 = sFPK;
        } else if (sEE === "Name") {
            searchFun1 = sN;
        } else if (sEE === "Search All") {
            searchFun1 = sA;
        // } else if (sEE === "Select") {
        //     searchFun1 = sA;
        }
        
        console.log(sEE);
        console.log(searchFun1);
        console.log(searchFun);

        searchFun = searchFun1;
    };
    console.log(sE.value);
    // head2.innerText = choice2;
}


window.onkeydown = function(e: KeyboardEvent): void {
    let myInput: HTMLInputElement = document.getElementById("input") as HTMLInputElement;
    let sel: string = myInput.value;

    let selectElement: HTMLSelectElement = document.getElementById("selSearch") as HTMLSelectElement;
    let heading: HTMLHeadingElement = document.getElementById("h2") as HTMLHeadingElement;
    // interface Fun {
    //     (selec: string): void;
    // }
    // let searchFun: Fun;
    // if (sEE === "interests") {
    //     searchFun = iS;
    // } else if (sEE === "whyCS") {
    //     searchFun = sWCS;
    // } else if (sEE === "gradYear") {
    //     searchFun = gY;
    // } else if (sEE === "major") {
    //     searchFun = sMM;
    // } else if (sEE === "hometown") {
    //     searchFun = sH;
    // } else if (sEE === "favKeyword") {
    //     searchFun = sFPK;
    // } else {
    //     searchFun = iS;
    // }

    if (e.keyCode === 13) {
        let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;
    // sorry.innerText = searchFun.toString();
        searchFun(sel);
    }
};
let choice: string = "";
let what: HTMLHeadingElement = document.getElementById("interestSearchTest") as HTMLHeadingElement;


function main(): void {

        // selectElement.onchange = function(e: Event): void {
        // choice = selectElement.value;
        // let what: HTMLHeadingElement = document.getElementById("interestSearchTest") as HTMLHeadingElement;
        // // heading.innerText = "heading";
        // what.innerText = choice;
        // if (choice === "interests") {
        //     searchFun = iS;
        // } 
        // else {
        //     searchFun = function(selec: string): void {
        //         let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;
        //         sorry.innerText = "WHATEVER";
        //     };
        // }
    // };
// }
    //     window.onkeydown = function(e: KeyboardEvent): void {
    // let myInput: HTMLInputElement = document.getElementById("input") as HTMLInputElement;
    // let sel: string = myInput.value;
    
    // if (e.keyCode === 13) {
    //         let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    //         sorry.innerText = searchFun.toString();
    //         searchFun(sel);
    // }
    // };
}
function iS(selec: string): void {
    let im: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
    im.src = "http://s3.amazonaws.com/110-2015-fall/pictures/krackle.png";
    let w: string = selec.toLowerCase();
    let pArr: string[] = [];

    for (let n: number = 0; n < people.length; n++) {
        let inter: string = people[n].interests.toLowerCase();
        let num: boolean = inter.includes(w);
        if (num !== false) {
            pArr[pArr.length] = "\n" + "\n" + people[n].name.toUpperCase().slice(0, people[n].name.length - 1) + ": " + people[n].interests;
        }
    }

    let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    let str: string = "";

    if (pArr.length === 0) {
        // print("Sorry!");
        sorry.innerText = "Sorry! No one has that interest";
    } else {
        // sorry.innerText = pArr;
        for (let i: number = 0; i < pArr.length; i++) {
            str = str + pArr[i];
        }
        sorry.innerText = str;
    }

    return;
}

function sWCS(selec: string): void {

    let im: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
    im.src = "http://s3.amazonaws.com/110-2015-fall/pictures/krackle.png";


    let w: string = selec.toLowerCase();
    let pArr: string[] = [];

    for (let n: number = 0; n < people.length; n++) {
        let inter: string = people[n].whyCS.toLowerCase();
        let num: boolean = inter.includes(w);
        if (num !== false) {
            pArr[pArr.length] = "\n" + "\n" + people[n].name.toUpperCase().slice(0, people[n].name.length - 1) + ": " + people[n].whyCS;
        }
    }

    let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    let str: string = "";

    if (pArr.length === 0) {
        // print("Sorry!");
        sorry.innerText = "Sorry! No one included that in their reasons!";
    } else {
        // sorry.innerText = pArr;
        for (let i: number = 0; i < pArr.length; i++) {
            str = str + pArr[i];
        }
        sorry.innerText = str;
    }

    return;
}

function gY(selec: string): void {

    let im: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
    im.src = "http://s3.amazonaws.com/110-2015-fall/pictures/krackle.png";

    let w: string = selec.toLowerCase();
    let pArr: string[] = [];

    for (let n: number = 0; n < people.length; n++) {
        let inter: string = people[n].graduationYear.toLowerCase();
        let num: boolean = inter.includes(w);
        if (num !== false) {
            pArr[pArr.length] = "\n" + "\n" + people[n].name.toUpperCase().slice(0, people[n].name.length - 1) + ": " + people[n].graduationYear;
        }
    }

    let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    let str: string = "";

    if (pArr.length === 0) {
        // print("Sorry!");
        sorry.innerText = "Sorry! No one has that graduation year!";
    } else {
        // sorry.innerText = pArr;
        for (let i: number = 0; i < pArr.length; i++) {
            str = str + pArr[i];
        }
        sorry.innerText = str;
    }

    return;
}

function sMM(selec: string): void {
    let im: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
    im.src = "http://s3.amazonaws.com/110-2015-fall/pictures/krackle.png";


    let w: string = selec.toLowerCase();
    let pArr: string[] = [];

    for (let n: number = 0; n < people.length; n++) {
        let inter: string = people[n].majorsAndMinors.toLowerCase();
        let num: boolean = inter.includes(w);
        if (num !== false) {
            pArr[pArr.length] = "\n" + "\n" + people[n].name.toUpperCase().slice(0, people[n].name.length - 1) + ": " + people[n].majorsAndMinors;
        }
    }

    let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    let str: string = "";

    if (pArr.length === 0) {
        // print("Sorry!");
        sorry.innerText = "Sorry! No one has that as a major or minor!";
    } else {
        // sorry.innerText = pArr;
        for (let i: number = 0; i < pArr.length; i++) {
            str = str + pArr[i];
        }
        sorry.innerText = str;
    }

    return;
}

function sH(selec: string): void {

    let im: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
    im.src = "http://s3.amazonaws.com/110-2015-fall/pictures/krackle.png";

    let w: string = selec.toLowerCase();
    let pArr: string[] = [];

    for (let n: number = 0; n < people.length; n++) {
        let inter: string = people[n].hometown.toLowerCase();
        let num: boolean = inter.includes(w);
        if (num !== false) {
            pArr[pArr.length] = "\n" + "\n" + people[n].name.toUpperCase().slice(0, people[n].name.length - 1) + ": " + people[n].hometown;
        }
    }

    let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    let str: string = "";

    if (pArr.length === 0) {
        // print("Sorry!");
        sorry.innerText = "Sorry! No one has that hometown!";
    } else {
        // sorry.innerText = pArr;
        for (let i: number = 0; i < pArr.length; i++) {
            str = str + pArr[i];
        }
        sorry.innerText = str;
    }

    return;
}

function sFPK(selec: string): void {

    let im: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
    im.src = "http://s3.amazonaws.com/110-2015-fall/pictures/krackle.png";

    let w: string = selec.toLowerCase();
    let pArr: string[] = [];

    for (let n: number = 0; n < people.length; n++) {
        let inter: string = people[n].word.toLowerCase();
        let num: boolean = inter.includes(w);
        if (num !== false) {
            pArr[pArr.length] = "\n" + "\n" + people[n].name.toUpperCase().slice(0, people[n].name.length - 1) + ": " + people[n].favKeyword;
        }
    }

    let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    let str: string = "";

    if (pArr.length === 0) {
        // print("Sorry!");
        sorry.innerText = "Sorry! That's no one's favorite keyword!";
    } else {
        // sorry.innerText = pArr;
        for (let i: number = 0; i < pArr.length; i++) {
            str = str + pArr[i];
        }
        sorry.innerText = str;
    }

    return;
}

function sN(selec: string): void {
    let w: string = selec.toLowerCase();
    let pArr: string[] = [];


    let im: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
    // im.src = "http://comp110.com/cpresources/userphotos/kris@cs.unc.edu/100/Screen-Shot-2015-12-27-at-11.06.24-AM.png?x=n4eC7G0ZH";

    for (let n: number = 0; n < people.length; n++) {
        let inter: string = people[n].name.toLowerCase();
        let num: boolean = inter.includes(w + " ");
        if (num !== false) {
            pArr[pArr.length] = "" + "\n" + people[n].name.toUpperCase().slice(0, people[n].name.length - 1) + ": " + "\n \n" + "Why Computer Science: ".toUpperCase() + people[n].whyCS + "\n \n" + "Interests: ".toUpperCase() + people[n].interests + "\n \n" + "Graduation year: ".toUpperCase() + people[n].graduationYear + "\n \n Majors and Minors: ".toUpperCase() + people[n].majorsAndMinors + "\n \n Hometown: ".toUpperCase() + people[n].hometown + "\n \n Favorite Programming Keyword: ".toUpperCase() + people[n].favKeyword + "\n \n \n \n";
            im.src = people[n].pic;
        }
    }

    
    let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    let str: string = "";

    if (pArr.length === 0) {
        // print("Sorry!");
        sorry.innerText = "Sorry! No one on the team has that name!";
    } else {
        // sorry.innerText = pArr;
        for (let i: number = 0; i < pArr.length; i++) {
            str = str + pArr[i];
        }
        sorry.innerText = str;
    }

    return;
}

function sA(selec: string): void {
    
    let im: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
    im.src = "http://s3.amazonaws.com/110-2015-fall/pictures/krackle.png";

    let w: string = selec.toLowerCase();
    let pArr: string[] = [];

    for (let n: number = 0; n < people.length; n++) {
        let nam: string = people[n].name.toLowerCase();
        let wCS: string = people[n].whyCS.toLowerCase();
        let inter: string = people[n].interests.toLowerCase();
        let grY: string = people[n].graduationYear.toLowerCase();
        let mM: string = people[n].majorsAndMinors.toLowerCase();
        let hT: string = people[n].hometown.toLowerCase();
        let fK: string = people[n].favKeyword.toLowerCase();
        let num: boolean = inter.includes(w) || nam.includes(w) || wCS.includes(w) || grY.includes(w) || mM.includes(w) || hT.includes(w) || fK.includes(w);
        if (num !== false) {
            pArr[pArr.length] = "" + "\n" + people[n].name.toUpperCase().slice(0, people[n].name.length - 1) + ": " + "\n \n" + "Why Computer Science: ".toUpperCase() + people[n].whyCS + "\n \n" + "Interests: ".toUpperCase() + people[n].interests + "\n \n" + "Graduation year: ".toUpperCase() + people[n].graduationYear + "\n \n Majors and Minors:".toUpperCase() + people[n].majorsAndMinors + "\n \n Hometown: ".toUpperCase() + people[n].hometown + "\n \n Favorite Programming Keyword: ".toUpperCase() + people[n].favKeyword + "\n \n \n \n";
            
        }
    }

    
    let sorry: HTMLHeadingElement = document.getElementById("interestSearch") as HTMLHeadingElement;

    let str: string = "";

    if (pArr.length === 0) {
        // print("Sorry!");
        sorry.innerText = "Sorry! No one on the team matches that search!";
    } else {
        // sorry.innerText = pArr;
        for (let i: number = 0; i < pArr.length; i++) {
            str = str + pArr[i];
        }
        sorry.innerText = str;
    }

    return;
}
