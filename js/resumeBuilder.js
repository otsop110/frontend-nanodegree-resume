/*
This is empty on purpose! Your code to build the resume will go here.
 */
 Define the bio Object
 */



var bio = {
	"name": "Tarja Mård",
	"role": ["Statistician", "Life-long learner"],
	"contacts": {
		"mobile": "+33683264604",
		"email": "trjmard@gmail.com",
		"twitter": "@TarjaMard",
		"github": "otsop110",
		"location": "Paris, France"
		},
	
	
	"bioPic": "images/fry.jpg",
	"welcomeMessage" : "I'm Tarja and I'm interested in new job opportunities!",

	"skills": ["ease with numbers", "flexibility", "multi-lingual", "active and entrepreneurial", "good sport"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills);
	$("#skills").append(formattedSkill);
}

$("#topContacts").append(formattedBiopic);
$("#topContacts").append(formattedWelcome);


function displayBio() {
 	

 	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 	$("#footerContacts").append(formattedMobile);

 	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 	$("#footerContacts").append(formattedEmail);

 	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 	$("#footerContacts").append(formattedTwitter);

 	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 	$("#footerContacts").append(formattedGithub);

 	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 	$("#footerContacts").append(formattedLocation);
 
 };

 displayBio();



var work = {
	"jobs": [
		{
		"employer": "OECD",
        "title": "statistician", 
        "location": "Paris, France", 
        "dates": "2010-2015",
        "description": "Data collection, validation, manipulation and analysis."
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
    ]
}

function displayWork() {
 for (job in work.jobs) {
 	$("#workExperience").append(HTMLworkStart);
 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
 	$(".work-entry:last").append(formattedEmployerTitle);

 	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	$(".work-entry:last").append(formattedDates);

 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 	$(".work-entry:last").append(formattedDescription);
 }
 }
 displayWork();

var projects = {

    "projects": [
    	{
    	"title": "Election Statistics Web Dissemination",
    	"dates": "1999-2000",
        "description": "Successful transfer to the web based dissemination of election statistics in Statistics Finland. Defining and producing the contents of the website.",
        "images": ["", ""]
    	},
    	{
    	"title": "Export restrictions inventory",
    	"dates": "2010-2014",
        "description": "Defining the contents and the dissemination methods of the OECD inventory of Export restrictions",
        "images": ["", ""]
    	}
        ]
}
function displayProjects() {
 for (project in projects.projects) {
 	$("#projects").append(HTMLprojectStart);
 	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 	$(".project-entry:last").append(formattedProjectTitle);

 	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 	$(".project-entry:last").append(formattedProjectDates);

 	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 	$(".project-entry:last").append(formattedProjectDescription);
 }
 }
 displayProjects();

var education = {
	"schools": [
		{
		"name":"University of Sussex",
		"location": "Brighton, UK",
		"degree": "Social Science",
        "major": ["Social Science"],
		"dates": 1994,
        "url": "http://www.sussex.ac.uk"
        },
        {
		"name":"University of Turku",
		"location": "Turku, Finland",
		"degree": "MA, Social Science",
        "major": ["Political Science, Philosophy"],
		"dates": 1997,
        "url": "http://www.utu.fi/en/Pages/home.aspx"
        }
    ],
    "onlineCourses": [
    	{
    	"title": "Introduction to Programming Nano Degree",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
        }
    ]
}

function displayEducation() {
 for (school in education.schools) {
 	$("#education").append(HTMLschoolStart + HTMLonlineClasses);

 	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
 	$(".education-entry:last").append(formattedSchoolName);
 	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
 	$(".education-entry:last").append(formattedSchoolDegree);
 	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
 	$(".education-entry:last").append(formattedSchoolDates);
 	var formattedDSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
 	$(".education-entry:last").append(formattedDescription);
 	var formattedDSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
 	$(".education-entry:last").append(formattedDescription);
 	};
  for (course in education.onlineCourses) {
	
	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	$(".online-entry:last").append(formattedonlineTitle);
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	$(".online-entry:last").append(formattedonlineSchool);
	var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
	$(".online-entry:last").append(formattedonlineDate);
	var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	$(".online-entry:last").append(formattedonlineURL)
	}
}

 displayEducation();

// add map
$("#mapDiv").append(googleMap);

// internationalize change with switch at start of file
$("#main").append(internationalizeButton);

$(document).click(function(loc) {
  var x =loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});