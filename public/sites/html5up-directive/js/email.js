$(function(){
	Parse.$ = jQuery;

	Parse.initialize("F9JwBgjiIktkVlGLlIHiFn7NPefiSZp9YqSkVfjc","KRo9teT0uHQHvqFHYtSJr36AuN2w9kbPhV4qWFfw");

	var Message = Parse.Object.extend("Message");
	var message = new Message();

	var MessageView = Parse.View.extend({

		template: Handlebars.compile($('#message-tpl').html()),
		render: function(){
			$this.el.html(this.template());
		}
	});

	var messageView = new MessageView();
	messageView.render();
	$('.messageContainer').html(messageView.el);
});