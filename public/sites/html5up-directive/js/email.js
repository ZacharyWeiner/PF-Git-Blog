$(function(){
	Parse.$ = jQuery;

	Parse.initialize("F9JwBgjiIktkVlGLlIHiFn7NPefiSZp9YqSkVfjc","KRo9teT0uHQHvqFHYtSJr36AuN2w9kbPhV4qWFfw");

	

	var MessageView = Parse.View.extend({
		template : Handlebars.compile($('#message-tpl').html()),
		events : {
			'submit .form-message': 'sendMessage'
		},
		sendMessage : function(e){
			e.preventDefault();
			var data = $(e.target).serializeArray(),
			 name = data[0].value,
			 email = data[1].value, 
			 text = data[2].value;

			 var Message = Parse.Object.extend("Message");
			var message = new Message();
			message.save({"name":name, "email":email, "text":text}).then(function(message){
				alert('message sent!');
			});
		},
		render : function(){
			this.$el.html(this.template());
		}
	});

	var messageView = new MessageView();
	messageView.render();
	$('.messageContainer').html(messageView.el);


});