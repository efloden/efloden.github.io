"use strict";angular.module("eflodengithubioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl",controllerAs:"projects"}).otherwise({redirectTo:"/"})}]),angular.module("eflodengithubioApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("eflodengithubioApp").controller("AboutCtrl",function(){this.skills=[{name:"Japanese",percentage:"85"},{name:"HTML5",percentage:"80"},{name:"CSS3",percentage:"70"},{name:"JavaScript",percentage:"70"},{name:"AngularJS",percentage:"60"},{name:"Photoshop",percentage:"70"},{name:"Java",percentage:"80"},{name:"Python",percentage:"70"},{name:"Git",percentage:"60"},{name:"Linux",percentage:"50"},{name:"NPM",percentage:"60"},{name:"Desire to Learn More",percentage:"100"}]}),angular.module("eflodengithubioApp").controller("ProjectsCtrl",function(){this.projects=[{name:"Meikaichan Kanji Flashcards",description:"Meikaichan is a Kanji flash card learning program. It displays the English meaning, Kanji symbol, Hiragana, audio, and accompanying image for each card.",github:"https://github.com/efloden/Meikai-Kanji-Flashcards",image:"images/bonsai.2e105641.png"},{name:"MineSim",description:"A mining simulator game built as part of the DECO2800 Simulator Bundle Project in 2015.",github:"https://github.com/UQdeco2800/minesim",image:"images/minesim.56157123.jpg"},{name:"Old Trove",description:"Oldbook is a a web application that allows the user to find and visualise past historic events that coincide with past personal life events.",github:"",image:"images/oldtrove.c7e572cc.jpg"},{name:"The Gnome",description:"Hypothetical Bar website built as Web Design coursework.",github:"",image:"images/gnome.4c5ce667.jpg"}]}),angular.module("eflodengithubioApp").controller("ContactCtrl",["$scope","$http",function(a,b){a.result="hidden",a.resultMessage,a.formData,a.submitButtonDisabled=!1,a.submitted=!1,a.submit=function(c){a.submitted=!0,a.submitButtonDisabled=!0,c.$valid?b({method:"POST",url:"contact-form.php",data:$.param(a.formData),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(b){console.log(b),b.success?(a.submitButtonDisabled=!0,a.resultMessage=b.message,a.result="bg-success"):(a.submitButtonDisabled=!1,a.resultMessage=b.message,a.result="bg-danger")}):(a.submitButtonDisabled=!1,a.resultMessage='Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.',a.result="bg-danger")}}]),angular.module("eflodengithubioApp").run(["$templateCache",function(a){a.put("views/about.html",'<style>body { \n		background-image: url("images/bark.305647d6.jpg");\n		background-repeat: no-repeat;\n	}\n	.panel {\n		background-color: rgba(245, 245, 245, .8);\n	}\n	.jumbotron {\n		background-color: rgba(245, 245, 245, .8);\n	}</style> <div class="jumbotron"> <div> <h1>About Me</h1> <img src="images/linkedin.3bf36784.png"><br> <p> I\'m an Information Technology bachelors student with a love for discovering, designing, coding, and creating. Majoring in Software Design and Japanese at the University of Queensland in my hometown of Brisbane, Australia. I am drawn to new technology as I am to other cultures. Passionate about travel, quality design aesthetics and programming solutions, I look forward to opportunies to share my experience and expand my horizons. </p> </div> </div> <div class="panel" id="skills" style="float: left; width: 20em; padding-right: 2em"> <h4 class="text-right">My core skills and strengths</h4> <!-- ngView --> <div ng-controller="AboutCtrl as control"> <ul style="list-style-type: none"> <div class="progress" ng-repeat="skill in about.skills"> <div class="progress-bar" role="progressbar" aria-valuenow="{{ skill.percentage }}" aria-valuemin="0" aria-valuemax="100" style="width: {{ skill.percentage }}%"> {{ skill.name }} </div> </div> </ul> </div> <!-- end ngView --> </div> <div class="panel" style="float: right"> <h4 class="text-center">My Online Profiles</h4> <div id="contactinfo"> <script src="//platform.linkedin.com/in.js" type="text/javascript"></script> <script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/earlmarkfloden" data-format="inline" data-related="false"></script> </div> </div>'),a.put("views/contact.html",'<div id="contact"> <h1>Contact Me</h1> <div> <p>Want to email me directly? <a href="http://www.google.com/recaptcha/mailhide/d?k=01BVT3Sd_oIQdw-ZT2vODuCw==&amp;c=oYTTVYiZWJ4NOin3snEmIyo8CS4LZi-z2JYZil9JVO8=" onclick="window.open(\'http://www.google.com/recaptcha/mailhide/d?k\\07501BVT3Sd_oIQdw-ZT2vODuCw\\75\\75\\46c\\75oYTTVYiZWJ4NOin3snEmIyo8CS4LZi-z2JYZil9JVO8\\075\', \'\', \'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300\'); return false" title="Reveal this e-mail address">Click to reveal my email address</a> </p> </div> <div ng-controller="ContactCtrl" class="panel-body"> <form ng-submit="submit(contactform)" name="contactform" method="post" action="" class="form-horizontal" role="form"> <div class="form-group" ng-class="{ \'has-error\': contactform.inputName.$invalid && submitted }"> <label for="inputName" class="col-lg-2 control-label">Name</label> <div class="col-lg-10"> <input ng-model="formData.inputName" type="text" class="form-control" id="inputName" name="inputName" placeholder="Your Name" required> </div> </div> <div class="form-group" ng-class="{ \'has-error\': contactform.inputEmail.$invalid && submitted }"> <label for="inputEmail" class="col-lg-2 control-label">Email</label> <div class="col-lg-10"> <input ng-model="formData.inputEmail" type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="Your Email" required> </div> </div> <div class="form-group" ng-class="{ \'has-error\': contactform.inputSubject.$invalid && submitted }"> <label for="inputSubject" class="col-lg-2 control-label">Subject</label> <div class="col-lg-10"> <input ng-model="formData.inputSubject" type="text" class="form-control" id="inputSubject" name="inputSubject" placeholder="Subject Message" required> </div> </div> <div class="form-group" ng-class="{ \'has-error\': contactform.inputMessage.$invalid && submitted }"> <label for="inputMessage" class="col-lg-2 control-label">Message</label> <div class="col-lg-10"> <textarea ng-model="formData.inputMessage" class="form-control" rows="4" id="inputMessage" name="inputMessage" placeholder="Your message..." required></textarea> </div> </div> <div class="form-group"> <div class="col-lg-offset-2 col-lg-10"> <button type="submit" class="btn btn-default" ng-disabled="submitButtonDisabled"> Send Message </button> </div> </div> </form> <p ng-class="result" style="padding: 15px; margin: 0">{{ resultMessage }}</p> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Hi there!</h1> <p class="lead"> My name is <span style="font-size: 1.2em; color: #41969c">Earl Floden</span> and I\'m a software developer </p><p>Welcome to my Portfolio! Inspect the code on GitHub:</p><p> </p> <p><a class="btn btn-lg btn-success" ng-href="https://github.com/efloden/efloden.github.io">Certainly!<span class="glyphicon"></span></a></p> </div> <div class="row marketing"> <h4>This Website</h4> <p> This entire website is built on AngularJS and Node.JS with Karma testing. It is hosted on my GitHub Pages. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building a framework for fast, reactive application development. </p> <h4>Karma</h4> <p> Spectacular Test Runner for JavaScript. </p> </div>'),a.put("views/projects.html",'<div class="list-group" ng-controller="ProjectsCtrl as control"> <h1 class="text-center">Projects</h1> <div class="container-fluid"> <div class="row"> <div ng-repeat="project in control.projects"> <h3 class="text-center"> {{project.name}} </h3> <!-- Image Gallery --> <img class="project-image" src="{{project.image}}"> <h4> {{project.description}} </h4> </div> </div> </div> </div>')}]);