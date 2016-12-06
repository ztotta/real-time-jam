(function() {
  "use strict";

  angular
      .module("jamApp")
      .controller("InstrumentsController", InstrumentsController);

  InstrumentsController.$inject = ["$state"];

  function InstrumentsController($state) {
    var vm = this;
		
		vm.createSteps = createSteps;
		
		vm.instruments = [
			{
				name: "KICK",
				steps: [],
				muted: false 
			},
			{
				name: "SNARE",
				steps: [],
				muted: true
			},
			{
				name: "HIHAT-CLOSED",
				steps: [],
				muted: true
			},
			{
				name: "HIHAT-OPEN",
				steps: [],
				muted: true
			},
			{
				name: "RIMSHOT",
				steps: [],
				muted: true
			},
			{
				name: "CLAP",
				steps: [],
				muted: true
			}
		];

		// For each instrument, call the steps to populate its panel:
		vm.instruments.forEach((instrument, index) => {
			createSteps(instrument, index);
		});
		
		function createSteps(instrument, index) {
			for (var i = 0; i < 64; i++) {
				instrument.steps.push(
					{
						id: `${instrument.name}${i}`,
						on: false
					}
				);
			};
		};
		

    vm.$state = $state;

  }

})();
