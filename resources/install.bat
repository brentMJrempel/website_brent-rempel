@ECHO OFF

ECHO npm install bower -g
ECHO **********************************************************
CALL npm install bower -g


ECHO npm install -g grunt-cli
ECHO **********************************************************
CALL npm install -g grunt-cli

IF "%~1"=="dev" GOTO dev

ECHO build.bat update
ECHO **********************************************************
CALL build.bat update

GOTO done

:dev 

    ECHO build.bat update
    ECHO **********************************************************
    CALL build.bat update dev

:done