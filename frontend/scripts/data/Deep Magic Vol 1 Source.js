/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file.
	You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded sheet or to first reset sheet.
	Thus you don't run the risk of things that have already been filled out causing conflicts.

	-HOW TO READ-
	Every line comes with a comment immediately after it to show whether it is // Optional // or // Required //,
	followed by a more explanatory comment

	-THIS IS JAVASCRIPT-
	The imports scripts work by creating a new entry inside an existing object or by calling functions.
	You can create new or overwrite existing global variables by omitting 'var'.
	You will need to understand the basics of JavaScript variables: strings, arrays, and JSON objects.
	Note that every opening symbol must have its closing counterpart: (), {}, [], "", ''.
	If these are not present, the code will give an error when imported.
	Use proper editing software for code (like Notepad++). Text processors like Microsoft Word will screw up your code.
	To help finding syntax errors, use (online) code checking software like https://jshint.com

	-COMMENTS IN THE EXAMPLE-
	Anything on a line after two forward slashes is a comment and will be ignored when running the code.
	Multiline comments are possible. Open them using the forward slash followed by an asterisk and close them with the opposite.
	The below contains a lot of these comments. The comments are not necessary for the script to work, so feel free to remove them.
*/

/*	-INFORMATION-

	Subject:	Source

	Effect:		This is the syntax for adding a new source to the sheet.

	Remarks:	The object name of a source is used for almost everything that you can import into the sheet.
				A tip is to invoke a new source object at the start of an import script to make sure it is available for whatever you are adding.

	Sheet:		v13.1.0 and newer
*/

var iFileName = "Deep Magic Vol 1 Source.js";
/* 	iFileName // OPTIONAL //
	TYPE:	string
	USE:	how the file will be named in the sheet if you import it as a file

	Note that this is a variable called 'iFileName'.
	Variables invoked inside an import script will not be available after importing.
	However, if you invoke the variable without the 'var', it will be available after importing.

	This doesn't have to be the same as the actual name of the file.
	This doesn't need to have the .js file extension.
	Only the first occurrence of this variable will be used.
*/

RequiredSheetVersion("13.0.6");
/*	RequiredSheetVersion // OPTIONAL //
	TYPE:	function call with one variable, a string or number
	USE:	the minimum version of the sheet required for the import script to work

	If this script is imported into a sheet with an earlier version than given here, the player will be given a warning.

	The variable you input can be a the full semantic version of the sheet as a string (e.g. "13.0.6" or "13.1.0-beta1+201209").
	Alternatively, you can input a number, which the sheet will translate to a semantic version.
	For example:
		FUNCTION CALL						REQUIRED MINIMUM VERSION
		`RequiredSheetVersion(13);`			13.0.0
		`RequiredSheetVersion(13.1);`		13.1.0

	You can find the full semantic version of the sheet at the bottom of every page,
	or look at the "Get Latest Version" bookmark, which lists the version number,
	or go to File >> Properties >> Description, where the version is part of the document title.
*/

SourceList["DM1"] = {
/* 	SourceList object name // REQUIRED //
	TYPE:	string
	USE:	object name of the source as it will be used by the sheet

	By adding a new object to the existing SourceList object, we create a new source.
	The object name here is 'BoP'. You can use any object name as long as it is not already in use.
	If you do use an object name that is already in use, you will be overwriting that object.

	The object name doesn't have to be the same as the abbreviation used for the source (see below), but it does make it easier.

	Do not use a single-letter object name, those are reserved for official WotC publications.
	Doing so will make it likely that you overwrite an existing source.

	Note that "HB" is already used by the "Homebrew" source.
	Note that this doesn't have to be only lower case!
	Also note the absence of the word "var" and the use of brackets [].
*/
	name : "Deep Magic Volume 1",
/*	name // REQUIRED //
	TYPE:	string
	USE:	name of the source as it will be used by the sheet

	This is the full name of the source.
	The full name will only be used in tooltips and dialogs, so make it as long as you want.
*/
	abbreviation : "DM1",
/*	abbreviation // REQUIRED //
	TYPE:	string
	USE:	abbreviation of the source as it will be used by the sheet

	The abbreviation doesn't have to be the same as the object name used for the source (see above), but it does make it easier.

	This is a greatly shortened name of the source.
	The abbreviation will be used extensively throughout the sheets, so be sure to make it easily recognizable.
*/
	abbreviationSpellsheet : "D",
/*	abbreviationSpellsheet // OPTIONAL //
	TYPE:	string
	USE:	abbreviation of the source as it will be used on the spell sheet pages in the "B" column
	ADDED:	v13.0.1

	The spell sheet pages have very limited space for the abbreviations so this is a separate attribute.
	It is recommended to keep this abbreviation to just a single character.

	Two characters might fit, depending on the character. For example, the "M" and "W" are wider
	in most fonts than other letter.
	If you are using more than one character, be sure to try the abbreviation on the sheet,
	or else the text might overflow the field, resulting in a [+] sign that will obscure the whole field.

	If this attribute is not present, the sheet will default to the first letter of the object name
	(not the `abbreviation` attribute).
	For example, for the above `SourceList["BoP"]`, the sheet will put a "B" on the spell sheet page.
*/



	url : "https://koboldpress.com/kpstore/product/deep-magic-volume-1-2-2023/",
/*	url // OPTIONAL //
	TYPE:	string
	USE:	link to the source online

	This URL is only used in the Source Materials dialog.

	Please use https if available.
*/

}
