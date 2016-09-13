
var pattern_dim = {
	"Basic Controls" 						: "Grundfunktionen",
	"Appropriate Delivery" 			: "Grundfunktionen",
	"Loading Indicator" 				: "Grundfunktionen",
	"Shortcut Commands" 				: "Grundfunktionen",
	"Search" 										: "Zugang zu zeitbasierter Information",
	"Table of Content" 					: "Zugang zu zeitbasierter Information",
	"Temporal Tags" 						: "Zugang zu zeitbasierter Information",
	"Temporal Bookmarks" 				: "Zugang zu zeitbasierter Information",
	"Playback Speed" 						: "Zugang zu zeitbasierter Information",
	"Playback Direction" 				: "Zugang zu zeitbasierter Information",
	"Zoom" 											: "Zugang zu zeitbasierter Information",
	"Visual Summary" 						: "Zugang zu zeitbasierter Information",
	"Annotated Timeline" 				: "Zugang zu zeitbasierter Information",
	"Transcript" 								: "Zugang zu zeitbasierter Information",
	"Closed Captions" 					: "Zugang zu zeitbasierter Information",
	"Skip Back" 								: "Zugang zu zeitbasierter Information",
	"Journaled Navigation" 			: "Zugang zu zeitbasierter Information",
	"Loop" 											: "Zugang zu zeitbasierter Information",
	"Add Video" 								: "Kontribution",
	"Annotations" 							: "Kontribution",
	"Comments" 									: "Kontribution",
	"Inline Drawing" 						: "Kontribution",
	"Polls" 										: "Kontribution",
	"Direct Authoring" 					: "Kontribution",
	"Remix" 										: "Kontribution",
	"Video Manipulation" 				: "Kontribution", 
	"Multi-Timeline Editing" 		: "Kontribution",
	"Video Manager" 						: "Strukturierung",
	"Sequential Media" 					: "Strukturierung",
	"Related Videos" 						: "Strukturierung",
	"Hyperlinks" 								: "Strukturierung",
	"Branching Videos" 					: "Strukturierung",
	"Detail on Demand" 					: "Strukturierung",
	"Media Fragments" 					: "Strukturierung",
	"Classified Marks" 					: "Strukturierung",
	"User Ratings" 							: "Strukturierung",
	"Break" 										: "Strukturierung",
//	"Discussion Prompt" 				: "Strukturierung",
	"Viewing History" 					: "Selbstorganisation",
	"Playlist" 									: "Selbstorganisation",
	"Follow Revisions" 					: "Selbstorganisation",
	"User Notes"							  : "Selbstorganisation",
	"Assessment" 								: "Selbstorganisation",
//	"Video Clip Quest" 					: "Selbstorganisation",
	"User Traces" 							: "Selbstorganisation",
	"Full Screen" 							: "Layout",
	"Simultaneous Media" 				: "Layout",
	"Synchronized Map" 					: "Layout",
	"Overlays" 									: "Layout",
	"Visual Highlighting" 			: "Layout",
	"Object Tracking" 					: "Layout",
	"Multi-Angle Video"					: "Layout"
};

