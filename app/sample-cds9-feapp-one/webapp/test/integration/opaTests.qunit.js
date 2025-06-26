sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'samplecds9feappone/test/integration/FirstJourney',
		'samplecds9feappone/test/integration/pages/BooksList',
		'samplecds9feappone/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('samplecds9feappone') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);