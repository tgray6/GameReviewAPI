# GameReviewAPI
Giant Bomb Game Reviews API-First Capstone

This looks up data from giantbomb.com

NOTE: It is set to https, but you may still not see results when you search, if so, look above in your searchbar(if your on chrome) and
allow the site to "load unsafe scripts".

BUG: Some games come back with NULL in the deck(description under the title). Need to make it where null is replaced with something. Search for "big one" for an example.
BUG2: Games with long deck descriptions fall outside of the flexbox.