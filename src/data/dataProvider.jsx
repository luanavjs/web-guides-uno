import GIT from "./git.json";
import BDD from "./bdd.json";
import Web from "./web";
/*import React from './react.json';
import Node from './node.json';*/
const baseUrl = "/guide/"
const courses = [
    { data: Web, name: "Web FullStack", url: baseUrl+"web", contents: getContents(Web, true), proGuide: true},
    { data: BDD, name: "Bases de Datos", url: baseUrl+"db", contents: getContents(BDD, false), proGuide: false},
    { data: GIT, name: "GIT", url: baseUrl+"git", contents: getContents(GIT, false), proGuide: false},
];

export function getCourses() {
    return courses;
}

function getContents(data, proGuide) {
    var contents = " - ";

    proGuide ? (data.map(guide => contents = contents + guide.title + " - ")) 
        : (data.content.map(modules => (modules.void ? "" : contents = contents + modules.name + " - ")))

    return contents;
}

export function getData(name) {
    switch (name) {
        case "git":
            return {
                data: [GIT],
                title: "git",
                description: "esto es un road to git",
                telegram: "https://t.me/unogit"
            };
        case "db":
            return {
                data: [BDD],
                title: "Bases de Datos",
                description: "esto es un road to bases de datos",
                telegram: "https://t.me/DDBBUNO"
            };
        case "web":
            return {
                data: Web,
                title: "Web Fullstack",
                description: "esto es un road to desarrollo web fullstack",
                telegram: "https://t.me/javascript_uno"
            };
        /*case "react": return({data:React, title:"ReactJS", description:"esto es un road to react"});
        case "node": return({data:Node, title:"NodeJS", description:"esto es un road to node"});*/
        default:
            return ""
    }
}
