const sessions = new Map()

const s = {
  anime: {
    id: 1,
    description:
      'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?',
    genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi'],
    title: 'Cowboy Bebop',
    tags: [
      'Space',
      'Crime',
      'Episodic',
      'Ensemble Cast',
      'Primarily Adult Cast',
      'Noir',
      'Tragedy',
      'Guns',
      'Cyberpunk',
      'Male Protagonist',
      'Tomboy',
      'Philosophy',
      'Martial Arts',
      'Anti-Hero',
      'Terrorism',
      'Amnesia',
      'Travel',
      'Cyborg',
      'Gambling',
      'Drugs',
      'Yakuza',
      'Cult',
      'Tanned Skin',
      'Police',
      'Gender Bending'
    ],
    characters: [
      'Spike Spiegel',
      'Ein',
      'Faye Valentine',
      'Rhint Celonias',
      'Vicious',
      'Stella Bonnaro',
      'MPU',
      'Coffee',
      'Appledelhi Siniz Hesap Lütfen',
      'Andy Von de Oniyate',
      'Judy',
      'Shin',
      'Roco Bonnaro',
      'Grencia Mars Elijah Guo Eckener',
      'Julia',
      'Wen',
      'Tongpu',
      'Jet Black',
      'Edward Wong Hau Pepelu Tivrusky IV',
      'Bull',
      'Fad',
      'Meifa Puzi',
      'Abdul Hakim',
      'Dr. Londez',
      'Miles'
    ],
    reviews: [
      {
        summary: 'Cowboy Bebop is a smash-hit jam session',
        body: "Critic's Log: Earthdate - March 12, 2012. Review #1: Cowboy Bebop.\n\n \nIt is the year 2071 and Mars has become the central hub of human civilization ever since a hyperspace experiment on the moon failed and made Earth uninhabitable. The entire Solar System has been accessible thanks to reliable hyperspace gates and crime syndicates have exerted their power and influence over the government and the ISSP (Inter-Solar System-Police). As a result, The ISSP has put in a bounty system similar to The Old West has been included to deal with fugitives, terrorists and other criminals. The bounty hunters are usually called \"Cowboys\". Bounty hunters Spike Spiegel and Jet Black are flying around space and trying to catch their bounty.\n\nThat is the premise of Cowboy Bebop. This is where I start to get technical, Cowboy Bebop does not have much of a main storyline (except for episodes like Ballad of Fallen Angels, the Two-part episode Jupiter Jazz and the two part finale The Real Folk Blues), and those 5 episodes are what you could call \"plot\" episodes, while the remaining 21 are standalone episodes. With that said, those episodes are not even considered filler. Some of the ideas in these standalone really stand out impressively. Here are some examples: Sympathy for the Devil, Waltz for Venus, Ganymede Elegy, etc., etc...\n\nIf there is a blinding aspect, it is the animation. For 1998, the animation was pretty good back then and still looks good today. Some episodes have some cool animation effects as well. Sunrise is the animation studio behind Cowboy Bebop and that might not be saying much, however there is one apparent note about this show, apparently Cowboy Bebop's success led to 3 staff members from Sunrise that co-founded the studio that we know today as Studio Bones. In other words, animes like RahXephon, Wolf's Rain, Eureka Seven, Darker than BLACK, Soul Eater, and both Fullmetal Alchemist animes were apparently made possible due to Bebop's success. The action scenes are well animated, and the visuals are even breathtaking at times.\n\n \nIf there are any anime purists out there that have not seen Cowboy Bebop yet, consider this recommendation an exception, the English dub is very good and hardly flawed. Steven Jay Blum gives Spike a good badass tone to his character, Wendee Lee sounds both sexy and sensitive as Faye, Beau Billingslea has a cool father-like tone as Jet, and Melissa Fahn is charmingly silly as Edward. The dub can be considered better than the original Japanese version of the show, and I have known some purists that mention that Cowboy Bebop's dub was very good. I personally love the dub, it was spot-on and all the voices matched. So, what do I think of the subtitled version? Answer: I find it Underrated compared to the dub. The voice cast of the subtitled version had some well-known voice actors such as Kouichi Yamadera, Megumi Hayashibara, Unsho Ishizuka, and even Norio Wakamoto is in the subbed version. There is nothing wrong with the subtitled version; it may be a bit overshadowed by the dubbed Version\n\nIf there is an aspect that struck all the chords right is the soundtrack which is by Yoko Kanno. Some people consider Bebop's soundtrack to be her best. There is one fact about the soundtrack is that Kanno-san formed a band known as The Seatbelts which includes over 70 musicians which resided in Japan, New York, and Paris. I consider it impressive. If you try listening to the soundtrack without the show, it may feel like you're listening to an album rather than a soundtrack. The soundtrack really made a permanent impression on me. My personal favorite moment that involved the soundtrack was the two songs used in the cathedral scene, which were Rain and Green Bird. Hell, the opening theme kicks so much ass, and The Real Folk Blues is a good closing theme. The soundtrack is... How would Ash Williams put it?\n \nWhat really makes the show impressive is that some scenes have music playing and not have much dialogue in it. This is somewhat of a symbolic example that silence can indeed be golden. This is Kanno-san’s most famous and critically acclaimed soundtrack. Otakus mostly rejoice when Kanno –san is involved in musical compositions ever since she finished her work on Cowboy Bebop. She is mostly a fan favorite in the anime fan base when it comes to the music department and that should come as no surprise. She’s that popular and talented. I do appreciate the work she has done up to this very day.\n\nThe characters are also great. Spike is shown as a rogue badass with a past catching up to him. Jet appears to be a cool guy who happens to be the Captain of the Bebop. Faye is a con-woman and an interesting character even though she is kind of rude. Ein is adorable, and Edward is a silly random character that has a positive outlook in life. I think she was an awesome character for comic relief in the show. Some minor characters were also interesting. There is a common theme that runs through all of the characters and that is the pasts of these characters. It's definitely an overused trope but I think the past is something we all quite can't forget which doesn't make this trope clichéd, it's just a common one that is almost always effective.\n\nCowboy Bebop claims to be a genre unto itself. I am not sure how to give a clear analogy on that, but it has interesting themes that are unique to the show. There are some homages and send ups to famous movies in this show. This is a show that knew how to treat adults and people who like movies, music, Science Fiction, Western and so forth. Shinichiro Watanabe really nailed the direction of this anime because he always liked to mix up different opposing styles to make something completely new and unordinary. Cowboy Bebop has elements of Western, Space Opera, Film Noir, Martial Arts, and Jazz music. All these elements blended extremely well and this was a very unique anime at the time and I can understand why this anime was so revolutionary at the time. \n\nSince the popularity of Cowboy Bebop soared past through the stars, is it even fair to say that this show is overrated? It is considered an influential anime and I see why, a lot of people have universally praised the hell out of this show. The stories, animation, characters, music, and style are blended in so well that it almost makes it hard to see animes of this caliber.\n\nIf there is a drawback, I could say that this show could have gone a bit longer, and on a personal note, Boogie Woogie Feng Shui was the only episode I did not like too much. If you like it, that's fine.\n\nIf you stick to the series long enough, I guarantee you'll like the ending. There are a lot of people that see the ending as one of the most fitting endings to an anime and it really ends with a bang. I'm dead serious, if you haven't seen this series then do yourself a favor and watch the damn show, it will not disappoint you unless you are extremely picky.\n\n\nCowboy Bebop is available by Bandai Entertainment, and even though Bandai Entertainment no longer licenses anime, they mentioned that they will keep their current catalog, so apparently there's nothing to worry about this anime being out of print in the US (I hope). The manga adaptation Cowboy Bebop: Shooting Star written by Hajime Yatate and illustrated by Cain Kuga and another manga adaptation of Cowboy Bebop also written by Hajime Yatate and illustrated by Yutaka Nanten were available by Tokyopop and It is possible that those two manga adaptations are out of print. Cowboy Bebop the Movie is available by Sony Pictures and I will review it next.\n\n*Update since 2014: It is now available by Funimation\n\nWith that said, Cowboy Bebop is a smash hit jam-session that has become a genre unto itself; it has thrills, action, humor, and most of all fun. It is a hard one not to like. However, Not only anime fans like this show, some people that don't watch anime much or even anime-haters admit this show is exceptional and they even liked the show. This show has an American influence and it appeals to viewers that like anime, sci-fi, action flicks, and westerns. At the time I am posting this, this anime is still airing on Cartoon Network's Adult Swim block since 2001. The constant re-runs and the fan base have turned this anime to a cult classic (metaphorically speaking, it has a devoted fan base... nothing to do with religious cults or something like that; it's a play on words). It may not be everyone's cup of tea but it is definitely worth trying. It's an anime I sometimes quote as well as some others. Some will say that this is the greatest anime ever made, but that may be stretching it too much, but I will agree in calling it a revolutionary anime and a fun anime at that.  it is truly a gem.\n\n \n\n \n\nI give Cowboy Bebop a 10 out of 10 (It is a MASTERPIECE!)\n\n \n\n \n\nFeel free to comment below and until then... Stay gold, Bang!"
      },
      {
        summary: 'Review of Cowboy Bebop',
        body: "##~~~__Cowboy Bebop Review__~~~\n\nI know it first aired back in 1998, but I just finished watching Cowboy Bebop recently. I'm not going to lie, I consistently was seeing it on lists of the best anime of all time, and I was really doubtful going in, but now that I've watched it I know why Cowboy Bebop is so highly acclaimed. It's just good. It's so good. If someone asked me what my favorite anime ever was I wouldn't hesitate to say Cowboy Bebop. If you haven't seen it you should. If you have seen it you should watch it again, without a doubt it is a wonderful anime.\n\nIf you haven't viewed the pleasure that is Cowboy Bebop it is set in the year 2071 and follows the lives of bounty hunters traveling on their spaceship, the Bebop. There is definitely overarching stories and themes, but generally you don't need to remember what the previous episode was about to understand the one you're on. Similar to something like a TV crime drama, most episodes feature a criminal that this bounty hunter crew is going after, although the show is so much more than that.\n\nCowboy Bebop contains these overarching themes of things like loneliness and one's relationship with the past. The characters have subtle and realistic relationships with each other and themselves, everyone has an involved backstory and you just automatically fall in love with all of them. We all have main characters that we dislike, you'll love all of the main four characters in Cowboy Bebop. \n\nCan I just talk about the music for a second? For some anime I skip the opening theme sometimes, even if I like it. When you're binge watching an anime sometimes you just get tired of hearing the same opening song over and over. That never happened to me with Cowboy Bebop. What a great opening sequence, and what a great way to start off every episode. And then, the jazzy, funky, occasionally bluesy music featured in mostly every episode. Ahhhhhhh. I loved every piece of music that was played in this show, it fit so perfectly with the story.\n\nAlso the art. Cowboy Bebop is without a doubt an old anime, and when I watched the first episode and saw Spike's hair for the first time, I will say that I was put off. By the third episode I was over it, I loved the art style, so if you are picky about things like that like I sometimes am, don't worry about it, the sheer greatness of Cowboy Bebop will overcome any doubts you have about the art style.\n\nThe anime is somewhat of a comedy, but it did make me cry. Beware episodes 24 and 26, they were extremely sad for me. (Although like, everything makes me cry and get emotional.) And I would recommend watching the last three episodes in one fell swoop, as with many anime.\n\nI'd just like to reiterate that you will not be disappointed with Cowboy Bebop, it doesn't matter if you think that you don't like action anime or jazz music, or older anime art styles. Cowboy Bebop is for everyone and I guarantee you will enjoy it.\n\nSee you space cowboy..."
      }
    ]
  },
  actions: [
    {
      id: '0',
      actionUrl:
        'https://chatgpt-plugin-anime-adventure.transitive-bullshit.workers.dev/dzUuAd720rXq6nSVKKZD/actions/0',
      imageUrl: 'https://storage.googleapis.com/saasify-assets/c0.jpg',
      name: 'Go on a crazy adventure with Ed',
      description:
        'Take a trip with Ed and Ein on a motorycle and a desert planet. Make the story super zany and fun.'
    },
    {
      id: '1',
      actionUrl:
        'https://chatgpt-plugin-anime-adventure.transitive-bullshit.workers.dev/dzUuAd720rXq6nSVKKZD/actions/1',
      imageUrl: 'https://storage.googleapis.com/saasify-assets/c1.jpg',
      name: 'Visit a bar with Jet',
      description:
        'Visit a dive bar with Jet in the underbelly of a distant planet. Make the story dark and gritty.'
    }
  ]
}

export async function getSession(id: string) {
  console.log(sessions)
  const key = [...sessions.keys()][0]
  return sessions.get(id) || sessions.get(key) || s
}

export async function addSession(id: string, session: any) {
  sessions.set(id, session)
  console.log(JSON.stringify(session, null, 2))
  console.log(sessions)
}
