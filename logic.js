$(document).ready(function () {
    var projectDetails = {
        recipeFinder: {
            link: 'https://my-recipes-storage.firebaseapp.com',
            description: 'A front-end web application that allows a user to search for recipes based on a number of keywords and alternate criteria.',
            github: 'https://github.com/HarryBY1149/Project1" target="_blank"><p>The github repo<p></a>',
            image: 'assets/images/food!.jpg',
            tools: 'Tools: HTML5, CSS3, JS, JQuery, Firebase'
        },
        eatBurger: {
            link: 'https://mysterious-earth-90800.herokuapp.com/',
            description: 'A simple fullstack application that shows the world what delicious burgers you&apos;ve eaten.',
            github: 'https://github.com/HarryBY1149/burger',
            image: 'assets/images/Burger.jpg',
            tools: 'Tools: HTML5, CSS3, JS, JQuery, node.js, handlebars.js, express.js'
        },
        selfKingdom: {
            link: 'https://glacial-wave-11290.herokuapp.com/',
            description: 'A gamified, fullstack task management application that uses casual game techniques to encourage users to get stuff done.',
            github: 'https://github.com/brijamfitz/project-2',
            image: 'assets/images/login-castle.png',
            tools: 'Tools: HTML5, CSS3, JS, JQuery, Bootstrap, node.js, handlebars.js, passport.js, express.js, sessions.js, sequelize.js'
        }
    }



    $(".img-cont").mouseenter(function () {
        $(".img-cont").removeClass("hover")
        $("#detail-image-tools").empty();
        $("#link-github").empty();
        $(this).addClass("hover");
        var project = $(this).data('id')
        var data = projectDetails[project];
        var body = $("<div>")
        body.addClass("mx-auto detail-cont")
        var image = $("<img>")
        image.addClass("img-fluid mx-auto project-img");
        image.attr("src", data.image)
        image.attr("style", "height:200px; width:200px")
        body.append(image);
        var description = $("<h4>");
        description.addClass("text-center")
        description.append(data.description);
        body.append(description);
        var tools = $("<p>");
        tools.addClass("text-center");
        tools.append(data.tools);
        body.append(tools);
        $("#detail-image-tools").append(body);
        var appLink = $("<a>");
        appLink.attr("href", data.link);
        appLink.addClass("mx-4");
        appLink.append("<p>The deployed app</p>");
        var gitLink = $("<a>");
        gitLink.attr("href", data.github);
        gitLink.addClass("mx-4");
        gitLink.append("<p>The github repo</p>");
        $("#link-github").append(appLink, gitLink)
    })
});




























