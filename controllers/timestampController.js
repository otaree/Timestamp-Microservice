let date = require('date-and-time');


var isDate = function (date) {
    if (!isNaN(date)) {
        date = parseInt(date);
    }
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

function dateObj(passedDate) {
    if (isDate(passedDate)) {
        if (!isNaN(passedDate)) {
            passedDate = parseInt(passedDate);
            var theDate = new Date(passedDate * 1000);
        } else {
            var theDate = new Date(passedDate);
            theDate = new Date(theDate.valueOf() - theDate.getTimezoneOffset() * 60000);
        }
        
        var myDate = date.format(theDate, 'MMMM DD, YYYY');
        return {
            "unix": Math.floor(theDate.getTime()/1000),
            "natural": myDate
        }

    } else {
        return {
            "unix": null,
            "natural": null
        }

    }

}

module.exports = function(app) {

    app.get("/:id", function(req, res) {
        var date = req.params.id;
        var obj = dateObj(date);
        res.json(obj);
    });
    

};