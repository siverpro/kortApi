'use strict';
module.exports = {GetAvailableCards};

function GetAvailableCards(req, res) {
	var year = req.swagger.params.year.value;
	var month = req.swagger.params.month.value;
	var requestDate = req.swagger.params.date.value;
	var CardDate = function(date, availablecards) {
		this.date = date,
		this.availablecards = availablecards
	};
	var dateList = [];
	dateList.push(new CardDate(1, 15));
	dateList.push(new CardDate(2, 9));
	res.json(dateList);
}