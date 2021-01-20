function run(albums, prop) {

    let arr = [];

    for(let i = 0; i < albums.length; i ++){
        arr.push( albums[i][prop] );
    }
    return arr;
 
}
let albums = [
    {singer:"the weekend", title:"after hours", IdNum: 123},
    {singer:"eminem", title:"encore", IdNum: 789},
    {singer:"mac miller", band:"swimming", IdNum: 456},
];

run(albums, prop); //enter prop: singer/title/IdNum



