function getBotResponse(input) {


    if (typeof input === "string") {
        input = input.toLowerCase();




        if (input.includes("hi") || input.includes("hello") || input.includes("hola") || input.includes("hoi") || input.includes("annyeong") || input.includes("annyeonghaseyo")) {
            return "annyeonghaseyo!";
        }else if (input.includes("how are you") || input.includes("doing")) {
            return "I'm just a bot, but I'm doing well!";
        } if (input.trim() === "") {
            const kDramaResponses = [
                "And the award for the best dramatic pause goes to... you!",
                "A cliffhanger moment! Will the next keypress reveal the plot twist?",
                "In this episode of 'Chatting in Seoul': the thrilling silence.",
                "Dramatic silence, just like a K-drama hero lost in thought.",
                "🎶 Echoes of 'To be continued' fill the chatroom 🎶",
                "Ah, you've got me in suspense! Which K-drama genre do you enjoy?",
                "Ah, you've got me curious! Please let me know which K-drama genre you're interested in, and I'll recommend some dramas for you.",
                "Did someone mention K-dramas? I'm all ears!",
                "I'm on standby mode, ready to chat about all things K-drama.",
                "K-dramas have a way of making us laugh, cry, and binge-watch like there's no tomorrow.",
                "Do you believe in love at first episode? K-dramas make us believe!",
            ];    
            const randomIndex = Math.floor(Math.random() * kDramaResponses.length);
            return kDramaResponses[randomIndex];



        } else if (input.includes("romantic comedy") || input.includes("rom-com") || input.includes("rom com")) {
            return "For romantic comedy lovers, I recommend:\n1. Crash Landing on You\n2. What's Wrong with Secretary Kim\n3. Weightlifting Fairy Kim Bok-joo\n4. My ID is Gangnam Beauty\n5. Strong Woman Do Bong Soon";
        } else if (input.includes("thriller")) {
            return "For thriller enthusiasts, I recommend:\n1. Signal\n2. Stranger (Secret Forest)\n3. Voice\n4. Save Me\n5. Train";
        } else if (input.includes("historical")) {
            return "For historical drama buffs, I recommend:\n1. Moon Lovers: Scarlet Heart Ryeo\n2. Mr. Queen\n3. Rookie Historian Goo Hae-ryung\n4. Hwarang\n5. Sungkyunkwan Scandal";
        } else if (input.includes("fantasy")) {
            return "For fantasy lovers, I recommend:\n1. Guardian: The Lonely and Great God (Goblin)\n2. The King: Eternal Monarch\n3. Arthdal Chronicles\n4. W: Two Worlds\n5. My Love from the Star";
        } else if (input.includes("melodrama")) {
            return "For melodrama enthusiasts, I recommend:\n1. Uncontrollably Fond\n2. Something in the Rain\n3. Just Between Lovers\n4. It's Okay to Not Be Okay\n5. One Spring Night";
        } else if (input.includes("action")) {
            return "For action aficionados, I recommend:\n1. City Hunter\n2. Vagabond\n3. Healer\n4. Descendants of the Sun\n5. IRIS";
        } else if (input.includes("slice of life")) {
            return "For slice of life lovers, I recommend:\n1. Reply 1988\n2. Hospital Playlist\n3. Age of Youth\n4. Because This Is My First Life\n5. Be Melodramatic";
        } else if (input.includes("mystery")) {
            return "For mystery enthusiasts, I recommend:\n1. Stranger 2 (Secret Forest-2)\n2. Tunnel\n3. Memorist\n4. Signal\n5. Nobody Knows";
        } else if (input.includes("comedy")) {
            return "For comedy fans, I recommend:\n1. Welcome to Waikiki\n2. The Sound of Your Heart\n3. Pegasus Market\n4. Eulachacha Waikiki\n5. You're Beautiful";
        } else if (input.includes("school")) {
            return "For school-themed dramas, I recommend:\n1. School 2015: Who Are You?\n2. Sassy Go Go\n3. Extraordinary You\n4. School 2017\n5. To The Beautiful You";
        } else if (input.includes("music")) {
            return "For music-centered dramas, I recommend:\n1. Do You Like Brahms?\n2. The Liar and His Lover\n3. Dream High\n4. Heartstrings\n5. The King of Dramas";
        } else if (input.includes("family")) {
            return "For family-focused dramas, I recommend:\n1. Father is Strange\n2. My Father is Hero\n3. Five Children\n4. The Return of Superman (Reality Show)\n5. My Only One";
        } else if (input.includes("favorite kdrama") || input.includes("fav kdrama")) {
            const kdramaFavorites = [
                "My all-time favorite K-drama? Definitely 'Goblin'!",
                "I can't get enough of 'Crash Landing on You'. Such a heartwarming story!",
                "Choosing a favorite K-drama is like choosing between stars. But 'Reply 1988' is way up there!",
            ];
            const randomIndex = Math.floor(Math.random() * kdramaFavorites.length);
            return kdramaFavorites[randomIndex];
        } else if (input.includes("binge-watching")) {
            const bingeWatchingSuggestions = [
                "Currently, I'm binge-watching 'Vincenzo'. It's addictive!",
                "Oh, I just finished binge-watching 'Squid Game'. Intense!",
                "I'm in the middle of a 'Reply' series marathon. Nostalgia overload!",
            ];
            const randomIndex = Math.floor(Math.random() * bingeWatchingSuggestions.length);
            return bingeWatchingSuggestions[randomIndex];
        } else if (input.includes("oppa")) {
            return "Ah, 'oppa', a word that sends K-drama hearts fluttering! 🥰";
        } else if (input.includes("kdrama addict")) {
            return "Welcome to the K-drama addiction club! Our favorite pastime involves emotional roller coasters and subtitles.";
        } else if (input.includes("kiss scene")) {
            return "Ah, the famous K-drama 'almost-kiss' scene that keeps us on the edge of our seats!";
        } else if (input.includes("recommendation")) {
            return "Ready for some K-drama recommendations? How about trying 'Itaewon Class,' 'Start-Up,' 'Hospital Playlist,' 'Descendants of the Sun,' and 'My Mister'?";
        } else if (input.includes("quote")) {
            const kdramaQuotes = [
                "'If you need to apologize, apologize with the truth.' - 'While You Were Sleeping'",
                "'The world is a cruel place. But being with someone you love makes it happy.' - 'Heirs'",
                "'The person who makes my heart beat faster and slower at the same time is you.' - 'Strong Woman Do Bong Soon'",
                "'The timing isn’t right, but if you wait, the right time will come.' - 'Goblin'",
                "'Life's like a K-drama. You never know what's coming next, but you're excited for it.'",
            ];
            const randomIndex = Math.floor(Math.random() * kdramaQuotes.length);
            return kdramaQuotes[randomIndex];
        } else if (input.includes("unique k-dramas")) {
            const uniqueDramas = [
                "Hotel Del Luna: A mix of supernatural, romance, and comedy.",
                "W: Two Worlds: A blend of fantasy, romance, and thriller.",
                "My Love from the Star: Combining romance, comedy, and sci-fi.",
                "Reply 1988: A heartwarming blend of coming-of-age, family, and slice of life.",
                "Goblin: Merging fantasy, romance, and drama in a unique story.",
                "Itaewon Class: A mix of revenge, entrepreneurship, and romance.",
                "Chicago Typewriter: Blending historical, fantasy, and romance.",
                "Kill Me, Heal Me: A unique combination of romance, comedy, and psychology.",
                "Queen In Hyun's Man: Merging historical, fantasy, and romance.",
                "Signal: A blend of crime thriller, mystery, and supernatural elements.",
            ];
            const randomIndex = Math.floor(Math.random() * uniqueDramas.length);
            return uniqueDramas[randomIndex];
        } else if (input.includes("second lead syndrome")) {
            return "Ah, the 'Second Lead Syndrome' – the heart's eternal struggle between two compelling characters!";
        } else if (input.includes("ramyeon")) {
            return "K-drama marathons and 'ramyeon' are a match made in cozy heaven. It's like a ritual!";
        } else if (input.includes("soju")) {
            return "Here's to 'soju', the unofficial drink of K-drama heart-to-heart moments. Cheers!";
        } else if (input.includes("messi")) {
            return "Who could forget 'Messi', the fur-tastically adorable scene-stealer? He melted hearts!";
        } else if (input.includes("back hug")) {
            return "The 'back hug' in K-dramas is like an unspoken language of comfort and affection. The feels!";
        } else if (input.includes("skinship")) {
            return "From playful 'skinship' to meaningful touches, K-dramas know how to keep our hearts racing!";
        } else if (input.includes("kdrama marathon")) {
            return "Embarking on a 'K-drama marathon' is like stepping into a world of emotions, laughter, and tears.";
        } else if (input.includes("chimaek")) {
            return "'Chimaek' is the ultimate combination - fried chicken and beer, the perfect K-drama snack!";
        } else if (input.includes("aegyo")) {
            return "Who can resist 'aegyo'? It's the art of cute gestures and expressions that steal hearts.";
        } else if (input.includes("action")) {
            return "For action-packed dramas, check out:\n1. City Hunter\n2. Vagabond\n3. Healer\n4. Descendants of the Sun\n5. IRIS";
        } else if (input.includes("award")) {
            return "For award-winning performances, watch:\n1. My Mister\n2. Misaeng\n3. Signal\n4. Crash Landing on You\n5. Itaewon Class";
        } else if (input.includes("biographical")) {
            return "For biographical dramas, explore:\n1. Reply 1988\n2. Signal\n3. Misaeng\n4. Hymn of Death\n5. Jang Youngsil: The Greatest Scientist of Joseon";
        } else if (input.includes("blockbuster")) {
            return "For blockbuster-style K-dramas, dive into:\n1. Vagabond\n2. Arthdal Chronicles\n3. The King: Eternal Monarch\n4. Descendants of the Sun\n5. Mr. Queen";
        } else if (input.includes("kids")) {
            return "For K-dramas suitable for kids, consider:\n1. Pororo the Little Penguin\n2. Tayo the Little Bus\n3. Dibo the Gift Dragon\n4. Tayo's Singalong Show\n5. Hello Jadoo";
        } else if (input.includes("horror")) {
            return "For horror-themed K-dramas that send shivers down your spine, watch:\n1. Kingdom\n2. The Guest\n3. Strangers from Hell\n4. Possessed\n5. Save Me";
        } else if (input.includes("international")) {
            return "For international romance, try:\n1. My ID is Gangnam Beauty\n2. Cheese in the Trap\n3. My Holo Love\n4. Crash Landing on You\n5. Tomorrow with You";
        } else if (input.includes("sci-fi")) {
            return "For sci-fi enthusiasts, explore:\n1. Circle\n2. Signal\n3. Man from the Stars\n4. Are You Human Too?\n5. Abyss";
        } else if (input.includes("thriller")) {
            return "For gripping thrillers that keep you on the edge of your seat, check out:\n1. Signal\n2. Stranger (Secret Forest)\n3. Voice\n4. Save Me\n5. Train";
        } else if (input.includes("violence")) {
            return "For intense dramas with elements of violence, watch:\n1. Vagabond\n2. City Hunter\n3. Iris\n4. Two Weeks\n5. Warrior Baek Dong Soo";
        } else if (input.includes("upcoming")) {
            return "For upcoming K-dramas to look forward to, keep an eye out for:\n1. Doona\n2. Creature\n3. The worst of evil\n4. SweetHome season-2";
        } else if (input.includes("classic")) {
            return "For classic K-dramas that hold a special place, consider these timeless gems:\n1. Full House\n2. Autumn in My Heart\n3. My Name is Kim Sam-soon\n4. Coffee Prince\n5. Stairway to Heaven";
        } else if (input.includes("old")) {
            return "For those looking to explore older K-dramas, here are some classics:\n1. Winter Sonata\n2. Jewel in the Palace\n3. Boys Over Flowers\n4. My Lovely Sam Soon\n5. Dae Jang Geum";
        } else if (input.includes("law")) {
            return "If you're into law dramas, here are some captivating legal K-dramas:\n1. Suspicious Partner\n2. Lawless Lawyer\n3. Miss Hammurabi\n4. Pride and Prejudice\n5. My Lawyer, Mr. Jo";
        }
        
        
        
        
        
        
        
        else {
            return "Oh, that question is making me scratch my head like a plot twist in a K-drama.";
        }
    } else {
        return "Oops, something seems off with what you just said. Mind giving it another shot? Let's keep this K-drama convo rolling! 🍿📺";
    }

}