/*
\cite{Grissom2003}
1. No viewing 
2. Viewing 
3. Responding 
4. Changing: entails modifying the visualization; e.g. change the input 
5. Constructing: learners construct their own visualizations of the algorithms under study.
6. Presenting

Seidel:
// availability, group mgmt
// selbstgesteuert, kollaborativ, wissenskonstruktion


\cite[S. 13]{Schulmeister2005b} 
- Objekte betrachten und rezipieren} %Vorgefertigte Videos werden abgespielt, wobei der Betrachter keinen Einfluss auf die Darstellungsform hat. Die Medienelemente dienen der Illustration oder Information.

- Multiple Darstellungen betrachten und rezipieren} {\tiny Selektion, Wiederholung}%Die multimedialen Komponenten sind ebenfalls vorgefertigt, durch Benutzerinteraktionen (Klicks) können jedoch teile davon ausgetauscht werden. Beispielsweise kann der Nutzer Videos aus einer Kollektion von Filmen auswählen und beliebig oft abspielen. Die Medienelemente dienen der Illustration oder Information. Multiple Views .. verschiedene Standpunkte...

- Variation der Repräsentationsform} {\tiny Skalieren, drehen, zoomen, nicht-lineare Navigation }%Benutzer haben einen aktiven Einfluss auf die Informationsdarbietung. Es kann jedoch nur die Repräsentation, nicht das Ausgangsmaterial manipuliert werden. Beispielsweise können Benutzer Objekte wie z.B. Videos skalieren, drehen oder zoomen. Ein weiteres Beispiel ist die nicht-lineare Navigation in Videos, in denen man mit Hilfe zeitbasierter Hyperlinks andere Filmsegmente aufruft.

- Inhalt der Komponente beeinflussen} {\tiny Fragmente extrahieren \cite{Pea2006}, text2video\footnote{Zum Beispiel:  \href{http://www.gui.de}{http://www.gui.de}}}%Durch die Eingabe von Daten oder Parametern können die Benutzer neue Objekte erzeugen. Auf diese Weise können Nutzer beispielsweise Parameter in mathematischer Formeln anpassen und erhalten im Ergebnis eine grafische Ausgabe der Funktion. Videos lassen sich nicht ohne Weiteres durch Änderung von Datensätzen oder Parametern generieren. Ein Beispiel dafür stellt die Applikation DIVER\texttrademark dar\footnote{Vgl. \href{http://diver.stanford.edu/}{http://diver.stanford.edu/}.}, bei der Nutzer spatiale und temporale Ausschnitte von 360°-Aufnahmen wählen und annotieren \cite{Pea2006}. Prinzipiell lassen sich Videos auch durch Eingabe von Texten bzw. Verweise auf Ressourcen (URI) mit Hilfe von Verfahren der semantischen Textanalyse, der Sprachsynthese und durch eine Bildersuche generieren. Auch wenn diese Verfahren gegenwärtig noch nicht in Lernszenarien Verwendung finden, stehen entsprechende Internetdienste wie z.B. \href{http://www.gui.de}{http://www.gui.de} zur Verfügung. 

- Objekte und Prozesse generieren} {\tiny Schneiden, sequenzieren, annotieren}%Das Lernprogramm wird zum Werkzeug mit dem die Anwender ihre Ideen in konkrete Modelle, Objekte oder Prozesse überführen können. Diese konstruktive und eigenaktive Form des Lernens kann in Bezug auf Videos zum Beispiel durch Web-Editoren wie \emph{Kaltura} oder \emph{Mozilla Popcorn Maker} realisiert werden. 

- Konstruktion mit situationsabhängigen Rückmeldungen} {\tiny } %Das Programm versteht Benutzerinteraktionen und die daraus entstandenen Objekte, so dass es darauf mit bedeutungsvollen Rückmeldungen reagieren kann. 


*/
var pattern_engagement_taxonomie = {
	"Basic Controls" 						: "Viewing",
	"Appropriate Delivery" 			: "Viewing",
	"Loading Indicator" 				: "Viewing",
	"Shortcut Commands" 				: "Grundfunktionen",
	"Search" 										: "Zugang zu zeitbasierter Information",
	"Table of Content" 					: "Zugang zu zeitbasierter Information",
	"Temporal Tags" 						: "Zugang zu zeitbasierter Information",
	"Temporal Bookmarks" 				: "Zugang zu zeitbasierter Information",
	"Playback Speed" 						: "Zugang zu zeitbasierter Information",
	"Playback Direction" 				: "Zugang zu zeitbasierter Information",
	"Zoom" 											: "Zugang zu zeitbasierter Information",
	"Visual Summary" 						: "Zugang zu zeitbasierter Information",
	"Annotated Timeline" 				: "Zugang zu zeitbasierter Information",
	"Transcript" 								: "Zugang zu zeitbasierter Information",
	"Closed Captions" 					: "Zugang zu zeitbasierter Information",
	"Skip Back" 								: "Zugang zu zeitbasierter Information",
	"Journaled Navigation" 			: "Zugang zu zeitbasierter Information",
	"Loop" 											: "Zugang zu zeitbasierter Information",
	"Add Video" 								: "Kontribution",
	"Annotations" 							: "Kontribution",
	"Comments" 									: "Kontribution",
	"Inline Drawing" 						: "Kontribution",
	"Polls" 										: "Kontribution",
	"Direct Authoring" 					: "Kontribution",
	"Remix" 										: "Kontribution",
	"Video Manipulation" 				: "Kontribution", 
	"Multi-Timeline Editing" 		: "Kontribution",
	"Video Manager" 						: "Strukturierung",
	"Sequential Media" 					: "Strukturierung",
	"Related Videos" 						: "Strukturierung",
	"Hyperlinks" 								: "Strukturierung",
	"Branching Videos" 					: "Strukturierung",
	"Detail on Demand" 					: "Strukturierung",
	"Media Fragments" 					: "Strukturierung",
	"Classified Marks" 					: "Strukturierung",
	"User Ratings" 							: "Strukturierung",
	"Break" 										: "Strukturierung",
//	"Discussion Prompt" 				: "Strukturierung",
	"Viewing History" 					: "Selbstorganisation",
	"Playlist" 									: "Selbstorganisation",
	"Follow Revisions" 					: "Selbstorganisation",
	"User Notes"							  : "Selbstorganisation",
	"Assessment" 								: "Selbstorganisation",
//	"Video Clip Quest" 					: "Selbstorganisation",
	"User Traces" 							: "Selbstorganisation",
	"Full Screen" 							: "Layout",
	"Simultaneous Media" 				: "Layout",
	"Synchronized Map" 					: "Layout",
	"Overlays" 									: "Layout",
	"Visual Highlighting" 			: "Layout",
	"Object Tracking" 					: "Layout",
	"Multi-Angle Video"					: "Layout"
};


