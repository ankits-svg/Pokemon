1. Listing page


        ○ If the API returns successfully show all the Pokemon that are
        returned in the API on this page.--done

        ○ Navigate to the listing page only after a successful API
        response. This page should show the images of the movie as
        well as the title of the movie in a grid format.---doubt

        ○ The listing page should be infinite scrollable, as the user
        scrolls, load more Pokemon using the API. By default, the
        search API gets 10 items per page.

        ○ Please make sure the listing page remains functional even
        after loading a lot of movies when you keep scrolling.
        ○ Also, provide options to filter the results by abilities,
        characteristics, group, habitat, location, Species etc.

        

2. ● Details Page


        ○ Details screen opens up on tapping on one of the Pokemon on
        the listing screen.
        ○ Show all the details got by the API in a properly formatted
        design.
        ○ Display a bookmark icon, tapping on it should save this
        Pokemon as a favourite on the device itself.
        ○ A Pokemon that has been bookmarked should be shown with a
        prefilled bookmark icon. Clicking on the same icon should
        remove it from bookmarks.

3. ● Bookmarks Screen

        ○ The bookmark screen shows all the users bookmarked
        Pokemon. This data is stored locally on the phone.
        ○ Users should be able to remove a Pokemon from bookmarks
        as well.

4. Search Page

        -Create a search page that accepts a Pokemon name to search
        for. On hitting search, make an API call to the search endpoint.

        -Show a loading when the API is in progress and stop the
        loading when the API is successful or throws an error. Display
        the error if there is an error message.