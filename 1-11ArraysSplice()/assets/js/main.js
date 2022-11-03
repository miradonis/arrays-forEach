console.log("test");

let array = [ 
    "imageTeilnehmer000supercode.jpg", 
    "imageTeilnehmer001supercode.jpg" 
];

array.splice(2, 3, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg");
console.log(array.length);
console.log(array);

array.splice(5, 6, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg");
console.log(array.length);
console.log(array);

array.splice(2, 6, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg");
console.log(array.length);
console.log(array);


array.forEach((liste, index) => {
    console.log(index, liste);
});