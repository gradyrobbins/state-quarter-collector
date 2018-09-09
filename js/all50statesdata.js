// console.log("hello this is all50statesdata.js");


/*
    Single Responsibility Principle
    Two functions:
        1. Factory function for creating states
        2. Function for saving collection of states to localStorage
*/

// /*
//   Purpose: Creates a collection of all states
//   Arguments: none
//   Returns: Array of objects. Each object is a state.
// */



/*
Purpose: Stores all the snack cakes in the browser's local storage
Arguments: allTheSnackCakes (array) - An array containing all of the snack
cake objects
Returns: None
*/


// const STATETEMPLATE = {
//     Statehood: "",
//     Capital: "",
//     Nicknames: "",
//     Motto:  "",
//     Flower:  "",
//     Bird:  ""
// }


// const Delaware = {
//     Statehood: "December 7, 1787",
//     Capital: "Dover",
//     Nicknames: "First State, Diamond State",
//     Motto:  "Liberty and Independence",
//     Flower:  "Peach Blossom",
//     Bird:  "Blue hen chicken"
// }
// const Pennsylvania = {
//     Statehood: "December 12, 1787",
//     Capital: "Harrisburg",
//     Nicknames: "Keystone State",
//     Motto:  "Virtue, Liberty and Independence",
//     Flower:  "Mountain Laurel",
//     Bird:  "Ruffed Goose"
// }
// const New_Jersey = {
//     Statehood: "December 18, 1787",
//     Capital: "Trenton",
//     Nicknames: "Garden State",
//     Motto:  "Liberty and Prosperity",
//     Flower:  "Purple Violet",
//     Bird:  "Eastern Goldfinch"
// }
// const Georgia = {
//     Statehood: "January 2, 1788",
//     Capital: "Atlanta",
//     Nicknames: "The Peach State, Empire State of the South",
//     Motto:  "Wisdom, Justice, and Moderation",
//     Flower:  "Cherokee rose",
//     Bird:  "Brown thrasher"
// }
// const Connecticut = {
//     Statehood: "January 9, 1788",
//     Capital: "Hartford",
//     Nicknames: "Nutmeg State, Constitution State",
//     Motto:  "Qui Transtulit Sustinet (He who transplanted still sustains",
//     Flower:  "Mountain Laurel",
//     Bird:  "American Robin"
// }

