let change =document.getElementById(`firstP`)
change[`style`][`fontSize`]=`10px`;
change[`style`][`fontFamily`]=`cursive`;

let changes = document.getElementsByClassName(`header`);
for (let i = 0; i < changes.length; i++){ 
changes[i][`innerHTML`] = `Aha it no lenger says what it said before!`;
}

let changes3 = document.getElementsByClassName(`pic`);
for (let i = 0; i <changes3.length; i++) {
    changes3[i][`src`] = `https://images.unsplash.com/photo-1657495338758-e77b546d03f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60`
}

// let changes4 = document.getElementsByClassName(`pTags`);
// for (let i = 0; i < changes4.length; i++) {
//    if(changes4.includes(`link`)){
//     changes4[i][`innerHTML`] = ` <a href="google.ca">Another Link</a>` + changes4[`innerHTML`];
//    }
// }