var pattern_names = [
	"Basic Controls", 
	"Appropriate Delivery",
	"Loading Indicator",
	"Shortcut Commands",
	"Search",
	"Table of Content",
	"Temporal Tags",
	"Temporal Bookmarks",
	"Playback Speed",
	"Playback Direction",
	"Zoom" 										,
	"Visual Summary" 					,
	"Annotated Timeline" 			,
	"Transcript" 							,
	"Closed Captions" 				,
	"Skip Back" 							,
	"Journaled Navigation" 		,
	"Loop" 										,
	"Add Video" 							,
	"Annotations" 						,
	"Comments" 								,
	"Inline Drawing" 					,
	"Polls" 									,
	"Direct Authoring" 				,
	"Remix" 									,
	"Video Manipulation" 			, 
	"Multi-Timeline Editing" 	,
	"Video Manager" 					,
  "Break"									  ,
	"Sequential Media" 				,
	"Related Videos" 					,
	"Hyperlinks" 							,
	"Branching Videos" 				,
	"Detail on Demand" 				,
	"Media Fragments" 				,
	"Classified Marks" 				,
	"User Ratings" 						,
	"Viewing History" 				,
	"Playlist" 								,
	"Follow Revisions" 				,
	"User Notes"							,
	"Assessment" 							,
	"Video Clip Quest" 				,
	"User Traces" 						,
	"Full Screen" 						,
	"Simultaneous Media" 			,
	"Synchronized Map" 				,
	"Overlays" 								,
	"Visual Highlighting" 		,
	"Object Tracking" 				,
	"Multi-Angle Video"				
	//"Alternative Views" 			
];


