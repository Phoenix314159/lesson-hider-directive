let data = [
    {
        "weekday": "Monday",
        "lesson": "Routing"
    },
    {
        "weekday": "Tuesday",
        "lesson": "Directives"
    },
    {
        "weekday": "Wednesday",
        "lesson": "Review"
    },
    {
        "weekday": "Thursday",
        "lesson": "Firebase"
    },
    {
        "weekday": "Friday",
        "lesson": "No server project"
    }
];
let lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

module.exports = {
    getData: function (req, res) {
        res.json(data);
    },
    getLessons: function (req, res) {
        res.json(lessons);
    }
}
