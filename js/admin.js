$(function(){
	Parse.$ = jQuery;
	Parse.initialize("F9JwBgjiIktkVlGLlIHiFn7NPefiSZp9YqSkVfjc","KRo9teT0uHQHvqFHYtSJr36AuN2w9kbPhV4qWFfw");

	var LoginView = Parse.View.extend({
		template : Handlebars.compile($('#login-tpl').html()),
		events : {
			'submit .form-signin':'login'
		},
		login: function(e){
			//Make sure we handle the submission data, not the notrmal form actions
			e.preventDefault();

			//collect the data from the form
			var data = $(e.target).serializeArray(),
			username = data[0].value,
			password = data[1].value;

			//the Parse library will use the input data to validate against a user
			// and will return on one of the two functions. 
			// Success gives us a user, error gives us a user and an error. 
			// in this way we can get as much as was able to be provided about the user
			// and also understand what went wrong. 	
			console.log('loggin in....');
			Parse.User.logIn(username, password, {
				success:function(user){
					var welcomeView = new WelcomeView({model : user});
					welcomeView.render();
					$('.main-container').html(welcomeView.el);
				},
				error:function(user, error){
					console.log(error);
				}
			});
		},
		render : function(){
			this.$el.html(this.template());
		}
	}), 
	WelcomeView = Parse.View.extend({

		template : Handlebars.compile($('#welcome-tpl').html()),
		render : function(){
			var attributes = this.model.toJSON();
			this.$el.html(this.template(attributes));
		}
	});

	if(Parse.User.current()){
		var welcomeView = new WelcomeView({model: Parse.User.current()});
		welcomeView.render();
		$('.main-container').html(welcomeView.el);
	}else{
		var loginView = new LoginView();
		loginView.render();
		$('.main-container').html(loginView.el);
	}
});