@ECHO OFF

IF "%~1"=="update" GOTO update
IF "%~1"=="dev" GOTO dev
IF "%~1"=="prod" GOTO prod
GOTO noUpdate

:update

    ECHO BOWER UPDATE 
    ECHO ==========================================================
    CALL bower update

    ECHO NPM UPDATE 
    ECHO ==========================================================
    CALL npm install
    
    IF "%~2"=="dev" GOTO dev
:prod

    ECHO PRODUCTION CSS JS BUILD
    ECHO ==========================================================
    CALL grunt production
    GOTO done

:noUpdate
:dev

    ECHO DEVELOPMENT JS + CSS BUILD
    ECHO ==========================================================
    CALL grunt
    

:done
