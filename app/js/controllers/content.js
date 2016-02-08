'use strict';

var controllersModule = require('./_index');
/**
 * @ngInject
 */
function ContentCtrl(NoteService) {
  	// ViewModel
	var vm = this;
	vm.notes = NoteService;
}

controllersModule.controller('ContentCtrl', ContentCtrl);