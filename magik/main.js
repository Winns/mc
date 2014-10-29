$(function() {
	
	var app = new (function() {
		var self = this;
		
		this.el = {
			$menu: $( '#menu-channels li' ),
			$channels: $( '#channels li' )
		};
		
		this.cfg = {
			w: 300,
			h: 500
		}
		
		this.templates = {
			iframe: function( cfg ) {
				return '<iframe width="'+ cfg.w +'px" height="'+ cfg.h +'px" frameborder="0" src="'+ cfg.url +'" scrolling="no"></iframe>';
			},
			sc2tv: function( cfg ) {
				cfg.url = 'http://chat.sc2tv.ru/index.htm?channelId=187278&amp;fullScreen=1&amp;width='+ cfg.w +'&amp;height='+ cfg.h;
				
				return self.templates.iframe( cfg );
			},
			goodgame: function( cfg ) { 
				cfg.url = 'http://goodgame.ru/chat/babymagik/';
				
				return self.templates.iframe( cfg );
			},
			twitch: function( cfg ) { 
				cfg.url = 'http://www.twitch.tv/magikbaby/chat/';
				
				return self.templates.iframe( cfg );
			},
			cybergame: function( cfg ) { 
				cfg.url = 'http://cybergame.tv/cgchat.htm?v=b#babymagik';
				
				return self.templates.iframe( cfg );
			},
		};
		
		this.open = function( arr ) {
			var id, $btn, $channel;
			
			for (var i=0; i < arr.length; i++) {
				id 			= arr[i];
				$btn 		= self.el.$menu.filter( '[data-id="'+ id +'"]' );
				$channel 	= self.el.$channels.filter( '[data-id="'+ id +'"]' );
					
				$btn.addClass( 'active' );
				$channel
					.addClass( 'active' )
					.html( this.templates[ id ]( this.cfg ) );
			}
		};
		
		this.hide = function( arr ) {
			var id, $btn, $channel;
			
			for (var i=0; i < arr.length; i++) {
				id 			= arr[i];
				$btn 		= self.el.$menu.filter( '[data-id="'+ id +'"]' );
				$channel 	= self.el.$channels.filter( '[data-id="'+ id +'"]' );
				
				$btn.removeClass( 'active' );
				$channel
					.removeClass( 'active' )
					.html( '' );
			}
		};
		
		this.init = function() {
		
			this.open([ 'sc2tv', 'goodgame', 'cybergame' ]);
		
			this.el.$menu.on( 'click', function() {
				var id = $( this ).attr( 'data-id' );
				
				if ($( this ).hasClass( 'active' )) {
					self.hide([ id ]);
					$( this ).removeClass( 'active' );
				} else {
					self.open([ id ]);
					$( this ).addClass( 'active' );
				}
			});
		};
		this.init();
	
	
	})();

});