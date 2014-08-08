"use strict";angular.module("stickyNotesApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/notes.html",controller:"notesController"})}]),angular.module("stickyNotesApp").controller("headerController",["$scope","$rootScope",function(a,b){b.tile="gridview",a.showHideSideBar=function(){$("#sidebar").css("margin-left","0px")},a.hideSideBar=function(){$("#sidebar").css("margin-left","-291px")},a.changeView=function(a){b.tile=a}}]),angular.module("stickyNotesApp").controller("notesController",["$scope","$rootScope",function(a,b){a.addListNote=!1,a.editIndex=void 0,a.color="white",a.colors=["white","blue","green","orange","yellow"],a.newList=[{value:"",selected:!1}],a.notes=JSON.parse(localStorage.getItem("stickyNotesApp"))||[],a.createNote=function(){a.addListNote?(a.newList.pop(),void 0===a.editIndex?a.notes.push({type:"ListNote",data:a.newList,title:a.title,color:a.color}):a.notes[a.editIndex]={type:"ListNote",data:a.newList,title:a.title,color:a.color}):a.isImageNote?void 0===a.editIndex?a.notes.push({type:"ImageNote",data:a.addNote,title:a.title,color:a.color,img:$("img").attr("src")}):a.notes[a.editIndex]={type:"ImageNote",data:a.addNote,title:a.title,color:a.color,img:$(".modal img").attr("src")}:void 0===a.editIndex?a.notes.push({type:"Note",data:a.addNote,title:a.title,color:a.color}):a.notes[a.editIndex]={type:"Note",data:a.addNote,title:a.title,color:a.color},localStorage.setItem("stickyNotesApp",JSON.stringify(a.notes)),a.clearValues()},a.clearValues=function(){a.newList=[{value:"",selected:!1}],a.addNote="",a.title="",a.editIndex=void 0,a.addListNote=!1,a.isImageNote=!1,a.color="white"},a.prepareModal=function(b){a.editIndex=b,"Note"===a.notes[b].type?(a.newList=[{value:"",selected:!1}],a.addNote=a.notes[b].data):"ImageNote"===a.notes[b].type?(a.newList=[{value:"",selected:!1}],a.addNote=a.notes[b].data,a.noteImg=a.notes[b].img,a.addListNote=!1,a.isImageNote=!0):(a.addListNote=!0,a.newList=a.notes[b].data),a.title=a.notes[b].title,a.color=a.notes[b].color},a.toggleList=function(){a.addListNote=a.addListNote?!1:!0,a.isImageNote=!1},a.$watch("newList[newList.length-1].value",function(b){""!=b&&a.newList.push({value:"",selected:!1})}),b.$watch("tile",function(){a.tile=b.tile}),a.deleteNote=function(b){a.notes.splice(b,1),a.updateNotes()},a.updateNotes=function(){localStorage.setItem("stickyNotesApp",JSON.stringify(a.notes))},a.removeList=function(b){a.newList.splice(b,1)},a.imageUpload=!1,a.toggleInsertImage=function(){a.imageUpload=a.imageUpload?!1:!0},a.toggleImage=function(){a.isImageNote||($(".fileinput img").remove(),a.isImageNote=!0)}}]),angular.module("stickyNotesApp").directive("addNote",function(){return{restrict:"AE",templateUrl:"views/templates/addnote.html"}}),angular.module("stickyNotesApp").directive("notesTile",function(){return{restrict:"AE",templateUrl:"views/templates/notestile.html"}});