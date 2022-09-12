$(function() {
    $( "#accordion_js" ).accordion({
      collapsible: true,
      active: false
    })
  });

  $(function() {
    $( "#accordion_react" ).accordion({
      collapsible: true,
      active: false
    })
  });

$(function() {
$( "#accordion_web" ).accordion({
    collapsible: true,
    active: false
    })
});

$(function() {
    $( "#accordion_cs" ).accordion({
      collapsible: true,
      active: false
    })
});

$(function() {
    $( "#accordion_asp" ).accordion({
      collapsible: true,
      active: false
    })
});

$(function() {
    $( "#accordion_python" ).accordion({
      collapsible: true,
      active: false
    })
});

(function( $, undefined ) {

$.widget( "ab.accordion", $.ui.accordion, {

    refresh: function() {

        this._super( "refresh" );

        if ( this.options.heightStyle !== "content" ) {
            return;
        }

        this.headers.next().each( function() {

            if ( $( this ).css( "height" ) ) {
                $( this ).css( "height", "" );
            }

        });

    }

});

})(jQuery);

$(function() {

    $( "#accordion_js" ).accordion();

    for ( var i=0; i<20; i++ ){
        $( "ul" ).append( "<li>nth item</li>" );
    }

    $( "#accordion_js" ).accordion( "option", "heightStyle", "content" )
                    .accordion( "refresh" );

});

$(function() {

$( "#accordion_react" ).accordion();

for ( var i=0; i<20; i++ ){
    $( "ul" ).append( "<li>nth item</li>" );
}

$( "#accordion_react" ).accordion( "option", "heightStyle", "content" )
                .accordion( "refresh" );

});

$(function() {

    $( "#accordion_cs" ).accordion();

    for ( var i=0; i<20; i++ ){
        $( "ul" ).append( "<li>nth item</li>" );
    }

    $( "#accordion_cs" ).accordion( "option", "heightStyle", "content" )
                    .accordion( "refresh" );

});

$(function() {

    $( "#accordion_python" ).accordion();

    for ( var i=0; i<20; i++ ){
        $( "ul" ).append( "<li>nth item</li>" );
    }

    $( "#accordion_cs" ).accordion( "option", "heightStyle", "content" )
                    .accordion( "refresh" );

});

$(function() {

    $( "#accordion_web" ).accordion();

    for ( var i=0; i<20; i++ ){
        $( "ul" ).append( "<li>nth item</li>" );
    }

    $( "#accordion_web" ).accordion( "option", "heightStyle", "content" )
                    .accordion( "refresh" );

});

$(function() {

    $( "#accordion_asp" ).accordion();

    for ( var i=0; i<20; i++ ){
        $( "ul" ).append( "<li>nth item</li>" );
    }

    $( "#accordion_asp" ).accordion( "option", "heightStyle", "content" )
                    .accordion( "refresh" );

});