// const Massachusetts = {
//     Statehood: "February 6, 1788",
//     Capital: "Boston",
//     Nicknames: "Bay State",
//     Motto:  "Ense Petit Placidam Sub Libertate Quietem (By the sword we seek peace, but peace only under liberty)",
//     Flower:  "Mayflower",
//     Bird:  "Chickadee"
// }
// const Maryland = {
//     Statehood: "April 28, 1788",
//     Capital: "Annapolis",
//     Nicknames: "Old Line State, Free State",
//     Motto:  "Fatti Maschii, Parole Femine (Manly Deeds, Womanly Words)",
//     Flower:  "Black-eyed Susan",
//     Bird:  "Baltimore Oriole"
// }
// const South_Carolina = {
//     Statehood: "May 23, 1788",
//     Capital: "Columbia",
//     Nicknames: "Palmetto State",
//     Motto:  "Dum Spiro Spero (While I breathe, I hope)",
//     Flower:  "Yellow jessamine",
//     Bird:  "Carolina wren"
// }
// const New_Hampshire = {
//     Statehood: "June 21, 1788",
//     Capital: "Concord",
//     Nicknames: "Granite State",
//     Motto:  "Live free or die",
//     Flower:  "Purple lilac",
//     Bird:  "Purple finch"
// }
// const Virginia = {
//     Statehood: "June 25, 1788",
//     Capital: "Richmond",
//     Nicknames: "Sic Semper Tyrannis (Thus always to tyrants)",
//     Motto:  "Liberty and Independence",
//     Flower:  "Dogwood",
//     Bird:  "Cardinal"
// }
// const New_York = {
//     Statehood: "July 26,1788",
//     Capital: "Albany",
//     Nicknames: "Empire State",
//     Motto:  "Excelsior (Ever Upward)",
//     Flower:  "Rose",
//     Bird:  "Bluebird"
// }
// const North_Carolina = {
//     Statehood: "November 21, 1789",
//     Capital: "Raleigh",
//     Nicknames: "Tarheel State, Old North State",
//     Motto:  "Esse quam videri (To be rather than to seem)",
//     Flower:  "Dogwood",
//     Bird:  "Cardinal"
// }
// const Rhode_Island = {
//     Statehood: "May 29, 1790",
//     Capital: "Providence",
//     Nicknames: "Little Rhody, Ocean State",
//     Motto:  "Hope",
//     Flower:  "Violet",
//     Bird:  "Rhode Island Red"
// }
// const Vermont = {
//     Statehood: "March 4, 1791",
//     Capital: "Montpelier",
//     Nicknames: "Green Mountain State",
//     Motto:  "Freedom an unity",
//     Flower:  "Red clover",
//     Bird:  "Hermit thrush"
// }
// const Kentucky = {
//     Statehood: "June 1, 1792",
//     Capital: "Frankfort",
//     Nicknames: "Bluegrass State",
//     Motto:  "United we stand, Divided we fall",
//     Flower:  "Goldenrod",
//     Bird:  "Cardinal"
// }
// const Tennessee = {
//     Statehood: "June 1, 1796",
//     Capital: "Nashville",
//     Nicknames: "Volunteer State",
//     Motto:  "Agriculture and Commerce",
//     Flower:  "Iris",
//     Bird:  "Mockingbird"
// }
// const Ohio = {
//     Statehood: "March 1, 1803",
//     Capital: "Columbus",
//     Nicknames: "Buckeye State",
//     Motto:  "With God, all things are possible",
//     Flower:  "Scarlet carnation",
//     Bird:  "Cardinal"
// }
// const Louisiana = {
//     Statehood: "April 30, 1812",
//     Capital: "Baton Rouge",
//     Nicknames: "Pelican State",
//     Motto:  "Union, justice, and confidence",
//     Flower:  "Magnolia",
//     Bird:  "Eastern brown pelican"
// }
// const Indiana = {
//     Statehood: "December 11, 1816",
//     Capital: "Indianapolis",
//     Nicknames: "Hoosier State",
//     Motto:  "Crossroads of America",
//     Flower:  "Peony",
//     Bird:  "Cardinal"
// }
// const Mississippi = {
//     Statehood: "December 10, 1817",
//     Capital: "Jackson",
//     Nicknames: "Magnolia State",
//     Motto:  "Virtute et Armis (By Valor and Arms)",
//     Flower:  "Magnolia",
//     Bird:  "Mockingbird"
// }
// const Illinois = {
//     Statehood: "December 3, 1818",
//     Capital: "Springfield ",
//     Nicknames: "Prarie State, Land of Lincoln",
//     Motto:  "State sovereignty, national union",
//     Flower:  "Natural violet",
//     Bird:  "Cardinal"
// }
// const Alabama = {
//     Statehood: "December 14, 1819",
//     Capital: "Montgomery",
//     Nicknames: "Heart of Dixie, Camellia State",
//     Motto:  "We dare defend our right",
//     Flower:  "Camellia",
//     Bird:  "Yellowhammer"
// }
// const Maine = {
//     Statehood: "March 15, 1820",
//     Capital: "Augusta",
//     Nicknames: "Pine Tree State",
//     Motto:  "Dirigo (I Direct)",
//     Flower:  "White pine cone and tassel",
//     Bird:  "Chickadee"
// }
// const Missouri = {
//     Statehood: "August 10, 1821",
//     Capital: "Jefferson City",
//     Nicknames: "Show Me State",
//     Motto:  "Salus Populi Suprema Lex Esto (The welfare of the people shall be its supreme law)",
//     Flower:  "Hawthorn",
//     Bird:  "Bluebird"
// }
// const Arkansas = {
//     Statehood: "June 15, 1836",
//     Capital: "Little Rock",
//     Nicknames: "Land of Opportunity, Natural State",
//     Motto:  "Regnal Populus (The people rule)",
//     Flower:  "Apple Blossom",
//     Bird:  "Mockingbird"
// }
// const Michigan = {
//     Statehood: "January 26, 1837",
//     Capital: "Lansing",
//     Nicknames: "Great Lakes State, Wolverine State",
//     Motto:  "Si Quaeris Peninsulam Amoenam Circumspice (If you seek a pleasant peninsula, look about you)",
//     Flower:  "Apple Blossom",
//     Bird:  "Robin"
// }
// const Florida = {
//     Statehood: "March 3, 1845",
//     Capital: "Tallahassee",
//     Nicknames: "Sunshine State",
//     Motto:  "In God we trust",
//     Flower:  "Orange blossom",
//     Bird:  "Mockingbird"
// }
// const Texas = {
//     Statehood: "December 29, 1845",
//     Capital: "Austin",
//     Nicknames: "Lone Star State",
//     Motto:  "Friendship",
//     Flower:  "Bluebonnet",
//     Bird:  "Mockingbird"
// }
// const Iowa = {
//     Statehood: "December 28, 1846",
//     Capital: "Des Moines",
//     Nicknames: "Hawkeye State",
//     Motto:  "Our liberties we prize and our rights we will maintain",
//     Flower:  "Wild rose",
//     Bird:  "Eastern goldfinch"
// }
// const Wisconsin = {
//     Statehood: "May 29, 1848",
//     Capital: "Madison",
//     Nicknames: "Badger State, America's Dairyland",
//     Motto:  "Forward",
//     Flower:  "Wood violet",
//     Bird:  "Robin"
// }
// const California = {
//     Statehood: "September 9, 1850",
//     Capital: "Sacramento",
//     Nicknames: "Golden State",
//     Motto:  "Eureka (I have found it)",
//     Flower:  "Golden poppy",
//     Bird:  "Californa valley quail"
// }
// const Minnesota = {
//     Statehood: "May 11, 1858",
//     Capital: "St. Paul",
//     Nicknames: "Land of 10,000 Lakes, North Star State, Gopher State",
//     Motto:  "L'Etoile du Nord (North Star)",
//     Flower:  "Pink-and-white lady's slipper",
//     Bird:  "Common loom"
// }
// const Oregon = {
//     Statehood: "February 14, 1859",
//     Capital: "Salem",
//     Nicknames: "Beaver State",
//     Motto:  "She flies with her own wings",
//     Flower:  "Oregon grape",
//     Bird:  "Western meadowlark"
// }
// const Kansas = {
//     Statehood: "January 29, 1861",
//     Capital: "Topeka",
//     Nicknames: "Sunflower State",
//     Motto:  "Ad Astra per Aspera (To the stars through difficulties)",
//     Flower:  "Sunflower",
//     Bird:  "Western meadowlark"
// }
// const West_Virginia = {
//     Statehood: "June 20, 1863",
//     Capital: "Charleston",
//     Nicknames: "Mountain State",
//     Motto:  "Montani Semper Liberi (Mountaineers are always free)",
//     Flower:  "Big rhododendron",
//     Bird:  "Cardinal"
// }
// const Nevada = {
//     Statehood: "October 31, 1864",
//     Capital: "Carson City",
//     Nicknames: "Silver State",
//     Motto:  "All for our country; Sagebrush state (archaic)",
//     Flower:  "Sagebrush",
//     Bird:  "Mountain Bluebird"
// }
// const Nebraska = {
//     Statehood: "March 1, 1867",
//     Capital: "Lincoln",
//     Nicknames: "Cornhusker State",
//     Motto:  "Equality before the law",
//     Flower:  "Goldenrod",
//     Bird:  "Western meadowlark"
// }
// const Colorado = {
//     Statehood: "August 1, 1876",
//     Capital: "Denver",
//     Nicknames: "Centennial State",
//     Motto:  "Nil Sine Numine (Nothing without the deity)",
//     Flower:  "Rocky Mountain columbine",
//     Bird:  "Lark bunting"
// }
// const North_Dakota = {
//     Statehood: "November 2, 1889",
//     Capital: "Bismarck",
//     Nicknames: "Peace Garden State, Rough Rider State, Cereal State",
//     Motto:  "Liberty and union, now and forever, one and inseparable",
//     Flower:  "Wild prairie rose",
//     Bird:  "Western meadowlark"
// }
// const South_Dakota = {
//     Statehood: "November 2, 1889",
//     Capital: "Pierre",
//     Nicknames: "Coyote State, Mount Rushmore State",
//     Motto:  "Under God, the people rule",
//     Flower:  "Wild prarie rose",
//     Bird:  "Ring-necked pheasant"
// }
// const Montana = {
//     Statehood: "November 8, 1889",
//     Capital: "Helena",
//     Nicknames: "Treasure State",
//     Motto:  "Ora y Plata (Gold and Silver)",
//     Flower:  "Bitterroot",
//     Bird:  "Western meadowlark"
// }
// const Washington = {
//     Statehood: "November 11, 1889",
//     Capital: "Olympia",
//     Nicknames: "Evergreen State",
//     Motto:  "Alki (By and by)",
//     Flower:  "Western rhododendron",
//     Bird:  "Willow goldfinch"
// }
// const Idaho = {
//     Statehood: "July 3, 1890",
//     Capital: "Boise",
//     Nicknames: "Gem State",
//     Motto:  "Esto Perpetua (It is perpetual)",
//     Flower:  "Syringia",
//     Bird:  "Mountain bluebird"
// }
// const Wyoming = {
//     Statehood: "July 10, 1890",
//     Capital: "Cheyenne",
//     Nicknames: "Equality State",
//     Motto:  "Equal rights",
//     Flower:  "Indian paintbrush",
//     Bird:  "Meadowlark"
// }
// const Utah = {
//     Statehood: "January 4, 1896",
//     Capital: "Salt Lake City",
//     Nicknames: "Beehive State",
//     Motto:  "Industry",
//     Flower:  "Sego Lily",
//     Bird:  "Seagull"
// }
// const Oklahoma = {
//     Statehood: "November 16, 1907",
//     Capital: "Oklahoma City",
//     Nicknames: "Sooner State",
//     Motto:  "Labor Omnia Vincit (Labor conquers all things)",
//     Flower:  "Mistletoe",
//     Bird:  "Scissor-tailed flycatcher"
// }
// const New_Mexico = {
//     Statehood: "January 6, 1912",
//     Capital: "Santa Fe",
//     Nicknames: "Land of Enchantment",
//     Motto:  "Crescit Eundo (It grows as it goes)",
//     Flower:  "Yucca",
//     Bird:  "Roadrunner"
// }
// const Arizona = {
//     Statehood: "February 14, 1912",
//     Capital: "Phoenix",
//     Nicknames: "Grand Canyon State",
//     Motto:  "Ditat Deus (God enriches)",
//     Flower:  "Saguaro Cactus blossom",
//     Bird:  "Cactus wren"
// }
// const Alaska = {
//     Statehood: "January 3, 1959",
//     Capital: "Juneau",
//     Nicknames: "The Last Frontier (unofficial)",
//     Motto:  "North to the future",
//     Flower:  "",
//     Bird:  ""
// }
// const Hawaii = {
//     Statehood: "August 21, 1959",
//     Capital: "Honolulu",
//     Nicknames: "Aloha State",
//     Motto:  "Ua mau, ke ea o ka aina i ka pono (the life of the land is perpetuated in righteousness)",
//     Flower:  "Yellow hibiscus",
//     Bird:  "Hawaiian goose"
// }
// const District_of_Columbia = {
//     Statehood: "1 of 6 U.S. territories ",
//     Capital: "Capital of the United States of America",
//     Nicknames: "DC",
//     Motto:  "Justia Omnibus (Justice for All)",
//     Flower:  "American Beauty Rose",
//     Bird:  "Wood thrush"
// }
// const Puerto_Rico = {
//     Statehood: "1 of 6 U.S. territories",
//     Capital: "San Juan",
//     Nicknames: "",
//     Motto:  "Joannes Est Nomen Eius (John is his name)",
//     Flower:  "Maga",
//     Bird:  "Reinita"
// }
// const Guam = {
//     Statehood: "1 of 6 U.S. territories",
//     Capital: "Hagatna (Agana)",
//     Nicknames: "",
//     Motto:  "Where America's day begins",
//     Flower:  "Bougainvillea spectabilis",
//     Bird:  "Marianas rose crown fruit dove"
// }
// const American_Samoa = {
//     Statehood: "1 of 6 U.S. territories",
//     Capital: "Pago Pago",
//     Nicknames: "The last frontier",
//     Motto:  "Samoa Muamua le Atua (God is first in Samoa)",
//     Flower:  "Paogo",
//     Bird:  "Willow ptarmigan"
// }
// const US_Virgin_Islanda = {
//     Statehood: "1 of 6 U.S. territories",
//     Capital: "Charlotte Amalie, St. Thomas",
//     Nicknames: "",
//     Motto:  "United in pride",
//     Flower:  "Yellow elder or yellow cedar",
//     Bird:  "Yellow breast or banana quit"
// }
// const Northern_Mariana_Islanda = {
//     Statehood: "1 of 6 U.S. territories",
//     Capital: "Saipan",
//     Nicknames: "",
//     Motto:  "",
//     Flower:  "Flores Mayo",
//     Bird:  "Mariana fruit-dove"
// }
// const STATETEMPLATE = {
//     Statehood: "",
//     Capital: "",
//     Nicknames: "",
//     Motto:  "",
//     Flower:  "",
//     Bird:  ""
// }