var micro_pattern_names = [
	"Basic Controls"					, 
	"Appropriate Delivery"		,
	"Loading Indicator"				,
	"Shortcut Commands"				,
	"Table of Content"				,
	"Temporal Tags"						,
	"Temporal Bookmarks"			,
	"Playback Speed"					,
	"Playback Direction"			,
	"Zoom" 										,
	"Visual Summary" 					,
	"Annotated Timeline" 			,
	"Transcript" 							,
	"Closed Captions" 				,
	"Skip Back" 							,	
	"Loop" 										,
	"Annotations" 						,
	"Comments" 								,
	"Inline Drawing" 					,
	"Polls" 									,
	"Direct Authoring" 				,
	"Video Manipulation" 			, 
	"Multi-Timeline Editing" 	,
  "Break"									  ,
	"Media Fragments" 				,
	"Classified Marks" 				,
	"Follow Revisions" 				,
	"User Notes"							,
	"Assessment" 							,
	"Video Clip Quest" 				,
	"User Traces" 						,
	"Full Screen" 						,
	"Simultaneous Media" 			,
	"Synchronized Map" 				,
	"Overlays" 								,
	"Visual Highlighting" 		,
	"Object Tracking" 				,
	"Multi-Angle Video"				
];

var macro_pattern_names = [
	"Journaled Navigation" 		,
	"Search"									,
	"Add Video" 						,
	"Remix" 									,
	"Video Manager" 					,
	"Sequential Media" 				,
	"Related Videos" 					,
	"Hyperlinks" 							,
	"Branching Videos" 				,
	"Detail on Demand" 				,
	"User Ratings" 						,
	"Viewing History" 				,
	"Playlist" 								 			
];

var dimensions = [
	"Grundfunktionen",
	"Zugang zu zeitbasierter Information",
	"Kontribution", 
	"Strukturierung",
	"Selbstorganisation",
	"Layout"
];

var portal_groups = [ 
						'Video Learning Environment',
						'Video Portal',
						'Video Authoring Environment',
						'Annotation Tool',
						'Research Prototype',
						'Interactive Film',
						'Search Engine',
						'Player',
						'Video Framework',
						'Open Source',
						'Desktop Environment',
						'Online Environment',
						'Misc'
	//					'xxx' 
];





// define subset for interrater reliability
var selectedPortalsSubset = [
	"Amazonie",
	"HyperCafe",
	"Hyperfilm",
	"Khan Academy",
	"Lecture2Go",
	"Lecturio",
	"lernfunk.de",
	"MediaSite",
	"MIT Video",
	"Opencast",
	"PHP Melody",
	"Plumi",
	"Timesheets.js",
	"transLectures",
	"Udacity",
	"Video-Wiki",
	"VideoAnt",
	"VideoLectures.NET",
	"videoNot.es",
	"Vimeo",
	"Yendif Player",
	"YouTube",
	"YoVisto",
	"zaption",
	"Zeugen der Shoa"
];

var pattern_arr = {
	"Basic Controls": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Appropriate Delivery": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Loading Indicator": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Shortcut Commands": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Search": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Table of Content": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Temporal Tags": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Temporal Bookmarks": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Playback Speed": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Playback Direction": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Zoom" 										: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Visual Summary" 					: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Annotated Timeline" 			: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Transcript" 						: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Closed Captions" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Skip Back" 							: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Journaled Navigation" 		: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Loop" 										: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Add Video" 							: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Annotations" 						: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Comments" 								: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Inline Drawing" 					: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Polls" 									: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Direct Authoring" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Remix" 									: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Video Manipulation" 			: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  
	"Multi-Timeline Editing" 	: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Video Manager" 					: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
  "Break"									  : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Sequential Media" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Related Videos" 					: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Hyperlinks" 							: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Branching Videos" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Detail on Demand" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Media Fragments" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Classified Marks" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"User Ratings" 						: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Viewing History" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Playlist" 								: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Follow Revisions" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"User Notes"							: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Assessment" 							: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Video Clip Quest" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"User Traces" 						: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Full Screen" 						: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Simultaneous Media" 			: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Synchronized Map" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Overlays" 								: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Visual Highlighting" 		: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Object Tracking" 				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
	"Multi-Angle Video"				: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	}
;

