$(document).ready(function () {

    var passwords = [],
        staged = 0,
        stagedLimitNewLoad = 20;

    var loadPasswords = function () {
            return $.get( 'passwords.json' )
            .done(function ( data ) {
                passwords = data;

                staged = 0;
            });
        };

    var getPassword = function () {
        var i = Math.floor((Math.random() * passwords.length));
        return passwords[ i ];
    };

    var stagePassword = function () {
        staged++; if( staged > stagedLimitNewLoad ) loadPasswords();
        $("#password").text( getPassword() );
    };

    $("#generatePassword").click(stagePassword);
    loadPasswords().always( stagePassword );

});
