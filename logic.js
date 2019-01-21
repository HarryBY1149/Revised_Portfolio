$(document).ready(function () {

    const projectDetails = [
        {
            name: "Recipe Finder",
            link: 'https://my-recipes-storage.firebaseapp.com',
            description: 'A front-end web application that allows a user to search for recipes based on a number of keywords and alternate criteria.',
            github: 'https://github.com/HarryBY1149/Project1" target="_blank"><p>The github repo<p></a>',
            image: 'assets/images/food!.jpg',
            tools: 'Tools: HTML5, CSS3, JS, JQuery, Firebase'
        },
        {
            name: "Eat Da Burger",
            link: 'https://mysterious-earth-90800.herokuapp.com/',
            description: 'A simple fullstack application that shows the world what delicious burgers you&apos;ve eaten.',
            github: 'https://github.com/HarryBY1149/burger',
            image: 'assets/images/Burger.jpg',
            tools: 'Tools: HTML5, CSS3, JS, JQuery, node.js, handlebars.js, express.js'
        },
        {
            name: "Self-Improvement Kingdom",
            link: 'https://nameless-thicket-61553.herokuapp.com',
            description: 'A gamified, fullstack task management application that uses casual game techniques to encourage users to get stuff done.',
            github: 'https://github.com/harryBY1149/Self-Improvement-Kingdom',
            image: 'assets/images/login-castle.png',
            tools: 'Tools: HTML5, CSS3, JS, JQuery, Bootstrap, node.js, handlebars.js, passport.js, express.js and sequelize.js, '
        },
        {
            name: 'Recca',
            link: 'https://recca.herokuapp.com',
            description: 'With Recca, users can search, save, track, and recommend their favorite movies, shows, books, music, and video games!',
            github: 'https://github.com/brijamfitz/Recca',
            image: 'assets/images/recca-logo.png',
            tools: 'Tools: React.js, CSS3, SaSS, MERN stack'
        }
    ]


    let iterator = 0;
    let currentAutoDisplay = null;

    function displayProject(i) {
        var data = projectDetails[i];
        $(`#${i}`).addClass("hover");
        var body = $("<div>")
        body.addClass("mx-auto detail-cont mt-3")
        var image = $("<img>")
        image.addClass("img-fluid mx-auto project-img");
        image.attr("src", data.image)
        image.attr("style", "height:258px; width:258px")
        body.append(image);
        var description = $("<h4>");
        description.addClass("text-center")
        description.append(data.description);
        body.append(description);
        var tools = $("<p>");
        tools.addClass("text-center");
        tools.append(data.tools);
        body.append(tools);
        $("#detail-display").append(body);
        var links = $("<div>")
        links.addClass("col-md-8 mx-auto")
        var appLink = $("<a>");
        appLink.attr("href", data.link);
        appLink.attr("target", "_blank")
        appLink.addClass("float-left project-link");
        appLink.append("<p>The deployed app</p>");
        var gitLink = $("<a>");
        gitLink.attr("href", data.github);
        gitLink.addClass("float-right project-link");
        gitLink.append("<p>The github repo</p>");
        links.append(appLink, gitLink);
        $("#detail-display").append(links);
        $("#detail-display").show();
    }

    function autoDisplay() {
        $(".img-box").removeClass("hover");
        $("#detail-display").empty();
        displayProject(iterator);
        iterator++;
        if (iterator == projectDetails.length) {
            iterator = 0;
        }
    };

    function displayHandler(flag) {
        if (flag) {
            currentAutoDisplay = setInterval(autoDisplay, 5000);
        } else {
            clearInterval(currentAutoDisplay);
        }
    }
    displayProject(iterator);
    displayHandler(true);

    $(".img-box").mouseenter(function () {
        $(".img-box").removeClass("hover")
        $("#detail-display").empty();
        $(this).addClass("hover");
        displayHandler(false);
        iterator = parseInt($(this).data('id'));
        displayProject(iterator);
        iterator++;
        if (iterator == projectDetails.length) {
            iterator = 0;
        };
    });
    $(".img-cont").mouseout(function () {
        console.log("We are in the mouseout function");
        displayHandler(false);
        displayHandler(true);
    });

});




























