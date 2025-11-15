class SpellingBeeApp {
    constructor() {
        // Google TTS API configuration
        // SETUP INSTRUCTIONS:
        // 1. Go to https://console.cloud.google.com/
        // 2. Create a new project or select existing one
        // 3. Enable "Cloud Text-to-Speech API" 
        // 4. Create credentials (API Key)
        // 5. Replace 'YOUR_GOOGLE_TTS_API_KEY' with your actual key
        // 6. Set this.useGoogleTTS = true to activate
        // FREE TIER: 1 million characters/month (4 million standard voices)
        this.googleTTSApiKey = 'YOUR_GOOGLE_TTS_API_KEY'; 
        this.useGoogleTTS = false; // Set to true when you have API key
        
        this.wordLevels = {
            '1-bee': [
                { word: "tag", sentence: "The price tag was attached to the gift." },
                { word: "send", sentence: "Please send the letter tomorrow." },
                { word: "deck", sentence: "We played cards on the deck." },
                { word: "stuck", sentence: "The car was stuck in the mud." },
                { word: "smug", sentence: "He had a smug look on his face." },
                { word: "fish", sentence: "We caught fish in the lake." },
                { word: "hold", sentence: "Please hold my hand while we cross." },
                { word: "mind", sentence: "Mind your manners at the table." },
                { word: "stay", sentence: "Please stay here until I return." },
                { word: "scrub", sentence: "Scrub the vegetables before cooking." },
                { word: "draw", sentence: "I like to draw pictures of animals." },
                { word: "brown", sentence: "The brown dog chased the ball." },
                { word: "cozy", sentence: "The cozy cabin was warm inside." },
                { word: "cosy", sentence: "The cosy room had a fireplace." },
                { word: "tint", sentence: "The tint on the windows blocked the sun." },
                { word: "milk", sentence: "The cat drank the milk from the bowl." },
                { word: "yawn", sentence: "I let out a big yawn when I was tired." },
                { word: "tank", sentence: "The fish tank was full of colorful fish." },
                { word: "want", sentence: "I want to go to the park today." },
                { word: "crowd", sentence: "The crowd cheered for the winning team." },
                { word: "pond", sentence: "The ducks swam in the pond." },
                { word: "skirt", sentence: "She wore a beautiful skirt to the party." },
                { word: "sharks", sentence: "Sharks live in the ocean." },
                { word: "quilt", sentence: "Grandma made a warm quilt for the bed." },
                { word: "twigs", sentence: "The birds built their nest with twigs." },
                { word: "taffy", sentence: "We ate sweet taffy at the fair." },
                { word: "comfy", sentence: "The comfy chair was perfect for reading." },
                { word: "stretch", sentence: "Remember to stretch before exercising." },
                { word: "tight", sentence: "The tight shoes hurt my feet." },
                { word: "candy", sentence: "The children received candy for Halloween." },
                { word: "scrunch", sentence: "Scrunch the paper into a small ball." },
                { word: "ruby", sentence: "The ruby ring was red and shiny." },
                { word: "close", sentence: "Please close the door when you leave." },
                { word: "tackle", sentence: "The football player made a great tackle." },
                { word: "wire", sentence: "The telephone wire connected the poles." },
                { word: "skater", sentence: "The ice skater performed amazing tricks." },
                { word: "giant", sentence: "The giant tree towered over the house." },
                { word: "bucket", sentence: "Fill the bucket with water from the well." },
                { word: "chance", sentence: "Take a chance and try something new." },
                { word: "baskets", sentence: "We filled the baskets with fresh fruit." },
                { word: "tender", sentence: "The tender meat was easy to chew." },
                { word: "paste", sentence: "Apply the paste to the wall before painting." },
                { word: "melon", sentence: "The sweet melon was refreshing on a hot day." },
                { word: "farmer", sentence: "The farmer planted seeds in the field." },
                { word: "parent", sentence: "Every parent wants their child to be happy." },
                { word: "tail", sentence: "The dog wagged its tail happily." },
                { word: "hockey", sentence: "The hockey team scored the winning goal." },
                { word: "slime", sentence: "The green slime dripped from the ceiling." },
                { word: "insects", sentence: "Insects buzzed around the garden flowers." },
                { word: "teeth", sentence: "Brush your teeth twice a day." },
                { word: "shortcut", sentence: "We took a shortcut through the forest." },
                { word: "bait", sentence: "The fisherman used bait to catch fish." },
                { word: "lure", sentence: "The shiny lure attracted the big fish." },
                { word: "cluster", sentence: "A cluster of stars appeared in the night sky." },
                { word: "forest", sentence: "We walked through the dark forest." },
                { word: "hollow", sentence: "The hollow log was home to small animals." },
                { word: "spinning", sentence: "The spinning wheel made thread from wool." },
                { word: "baffling", sentence: "The baffling puzzle confused everyone." },
                { word: "sizzling", sentence: "The sizzling bacon smelled delicious." },
                { word: "hoist", sentence: "Hoist the flag up the pole." },
                { word: "search", sentence: "Search for your lost keys under the couch." },
                { word: "remind", sentence: "Remind me to call my grandmother tonight." },
                { word: "mango", sentence: "The sweet mango was yellow and juicy." },
                { word: "coral", sentence: "The coral reef was full of colorful fish." },
                { word: "jangle", sentence: "The keys will jangle in your pocket." },
                { word: "shimmer", sentence: "The stars shimmer in the night sky." },
                { word: "blossoms", sentence: "The cherry blossoms bloom in spring." },
                { word: "swampy", sentence: "The swampy ground was soft and wet." },
                { word: "studded", sentence: "The studded belt had silver decorations." },
                { word: "focus", sentence: "Focus on your work and finish the task." },
                { word: "distress", sentence: "The ship sent a distress signal for help." },
                { word: "lessons", sentence: "I learned important lessons from my mistakes." },
                { word: "moment", sentence: "Wait just a moment before you leave." },
                { word: "ajar", sentence: "The door was left slightly ajar." },
                { word: "basil", sentence: "Fresh basil adds flavor to the sauce." },
                { word: "triple", sentence: "The triple scoop ice cream had three flavors." },
                { word: "satin", sentence: "The dress was made of smooth satin." },
                { word: "ahoy", sentence: "Ahoy, matey! Welcome aboard the ship!" },
                { word: "signal", sentence: "The traffic signal turned red." },
                { word: "answer", sentence: "Please answer the question carefully." },
                { word: "shuffle", sentence: "Shuffle the cards before dealing." },
                { word: "dollop", sentence: "Add a dollop of cream to the dessert." },
                { word: "minnows", sentence: "The minnows swam in the shallow stream." },
                { word: "silver", sentence: "The silver coin was old and valuable." },
                { word: "before", sentence: "Finish your homework before playing." },
                { word: "circus", sentence: "The circus had clowns and acrobats." },
                { word: "writing", sentence: "I am writing a story for my class." },
                { word: "kitchen", sentence: "Mom was cooking in the kitchen." },
                { word: "sugar", sentence: "Add a little sugar to sweeten the tea." },
                { word: "awkward", sentence: "The awkward silence made everyone uncomfortable." },
                { word: "seep", sentence: "Water began to seep through the roof." },
                { word: "sweet", sentence: "The sweet apple was delicious." },
                { word: "wheels", sentence: "The car has four wheels." },
                { word: "faint", sentence: "I felt faint from the hot weather." },
                { word: "fruit", sentence: "Fresh fruit is healthy for you." },
                { word: "roam", sentence: "The cattle roam freely in the field." },
                { word: "goats", sentence: "The goats climbed the rocky mountain." },
                { word: "woozy", sentence: "I felt woozy after spinning in circles." },
                { word: "limbs", sentence: "The monkey used its limbs to climb trees." },
                { word: "ahead", sentence: "Look ahead to see what's coming." },
                { word: "señor", sentence: "Señor Garcia is from Spain." },
                { word: "unicorn", sentence: "The unicorn had a magical horn." },
                { word: "faraway", sentence: "The faraway land was across the ocean." },
                { word: "heater", sentence: "The heater kept the room warm." },
                { word: "pirates", sentence: "The pirates searched for buried treasure." },
                { word: "understand", sentence: "I understand the math problem now." },
                { word: "wooden", sentence: "The wooden chair was old and creaky." },
                { word: "leaning", sentence: "The leaning tower tilted to one side." },
                { word: "breakfast", sentence: "We ate pancakes for breakfast." },
                { word: "window", sentence: "The window was open to let in fresh air." },
                { word: "acrobat", sentence: "The acrobat performed amazing flips." },
                { word: "message", sentence: "I received a message from my friend." },
                { word: "chocolate", sentence: "The chocolate cake was delicious." },
                { word: "forepaw", sentence: "The bear used its forepaw to catch fish." },
                { word: "elephant", sentence: "The elephant is the largest land animal." },
                { word: "hedgehog", sentence: "The hedgehog curled into a spiky ball." },
                { word: "recipe", sentence: "Follow the recipe to bake the cake." },
                { word: "garbage", sentence: "Take out the garbage before it smells." },
                { word: "surprise", sentence: "The surprise party was a great success." },
                { word: "mermaid", sentence: "The mermaid swam in the deep blue sea." },
                { word: "bombarded", sentence: "The castle was bombarded by cannonballs." },
                { word: "disability", sentence: "Having a disability doesn't stop you from achieving goals." },
                { word: "incredible", sentence: "The magician performed an incredible trick." },
                { word: "leather", sentence: "The boots were made of genuine leather." },
                { word: "countess", sentence: "The countess lived in a grand castle." },
                { word: "nervous", sentence: "I felt nervous before the big test." },
                { word: "peppercorn", sentence: "The chef added fresh peppercorn to the dish." },
                { word: "cartwheel", sentence: "She did a perfect cartwheel in the grass." },
                { word: "raise", sentence: "Please raise your hand if you have a question." },
                { word: "weather", sentence: "The weather was sunny and warm." },
                { word: "zooming", sentence: "The car was zooming down the highway." },
                { word: "attacked", sentence: " The bees attacked when we disturbed their hive." },
                { word: "turnout", sentence: "The turnout for the event was amazing." },
                { word: "eaten", sentence: "The cookies were all eaten by the children." },
                { word: "streetlights", sentence: "The streetlights lit up the dark road." },
                { word: "journey", sentence: "The journey took three days to complete." },
                { word: "courtyard", sentence: "The children played in the castle courtyard." },
                { word: "shouting", sentence: "He was shouting for help across the river." },
                { word: "asleep", sentence: "The baby was asleep in her crib." },
                { word: "curious", sentence: "The curious cat explored every room." },
                { word: "dinosaur", sentence: "The dinosaur fossils were millions of years old." },
                { word: "brilliant", sentence: "The scientist had a brilliant idea." },
                { word: "vacuum", sentence: "I need to vacuum the living room carpet." },
                { word: "gorgeous", sentence: "The gorgeous sunset painted the sky orange." },
                { word: "monsoon", sentence: "The monsoon brought heavy rains." },
                { word: "dangerous", sentence: "The dangerous path was steep and rocky." },
                { word: "avocado", sentence: "The avocado was green and creamy." },
                { word: "valentine", sentence: "I received a valentine card from my friend." },
                { word: "February", sentence: "February is the shortest month of the year." },
                { word: "formation", sentence: "The soldiers stood in perfect formation." },
                { word: "especially", sentence: "I love ice cream, especially chocolate flavor." }
            ],
            '2-bee': [
                { word: "hesitate", sentence: "Don't hesitate to ask for help if you need it." },
                { word: "scorcher", sentence: "Today was a real scorcher with temperatures over 100 degrees." },
                { word: "scavenger", sentence: "The vulture is a scavenger that eats dead animals." },
                { word: "fragments", sentence: "The vase broke into small fragments." },
                { word: "deflated", sentence: "The deflated balloon lay on the ground." },
                { word: "unleash", sentence: "Unleash the dog so it can run in the park." },
                { word: "ration", sentence: "We had to ration the water during the drought." },
                { word: "cosmetics", sentence: "She applied cosmetics before the party." },
                { word: "crawdad", sentence: "We caught a crawdad in the creek." },
                { word: "frustration", sentence: "He felt frustration when the puzzle wouldn't fit." },
                { word: "unruly", sentence: "The unruly child refused to follow rules." },
                { word: "mascot", sentence: "The lion was the school's mascot." },
                { word: "aroma", sentence: "The aroma of fresh bread filled the kitchen." },
                { word: "moustache", sentence: "The man grew a bushy moustache." },
                { word: "mustache", sentence: "He trimmed his mustache carefully." },
                { word: "artifacts", sentence: "The museum displayed ancient artifacts." },
                { word: "artefacts", sentence: "The archaeologist discovered rare artefacts." },
                { word: "perfume", sentence: "She sprayed perfume on her wrists." },
                { word: "sinister", sentence: "The sinister laugh echoed in the dark hallway." },
                { word: "tuxedo", sentence: "He wore a tuxedo to the formal dinner." },
                { word: "discoveries", sentence: "Scientific discoveries change our understanding of the world." },
                { word: "lurches", sentence: "The old car lurches forward when it starts." },
                { word: "language", sentence: "Learning a new language takes practice." },
                { word: "prognosis", sentence: "The doctor's prognosis was optimistic." },
                { word: "Buffalo", sentence: "The buffalo roamed across the prairie." },
                { word: "sequins", sentence: "The dress was decorated with shiny sequins." },
                { word: "gallop", sentence: "The horse began to gallop across the field." },
                { word: "fabulous", sentence: "The fabulous performance earned a standing ovation." },
                { word: "lanky", sentence: "The lanky teenager was tall and thin." },
                { word: "fluently", sentence: "She speaks French fluently." },
                { word: "mysterious", sentence: "The mysterious box contained an old map." },
                { word: "brandished", sentence: "He brandished the sword in the battle." },
                { word: "sardines", sentence: "We ate sardines for lunch." },
                { word: "anguish", sentence: "She cried out in anguish when she heard the news." },
                { word: "conical", sentence: "The wizard wore a conical hat." },
                { word: "rickety", sentence: "The rickety bridge swayed in the wind." },
                { word: "lilt", sentence: "Her voice had a gentle lilt when she sang." },
                { word: "pediatric", sentence: "The pediatric doctor specializes in children's health." },
                { word: "porridge", sentence: "Goldilocks ate the three bears' porridge." },
                { word: "democracy", sentence: "Democracy allows people to vote for their leaders." },
                { word: "rummage", sentence: "I had to rummage through the closet to find my shoes." },
                { word: "beige", sentence: "The beige walls matched the furniture." },
                { word: "ancestral", sentence: "The ancestral home had been in the family for generations." },
                { word: "grimace", sentence: "He made a grimace when he tasted the sour lemon." },
                { word: "gaunt", sentence: "The gaunt man hadn't eaten in days." },
                { word: "enormous", sentence: "The enormous whale was bigger than the boat." },
                { word: "geranium", sentence: "The red geranium bloomed in the garden." },
                { word: "nautical", sentence: "The sailor wore a nautical themed shirt." },
                { word: "dubious", sentence: "I was dubious about his strange story." },
                { word: "ebony", sentence: "The piano was made of polished ebony wood." },
                { word: "foreign", sentence: "Learning about foreign cultures is interesting." },
                { word: "paltry", sentence: "The paltry sum wasn't enough to buy lunch." },
                { word: "verdict", sentence: "The jury reached a verdict of guilty." },
                { word: "garbled", sentence: "The garbled message was impossible to understand." },
                { word: "encourages", sentence: "The teacher encourages students to do their best." },
                { word: "imitation", sentence: "His imitation of the bird was very realistic." },
                { word: "miniature", sentence: "The dollhouse had miniature furniture." },
                { word: "receptionist", sentence: "The receptionist greeted visitors at the front desk." },
                { word: "preamble", sentence: "The preamble explained the purpose of the document." },
                { word: "plausible", sentence: "His explanation seemed plausible." },
                { word: "reprimanding", sentence: "The teacher was reprimanding the student for being late." },
                { word: "commotion", sentence: "The commotion in the hallway drew everyone's attention." },
                { word: "oblivion", sentence: "The ancient city fell into oblivion." },
                { word: "immigrants", sentence: "The immigrants came to America seeking a better life." },
                { word: "steeple", sentence: "The church steeple could be seen from miles away." },
                { word: "spectators", sentence: "The spectators cheered for the home team." },
                { word: "lanyards", sentence: "The employees wore ID cards on lanyards." },
                { word: "suspicious", sentence: "The suspicious man looked around nervously." },
                { word: "parchment", sentence: "The ancient document was written on parchment." },
                { word: "ramshackle", sentence: "The ramshackle house needed many repairs." },
                { word: "fugitive", sentence: "The fugitive hid from the police." },
                { word: "heron", sentence: "The heron stood gracefully in the water." },
                { word: "dissolving", sentence: "The sugar was dissolving in the hot tea." },
                { word: "nomad", sentence: "The nomad traveled from place to place." },
                { word: "billowed", sentence: "The smoke billowed from the chimney." },
                { word: "skewer", sentence: " Grill the vegetables on a skewer." },
                { word: "Berlin", sentence: "Berlin is the capital of Germany." },
                { word: "lunacy", sentence: "It was pure lunacy to go swimming in a storm." },
                { word: "conjure", sentence: "The magician tried to conjure a rabbit from his hat." },
                { word: "bracken", sentence: "The hikers walked through fields of bracken." },
                { word: "noggin", sentence: "He wore a hat on his noggin." },
                { word: "neon", sentence: "The neon sign lit up the night sky." },
                { word: "rakish", sentence: "The rakish pirate had a mischievous grin." },
                { word: "hypnosis", sentence: "The hypnotist used hypnosis to help people quit smoking." },
                { word: "rotunda", sentence: "The rotunda had a beautiful domed ceiling." },
                { word: "gusto", sentence: "She attacked her meal with great gusto." },
                { word: "toiletries", sentence: "Don't forget to pack your toiletries for the trip." },
                { word: "gleaned", sentence: "I gleaned information from the old books." },
                { word: "jeered", sentence: "The crowd jeered at the losing team." },
                { word: "winsome", sentence: "Her winsome smile charmed everyone." },
                { word: "prattling", sentence: "The child was prattling about her day at school." },
                { word: "galore", sentence: "There were toys galore in the playroom." },
                { word: "emporium", sentence: "The emporium sold everything from books to bicycles." },
                { word: "atrium", sentence: "The hotel had a beautiful glass atrium." },
                { word: "eccentric", sentence: "The eccentric artist painted with his feet." },
                { word: "savant", sentence: "The musical savant could play any song after hearing it once." },
                { word: "almanac", sentence: "The farmer checked the almanac for weather predictions." },
                { word: "hippies", sentence: "The hippies promoted peace and love in the 1960s." },
                { word: "samosas", sentence: "We ate delicious samosas at the Indian restaurant." },
                { word: "campaign", sentence: "The political campaign lasted for months." },
                { word: "pistachio", sentence: "The pistachio ice cream was green and tasty." },
                { word: "mosque", sentence: "The mosque had beautiful architecture." },
                { word: "zombielike", sentence: "The sleepwalking student moved in a zombielike state." },
                { word: "warlock", sentence: "The warlock cast spells in the fantasy story." },
                { word: "colossus", sentence: "The colossus statue towered over the city." },
                { word: "convulsively", sentence: "The patient laughed convulsively at the joke." },
                { word: "dimensional", sentence: "The three-dimensional model showed the building's design." },
                { word: "garishly", sentence: "The room was decorated garishly with bright colors." },
                { word: "graffitist", sentence: "The graffitist painted colorful murals on the wall." },
                { word: "Everest", sentence: "Mount Everest is the world's tallest mountain." },
                { word: "dexterity", sentence: "The surgeon showed great dexterity during the operation." },
                { word: "cavorting", sentence: "The children were cavorting in the playground." },
                { word: "marauder", sentence: "The marauder raided the village at night." },
                { word: "conscience", sentence: "His conscience told him to return the lost wallet." },
                { word: "battlements", sentence: "The soldiers defended the castle from the battlements." },
                { word: "deferential", sentence: "The deferential student always respected his teachers." },
                { word: "albatross", sentence: "The albatross flew gracefully over the ocean." },
                { word: "khaki", sentence: "The soldiers wore khaki uniforms." },
                { word: "opalescent", sentence: "The opalescent stone shimmered with many colors." },
                { word: "asphalt", sentence: "The road was made of smooth asphalt." },
                { word: "Yiddish", sentence: "My grandmother speaks Yiddish with her friends." },
                { word: "talcum", sentence: "The baby powder contained talcum." },
                { word: "tranquilizer", sentence: "The vet used a tranquilizer to calm the anxious dog." },
                { word: "equestrian", sentence: "The equestrian events included horse jumping." },
                { word: "plaited", sentence: "She wore her hair in plaited braids." },
                { word: "monsieur", sentence: "Monsieur Dubois is from France." },
                { word: "manticores", sentence: "The mythical manticores had the body of a lion and wings." },
                { word: "prestigious", sentence: "She attended a prestigious university." },
                { word: "fraidycat", sentence: "The fraidycat was afraid of the dark." },
                { word: "guttural", sentence: "The frog made a guttural croaking sound." },
                { word: "lo mein", sentence: "We ordered lo mein noodles for dinner." },
                { word: "courier", sentence: "The courier delivered the package quickly." },
                { word: "sans serif", sentence: "The document used a sans serif font." },
                { word: "psyche", sentence: "The psychologist studied the human psyche." },
                { word: "stucco", sentence: "The house exterior was covered with stucco." },
                { word: "Frankenstein", sentence: "Frankenstein is a classic horror novel." },
                { word: "schema", sentence: "The database schema organized the information." },
                { word: "et cetera", sentence: "We need milk, bread, eggs, et cetera." },
                { word: "vidimus", sentence: "The lawyer examined the vidimus document." },
                { word: "delphine", sentence: "Delphine is a French name meaning dolphin." },
                { word: "slough", sentence: "The snake began to slough its skin." },
                { word: "archipelago", sentence: "The archipelago consisted of hundreds of islands." },
                { word: "serape", sentence: "The Mexican serape was colorful and warm." },
                { word: "sarape", sentence: "He wore a traditional sarape from Mexico." },
                { word: "puissance", sentence: "The horse showed great puissance in the competition." },
                { word: "pinioning", sentence: "The eagle was pinioning its prey." },
                { word: "chignon", sentence: "She wore her hair in an elegant chignon." },
                { word: "pheromone", sentence: "Ants communicate using pheromone trails." },
                { word: "galleon", sentence: "The Spanish galleon carried treasure across the ocean." },
                { word: "magnanimous", sentence: "The magnanimous leader forgave his enemies." },
                { word: "chartreuse", sentence: "The chartreuse liqueur was bright green." },
                { word: "wainscoting", sentence: "The dining room had oak wainscoting on the walls." },
                { word: "Nehru", sentence: "Nehru was the first Prime Minister of India." }
            ],
            '3-bee': [
                { word: "gangly", sentence: "The gangly teenager was all arms and legs." },
                { word: "swaggering", sentence: "The swaggering cowboy walked into the saloon." },
                { word: "chimneys", sentence: "Smoke rose from the chimneys on a cold morning." },
                { word: "riveted", sentence: "The audience was riveted by the speaker's story." },
                { word: "plaid", sentence: "He wore a plaid shirt to the picnic." },
                { word: "dirge", sentence: "The funeral dirge played slowly and sadly." },
                { word: "zeal", sentence: "She approached her work with great zeal." },
                { word: "whittled", sentence: "The old man whittled wood into small figures." },
                { word: "depots", sentence: "The army supplies were stored at various depots." },
                { word: "fiberglass", sentence: "The boat was made of strong fiberglass." },
                { word: "salvaged", sentence: "They salvaged treasures from the shipwreck." },
                { word: "fissures", sentence: "Earthquakes created fissures in the ground." },
                { word: "enthusiastic", sentence: "The enthusiastic crowd cheered loudly." },
                { word: "discipline", sentence: "Military discipline requires strict obedience." },
                { word: "unfamiliar", sentence: "The unfamiliar street confused the tourist." },
                { word: "scurrying", sentence: "Mice were scurrying across the floor." },
                { word: "dignitaries", sentence: "Foreign dignitaries visited the White House." },
                { word: "pizzeria", sentence: "We ordered pizza from the local pizzeria." },
                { word: "dismissal", sentence: "The dismissal of the employee shocked everyone." },
                { word: "skittish", sentence: "The skittish horse was nervous around strangers." },
                { word: "careened", sentence: "The car careened around the sharp corner." },
                { word: "nomination", sentence: "She accepted the nomination for president." },
                { word: "opportunist", sentence: "The opportunist took advantage of every situation." },
                { word: "dictatorship", sentence: "The dictatorship ruled with absolute power." },
                { word: "comrades", sentence: "The soldiers fought alongside their comrades." },
                { word: "sporadic", sentence: "Sporadic gunfire could be heard in the distance." },
                { word: "promenade", sentence: "The couple took a promenade along the beach." },
                { word: "repugnant", sentence: "The repugnant smell made everyone leave the room." },
                { word: "invincible", sentence: "The young athlete felt invincible." },
                { word: "renowned", sentence: "The renowned scientist won the Nobel Prize." },
                { word: "parachute", sentence: "The parachute opened safely during the jump." },
                { word: "laborious", sentence: "The laborious task took all day to complete." },
                { word: "appointment", sentence: "I have a doctor's appointment tomorrow." },
                { word: "foreseeable", sentence: "In the foreseeable future, we'll need more resources." },
                { word: "ratify", sentence: "The government will ratify the new treaty." },
                { word: "scalpel", sentence: "The surgeon used a sharp scalpel for the incision." },
                { word: "reclusive", sentence: "The reclusive author rarely gave interviews." },
                { word: "compassionate", sentence: "The compassionate nurse comforted the sick patient." },
                { word: "bulletin", sentence: "The school bulletin announced upcoming events." },
                { word: "alfalfa", sentence: "The farmer grew alfalfa to feed the cattle." },
                { word: "officially", sentence: "The mayor officially declared the holiday." },
                { word: "crematorium", sentence: "The crematorium handled the final arrangements." },
                { word: "bayonet", sentence: "The soldier fixed a bayonet to his rifle." },
                { word: "amicable", sentence: "They reached an amicable agreement." },
                { word: "exuberant", sentence: "The exuberant puppy jumped with excitement." },
                { word: "beautician", sentence: "The beautician styled her hair for the wedding." },
                { word: "equations", sentence: "The student solved complex math equations." },
                { word: "assignment", sentence: "The teacher gave us a writing assignment." },
                { word: "ultimatum", sentence: "The company issued an ultimatum to the striking workers." },
                { word: "whinnying", sentence: "The whinnying horse called for its foal." },
                { word: "squalor", sentence: "The poverty-stricken area lived in squalor." },
                { word: "memoirs", sentence: "The politician wrote his memoirs after retiring." },
                { word: "cylinders", sentence: "The engine has six cylinders." },
                { word: "ominous", sentence: "The ominous clouds warned of an approaching storm." },
                { word: "muffler", sentence: "The car needed a new muffler to reduce noise." },
                { word: "syndrome", sentence: "The doctor diagnosed the rare syndrome." },
                { word: "premises", sentence: "No trespassing on these private premises." },
                { word: "safari", sentence: "We went on safari to see African wildlife." },
                { word: "lasagna", sentence: "Grandma's lasagna is always delicious." },
                { word: "substantially", sentence: "The price increased substantially overnight." },
                { word: "mercantile", sentence: "The mercantile system dominated medieval trade." },
                { word: "formidable", sentence: "The team faced a formidable opponent." },
                { word: "propaganda", sentence: "The government used propaganda to influence public opinion." },
                { word: "marquee", sentence: "The theater marquee advertised the new show." },
                { word: "proficient", sentence: "She became proficient in three languages." },
                { word: "compunction", sentence: "He felt no compunction about his actions." },
                { word: "emphatically", sentence: "She emphatically denied the accusations." },
                { word: "hyperventilated", sentence: "The nervous patient hyperventilated during the exam." },
                { word: "ostracism", sentence: "The social ostracism hurt her deeply." },
                { word: "onslaught", sentence: "The army withstood the enemy's onslaught." },
                { word: "ruefully", sentence: "He smiled ruefully at his mistake." },
                { word: "misanthrope", sentence: "The misanthrope disliked all human company." },
                { word: "prototype", sentence: "The engineers tested the new prototype." },
                { word: "cravenly", sentence: "The cravenly bully ran from the fight." },
                { word: "mulberry", sentence: "The mulberry tree provided shade in the garden." },
                { word: "hypocritical", sentence: "His hypocritical behavior angered his friends." },
                { word: "chlorine", sentence: "The swimming pool is cleaned with chlorine." },
                { word: "traumatic", sentence: "The traumatic experience affected her for years." },
                { word: "receipts", sentence: "Keep your receipts for tax purposes." },
                { word: "solemnly", sentence: "The judge solemnly pronounced the sentence." },
                { word: "begrudge", sentence: "Don't begrudge others their success." },
                { word: "contentious", sentence: "The contentious issue divided the committee." },
                { word: "precocious", sentence: "The precocious child read at a college level." },
                { word: "ensemble", sentence: "The musical ensemble performed beautifully." },
                { word: "cadre", sentence: "The cadre of officers led the training." },
                { word: "lye", sentence: "Be careful with lye as it can burn skin." },
                { word: "belfry", sentence: "The church belfry housed the historic bells." },
                { word: "lacrosse", sentence: "The lacrosse team won the championship." },
                { word: "sluice", sentence: "The sluice gate controlled water flow." },
                { word: "cajolery", sentence: "His cajolery convinced her to lend him money." },
                { word: "vigilance", sentence: "Constant vigilance is required for security." },
                { word: "residuals", sentence: "The actor receives residuals from his old movies." },
                { word: "boutique", sentence: "She bought a dress at the expensive boutique." },
                { word: "peroxide", sentence: "The hairdresser used peroxide to bleach her hair." },
                { word: "aristocracy", sentence: "The aristocracy governed ancient kingdoms." },
                { word: "apocalypse", sentence: "The movie depicted an apocalypse scenario." },
                { word: "tuberculosis", sentence: "The doctor tested for tuberculosis after the persistent cough." },
                { word: "barricade", sentence: "The protesters built a barricade across the street." },
                { word: "confreres", sentence: "The confreres met annually to discuss their work." },
                { word: "anonymously", sentence: "The donation was made anonymously." },
                { word: "unparalleled", sentence: "Her talent was unparalleled in the competition." },
                { word: "barrette", sentence: "She wore a decorative barrette in her hair." },
                { word: "chassis", sentence: "The mechanic repaired the car's chassis." },
                { word: "junket", sentence: "The politicians went on a junket to Europe." },
                { word: "quandary", sentence: "He was in a quandary about which job to accept." },
                { word: "Erie", sentence: "Lake Erie is one of the Great Lakes." },
                { word: "gingham", sentence: "The picnic tablecloth had a gingham pattern." },
                { word: "silhouette", sentence: "The silhouette appeared against the sunset." },
                { word: "auxiliary", sentence: "The auxiliary generator provided emergency power." },
                { word: "thesaurus", sentence: "Use a thesaurus to find synonyms." },
                { word: "patriarchs", sentence: "The patriarchs led the ancient tribes." },
                { word: "chandelier", sentence: "The crystal chandelier sparkled in the ballroom." },
                { word: "dulce", sentence: "The dulce de leche was sweet and creamy." },
                { word: "concierge", sentence: "The hotel concierge recommended local restaurants." },
                { word: "latticework", sentence: "The garden had beautiful latticework trellises." },
                { word: "hibiscus", sentence: "The hibiscus flower bloomed in tropical colors." },
                { word: "tamale", sentence: "We ate authentic Mexican tamales for dinner." },
                { word: "maracas", sentence: "The musicians shook maracas during the song." },
                { word: "gyroplane", sentence: "The gyroplane flew using spinning rotors." },
                { word: "burpees", sentence: "The fitness instructor made us do burpees." },
                { word: "Adriatic", sentence: "The Adriatic Sea borders Italy and Croatia." },
                { word: "piccolo", sentence: "The piccolo played the highest notes in the orchestra." },
                { word: "au revoir", sentence: "Au revoir, see you tomorrow!" },
                { word: "tulle", sentence: "The ballet tutu was made of soft tulle." },
                { word: "boll weevil", sentence: "The boll weevil destroyed cotton crops." },
                { word: "camphor", sentence: "Camphor is used in some medicinal preparations." },
                { word: "Tucson", sentence: "Tucson is a city in Arizona." },
                { word: "paparazzi", sentence: "The paparazzi followed the celebrity everywhere." },
                { word: "pumpernickel", sentence: "I love dark pumpernickel bread." },
                { word: "pogrom", sentence: "The history book described the tragic pogrom." },
                { word: "bursitis", sentence: "The athlete was diagnosed with bursitis in his shoulder." },
                { word: "pâtisserie", sentence: "We bought delicious pastries from the French pâtisserie." },
                { word: "cycads", sentence: "Cycads are ancient plants that resemble palms." },
                { word: "sarsaparilla", sentence: "The old-fashioned soda shop sold sarsaparilla." },
                { word: "maître d'", sentence: "The maître d' seated us at the best table." },
                { word: "cannelloni", sentence: "The Italian restaurant served homemade cannelloni." },
                { word: "boulangerie", sentence: "The French boulangerie baked fresh bread daily." },
                { word: "bronchitis", sentence: "The cold developed into bronchitis." },
                { word: "Oswego", sentence: "Oswego is a city in New York." },
                { word: "diphtheria", sentence: "Vaccines prevent diseases like diphtheria." },
                { word: "baklava", sentence: "The Greek dessert baklava was sweet and flaky." },
                { word: "corbels", sentence: "The medieval ceiling was supported by stone corbels." },
                { word: "trebuchets", sentence: "Medieval armies used trebuchets to siege castles." },
                { word: "Kilimanjaro", sentence: "Mount Kilimanjaro is Africa's tallest peak." },
                { word: "fräulein", sentence: "Fräulein Schmidt taught German at the school." },
                { word: "protégé", sentence: "The mentor was proud of his protégé." },
                { word: "hors d'oeuvres", sentence: "We served hors d'oeuvres before the main course." },
                { word: "maquisards", sentence: "The maquisards fought as resistance fighters." },
                { word: "Aubusson", sentence: "The Aubusson tapestry was centuries old." },
                { word: "Charolais", sentence: "The Charolais cattle are known for their white coat." },
                { word: "Charollais", sentence: "Charollais sheep produce fine wool." }
            ]
        };
        
        this.currentDifficulty = null;
        this.words = [];
        this.currentWordIndex = 0;
        this.correctAnswers = 0;
        this.userAnswers = [];
        this.speechEnabled = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.checkSpeechSupport();
    }
    
    checkSpeechSupport() {
        if ('speechSynthesis' in window) {
            this.speechEnabled = true;
            
            // Load voices properly (some browsers need this)
            if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = () => {
                    this.voicesLoaded = true;
                };
            }
            
            // Force voices to load
            speechSynthesis.getVoices();
        } else {
            console.warn('Speech synthesis not supported in this browser');
        }
        
        // Make app globally accessible for onclick handlers
        window.app = this;
    }
    
    setupEventListeners() {
        // Difficulty selection buttons
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const level = e.target.closest('.difficulty-option').dataset.level;
                this.selectDifficulty(level);
            });
        });
        
        document.getElementById('hear-word-btn').addEventListener('click', () => this.speakWord());
        document.getElementById('hear-sentence-btn').addEventListener('click', () => this.speakSentence());
        document.getElementById('repeat-word-btn').addEventListener('click', () => this.repeatWord());
        document.getElementById('submit-spelling-btn').addEventListener('click', () => this.checkSpelling());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
        
        // Event listeners for improved flow will be set up dynamically
        
        // Allow Enter key to submit spelling
        document.getElementById('spelling-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkSpelling();
            }
        });
    }
    
    selectDifficulty(level) {
        this.currentDifficulty = level;
        this.words = [...this.wordLevels[level]];
        this.startSpellingBee();
    }
    
    startSpellingBee() {
        this.currentWordIndex = 0;
        this.correctAnswers = 0;
        this.userAnswers = [];
        this.shuffleWords();
        this.showScreen('practice-screen');
        this.updateDifficultyIndicator();
        this.loadCurrentWord();
        this.updateProgress();
    }
    
    shuffleWords() {
        for (let i = this.words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.words[i], this.words[j]] = [this.words[j], this.words[i]];
        }
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    updateDifficultyIndicator() {
        const indicator = document.getElementById('current-difficulty');
        const levelNum = this.currentDifficulty.split('-')[0];
        const beeIcons = '🐝'.repeat(parseInt(levelNum));
        const levelText = `Level ${levelNum} ${beeIcons}`;
        
        indicator.textContent = levelText;
        indicator.parentElement.className = `difficulty-indicator level-${levelNum}`;
    }
    
    loadCurrentWord() {
        const currentWord = this.words[this.currentWordIndex];
        document.getElementById('spelling-input').value = '';
        document.getElementById('spelling-input').focus();
        this.clearFeedback();
        
        // Automatically speak the word when loaded
        setTimeout(() => this.speakWord(), 500);
    }
    
    async speakWord() {
        if (!this.speechEnabled) return;
        
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.useGoogleTTS && this.googleTTSApiKey !== 'YOUR_GOOGLE_TTS_API_KEY') {
            await this.speakWithGoogleTTS(currentWord.word, 'word');
        } else {
            this.speakWithBrowserTTS(currentWord.word, 'word');
        }
    }
    
    async speakSentence() {
        if (!this.speechEnabled) return;
        
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.useGoogleTTS && this.googleTTSApiKey !== 'YOUR_GOOGLE_TTS_API_KEY') {
            await this.speakWithGoogleTTS(currentWord.sentence, 'sentence');
        } else {
            this.speakWithBrowserTTS(currentWord.sentence, 'sentence');
        }
    }
    
    repeatWord() {
        this.speakWord();
    }
    
    async speakWithGoogleTTS(text, type) {
        try {
            const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${this.googleTTSApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    input: { text: text },
                    voice: {
                        languageCode: 'en-US',
                        name: type === 'word' ? 'en-US-Wavenet-D' : 'en-US-Neural2-F',
                        ssmlGender: type === 'word' ? 'MALE' : 'FEMALE'
                    },
                    audioConfig: {
                        audioEncoding: 'MP3',
                        speakingRate: type === 'word' ? 0.8 : 0.9,
                        pitch: type === 'word' ? 1.1 : 1.0
                    }
                })
            });
            
            const data = await response.json();
            
            if (data.audioContent) {
                const audio = new Audio('data:audio/mp3;base64,' + data.audioContent);
                audio.play();
            }
        } catch (error) {
            console.error('Google TTS error, falling back to browser TTS:', error);
            this.speakWithBrowserTTS(text, type);
        }
    }
    
    speakWithBrowserTTS(text, type) {
        // Cancel any current speech
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Use better voice settings for kids
        utterance.rate = type === 'word' ? 0.8 : 0.9;
        utterance.pitch = type === 'word' ? 1.1 : 1.0;
        utterance.volume = 1.0;
        
        // Try to use a clearer voice
        const voices = speechSynthesis.getVoices();
        const preferredVoices = [
            'Google US English',
            'Microsoft Zira Desktop',
            'Samantha',
            'Karen',
            'Moira'
        ];
        
        for (const preferred of preferredVoices) {
            const voice = voices.find(v => v.name.includes(preferred));
            if (voice) {
                utterance.voice = voice;
                break;
            }
        }
        
        speechSynthesis.speak(utterance);
    }
    
    checkSpelling() {
        const userInput = document.getElementById('spelling-input').value.trim().toLowerCase();
        const currentWord = this.words[this.currentWordIndex].word.toLowerCase();
        
        const isCorrect = userInput === currentWord;
        
        this.userAnswers.push({
            word: this.words[this.currentWordIndex].word,
            userSpelling: userInput,
            correct: isCorrect
        });
        
        if (isCorrect) {
            this.correctAnswers++;
            this.showCorrectAnswer();
        } else {
            this.showIncorrectAnswer();
            setTimeout(() => this.nextWord(), 2500); // Still auto-advance for incorrect answers
        }
    }
    
    showCorrectAnswer() {
        // Show "Correct!" message briefly first
        const feedback = document.getElementById('feedback');
        if (feedback) {
            feedback.innerHTML = '✅ Correct!';
            feedback.className = 'feedback correct';
        }
        
        // Disable input and submit button
        const spellingInput = document.getElementById('spelling-input');
        const submitBtn = document.getElementById('submit-spelling-btn');
        if (spellingInput) spellingInput.disabled = true;
        if (submitBtn) submitBtn.disabled = true;
        
        // Show the correct answer section after a short delay
        setTimeout(() => {
            // Create the correct answer display dynamically
            const correctAnswerHTML = `
                <div class="correct-answer-section">
                    <div class="correct-spelling">
                        <h4>Correct Spelling:</h4>
                        <p style="color: #155724; font-size: 1.8em; font-weight: bold; margin: 0; text-transform: uppercase; letter-spacing: 2px;">${this.words[this.currentWordIndex].word}</p>
                    </div>
                    <div class="next-controls" style="display: flex; justify-content: center; gap: 15px; margin-top: 20px;">
                        <button onclick="app.speakWord()" class="btn-secondary">🔊 Hear Word Again</button>
                        <button onclick="app.nextWord()" class="btn-primary">Next Word →</button>
                    </div>
                </div>
            `;
            
            if (feedback) {
                feedback.innerHTML = correctAnswerHTML;
            }
        }, 1000);
    }
    
    setupCorrectAnswerListeners() {
        console.log('setupCorrectAnswerListeners called'); // Debug log
        
        const nextWordBtn = document.getElementById('next-word-btn');
        const hearAgainBtn = document.getElementById('hear-again-btn');
        
        console.log('Buttons found:', {
            nextWordBtn: !!nextWordBtn,
            hearAgainBtn: !!hearAgainBtn
        }); // Debug log
        
        // Remove existing listeners to prevent duplicates
        if (nextWordBtn) {
            console.log('Setting up next word button listener'); // Debug log
            nextWordBtn.replaceWith(nextWordBtn.cloneNode(true));
            document.getElementById('next-word-btn').addEventListener('click', () => {
                console.log('Next word button clicked'); // Debug log
                this.nextWord();
            });
        }
        
        if (hearAgainBtn) {
            console.log('Setting up hear again button listener'); // Debug log
            hearAgainBtn.replaceWith(hearAgainBtn.cloneNode(true));
            document.getElementById('hear-again-btn').addEventListener('click', () => {
                console.log('Hear again button clicked'); // Debug log
                this.speakWord();
            });
        }
    }
    
    showIncorrectAnswer() {
        const currentWord = this.words[this.currentWordIndex];
        this.showFeedback(false, `❌ Not quite. The correct spelling is "${currentWord.word}".`);
    }
    
    showFeedback(isCorrect, message) {
        const feedback = document.getElementById('feedback');
        feedback.textContent = message;
        feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    }
    
    clearFeedback() {
        const feedback = document.getElementById('feedback');
        
        if (feedback) {
            feedback.textContent = '';
            feedback.className = 'feedback';
        }
        
        // Re-enable input and submit button
        const spellingInput = document.getElementById('spelling-input');
        const submitBtn = document.getElementById('submit-spelling-btn');
        if (spellingInput) spellingInput.disabled = false;
        if (submitBtn) submitBtn.disabled = false;
    }
    
    nextWord() {
        this.currentWordIndex++;
        
        if (this.currentWordIndex < this.words.length) {
            this.loadCurrentWord();
            this.updateProgress();
        } else {
            this.showResults();
        }
    }
    
    updateProgress() {
        const progress = ((this.currentWordIndex + 1) / this.words.length) * 100;
        const progressFill = document.getElementById('progress-fill');
        progressFill.style.width = `${progress}%`;
        
        // Add difficulty-specific styling
        const levelNum = this.currentDifficulty.split('-')[0];
        progressFill.className = `progress-fill level-${levelNum}`;
        
        document.getElementById('progress-text').textContent = `Word ${this.currentWordIndex + 1} of ${this.words.length}`;
    }
    
    showResults() {
        this.showScreen('results-screen');
        
        const percentage = Math.round((this.correctAnswers / this.words.length) * 100);
        document.getElementById('correct-count').textContent = this.correctAnswers;
        document.getElementById('total-count').textContent = this.words.length;
        document.getElementById('percentage').textContent = percentage;
        
        // Show completed difficulty
        const levelNum = this.currentDifficulty.split('-')[0];
        const beeIcons = '🐝'.repeat(parseInt(levelNum));
        document.getElementById('completed-difficulty').textContent = `Completed Level ${levelNum} ${beeIcons}`;
        
        this.displayWordReview();
    }
    
    displayWordReview() {
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '';
        
        this.userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${answer.correct ? 'correct' : 'incorrect'}`;
            
            reviewItem.innerHTML = `
                <span class="review-word">${answer.word}</span>
                <span class="review-spelling">You wrote: "${answer.userSpelling}"</span>
                <span class="review-status">${answer.correct ? '✅' : '❌'}</span>
            `;
            
            reviewList.appendChild(reviewItem);
        });
    }
    
    restart() {
        this.showScreen('start-screen');
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SpellingBeeApp();
});
