'use strict';

var servicesModule = require('./_index.js');

function NoteService() {
    var notes = [{text:'Göra en todo-lista'},
    {text:'Köpa mjölk'},
    {text:'Köpa ägg'},
    {text:'Laga mat'}];
    var service = {};
    
    service.addNote = function(item) {
        item.done = false;
        notes.push(item);
    };
    service.removeNote = function(item) {
        var index = notes.indexOf(item);
        notes.splice(index, 1);
    };
    service.getNotes = function() {
        return notes;
    };
    
    return service;
}

servicesModule.service('NoteService', NoteService);