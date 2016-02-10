'use strict';

var controllersModule = require('./_index');
/**
 * @ngInject
 */
function ContentCtrl(AwsSDK) {
  	// Initialize ViewModel and loading variable
	var vm = this;
	vm.loading = true;
	vm.notes = [];

	vm.addNote = function(item) {
		//Local add
        vm.notes.push(item);

        //Remote add
	    AwsSDK.helloPost({"type":"put","text":item.text}).then(function() {
	    }).catch(function(error) {
	        console.error(error);
	    });
    };

    vm.removeNote = function(item) {
    	//Local remove
        vm.notes.splice(vm.notes.indexOf(item), 1);

        //Remote remove
	    AwsSDK.helloPost({"type":"del","id": item.id}).then(function() {})
	    .catch(function(error) {
	        console.error(error);
	    });
    };

    vm.getNotes = function() {
    	//Local loading variable
    	vm.loading = true;
    	//Remote fetch of notes
	    AwsSDK.helloPost({"type":"get"}).then(function(response) {
	        vm.notes = response.data;
			vm.loading = false;
	    }).catch(function(error) {
	        console.error(error);
	    });
    };

    //Fetch remote data on init
    vm.getNotes();
}

controllersModule.controller('ContentCtrl', ContentCtrl);