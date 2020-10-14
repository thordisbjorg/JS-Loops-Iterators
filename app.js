
//Transforming randomized data into an array
var people = [{
    name: "Dominik Pegrum", birth_date: new Date("9/13/1993"),
    children: 5, country: "Brazil", can_program: false
},

{
    name: "Bambi Hedditeh", birth_date: new Date("7/12/2001"),
    children: 3, country: "France", can_program: true
},

{
    name: "Franny Wortt", birth_date: new Date("2/15/1985"),
    children: 5, country: "Colombia", can_program: true
},

{
    name: "Willy Ackery", birth_date: new Date("8/23/1974"),
    children: 4, country: "China", can_program: true
},

{
    name: "Corrie Appleby", birth_date: new Date("2/4/2002"),
    children: 2, country: "Georgia", can_program: true
},

{
    name: "Serge Gooderridge", birth_date: new Date("7/19/1986"),
    children: 4, country: "Indonesia", can_program: true
},

{
    name: "Ivan Christiensen", birth_date: new Date("10/14/1997"),
    children: 2, country: "Canada", can_program: false
},

{
    name: "Orel Fried", birth_date: new Date("1/13/1993"),
    children: 1, country: "Zimbabwe", can_program: false
},

{
    name: "Grayce Joplin", birth_date: new Date("10/7/1984"),
    children: 5, country: "Russia", can_program: true
},

{
    name: "Oralla Dallander", birth_date: new Date("11/23/2000"),
    children: 1, country: "Philippines", can_program: false
}

]


//Output on how many children all people have, in total
var sum = 0;

for (var i = 0; i < people.length; i++) {
    sum = people[i].children + sum;

}
console.log("total amount of children are " + sum)


//Output one string per person (name and age)
for (var i = 0; i < people.length; i++) {
    console.log(people[i].name);
    console.log(2020 - people[i].birth_date.getFullYear());
}

//Output all properties of all people, using for()
for (var i = 0; i < people.length; i++) {
    for (info in people[i]) {
        if (info === "birth_date") {
            console.log(info + ":" + people[i][info].getFullYear());
        } else {
            console.log(info + ":" + people[i][info]);
        }


    }
}