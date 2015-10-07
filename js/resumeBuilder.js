
var bio = {
     "name": "Tarja Mård",
	"role": ["Life-long learner"],
	"contacts": {
		"mobile": "+33683264604",
		"email": "trjmard@gmail.com",
		"twitter": "@TarjaMard",
		"github": "otsop110",
		"location": "Paris, France"
		},
	"bioPic": {
          "pic": "images/logo-240_medium.jpg",
          "alt": "my bio picture"
     },
	"welcomeMessage": "Hi, I'm Tarja. Thanks for checking my profile! I'm not currently actively seeking for work, but still curious to learn about new job opportunities.",
     "skills": ["Active", " Entrepreneurial", " Multi-lingual", " Resourceful", " Self-directed", " Well-organized"],
     
     "display": function() {
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);    
     var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic.pic)
                                     .replace("%s%", bio.bioPic.alt);
     var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     var formattedHeader = formattedName + formattedRole;
     
     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
     var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

     $("#header").prepend(formattedHeader);
     $("#topContacts").append(formattedBiopic + formattedWelcome);
     $("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);


     if (bio.skills.length > 0) {
          $("#topContacts").append(HTMLskillsStart);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
          $("#skills").append(formattedSkill);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
          $("#skills").append(formattedSkill);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
          $("#skills").append(formattedSkill);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
          $("#skills").append(formattedSkill);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
          $("#skills").append(formattedSkill);
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
          $("#skills").append(formattedSkill);
     }
}
};

var work = {
	"jobs": [
	{
          "employer": "OECD",
          "title": "Statistician", 
          "location": "Paris, France", 
          "dates": "2010-2015",
          "description": "Data crunching for greater good (free trade)."
    	},
    	{
          "employer": "Minimaraton",
          "title": "Founder and owner", 
          "location": "Turku, Finland", 
          "dates": "2006-2010",
          "description": "Making parents' lives healthier and happier!"
    	},
    	{
          "employer": "Statistics Finland",
          "title": "Programme officer, Senior statistician", 
          "location": "Helsinki, Finland", 
          "dates": "1999-2005",
          "description": "Data collection, validation, manipulation and analysis."
    	}
     ],

     "display": function() {
          for (job in work.jobs) {
               $("#workExperience").append(HTMLworkStart);
               var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
               var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
               var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
               var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
               var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedDescription;
               $(".work-entry:last").append(formattedEmployerTitle);
     }
}
};

var projects = {
     "projects": [
          {
          "title": "Export restrictions inventory",
          "dates": "2010-2013",
          "description": "Defining the contents and the dissemination methods of the OECD inventory of Export restrictions.",
          "images": { 
               "img": ["images/screenshot_inventory-240_medium.jpg"],
               "alt":["Screenshot of OECD inventory of export restrictions"]
          }
          },
          {
          "title": "My first app",
          "dates": "2015-",
          "description": "My first app was the final project for the Udacity Introduction to Programming Nanodegree. Working on this project was so much fun!",
          "images": { 
               "img": ["images/my_app-240_medium.jpg"],
               "alt":["Screenshot of my first app"]
          }
          },
          {
          "title": "Visual arts",
          "dates": "2015-",
          "description": "Aim of this project is to evolve from art viewer to art maker. Fine arts and photography nourish the soul and teach how to observe the milieu more discreetely.",
          "images": { 
               "img": ["images/nature_morte-240_medium.jpg", "images/paysage-240_medium.jpg", "images/forest-240_medium.jpg", "images/fog-240_medium.jpg"],
               "alt":["La nature morte", "Un Paysage finlandais", "Musical forest", "Foggy lake in Finland"]
          }
          },
          {
          "title": "Summer home in Finland",
          "dates": "2007-",
          "description": "Summer vacations in Finland are blissful. The summerhome needs constant maintaining, but there is always time to relax and enjoy the incredible peace of the pure northern wilderness.",
          "images": { 
               "img": ["images/red_cabin-240_medium.jpg", "images/summer_sky-240_medium.jpg", "images/vacation-240_medium.jpg", "images/summer_green-240_medium.jpg"],
               "alt":["Red hut in the forest", "Summer sky", "Sunny summer day in Finland", "Paysage finlandais photo"]
          }
          }
     ],

     "display": function() {
          for (project in projects.projects) {
               $("#projects").append(HTMLprojectStart);
               var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
               var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
               var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
               var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
               $(".project-entry:last").append(formattedProject);

               if (projects.projects[project].images.img.length >0) {
                    for (image in projects.projects[project].images.img) {
                         var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images.img[image])
                                                              .replace("%s%", projects.projects[project].images.alt[image]);
                         $(".project-entry:last").append(formattedImage);
               }
          }
     }
}
};

var education = {
     "schools": [
         {
          "name":"University of Sussex",
          "location": "Brighton, UK",
          "degree": "Erasmus exchange",
          "major": "Social Science",
          "dates": 1994,
          "url": "http://www.sussex.ac.uk"
          },
          {
          "name":"University of Turku",
          "location": "Turku, Finland",
          "degree": "MA, Social Science",
          "major": "Political Science",
          "dates": 1997,
          "url": "http://www.utu.fi/en/Pages/home.aspx"
          }
     ],
    
     "onlineCourses": [
          {    
          "title": "Introduction to Programming Nanodegree",
          "school": "Udacity",
          "date": 2015,
          "url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
          },
          {    
          "title": "Front-End Web Developer Nanodegree",
          "school": "Udacity",
          "date": 2015,
          "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
          }
     ],

     "display": function() {
          for (school in education.schools) {
               $("#education").append(HTMLschoolStart);
               var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
               var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
               var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
               var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
               var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
               

               $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
               $(".education-entry:last a").attr("href", education.schools[school].url);
          }

          $("#education").append(HTMLonlineClasses);
          $("#education").append(HTMLschoolStart);
          
          for (school in education.onlineCourses){
               var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
               var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
               var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].date);
               var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);

               $(".education-entry:last").append(formattedonlineTitle, formattedonlineSchool, formattedonlineDates);
               $(".education-entry:last a").attr("href", education.onlineCourses[school].url);
          }

     }
};


function inName() {
     var name = $("#name").html();
     name = name.trim().split(" ");
     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
     name[1] = name[1].toUpperCase();
     return name[0] + " " + name[1];
};





// add internationalize button
$("#header").prepend(internationalizeButton);

//add color toggle 
$("#header").prepend(colorButton);

// add map
$("#map-div").append(googleMap);







