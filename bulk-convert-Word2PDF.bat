echo off
for %%X in (.\word-tmp\TNHH1Tv\PhuLucI-2-output\*.docx) do cscript.exe //nologo SaveAsPDF.js "%%X"
rem for %%X in (*.doc) do cscript.exe //nologo SaveAsPDF.js "%%X"