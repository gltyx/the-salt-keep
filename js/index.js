var app = (function() {

	// TODO testing
	ko.applyBindings(viewModel);
    viewModel.mainMenu.checkSaves();
    $('.app-blackout').fadeOut(1000);

    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        try {
            ko.applyBindings(viewModel);
            viewModel.mainMenu.checkSaves();
        } catch (err) {
            console.log(err);
        }
    }

})();