@echo off
REM *****************************************************************************************
REM *** Este script lo que hace es transferir todo el contenido de
REM *** Static + Index.html que es el main pase a una carpeta de "Publicación"
REM *** esto es porque el servidor destino de este proyecto no necesita un backend y 
REM *** puede servirse todo en forma estática.
REM *** Dependencias: tienes que tener instalado ROBOCOPY

for /f %%i in ('cd') do set originPath="%%i"
set publishPath="C:\Users\danie\devel\blog\blog\projects\MarcadorFaro"

echo El path de origen es %originPath%
echo El path de destino es %publishPath%

:choice
set /P c=Deseas continuar [S/N]?
if /I "%c%" EQU "S" goto :somewhere
if /I "%c%" EQU "N" goto :somewhere_else
goto :choice

:somewhere
echo Publishing static version to DEST... hold it!

REM Se copia todo el proyecto
robocopy %originPath% %publishPath% /E /xd "__pycache__" ".git"
REM Sacamos los estáticos a raiz del destino
copy .\templates\index.html %publishPath% 
copy .\templates\live.html %publishPath% 

echo Done!

:somewhere_else
echo Byez!

