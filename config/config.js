/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "192.168.0.220", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8081,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.0.0/24" ], 	// Set [] to allow all IP addresses
											// or add a specific IPv4 of 192.168.1.5 :
											// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
											// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
											// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 	// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
/*		{
			module: "calendar",
			header: "US Holidays",
			position: "bottom_left",
			config: {
				colored: true,
				showLocation: true,
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					
					}
				]
			}
		}, */
		{
			module: "compliments",
			position: "top_center",
			disabled: true
		},
		{
			module: "compliments_plus",
			position: "top_center",
			disabled: false,
			config: {
				updateInterval: 5000,
				remoteFile: null,
				fadeSpeed: 4000,
				random: true,
				mockDate: null,
				classes: "thin large pre-line",

		//	the beginning of the period of the day

				morning: 5,
				noon: 12,
				afternoon: 15,
				evening: 18,
				night: 22,
				midnight: 1,

				compliments: {
					"anytime" : [
						"<i class=\"fa fa-thumbs-up\"></i> Hello sexy thing!",
						"<i class=\"fa fa-thumbs-up\"></i> Your looking great hot stuff!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Gorgeous!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Kind!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Amazing!!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Loveable",
						"<i class=\"fa fa-thumbs-up\"></i> You are Strong!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Worthy of Great Things!",
						"<i class=\"fa fa-thumbs-up\"></i> You Melt My Heart!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Patient!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Beautiful!",
						"<i class=\"fa fa-thumbs-up\"></i> You are My Sunshine!",
						"<i class=\"fa fa-thumbs-up\"></i> You are an Angel!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Appreciated!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Important!",
						"<i class=\"fa fa-thumbs-up\"></i> You are an Amazing Partner!",
						"<i class=\"fa fa-thumbs-up\"></i> You are an Awesome Lover!",
						"<i class=\"fa fa-thumbs-up\"></i> You are Dead Sexy!",
					],
					"morning" : [
						"<i class=\"fa fa-mug-hot\"></i> Good morning Sunshine!",
						"<i class=\"fa fa-mug-hot\"></i> How did you sleep?",
						"<i class=\"fa fa-mug-hot\"></i> Was SugarBear good?",
					],
					"noon" : [
						"<i class=\"fa fa-thumbs-up\"></i> Have a good day!",
						"<i class=\"fa fa-thumbs-up\"></i> Did you eat lunch?",

					],
					"afternoon" : [
						"<i class=\"fa fa-thumbs-up\"></i> Good afternoon",
						"<i class=\"fa fa-thumbs-up\"></i> How was your day?",
						"<i class=\"fa fa-thumbs-up\"></i> Time to relax",
					],
					"evening" : [
						"<i class=\"fa fa-thumbs-up\"></i> Good evening",
						"<i class=\"fa fa-thumbs-up\"></i> You look wonderful tonight.",
					],
					"night" : [
						"<i class=\"fa fa-bed\"></i> Good night",
						"<i class=\"fa fa-bed\"></i> Have sweet dreams",

					],
					"midnight" : [
						"<i class=\"fa fa-bed\"></i> Why you don't sleep?",
					],
					"day_sunny" : [
						"<i class=\"wi wi-day-sunny\"></i> Sunny"
					],
					"day_cloudy" : [
						"<i class=\"wi wi-day-cloudy\"></i> Cloudy",
					],
					"cloudy" : [
						"<i class=\"wi wi-cloudy\"></i> Cloudy"
					],
					"day-cloudy_windy" : [
						"<i class=\"wi wi-day-cloudy-windy\"></i> Cloudy windy"
					],
					"day-showers" : [
						"<i class=\"wi wi-day-showers\"></i> Rain shower"
					],
					"day-rain" : [
						"<i class=\"wi wi-day-rain\"></i> Raining"
					],
					"day-thunderstorm" : [
						"<i class=\"wi wi-day-thunderstorm\"></i> Thunderstorm"
					],
					"day-snow" : [
						"<i class=\"wi wi-day-snow\"></i> Snowing"
					],
					"day-fog" : [
						"<i class=\"wi wi-day-fog\"></i> It's Fog"
					],
					"night_clear" : [
						"<i class=\"wi wi-night-clear\"></i> Clear night"
					],
					"night_cloudy" : [
						"<i class=\"wi wi-night-cloudy\"></i> Night cludy"
					],
					"night_showers" : [
						"<i class=\"wi wi-night-showers\"></i> Night showers"
					],
					"night_rain" : [
						"<i class=\"wi wi-night-rain\"></i> Raining night"
					],
					"night_thunderstorm" : [
						"<i class=\"wi wi-night-thunderstorm\"></i> Thunderstorm night"
					],
					"night_snow" : [
						"<i class=\"wi wi-night-snow\"></i> Snowing night"
					],
					"night_alt_cloudy_windy" : [
						"<i class=\"wi wi-night-cloudy-windy\"></i> Night clouds and wind"
					], 
					"25-12-...." : [
						"<i class=\"fa fa-snowman\"></i> Marry Christmas!"
					],
					"01-01-....": [
						function() {return "<i class=\"fa fa-glass-cheers\"></i> Happy New Year! " + moment().format("YYYY")}
					],
					"..-..-....": [
						function() {return moment().locale(config.language).format("dddd, D MMMM")}
						// https://forum.magicmirror.builders/topic/13332/reloading-config-defaults-or-module
					],
				}
			}
		},
		{
			module: 'MMM-MyCommute',
			position: 'bottom_left',
			config: {
 				apiKey: 'AIzaSyBnguuVF9LStpISJTqFV4jezRkxCDg42-o',
				origin: '444 SE 34th St Topeka, KS 66605',
				label: 'Home',
				startTime: '00:00',
				endTime: '23:59',
				color: '#82E5AA',
				colorCodeTravelTime: true,
				showSummary: true,
				showUpdated: false,
				//hideDays: [0,6],
				destinations: [
				  {
					destination: '2815 SW 29th St Topeka, KS 66614',
					label: 'Work',
					mode: 'Driving',
					color: 'EBEBEB'
				  },
			]
			},
		},
		{	
    			module: "MMM-OpenWeatherForecast",
    			position: "top_right",
    			header: "Forecast",
			units: "imperial",
			//showFeelsLikeTemp: true
    			config: {
      				apikey: "7e47b360ffac7652e2138387ccff0b41", //only string here
      				latitude: 39.0483336,            //number works here
      				longitude: "-95.6780371"          //so does a string
    			}
  		},
		{
				module: 'MMM-Todoist',
				position: 'top_left',	// This can be any of the regions. Best results in left or right regions.
				header: 'Todoist', // This is optional
				config: { // See 'Configuration options' for more information.
					hideWhenEmpty: false,
					accessToken: '2826533ab4402766d8f01cb605833fb68f8d8ba9',
					maximumEntries: 60,
					updateInterval: 10*60*1000, // Update every 10 minutes
					fade: false,
					showProject: false,
					wrapEvents: true,
					maxTitleLength: 25,
					// projects and/or labels is mandatory:
					projects: [ 166564794 ],
					labels: [ "MagicMirror", "Important" ] // Tasks for any projects with these labels will be shown.
		 	}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			disabled: true,
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			position: 'bottom_center',
			// you can hide this module afterwards from the remote control itself
			config: {
			    apiKey: 'd5709c40503c410697cbf073533a7dc9'
			}
    		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
