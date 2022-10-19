var data = {
    "rooms": {
        "s1-1": {
            "title": "The Dirt Road",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The first thing Doyle saw was the smoke. It billowed thick and black above the rooftops of Cardwyke, various smoldering sources just out of sight behind the yellow-daubed walls of the closest houses. A nervous pit began to form in his stomach, but he knew he couldn't turn back. One hand absent-mindedly pawed at the empty coin pouch on his belt.<br /><br />It had been four days since Doyle left Fingate &mdash; that was the last populated area before Cardwyke &mdash; and nearly two weeks since he'd spoken to anybody before that. He hadn't sold anything in over a month. The back of his wooden cart was still filled with various designs of Atwater Pottery, each individual piece carefully separated by layers of burlap and hay, all of them jostling in place as they rolled over the uneven dirt road. He eyed one of the empty spaces where a hand-painted jug once sat; unfortunately, he had broken it during a pitch at the marketplace in Yulan.<br /><br />As they drew closer to the village, Doyle patted his mule &mdash; a skinny, gray molly he called Blondie, despite the ragged, black wisps that made up her mane &mdash; and cooed for her to slow. She seemed as anxious as he was at the sight of the smoke and the rest of the village coming into view. Behind it all, looming on a rocky cliff that overlooked the Endless Sea, was the Salt Keep, the home of Sir Edsel Carden. A few stray spires poked out above the high sandstone walls, purple and white Carden family banners hanging from them.<br /><br />A group of vultures circled overhead."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-2"
                }
            ],
            "solutions": []
        },
        "s1-2": {
            "title": "The Village Square",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Blondie whimpered as they rolled into the village square, her head swinging from side to side until she came to a stop. Again Doyle patted her, whispering promises in her ear &mdash; <i>we're okay, girl,</i> he said, <i>we're almost there</i> &mdash; before tying her in front of a two-story inn. A sign above the door read <i>The Golden Calf</i>. That was where Mr. Hadden had promised to meet him.<br /><br />As he looked around the square, Doyle was struck by the silence. He didn't hear any of the bustle one would expect from a village in the late afternoon; in fact, he didn't hear anything but the occasional snort and hoof clomp from Blondie, as well as the sound of his own breathing. <br /><br />\"Hello?\" Doyle shouted.<br /><br />No response. In the center of the square was a stone well, and all around the perimeter were wattle and daub houses, the empty darkness of the windows staring back at Doyle. Interspersed between them were a handful of storefronts &mdash; a sign above one read <i>Henlon's Meats</i> in thick, uneven lettering, while another with a wide-open door read <i>Pick & Tack General Store</i> &mdash; but even the stores were silent and dark.<br /><br />On the opposite end of the square, the main road sloped uphill toward the Salt Keep. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "A cloud of dust blew across the dirt road in the village square. Ahead was <i>The Golden Calf</i>, the two-story inn that dominated the square. There was nobody around.<br /><br />In the center of the square was a stone well, and all around the perimeter were wattle and daub houses, the empty darkness of the windows staring back at Doyle. Interspersed between them were a handful of storefronts &mdash; a sign above one read <i>Henlon's Meats</i>, while another read <i>Pick & Tack General Store</i> &mdash; but even the stores were silent and dark.<br /><br />On the opposite end of the square, the main road sloped uphill toward the Salt Keep. "
                }
            ],
            "choices": [
                {
                    "text": "Go to the Golden Calf",
                    "target": "s1-3"
                },
                {
                    "text": "Go to the well",
                    "target": "s1-4"
                },
                {
                    "text": "Check on Blondie",
                    "target": "s1-6"
                },
                {
                    "text": "Look up the main road",
                    "target": "s1-5"
                }
            ],
            "solutions": []
        },
        "s1-3": {
            "title": "The Golden Calf",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The graying door to the Golden Calf creaked as Doyle nudged it open, glancing back at Blondie as if she might offer some expression of reassurance. She gave him nothing, though. Hesitant, Doyle stepped inside, mud-caked rushes shifting beneath his feet as he shut the door behind him.<br /><br />The interior was as silent as the village square. Matching wooden tables populated the first floor, and an unpolished bar spanned the back of the room. A row of brown glass bottles &mdash; local brews, most likely, plus a few imports from Astholme or Igban &mdash; lined the counter-top behind it. At the end of the bar was a door hanging slightly ajar, with a hand-made sign nailed to it that read <i>private</i>.<br /><br />\"Hello?\" he said. \"Is anybody here?\"<br /><br />Nobody answered. Doyle ran a hand along the bar as he kept looking, stopping for a moment to stare up at the wall behind it. There was a wooden carving hanging there, ragged and uneven like a piece of driftwood; it looked like it was supposed to be something like a cow. The eyes were too large, though, each one a gaping black abscess on the malformed wood of the head.<br /><br />A staircase led up to a second floor that overlooked the first &mdash; all the rooms were there, Doyle assumed &mdash; and he could just make out the tops of four closed doors through the railing. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "The tavern was still silent. Mud-caked rushes shifted beneath Doyle's feet as he walked past the tables, the wood floor creaking beneath his feet. He felt a pang of thirst as he glanced at a half-empty mug sitting untouched on a table.<br /><br />Then he glanced at the bar, a row of brown glass bottles lining the counter-top behind it. At one end was a door hanging slightly ajar, a hand-made sign nailed to it that read <i>private</i>. At the other was a staircase, which led up to a second floor overlooking the first."
                }
            ],
            "choices": [
                {
                    "text": "Go out to the village square",
                    "target": "s1-2"
                },
                {
                    "text": "Look at the bar",
                    "target": "s1-7",
                    "conditions": [
                        {
                            "c1-8": "unset"
                        }
                    ]
                },
                {
                    "text": "Go upstairs",
                    "target": "s1-8",
                    "conditions": [
                        {
                            "c1-3": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to Hadden's Room",
                    "target": "s1-11",
                    "conditions": [
                        {
                            "c1-3": "yes"
                        },
                        {
                            "c1-7": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to Hadden's Room",
                    "target": "s1-14",
                    "conditions": [
                        {
                            "c1-3": "yes"
                        },
                        {
                            "c1-7": "yes"
                        }
                    ]
                },
                {
                    "text": "Go to the private room",
                    "target": "s1-3.1",
                    "conditions": [
                        {
                            "c1-3": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s1-4": {
            "title": "The Well",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The center of the village square was marked by a stone well with a wooden overhang above the opening. Neat cobblestone extended out in a circle, which Doyle assumed would ordinarily be well-trodden by various townspeople bringing sloshing buckets back and forth. There was nobody to be seen, though.<br /><br />Next to the well was a wooden box with a carrying handle, the open top covered with a piece of cloth, except for the iron head of a hammer that poked out from underneath. A toolbox, Doyle thought. Somebody had probably been using it to repair something on the overhang. There was no bucket attached, after all, or even a rope to hold one.<br /><br />Doyle knelt down to look at the box, then noticed a splash of red on the cobblestone. Nervous, he stood up and looked around, but he didn't see anybody. Then he peered over the edge of the well down into the dark below. There was the bucket on the surface of the water, wet rope floating next to it. <br /><br />Some workman's tool was sitting in the bucket, though Doyle couldn't quite make out what it was."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "<span class='@c1-17'>Doyle stepped up to the stone well, eyes on the wooden overhang above it. There was no bucket attached, or even a rope to hold one. Then he glanced down at the workman's toolbox next to it, the open top half-covered with a piece of cloth. Somebody had been working.</span><br /><br /><span class='c1-17,@c1-14'>Doyle stepped up to the stone well, eyes on the wooden overhang above it. There was no bucket attached, or even a rope to hold one. Then he glanced down at the workman's toolbox next to it, the cloth that had once covered the open top now pulled aside to reveal a conspicuous empty space where the fish hook had been. A slight sense of guilt came over him.</span><br /><br /><span class='c1-17,c1-14'>Doyle stepped up to the stone well, eyes on the wooden overhang above it. The water bucket it presumably once held now sat in the dirt at his feet, a mess of wet rope with a fish hook attached piled next to it. Then he glanced down at the workman's toolbox nearby, the cloth that had once covered the open top pulled aside.</span><br /><br />Every footstep seemed to echo in the silence of the village square as Doyle walked along the cobblestone. He noticed another red splash just next to the well as he circled around behind it. Nervous, he ignored it, then put a hand on the stone edge to look down inside.<br /><br /><span class='@c1-14'>Another tool still sat in the bucket, though Doyle couldn't quite make out what it was.</span><br /><br /><span class='c1-14'>There was nothing but dark water below.</span>"
                }
            ],
            "choices": [
                {
                    "text": "Go back to the village square",
                    "target": "s1-2"
                },
                {
                    "text": "Use the rope and hook",
                    "target": "s1-4.1",
                    "conditions": [
                        {
                            "c1-14": "unset"
                        }
                    ],
                    "items": [
                        "i1-1"
                    ],
                    "itemsToRemove": [
                        "i1-4",
                        "i1-7"
                    ],
                    "conditionalItems": [
                        "i1-4",
                        "i1-7"
                    ],
                    "setsConditions": [
                        {
                            "c1-14": "yes"
                        }
                    ]
                },
                {
                    "text": "Look at the workman's tools",
                    "target": "s1-4.2",
                    "items": [
                        "i1-7"
                    ],
                    "setsConditions": [
                        {
                            "c1-17": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s1-5": {
            "title": "The Main Road",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The main road in Cardwyke was a long stretch of dirt marked only by heavy ruts probably dug in by wagon wheels and carts, just like Doyle's. Small pools of muddy water spotted the road in deeper pits where it still hadn't dried. There was nobody out, even further ahead. <br /><br />The road sloped gradually upward about a quarter mile, lined on either side by various houses and storefronts. A massive three-story building with a sign that read <i>Whitley's Finance & Loan</i> caught Doyle's eye on one side, and on the other was a hanging banner stretched across two buildings advertising the Cardwyke Fish Market, though the market itself was out of view down a side street. Cardwyke wasn't the largest castle town Doyle had passed through, but it seemed industrious. There was also an Atwater Ceramics Distribution Center somewhere out there, after all.<br /><br />A smaller path veered off from the main road just a few steps outside of the square, this one sloping downward, carving into the cliff face until it reached the sea far below. There he saw a pier lined with fishing boats and a few larger vessels jutting out into the water. Doyle could make out some buildings alongside it &mdash; something that looked like a tavern, and a sprawling warehouse topped with a sign that read <i>Endless Sea Shipping</i> &mdash; but it was hard to see clearly. Still, it didn't look like there was anybody there.<br /><br />Towering above all of it, at the end of the main road where the upward slope peaked, was the Salt Keep. From where he stood, most of what Doyle could see were the sandstone walls and the iron portcullis of the front gate, though the tops of three towers loomed above them, the smaller two on either side and the larger in the center. Purple and white banners flew from poles atop each of them.<br /><br />Somewhere up the road, back among the side streets not far from the keep, something was burning. Doyle looked up at the black smoke billowing above the rooftops. "
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-2"
                }
            ],
            "solutions": []
        },
        "s1-6": {
            "title": "The Cart",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Something about Blondie's disposition seemed off to Doyle. She looked nervous, swaying back and forth and clomping as if she might bolt at any moment. Even as Doyle placed a hand on her head and stroked her well-brushed mane, she seemed to look past him, behind him, as if searching for something.<br /><br />\"Calm down now,\"  Doyle said. \"Come on, girl, you're okay.\"<br /><br />He patted her back, then lifted the wool blanket that covered the back of his cart to look over the remainder of his stock: 12 Atwater Classics Vases in the Ornamental Design, 17 Limited Edition Overglazed Bowls, and 19 Cooking-Grade Astholme-Style Serving Bowls. There had been 20 of each type in the initial set &mdash; <i>The Elite Journeyman Package</i>, Mr. Hadden had called it &mdash; but Doyle had barely made a dent in the past three months. He was nowhere close to being able to pay off the initial investment, nor even cover the costs of the pieces he had broken.<br /><br />Again he felt the coin purse on his belt, as if he might suddenly find something new there that he hadn't noticed before, but it was empty. Sighing, he glanced back toward the dirt road that had led him into town. It was a long way back to Hemstoke.     "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle ran a hand across Blondie's mane again. She still looked nervous, swaying back and forth and clomping as if she might bolt at any moment. The town ahead was quiet &mdash; deserted, from what he could see &mdash; but she stared ahead, anxious, as if she could see something he couldn't.<br /><br />\"Calm down, girl,\" he said. \"Everything's fine. We're okay here, I promise.\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-2"
                }
            ],
            "solutions": [
                {
                    "text": "Comfort Blondie",
                    "targetOnSuccess": "s1-6.1",
                    "targetOnFailure": "s1-6.1",
                    "conditions": [
                        {
                            "c1-4": "unset"
                        }
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c1-4": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c1-4": "no"
                        }
                    ],
                    "difficulty": {
                        "cd": "1"
                    }
                }
            ]
        },
        "s1-7": {
            "title": "The Bar",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The floor behind the bar was littered with broken glass. Some of those brown bottles must have dropped at some point; the wood was still wet, though, so it couldn't have been long ago. Doyle pictured shattered bits of ceramic in the dirt in the marketplace in Yulan, then let out a heavy sigh.<br /><br />Nestled under the bar in a locked glass case was a bottle of Astholme Brandy. The last time he'd had a drink so decadent was about five years ago, on the night of his wedding. Nela's father had bought them a single bottle as a gift &mdash; it was an Astholme wine, actually, but close enough &mdash; and they polished off the whole thing before spending their first night together. That was a long time ago, though, before Nela had left, before Doyle had become an Atwater Associate.<br /><br />For a moment, Doyle considered trying to take the brandy, but then looked around again for a bartender, or anybody else who might be watching. <br /><br /><i>It's not right</i>, he thought. <i>Nobody deserves anything they haven't earned</i>."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle stepped behind the bar, broken glass crunching beneath his feet. Again he looked at the Astholme Brandy locked in the case, thinking for a moment of that wedding wine, the sweet taste, Nela's face in the candlelight. <br /><br /><i>You don't deserve it anyways</i>, he thought. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        },
                        {
                            "c1-3": "yes"
                        }
                    ],
                    "text": "Doyle stepped behind the bar, broken glass crunching beneath his feet. Again he looked at the Astholme Brandy locked in the case, thinking for a moment of that wedding wine, the sweet taste, Nela's face in the candlelight. <br /><br /><i>You don't deserve it anyways</i>, he thought. <br /><br />Then he considered Hadden struggling upstairs. Doyle was no surgeon, but it was clear enough that the man was in pain. He could certainly use some relief."
                },
                {
                    "conditions": [
                        {
                            "c1-3": "yes"
                        }
                    ],
                    "text": "The floor behind the bar was littered with broken glass. A few of those brown bottles most have dropped at some point; the wood was still wet, though, so it couldn't have been very long ago. Doyle pictured shattered bits of ceramic in the dirt in the marketplace in Yulan, then let out a heavy sigh.<br /><br />Nestled under the bar in a locked glass case was a bottle of Astholme Brandy. The last time he'd had a drink so decadent was about five years ago, on the night of his wedding. Nela's father had bought them a single bottle as a gift &mdash; it was a wine from Astholme, actually, but close enough &mdash; and they polished off the whole thing before spending their first night together. That was a long time ago, though, before Nela had left, before Doyle had become an Atwater Associate.<br /><br />For a moment, Doyle considered trying to take the brandy, but then looked around again for a bartender, or anybody else who might be watching. <br /><br /><i>It's not right</i>, he thought. <i>Nobody deserves anything they haven't earned</i>.<br /><br />As he turned away, though, he thought of Hadden struggling upstairs. Doyle was no surgeon, but it was clear enough that the man was in pain. He could certainly use some relief."
                }
            ],
            "choices": [
                {
                    "text": "Turn Back",
                    "target": "s1-3"
                }
            ],
            "solutions": [
                {
                    "text": "Break open the case",
                    "targetOnSuccess": "s1-7.1",
                    "targetOnFailure": "s1-7.1",
                    "conditions": [
                        {
                            "c1-3": "yes"
                        }
                    ],
                    "itemsToAddOnSuccess": [
                        "i1-2"
                    ],
                    "itemsToAddOnFailure": [
                        "i1-2"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c1-8": "yes"
                        },
                        {
                            "c1-16": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "inj1": "yes"
                        },
                        {
                            "c1-8": "yes"
                        },
                        {
                            "c1-16": "no"
                        }
                    ],
                    "difficulty": {
                        "sd": "7"
                    }
                }
            ]
        },
        "s1-8": {
            "title": "The Second Floor",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The stairs creaked beneath Doyle's feet as he made his way upstairs. A narrow, open hallway wrapped around the second floor, with three closed doors ahead of him and one more on the end. Doyle heard nothing from any of them, though.<br /><br />\"Is this place open?\" he called out. \"I'm looking for Mr. Hadden.\"<br /><br />There was no response, but Doyle was almost certain he heard a sudden shuffling sound from one of the rooms. Each had a wood-carved number on the door &mdash; rough and uneven, like the carving downstairs &mdash; labeling them one through four. Nervous, Doyle clenched his fists, just like Mr. Fultan had told him back in Cotlin Hill. <i>Clench each fist to tell yourself you're strong,</i> he had said between bites of boiled lamb. <i>Every potential customer can sense your anxiety.</i><br /><br />\"Hello?\" he said again. \"I heard somebody up here &mdash; is everything okay?\""
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "The stairs creaked beneath Doyle's feet as he made his way upstairs. A narrow, open hallway wrapped around the second floor, with three closed doors ahead of him and one more on the end.<br /><br />Doyle glanced over the railing at the tavern tables below, then eyed the closed doors, anxious and hesitant."
                }
            ],
            "choices": [
                {
                    "text": "Go downstairs",
                    "target": "s1-3"
                },
                {
                    "text": "Investigate the rooms",
                    "target": "s1-9",
                    "conditions": [
                        {
                            "c1-3": "unset"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s1-9": {
            "title": "The Rooms of the Inn",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle stepped up to the first room, eyes locked on the wood-carved number. He pressed his ear to the wood, then knocked. Then he moved on to the second door and did the same, then the third.<br /><br />At the fourth door he paused, fists clenching and unclenching, his palms beginning to sweat. An image popped into his mind: the path through the woods on the way to Hemstoke, where he grew up. His father used to take him into the marketplace in Cotlin Hill &mdash; just half a day's walk down the dirt roads that all the farmers on the outskirts used &mdash; to help him sell the barley they grew. Afterwards, the old man would get drunk at a tavern not unlike the Golden Calf, and once his eyes began to droop and his mood began to sour, he'd send Doyle back home by himself with the cart.<br /><br />Sometimes, Doyle would see shadows on the old dirt roads &mdash; just flickers in the dark ahead of him &mdash; and he felt a kind of certainty that he couldn't explain. It was a certainty that told him that there <i>was</i> something out there, and it wasn't just some roaming monster, some horrifying facet of nature; it was there for him, specifically for <i>him</i> of all people, and it was waiting, and he deserved to be found. Some nights, as he rolled that cart back to Hemstoke, he hoped it would find him.<br /><br />That was years ago, though, and Doyle wasn't a child anymore. He clenched one final time, then knocked on the door."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-10"
                }
            ],
            "solutions": []
        },
        "s1-10": {
            "title": "The Rooms of the Inn",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Hello?\" Doyle said. \"I heard someone inside. Is &mdash; is Mr. Hadden up here?\"<br /><br />Nobody answered, but again Doyle heard a shuffling sound and a muffled groan from inside. He glanced back over the balcony, Blondie's black mane just visible through one of the front windows. His heart was pounding, palms sweating. Again he knocked.<br /><br />\"Do you know where the owner is?\" He kept knocking. \"There's nobody in the square, and I'm &mdash; I'm getting a little worried here, okay? Please, answer me.\"<br /><br />A few more seconds passed without response, then Doyle turned back toward the stairs. He slid a hand along the railing as he tried to calculate how many buildings there might be in Cardwyke &mdash; how long it might take to just check every side street until he found some sign that mentioned Atwater Ceramics &mdash; but before he reached the stairs, he heard a sound from behind the door.<br /><br />\"Just leave,\" a man said. His voice was shaky, strained. \"Get out of here.\""
                }
            ],
            "choices": [
                {
                    "text": "Ask him what's happening",
                    "target": "s1-11",
                    "setsConditions": [
                        {
                            "c1-3": "yes"
                        }
                    ]
                }
            ],
            "solutions": [
                {
                    "text": "Ask him to open the door",
                    "targetOnSuccess": "s1-11",
                    "targetOnFailure": "s1-11",
                    "conditionsSetOnSuccess": [
                        {
                            "c1-1": "yes"
                        },
                        {
                            "c1-3": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c1-1": "no"
                        },
                        {
                            "c1-3": "yes"
                        }
                    ],
                    "difficulty": {
                        "cd": "5"
                    }
                }
            ]
        },
        "s1-11": {
            "title": "Outside Hadden's Room",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c1-1": "unset"
                        }
                    ],
                    "text": "\"Who's there?\" Doyle asked. \"Is that Mr. Hadden? Are you okay?\"<br /><br />\"You need to &mdash; you need to leave.\"<br /><br />It was him. Despite the wavering of the man's voice, Doyle was certain. They'd run into each other at a tavern in Yulan a few weeks prior, their first time crossing paths again in over a year. Hadden told him stories about his time traveling through Eddon, and Doyle tried to put on a good face, but after a few flagons of cheap Alsporth ale, he couldn't help himself. <i>None of this is working,</i> he said through tears. Then he took Hadden outside to see the cart, still full of unsold ceramics. <i>I keep trying, but nothing is working.</i> The nearest Atwater Distribution Center was in Cardwyke, Hadden told him, and even though he wasn't sure what they'd say, he agreed to act as a liaison.<br /><br />\"Mr. Hadden,\" Doyle said again. \"What's happening? Are you hurt?\"<br /><br />\"I won't make it, kid,\" Hadden said. He seemed to cough the words out, choking through each syllable. \"They'll come back. Just &mdash; just get out of here.\"<br /><br />Doyle reached for the handle, but it was locked. \"I'll find a way in, okay?\""
                },
                {
                    "conditions": [
                        {
                            "c1-1": "yes"
                        }
                    ],
                    "text": "\"Who's there?\" Doyle asked. \"Is that Mr. Hadden? Please, let me in.\"<br /><br />\"You need to &mdash; you need to leave.\"<br /><br />It was him. Despite the wavering of the man's voice, Doyle was certain. They'd run into each other at a tavern in Yulan a few weeks prior, their first time crossing paths again in over a year. Hadden told him stories about his time traveling through Eddon, and Doyle tried to put on a good face, but after a few flagons of cheap Alsporth ale, he couldn't help himself. <i>None of this is working,</i> he said through tears. Then he took Hadden outside to see the cart, still full of unsold ceramics. <i>I keep trying, but nothing is working.</i> The nearest Atwater Distribution Center was in Cardwyke, Hadden told him, and even though he wasn't sure what they'd say, he agreed to act as a liaison.<br /><br />\"Mr. Hadden,\" Doyle said again. \"What's happening? Please, open the door.\"<br /><br />\"I don't &mdash; I don't know if I can,\" Hadden said. He seemed to cough the words out, choking through each syllable. Then there was a long pause, and after a bit of shuffling, Doyle heard a thump on the wood floor and an agonized groan. \"I can't! They'll come back, kid, just get out of here.\"<br /><br />Doyle reached for the handle, but it was locked. \"I'll find a way in, okay?\""
                },
                {
                    "conditions": [
                        {
                            "c1-1": "no"
                        }
                    ],
                    "text": "\"Who's there?\" Doyle asked. \"Is that Mr. Hadden? Please, let me in.\"<br /><br />\"You need to &mdash; you need to leave.\"<br /><br />It was him. Despite the wavering of the man's voice, Doyle was certain. They'd run into each other at a tavern in Yulan a few weeks prior, their first time crossing paths again in over a year. Hadden told him stories about his time traveling through Eddon, and Doyle tried to put on a good face, but after a few flagons of cheap Alsporth ale, he couldn't help himself. <i>None of this is working,</i> he said through tears. Then he took Hadden outside to see the cart, still full of unsold ceramics. <i>I keep trying, but nothing is working.</i> The nearest Atwater Distribution Center was in Cardwyke, Hadden told him, and even though he wasn't sure what they'd say, he agreed to act as a liaison.<br /><br />\"Mr. Hadden,\" Doyle said again. \"What's happening? Please, open the door.\"<br /><br />\"I don't &mdash; I don't think I can,\" Hadden said. He seemed to cough the words out, choking through each syllable. \"They'll come back, kid, just get out of here.\"<br /><br />Doyle reached for the handle, but it was locked. \"I'll find a way in, okay?\""
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle checked the door handle again, thinking in a moment of naive optimism that Hadden may somehow have managed to unlock it. Unfortunately, he hadn't.<br /><br />\"You okay in there?\" Doyle asked.<br /><br />\"I told you to leave,\" Hadden said, his voice strained. Then came another small groan, and a cough. \"They'll find you here. Just go, kid, come on.\"<br /><br />\"I'm not leaving you in there. I'll find a way, okay?\""
                }
            ],
            "choices": [
                {
                    "text": "Go downstairs",
                    "target": "s1-3"
                }
            ],
            "solutions": [
                {
                    "text": "Break down the door",
                    "targetOnSuccess": "s1-13",
                    "targetOnFailure": "s1-13",
                    "conditionsSetOnSuccess": [
                        {
                            "c1-6": "yes"
                        }
                    ],
                    "threshold": true,
                    "difficulty": {
                        "gd": "11"
                    }
                }
            ]
        },
        "s1-13": {
            "title": "Hadden's Room",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Okay, step back,\" Doyle said. \"I'm going to break it down.\"<br /><br />\"No,\" Hadden said, choking on the words. \"Don't &mdash; don't bother.\"<br /><br />Doyle took a few steps back, one hand on the railing to steady himself. He breathed deep, thinking of Blondie and the cart outside, of Nela's face back in Hemstoke, and imagined his father standing behind him and watching. <i>Door looks a little heavy,</i> the old man would've muttered between hiccups. <i>I don't know</i>. Doyle's face reddened, and his skin grew hot, and without thinking, he charged forward. His right shoulder slammed into the wood with a <i>crack</i>.<br /><br />The jamb next to the handle splintered under his weight, and the door flew open, slamming against the wall behind it as Doyle crashed into the room. Then he stood up, dusting himself off and somewhat proud of himself, before gasping at the sight of Hadden."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-14"
                }
            ],
            "solutions": []
        },
        "s1-14": {
            "title": "Hadden's Room",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The last time Doyle had seen him was over a handshake at the city limits of Yulan, just after they'd agreed to meet up. He'd been in good spirits, with an expansive head of hair &mdash; gray as much as it was black &mdash; that bounced when he walked, the round belly of a comfortable man, and strong arms that looked like they had somehow been honed without ever being seriously used. Doyle was decades younger than Hadden at 31 years old, but he was exactly the type of man Doyle hoped to live long enough to be: competent in a way that appeared effortless.<br /><br />Now he was not so imposing. A streak of blood slid down the wall to where Hadden slumped against it, a bit of red pooling beneath him. Both hands shook, covering a wound on his abdomen. His normally dark skin had taken on a gray pallor, glistening with sweat, and he gritted his teeth as he looked up at Doyle.<br /><br />\"You have to go, kid,\" Hadden said. He looked like he wanted to say more, but grimaced as he tried to open his mouth. \"I'm done for. You have to &mdash; you have to go right now.\" "
                },
                {
                    "conditions": [
                        {
                            "c1-7": "yes"
                        }
                    ],
                    "text": "Doyle peeked into Hadden's room again; the old man was still there, slumped in the same spot, blood pooled on the wood floor around him. His eyes were drooping, exhaustion showing on his face. He looked up when he saw Doyle, though.<br /><br />\"Come on,\" Hadden said, wheezing. \"I told you to go, kid. Just go!\"<br /><br />Doyle shook his head. \"I'm still looking. I'll find you something.\""
                }
            ],
            "choices": [
                {
                    "text": "Offer him the Astholme Brandy",
                    "target": "s1-14.2",
                    "itemsToRemove": [
                        "i1-2"
                    ],
                    "conditionalItems": [
                        "i1-2"
                    ],
                    "setsConditions": [
                        {
                            "c1-12": "yes"
                        }
                    ]
                },
                {
                    "text": "Promise to leave",
                    "target": "s1-14.1",
                    "conditions": [
                        {
                            "c1-7": "unset"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c1-7": "no"
                        }
                    ]
                },
                {
                    "text": "Promise to help him",
                    "target": "s1-14.1",
                    "conditions": [
                        {
                            "c1-7": "unset"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c1-7": "yes"
                        }
                    ]
                },
                {
                    "text": "Go downstairs",
                    "target": "s1-3",
                    "conditions": [
                        {
                            "c1-7": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s1-14.1": {
            "title": "Hadden's Room",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c1-7": "no"
                        }
                    ],
                    "text": "Doyle squatted down next to Hadden, carefully moving the man's hands from the wound to look at it. Blood soaked the edges of the opening torn in the linen of his tunic &mdash; it was knee-length and embroidered, with a silver-studded belt, fancier than anything Doyle had ever owned &mdash; and oozed from a small slit of a wound in Hadden's stomach.<br /><br />Once Doyle saw the wound, he realized how unprepared he was to deal with it. He looked wide-eyed around the room for a moment as if he might, in a moment of absurd good luck, find some clearly-marked medicinal solution. All he saw was a straw-stuffed mattress and an end table next to a small rug made from the fur of some ambiguous animal, plus bits of splintered wood from the door.<br /><br />\"I don't know what to do,\" Doyle said. \"I don't think I can &mdash; I don't think I can help here.\"<br /><br />\"Just leave,\" Hadden said. \"Go, kid. You don't have much time.\"<br /><br />\"I can't just leave you here,\" Doyle said. He looked around the room again, unsure of what to do. Then he plopped Hadden's hands back over the wound and stood up. \"Okay, I'll just &mdash; I'll go for now. I'll see if I can find some help, though, and then I'll&mdash;\"<br /><br />\"Just go!\""
                },
                {
                    "conditions": [
                        {
                            "c1-7": "yes"
                        }
                    ],
                    "text": "Doyle squatted down next to Hadden, carefully moving the man's hands from the wound to look at it. Blood soaked the edges of the opening torn in the linen of his tunic &mdash; it was knee-length and embroidered, with a silver-studded belt, fancier than anything Doyle had ever owned &mdash; and oozed from a small slit of a wound in Hadden's stomach. <br /><br />Once Doyle saw the wound, he realized how unprepared he was to deal with it. He looked wide-eyed around the room for a moment as if he might, in a moment of absurd good luck, find some clearly-marked medicinal solution. All he saw was a straw-stuffed mattress and an end table next to a small rug made from the fur of some ambiguous animal, plus bits of wood splinters from the door.<br /><br />\"I don't know what to do,\" Doyle said. \"I thought I could &mdash; I don't know.\"<br /><br />\"Just leave,\" Hadden said. \"Go, kid. You don't have much time.\"<br /><br />\"I can't just &mdash; I'll find you something for the pain, okay?\" Doyle plopped Hadden's hands back over the wound. \"I'll be right back. You'll feel better, okay?\""
                }
            ],
            "choices": [
                {
                    "text": "Go downstairs",
                    "target": "s1-3",
                    "conditions": [
                        {
                            "c1-7": "yes"
                        }
                    ]
                },
                {
                    "text": "Go downstairs",
                    "target": "s1-17",
                    "conditions": [
                        {
                            "c1-7": "no"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s1-17": {
            "title": "The Golden Calf",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "As Doyle descended the creaking steps from the second floor, he noticed something: a shadow in the late afternoon sunlight coming through the window. He crept down around the banister, behind the staircase, then peered through the gaps between the steps. There was somebody just outside, next to Blondie. He heard the clanking of steel, like armor, and a couple of voices, indistinct and grumbling. <br /><br />Then a man passed by the window. He wore a steel breastplate and chainmail with a cloak clasped at the neck &mdash; purple and white, the Carden family colors &mdash; but he looked like he had just returned from battle; mud stains covered his breeches and splashed onto the plate, and a number of suspect spatters of red were highlighted against the steel. His short, black hair was matted with sweat and dirt, and the expression on his face was one of abject bewilderment, as if the village square in which he stood were some kind of incomprehensible monstrosity to him. <br /><br />He looked like a city guard to Doyle."
                }
            ],
            "choices": [
                {
                    "text": "Go talk to the guard",
                    "target": "s1-18"
                },
                {
                    "text": "Sneak out the back",
                    "target": "s1-19"
                }
            ],
            "solutions": []
        },
        "s1-18": {
            "title": "The Village Square",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Am I ever glad to see you,\" Doyle said to the guard as he emerged from the Golden Calf. \"Listen, my friend is hurt pretty badly. We really need some help.\"<br /><br />For a moment, the guard didn't even look at Doyle. Then he turned to him slowly, as if he hadn't really heard anything he'd said, that look of bewilderment still all over his face. He didn't say anything, though; he just opened his mouth as if to scream, his face a silent expression of horror.<br /><br />\"Okay, sir,\" Doyle said, stepping back. \"You seem &mdash; are you okay?\"<br /><br />The guard didn't respond, and Doyle turned to see two more guards &mdash; they were dressed exactly the same as the first, and similarly disheveled, both spattered with mud and debris &mdash; standing next to Blondie. They seemed to be investigating her, one of them looking under the wool blanket that covered Doyle's goods, but both turned to look at Doyle with that same expression: silent, open-mouthed horror.<br /><br />Before he could say anything else, Doyle heard the unmistakeable sound of a sword being drawn from its sheath behind him, and he stepped to the side, away from the guards. The one next to Blondie began to draw his sword as well, wild eyes locked on Doyle, and the one holding the blanket let it drop, hands reaching for the blood-stained morning star hanging from his belt. <br /><br />\"Wait now,\" Doyle said, \"come on.\""
                }
            ],
            "choices": [],
            "solutions": [
                {
                    "text": "Fight them",
                    "targetOnSuccess": "s1-22",
                    "targetOnFailure": "s1-22",
                    "itemsToAddOnSuccess": [
                        "i1-3"
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "inj2": "yes"
                        }
                    ],
                    "difficulty": {
                        "gd": "9"
                    }
                },
                {
                    "text": "Run away",
                    "targetOnSuccess": "s1-23",
                    "targetOnFailure": "s1-23",
                    "conditionsSetOnFailure": [
                        {
                            "inj3": "yes"
                        }
                    ],
                    "difficulty": {
                        "sd": "3",
                        "ld": "3"
                    }
                }
            ]
        },
        "s1-19": {
            "title": "The Back Alley",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Unnerved by the sight of the guard, Doyle crept back behind the bar, broken glass crunching beneath his feet. He squatted, keeping his head low and out of sight, until he emerged from the other side, one hand reaching up to slowly turn the handle of the door in the back of the tavern. Despite his best effort, he nudged the broken neck of one of the shattered brown bottles on the ground &mdash; it rolled a few feet, clinking on each gap in the floor boards &mdash; and Doyle froze. The guard outside didn't look, though. <br /><br />Then he slipped through the door and into the alley behind the Golden Calf. Wattle and daub houses surrounded the narrow street on either side, some with clothes lines stretched between them, simple, undyed linens and wool frocks swaying in the breeze. Pockets of litter and refuse were scattered here and there, and just next to the door to the Golden Calf was a stack of wooden crates, maybe some untouched delivery still waiting to be unpacked. Doyle sidled up next to them and peeked around the corner; the guard was still there, as well as two others looking at Blondie.<br /><br />Before he could get a good look, he heard footsteps behind him. He turned to see steel plate, and a purple and white cloak &mdash; another of the guards &mdash; standing behind him.<br /><br />\"Oh,\" Doyle said, stumbling back into the crates. \"Sorry, I didn't &mdash;\"<br /><br />At first, the guard didn't even look at Doyle. Then he turned to him slowly, as if he hadn't really heard anything he'd said, that look of bewilderment still all over his face. He didn't say anything, though; he just opened his mouth as if to scream, his face a silent expression of horror.<br /> <br />Doyle, stepped back, sliding alongside the crates. \"Are you okay?\"<br /><br />Still the guard said nothing, his open mouth straining, palpable fear in his eyes. Then Doyle noticed the blood on his armor &mdash; a thick spatter of red, clearly not his own, across his breastplate &mdash; suddenly obscured by the guard's mail-clad arm as he unsheathed his longsword. The blade glinted in the afternoon sunlight, marred by still-wet blood and dirt.<br /><br />\"Wait now,\" Doyle said, stepping back. \"Wait a minute.\"<br /><br />As the guard raised his sword to swing, Doyle turned and fled."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-21"
                }
            ],
            "solutions": []
        },
        "s1-21": {
            "title": "The Main Road",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Somebody help!\" Doyle screamed as he ran. \"Please, help me!\"<br /><br />He didn't see anybody on the road, or in the dark windows of the houses he passed. On his left he spotted a blacksmith's shop &mdash; a thatched canopy jutting from the side housed a stone furnace, but it looked cold, the bellows and the anvil unmanned &mdash; and on his right was a looming statue, the Outstretched Palm of Yabiz carved from stone and beckoning as if to let him know that his debt was about to be claimed. They were behind him in seconds, his leather boots alternating between kicking up clouds of dust and squelching into thick mud depending on where he stepped.<br /><br />Then he passed a butcher's shop with a slaughtered pig's carcass hanging out the doorway in the dirt, and a tremendous warehouse of a building with a sign too high above him to read, and a house with a trail of blood leading out from the darkened doorway. There was nobody anywhere. The smell of smoke was still in the air, and he heard a dog barking somewhere distant, and his breath felt heavy and tight in his throat, until finally he slowed as he noticed a person up ahead.<br /><br />His relief only lasted for a moment before he saw the glint of steel in the afternoon light, and a hint of purple and white fluttering in the breeze behind it. Heart racing, Doyle looked back the way he had come: he could still see Blondie and his cart at the end of the road, now just a dot in the distance &mdash; <i>I'm sorry, girl,</i> he thought &mdash; and three guards marching toward him. <br /><br />Neither direction would work, and in a panic, Doyle turned from the main road and barreled down a side street. The air was cool in the shade between the houses, and he passed one, and another, and another, until he couldn't see any guards behind him."
                }
            ],
            "choices": [
                {
                    "text": "Keep running",
                    "target": "s1-24.1"
                }
            ],
            "solutions": [
                {
                    "text": "Hide",
                    "targetOnSuccess": "s1-21.1",
                    "targetOnFailure": "s1-21.1",
                    "conditionsSetOnSuccess": [
                        {
                            "c1-15": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c1-15": "no"
                        }
                    ],
                    "difficulty": {
                        "ld": "4"
                    }
                }
            ]
        },
        "s1-22": {
            "title": "The Village Square",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "inj2": "yes"
                        }
                    ],
                    "text": "As the three guards approached, Doyle clenched his fists and tried to imagine himself as someone else, as someone better. He pictured himself standing over the shattered bodies of the three guards and being presented in the Great Hall in the Salt Keep, Sir Edsel Carden himself draping a medal or some kind of golden livery around Doyle's neck, all in thanks for his service to Cardwyke. <br /><br /><i>These guards had lost their way</i>, Sir Carden would say, <i>but you showed a strength of character and physical resolve that only the best of us could hope to muster.</i> His voice was rough and gravelly in Doyle's head, larger than life, his words interspersed with hiccups, small-town ale on his breath. <br /><br />He wasn't someone else, though. As the first guard raised his longsword to swing and Doyle's heart began to beat at a hummingbird's pace, he charged. Something akin to a battle cry came pouring out of his mouth and he slammed into the first guard &mdash; the open-mouthed horror on his face barely seemed to react to the impact &mdash; which sent the guard stumbling backwards onto the one next to Blondie.<br /><br />The disheveled man seemed to recover almost immediately, and as he raised his sword again, Doyle realized that this was not a fight he would win. His heart sank and a sudden panic washed over him, so he turned and ran toward the main road.<br /><br />Just as he turned, he felt a stinging pain swipe across his back. The shock sent him stumbling forward, though not enough to lose his footing. He ran without looking back, the warm sensation of blood on his back keeping him moving."
                },
                {
                    "conditions": [
                        {
                            "inj2": "unset"
                        }
                    ],
                    "text": "As the three guards approached, Doyle clenched his fists and tried to imagine himself as someone else, as someone better. He pictured himself standing over the shattered bodies of the three guards and being presented in the Great Hall in the Salt Keep, Sir Edsel Carden himself draping a medal or some kind of golden livery around Doyle's neck, all in thanks for his service to Cardwyke. <br /><br /><i>These guards had lost their way</i>, Sir Carden would say, <i>but you showed a strength of character and physical resolve that only the best of us could hope to muster.</i> His voice was rough and gravelly in Doyle's head, larger than life, his words interspersed with hiccups, small-town ale on his breath. <br /><br />He wasn't someone else, though. As the first guard raised his longsword to swing and Doyle's heart began to beat at a hummingbird's pace, he charged. Something akin to a battle cry came pouring out of his mouth and he slammed into the first guard &mdash; the open-mouthed horror on his face barely seemed to react to that impact &mdash; which sent the guard toppling backwards onto the one next to Blondie.<br /><br />Before the disheveled man could recover, Doyle charged again, this time into the guard next to the cart. This one barely flinched, raising his morning star over Doyle's head, but before he could swing it, Doyle managed to grab his wrist, pushing forward just enough that both men lost their footing and fell into dirt. Scrambling to stand before the guard did, Doyle pawed wildly at his face, inadvertently hooking his hand through a locket chain around the guard's neck and yanking it free.<br /><br />His heart sank and a sudden panic washed over him as he saw the other two guards begin to stand. There was a slow deliberation to their movements, uncanny, given the panicked expressions on their faces. As their eyes locked on him again, he pocketed the locket and ran."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-21"
                }
            ],
            "solutions": []
        },
        "s1-23": {
            "title": "The Village Square",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "inj3": "yes"
                        }
                    ],
                    "text": "As the three guards approached, Doyle clenched his fists and tried to imagine himself as someone else, as someone better. He pictured himself sprinting past the three guards like a flash of light, and being presented in the Great Hall in the Salt Keep, Sir Edsel Carden himself draping a medal or some kind of golden livery around Doyle's neck, all in recognition of his commendable performance. <br /><br /><i>These guards had lost their way</i>, Sir Carden would say, <i>but you showed a mental acuity and resourcefulness that only the best of us could hope to muster.</i> His voice was rough and gravelly in Doyle's head, larger than life, his words interspersed with hiccups, small-town ale on his breath. <br /><br />He wasn't someone else, though. As the first guard raised his longsword to swing and Doyle's heart began to beat at a hummingbird's pace, he ran.  He pushed past the first guard, the other two already out of reach, and sprinted across the cobblestone, past the well, away from the Golden Calf.<br /><br />Just as he reached the edge of the square, though, he hit a rut in the road, his <b>ankle twisting violently</b> and sending him sprawling onto his face, a cloud of dust rising from the dirt where he landed. Throbbing pain shot through his ankle, but he managed to stand again and glance back at the guards. <br /><br />They seemed unfazed by his flight, pursuing him at a slow but deliberate march. They looked from side to side, as if scanning the square, their faces still contorted in horror, wide open mouths stretching in a silent scream, wet eyes glistening in the afternoon sunlight. "
                },
                {
                    "conditions": [
                        {
                            "inj3": "unset"
                        }
                    ],
                    "text": "As the three guards approached, Doyle clenched his fists and tried to imagine himself as someone else, as someone better. He pictured himself sprinting past the three guards like a flash of light, and being presented in the Great Hall in the Salt Keep, Sir Edsel Carden himself draping a medal or some kind of golden livery around Doyle's neck, all in recognition of his commendable performance. <br /><br /><i>These guards had lost their way</i>, Sir Carden would say, <i>but you showed a mental acuity and resourcefulness that only the best of us could hope to muster.</i> His voice was rough and gravelly in Doyle's head, larger than life, his words interspersed with hiccups, small-town ale on his breath. <br /><br />He wasn't someone else, though. As the first guard raised his longsword to swing and Doyle's heart began to beat at a hummingbird's pace, he ran.  He pushed past the first guard, the other two already out of reach, and sprinted across the cobblestone, past the well, away from the Golden Calf.<br /><br />Just as he reached the edge of the square, Doyle glance back at the guards. They seemed unfazed by his flight, pursuing him at a slow but deliberate march. They looked from side to side, as if scanning the square, their faces still contorted in horror, wide open mouths stretching in a silent scream, wet eyes glistening in the afternoon sunlight. "
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-21"
                }
            ],
            "solutions": []
        },
        "s1-24": {
            "title": "The Mud Pit",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Let me up,\" screamed the guard. \"You know me, Captain!\"<br /><br />The Captain didn't say anything. He just dropped his helmet in the mud and grabbed the guard's shoulders with both hands, then leaned in close. The purple and white of his cloak draped over both of them as he stared, his face stern and expressionless, his mouth an unbreaking line.<br /><br />Without a word, the Captain's eyes widened, and so did the guard's. A sheen of sweat formed all over the pinned man's skin as his lips trembled apart, no sound coming out, as if he had seen something so awful in the Captain's eyes that he couldn't even find the words to plead. Then the Captain placed a gauntlet-clad hand over his face and pressed down, pushing his head into the mud. A few sounds like words choked from the man's throat, and his arms and legs jerked violently, one fist pounding at the Captain's mud-spattered breastplate. His head sank deeper, and deeper, until finally something seemed to give under the Captain's weight. Then the guard stopped moving, silent and still.<br /><br />The Captain stood, pulling his helmet from the mud, and looked at Doyle."
                }
            ],
            "choices": [],
            "solutions": [
                {
                    "text": "Fight him",
                    "targetOnSuccess": "s1-25",
                    "targetOnFailure": "s1-25",
                    "conditionsSetOnSuccess": [
                        {
                            "c1-9": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c1-9": "no"
                        },
                        {
                            "inj4": "yes"
                        }
                    ],
                    "difficulty": {
                        "gd": "9"
                    }
                },
                {
                    "text": "Trick him",
                    "targetOnSuccess": "s1-25",
                    "targetOnFailure": "s1-25",
                    "conditionsSetOnSuccess": [
                        {
                            "c1-10": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c1-10": "no"
                        },
                        {
                            "inj4": "yes"
                        }
                    ],
                    "difficulty": {
                        "sd": "5"
                    }
                },
                {
                    "text": "Hope for the best",
                    "targetOnSuccess": "s1-25",
                    "targetOnFailure": "s1-25",
                    "conditionsSetOnSuccess": [
                        {
                            "c1-11": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c1-11": "no"
                        },
                        {
                            "inj4": "yes"
                        }
                    ],
                    "difficulty": {
                        "ld": "7"
                    }
                }
            ]
        },
        "s1-25": {
            "title": "The Mud Pit",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c1-9": "yes"
                        }
                    ],
                    "text": "\"Okay,\" Doyle said, standing and stepping back from the pit. He held both hands out toward the Captain. \"I'm just &mdash; I'm just lost. I'm here on business, okay? That's all.\"<br /><br />The Captain didn't say anything. His face was still blank, an expressionless void like Doyle had never seen on a human being before. Then he marched toward Doyle, his mud-caked helmet in his left hand as he unsheathed a blood-stained broadsword with the right. <br /><br />\"Please, wait,\" Doyle said as the Captain drew near. \"I'm here on business, I said.\"<br /><br />The Captain's grip seemed to tighten on his broadsword, and Doyle knew he had no other option. He glanced left and right for an escape route, the stench of death still wafting from the pit ahead of him, and clenched his fists. Just as the Captain raised his broadsword, Doyle lunged at him, both hands extended and slamming into his plate armor. The Captain stumbled, steel-toed boots sliding on the slick black mud, before toppling backwards into the pit. He hit the bottom with a soft thud, the loose bodies beneath him shifting and rolling as he struggled to stand again."
                },
                {
                    "conditions": [
                        {
                            "c1-9": "no"
                        }
                    ],
                    "text": "\"Okay,\" Doyle said, standing and stepping back from the pit. He held both hands out toward the Captain. \"I'm just &mdash; I'm just lost. I'm here on business, okay? That's all.\"<br /><br />The Captain didn't say anything. His face was still blank, an expressionless void like Doyle had never seen on a human being before. Then he marched toward Doyle, his mud-caked helmet in his left hand as he unsheathed a blood-stained broadsword with the right. <br /><br />\"Please, wait,\" Doyle said as the Captain drew near. \"I'm here on business, I said.\"<br /><br />The Captain's grip seemed to tighten on his broadsword, and Doyle knew he had no other option. He glanced left and right for an escape route, the stench of death still wafting from the pit ahead of him, and clenched his fists. Just as the Captain raised his broadsword, Doyle lunged at him, both hands extended and slamming into his plate armor. The Captain didn't budge, though; he didn't react at all, as if Doyle hadn't touched him, and instead just brought his broadsword swinging down onto Doyle. The lunge had moved him just out of the way, but still the blade made contact, <b>slicing into his left arm</b>, a burst of sharp pain sending Doyle toppling backwards. "
                },
                {
                    "conditions": [
                        {
                            "c1-10": "yes"
                        }
                    ],
                    "text": "\"Okay,\" Doyle said, standing and stepping back from the pit. He held both hands out toward the Captain. \"I'm just &mdash; I'm just lost. I'm here on business, okay? That's all.\"<br /><br />The Captain didn't say anything. His face was still blank, an expressionless void like Doyle had never seen on a human being before. Then he marched toward Doyle, his mud-caked helmet in his left hand as he unsheathed a blood-stained broadsword with the right. <br /><br />\"Please, wait,\" Doyle said as the Captain drew near. \"I'm here on business, I said.\"<br /><br />The Captain's grip seemed to tighten on his broadsword, and Doyle knew he had no other option. He glanced left and right for an escape route, the stench of death still wafting from the pit ahead of him, and clenched his fists. Just as the Captain raised his broadsword, Doyle ducked down, both hands thrusting into the black mud at his feet. It was cold on his bare flesh, but without hesitation, Doyle flung a thick handful up into the Captain's face. With a wet <i>thunk</i>, it splattered across his eyes and mouth, and while his expression remained unchanged, he stumbled, his broadsword swinging wildly over Doyle's head."
                },
                {
                    "conditions": [
                        {
                            "c1-10": "no"
                        }
                    ],
                    "text": "\"Okay,\" Doyle said, standing and stepping back from the pit. He held both hands out toward the Captain. \"I'm just &mdash; I'm just lost. I'm here on business, okay? That's all.\"<br /><br />The Captain didn't say anything. His face was still blank, an expressionless void like Doyle had never seen on a human being before. Then he marched toward Doyle, his mud-caked helmet in his left hand as he unsheathed a blood-stained broadsword with the right. <br /><br />\"Please, wait,\" Doyle said as the Captain drew near. \"I'm here on business, I said.\"<br /><br />The Captain's grip seemed to tighten on his broadsword, and Doyle knew he had no other option. He glanced left and right for an escape route, the stench of death still wafting from the pit ahead of him, and clenched his fists. Just as the Captain raised his broadsword, Doyle ducked down, both hands thrusting into the black mud at his feet. It was cold on his bare flesh, but without hesitation, Doyle flung a thick handful up toward the Captain's face. Rather than making contact, though, it sailed by nearly a foot away, bits spattering into his blond hair, but eliciting no reaction.<br /><br />Then the broadsword came swinging down onto Doyle just as he tried to scramble away. He managed to avoid it somewhat by crouching down, but still the blade made contact, <b>slicing into his left arm</b>.  A burst of sharp pain sent Doyle toppling backwards. "
                },
                {
                    "conditions": [
                        {
                            "c1-11": "yes"
                        }
                    ],
                    "text": "\"Okay,\" Doyle said, standing and stepping back from the pit. He held both hands out toward the Captain. \"I'm just &mdash; I'm just lost. I'm here on business, okay? That's all.\"<br /><br />The Captain didn't say anything. His face was still blank, an expressionless void like Doyle had never seen on a human being before. Then he marched toward Doyle, his mud-caked helmet in his left hand as he unsheathed a blood-stained broadsword with the right. <br /><br />\"Please, wait,\" Doyle said as the Captain drew near. \"I'm here on business, I said.\"<br /><br />The Captain's grip seemed to tighten on his broadsword, and Doyle knew he had no options. He glanced left and right for an escape route, the stench of death still wafting from the pit ahead of him, and saw nothing. As the Captain raised his broadsword, Doyle clenched his fists and closed his eyes &mdash; <i>you always knew you deserved this,</i> he thought, <i>this was always coming for you</i> &mdash; but instead of feeling the cut of a sword, he heard the squelching of mud, and opened his eyes to see the Captain stumbling, steel-toed boots sliding on the wet surface, and then falling backwards into the pit. He hit the bottom with a soft thud, the loose bodies beneath him shifting and rolling as he struggled to stand again. "
                },
                {
                    "conditions": [
                        {
                            "c1-11": "no"
                        }
                    ],
                    "text": "\"Okay,\" Doyle said, standing and stepping back from the pit. He held both hands out toward the Captain. \"I'm just &mdash; I'm just lost. I'm here on business, okay? That's all.\"<br /><br />The Captain didn't say anything. His face was still blank, an expressionless void like Doyle had never seen on a human being before. Then he marched toward Doyle, his mud-caked helmet in his left hand as he unsheathed a blood-stained broadsword with the right. <br /><br />\"Please, wait,\" Doyle said as the Captain drew near. \"I'm here on business, I said.\"<br /><br />The Captain's grip seemed to tighten on his broadsword, and Doyle knew he had no options. He glanced left and right for an escape route, the stench of death still wafting from the pit ahead of him, and saw nothing. As the Captain raised his broadsword, Doyle clenched his fists and closed his eyes &mdash; <i>you always knew you deserved this,</i> he thought, <i>this was always coming for you</i> &mdash; but instead of feeling the cut of a sword, he heard the squelching of mud, and opened his eyes to see the Captain stumbling, steel-toed boots sliding on the wet surface. As he fell backwards into the pit, one wild swing of his broadsword made contact, <b>slicing into Doyle's left arm</b>. The burst of sharp pain sent him toppling just as the Captain hit the bottom with a soft thud. "
                },
                {
                    "conditions": [
                        {
                            "dth": "yes"
                        }
                    ],
                    "text": "\"Okay,\" Doyle said, standing and stepping back from the pit. He held both hands out toward the Captain. \"I'm just &mdash; I'm just lost. I'm here on business, okay? That's all.\"<br /><br />The Captain didn't say anything. His face was still blank, an expressionless void like Doyle had never seen on a human being before. Then he marched toward Doyle, his mud-caked helmet in his left hand as he unsheathed a blood-stained broadsword with the right. <br /><br />\"Please, wait,\" Doyle said as the Captain drew near. \"I'm here on business, I said.\"<br /><br />The Captain's grip seemed to tighten on his broadsword, and Doyle knew he had no options. He glanced left and right for an escape route, the stench of death still wafting from the pit ahead of him, and saw nothing. As the Captain raised his broadsword, Doyle clenched his fists and turned to run &mdash; <i>you always knew you deserved this,</i> he thought, <i>this was always coming for you</i> &mdash; but before he could move, he felt a heavy steel gauntlet clamp onto the back of his tunic. The Captain turned him around, and as soon as Doyle saw his eyes, he felt the broadsword slide between his ribs, deep inside, and the hot blood pouring out onto the mud, sharp pain and labored breaths.<br /><br />Then the Captain lifted him, his expressionless face just inches from Doyle's, and looked into his eyes. The air grew cold and Doyle felt his body begin to sweat from head to toe, and he stared into those blank eyes, like the vast black of a starless sky, and he felt himself somewhere else, inside of them, floating through the ether and struggling to breathe, choking and reaching for something to grab onto, anything at all, fingers extending and grasping, arms and legs shaking. He reached, and he struggled, and he screamed into the dark, and then there was nothing."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-26"
                }
            ],
            "solutions": []
        },
        "s1-26": {
            "title": "The Mud Pit",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Mud sloshed under Doyle's feet as he scrambled away from the Captain, his back pressing up against a building at the edge of the clearing. Then he turned toward another of the narrow alleys between the houses, but just one step in he saw purple and white, one of the guards approaching from the other end. The whites of his eyes glinted even in the shade, wet and bulging and strained.<br /><br />Short of breath, Doyle turned back to the pit to find another way, but instead saw the Captain marching toward him again. A tightness seemed to envelop Doyle's heart, just like the way he'd felt when that Atwater Classic shattered in the dirt in Yulan, and the way he'd felt when the innkeeper knocked on the door to his room days later &mdash; <i>I hate to do this,</i> he'd said, <i>I just can't let you stay any longer</i> &mdash; and the way he'd felt that day back home in Hemstoke, a lump in his throat as he stood in the doorway, Nela telling him she was sorry for the last time before she rode away.<br /><br />It didn't really matter, Doyle thought. He glanced left and right again for an exit &mdash; there were still more alleyways, he might be able to make it &mdash; but all the energy seemed to have left him. His legs had stiffened, as if he were rooted there in the mud like some ancient tree. <br /><br />Then he felt the Captain's steel gauntlet wrap around his neck, that tightness still in his chest. The Captain leaned in close to his face, eyes wide and empty, and he stared at Doyle. A chill came over him, and he began to sweat all over, his fingers and toes splaying and grasping involuntarily, and he saw nothing in those eyes, a heavy, black nothing that seemed to fall over him like a blanket, like he was suddenly floating in the middle of the Endless Sea, deep under the waves, so far down that he couldn't see the surface, nothing but vast, infinite, freezing blackness all around him.<br /><br />Doyle wanted to let go, to just open his mouth and let the water fill his lungs. Before he could, though, he hit the ground. He felt mud on his hands, his vision hazy, and thought he saw the Captain standing over him and marching again, and he heard somebody screaming, and steel clashing against steel. The mud was so cold, like ocean water, and he smelled burning bodies in the air. Then he heard a voice.<br /><br />\"Stay with us,\" a woman said. \"You're almost there.\""
                }
            ],
            "choices": [
                {
                    "text": "End Chapter",
                    "target": "s2-1",
                    "chapterBreak": true,
                    "chapterNumber": "1",
                    "chapterTitle": "The Courtyard"
                }
            ],
            "solutions": []
        },
        "s2-1": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Somebody was groaning. For a moment, Doyle actually thought he might have been making the noise himself; he heard it before his eyes opened, before he had any bearing on where he was. Then he felt hay under his hands, and smelled the unmistakable scent of horses and manure, and a ringing reverberated through his head &mdash; a kind of vibration he could feel behind his eyeballs &mdash; as if he had been asleep for days and was just then seeing light for the first time in so long.<br /><br />\"What?\" Doyle asked. He squinted at the sight of a flickering candle. \"Where am I?\"<br /><br />\"You're up,\" came a woman's voice. \"Good.\"<br /><br />Doyle sat up, propping his back against a hay bale behind him, and rubbed his eyes. He was in a hay loft, rows of horse pens down below, the occasional sound of braying making its way up to him. Next to him was a small, wooden table with a burning candle on it, as well as a couple of blood-soaked rags and a bowl of water that seemed to have splashed all over. <br /><br />On her knees next to the table was the woman who had spoken. She was younger than Doyle &mdash; early twenties, he thought &mdash; with curly black hair tied behind her head where it wasn't sticking sweaty to her face. Spatters of blood dotted her long gray tunic, the bottom caked with dried mud. From her clothing and her sun-mottled skin, it looked like she might have worked in the stables. <br /><br />\"Didn't know if you'd wake up,\" she said. She was tending to a wounded man, probably the one who had been groaning, wiping at a gaping cut in his side with a wet cloth. He grimaced as she held it in place and turned to look at Doyle. \"Glad you're okay.\" "
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-1.1"
                }
            ],
            "solutions": []
        },
        "s2-5": {
            "title": "The Stables",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle climbed down the ladder into the stables, the rungs creaking with every step. <br /><br />Parallel rows of horses lined up in stalls filled half of the high-roofed room. Most were palfreys, all brown and gray and black, looking well-fed and cared for. The other side was open, with scattered hay bales and riding equipment, old saddles and brushes, and a wooden table up against the wall, littered with horseshoes and tools. Bits of hay covered the dirt floor, barely visible in the flickering candlelight from the loft, and a single wooden door was next to the table, probably a bunk for the stable hands.<br /><br />It was strange to Doyle that the Captain and his guards seemed to have been so thorough in their extermination &mdash; <i>door to door</i>, Wilda had said &mdash; yet left the horses untouched; maybe that was why they hadn't come to the loft, he thought. Then he considered that such a distinction might mean that Blondie was still out there somewhere, back near the Golden Calf, waiting for him. He pictured that black mane flowing, further and further away, disappearing over the horizon in Hemstoke."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "<span class='@c3-0'>Doyle walked down the dark row of horses, their eyes glinting in the torchlight as they looked back at him. He stopped next to a gray palfrey and ran a hand along its mane, glancing at the hay bales and riding equipment next to the door to the bunks. Then he turned to look at the ladder to the loft. Candlelight still flickered up above.</span><br /><br /><span class='c3-0'>Doyle walked down the dark row of horses, their eyes glinting in the torchlight as they looked back at him. He stopped next to a gray palfrey and ran a hand along its mane, glancing at the hay bales and riding equipment next to the door to the bunks. Then he turned to look at the ladder to the loft. It was dark, no candle burning anymore.</span><br /><br />\"Don't you worry,\" he whispered to the horse. \"You're all right, boy.\""
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        },
                        {
                            "c3-74": "unset"
                        },
                        {
                            "c1-12": "yes"
                        },
                        {
                            "c3-0": "yes"
                        }
                    ],
                    "text": "Something was different in the stables. Doyle held up his torch, hesitant, and glanced down the dark rows of horses. They were all still there, their eyes still glinting in the torchlight as they looked back at him. The hay bales and riding equipment next to the door to the bunks were all the same, and the ladder to the loft was where it had been, no candle burning up above.<br /><br />Then he noticed a spot of blood on the straw at his feet, and another, forming a trail down the rows. It hadn't been there before, he was sure. He stood next to a gray palfrey and ran a hand along its mane, staring down at the trial, nervous and uncertain."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        },
                        {
                            "c3-74": "yes"
                        }
                    ],
                    "text": "<span class='@c3-0'>Doyle walked down the dark row of horses, their eyes glinting in the torchlight as they looked back at him. He stopped next to a gray palfrey and ran a hand along its mane, glancing at the hay bales and riding equipment next to the door to the bunks. Then he turned to look at the ladder to the loft. Candlelight still flickered up above.</span><br /><br /><span class='c3-0'>Doyle walked down the dark row of horses, their eyes glinting in the torchlight as they looked back at him. He stopped next to a gray palfrey and ran a hand along its mane, glancing at the hay bales and riding equipment next to the door to the bunks. Then he turned to look at the ladder to the loft. It was dark, no candle burning anymore.</span><br /><br />\"Don't you worry,\" he whispered to the horse. \"You're all right, boy.\"<br /><br /><span class='@c4-77'>Then he glanced down to the end of the stalls. It looked like Hadden was still there.</span><br /><br /><span class='c4-77'>Then he glanced down to the end of the stalls where Hadden had been. The blood trail was still there, but it looked like he was gone.</span>"
                }
            ],
            "choices": [
                {
                    "text": "Go up to the loft",
                    "target": "s2-7",
                    "conditions": [
                        {
                            "c3-0": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to the courtyard",
                    "target": "s2-6"
                },
                {
                    "text": "Go to the bunks",
                    "target": "s2-5.1"
                },
                {
                    "text": "Follow the blood trail",
                    "target": "s2-5.6",
                    "conditions": [
                        {
                            "c3-74": "unset"
                        },
                        {
                            "c1-12": "yes"
                        },
                        {
                            "c3-0": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c3-74": "yes"
                        }
                    ]
                },
                {
                    "text": "Talk to Hadden",
                    "target": "s2-15",
                    "conditions": [
                        {
                            "c3-74": "yes"
                        },
                        {
                            "c4-77": "unset"
                        }
                    ]
                },
                {
                    "text": "Go up to the loft",
                    "target": "s2-16",
                    "conditions": [
                        {
                            "c3-0": "yes"
                        }
                    ]
                }
            ],
            "solutions": [
                {
                    "text": "Use the horse brush",
                    "targetOnSuccess": "s2-5.7",
                    "targetOnFailure": "s2-5.7",
                    "conditions": [
                        {
                            "c3-75": "unset"
                        }
                    ],
                    "conditionalItems": [
                        "i3-17"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c3-75": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c3-75": "no"
                        }
                    ],
                    "difficulty": {
                        "cd": "2"
                    }
                }
            ]
        },
        "s2-6": {
            "title": "The Courtyard",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle must have been asleep in that loft for a while, because the sun had set. The courtyard was dark, illuminated only by his torch and the full moon overhead. High sandstone walls loomed over him, surrounding a large open space covered in patchy grass and dirt paths.<br /><br />The largest path led straight from the outer gatehouse &mdash; that must have been where they had come from, where Wilda had brought him in &mdash; all the way to the Salt Keep itself. It stood tall over the courtyard, one large tower and two small ones silhouetted against the white of the moon.<br /><br />Between the two ends of the courtyard was a Temple of Yabiz &mdash; the uneven stone construction and tiled roofing made it look even older than the keep, as if it had been there first and the entirety of Cardwyke had been built up around it &mdash; and further back, alongside the keep, were the servants' quarters and the animal pens, both simple wooden structures with thatched roofs and dark windows.<br /><br />Out of sight just over the wall, something was burning; Doyle saw the orange glow of flames on the surrounding houses, and though he was a bit too turned around to be sure, he assumed it must have been the mud pit. Deep ruts and a thick trail of blood marked the dirt path between the outer gate and the keep. Doyle knelt down to inspect it &mdash; a lot of bodies must have passed that way, he thought &mdash; before looking up at the imposing sandstone walls of the keep.<br /><br />Lights still flickered in some of the windows. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "The courtyard was dark, illuminated only by Doyle's torch and the full moon overhead. High sandstone walls loomed over him, surrounding a large open space covered in patchy grass and dirt paths, the largest of which led straight from the outer gatehouse to the Salt Keep itself.<br /><br />Between the two ends of the courtyard was a Temple of Yabiz, and further back, alongside the keep, were the servants' quarters and the animal pens."
                }
            ],
            "choices": [
                {
                    "text": "Go to the stables",
                    "target": "s2-5"
                },
                {
                    "text": "Go to the temple",
                    "target": "s2-8"
                },
                {
                    "text": "Go to the outer gate",
                    "target": "s2-20"
                },
                {
                    "text": "Go to the servant's quarters",
                    "target": "s2-14"
                },
                {
                    "text": "Go to the keep",
                    "target": "s2-6.2",
                    "conditions": [
                        {
                            "c3-0": "unset"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c2-30": "yes"
                        }
                    ]
                },
                {
                    "text": "Go to the keep",
                    "target": "s3-6",
                    "conditions": [
                        {
                            "c3-0": "yes"
                        },
                        {
                            "c2-51": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to the keep",
                    "target": "s3-6",
                    "conditions": [
                        {
                            "c3-0": "yes"
                        },
                        {
                            "c2-51": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c4-77": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-7": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c3-0": "unset"
                        }
                    ],
                    "text": "\"It's me,\" Doyle whispered as he climbed the ladder back up to the loft. \"Don't worry.\"<br /><br />Wilda nodded to him, her face stern in the flickering candlelight. She was sitting against a hay bale next to Leland, one hand holding a red-stained washcloth against the wound on his abdomen. His head rocked back and forth as he stared up at the ceiling, his face pale and sweaty.<br /><br />\"You find anything?\" Wilda asked. \"What can we do?\""
                },
                {
                    "conditions": [
                        {
                            "c2-21": "yes"
                        }
                    ],
                    "text": "Wilda appeared deep in thought, the candlelight flickering on her face. She was still sitting against a hay bale next to Leland, one hand holding a red-stained washcloth against the wound on his abdomen. He stared up at the ceiling, and she brushed his sweat-matted hair out of his face with her free hand. <br /><br />\"What else?\" she asked, looking over at Doyle. \"Anything?\""
                },
                {
                    "conditions": [
                        {
                            "c2-23": "yes"
                        },
                        {
                            "c2-21": "no"
                        },
                        {
                            "c2-22": "unset"
                        }
                    ],
                    "text": "\"It's me,\" Doyle whispered as he climbed the ladder back up to the loft. \"Don't worry.\"<br /><br />Wilda nodded to him, her face starting to look relaxed in the flickering candlelight. She was sitting against a hay bale next to Leland, the two of them seemingly caught mid-conversation. Though his face was still pale and the sweat still showed on his brow, Leland seemed to be in somewhat better spirits. <br /><br />\"You find anything?\" Wilda asked. \"What can we do?\""
                },
                {
                    "conditions": [
                        {
                            "c2-23": "yes"
                        },
                        {
                            "c2-21": "yes"
                        },
                        {
                            "c2-22": "unset"
                        }
                    ],
                    "text": "Wilda appeared deep in thought, the candlelight flickering on her face. She was still sitting against a hay bale next to Leland, one hand dabbing a red-stained washcloth against his stitches. Though his face was still pale and the sweat still showed on his brow, Leland seemed to be in somewhat better spirits.<br /><br />\"What else?\" she asked, looking over at Doyle. \"Anything?\""
                },
                {
                    "conditions": [
                        {
                            "c2-23": "yes"
                        },
                        {
                            "c2-21": "no"
                        },
                        {
                            "c2-22": "yes"
                        }
                    ],
                    "text": "\"It's me,\" Doyle whispered as he climbed the ladder back up to the loft. \"Don't worry.\"<br /><br />Wilda nodded to him, her face starting to look relaxed in the flickering candlelight. She was sitting against a hay bale next to Leland, the two of them seemingly caught mid-conversation. Though his face was still pale and the sweat still showed on his brow, Leland seemed to be in somewhat better spirits. <br /><br />\"What do you think?\" Wilda asked. \"You ready to go?\""
                },
                {
                    "conditions": [
                        {
                            "c2-23": "yes"
                        },
                        {
                            "c2-21": "yes"
                        },
                        {
                            "c2-22": "yes"
                        }
                    ],
                    "text": "Wilda appeared deep in thought, the candlelight flickering on her face. She was still sitting against a hay bale next to Leland, one hand dabbing a red-stained washcloth against his stitches. Though his face was still pale and the sweat still showed on his brow, Leland seemed to be in somewhat better spirits.<br /><br />\"What do you think?\" Wilda asked. \"You ready to go?\""
                }
            ],
            "choices": [
                {
                    "text": "Tell her about the escape route",
                    "target": "s2-7.2",
                    "conditions": [
                        {
                            "c2-20": "yes"
                        },
                        {
                            "c2-22": "unset"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c2-21": "yes"
                        },
                        {
                            "c2-22": "yes"
                        }
                    ]
                },
                {
                    "text": "Offer her the surgeon's bag",
                    "target": "s2-7.3",
                    "itemsToRemove": [
                        "i2-10"
                    ],
                    "conditionalItems": [
                        "i2-10"
                    ],
                    "setsConditions": [
                        {
                            "c2-21": "yes"
                        },
                        {
                            "c2-23": "yes"
                        }
                    ]
                },
                {
                    "text": "Tell her it's time to go",
                    "target": "s2-7.5",
                    "conditions": [
                        {
                            "c2-23": "yes"
                        },
                        {
                            "c2-22": "yes"
                        }
                    ]
                },
                {
                    "text": "Go down to the stables",
                    "target": "s2-5",
                    "setsConditions": [
                        {
                            "c2-21": "no"
                        }
                    ]
                },
                {
                    "text": "Ask her about Leland",
                    "target": "s2-7.11",
                    "setsConditions": [
                        {
                            "c2-21": "yes"
                        }
                    ]
                },
                {
                    "text": "Ask her about the keep",
                    "target": "s2-7.8",
                    "setsConditions": [
                        {
                            "c2-21": "yes"
                        }
                    ]
                },
                {
                    "text": "Ask her about the Captain",
                    "target": "s2-7.9",
                    "setsConditions": [
                        {
                            "c2-21": "yes"
                        }
                    ]
                },
                {
                    "text": "Ask her about Ed",
                    "target": "s2-7.10",
                    "conditions": [
                        {
                            "c2-32": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c2-21": "yes"
                        }
                    ]
                },
                {
                    "text": "Ask her about Atwater Ceramics",
                    "target": "s2-7.7",
                    "setsConditions": [
                        {
                            "c2-21": "yes"
                        }
                    ]
                }
            ],
            "solutions": [
                {
                    "text": "Persuade her to leave immediately",
                    "targetOnSuccess": "s2-7.6",
                    "targetOnFailure": "s2-7.6",
                    "conditions": [
                        {
                            "c2-22": "yes"
                        },
                        {
                            "c2-23": "unset"
                        },
                        {
                            "c2-33": "unset"
                        }
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-33": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-33": "no"
                        }
                    ],
                    "difficulty": {
                        "cd": "7"
                    }
                }
            ]
        },
        "s2-8": {
            "title": "The Temple of Yabiz",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The first thing Doyle noticed was the trail of blood. It led from the central path in the courtyard up a side path toward the temple, then up the short set of stone steps and inside. A pair of ornate oak doors that didn't seem to match the rest of the building marked the entrance, but they were already hanging open. Doyle held his torch ahead and stepped inside.<br /><br />The temple was ordinary, like any other in Eadmore. Rows of wooden pews lined either side of the room, all empty except for a few stray copies of <i>The Invocation of Yabiz</i> left sitting on them, and a pair of unlit candelabras swayed from the roof beams above. A path between the pews led to a lectern at the end where the cleric would have preached, a small statue behind it portraying Yabiz himself, his watchful eyes and robes in gray stone, his outstretched palm making a promise that Doyle had been repeating to himself since he was a child: <br /><br /><i>Honor Yabiz by honoring yourself</i>, went the mantra, <i>and fill his palm by filling your own</i>.<br /><br />To the left of the pews was another door, a copper nameplate fastened to the wood that read <i>Apothecary</i>, and to the right was a twisting stone stairwell, most likely leading to the family's catacombs. A long tapestry illustrating the Carden family's history adorned the wall next to it.<br /><br />Doyle's eyes were drawn to the trail of blood, though. It continued through the temple, spattered across the wooden floor along the pathway between the pews, past the cleric's lectern and through an open doorway in the back just behind it. Doyle hesitated, unnerved at the sight."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "<span class='@c2-52'>Doyle tried to step over the trail of blood that stretched across the temple to the door in the back, one hand steadying himself against a pew. He still touched it, though, stumbling slightly ahead, his leather boots leaving small red prints on the stone floor behind him.</span><br /><br /><span class='c2-52'>Doyle tried to step over the trail of blood that stretched across the temple to the cleric's bedroom, one hand steadying himself against a pew. He still touched it, though, stumbling slightly ahead, his leather boots leaving small red prints on the stone floor behind him.</span><br /><br />Unnerved at the sight, Doyle looked at the stairwell to the catacombs and the tapestry hanging from the wall next to it, then turned to the door to the apothecary room. He sighed, his gaze drifting toward the statue of Yabiz staring at him from behind the lectern."
                }
            ],
            "choices": [
                {
                    "text": "Follow the blood trail",
                    "target": "s2-9",
                    "conditions": [
                        {
                            "c2-52": "unset"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c2-52": "yes"
                        }
                    ]
                },
                {
                    "text": "Go to the apothecary room",
                    "target": "s2-8.1",
                    "conditions": [
                        {
                            "c2-2": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to the catacombs",
                    "target": "s2-12"
                },
                {
                    "text": "Look at the tapestry",
                    "target": "s2-11"
                },
                {
                    "text": "Go to the cleric's room",
                    "target": "s2-9",
                    "conditions": [
                        {
                            "c2-52": "yes"
                        }
                    ]
                },
                {
                    "text": "Go outside",
                    "target": "s2-8.2",
                    "conditions": [
                        {
                            "c2-18": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c2-18": "unset"
                        }
                    ]
                },
                {
                    "text": "Go outside",
                    "target": "s2-6",
                    "conditions": [
                        {
                            "c2-18": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to the apothecary room",
                    "target": "s2-17",
                    "conditions": [
                        {
                            "c2-2": "yes"
                        }
                    ]
                },
                {
                    "text": "Look at the lectern",
                    "target": "s2-8.3"
                }
            ],
            "solutions": []
        },
        "s2-9": {
            "title": "The Cleric's Room",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "As Doyle followed the blood trail past the lectern, he found another door already open; it seemed to have been smashed, the handle indented into the wood and one of the hinges splintered off and bent. His body tensed as he stepped inside, still-wet blood on the wood floor catching at his boots.<br /><br />It was a bedroom, small and modest, with a feather-stuffed bed against one wall, a reading table beneath a window that looked out on the courtyard, and a large armoire next to the door. A thick, leather-bound book sat on a small wooden nightstand next to the bed &mdash; probably a journal, Doyle thought &mdash; with a pen and a jar of ink next to it. Everything was covered with white feathers: the bed was littered with them, spewing out from the mattress where it had been cut through, a massive blood stain soaked into the linen and forming the trail that Doyle had followed. <br /><br />He imagined the Captain kicking in the door &mdash; maybe one of the guards, or even someone else &mdash; to find the cleric hiding there, some heavy blade sliding right through him. The Temple of Yabiz was off limits, Doyle thought; that was always understood. Maybe some warped Malorin rebel from The Seven Blades or The Golden Heart wouldn't honor that, or whatever depraved warriors came over the border from Igban &mdash; maybe even wild crowds, like in the Dulthwaite Revolt &mdash; but no proper citizen of Eadmore would disrespect the temple grounds. He didn't know what to make of it."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle looked at his own footprints in the blood on the floor, white feathers scattered all over and stuck against the red on the wood. Then his eyes followed the trail of blood out the door, and he wondered where the cleric had ended up. Maybe he was one of those bodies in the mud pit.<br /><br />The journal still sat on the nightstand next to the bed, and the armoire stood next to the door. "
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-8"
                },
                {
                    "text": "Read the journal",
                    "target": "s2-10",
                    "setsConditions": [
                        {
                            "c2-18": "yes"
                        }
                    ]
                },
                {
                    "text": "Look through the armoire",
                    "target": "s2-9.1",
                    "conditions": [
                        {
                            "c2-1": "unset"
                        }
                    ],
                    "items": [
                        "i2-2"
                    ],
                    "setsConditions": [
                        {
                            "c2-1": "yes"
                        }
                    ]
                },
                {
                    "text": "Look through the armoire",
                    "target": "s2-9.1",
                    "conditions": [
                        {
                            "c2-1": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-10": {
            "title": "The Cleric's Journal",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The journal was bound in unmarked brown leather, the edges of the cover curling up at the corners. A small strap fastened it shut, but it wasn't locked. Doyle unstrapped it and began to read the latest entries, starting about two weeks prior:<br /><br /><i>July 28, 498</i><br /><br /><i>Big turnout today. Somebody from the Atwater Ceramics headquarters visiting to meet with Sir Carden. A lot of excitement in town. People thinking distribution center might grow.</i><br /><br /><i>Rep didn't come to the service, but probably people thought he would. Hoping to get a meeting with him myself. Would love to discuss the Light of Yabiz with a true achiever.</i><br /><br /><i>August 1, 498</i><br /><br /><i>Atwater Rep still hasn't left. Asked Mr. Haley three times to get me a meeting, but he ignores me. Don't understand what's happening. Seems very agitated. Meeting must not have gone well.</i><br /><br /><i>Captain Aldo came by complaining of headaches. Very upset about it. Had Mr. Clifford make him a tincture, but haven't heard back. Seems to be high tension in the keep. Wouldn't be happening if they let me meet with the rep. I know how to talk to people.</i>"
                }
            ],
            "choices": [
                {
                    "text": "Stop reading",
                    "target": "s2-9"
                },
                {
                    "text": "Continue",
                    "target": "s2-10.1"
                }
            ],
            "solutions": []
        },
        "s2-10.1": {
            "title": "The Cleric's Journal",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "<i>August 4, 498</i><br /><br /><i>Turnout not so good today. Something going around in the keep. Nobody has seen Sir Carden in days. Mr. Haley won't talk to me. Maybe Atwater rep is sick too. Maybe meeting didn't happen yet?</i><br /><br /><i>Every day Captain Aldo comes back. Still talking about headaches. Thinks he's dying. Never seen him like this. Mr. Clifford up all night mixing tinctures. He's too loud in there. Keeps me up at night.</i><br /><br /><i>August 6, 498</i><br /><br /><i>Captain Aldo stopped coming. Worried about him, but Mr. Haley won't let me see him. Won't let anybody in or out of the keep. Got Mr. Clifford researching, but he doesn't know anything. Been consulting the Invocation of Yabiz. Found a quote Captain Aldo might like:</i><br /><br /><i>\"Though the body may suffer, the soul will prosper, for Yabiz only takes what is owed.\"<br /><br /><i>Worried myself. Mr. Clifford won't stop speculating. Keeps talking about a book he read about a plague in Igban. Worshipers of Ulon. All backwards people in Igban. He reads too much.</i>"
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-10.2",
                    "setsConditions": [
                        {
                            "c2-20": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-8.1": {
            "title": "The Locked Door",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "A simple wooden door in a stone archway stood next to the pews. The side table next to it held a bowl full of offerings to Yabiz &mdash; gold coins, for the most part, though Doyle noticed a few stray bits of cheap jewelry and what looked like a wadded up washcloth &mdash; as well as some dead flowers in a purple-painted ceramic vase. He was impressed by the craftsmanship, nodding to himself as he turned it over and did, in fact, find the Atwater Ceramics stamp of authenticity on the bottom.<br /><br />After putting the vase back, Doyle pressed his ear to the door, but he heard nothing. He clenched and unclenched his fists, then reached for the handle, turning it slowly, holding his breath. <br /><br />It was locked. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle stood in front of the locked door, thinking for a moment. Then he tried the handle again, considering the possibility that he had misremembered it being locked. It was still locked, though.<br /><br />He eyed the gold coins in the bowl on the side table next to it. <i>No,</i> he thought to himself, <i>what belongs to me belongs to Yabiz, but what belongs to Yabiz does not belong to me.</i>"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-8"
                },
                {
                    "text": "Use the apothecary's key",
                    "target": "s2-17",
                    "itemsToRemove": [
                        "i2-4"
                    ],
                    "conditionalItems": [
                        "i2-4"
                    ],
                    "setsConditions": [
                        {
                            "c2-2": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-11": {
            "title": "The Tapestry",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle stared up at the tapestry hanging above the stairwell to the mausoleum. It stretched nearly across the entirety of the wall, gold frill on the left and right sides framing a purple and white border, which surrounded a collection of woven images that seemed to detail the history of the Carden family, so far back that Doyle assumed some must be more legend than memory.<br /><br />First was the great Sir Edmond Carden &mdash; he was well-known, a household name for anybody in Eadmore &mdash; who founded House Carden after Rothmund's Push, almost 500 years ago. The tapestry showed him on a white horse wielding a sword bathed in purple fire, which he was supposed to have used to slaughter the Malorin knights who lived on the land before the Carden family settled it. They called him <i>The Purple Flame</i>, although Doyle wasn't sure whether the name came from the sword, or if the sword was based on the name, or if the whole thing had been fabricated based on the house colors.<br /><br />Then came the construction of the Salt Keep, with little woven villagers gathering around and assembling the surrounding town &mdash; Doyle was always glad to end up in a castle town, as even the poorest there tended to have a few coins they could part with &mdash; and the Forgotten War, which showed a series of warships sailing along the cliffs below the keep. All he knew about that one was that it had something to do with land rights and an agitated peasant rebellion, and that after it was crushed, every physical record of every participant was completely erased.<br /><br />Along with the big events he saw a number of other Cardens he couldn't put names to. There was one riding some kind of winged beast, and one surrounded by musical instruments who looked like he was supposed to be famous, and one armored on horseback riding through the Mountains of Cazakh &mdash; that also must have been some kind of war, Doyle thought &mdash; along with plenty of others who didn't seem to have any easily identifiable traits.<br /><br />Then came the more recent Knights of the Salt Keep. One of them must have been Sir Edsel Carden, Doyle assumed. They were portrayed less as warriors and more in a dignified, regal light. They wore robes and clean, white furs, and they were surrounded not by battle, but by industry: smoking kilns, and wagons on roads, and fishing boats on the Endless Sea. <br /><br />Sometimes Doyle felt like he was at the end of history; the wars had been fought and won, the landscape flattened and normalized, the world made safe for trade, and now that all of it was done, trade was all there was left to do. It was a comforting thought."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-8"
                }
            ],
            "solutions": []
        },
        "s2-9.1": {
            "title": "The Armoire",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The cleric's armoire was an elegant piece of furniture. It was made from cherry-colored oak, with carvings on the two front doors that suggested some kind of wildlife &mdash; it looked like wolves to Doyle, running in circles and chasing each other, playful poses offset by the ravenous look of their faces &mdash; along with a pair of polished brass handles. Doyle inched it open and peeked inside.<br /><br />For the most part, he saw nothing but near-identical robes. The whole thing was a mess of browns and blacks, as well as some ornamental waist chains hanging over a wooden bar. On the bottom, though, below some of the hanging robes, he noticed a small wicker box. He glanced around the room as if he might be scolded by some unseen watcher, then opened the box. <br /><br />Inside was a small set of <b>fresh bandages</b>, neatly rolled and lined up. Doyle glanced around again &mdash; <i>you'll need these more than he will,</i> he thought &mdash; then pocketed them. <br /><br />Just as he began to turn away, he noticed something strange: a loose piece of wood on the inner bottom of the armoire, just under the wicker box. He wasn't sure what to make of it."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        },
                        {
                            "c2-41": "unset"
                        }
                    ],
                    "text": "Doyle opened the cleric's cherry-colored oak armoire again, looking over the spread of near-identical brown and black robes and ornamental waist chains. Then he eyed the empty wicker box on the bottom. Whatever happened to the cleric, it didn't look like those bandages would've helped.<br /><br />Again he noticed the loose piece of wood beneath the box. He was unsure what to make of it."
                },
                {
                    "conditions": [
                        {
                            "g1": "unset"
                        },
                        {
                            "c2-41": "yes"
                        }
                    ],
                    "text": "Doyle opened the cleric's cherry-colored oak armoire again, looking over the spread of near-identical brown and black robes and ornamental waist chains. Then he eyed the empty wicker box on the bottom. Whatever happened to the cleric, it didn't look like those bandages would've helped.<br /><br />The hidden panel was still open on the bottom, the wicker box moved aside."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-9"
                }
            ],
            "solutions": [
                {
                    "text": "Check for a hidden panel",
                    "targetOnSuccess": "s2-9.2",
                    "conditions": [
                        {
                            "c2-41": "unset"
                        }
                    ],
                    "itemsToAddOnSuccess": [
                        "i2-3"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-41": "yes"
                        }
                    ],
                    "threshold": true,
                    "difficulty": {
                        "sd": "11"
                    }
                }
            ]
        },
        "s2-9.2": {
            "title": "The Hidden Panel",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Hesitant, Doyle moved the wicker box aside and ran a hand over the inner shelf of the armoire. The polished oak was smooth and cold to the touch, but he felt a seam, then a small panel that gave way just enough for him to grip it. He pulled it up, revealing a small hidden chamber. <br /><br />Inside he found another box, this one smaller and wooden. It was covered in carved designs &mdash; it must have been expensive &mdash; with a single silver hinge on the back that squeaked as he opened it.<br /><br />The box was lined with red felt, all to hold a <b>golden bracelet</b> with an ornament hanging from it; it looked like a pair of lips to Doyle, small and puckered. A cleric is meant to be celibate, married to his duty to spread the Light of Yabiz, and that bracelet didn't look to Doyle like something such a man should own. Regardless, he grabbed it and slipped it into his pocket."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-9"
                }
            ],
            "solutions": []
        },
        "s2-12": {
            "title": "The Catacombs",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "A long stairwell led down into the dark of the catacombs. Doyle took each step slowly &mdash; they were shallow and uneven &mdash; and held his torch out in front of him, one hand pressed against the wall for balance. The stone was cold against his skin.<br /><br />The first thing that popped into his head as he breathed in the musty air was the cemetery outside the temple in Hemstoke. He still remembered standing with his father, maybe seven years old, as he stared at his mother's grave, then feeling the old man's hand on his shoulder. It may have been the only time in Doyle's life that his father touched him. <br /><br />Finally the stairwell ended, and Doyle stepped into the entryway to the Carden family's catacombs. The rough stone walls were lined with sealed crypts, each one chiseled with a name and set of years, stretching far into the dark beyond the light of Doyle's torch. Free-standing sarcophagi filled the center of the room, but were spaced apart enough to form a walking path inbetween. <br /><br />As Doyle followed it, a statue of a knight came into view at the far end of the room. It was set into the wall, the melted wax of candles littering the floor in front of it. More than anything else in the room, it looked ancient and decrepit, as if it had been chiseled nearly 500 years ago by the first of the Cardens and gone untouched since then.<br /><br />To the side, Doyle noticed a passageway leading to another burial chamber. He couldn't see much, but it looked newer inside, maybe an expansion. He held his torch ahead to look, then turned back toward the crypts and the statue, nervous and uncertain."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "<span class='@c4-101'>The entryway to the Carden family's catacombs was lined with a long stretch of sealed crypts and free-standing sarcophagi. Doyle walked between them, the light of his torch illuminating the statue of the knight set into the wall ahead. The melted wax of candles littered the floor in front of it.</span><br /><br /><span class='c4-101,@c4-102'>The entryway to the Carden family's catacombs was lined with a long stretch of sealed crypts and free-standing sarcophagi. Doyle walked between them, the light of his torch illuminating the statue of the knight set into the wall ahead. The melted wax of candles littered the floor in front of it, and just ahead, where the statue had been standing, was an opening in the dirt floor leading down to a dark stairwell.</span><br /><br /><span class='c4-101,c4-102'>The entryway to the Carden family's catacombs was lined with a long stretch of sealed crypts and free-standing sarcophagi. Doyle walked between them, the light of his torch illuminating the statue of the knight set into the wall ahead. The melted wax of candles littered the floor in front of it, and just ahead, where the statue had been standing, was an opening in the dirt floor leading down to the old Malorin tomb.</span><br /><br />To the side, Doyle glanced at the passageway leading to the other burial chamber. He couldn't see much, but it looked newer inside, maybe an expansion. He held his torch ahead to look, then turned back toward the crypts and the statue, nervous and uncertain."
                }
            ],
            "choices": [
                {
                    "text": "Look at the crypts",
                    "target": "s2-12.1",
                    "setsConditions": [
                        {
                            "c2-55": "yes"
                        }
                    ]
                },
                {
                    "text": "Look at the statue",
                    "target": "s2-12.2"
                },
                {
                    "text": "Go to the burial chamber",
                    "target": "s2-13",
                    "conditions": [
                        {
                            "c2-8": "unset"
                        },
                        {
                            "c2-32": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to the burial chamber",
                    "target": "s2-13.0",
                    "conditions": [
                        {
                            "c2-8": "yes"
                        },
                        {
                            "c2-32": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to the burial chamber",
                    "target": "s2-13.15",
                    "conditions": [
                        {
                            "c2-32": "yes"
                        },
                        {
                            "c2-50": "unset"
                        }
                    ]
                },
                {
                    "text": "Go to the burial chamber",
                    "target": "s2-13.10",
                    "conditions": [
                        {
                            "c2-50": "yes"
                        }
                    ]
                },
                {
                    "text": "Go upstairs",
                    "target": "s2-8"
                },
                {
                    "text": "Go down the stairs under the statue",
                    "target": "s2-22",
                    "conditions": [
                        {
                            "c4-102": "unset"
                        },
                        {
                            "c4-101": "yes"
                        }
                    ]
                },
                {
                    "text": "Go down to the old tomb",
                    "target": "s2-22",
                    "conditions": [
                        {
                            "c4-102": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-13.0": {
            "title": "The Burial Chamber",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "A shape rose from the shadows behind one of the free standing caskets, black and featureless, and Doyle felt his heart begin to beat faster. All at once, he was a child again, rolling a cart through the woods on the way to Hemstoke &mdash; <i>you're always scared,</i> his father would have said, <i>you have to stop being scared all the time</i> &mdash; and he felt his knees begin to buckle as he stumbled, his back to one of the crypts along the walls. His fists clenched and unclenched, all reflex.<br /><br />Then he raised his torch, and the shape was a man, just a normal person in the dark. The face staring back at him seemed more shaken than his own, pale and quivering in the flickering torchlight, matted with dirt and shining with sweat. He looked young in the face &mdash; maybe early twenties &mdash; but his smooth bald head made it hard to tell, and he wore a simple brown robe, dirty and disheveled as if he had been wearing it for some time. The man pointed a steel dagger at Doyle.<br /><br />\"Come on, mister, stay back,\" he said, voice shaking. \"I'll use this &mdash; I'll do it.\"<br /><br />Doyle held his hands up and shook his head. \"I'm harmless, I promise.\"<br /><br />\"Get back, just &mdash; just leave me alone. \""
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle called out for the man as he stepped into the burial chamber. He didn't want to frighten him; not anymore than he already had, at least. The man's feet stuck out from behind one of the free-standing sarcophagi, just visible in the torchlight.<br /><br />\"It's just me,\" Doyle said again. \"It's me again. Don't worry.\"<br /><br />\"Leave me alone,\" the man said from behind the crypt. \"I mean it, just &mdash; just leave, mister.\"<br /><br />\"I mean no harm.\"<br /><br />The man peeked over the lid of the crypt, his dagger scraping against stone as he pointed it at Doyle. His hands were still shaking, a look of panic in his eyes. "
                }
            ],
            "choices": [
                {
                    "text": "Leave the man alone",
                    "target": "s2-12",
                    "setsConditions": [
                        {
                            "c2-8": "yes"
                        }
                    ]
                }
            ],
            "solutions": [
                {
                    "text": "Disarm the man",
                    "targetOnSuccess": "s2-13.1",
                    "targetOnFailure": "s2-13.1",
                    "itemsToAddOnSuccess": [
                        "i2-12"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-6": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-6": "no"
                        },
                        {
                            "inj5": "yes"
                        },
                        {
                            "c2-59": "yes"
                        }
                    ],
                    "difficulty": {
                        "gd": "5"
                    }
                },
                {
                    "text": "Calm the man down",
                    "targetOnSuccess": "s2-13.1",
                    "targetOnFailure": "s2-13.1",
                    "conditionsSetOnSuccess": [
                        {
                            "c2-7": "yes"
                        },
                        {
                            "c2-59": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-7": "no"
                        },
                        {
                            "c2-59": "yes"
                        }
                    ],
                    "difficulty": {
                        "cd": "5"
                    }
                }
            ]
        },
        "s2-13.1": {
            "title": "The Burial Chamber",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-6": "yes"
                        }
                    ],
                    "text": "Hands still extended, Doyle stepped toward the man. He moved slowly, eyes locked on him, doing his best to project a sense of calm. It was a skill he had learned from Mr. Fultan &mdash; <i>some customers do not like being approached</i>, he used to say, <i>so you must show them that you're not a threat</i> &mdash; but based on the reactions he sometimes got on the road, he wasn't always sure he had mastered it. The man didn't move; he just stared at Doyle.<br /><br />\"What's your name, friend?\" Doyle asked. He stepped forward again. \"I'm Doyle &mdash; Doyle Scoggins. Just here to talk.\"<br /><br />The man didn't answer.<br /><br />\"I'm a salesman. An Atwater Ceramics Representative. Best job I ever had.\"<br /><br />The man was silent for a moment. Then he backed up, away from Doyle. \"Edwin Clifford,\" he said. \"Most people call me Ed.\" <br /><br />Doyle took another step forward, and Ed didn't move this time; his eyes kept darting, but he seemed to have calmed slightly. Still the dagger drew Doyle's attention, though; he imagined it plunging into his back when he turned to leave, or slipping between his ribs mid-conversation. It didn't seem to Doyle that he had much choice, and the opportunity was clear enough. <br /><br />For a moment, Doyle paused. He opened his mouth as if he were about to speak, but then lunged instead, grappling Ed by the wrists and wrenching <b>Ed's dagger</b> from his grip. Doyle let go of his wrists, then stumbled back, knocking into one of the sarcophagi behind him.<br /><br />\"Okay,\" Doyle said. \"I'm sorry, but I &mdash; we're okay now. I'm okay, and you're okay.\""
                },
                {
                    "conditions": [
                        {
                            "c2-7": "yes"
                        }
                    ],
                    "text": "Hands still extended, Doyle stepped toward the man. He moved slowly, eyes locked on him, doing his best to project a sense of calm. It was a skill he had learned from Master Fultan &mdash; <i>some customers do not like being approached</i>, he used to say, <i>so you must show them that you're not a danger</i> &mdash; but based on the reactions he sometimes got on the road, he wasn't always sure he had mastered it. The man didn't move; he just stared at Doyle.<br /><br />\"What's your name, friend?\" Doyle asked. He stepped forward again. \"I'm Doyle &mdash; Doyle Scoggins. Just here to talk.\"<br /><br />The man didn't answer.<br /><br />\"I'm a salesman. An Atwater Ceramics Representative. Best job I ever had.\"<br /><br />The man was silent for a moment. Then he backed up, away from Doyle. \"Edwin Clifford,\" he said. \"Most people call me Ed.\" <br /><br />Doyle took another step forward, and Ed didn't move this time; his eyes kept darting, but he seemed to have calmed slightly. Then Doyle took one more step, the warmest smile he could muster plastered on his face, and extended a hand to shake. He waited for a moment as Ed hesitated &mdash; a bead of sweat dripped down from the man's bald head &mdash; but then he took Doyle's hand.<br /><br />\"We're okay, you and me,\" Doyle said. \"Everybody's okay here.\""
                },
                {
                    "conditions": [
                        {
                            "c2-6": "no"
                        }
                    ],
                    "text": "Hands still extended, Doyle stepped toward the man. He moved slowly, eyes locked on him, doing his best to project a sense of calm. It was a skill he had learned from Master Fultan &mdash; <i>some customers do not like being approached</i>, he used to say, <i>so you must show them that you're not a danger</i> &mdash; but based on the reactions he sometimes got on the road, he wasn't always sure he had mastered it. The man didn't move; he just stared at Doyle.<br /><br />\"What's your name, friend?\" Doyle asked. He stepped forward again. \"I'm Doyle &mdash; Doyle Scoggins.\"<br /><br />The man didn't answer.<br /><br />\"I'm a salesman. An Atwater Ceramics Representative. Best job I ever had.\"<br /><br />The man was silent for a moment. Then he backed up, away from Doyle. \"Edwin Clifford,\" he said. \"Most people call me Ed.\" <br /><br />Doyle took another step forward, and Ed didn't move this time; his eyes kept darting, but he seemed to have calmed slightly. Still the dagger drew Doyle's attention, though; he imagined it plunging into his back when he turned to leave, or slipping between his ribs mid-conversation. It didn't seem to Doyle that he had much choice, and the opportunity was clear enough. <br /><br />For a moment, Doyle paused. He opened his mouth as if he were about to speak, but then lunged instead, grappling Ed by the wrists and trying to wrench the dagger from his grip. For a disheveled man in a mausoleum, he was stronger than he looked; he pushed back against Doyle, sending him stumbling backwards into one of the sarcophagi, then twisted free of his hands. Before Doyle could move, Ed <b>plunged the dagger into his thigh</b>, then stepped back, hands still shaking.<br /><br />\"I knew it,\" he said. \"Get back, mister. I told you, leave me alone.\" <br /><br />\"Wait,\" Doyle said, reeling from the injury. He held both hands on his thigh a moment, grimacing. \"I'm not trying to hurt you, okay? I didn't mean anything by it.\""
                },
                {
                    "conditions": [
                        {
                            "c2-7": "no"
                        }
                    ],
                    "text": "Hands still extended, Doyle stepped toward the man. He moved slowly, eyes locked on him, doing his best to project a sense of calm. It was a skill he had learned from Master Fultan &mdash; <i>some customers do not like being approached</i>, he used to say, <i>so you must show them that you're not a danger</i> &mdash; but based on the reactions he sometimes got on the road, he wasn't always sure he had mastered it. The man didn't move; he just stared at Doyle.<br /><br />\"What's your name, friend?\" Doyle asked. He stepped forward again. \"I'm Doyle &mdash; Doyle Scoggins.\"<br /><br />The man didn't answer.<br /><br />\"I'm a salesman. An Atwater Ceramics Representative. Best job I ever had.\"<br /><br />The man was silent for a moment. Then he backed up, away from Doyle. \"Edwin Clifford,\" he said. \"Most people call me Ed.\" <br /><br />Doyle took another step forward, and Ed didn't move this time; his eyes kept darting, but he seemed to have calmed slightly. Then Doyle took one more step, the warmest smile he could muster plastered on his face, and extended a hand to shake. His foot caught on the edge of the sarcophagus, though, and he stumbled forward, his extended hand bumping into Ed, who scrambled backwards away from him. <br /><br />\"No, sorry,\" Doyle sputtered. \"Sorry &mdash; I didn't mean to do that.\"<br /><br />He reached out again, hoping for a handshake, but Ed didn't reciprocate. He lowered his dagger, though, the panic in his eyes replaced with a look of cautious uncertainty."
                },
                {
                    "conditions": [
                        {
                            "dth": "yes"
                        }
                    ],
                    "text": "Hands still extended, Doyle stepped toward the man. He moved slowly, eyes locked on him, doing his best to project a sense of calm. It was a skill he had learned from Master Fultan &mdash; <i>some customers do not like being approached</i>, he used to say, <i>so you must show them that you're not a danger</i> &mdash; but based on the reactions he sometimes got on the road, he wasn't always sure he had mastered it. The man didn't move; he just stared at Doyle.<br /><br />\"What's your name, friend?\" Doyle asked. He stepped forward again. \"I'm Doyle &mdash; Doyle Scoggins.\"<br /><br />The man didn't answer.<br /><br />\"I'm a salesman. An Atwater Ceramics Representative. Best job I ever had.\"<br /><br />The man was silent for a moment. Then he backed up, away from Doyle. \"Edwin Clifford,\" he said. \"Most people call me Ed.\" <br /><br />Doyle took another step forward, and Ed didn't move this time; his eyes kept darting, but he seemed to have calmed slightly. Still the dagger drew Doyle's attention, though; he imagined it plunging into his back when he turned to leave, or slipping between his ribs mid-conversation. It didn't seem to Doyle that he had much choice, and the opportunity was clear enough. <br /><br />For a moment, Doyle paused. He opened his mouth as if he were about to speak, but then lunged instead, grappling Ed by the wrists and trying to wrench the dagger from his grip. For a disheveled man in a mausoleum, he was stronger than he looked; he pushed back against Doyle, sending him stumbling backwards into one of the crypts, then twisted free of his hands. Before Doyle could move, Ed <b>plunged the dagger into his throat</b>, then stepped back, hands still shaking.<br /><br />\"I knew it!\" he said. Then his eyes widened. \"I &mdash; I didn't &mdash;\"<br /><br />Everything tasted like blood. Doyle tried to say something, but the words wouldn't come; just a wet sputter, and something like a gurgle, as he slumped down to a seat against the crypt. He felt the warmth pour over him, his vision blurring and a dizzy feeling overtaking him as Ed knelt in front of him. The disheveled man was saying something, but Doyle found it difficult to pay attention. <br /><br />Doyle's arms dropped to his sides, and the warmth turned to cold, and for some reason, he thought of his bed in Hemstoke, the one he had slept in as a child, and he thought of his mother's headstone in the cemetery, and he imagined himself asleep there again, shadows on the road to Cotlin Hill flickering through his head. He was so tired, and so cold, so he thought of the bed. Then he closed his eyes. "
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-13.2",
                    "items": [
                        "i2-4"
                    ],
                    "setsConditions": [
                        {
                            "c2-32": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-13.2": {
            "title": "The Burial Chamber",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-6": "yes"
                        }
                    ],
                    "text": "\"Whatever you say, mister,\" Ed said, his voice still shaking. \"What do you want?\"<br /><br />\"I'm just looking for a way out of&mdash;\"<br /><br />\"If you want to rob me, I just &mdash; I don't have much, I really don't.\"<br /><br />\"It's not that at all,\" Doyle said, holding his hands out again. There had to be something to say, he thought. Mr. Fultan would have told him to cut his losses, to recognize when a customer is in a different mental space and move on to somebody more amenable, but all he wanted was some information, maybe a tip on where to go next. \"I'm just looking for a way out. Maybe there's a secret passage down here somewhere, or something like that. Anything, okay?\"<br /><br />\"No,\" Ed said, his face scrunched up, rubbing his bald head. \"I don't think you'll find anything here. I know my way around pretty well.\"<br /><br />Doyle sat on the edge of the sarcophagus next to Ed, disappointed. He'd heard stories as a child about the great castles of the various kings and lords of Eadmore, and they all had webs of underground tunnels and secret escape routes. Supposedly King Bostwick was once lost for a full day in a hidden passageway in Eadric Castle, and a traveling merchant in Wescardine had told him once that the Blue Keep was like a honeycomb, every room lined with some esoteric trick or shortcut. There had to be something, Doyle thought.<br /><br />\"It's freezing down here,\" Ed said, \"and I'm starving &mdash; I am <i>so hungry</i> &mdash; but if I had anything, I'd give it up, I swear.\" Then he pulled a <b>small brass key</b> from a pouch on his belt and tossed it toward Doyle. \"How about this? For my room upstairs &mdash; the apothecary room. There's gotta be something, mister. Just take it and go, okay?\"<br /><br />\"I promise, I'm not trying to&mdash;\"<br /><br />\"Just take it,\" he said, pointing to the key, his hand shaking. \"It's all yours.\"<br /><br />Doyle nodded, his face reddening. Then he grabbed the key and pocketed it."
                },
                {
                    "conditions": [
                        {
                            "c2-7": "yes"
                        }
                    ],
                    "text": "\"Sorry I threatened you, mister,\" Ed said. \"I didn't know if you were &mdash;\"<br /><br />Doyle nodded. \"Trust me, I get it.\"<br /><br />\"What are you doing down here, then?\"<br /><br />\"I'm just looking for a way out,\" Doyle said. \"Maybe there's a secret passage down here somewhere, or something like that. Anything, okay?\"<br /><br />\"No,\" he said, his face scrunched up, rubbing his bald head. \"I don't think you'll find anything here. I know my way around pretty well.\"<br /><br />Doyle sat on the edge of the sarcophagus next to Ed, disappointed. He'd heard stories as a child about the great castles of the various kings and lords of Eadmore, and they all had webs of underground tunnels and secret escape routes. Supposedly King Bostwick was once lost for a full day in a hidden passageway in Eadric Castle, and a traveling merchant in Wescardine had told him once that the Blue Keep was like a honeycomb, every room lined with some esoteric trick or shortcut. There had to be something, Doyle thought.<br /><br />\"Maybe you could join me,\" Doyle said. \"We could look together.\"<br /><br />Ed shook his head.<br /><br />\"Why not?\"<br /><br />\"Father Payton told me to wait,\" Ed said. He stared down at the floor for a moment, almost hesitant. \"He sent me down here to hide, told me not to come out until he came and got me.\"<br /><br />\"That could be a while,\" Doyle said. He thought of the blood trail in the temple upstairs. \"What if he &mdash; you know, I saw a lot of blood upstairs. What if they&mdash;\"<br /><br />\"Not his, I'm sure. Five years I've worked with Father Payton, and if there's one thing I know, it's to take him at his word. It's freezing down here, and I'm starving, but I promise, he's coming back.\"<br /><br />Doyle nodded. \"Okay.\"<br /><br />\"I'm sorry I can't help more,\" he said. Then his eyes perked, and he opened a leather pouch on his belt and produced a <b>small, brass key</b>. \"Take this, at least. It'll get you into the apothecary room upstairs. I'm sure you'll find something you can use in there. Just stay safe, okay?\" "
                },
                {
                    "conditions": [
                        {
                            "c2-7": "no"
                        }
                    ],
                    "text": "\"Listen, mister, you keep your distance,\" Ed said. \"I don't know if you're &mdash; you've seen what's happening out there, right? You must have.\"<br /><br />Doyle nodded. \"First hand.\"<br /><br />\"What are you doing down here, then?\"<br /><br />\"I'm just looking for a way out,\" Doyle said. \"Maybe there's a secret passage down here somewhere, or something like that. Anything, okay?\"<br /><br />\"No,\" he said, his face scrunched up, rubbing his bald head. \"I don't think you'll find anything here. I know my way around pretty well.\"<br /><br />Doyle sat on the edge of the sarcophagus across from Ed, disappointed. He'd heard stories as a child about the great castles of the various kings and lords of Eadmore, and they all had webs of underground tunnels and secret escape routes. Supposedly King Bostwick was once lost for a full day in a hidden passageway in Eadric Castle, and a traveling merchant in Wescardine had told him once that the Blue Keep was like a honeycomb, every room lined with some esoteric trick or shortcut. There had to be something, Doyle thought.<br /><br />\"Maybe you could join me,\" Doyle said. \"We could look together.\"<br /><br />Ed shook his head.<br /><br />\"Why not?\"<br /><br />\"Father Payton told me to wait,\" Ed said. He stared down at the floor for a moment, almost hesitant. \"He sent me down here to hide, told me not to come out until he came and got me.\"<br /><br />\"That could be a while,\" Doyle said. He thought of the blood trail in the temple upstairs. \"What if he &mdash; you know, I saw a lot of blood upstairs. What if they&mdash;\"<br /><br />\"Not his, I'm sure. Five years I've worked with Father Payton, and if there's one thing I know, it's to take him at his word. It's freezing down here, and I'm starving, but I promise, he's coming back.\"<br /><br />\"Okay. Well, if you think so&mdash;\"<br /><br />\"I know so. I'm sorry I can't help, mister,\" he said. Then his eyes perked, and he opened a leather pouch on his belt and produced a <b>small, brass key</b>. \"How about this? It'll get you into the apothecary room upstairs. I'm sure you'll find something you can use in there.\""
                },
                {
                    "conditions": [
                        {
                            "c2-6": "no"
                        }
                    ],
                    "text": "\"Whatever you say, mister,\" Ed said, his voice still shaking. \"What do you want?\"<br /><br />\"I'm just looking for a way out of&mdash;\"<br /><br />\"If you want to rob me, I just &mdash; I don't have much, I really don't.\"<br /><br />\"It's not that at all,\" Doyle said, holding his hands out again. There had to be something to say, he thought. Mr. Fultan would have told him to cut his losses, to recognize when a customer is in a different mental space and move on to somebody more amenable, but all he wanted was some information, maybe a tip on where to go next. \"I'm just looking for a way out. Maybe there's a secret passage down here somewhere, or something like that. Anything, okay?\"<br /><br />\"No,\" Ed said, his face scrunched up, rubbing his bald head. \"I don't think you'll find anything here. I know my way around pretty well.\"<br /><br />Doyle sat on the edge of the sarcophagus next to Ed, disappointed. He'd heard stories as a child about the great castles of the various kings and lords of Eadmore, and they all had webs of underground tunnels and secret escape routes. Supposedly King Bostwick was once lost for a full day in a hidden passageway in Eadric Castle, and a traveling merchant in Wescardine had told him once that the Blue Keep was like a honeycomb, every room lined with some esoteric trick or shortcut. There had to be something, Doyle thought.<br /><br />\"It's freezing down here,\" Ed said, \"and I'm starving &mdash; I am <i>so hungry</i> &mdash; but if I had anything, I'd give it up, I swear.\" Then he pulled a <b>small brass key</b> from a pouch on his belt and tossed it toward Doyle. \"How about this? For my room upstairs &mdash; the apothecary room. There's gotta be something, mister. Just take it and go, okay?\"<br /><br />\"I promise, I'm not trying to&mdash;\"<br /><br />\"Just take it,\" he said, pointing to the key, his hand shaking. \"It's all yours.\"<br /><br />Doyle nodded, his face reddening. Then he grabbed the key and pocketed it."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-13.15"
                }
            ],
            "solutions": []
        },
        "s2-5.1": {
            "title": "The Bunks",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The door opened to a small room lined on either side by two-person bunk beds, crudely constructed and topped with flat, uncomfortable-looking straw-stuffed mattresses. It must have been where Wilda and the others slept. A single window marked the wall between the beds, moonlight and Doyle's torch lighting the room. <br /><br />At the foot of each bunk bed sat a wooden trunk. Two more were at the heads of the beds under the window, and a small wooden table sat against the wall next to the door. The surface was littered with a disorganized collection of feather pens and letters. <br /><br />Doyle sat for a moment on one of the bottom bunks, looking around the room. He thought of his own bed in Hemstoke &mdash; feather-stuffed, which he had saved up for over a year to buy &mdash; and how excited Nela had been when he brought it home from Cotlin Hill. He hadn't seen that bed in months, though. The last time he even looked at it, it had just been to ponder what kind of price he might get for it. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Two-person bunk beds lined the walls on either side of the room. At the foot of each bed sat a wooden trunk, and a small table sat against the wall next to the door, the surface scattered with feather pens and letters. <br /><br />Doyle sat down on one of the bottom bunks and ran his hand across the linen sheets. It was cold to the touch. More than anything, he wanted to sleep."
                }
            ],
            "choices": [
                {
                    "text": "Go to the stables",
                    "target": "s2-5"
                },
                {
                    "text": "Read the letters",
                    "target": "s2-5.2"
                },
                {
                    "text": "Look through the trunks",
                    "target": "s2-5.5",
                    "conditions": [
                        {
                            "c2-42": "unset"
                        }
                    ],
                    "items": [
                        "i2-5"
                    ],
                    "setsConditions": [
                        {
                            "c2-42": "yes"
                        }
                    ]
                },
                {
                    "text": "Look through the trunks",
                    "target": "s2-5.5",
                    "conditions": [
                        {
                            "c2-42": "yes"
                        }
                    ]
                }
            ],
            "solutions": [
                {
                    "text": "Search the room",
                    "targetOnSuccess": "s2-5.3",
                    "targetOnFailure": "s2-5.3",
                    "conditions": [
                        {
                            "c2-12": "unset"
                        }
                    ],
                    "itemsToAddOnSuccess": [
                        "i2-6"
                    ],
                    "itemsToAddOnFailure": [
                        "i2-5"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-12": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-12": "no"
                        }
                    ],
                    "threshold": true,
                    "difficulty": {
                        "ld": "11"
                    }
                }
            ]
        },
        "s2-5.2": {
            "title": "The Writing Desk",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The wooden desk was covered with letters, a white feather pen and black jar of ink off to one side. Most of the letters were open and unsealed, some of them seemingly still in progress, some of them crumpled into balls and left sitting on the floor next to the desk. Most included Wilda's signature at the bottom. Doyle sat down at the desk and began to read:<br /><br /><i>Dear Mother and Father,</i><br /><br /><i>I hope you both are well. I'm sorry that I haven't sent any money in the last few months. My pay was docked because I owed a small debt for an incident with some tack left in the rain.</i><br /><br /><i>I don't know how to avoid these kinds of things, because any time we move slowly enough to take care and double-check things, Haley tells us that the most important thing is that we move quickly. He always says that the Carden family expects speed above all, but then when something goes wrong, he tells us that the most important thing is that we care for our work. Sometimes I'm concerned that I don't care enough for my work.</i><br /><br /><i>I shouldn't always be complaining in these letters. I'm sorry for that, too. This just isn't what I thought it was going to be. I miss Henketh and I miss you both. </i><br /><br /><i>I hope to see you soon,</i><br /><i>Wilda</i>  "
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-5.1"
                },
                {
                    "text": "Read another",
                    "target": "s2-5.4"
                }
            ],
            "solutions": []
        },
        "s2-5.3": {
            "title": "The Bunks",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-12": "yes"
                        }
                    ],
                    "text": "Doyle stood next to one of the bunk beds, hesitating, then lifted the pillow and looked underneath. For the first few months of his time with Atwater Ceramics, he slept with a polished steel dagger under his pillow every night; burglars might hear a merchant was in town and break into his room in the inn, he thought, or highwaymen might come across him when he slept near the road between villages. He'd accidentally left it somewhere on the road to Dunmore, though, and didn't notice until it was too late to go back.<br /><br />Just as he was checking the last of the pillows, he noticed something: an edge of leather sticking out from beneath one of the mattresses. He lifted it up and looked underneath, and there he saw a <b>black leather vest</b> unlike any of the other clothing in the room; it looked like city clothing to Doyle &mdash; not flashy, but refined &mdash; like something some well-groomed professor at Pelfworth Academy might wear. Doyle grabbed it, imagining how it might look on him as he pocketed it.   "
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-5.1"
                }
            ],
            "solutions": []
        },
        "s2-5.4": {
            "title": "The Writing Desk",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle moved the letter aside and found another to read. This one looked half-finished and slightly wrinkled, as if it had been crumpled at some point and then uncrumpled:<br /><br /><i>Dear Mother and Father,</i><br /><br /><i>It was good to see you last week. I wish Elda could have made it. I'm sorry I couldn't stay longer, but I'm on somewhat precarious terms with Haley right now. He wants to push reshoeing to every three months to cut costs, and I told him that was a bad idea and it was dangerous to wait so long. How much can it possibly cost just for horseshoes? He saw that as backtalk, though. I don't know.</i><br /><br /><i>I don't think he really knows anything about caring for these animals. I didn't say that, but I don't know what I'm supposed to tell him. I don't understand why he's pushing changes on us when he doesn't know how any of this works. He made me meet with him that night to talk about my attitude, and he said that I didn't respect what he</i><br /><br />The letter cut off mid-thought. Doyle assumed she must have crumpled it up at that point."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-5.1"
                }
            ],
            "solutions": []
        },
        "s2-20": {
            "title": "The Outer Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Two sandstone towers topped the outer gatehouse, each flying purple and white flags that registered only as black in the moonlight. Doyle wondered what kind of struggles that gate had seen; as far as he knew, the Salt Keep had never been sacked, but there certainly must have been some kind of siege at some point. After all, what would have been the point otherwise? All that construction &mdash; all that sweat, and blood, and toil &mdash; must have added up to something. <br /><br /><span class='c3-0'>Below the towers was an archway blocked off by a grated iron portcullis &mdash; Wilda must have closed it after they'd passed through &mdash; and just next to it was a wooden door into the gatehouse where the city guards likely kept watch and manned the portcullis controls. Doyle held onto the iron grating and peered through, down the dirt road and into the village outside, hoping he might catch a glimpse of Blondie.</span><br /><br /><span class='@c3-0'>Below the towers was an archway blocked off by a grated iron portcullis &mdash; Wilda must have closed it after they'd passed through &mdash; and just next to it was a wooden door into the gatehouse where the city guards likely kept watch and manned the portcullis controls. Doyle held onto the iron grating and peered through, down the dirt road and into the village outside, hoping he might catch a glimpse of Blondie. All he saw instead was a human form &mdash; a black silhouette in the moonlight &mdash; then another, and another. They must have been city guards, he thought, still roaming the streets, searching for anyone left alive.</span><br /><br />Off to his right, not far from the gate, was the orange glow of fire he had seen over the wall. He still couldn't see the source &mdash; rows of buildings blocked his view &mdash; but he was sure that it must have been the mud pit. Doyle stared at it and sighed.<br /><br /><span class='@c3-0'>Human shadows flickered in the fire's glow against a house up ahead.</span>"
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "<span class='c3-61,c4-0'>Two sandstone towers topped the outer gatehouse, each flying purple and white flags that registered only as black in the moonlight. Below them was an archway blocked off by a steel portcullis, and just next to it was a wooden door to the gatehouse and the portcullis controls. It was open, hanging inward and creaking in the breeze.</span><br /><br /><span class='@c3-61,c4-0'>Two sandstone towers topped the outer gatehouse, each flying purple and white flags that registered only as black in the moonlight. Below them was an archway blocked off by a steel portcullis, and just next to it was a wooden door to the gatehouse and the portcullis controls.</span><br /><br /><span class='c3-61,@c4-0'>Two sandstone towers topped the outer gatehouse, each flying purple and white flags that registered only as black in the moonlight. Below them was an archway blocked off by a steel portcullis, and just next to it was a wooden door to the gatehouse and the portcullis controls.</span><br /><br /><span class='@c3-61,@c4-0'>Two sandstone towers topped the outer gatehouse, each flying purple and white flags that registered only as black in the moonlight. Below them was an archway blocked off by a steel portcullis, and just next to it was a wooden door to the gatehouse and the portcullis controls.</span><br /><br /><span class='@c3-0'>Doyle wrapped his free hand around the iron grating and peered through it, down the dirt road and into the village outside, hoping he might catch a glimpse of Blondie. All he saw instead was a human form &mdash; a black silhouette in the moonlight &mdash; then another, and another. They must have been city guards, he thought, still roaming the streets, searching for anyone still living.</span><br /><br /><span class='c3-0'>Doyle wrapped his free hand around the iron grating and peered through it, down the dirt road and into the village outside, hoping he might catch a glimpse of Blondie. He didn't see anything, though: no city guards roaming, no movement of any kind.</span>"
                }
            ],
            "choices": [
                {
                    "text": "Go back to the courtyard",
                    "target": "s2-6"
                },
                {
                    "text": "Dangle the carrots",
                    "target": "s2-20.1",
                    "items": [
                        "i2-9"
                    ],
                    "itemsToRemove": [
                        "i2-8"
                    ],
                    "conditionalItems": [
                        "i2-8"
                    ],
                    "setsConditions": [
                        {
                            "c2-16": "yes"
                        }
                    ]
                },
                {
                    "text": "Look at the gatehouse door",
                    "target": "s2-20.2",
                    "conditions": [
                        {
                            "c4-70": "unset"
                        }
                    ]
                },
                {
                    "text": "Dangle the sheet cake",
                    "target": "s2-20.3",
                    "items": [
                        "i3-4"
                    ],
                    "itemsToRemove": [
                        "i3-3"
                    ],
                    "conditionalItems": [
                        "i3-3"
                    ],
                    "setsConditions": [
                        {
                            "c2-16": "yes"
                        }
                    ]
                },
                {
                    "text": "Go to the gatehouse ",
                    "target": "s4-27",
                    "conditions": [
                        {
                            "c4-70": "yes"
                        }
                    ]
                },
                {
                    "text": "Dangle the tin of caramels",
                    "target": "s2-20.4",
                    "conditions": [
                        {
                            "c4-103": "unset"
                        }
                    ],
                    "conditionalItems": [
                        "i4-11"
                    ]
                }
            ],
            "solutions": []
        },
        "s2-14": {
            "title": "The Servants' Quarters",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The servants' quarters had been ransacked. Doyle stood outside and looked at the building &mdash; a long stretch of wattle and daub, dark windows looking back at him &mdash; before focusing on the front door, which had been broken inward against its hinges. Two gashes in the wood suggested some kind of axe or polearm, and a thick trail of blood led out the door toward the path in the courtyard. <br /><br />As Doyle stepped inside, he saw that the interior had fared no better. It was a communal bedroom, the walls lined with rows of wooden beds, straw-stuffed mattresses and simple white linens atop them. A larger space at one end held a table surrounded by chairs, as well as a stone hearth with a cooking pot suspended in it. In the back was a door that led out to the animal pens behind the building &mdash; Doyle could see them through the window &mdash; and next to the hearth was an open doorway to a smaller bedchamber, not quite private, but still distinct from the main room.<br /><br />Everything inside was disheveled. Mattresses were torn apart, straw stuffing spread across the floors, and the chairs had been scattered and broken. Blood was spattered on the first few mattresses closest to the broken-in door, then concentrated in spots on the floor throughout. <br /><br />At the far end of the room, part of the thatched roofing had collapsed &mdash; Doyle couldn't imagine what had happened there &mdash; allowing moonlight to spill into the blood-spattered room. Just under the wreckage of the roof, Doyle noticed a trapdoor.  "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle stood in the center of the servants' quarters, wrecked thatch and torn straw mattresses all around him, and stared down at the blood trail that led out the door. All in the mud pit, he thought. <br /><br /><span class='@c4-77'>Then he sat down on the edge of one of the beds and looked around the room. Two doors led outside: one to the animal pens behind the building, and the other back out to the courtyard. Between the two, next to the hearth, was an open doorway to a smaller, semi-private bedchamber.</span><br /><br /><span class='c4-77'>Then he sat down on the edge of one of the beds and looked around the room. Two doors led outside: one to the animal pens behind the building, and the other back out to the courtyard. Between the two, next to the hearth, was an open doorway to a smaller, semi-private bedchamber. A short trail of muddy footprints led into the bedchamber. Somebody had passed through, stepping hard and dragging their feet.</span><br /><br /><span class='@c2-31'>Just visible under a pile of collapsed thatch roofing was a trapdoor in the floor.</span><br /><br /><span class='c2-31'>Just visible under a pile of collapsed thatch roofing was the trapdoor leading down to the root cellar.</span>"
                }
            ],
            "choices": [
                {
                    "text": "Go to the courtyard",
                    "target": "s2-6"
                },
                {
                    "text": "Go to the animal pens",
                    "target": "s2-14.2"
                },
                {
                    "text": "Look through the wreckage",
                    "target": "s2-14.1"
                },
                {
                    "text": "Go into the root cellar",
                    "target": "s2-14.5",
                    "conditions": [
                        {
                            "c2-31": "yes"
                        }
                    ]
                },
                {
                    "text": "Go to the bedchamber",
                    "target": "s2-21"
                }
            ],
            "solutions": [
                {
                    "text": "Pull open the trapdoor",
                    "targetOnSuccess": "s2-14.4",
                    "targetOnFailure": "s2-14.4",
                    "conditions": [
                        {
                            "c2-15": "unset"
                        },
                        {
                            "c2-31": "unset"
                        }
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-15": "yes"
                        },
                        {
                            "c2-31": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-15": "no"
                        },
                        {
                            "inj23": "yes"
                        },
                        {
                            "c2-31": "yes"
                        }
                    ],
                    "difficulty": {
                        "gd": "5"
                    }
                }
            ]
        },
        "s2-14.1": {
            "title": "In the Wreckage",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle walked the room from end to end, brushing piles of straw aside, looking under mattresses, and checking inside of any stray boxes or baskets he found. There didn't seem to be much of value in the servants' quarters; mostly clothing and linens, some cheap trinkets and children's toys here and there, but nothing notable or particularly useful. <br /><br />Then he began moving aside the fallen thatch, looking over the beds beneath it. On one he found a note, unfolded and left on the mattress. It read:<br /><br /><i>Mr. Clifford,</i><br /><br /><i>I haven't heard from Captain Aldo or Mr. Haley at all today.</i><br /><br /><i>I understand that we're meant to gather in the Great Hall, but I must insist you return tonight and see what more you can do. We need to get creative. With so many in such close quarters, the chances of illness spreading are more pronounced than ever. We have to work fast.</i><br /><br /><i>My plan is to demand that Mr. Haley allow me to see Captain Aldo tomorrow morning. If you can manage an effective tincture by then, that will be a very good look for you in Sir Carden's eyes. Be prepared. We may have a lot to do if this spreads further.</i><br /><br /><i>We'll work through the night if we have to. We need to find a solution.</i><br /><br /><i>Best,</i><br /><i>Father Payton</i>"
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "There wasn't much to be found among the thatch-covered beds. Mostly Doyle saw clothing and linens, some cheap trinkets and children's toys here and there, but nothing notable or particularly useful. <br /><br />He looked again at the note, unfolded and left on one of the mattresses. It read:<br /><br /><i>Mr. Clifford,</i><br /><br /><i>I haven't heard from Captain Aldo or Mr. Haley at all today.</i><br /><br /><i>I understand that we're meant to gather in the Great Hall, but I must insist you return tonight and see what more you can do. We need to get creative. With so many in such close quarters, the chances of illness spreading are more pronounced than ever. We have to work fast.</i><br /><br /><i>My plan is to demand that Mr. Haley allow me to see Captain Aldo tomorrow morning. If you can manage an effective tincture by then, that will be a very good look for you in Sir Carden's eyes. Be prepared. We may have a lot to do if this spreads further.</i><br /><br /><i>We'll work through the night if we have to. We need to find a solution.</i><br /><br /><i>Best,</i><br /><i>Father Payton</i>"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-14"
                }
            ],
            "solutions": []
        },
        "s2-14.2": {
            "title": "The Animal Pens",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "As Doyle stepped outside toward the pens, he heard the familiar sound of pigs grunting and snorting. He had heard it even in the courtyard as he passed by the pens, but thought nothing of it &mdash; those are just the natural sounds of civilization, after all &mdash; but the oddity occurred to him now; the pigs, just like the horses in the stables, had been left untouched. They were still happily milling about as if nothing had happened, as if the world was still in order around them.<br /><br />A short wooden fence surrounded the muddy patch where the pigs lived, a free-standing thatched-roof overhang covering it in the back, and a small, wooden storage shed stood next to the pen. Doyle ran a hand along the fencing, thinking of the pigs his father used to keep on his farm.<br /><br />Then he reached over the fence to touch one of the pigs. It grunted and waddled away. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "A short wooden fence surrounded the muddy patch where the pigs lived. A free-standing thatched-roof overhang covered it in the back, and a small, wooden storage shed stood next to the pen. Doyle ran a hand along the fencing, thinking of the pigs his father used to keep on his farm. <br /><br />Then he reached over the fence to touch one of the pigs. It grunted and waddled away. "
                }
            ],
            "choices": [
                {
                    "text": "Go to the servants' quarters",
                    "target": "s2-14"
                },
                {
                    "text": "Go to the courtyard",
                    "target": "s2-6"
                },
                {
                    "text": "Open the storage shed",
                    "target": "s2-19",
                    "setsConditions": [
                        {
                            "c2-14": "yes"
                        }
                    ]
                }
            ],
            "solutions": [
                {
                    "text": "Befriend the pigs",
                    "targetOnSuccess": "s2-14.2.1",
                    "targetOnFailure": "s2-14.2.1",
                    "conditions": [
                        {
                            "s2-43": "unset"
                        }
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "s2-43": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "s2-43": "no"
                        }
                    ],
                    "difficulty": {
                        "cd": "3"
                    }
                }
            ]
        },
        "s2-14.4": {
            "title": "The Trapdoor",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-15": "yes"
                        }
                    ],
                    "text": "The trapdoor was flush with the floor, wooden boards held together by an iron binding with a single ovular handle toward one edge. It looked like something had happened to it during the ransacking, though; a bit of wood on one side had broken through, and one of the iron bindings was slightly bent, leaving the entire trapdoor warped and cracking, jammed into the opening it covered. Doyle tried to lift it by the handle, but it didn't budge.<br /><br />\"Okay,\" Doyle said under his breath. \"You can do this.\"<br /><br />He reached down and grabbed the iron handle with both hands, then squatted over the trapdoor. The metal was cool against his skin, moonlight pouring in from the hole in the roof just overhead, and Doyle held his breath. Then he pulled, arms and legs shaking, teeth gritted, until he heard a crack, then wood scraping against wood. All at once, the trapdoor popped open, and Doyle stumbled backwards, steadying himself against one of the beds behind him.<br /><br />Inside was a ladder headed down into the dark. A root cellar, he thought."
                },
                {
                    "conditions": [
                        {
                            "c2-15": "no"
                        }
                    ],
                    "text": "The trapdoor was flush with the floor, wooden boards held together by an iron binding with a single ovular handle toward one edge. It looked like something had happened to it during the ransacking, though; a bit of wood on one side had broken through, and one of the iron bindings was slightly bent, leaving the entire trapdoor warped and cracking, jammed into the opening it covered. Doyle tried to lift it by the handle, but it didn't budge.<br /><br />\"Okay,\" Doyle said under his breath. \"You can do this.\"<br /><br />He reached down and grabbed the iron handle with both hands, then squatted over the trapdoor. The metal was cool against his skin, moonlight pouring in from the hole in the roof just overhead, and Doyle held his breath. Then he pulled, arms and legs shaking, teeth gritted, until he heard a creak, his body trembling and his face straining. He pulled, and he pulled, and then all at once, his hands slipped from the handle and he stumbled backwards, steadying himself against one of the beds behind him.<br /><br />It was stuck. Frustrated, he leaned over the trapdoor and yanked the handle again, then stood up and stomped on it as hard as he could. He stomped again, and again, and again, until all at once the jammed side broke through and his leg went with it, down into darkness as he grabbed the edge of the nearest bed to keep from falling. A throbbing pain shot through his leg as he pulled it out, blood clear on his breeches. Still, with the jammed side broken, he was able to lift the trapdoor.<br /><br />Inside was a ladder headed down into the dark. A root cellar, he thought."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-14.5",
                    "conditions": [
                        {
                            "c2-15": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c2-31": "yes"
                        }
                    ]
                },
                {
                    "text": "Turn back",
                    "target": "s2-14",
                    "conditions": [
                        {
                            "c2-15": "no"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-14.5": {
            "title": "The Root Cellar",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Each rung of the ladder creaked in Doyle's hands as he climbed down into the cellar below. The walls around him were rough stone, and the air was cool and dry, everything pitch black save for the flickering light of his torch. Doyle hopped down and surveyed the room, his eyes adjusting to the darkness.<br /><br />He froze when he saw it: a man, slumped against the wall in the corner, head drooping. His heart raced for a moment, but it was immediately clear that the man was dead. He was dressed in a brown tunic matted with blood, nestled between two shelves; there were three in all, one on each side of the room other than the ladder, all loaded with vegetables, and meats, and burlap sacks filled with various other provisions. A half-eaten apple, browned and bloody where he'd chewed it, sat in the man's lap. <br /><br /><span class='@c3-74'>All Doyle could think of as he looked at the body was Hadden, slumped upstairs in the Golden Calf, watching him walk away. He wondered if the city guards had found him up there, and he closed his eyes for a moment, his throat tight. Then he looked again at the shelves, his eyes gravitating toward a small wooden lockbox that sat on one. Straw poked through the slats from inside.</span><br /><br /><span class='c3-74'>As he glanced again at the shelves, Doyle tried not to look at the man. Instead, his eyes gravitated toward a small wooden lockbox that sat on one. Straw poked through the slats from inside.</span>"
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle paused for a moment in the root cellar, allowing the cool, dry air to wash over him and savoring the feeling. The walls around him were rough stone, everything pitch black save for the flickering light of his torch. Something about the confined space almost made him feel safe.<br /><br />Shelves loaded with vegetables, and meats, and burlap sacks filled with various other provisions lined the walls on three sides. A conspicuous wooden lockbox sat on one, straw poking through from the between the slats. Between two of them, the body of a man was slumped against the wall, head drooping. A half-eaten apple, browned and bloody where he'd chewed it, sat in his lap"
                }
            ],
            "choices": [
                {
                    "text": "Go back up the ladder",
                    "target": "s2-14"
                },
                {
                    "text": "Look through the shelves",
                    "target": "s2-14.7",
                    "items": [
                        "i2-7"
                    ]
                },
                {
                    "text": "Look at the lockbox",
                    "target": "s2-14.8"
                }
            ],
            "solutions": [
                {
                    "text": "Search the man's body",
                    "targetOnSuccess": "s2-14.6",
                    "targetOnFailure": "s2-14.6",
                    "conditions": [
                        {
                            "c2-44": "unset"
                        }
                    ],
                    "itemsToAddOnSuccess": [
                        "i2-8"
                    ],
                    "itemsToAddOnFailure": [
                        "i2-8"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-44": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-44": "no"
                        }
                    ],
                    "difficulty": {
                        "ld": "4"
                    }
                }
            ]
        },
        "s2-20.1": {
            "title": "The Outer Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c3-0": "unset"
                        }
                    ],
                    "text": "Eyes still fixed on the darkness of the village ahead, Doyle reached into his bag and retrieved the <b>carrots</b> he had found in the root cellar. He held them by their green stalks and reached through the grates of the portcullis, dangling them ahead and softly banging them against the iron.<br /><br />\"Blondie,\" he whispered. Then he chirped, as he did any time he wanted to get her attention. \"Blondie, are you out there? Are you out there, girl?\"<br /><br />He watched the shadows in the orange glow against the houses ahead, but they didn't move toward him. Neither did the silhouettes in the moonlight up ahead. Again he chirped, the carrots still dangling, and he looked for any sign of her. Just as he began to think he should give up, he heard a familiar snort in the darkness.<br /><br />Blondie emerged from the night, the cart still rolling behind her, and walked up to the portcullis, immediately grabbing the carrots from Doyle's hand. He reached out and petted her mane, and scratched behind her ears. She snorted again, the side of her face pressed up against the grate as she chewed on the carrots, and Doyle felt a wave of relief come over him. <br /><br />\"It's good to see you,\" Doyle said. \"You okay, girl? You look okay.\"<br /><br />As he ran a hand along her mane and quietly explained to her what had happened to him, Doyle reached into one of the leather saddlebags at her side, rummaging through a collection of his traveling supplies for anything useful he may have left behind. After a moment, he produced a <b>honey tincture</b>, which he had bought back in Port Warren after getting a nasty cut on a broken piece of one of the Limited Edition Overglazed Bowls. Maybe he'd need it again, he thought.<br /><br />\"I miss you,\" he said as she wandered back into the dark. \"I'll find a way back, okay?\""
                },
                {
                    "conditions": [
                        {
                            "c3-0": "yes"
                        }
                    ],
                    "text": "Eyes still fixed on the darkness of the village ahead, Doyle reached into his bag and retrieved the <b>carrots</b> he had found in the root cellar. He held them by their green stalks and reached through the grates of the portcullis, dangling them ahead and softly banging them against the iron.<br /><br />\"Blondie,\" he whispered. Then he chirped, as he did any time he wanted to get her attention. \"Blondie, are you out there? Are you out there, girl?\"<br /><br />He watched for shadows in the orange glow against the houses ahead, but there was nothing there. Again he chirped, the carrots still dangling, and he looked for any sign of her. Just as he began to think he should give up, he heard a familiar snort in the darkness, then a dark shape approached.<br /><br />Blondie emerged from the night, the cart still rolling behind her, and walked up to the portcullis, immediately grabbing the carrots from Doyle's hand. He reached out and petted her mane, and scratched behind her ears. She snorted again, the side of her face pressed up against the grate as she chewed on the carrots, and Doyle felt a wave of relief come over him. <br /><br />\"It's good to see you,\" Doyle said. \"You okay, girl? You look okay.\"<br /><br />As he ran a hand along her mane and quietly explained to her what had happened to him, Doyle reached into one of the leather saddlebags at her side, rummaging through a collection of his traveling supplies for anything useful he may have left behind. After a moment, he produced a <b>honey tincture</b>, which he had bought back in Port Warren after getting a nasty cut on a broken piece of one of the Limited Edition Overglazed Bowls. Maybe he'd need it again, he thought.<br /><br />\"I miss you,\" he said as she wandered back into the dark. \"I'll find a way back, okay?\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-20"
                }
            ],
            "solutions": []
        },
        "s2-13.3": {
            "title": "A Gift for Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"We're friends now,\" Doyle said, unsure whether he was reassuring himself or Ed. \"I just want you to know &mdash; as a friend, I mean &mdash; I wasn't trying to rob you.\"<br /><br />\"It's okay, mister,\" Ed said. \"We're both on edge.\"<br /><br />\"I'm a believer in Yabiz, okay? Me and you, we're alike that way.\"<br /><br />\"Well, maybe not&mdash;\"<br /><br />\"We're similar. Similar in that regard.\"<br /><br />\"Right,\" Ed said, nodding. \"Similar, yes.\"<br /><br />\"I thought that if I took the knife, I could deescalate things,\" Doyle said. He pulled Ed's dagger from his pack and set it down on the sarcophagus, sliding it toward him hilt first. \"It was a mistake, okay? I shouldn't have taken this. So, here &mdash; It's yours.\"<br /><br />\"Thanks,\" Ed said. He took the dagger back and stared down at it for a moment, the polished steel glinting in the torchlight. \"This was a gift, actually. Father Payton gave it to me at the end of my first year here. Had it wrapped up in a felt-lined box, a little ribbon around it and everything. I think it was probably Ms. Milton that did that, but still.\"<br /><br />\"It's important to you, then?\"<br /><br />Ed nodded. \"I guess it is.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-13.15"
                }
            ],
            "solutions": []
        },
        "s2-8.2": {
            "title": "Outside the Temple",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "As Doyle stepped out through the broken door of the Temple of Yabiz, he felt a strange sense of unease. The courtyard was silent &mdash; there were no city guards around, and Captain Aldo's imposing form was nowhere in sight &mdash; yet he felt as if he were not alone, as if he were being watched. He glanced around the corner of the temple and saw no one, then returned to the path, palms clenching and unclenching as he kicked a bit of dirt onto the blood trail ahead of him. <br /><br />Then he saw a shape in the corner of his eye. It was high above him, in one of the windows of the keep that was still lit; a black silhouette of a man back-lit by some candle or lantern, both hands propped on the stone window sill where he stood, staring down at Doyle. For a moment, Doyle stared back, his mouth slightly agape, until the man turned and left the window. <br /><br />\"Don't think about it,\" Doyle whispered to himself. \"Just don't think about it.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue to the courtyard",
                    "target": "s2-6"
                }
            ],
            "solutions": []
        },
        "s2-10.2": {
            "title": "The Cleric's Journal",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "<i>August 7, 498</i><br /><br /><i>The bell is ringing in the tower. Don't know what's happening. Gathering villagers seems unwise, given illness? Can't find Mr. Clifford, but left him a note. Have to find a solution immediately.</i><br /><br /><i>Spoke to Mr. Palmer and Mr. Tate. Said they hadn't seen Captain Aldo either. Said half the barracks is empty now, but don't know anything more than I do. They're worried too. Everybody is nervous.</i><br /><br /><i>Watched for ships sailing out from the keep. Mr. Haley once told me there's a passage out from the keep. Escape route for the Carden family. Leads down to the Endless Sea. Worried they may be leaving us here, or maybe Atwater rep left that way. Haven't seen anybody, though.</i><br /><br /><i>Will insist on entry to the keep in the morning.</i>"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-9"
                }
            ],
            "solutions": []
        },
        "s2-7.1": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-24": "yes"
                        }
                    ],
                    "text": "Doyle pulled the roll of bandages from his bag and held it out toward Wilda. She eyed it for a moment, then looked at Leland and sighed. Shaking her head, she turned back to Doyle.<br /><br />\"Appreciate it,\" she said, \"but I don't think this'll help. What I need is a way to close up this wound &mdash; maybe a suture kit, or even just a needle and thread. Something like that.\"<br /><br />\"You don't want it?\"<br /><br />\"You might need it. Let me know if you find anything else.\""
                },
                {
                    "conditions": [
                        {
                            "c2-25": "yes"
                        }
                    ],
                    "text": "Doyle pulled the honey tincture from his bag and held it out to Wilda. She eyed it for a moment, then took it from his hand and uncorked it, gently wafting the opening, a curious expression on her face. Then she corked it again and gave it back.<br /><br />\"What the hell is this?\" she asked.<br /><br />\"A tincture,\" Doyle said. \"It's made from honey. I bought it from a druid in Port Warren, and he told me it could cure just about anything. It was blessed by a Grand Cleric of Yabiz, so&mdash;\"<br /><br />\"How do you know it works?\"<br /><br />\"The druid drew a big crowd. I don't think he could've sold so much if these things didn't work.\"<br /><br />Wilda shook her head. \"Let me know if you find anything else.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-7"
                }
            ],
            "solutions": []
        },
        "s2-7.2": {
            "title": "Talking to Wilda",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I went to the Temple of Yabiz,\" Doyle said. \"There was a journal inside and&mdash;\"<br /><br />\"Father Payton,\" Wilda said. \"Was he there? Is he okay?\"<br /><br />Doyle paused for a moment, then shook his head. Wilda didn't say anything; she just nodded and glanced at Leland, then stared down at the floor.<br /><br />\"The journal mentioned an escape route in the keep,\" Doyle continued. \"It said that there was a secret passage somewhere that led out to the Endless Sea, to a dock, or something like that.\"<br /><br />\"That's a plan, I guess. Better than nothing.\"<br /><br />Doyle nodded. He couldn't help but think of the Atwater rep the journal had mentioned as well. Maybe they were still inside the keep, Doyle thought, and maybe they needed help; maybe they'd be so grateful for some help that they'd be willing to do anything for Doyle in return. Doyle cringed at the thought &mdash; the only reasonable course of action was to just find a way out, debts be damned &mdash; but still it appealed to him. Anything could happen, after all. <br /><br />\"There's still Leland, though,\" Wilda said. \"We can't move him &mdash; not yet, at least.\""
                },
                {
                    "conditions": [
                        {
                            "c2-23": "yes"
                        }
                    ],
                    "text": "\"I went to the Temple of Yabiz,\" Doyle said. \"There was a journal inside and&mdash;\"<br /><br />\"Father Payton,\" Wilda said. \"Was he there? Is he okay?\"<br /><br />Doyle paused for a moment, then shook his head. Wilda didn't say anything; she just nodded and glanced at Leland, then stared down at the floor.<br /><br />\"The journal mentioned an escape route in the keep,\" Doyle continued. \"It said that there was a secret passage somewhere that led out to the Endless Sea, to a dock, or something like that.\"<br /><br />\"That's a plan, I guess. Better than nothing.\"<br /><br />Doyle nodded. He couldn't help but think of the Atwater rep the journal had mentioned as well. Maybe they were still inside the keep, Doyle thought, and maybe they needed help; maybe they'd be so grateful for some help that they'd be willing to do anything for Doyle in return. Doyle cringed at the thought &mdash; the only reasonable course of action was to just find a way out, debts be damned &mdash; but still it appealed to him. Anything could happen, after all. <br /><br />Leland tried to smile, then grimaced in pain. \"I'm up for it.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-7"
                }
            ],
            "solutions": []
        },
        "s2-7.3": {
            "title": "Talking to Wilda",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I got something I think you can use,\" Doyle said. He rummaged through his things until he found the <b>surgeon's bag,</b> then presented it to Wilda. \"Will this do it?\"<br /><br />Her eyes widened, candlelight glinting in the brown of her pupils, and she snatched the bag from him, quickly opening it and rifling through the contents. She pulled out a pair of pliers, and a half-used roll of bandages, and pushed them all aside. Then she produced the suture kit and held it up to the light, a slight smile showing on her face.<br /><br />\"This is it,\" she said, nodding as she opened the case. She stopped for a moment and looked up at Doyle, the smile still there. \"This is exactly it. This is perfect.\"<br /><br />\"Glad I could help,\" Doyle said. He watched her as she began preparing the sutures, then turned to Leland, who groaned as she started to work at his wound. <br /><br />The image of her smile was burned into his mind. Something about it reminded him of Nela; they didn't really look all that similar, as Nela was older and taller, with long blonde hair where Wilda's was black, and Nela had a slender frame, where Wilda was more stout and muscular. It was just a feeling, Doyle thought. When Wilda smiled at him, it felt strangely familiar.<br /><br />\"Give me a minute,\" Wilda said. \"I'll have him fixed up pretty quick.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-7.4"
                }
            ],
            "solutions": []
        },
        "s2-7.4": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-22": "yes"
                        }
                    ],
                    "text": "Doyle waited in the loft as Wilda worked. After a few minutes of flinching and groaning, she leaned back to look over the wound &mdash; she smiled, dabbing at the stitched area with one of her red-stained washcloths &mdash; then brushed Leland's hair from his face again and whispered something in his ear. He nodded in response, his face strained, and looked down at the wound himself. <br /><br />\"That looks really good,\" Doyle said. \"You feeling better?\"<br /><br />Leland shook his head. \"Not really.\"<br /><br />\"Better enough,\" Wilda said. \"It'll have to be. We need to leave.\"<br /><br />\"Where did you learn to do that?\" Doyle asked. \"The stitches, I mean.\"<br /><br />\"My mother is &mdash; she was the wise woman in Henketh,\" Wilda said. Something seemed to turn on her face, her lip curling up slightly. For a moment, she said nothing, eyes fixed on the blood-spattered water bowl in front of her. Then she looked up at Doyle. \"I learned a lot from her when I was young.\""
                },
                {
                    "conditions": [
                        {
                            "c2-22": "unset"
                        }
                    ],
                    "text": "Doyle waited in the loft as Wilda worked. After a few minutes of flinching and groaning, she leaned back to look over the wound &mdash; she smiled, dabbing at the stitched area with one of her red-stained washcloths &mdash; then brushed Leland's hair from his face again and whispered something in his ear. He nodded in response, his face strained, and looked down at the wound himself. <br /><br />\"That looks really good,\" Doyle said. \"You feeling better?\"<br /><br />Leland shook his head. \"Not really.\"<br /><br />\"Better enough,\" Wilda said. \"As soon as we find a way out, we need to leave.\"<br /><br />\"Where did you learn to do that?\" Doyle asked. \"The stitches, I mean.\"<br /><br />\"My mother is &mdash; she was the wise woman in Henketh,\" Wilda said. Something seemed to turn on her face, her lip curling up slightly. For a moment, she said nothing, eyes fixed on the blood-spattered water bowl in front of her. Then she looked up at Doyle. \"I learned a lot from her when I was young.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-7"
                }
            ],
            "solutions": []
        },
        "s2-7.5": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"We should get moving,\" Doyle said. \"Look for the escape route in the keep.\"<br /><br />Wilda nodded. \"I hope Payton knew what he was talking about.\"<br /><br />The two of them stood, Wilda helping Leland scoot over to the edge of the loft as Doyle climbed down the ladder. The man's feet dangled as he tried to inch himself onto the rungs, and Doyle helped him from below, straining under his weight as he lowered him down. Leland stumbled as he hit the ground, one hand clamped to the stitches at his side, a grimace on his face.<br /><br />Doyle and Wilda stood on either side of their wounded companion, his arms around their shoulders for balance; it didn't seem that he could quite walk on his own. The three of them limped by the rows of palfreys on their way out to the courtyard, and Doyle eyed each as they passed. They seemed nervous as the trio moved by them, agitated by their presence.<br /><br />\"Wait a minute,\" Leland said, his voice strained. \"Please, just a second.\""
                },
                {
                    "conditions": [
                        {
                            "c2-33": "yes"
                        }
                    ],
                    "text": "\"Straight for the keep, then,\" Doyle said. \"We'll find the escape route in there.\"<br /><br />Wilda nodded. \"I hope Payton knew what he was talking about.\"<br /><br />The two of them stood, Wilda helping Leland scoot over to the edge of the loft. He groaned as she moved him, his breaths rapid and short, and Doyle saw the bloodstains on the wall where he'd been leaning. Then Doyle climbed down the ladder and watched Leland's feet dangle as he tried to inch himself onto the rungs. He looked as if his arms might give out as he tried to hold on, so Doyle helped him from below, straining under his weight as he lowered him down. Leland fell to his knees as he hit the ground, one hand clamped to the wound at his side, a grimace on his face.<br /><br />Doyle and Wilda stood on either side of Leland, his arms around their shoulders for balance; it didn't seem that he could walk much on his own. The three of them limped by the rows of palfreys on their way out to the courtyard, and Doyle eyed each as they passed. They seemed nervous as the trio moved by them, agitated by their presence.<br /><br />\"Stop,\" Leland said, his voice strained. \"Please, please stop.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-18"
                }
            ],
            "solutions": []
        },
        "s2-18": {
            "title": "The Courtyard",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle and Wilda slowed to a stop, both breathing heavily as Leland held on to them, his teeth gritted. He seemed to be in a great deal of pain, as if the short walk from the stables had jostled something internally and he imagined it might settle if he left it alone. Wilda patted him on the back, mumbling some encouragement to him, as Doyle looked around the courtyard.<br /><br />It was still empty, the moon still bright overhead. The blood trail still led from the outer gate all the way to the keep, branching off the to the Temple of Yabiz and the servants' quarters. Something was off, though. From the corner of his eye, Doyle thought he saw something moving &mdash; quick and agile, not like the lumbering march of the city guards or Captain Aldo &mdash; over near the outer gate, but he couldn't quite tell. It was just a shadow, there and then gone.<br /><br />\"I don't feel great about this,\" Doyle said. \"Let's get going.\"<br /><br />\"Just a minute,\" Leland said. \"I just &mdash; I need a minute.\"<br /><br />\"Okay, but&mdash;\"<br /><br />Before he could finish, he heard the quiet <i>creak</i> of a door. Wilda and Leland clearly did too &mdash; all three of them perked up, looking around for the source &mdash; but they didn't see anything. Doyle looked at Wilda, who looked at Leland, who shook his head, his face twisted in pain.<br /><br />\"Come on,\" Wilda said, \"we need to move.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-18.1"
                }
            ],
            "solutions": []
        },
        "s2-18.1": {
            "title": "Outside the Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle and Wilda began to walk again, practically dragging Leland &mdash; he groaned with every step, his hand digging into Doyle's shoulder &mdash; toward the inner gate that marked the front entrance of the Salt Keep. The gate was open, as it had been since Doyle arrived, but as the trio drew closer, they heard another sound; this one was louder, like metal scraping on stone, some kind of mechanism at work. <br /><br />Then Doyle turned and saw it: the portcullis in the outer gate was slowly rising. Somebody must have sneaked into the gatehouse. An echoing <i>clang</i> of metal against metal came from the same direction, and though Doyle didn't know what it meant, he was certain that anybody still in Cardwyke could hear it. <br /><br />\"Keep going,\" Doyle said, the panic obvious in his voice. \"Faster, please.\"<br /><br />As soon as they stepped up to the inner gate &mdash; a pair of massive, braced double doors carved from heavy oak &mdash; the dirt path gave way to smooth sandstone flooring, and Leland stumbled. He dropped from Wilda and Doyle's shoulders, letting out a small scream as he fell to his knees and braced himself with one hand. Wilda bent down to help him up, and Doyle looked back toward the outer gate.<br /><br />They were coming. Just silhouettes at that distance &mdash; black shapes in the moonlight &mdash; but the unmistakable sound of clanking steel and mail gave them away. Then Doyle turned to Leland."
                }
            ],
            "choices": [],
            "solutions": [
                {
                    "text": "Pick him up",
                    "targetOnSuccess": "s2-18.2",
                    "targetOnFailure": "s2-18.2",
                    "conditionsSetOnSuccess": [
                        {
                            "c2-27": "yes"
                        },
                        {
                            "c2-28": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-27": "no"
                        },
                        {
                            "c2-28": "no"
                        }
                    ],
                    "difficulty": {
                        "gd": "5"
                    }
                },
                {
                    "text": "Convince him to get up",
                    "targetOnSuccess": "s2-18.2",
                    "targetOnFailure": "s2-18.2",
                    "conditionsSetOnSuccess": [
                        {
                            "c2-27": "yes"
                        },
                        {
                            "c2-29": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-27": "no"
                        },
                        {
                            "c2-29": "no"
                        }
                    ],
                    "difficulty": {
                        "cd": "5"
                    }
                }
            ]
        },
        "s2-18.2": {
            "title": "The Inner Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-28": "yes"
                        }
                    ],
                    "text": "\"Come on,\" Doyle said, \"there's no time!\"<br /><br />Wilda motioned for him to help, and the two of them squatted down on either side of Leland, wrapping his arms around their shoulders and lifting in unison. He let out another agonized groan as they pulled him up, and in a moment of panic, Doyle feared his wound may have reopened; he seemed to recover quickly, though, a small grimace on his face as they dragged him through the inner gate. <br /><br />The inside was a wide, sandstone passageway with unlit torch sconces lining the walls. Two matching doors &mdash; both simple but sturdy, iron-braced wood likely meant for servants or guards &mdash; marked the walls on either side, and at the end Doyle saw moonlight again. It was the open air of the inner ward. Then he saw purple and white at the end of the passageway, and Wilda did too. A city guard stood ahead of them, his eyes glinting wet in the light of Doyle's torch, and the trio froze.<br /><br />\"Turn back,\" Leland said. \"Let's go back.\"<br /><br />Doyle didn't say anything. He just looked back the way they had come and watched the imposing form of Captain Aldo approach with two guards flanking him, all of them silent other than the metallic clank of shifting armor and the heavy thud of footsteps. Throat tight, Doyle glanced back at the guard on the other end, then at the two doors on either side of the passageway."
                },
                {
                    "conditions": [
                        {
                            "c2-28": "no"
                        }
                    ],
                    "text": "\"Come on,\" Doyle said, \"there's no time!\"<br /><br />Wilda motioned for him to help, and the two of them squatted down on either side of Leland, wrapping his arms around their shoulders and lifting in unison. He let out another agonized groan, and Doyle looked down to see a red stain forming on his tunic at his abdomen. His wound must have reopened, but as Doyle glanced up at Wilda, she didn't seem to have noticed. Leland kept groaning, a look of breathless struggle on his face as they dragged him through the inner gate.<br /><br />The inside was a wide, sandstone passageway with unlit torch sconces lining the walls. Two matching doors &mdash; both simple but sturdy, iron-braced wood likely meant for servants or guards &mdash; marked the walls on either side, and at the end Doyle saw moonlight again. It was the open air of the inner ward. Then he saw purple and white at the end of the passageway, and Wilda did too. A city guard stood ahead of them, his eyes glinting wet in the light of Doyle's torch, and the trio froze.<br /><br />\"Turn back,\" Leland wheezed. \"Go back.\"<br /><br />Doyle didn't say anything. He just looked back the way they had come and watched the imposing form of Captain Aldo approach with two guards flanking him, all of them silent other than the metallic clank of shifting armor and the heavy thud of footsteps. Throat tight, Doyle glanced back at the guard on the other end, then at the two doors on either side of the passageway."
                },
                {
                    "conditions": [
                        {
                            "c2-29": "yes"
                        }
                    ],
                    "text": "\"Come on,\" Doyle said, squatting down next to Leland. \"We can still get out of here, you just need to get back up. Just keep moving a little bit more.\"<br /><br />Leland shook his head, grimacing. \"I can't &mdash; I can't do it.\"<br /><br />\"Absolutely you can,\" Doyle said. He reached out to Leland, who wrapped a clammy hand around Doyle's, and nodded. \"I promise, you can.\"<br /><br />With Doyle's help and a pained groan, Leland stood up. He hunched slightly as he regained his balance, one hand at the wound on his abdomen, and in a moment of panic, Doyle feared his wound may have reopened; he seemed to recover quickly, though, then wrapped his arms around Doyle and Wilda's shoulders, a small grimace on his face as they dragged him through the inner gate. <br /><br />The inside was a wide, sandstone passageway with unlit torch sconces lining the walls. Two matching doors &mdash; both simple but sturdy, iron-braced wood likely meant for servants or guards &mdash; marked the walls on either side, and at the end Doyle saw moonlight again. It was the open air of the inner ward. Then he saw purple and white at the end of the passageway, and Wilda did too. A city guard stood ahead of them, his eyes glinting wet in the light of Doyle's torch, and the trio froze.<br /><br />\"Turn back,\" Leland said. \"Let's go back.\"<br /><br />Doyle didn't say anything. He just looked back the way they had come and watched the imposing form of Captain Aldo approach with two guards flanking him, all of them silent other than the metallic clank of shifting armor and the heavy thud of footsteps. Throat tight, Doyle glanced back at the guard on the other end, then at the two doors on either side of the passageway.<br />"
                },
                {
                    "conditions": [
                        {
                            "c2-29": "no"
                        }
                    ],
                    "text": "\"Come on,\" Doyle said, squatting down next to Leland. \"We can still get out of here, you just need to get back up. If you don't get up, we'll really be in trouble.\"<br /><br />Leland shook his head, grimacing. \"I can't &mdash; I can't do it.\"<br /><br />\"You have to,\" Doyle said. He reached out to Leland, who wrapped a clammy hand around Doyle's, his head shaking. \"Come on, there's no time!\"<br /><br />With Doyle's help and an agonized groan, Leland stood up. He hunched dramatically as he regained his balance, one hand at the wound on his abdomen, and Doyle saw a red stain forming on his tunic where he held it. The wound must have reopened, but as Doyle glanced up at Wilda, she didn't seem to have noticed. Silent, Doyle wrapped one of his arms around his shoulder while Wilda took the other, a look of breathless struggle on his face as they dragged him through the inner gate.<br /><br />The inside was a wide, sandstone passageway with unlit torch sconces lining the walls. Two matching doors &mdash; both simple but sturdy, iron-braced wood likely meant for servants or guards &mdash; marked the walls on either side, and at the end Doyle saw moonlight again. It was the open air of the inner ward. Then he saw purple and white at the end of the passageway, and Wilda did too. A city guard stood ahead of them, his eyes glinting wet in the light of Doyle's torch, and the trio froze.<br /><br />\"Turn back,\" Leland wheezed. \"Go back.\"<br /><br />Doyle didn't say anything. He just looked back the way they had come and watched the imposing form of Captain Aldo approach with two guards flanking him, all of them silent other than the metallic clank of shifting armor and the heavy thud of footsteps. Throat tight, Doyle glanced back at the guard on the other end, then at the two doors on either side of the passageway.<br />"
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-18.3"
                }
            ],
            "solutions": []
        },
        "s2-18.3": {
            "title": "The Inner Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Without hesitation, Wilda dashed toward the nearest door. Leland's full weight shifted onto Doyle and he braced himself against the wall, glancing back and forth as Wilda fiddled with the brass handle. His legs shook, and he felt Leland's sweat on his face as the man's head tilted back against his.<br /><br />\"Open it,\" Doyle said, \"come on!\"<br /><br />\"It's <em>locked</em>,\" Wilda snapped. She reached down to her boot and produced a small dagger, which she immediately wedged between the door and the jamb. \"I'm trying, okay?\" <br /><br />\"Come on,\" Doyle said again, and he stepped back, leaving Leland to lean against the wall. Captain Aldo's footsteps were thumping louder and louder, and Doyle scrambled for the other door, but it was locked, too. He glanced at the lone guard at the end of the passageway &mdash; he was marching toward them now, eyes blank and face contorted in open-mouthed horror &mdash; and then turned to Wilda, his heart pounding, hands clenching and unclenching. \"Come on, Wilda, come on!\"<br /><br />\"I think I've got it,\" Wilda said. She jiggled the dagger against the jamb a few more times and twisted, and a noticeable <em>crack</em> came from the door as it popped open. \"Okay, let's&mdash;\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-18.4"
                }
            ],
            "solutions": []
        },
        "s2-18.4": {
            "title": "The Inner Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-27": "no"
                        }
                    ],
                    "text": "Before she could finish, Leland's scream cut her off. They both turned to look as he slid sideways against the wall, one hand pressed against the wound on his abdomen, in an attempt to back away from Captain Aldo. He couldn't cover much distance, though, and as the Captain closed the gap between them, he reached out with one hand, his steel gauntlet still caked with dirt and blood, and grabbed Leland by the throat. It appeared almost effortless as he lifted the smaller man from the ground.<br /><br />\"Leland!\" Wilda screamed, rushing at them. \"Hold on!\"<br /><br />Doyle stumbled backwards, frozen with terror. He watched as Captain Aldo pressed Leland up against the wall, his free hand pulling his broadsword from its scabbard, and he watched as Wilda jabbed her dagger between two plates below the Captain's shoulder &mdash; he shifted in place, as if shocked by the impact, but indifferent &mdash; and he watched as the Captain's broadsword slid into Leland's gut, all the way through to the wall, then tore sideways and out. A pained groan and a gurgle slipped from Leland's lips as red poured from his torso, followed by the sickening splash of intestines and viscera against the pooling blood on the sandstone below. <br /><br />Then the Captain let go, and Leland's corpse dropped and crumpled like an empty sack at his feet. Wilda screamed, slipping backwards and slamming into the wall behind her, blood-stained dagger still in her hand. As the guards flanking Captain Aldo approached, Doyle hesitated."
                },
                {
                    "conditions": [
                        {
                            "c2-27": "yes"
                        }
                    ],
                    "text": "Before she could finish, Leland's scream cut her off. <br /><br />They both turned to look as he slid sideways against the wall, one hand hovering by the wound on his abdomen, in an attempt to back away from Captain Aldo. He couldn't cover much distance, though, and as the Captain closed the gap between them, Leland rushed ahead, screaming in pain as he collided with the armored man, who stumbled backwards a few feet, his head slamming into the sandstone wall behind him. He looked shaken, but didn't lose his footing, then immediately reached out, his steel gauntlet still caked with dirt and blood, and grabbed Leland by the throat. It appeared almost effortless as he lifted the smaller man from the ground.<br /><br />\"Leland!\" Wilda screamed, rushing at them. \"Hold on!\"<br /><br />Doyle stumbled backwards, frozen with terror. He watched as Captain Aldo pressed Leland up against the wall, his free hand pulling his broadsword from its scabbard, and he watched as Wilda jabbed her dagger between two plates below the Captain's shoulder &mdash; he shifted in place, as if shocked by the impact, but indifferent &mdash; and he watched as the Captain's broadsword slid into Leland's gut, all the way through to the wall, then tore sideways and out. A pained groan and a gurgle slipped from Leland's lips as red poured from his torso, followed by the sickening splash of intestines and viscera against the pooling blood on the sandstone below. <br /><br />Then the Captain let go, and Leland's corpse dropped and crumpled like an empty sack at his feet. Wilda screamed, slipping backwards and falling against the wall behind her, blood-stained dagger still in her hand. As the guards flanking Captain Aldo approached, Doyle hesitated."
                }
            ],
            "choices": [],
            "solutions": [
                {
                    "text": "Leave Wilda behind",
                    "targetOnSuccess": "s2-18.5",
                    "targetOnFailure": "s2-18.5",
                    "conditionsSetOnSuccess": [
                        {
                            "c2-34": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-34": "no"
                        },
                        {
                            "inj11": "yes"
                        }
                    ],
                    "difficulty": {
                        "ld": "3"
                    }
                },
                {
                    "text": "Help Wilda fight",
                    "targetOnSuccess": "s2-18.5",
                    "targetOnFailure": "s2-18.5",
                    "conditionsSetOnSuccess": [
                        {
                            "c2-35": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-35": "no"
                        },
                        {
                            "inj11": "yes"
                        }
                    ],
                    "difficulty": {
                        "gd": "8"
                    }
                },
                {
                    "text": "Create a diversion",
                    "targetOnSuccess": "s2-18.5",
                    "targetOnFailure": "s2-18.5",
                    "conditionsSetOnSuccess": [
                        {
                            "c2-37": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-37": "no"
                        },
                        {
                            "inj11": "yes"
                        }
                    ],
                    "difficulty": {
                        "sd": "6"
                    }
                },
                {
                    "text": "Exploit the Captain's dizziness",
                    "targetOnSuccess": "s2-18.5",
                    "targetOnFailure": "s2-18.5",
                    "conditions": [
                        {
                            "c2-27": "yes"
                        }
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-36": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-36": "no"
                        },
                        {
                            "inj11": "yes"
                        }
                    ],
                    "difficulty": {
                        "gd": "4"
                    }
                }
            ]
        },
        "s1-3.1": {
            "title": "The Private Room",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle peeked through the half-open door, one hand on the jamb as he looked inside.<br /><br />\"Sorry to intrude,\" he said. \"Is anyone here? I need some help, please.\"<br /><br />He pushed the door open the rest of the way, but there was nobody there. Inside was a room that seemed to double as a bedroom and storage room; one side held a small, feather-stuffed mattress and a bookcase lined intermittently with leather-bound texts and cleaning supplies, while the other side was dominated by stacks of barrels and wooden crates, glass bottles sitting precariously on top. <br /><br />On the wall by the bed was a corkboard with various scraps of parchment pinned to it &mdash; most looked like lists and reminders scrawled in sloppy black ink &mdash; and below it was an iron-braced trunk, large and seemingly unlocked. On a wooden stand nearby was a tall, oval-shaped mirror, the glass dusty and speckled with dirt. Doyle waved at it, and his reflection waved back.<br /><br />A frayed red throw rug next to the bed seemed to delineate the two halves of the room: one for life, and one for toil. Doyle wondered if that actually worked for whoever lived there. It had been so long since he'd been away from Blondie and the cart that he found it hard to believe that somebody could actually separate things that way. Usually it seemed like toil was all."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle sat on the edge of the feather-stuffed bed and looked around the room, one hand sliding across the sheets. A bookcase stood just ahead of him, and off to the side was an iron-braced trunk, a note-covered corkboard nailed to the wall above it. Next to the trunk was an oval-shaped mirror on a wooden stand, the glass dusty and speckled with dirt.<br /><br />Then Doyle stood up, glancing at the wall of barrels and crates that dominated the other side of the room. There must have been enough provisions to last a month or more in there. Sighing, he thought of the stacks of unsold ceramics in his cart outside. "
                }
            ],
            "choices": [
                {
                    "text": "Look at the corkboard",
                    "target": "s1-3.2"
                },
                {
                    "text": "Open the trunk",
                    "target": "s1-3.3",
                    "conditions": [
                        {
                            "c1-13": "unset"
                        }
                    ],
                    "items": [
                        "i1-4"
                    ],
                    "setsConditions": [
                        {
                            "c1-13": "yes"
                        }
                    ]
                },
                {
                    "text": "Go back to the main room",
                    "target": "s1-3"
                },
                {
                    "text": "Look in the mirror",
                    "target": "s1-3.4"
                },
                {
                    "text": "Look at the barrels and crates",
                    "target": "s1-3.5",
                    "items": [
                        "i1-5"
                    ]
                }
            ],
            "solutions": []
        },
        "s1-3.2": {
            "title": "On the Corkboard",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The corkboard looked ancient, covered from top to bottom in pin holes and barren spots where all the cork had crumbled away. Clusters of loose pins poked from it here and there, and around them were various bits of parchment with black-inked notes scrawled across them, most crumpled and stained as if they had started their lives on the wet surface of a bar.<br /><br />Doyle scanned the parchments for anything relevant, but most seemed mundane: a list of food items probably meant for a market, and a series of names with a sum of gold coins next to each, and the start of a poem addressed to somebody named <i>Hallie</i>, which seemed to peter out into a scribble after a few lines, as if the author had grown too disgusted with their own writing to continue.<br /><br />One note stood out. It was just a few words in black ink, pinned near the center:<br /><br /><i>July 28 - Atwater Rep - open early</i><br /><br />That was about a week and a half ago. Doyle didn't know what to make of it."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-3.1"
                }
            ],
            "solutions": []
        },
        "s1-3.3": {
            "title": "In the Trunk",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle squatted in front of the trunk and pulled the latch &mdash; it was made of heavy iron with room for a padlock, but was hanging open and loose &mdash; then opened it, imagining he might find some clue as to what was happening in Cardwyke, or where the owner of the Golden Calf might be. The lid was heavier than he expected, and it banged against the wall as he lifted it.<br /><br />Instead of a clue, he found a pile of loose tools and supplies, most rusted or broken, many that looked too old to be useful in any way. He rifled through them for a moment &mdash; an old wood scraper, and a balled-up pile of black-stained rags, and a cracked piece of wood that looked like it may have been a chair leg &mdash; before he found a <b>coiled stretch of rope</b> buried underneath. <br /><br />\"I'm not stealing this,\" he shouted to nobody in particular as he pulled the rope from the trunk and pocketed it. \"I might need this &mdash; it's an emergency!\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-3.1"
                }
            ],
            "solutions": []
        },
        "s1-4.1": {
            "title": "The Well",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The village square was silent as Doyle sat down on the edge of the cobblestone well and pulled the coil of rope and the iron hook from his bag. Blondie watched him from next to the Golden Calf as he unraveled the rope &mdash; she must have thought it was some kind of treat he was preparing &mdash; and threaded it through the eye of the hook.<br /><br />\"This'll work,\" he mumbled to himself. \"Good.\"<br /><br />After he tied off the rope, he draped the whole thing over the wooden overhang above the well like an oversized fishing line. Then he glanced back at Blondie as if she would be proud of him &mdash; her blank expression offered nothing &mdash; before leaning over the edge of the well and staring down into the dark. With his breath held, he began to lower it. <br /><br />Gradually it approached, swaying and clanging against the stone sides of the well, until it was hovering just above the bucket below. A wire handle was fastened to each side of the bucket in a semicircle shape, and after a few tries, Doyle managed to swing the hook under it. Slow and cautious, he raised the bucket up until it was close enough to grab.<br /><br />Inside was an iron pry bar, half submerged in a shallow layer of water that sloshed as Doyle dropped the bucket onto the cobblestone. The workman must have dropped it, he thought. Again he glanced at Blondie as he pocketed the tool, a prideful nod in her direction.<br /><br />She didn't respond."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-2"
                }
            ],
            "solutions": []
        },
        "s2-20.2": {
            "title": "The Gatehouse Door",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c3-0": "unset"
                        }
                    ],
                    "text": "The gatehouse door was tall, made from heavy wood reinforced with steel beams, with an eye-level hinged panel that one might use to identify a visitor. Doyle reached for the handle but found that it was locked; Wilda must have had a key and sealed it up behind her after lowering the portcullis. <br /><br />It probably wouldn't have been a good idea to raise that portcullis anyways, Doyle thought; Captain Aldo was still out there, after all, along with however many guards were following in his wake. "
                },
                {
                    "conditions": [
                        {
                            "c3-0": "yes"
                        },
                        {
                            "c4-0": "unset"
                        }
                    ],
                    "text": "The gatehouse door was tall, made from heavy wood reinforced with steel beams, with an eye-level hinged panel that one might use to identify a visitor. Doyle reached for the handle but found that it was locked; Wilda must have had a key and sealed it up behind her after lowering the portcullis. <br /><br />If he could find a way in, Doyle thought, he might be able raise the gate again and escape. It would be risky, because anybody still in the keep would hear it and know exactly what was happening, but it was worth a try. Once he was outside, all he would have to do was run.<br />"
                },
                {
                    "conditions": [
                        {
                            "c4-0": "yes"
                        },
                        {
                            "c3-61": "unset"
                        }
                    ],
                    "text": "The gatehouse door was tall, made from heavy wood reinforced with steel beams, with an eye-level hinged panel that one might use to identify a visitor. Doyle reached for the handle but found that it was locked; Wilda must have had a key and sealed it up behind her after lowering the portcullis. <br /><br />If he could find a way in, Doyle thought, he might be able raise the gate again and escape. It would be risky, because anybody still in the keep would hear it and know exactly what was happening, but it was worth a try. Once he was outside, all he would have to do was run.<br /><br />"
                },
                {
                    "conditions": [
                        {
                            "c4-0": "yes"
                        },
                        {
                            "c3-61": "yes"
                        }
                    ],
                    "text": "The gatehouse door was tall, made from heavy wood reinforced with steel beams, with an eye-level hinged panel that one might use to identify a visitor. While Doyle imagined it was usually sealed behind the guard manning the portcullis, it was currently wide open. The hinges creaked in the breeze. <br /><br />Doyle couldn't see much of the gatehouse beyond. He reached for the door the push it open the rest of the way, then hesitated. Something was moving inside."
                }
            ],
            "choices": [
                {
                    "text": "Go inside",
                    "target": "s4-27",
                    "conditions": [
                        {
                            "c3-61": "yes"
                        },
                        {
                            "c4-0": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c4-70": "yes"
                        }
                    ]
                },
                {
                    "text": "Turn back",
                    "target": "s2-20"
                }
            ],
            "solutions": []
        },
        "s2-6.2": {
            "title": "The Inner Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle followed the blood trail along the main path of the courtyard up to the inner gate of the Salt Keep. It was a wide sandstone passage through the high walls, lined on either side with service doors and unlit torch sconces, the dark openings of arrow slits looking down at Doyle from above. At the far end, Doyle saw moonlight again; it likely led all the way through to an inner ward. <br /><br />After a few steps into the passage, Doyle hesitated. Wilda and Leland were still back in the hay loft, and if there was any way he could avoid heading into the keep by himself, he was sure that it would be prudent to try. He had once considered hiring a bodyguard to travel with him and Blondie &mdash; he'd heard that the roads around Yulan could be dangerous, for example, given all the Malorins around there and their tendencies &mdash; but after interviewing a man during a stop in Dunmore, he gave up on the idea. It had come as a complete surprise to him what a price a simple swordsman could demand.<br /><br />Wilda didn't strike him as any kind of bodyguard, or really much of a fighter at all, but she gave Doyle the impression that she could probably defend herself if pressed. That was better than nothing."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Again Doyle followed the blood trail along the main path of the courtyard up to the inner gate of the Salt Keep. It was a wide sandstone passage through the high walls, lined on either side with service doors and unlit torch sconces, the dark openings of arrow slits looking down at Doyle from above. At the far end, Doyle saw moonlight again; it likely led all the way through to an inner ward. <br /><br />After a few steps into the passage, Doyle hesitated. Wilda and Leland were still back in the hay loft, and if there was any way he could avoid heading into the keep by himself, he was sure that it would be prudent to try. Sighing, he looked back toward the stables."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-6"
                }
            ],
            "solutions": []
        },
        "s2-7.6": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-33": "yes"
                        }
                    ],
                    "text": "\"I'm a bit worried here,\" Doyle said. He sat down next to the hay bale where he had been sleeping, then began absent-mindedly tugging at the strap on one of his boots. \"About Leland.\"<br /><br />Wilda wiped the sweat from Leland's brow. \"What about him?\"<br /><br />\"I understand that you don't think he's ready to move, I really do. But that man is still out there &mdash; Captain Aldo, you said? He's out there, and the guards are out there, and they may be able to get around that gate. I don't think it's safe for us to assume that it'll protect us for long.\"<br /><br />\"Of course it will,\" Wilda said. \"It's made to withstand a siege, so&mdash;\"<br /><br />\"They may have other ways around,\" Doyle said. He slid across the loft floor, bits of hay bunching under his breeches, until he was next to Wilda. Then he leaned in close and whispered in her ear. \"If you want him to have a chance, we need to get out of here now. He needs a real surgeon.\"<br /><br />Wilda didn't say anything. She just looked at Doyle, then at Leland, and brushed the hair from his forehead again. He grumbled at her touch, eyes closed and head swaying for a moment. Then she glanced down into the stables below, candlelight flickering in her eyes as she looked out the door toward the courtyard. Finally, she nodded.<br /><br />\"You might be right,\" she said. \"I guess so.\"<br /><br />\"We should go then. We should go right now.\"<br /><br />\"Okay,\" she said, standing and patting Leland to wake him. \"Okay, let's go.\" "
                },
                {
                    "conditions": [
                        {
                            "c2-33": "no"
                        }
                    ],
                    "text": "\"I'm a bit worried here,\" Doyle said. He sat down next to the hay bale where he had been sleeping, then began absent-mindedly tugging at the strap on one of his boots. \"About Leland.\"<br /><br />Wilda wiped the sweat from Leland's brow. \"What about him?\"<br /><br />\"I understand that you don't think he's ready to move, I really do. But that man is still out there &mdash; Captain Aldo, you said? He's out there, and the guards are out there, and they may be able to get around that gate. I don't think it's safe for us to assume that it'll protect us for long.\"<br /><br />\"Of course it will,\" Wilda said. \"It's made to withstand a siege, so&mdash;\"<br /><br />\"They may have other ways around,\" Doyle said. He slid across the loft floor, bits of hay bunching under his breeches, until he was next to Wilda. Then he leaned in close and whispered in her ear. \"If you want him to have a chance, we need to get out of here now. He needs a real surgeon.\"<br /><br />\"What he <em>needs</em> is to get this wound taken care of,\" Wilda said. There was a certain forcefulness to her voice that Doyle hadn't yet heard from her &mdash; it was somewhat intimidating &mdash; and he scooted back to give her some room. \"Who knows when we'd find a surgeon? Who knows if there's even a way out in the keep at all? You're just hoping.\"<br /><br />\"I am, but&mdash;\"<br /><br />\"You don't have any idea.\"<br /><br />\"I don't know for sure, but all I'm saying is that&mdash;\"<br /><br />\"I'm not leaving until he's ready. That's the end of it.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-7.5",
                    "conditions": [
                        {
                            "c2-33": "yes"
                        }
                    ]
                },
                {
                    "text": "Continue",
                    "target": "s2-7",
                    "conditions": [
                        {
                            "c2-33": "no"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-18.5": {
            "title": "The Inner Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-34": "yes"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he stumbled backwards, then, both hands pressed against the sandstone wall behind him. <em>You want a woman to care about you?</em> He nearly fell as Wilda jammed the dagger into Captain Aldo's back again; this time she found flesh, and the Captain shook her off and turned toward her as she scrambled away. <br /><br />The rest of the guards were converging, and Doyle was sweating, and with the sight the Captain looming over Wilda in the corner of his eye, he slipped through the door she had unlocked, then slammed it behind him."
                },
                {
                    "conditions": [
                        {
                            "c2-34": "no"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had  noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he stumbled backwards, then, both hands pressed against the sandstone wall behind him. <em>You want a woman to care about you?</em> He nearly fell as Wilda jammed the dagger into Captain Aldo's back again; again she hit steel, and the Captain shook her off before lurching toward Doyle again. The rest of the guards were converging, and Doyle was sweating, and with the sight of Wilda winding up to strike again in the corner of his eye, he ran for the door she had unlocked.<br /><br />\"Look out!\" Wilda screamed from behind him. <br /><br />Just as Doyle began to slip through the doorway, the spiked morning star of one of the city guards narrowly missed him, slamming instead into the wood of the door in front of him. With a thunderous <em>crack</em>, the door slammed shut with Doyle in its path, knocking him backwards and <b>bashing his head</b> into the sandstone wall behind him. Pain radiated through his skull, but still he managed to slip the rest of the way through, pulling the door shut behind him."
                },
                {
                    "conditions": [
                        {
                            "c2-35": "yes"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had  noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he rushed forward, then, crashing into Captain Aldo and sending him stumbling backwards. <em>You want a woman to care about you?</em> He nearly fell as Wilda took the opportunity to jam the dagger into Captain Aldo's back again; this time she found flesh, and the Captain shook her off, then turned toward her as she scrambled away. <br /><br />\"Go!\" Wilda said. \"We can't fight all of them!\"<br /><br />Doyle hesitated. \"But he's&mdash;\"<br /><br />\"What is wrong with you? Go!\"<br /><br />The rest of the guards were converging, and Doyle was sweating, and with the sight of Wilda turning to run in the corner of his eye, he turned to the door she had unlocked. Just as a city guard raised a spiked morning star against him, he slipped through the door and slammed it behind him."
                },
                {
                    "conditions": [
                        {
                            "c2-35": "no"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had  noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he rushed forward, then, crashing into Captain Aldo and sending him stumbling backwards. <em>You want a woman to care about you?</em> He nearly fell as Wilda took the opportunity to jam the dagger into Captain Aldo's back again; this time she found flesh, and the Captain shook her off, then turned toward her as she scrambled away. <br /><br />\"Go!\" Wilda said. \"We can't fight all of them!\"<br /><br />Doyle hesitated. \"But he's&mdash;\"<br /><br />\"What is wrong with you? Go!\"<br /><br />The rest of the guards were converging, and Doyle was sweating, and with the sight of Wilda turning to run in the corner of his eye, he turned to the door she had unlocked. Just as he began to slip inside, though, the spiked morning star of one of the city guards narrowly missed him, slamming instead into the wood of the door in front of him. With a thunderous <em>crack</em>, it slammed shut with Doyle in its path, knocking him backwards and <b>bashing his head</b> into the sandstone wall behind him. Pain radiated through his skull, but still he managed to pull the door shut behind him."
                },
                {
                    "conditions": [
                        {
                            "c2-36": "yes"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He still seemed to be reeling from the hit he had taken against the wall &mdash; he swayed from side to side as he walked &mdash; but it didn't seem slow him down; he was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had  noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he rushed forward, then, crashing into Captain Aldo and sending him stumbling backwards. <em>You want a woman to care about you?</em> He nearly fell as Wilda took the opportunity to jam the dagger into Captain Aldo's back again; this time she found flesh, and the Captain shook her off, then turned toward her as she scrambled away. He seemed off-kilter, one hand reaching out to the sandstone for support, but still lurched forward. <br /><br />\"Go!\" Wilda said. \"We can't fight all of them!\"<br /><br />Doyle hesitated. \"But he's&mdash;\"<br /><br />\"You idiot, go!\"<br /><br />The rest of the guards were converging, and Doyle was sweating, and with the sight of Wilda starting to run in the corner of his eye, he turned to the door she had unlocked. Just as a city guard raised a spiked morning star against him, he slipped through the door and slammed it behind him."
                },
                {
                    "conditions": [
                        {
                            "c2-36": "no"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He still seemed to be reeling from the hit he had taken against the wall &mdash; he swayed from side to side as he walked &mdash; but it didn't seem slow him down; he was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had  noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he rushed forward, then, crashing into Captain Aldo and sending him stumbling backwards. <em>You want a woman to care about you?</em> He nearly fell as Wilda took the opportunity to jam the dagger into Captain Aldo's back again; this time she found flesh, and the Captain shook her off, then turned toward her as she scrambled away. He seemed off-kilter, one hand reaching out to the sandstone for support, but still lurched forward. <br /><br />\"Go!\" Wilda said. \"We can't fight all of them!\"<br /><br />Doyle hesitated. \"But he's&mdash;\"<br /><br />\"You idiot, go!\"<br /><br />The rest of the guards were converging, and Doyle was sweating, and with the sight of Wilda starting to run in the corner of his eye, he turned to the door she had unlocked. Just as he began to slip inside, though, the spiked morning star of one of the city guards narrowly missed him, slamming instead into the wood of the door in front of him. With a thunderous <em>crack</em>, it slammed shut with Doyle in its path, knocking him backwards and <b>bashing his head</b> into the sandstone wall behind him. Pain radiated through his skull, but still he managed to pull the door shut behind him."
                },
                {
                    "conditions": [
                        {
                            "c2-37": "yes"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had  noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he rushed forward, then, crashing into Captain Aldo and sending him stumbling backwards. <em>You want a woman to care about you?</em> He nearly fell as Wilda took the opportunity to jam the dagger into Captain Aldo's back again; this time she found flesh, but the Captain just shook her off, then lurched toward Doyle again. <br /><br />\"It's not working,\" Doyle said. \"I don't &mdash; I don't think we can stop him.\"<br /><br />\"Go, then!\"<br /><br />The rest of the guards were converging, and Doyle was sweating, and with the sight of Wilda starting to run in the corner of his eye, he turned to the door she had unlocked. Just as he began to slip inside, the spiked morning star of one of the city guards narrowly missed him, bashing instead into the sandstone next to him. Then he slipped through the door and slammed it behind him."
                },
                {
                    "conditions": [
                        {
                            "c2-37": "no"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had  noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he rushed forward, then, crashing into Captain Aldo and sending him stumbling backwards. <em>You want a woman to care about you?</em> He nearly fell as Wilda took the opportunity to jam the dagger into Captain Aldo's back again; this time she found flesh, but the Captain just shook her off, then lurched toward Doyle again. <br /><br />\"It's not working,\" Doyle said. \"I don't &mdash; I don't think we can stop him.\"<br /><br />\"Go, then!\"<br /><br />The rest of the guards were converging, and Doyle was sweating, and with the sight of Wilda starting to run in the corner of his eye, he turned to the door she had unlocked. Just as he began to slip inside, though, the spiked morning star of one of the city guards narrowly missed him, slamming instead into the wood of the door in front of him. With a thunderous <em>crack</em>, it slammed shut with Doyle in its path, knocking him backwards and <b>bashing his head</b> into the sandstone wall behind him. Pain radiated through his skull, but still he managed to pull the door shut behind him.<br /><br /><em>Be a man,</em> his father would have said. <em>You just have to be a man.</em> "
                },
                {
                    "conditions": [
                        {
                            "dth": "yes"
                        }
                    ],
                    "text": "As Leland's blood spread closer to Doyle's boots, he began to back away. One hand patted blindly at the sandstone wall next to him, his eyes fixed on Captain Aldo, who stepped over the torn body at his feet, his broadsword still trailing drops of red behind him. He was coming for Doyle.<br /><br />\"No, no,\" Doyle said, both hands extended. \"Please, come on.\"<br /><br />\"Run!\" Wilda screamed. Again she thrust her dagger into Captain Aldo, one arm wrapped around his neck from behind, but she couldn't seem to find an opening this time; the <em>clink</em> of her dagger on steel seemed to echo through the passage. \"Get the hell out of here!\"<br /><br />Doyle hesitated, fists clenching and unclenching. An image flashed in his mind of his father outside the marketplace in Cotlin Hill, just after they'd arrived one morning when Doyle was a boy. The old man had  noticed Doyle looking at a young alewife working a stall selling novelty Igbani mugs &mdash; she'd smiled at him when they walked in, and he could still remember her face, clear and vivid &mdash; and he'd taken Doyle aside and knelt down next to him, a stern look on his face. <em>You want a woman to care about you?</em> he'd said, <em>you have to show her you can take care of her.</em><br /><br />He imagined what his father would think of him as he stumbled backwards, then, both hands pressed against the sandstone wall behind him. <em>You want a woman to care about you?</em> He nearly fell as Wilda jammed the dagger into Captain Aldo's back once more; again she hit steel, and the Captain shook her off before turning toward her, his mud-caked gauntlet wrapping around her throat as he pinned her to the floor. Doyle didn't know what else to do but watch &mdash; he felt as if his arms and legs were frozen in place &mdash; as the Captain slid his broadsword into her torso, her face twisting in pain.<br /><br />Even as the rest of the guards converged on Doyle, he didn't move. He just watched the Captain let go of Wilda's neck, her blood mixed with Leland's on that steel blade, her face lifeless and blank. Even as one of the guards raised a spiked morning star above his head, horror-stricken face staring down at Doyle, he didn't look away. There was no point.<br /><br />It wasn't until the sickening <em>crack</em> against his skull that he averted his gaze. Then all he saw was the sandstone floor, and his own blood pooling below, and then black.  "
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-18.6"
                }
            ],
            "solutions": []
        },
        "s2-18.6": {
            "title": "Through the Door",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The next few seconds were a blur. Doyle barely looked at the room around him &mdash; a desk and a bed, dishes strewn across a table &mdash; before latching the door shut and snuffing his torch in the bucket of sand that sat next to it. Then he crawled to the floor and rolled under the wooden frame of the bed behind him. Bits of straw poked through the linen mattress above as he waited, wide-eyed and silent aside from his rapid breathing, the sandstone cold against his hands.<br /><br />Something pounded against the door, again, and again, and again, and the sounds of clanking steel and heavy footsteps rang through the room as if they were inside with him. The pounding only lasted a minute or so, then the sounds grew fainter, and more distant, until they faded to nothing. There was no way he had slipped away without the Captain or any of the guards seeing him, but it seemed almost as if they had forgotten about him once he was out of sight.<br /><br />Doyle's breathing began to slow as he stared up at the mattress above him, the off-white linen barely visible in the dark. He thought of Wilda out there somewhere &mdash; of the latch on the door, and the Captain's blood-stained broadsword &mdash; and gritted his teeth. Maybe if he'd had a sword, he could have done more. Maybe even without one, he could've tried, like the mages trained by Fitchwood Dunman his mother used to tell him about. Some of them had a faith in Yabiz so strong that they could level the walls of a keep with only their thoughts, she'd said.<br /><br />More than anything else, though, he thought of Nela. He wasn't even sure why, but she kept appearing in his head, her long blonde hair brushing across his face in that feather bed in Hemstoke. A tea kettle whistled over the cook stove, and a letter of commendation was tucked neatly in a box next to his traveling boots &mdash; <em>Atwater Ceramics: Tier 1 Salesman</em>, it read &mdash; and as the feathers of that mattress seemed to give way beneath him and leave him drifting and weightless on air, he thought of her voice, honey-sweet in his ear, and the hairs stood up on his neck.<br /><br /><em>It's okay,</em> she said. <em>You're okay.</em>"
                }
            ],
            "choices": [
                {
                    "text": "End Chapter",
                    "target": "s3-1",
                    "setsConditions": [
                        {
                            "c3-0": "yes"
                        }
                    ],
                    "chapterBreak": true,
                    "chapterNumber": "2",
                    "chapterTitle": "The Keep"
                }
            ],
            "solutions": []
        },
        "s2-20.3": {
            "title": "The Outer Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "As he stared out through the portcullis into the empty streets of Cardwyke, Doyle rooted through his bag and pulled out the wrapped-up piece of <b>sheet cake</b> he had found in the pantry. Then he reached through the bars and held it out, banging with his free hand against the iron.<br /><br />\"Blondie,\" he whispered. Then he chirped, as he did any time he wanted to get her attention. \"Blondie, are you out there? Are you out there, girl?\"<br /><br />He watched for shadows in the orange glow against the houses ahead, but there was nothing there. Again he chirped, the cake still dangling, and looked for any sign of her. Just as he began to think he should give up, he heard a familiar snort in the darkness, then a dark shape approached.<br /><br />Blondie emerged from the night, the cart still rolling behind her, and walked up to the portcullis. She immediately homed in on the slice of cake in his hand. Something dropped from her mouth as she grabbed it between her teeth, then she rubbed her head against the iron bars as she chewed. <br /><br />\"Yeah, there you go,\" Doyle said, patting her head. He crouched down as he spoke to see what she'd dropped, his torch lighting up the mud.  \"Pretty good, huh? You &mdash; what is&mdash;\"<br /><br />Nestled in the mud at Blondie's feet was a human hand, cut ragged at the wrist. Doyle's mouth fell open and the words caught in his throat. He looked up at Blondie again &mdash; she was still happily licking the cake from her lips &mdash; before staring down at the severed hand.<br /><br />\"No, girl, no,\" Doyle said. \"Where did &mdash; where did you find this?\"<br /><br />Blondie was silent as he delicately grabbed the hand with two fingers and pulled it through the bars. A <b>wedding band</b> was still around the ring finger &mdash; he slipped it off, wincing as he did it &mdash; then held it up to the torch light. Blondie stared at him, her black eyes glinting.<br /><br />\"These aren't normal circumstances,\" Doyle said, staring back at her as he pocketed the ring. \"Maybe I'll find who this belongs to, okay? You don't know.\"<br /><br />She sniffed around in the mud before turning and wandering back into the dark."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-20"
                }
            ],
            "solutions": []
        },
        "s1-21.1": {
            "title": "Behind the Barrels",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c1-15": "yes"
                        }
                    ],
                    "text": "Out of breath, Doyle ducked behind a pair of barrels next to a small building with an open storefront. He didn't see any name or sign &mdash; he had rushed by the entrace too quickly &mdash; but it must have been a leather-worker of some sort. Above his head, a series of still-wet animal skins hung from a wire that stretched across the alleyway, drying in the afternoon sun.  <br /><br />He listened for a moment, expecting footsteps, but there were none. The only thing he heard was something like a voice in the distance, then clanking armor, but it didn't sound like anybody was approaching. A long minute passed, then Doyle stood, glancing around as he proceeded.<br /><br />House after house he passed, but there was still no sign of Atwater Ceramics. "
                },
                {
                    "conditions": [
                        {
                            "c1-15": "no"
                        }
                    ],
                    "text": "Out of breath, Doyle ducked behind a pair of barrels next to a small building with an open storefront. He didn't see any name or sign &mdash; he had rushed by the entrace too quickly &mdash; but it must have been a leather-worker of some sort. Above his head, a series of still-wet animal skins hung from a wire that stretched across the alleyway, drying in the afternoon sun.  <br /><br />He listened for a moment, expecting footsteps, but he wasn't sure if he heard anything. There was something like a voice in the distance, but it seemed far, and he couldn't make out any words. Then he paused, hands pressed against the barrel, frozen in place: someone was coming. One step after the other came closer, and the clanking of armor became clear, then Doyle peered through the tiny gap between the barrels and saw it: another guard, purple and white cloak flowing. <br /><br />In a panic, Doyle scrambled to his feet, his face brushing against one of the hanging skins. Again he ran, turning one corner and another, no idea where he was going. House after house he passed, but he saw nobody who could help, and still no sign of Atwater Ceramics. "
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-24.1"
                }
            ],
            "solutions": []
        },
        "s2-12.1": {
            "title": "The Crypts",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle walked along the wall opposite the burial chamber expansion, scanning the names on the sealed crypts for anything that seemed noteworthy. Some were Cardens and some were not &mdash; maybe more distant family members, or possibly even loyal servants who had worked their way into such a position, Doyle thought &mdash; but none were names he recognized. He saw dates stretching back nearly 500 years, all the way back to the beginning of the Age of New Eadmore.<br /><br />The free-standing sarcophagi, on the other hand, were a vast collection of important people. Every one that he saw was a knight or a lady, each one a Carden. After a few, a family naming pattern of \"Ed\" sounds became apparent: Sir Edmond, Edbert, Edgar, and Edwin, each one interspersed with and leading to a few numbered descendents down the line. He could trace a whole Carden family tree on those sarcophagi, year after year through the centuries, almost to the present day.<br /><br />The only exception to the \"Ed\" pattern seemed to be Sir William Carden, who lived from 252 to 289. Doyle couldn't imagine what kind of family strife or forward thinking could have led to such a break in naming, but he was sure there must have been a good reason. He ran a finger along the tower shield carved into the top of Sir William's sarcophagus, an image of a wolf in its center."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-12"
                }
            ],
            "solutions": []
        },
        "s2-12.2": {
            "title": "The Knight Statue",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle felt a strange sense of awe as he looked over the statue of the knight. It was clearly ancient &mdash; the stone was mottled and discolored, so laden with years of dust and dirt that the finer details had become hard to make out &mdash; but still suggested the regal stature of an important family. The knight's face was obscured by a winged helmet, full plate armor carved in painstaking detail, one hand holding a kite shield and the other conspicuously empty.<br /><br /><i>Sir Edmond Carden,</i> read an inscription on the base. <i>Died in the 44th Year</i>. Below it were a list of titles, and Doyle's eyes widened as he read them: <br /><br /><i>Founder of House Carden<br />The First Sons of Eadmore<br />Knight of the Reclamation.<br />Eye of the Endless Sea<br />The Purple Flame</i><br /><br />Doyle sighed, trying to imagine what life must have been like for him. Back then, most of Eadmore was still wild, untamed land, when ancient Malorin knights still filled those keeps and castles that already dotted the countryside. Sir Carden would have planted the first flag in Cardwyke long before trade opened with Igban, before the Malorin wars or the Southern March, before Old King Rothmund even made the roads safe for travel.<br /><br />People were different then, Doyle thought. They were stronger, more resilient. Those first men built Eadmore out of nothing, and made it a place where people like Doyle could survive. Then Doyle thought of his cart out there beyond the gate, Blondie still lugging it around, his remaining Atwater pieces still unsold. He cringed, imagining what some future scholar might think of him. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "<span class='@c4-100'>Doyle felt a strange sense of awe every time he looked at the stone-carved knight. The man's face was obscured by a winged helmet, full plate armor carved in painstaking detail. One hand held a kite shield, while the other was conspicuously empty.</span><br /><br /><span class='c4-100'>Doyle felt a strange sense of awe every time he looked at the stone-carved knight. The man's face was obscured by a winged helmet, full plate armor carved in painstaking detail. One hand held a kite shield, while the other gripped the mottled stone sword Doyle had found in the gallery.</span><br /><br />Then he brushed the dust from the titles inscribed on the base and read them again:<br /><br /><i>Founder of House Carden<br />The First Sons of Eadmore<br />Knight of the Reclamation.<br />Eye of the Endless Sea<br />The Purple Flame</i><br /><br />Greater men from a time long gone, he thought."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-12"
                },
                {
                    "text": "Look at the empty hand",
                    "target": "s2-12.3",
                    "conditions": [
                        {
                            "c4-100": "unset"
                        }
                    ]
                },
                {
                    "text": "Look at the stone sword",
                    "target": "s2-12.4",
                    "conditions": [
                        {
                            "c4-100": "yes"
                        }
                    ],
                    "conditionsOr": [
                        {
                            "c4-101": "unset"
                        },
                        {
                            "c4-101": "no"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-13": {
            "title": "The Burial Chamber",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle shivered as he stepped into the burial chamber; the air was cold, and every step he took kicked up a small cloud of dust from the dirt floor. Just like the entryway, the walls were lined with crypts, but most were just empty spaces waiting to be filled. There was something optimistic about it, Doyle thought. Somebody was very confident in how many Cardens were to come.<br /><br />Unlike the entryway, the room was large, and the open center space was filled with row upon row of free-standing sarcophagi, each covered by a heavy stone lid with the details of a life chiseled into it. Doyle ran a hand across one of them as he walked through the room, felt the rough texture of the letters, but he didn't see any other exits. It was a dead end.  <br /><br />Just as he held out his torch to read the name on the nearest sarcophagus, he heard something. A small sound, like scuffling feet. Then he saw a shadow in the corner of his eye. <br /><br />\"Who's there?\" Doyle shouted. He whipped the torch left and right. \"Show yourself!\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-13.0"
                }
            ],
            "solutions": []
        },
        "s1-7.1": {
            "title": "The Bar",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c1-16": "yes"
                        }
                    ],
                    "text": "Again Doyle looked around, thinking some barkeep might emerge at any moment to scold him, but still the room was silent. With both hands he tried to pull open the sliding glass of the case, but it didn't budge. Whatever key fit that lock was probably with the barkeep, and the barkeep could have been anywhere. For all Doyle knew, they weren't even in Cardwyke anymore.<br /><br />\"I'm sorry,\" he said to nobody in particular. A rag sat on the bar just above the glass, and Doyle wrapped it around his hand, his head shaking. \"My friend needs this &mdash; I'm really sorry.\"<br /><br />Then he punched the glass with his rag-wrapped fist. It was a little too gentle, and the glass just rattled in the wooden groove that held it. Again he punched, and again it rattled, until finally he pulled back his fist and slugged it, a satisfying <i>crash</i> as it shattered into razor-sharp shards at his feet.<br /><br />Nodding to himself, Doyle pocketed the <b>Astholme Brandy</b>."
                },
                {
                    "conditions": [
                        {
                            "c1-16": "no"
                        }
                    ],
                    "text": "Again Doyle looked around, thinking some barkeep might emerge at any moment to scold him, but still the room was silent. With both hands he tried to pull open the sliding glass of the case, but it didn't budge. Whatever key fit that lock was probably with the barkeep, and the barkeep could have been anywhere. For all Doyle knew, they weren't even in Cardwyke anymore.<br /><br />\"I'm sorry,\" he said to nobody in particular. \"My friend needs this &mdash; I'm really sorry.\"<br /><br />Then he punched the glass. It was a little too gentle, and the glass just rattled in the wooden groove that held it. Again he punched, and again it rattled, until finally he pulled back his fist and slugged it. The glass shattered with a satisfying <i>crash</i>, razor-sharp shards falling at his feet. As he nodded to himself, he noticed a trickle of blood, then a <b>long, thin slice</b> across the top of his hand.<br /><br />Flinching, Doyle pocketed the <b>Astholme Brandy</b>."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-3"
                }
            ],
            "solutions": []
        },
        "s2-13.4": {
            "title": "Talking to Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Could we talk a bit?\" Doyle asked. He sat on the edge of a sarcophagus across from Ed, absent-mindedly tracing the carved dates at the top with a finger. \"If you have a minute.\"<br /><br />Ed shrugged. \"If you want.\""
                }
            ],
            "choices": [
                {
                    "text": "Ask about him",
                    "target": "s2-13.5"
                },
                {
                    "text": "Ask about Father Payton",
                    "target": "s2-13.6"
                },
                {
                    "text": "Ask about what's happening",
                    "target": "s2-13.7"
                },
                {
                    "text": "Go back to the entryway",
                    "target": "s2-12"
                },
                {
                    "text": "Show him Father Payton's pendant",
                    "target": "s2-13.9",
                    "itemsToRemove": [
                        "i3-11"
                    ],
                    "conditionalItems": [
                        "i3-11"
                    ],
                    "setsConditions": [
                        {
                            "c2-50": "yes"
                        }
                    ]
                },
                {
                    "text": "Ask about the \"Ed\" names",
                    "target": "s2-13.11",
                    "conditions": [
                        {
                            "c2-55": "yes"
                        }
                    ]
                }
            ],
            "solutions": [
                {
                    "text": "Convince him that Father Payton is dead",
                    "targetOnSuccess": "s2-13.8",
                    "targetOnFailure": "s2-13.8",
                    "conditions": [
                        {
                            "c2-40": "unset"
                        }
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-40": "yes"
                        },
                        {
                            "c2-50": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-40": "no"
                        }
                    ],
                    "difficulty": {
                        "cd": "8"
                    }
                }
            ]
        },
        "s2-13.5": {
            "title": "Talking to Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I'm curious,\" Doyle said. \"What exactly do you do for Father Payton?\"<br /><br />\"I'm an apothecary,\" Ed said. Then he seemed to hesitate, staring down at the ground and kicking at the dirt. \"Well, not yet &mdash; an apprentice. I do research and mix tinctures, help keep them healthy in the keep. Whatever he asks for.\"<br /><br />\"Valuable work,\" Doyle said, nodding. He'd never had much need for apothecaries or wise women &mdash; most of his life he'd been blessed with good health &mdash; but still he respected the trade. Sometimes he wished he'd gone into some kind of work more meaningful to other people, but those were generally just fleeting thoughts; everybody loved Atwater Ceramics, after all.<br /><br />\"I think so. Been doing it almost six years, mister. Feels like even longer.\" <br /><br />\"Six years? As an apprentice?\"<br /><br />\"It's not that long for apothecary work,\" Ed said. His face seemed to droop as he said it, staring down at the sarcophagus in front of him. Then he nodded, running a hand across the dark stubble of his scalp. \"Father Payton's already written me a recommendation, so it's almost there. We just need Sir Carden to sign off, then I can go anywhere. Maybe by the end of the year, he says.\"<br /><br />Six years felt like a long time to learn how to do anything, Doyle thought. When he took up with Fultan & Sons, Mr. Fultan called it an apprenticeship, but it was only a few months before he was on the road by himself. With Osmond Plow & Mule he spent about two weeks with a partner &mdash; the top salesman at the time, though he was only about 19 years old, and didn't speak to Doyle much &mdash; and with Atwater Ceramics, Mr. Hadden only gave him an afternoon.<br /><br />\"The end of the year,\" Doyle said, nodding. \"That's a long time.\"<br /><br />Ed nodded back, then stared down at the dirt floor. \"Yeah.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-13.4"
                }
            ],
            "solutions": []
        },
        "s2-13.6": {
            "title": "Talking to Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I'm sorry to say it,\" Doyle said, \"but there's really a lot of blood upstairs. It looked like &mdash; maybe a fight, some kind of struggle. What makes you so sure Father Payton is okay?\"<br /><br />\"Trust me, mister. I know him,\" Ed said. He stared past Doyle toward the entryway, his eyes distant, as if lost in thought. Then he ran a hand across his bald head, sighing. \"A Cleric of Yabiz is protected. The Light shines on them like it doesn't for most people. You get that, right?\"<br /><br />Doyle shrugged. He'd never had much experience with clerics. The only one he'd ever known was the cleric at the Temple of Yabiz in Cotlin Hill &mdash; a man named Father Urduan, whose sermons Doyle had gone to see with his mother every week as a child &mdash; but last he heard, some men had come from the Grand Temple in New Eda to bring him back to the capital for untoward behavior. Eventually, somebody came to replace him, but by then, Doyle's mother had died and he didn't go anymore.<br /><br />\"He told me to wait, and he promised he'd come back,\" Ed said. \"My future's in his hands, and his future's in the Palm of Yabiz. That's all I know, mister. I have to trust him.\"<br /><br />\"But if something were to have happened to him, wouldn't you&mdash;\"<br /><br />\"Just don't talk like that,\" Ed said. His face showed concern. \"He's okay.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-13.4"
                }
            ],
            "solutions": []
        },
        "s2-13.7": {
            "title": "Talking to Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I just got here this afternoon,\" Doyle said. \"Here for business, but everything's &mdash; I don't know, I don't know what's going on. What's happening out there?\"<br /><br />\"Honestly, mister, I don't know much better than you,\" Ed said. He stared ahead, his eyes glistening wet in the torchlight, as if it pained him to talk about it. \"Father Payton sent me down here as soon as we saw the first of the bodies. It's been hours, just waiting.\"<br /><br />\"The bodies? What happened?\"<br /><br />\"Something in the keep,\" Ed said. He shook his head, one hand rubbing back and forth across the stubble of his scalp. \"They rang the bell in the East Tower. Father Payton and I had already been up most of the night &mdash; some of the guys from the garrison have been sick, we've been trying to help &mdash; but they rang the bell, and that means something's happening. Something big.\"<br /><br />\"Like what?\"<br /><br />\"I don't know. Most everybody in Cardwyke came through the courtyard &mdash; I could see 'em from the window, mister, all afternoon. That's never happened as long as I've been here, not once. I told Father Payton we should go with them, but he thought if the bell was ringing, that just meant it was even more important the garrison be okay.\"<br /><br />\"I think it was them,\" Doyle said. He thought of the Captain out in the mud pit, the blood spattered on his steel plate, and the guards outside the Golden Calf, Carden family colors draped on their backs. \"The garrison &mdash; your own people. I think they did all this.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-13.12"
                }
            ],
            "solutions": []
        },
        "s2-13.8": {
            "title": "Talking to Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-40": "yes"
                        }
                    ],
                    "text": "\"Listen,\" Doyle said, \"what I saw upstairs &mdash; they broke down the door to Father Payton's room, okay? I saw blood all over. I don't think he's&mdash;\"<br /><br />\"Come on, mister,\" Ed said. He shook his head, lips tightening in a frustrated expression, then looked past Doyle, toward the entryway. \"If he says he's coming back, he's coming back.\"<br /><br />\"Okay,\" Doyle said. Then he thought of the Atwater Ceramics distribution center, wherever it was, probably empty and silent somewhere out in the streets of Cardwyke. There seemed to be nothing but closing doors for Doyle. Sighing, he pointed at Ed. \"But you saw what it's like out there. You saw those guards, the bodies. You even saw his room, didn't you? You saw the blood yourself.\" <br /><br />Ed stared down at the floor, silent. Then he nodded.<br /><br />\"I think you know he's not coming back.\"<br /><br />\"Maybe he's still&mdash;\"<br /><br />\"I really doubt it,\" Doyle said. Then he put a hand on Ed's shoulder, hesitating for a moment &mdash; <i>never touch the customer,</i> Mr. Fultan told him once &mdash; before patting. \"I know he meant a lot to you, but you can't just wait around. Let's get out of here together, okay?\"<br /><br />Ed didn't say anything. He just stared down at the pendant in his hand as he leaned against a sarcophagus, his mouth turned up, agitated. Back and forth he flipped it, shaking his head.<br /><br />\"How about it?\" Doyle asked. \"You and me &mdash; we go together.\"<br /><br />\"No\" he said, his head shake turning into a nod. He pointed at Doyle as if he ought to know what he meant, his face stern, brow furrowed. \"No, I need to find Ms. Milton. I need to go.\"<br /><br />\"What?\"<br /><br />\"I hope you get out, mister, I do,\" he said, gathering his things from around the sarcophagus and lighting a candle on Doyle's torch. \"But I've been an apprentice almost six years, and I was close, I know it. If I can't get Father Payton's recommendation, I <i>need</i> another way.\"<br /><br />\"You're going to the keep, then?\"<br /><br />Ed held the candle ahead of him and started back toward the entryway, then turned, an anxious look on his face as he ran a hand over his bald head. \"This is a bad idea.\"<br /><br />\"Don't do it, then,\" Doyle said, shrugging. \"Come with me.\"<br /><br />For a moment, Ed hesitated, staring down at the ground. Then he nodded a goodbye before turning back to the entryway, candle in hand, and disappearing around the corner."
                },
                {
                    "conditions": [
                        {
                            "c2-40": "no"
                        }
                    ],
                    "text": "\"Listen,\" Doyle said, \"what I saw upstairs &mdash; they broke down the door to Father Payton's room, okay? I saw blood all over. I think he's in trouble, if he's even&mdash;\"<br /><br />\"Come on, mister,\" Ed said. He shook his head, lips tightening in a frustrated expression, then looked past Doyle, toward the entryway. \"If he says he's coming back, he's coming back.\"<br /><br />\"I understand, but I just think&mdash;\"<br /><br />\"I don't want to hear it.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-13.4",
                    "conditions": [
                        {
                            "c2-40": "no"
                        }
                    ]
                },
                {
                    "text": "Go back to the entryway",
                    "target": "s2-12",
                    "conditions": [
                        {
                            "c2-40": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-5.5": {
            "title": "The Bunks",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle squatted down in front of one of the bunk beds and opened the wooden trunk at the foot. It could have belonged to Wilda, or Leland, or any other stable hands who might have worked there, but it didn't seem that he needed to worry about that anymore; his life was at stake, and if he couldn't find any way out, so were theirs. There didn't seem to be much inside, other than neatly folded linen sheets and light, workmanlike tunics.<br /><br />Then he moved on to the rest of the trunks, one after the other. Most of the contents were the same, with a few exceptions: a stack of letters in one, each with the name <i>Elvina</i> written in neat cursive on the front, and a small steel flask in another that had only the slightest drop remaining inside &mdash; the initials <i>L. W.</i> were etched on the bottom &mdash; and one held a folding wooden chess board that looked like it had been well-used, at least based on the chipped and fading paint. <br /><br />The only thing he found that seemed to be worth taking was a large wool <b>horse blanket</b> rolled up at the foot of one of the beds. He wasn't sure how, but it seemed like it could come in useful."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Again Doyle rifled through the trunks at the foot of each bed. Most of the contents were the same, with a few exceptions: a stack of letters in one, each with the name <i>Elvina</i> written in neat cursive on the front, and a small steel flask in another that had only the slightest drop remaining inside &mdash; the initials <i>L. W.</i> were etched on the bottom &mdash; and one held a folding wooden chess board that looked like it had been well-used, at least based on the chipped and fading paint. <br /><br />There was nothing else of use to him, and he felt guilty even for thinking it. These were somebody else's belongings, after all. He imagined some stranger rifling through Blondie's saddlebags out in the streets of Cardwyke and petting her black mane, then grimaced."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-5.1"
                }
            ],
            "solutions": []
        },
        "s2-12.3": {
            "title": "The Statue's Hand",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The knight's hand was empty, but it looked to Doyle as if it hadn't always been. His fist seemed to be clenched around something that was no longer there &mdash; a weapon, perhaps &mdash; but Doyle didn't see anything else in the room.<br /><br />Maybe something had broken years ago, he thought."
                }
            ],
            "choices": [
                {
                    "text": "Use the carved stone sword",
                    "target": "s2-12.4",
                    "itemsToRemove": [
                        "i4-3"
                    ],
                    "conditionalItems": [
                        "i4-3"
                    ],
                    "setsConditions": [
                        {
                            "c4-100": "yes"
                        }
                    ]
                },
                {
                    "text": "Turn back",
                    "target": "s2-12"
                }
            ],
            "solutions": []
        },
        "s1-6.1": {
            "title": "The Cart",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c1-4": "yes"
                        }
                    ],
                    "text": "With one hand still stroking Blondie's mane, Doyle reached into her saddle bag, feeling around for anything that might put her at ease. Usually, he kept treats for her &mdash; carrots were her favorite, so he stocked up whenever he could find them &mdash; but they had been on the road a while, and it had been a long time since he'd had any coin to spare. There wasn't much there.<br /><br />Finally, Doyle felt something at the bottom of the bag, along with the grit that had collected there: the broken-off tip of a carrot. He pulled it out with a grin and held it under Blondie's snout.<br /><br />\"Here you go,\" he said as she chomped it from his hand, her lips flapping. \"What did I tell you? Everything's fine.\""
                },
                {
                    "conditions": [
                        {
                            "c1-4": "no"
                        }
                    ],
                    "text": "With one hand still stroking Blondie's mane, Doyle reached into her saddle bag, feeling around for anything that might put her at ease. Usually, he kept treats for her &mdash; carrots were her favorite, so he stocked up whenever he could find them &mdash; but they had been on the road a while, and it had been a long time since he'd had any coin to spare. There wasn't much there.<br /><br />Finally, after a few seconds of brushing across the grit that had collected at the bottom of the bag, Doyle gave up. Blondie looked at him expectantly as he stepped back &mdash; every time he dipped into that bag, she anticipated a treat &mdash; then swung her head back and forth, agitated.<br /><br />\"Sorry, girl,\" he said. \"Maybe somebody here will have something for you.\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-2"
                }
            ],
            "solutions": []
        },
        "s2-14.2.1": {
            "title": "The Animal Pens",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "s2-43": "yes"
                        }
                    ],
                    "text": "Doyle squatted down next to the fence, watching as the pigs milled around in their muddy patch. They snorted and sniffed at the ground, unfazed by the violence that had gone on around them. There was something almost serene about them, Doyle thought. He wanted to live like that.<br /><br />As a boy, he used to name all the pigs on his father's farm as soon as they were born. He knew what would happen to them &mdash; even then, he wasn't naive &mdash; but still he enjoyed it. They were friends to him, muddy little peers living out their day-to-day purpose, and he would talk to them like people, back and forth as if they were answering back. He still remembered most of their names.<br /><br />\"Come over here,\" he whispered, reaching a hand through the fence toward one of the pigs. \"Come on, I won't hurt you. Come say hello.\"<br /><br />The pig waddled over to the fence and smelled Doyle's hand, his wet snout cold against his skin. Then Doyle patted the top of his head and smiled as it walked away."
                },
                {
                    "conditions": [
                        {
                            "s2-43": "no"
                        }
                    ],
                    "text": "Doyle squatted down next to the fence, watching as the pigs milled around in their muddy patch. They snorted and sniffed at the ground, unfazed by the violence that had gone on around them. There was something almost serene about them, Doyle thought. He wanted to live like that.<br /><br />As a boy, he used to name all the pigs on his father's farm as soon as they were born. He knew what would happen to them &mdash; even then, he wasn't naive &mdash; but still he enjoyed it. They were friends to him, muddy little peers living out their day-to-day purpose, and he would talk to them like people, back and forth as if they were answering back. He still remembered most of their names.<br /><br />\"Come over here,\" he whispered, reaching a hand through the fence toward one of the pigs. \"Come on, I won't hurt you. Come say hello.\"<br /><br />The pig didn't look at him, though. It just kept walking in circles, sniffing at the mud as if it might find something new there, something it hadn't noticed the many times it had sniffed before. Doyle sighed."
                }
            ],
            "choices": [
                {
                    "text": "Leave the pigs alone",
                    "target": "s2-14.2"
                }
            ],
            "solutions": []
        },
        "s2-14.6": {
            "title": "The Body",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-44": "yes"
                        }
                    ],
                    "text": "Doyle crouched down next to the body, hesitant. Whoever he was, he hadn't been dead long. A huge gash in his back was just visible against the wall &mdash; probably fled after being injured, Doyle thought, then bled out while hiding &mdash; and his shaggy brown beard was still full of bits of apple, as if he had lost the will to chew mid-mouthful. Doyle shook his head.<br /><br />Just behind the man was a small sack &mdash; something he had taken from one of the shelves there in the cellar, it looked like &mdash; and Doyle pulled at it, cautious and slow. A corner of the sack was pinned under the man's body, but it came loose with a single, careful tug. <br /><br />Inside was a pile of <b>carrots</b>, all seemingly untouched. Doyle sighed, thinking of Blondie still out on that dirt road somewhere as he pocketed them. They were her favorite food."
                },
                {
                    "conditions": [
                        {
                            "c2-44": "no"
                        }
                    ],
                    "text": "Doyle crouched down next to the body, hesitant. Whoever he was, he hadn't been dead long. A huge gash in his back was just visible against the wall &mdash; probably fled after being injured, Doyle thought, then bled out while hiding &mdash; and his shaggy brown beard was still full of bits of apple, as if he had lost the will to chew mid-mouthful. Doyle shook his head.<br /><br />Just behind the man was a small sack &mdash; something he had taken from one of the shelves there in the cellar, it looked like &mdash; and Doyle pulled at it, cautious and slow. A corner of the sack was pinned under the man's body, but it came loose with a single tug. Just as Doyle started to open it, though, he noticed the body start to lean, then slide sideways toward him, blood trailing on the wall behind it. Doyle's breath caught in his throat and he stumbled backwards, gasping as the body hit the dirt floor with a hollow-sounding <i>thud</i>, lifeless at his feet.<br /><br />Shaken, Doyle turned back to the sack. Inside was a pile of <b>carrots</b>, all seemingly untouched. He sighed, thinking of Blondie still out on that dirt road somewhere as he pocketed them. They were her favorite food."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-14.5"
                }
            ],
            "solutions": []
        },
        "s2-5.6": {
            "title": "Following the Trail",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "With each step, Doyle noticed another spot of blood. He felt the straw beneath his boots and the stares of the horses on him &mdash; every one of them looked, torchlight glinting on their eyes, their blank expressions offering no clue as to what was ahead &mdash; but he heard nothing. His hand clenched on the torch and he felt his breathing slow down, his whole body tense. The wind blew outside.<br /><br />\"Who's there?\" Doyle asked. \"Whoever's there, show yourself.\"<br /><br />There was no response.<br /><br />\"I'm armed,\" Doyle said. He took another step, torch held ahead, and saw the blood trail round the corner next to the last of the stalls, just next to a stack of hay bales. \"I know you're there.\"<br /><br />Still nothing.<br /><br />Hands sweating and eyes wide, Doyle took the final step around the corner. The torchlight spilled over the ghastly sight of a blood-covered man, and for a split-second, Doyle recoiled. Then he noticed the elegant tunic, and the head of black and gray hair, and the silver-studded belt, but most all, he noticed the  bottle of Astholme Brandy the man clutched at his side.<br /><br />\"Mr. Hadden?\" Doyle asked. \"Is that you?\"<br /><br />The man stirred. He was not dead, Doyle realized, but asleep.<br /><br />\"Mr. Hadden,\" Doyle said again, holding the torch closer to his face. It was him, Doyle was sure. He grabbed his shoulder and shook him as began to wake. \"It's me &mdash; it's Doyle.\"<br /><br />\"Well,\" Hadden said, rubbing his eyes. \"So it is.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-15"
                }
            ],
            "solutions": []
        },
        "s2-15": {
            "title": "Talking to Hadden",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "When Doyle last saw Hadden upstairs in the Golden Calf, he'd assumed the man was near death, but in the torchlight, he somehow looked both much livelier and in worse shape than before. His black and gray hair was now matted with sweat, his beard wet, and his eyes shifted back and forth between a squint and a wide-eyed expression, as if every muscle in his face was working hard to keep him awake.<br /><br />Doyle sat down next to him and looked at the Astholme Brandy in his hand &mdash; the bottle was empty &mdash; before leaning back against a nearby stall. Hadden was still near death, he thought, or he was drunk, or possibly both. Doyle couldn't imagine how he'd made it so far. <br /><br />\"Well, here we are,\" Hadden said, his head drooping. \"What's happening, kid?\""
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle sat next to Hadden and looked at the empty bottle of Astholme Brandy in his hand as he leaned back against a nearby stall. A trail of blood led through the stables to Hadden, and he still pressed a hand tight against the open wound on his stomach. At least he was awake.<br /><br />\"Yeah,\" Hadden said, his eyes shifting back and forth between a squint and a wide-eyed expression as he stared at Doyle. \"What else do you need, kid?\""
                }
            ],
            "choices": [
                {
                    "text": "Ask how he survived",
                    "target": "s2-15.1",
                    "setsConditions": [
                        {
                            "c2-45": "yes"
                        }
                    ]
                },
                {
                    "text": "Ask how he's doing",
                    "target": "s2-15.2",
                    "setsConditions": [
                        {
                            "c2-46": "yes"
                        }
                    ]
                },
                {
                    "text": "Offer him the Alsporth Gold",
                    "target": "s2-15.4",
                    "conditionalItems": [
                        "i3-7"
                    ],
                    "setsConditions": [
                        {
                            "c2-48": "yes"
                        }
                    ]
                },
                {
                    "text": "Ask about Atwater Ceramics",
                    "target": "s2-15.3",
                    "setsConditions": [
                        {
                            "c2-47": "yes"
                        }
                    ]
                },
                {
                    "text": "Offer him the Igbani rum",
                    "target": "s2-15.6",
                    "conditions": [
                        {
                            "c2-51": "unset"
                        }
                    ],
                    "itemsToRemove": [
                        "i3-19"
                    ],
                    "conditionalItems": [
                        "i3-19"
                    ],
                    "setsConditions": [
                        {
                            "c2-51": "yes"
                        }
                    ]
                },
                {
                    "text": "Stop talking",
                    "target": "s2-5"
                }
            ],
            "solutions": [
                {
                    "text": "Try to help with his wound",
                    "targetOnSuccess": "s2-15.5",
                    "targetOnFailure": "s2-15.5",
                    "conditions": [
                        {
                            "c2-49": "unset"
                        },
                        {
                            "c2-46": "yes"
                        }
                    ],
                    "itemsToAddOnSuccess": [
                        "i3-18"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-49": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-49": "no"
                        }
                    ],
                    "difficulty": {
                        "sd": "7"
                    }
                }
            ]
        },
        "s2-15.1": {
            "title": "Talking to Hadden",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Don't take this the wrong way,\" Doyle said, \"but I never would have guessed you'd make it out of that inn. I would've stayed if I thought &mdash; well, what happened?\"<br /><br />Hadden stared down at the empty bottle in his hand. \"Got tough.\"<br /><br />\"What?\"<br /><br />\"Work hard, hard work makes you tough,\" Hadden said. He leaned back and his head hit the wall behind him, probably harder than he intended. \"That's what Mr. Tawley used to say. That was back 20 years, probably, got me started at Atwater. Did I ever tell you about him?\"<br /><br />Doyle nodded. \"You did. I actually&mdash;\"<br /><br />\"Real work, you know what I mean? These city guards, they sit in a chair all day and wait for something to happen. That's not work, kid. That'd be a vacation for me.\"<br /><br />\"Okay,\" Doyle said, still nodding. \"Sure. What did you &mdash; what happened, though?\"<br /><br />\"Had a drink and pulled myself together,\" Hadden said, his eyes closing. Again his head seemed to droop, but he was smiling. \"Came out, the guards were all gone. They were after you, maybe, I don't know. Went looking for help &mdash; and I know, I know, but I'm no surgeon, okay? I'm not a cleric, kid. So, I went looking for help, didn't find anybody. Whole damn village is empty.\"<br /><br />\"Yeah. I didn't see anybody either.\"<br /><br />\"Then I get up to the keep, and the gate's just wide open,\" Hadden said. He started to make a hand movement to illustrate it, but the brandy bottle tipped and he grabbed it again. \"Thought maybe there'd be somebody here, but no &mdash; just those damn guards again.\"<br /><br />\"They're around,\" Doyle said. \"It's good they haven't found you.\"<br /><br />\"I heard 'em close the gate again a while ago. So, I guess I'm here now.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-15"
                }
            ],
            "solutions": []
        },
        "s2-15.2": {
            "title": "Talking to Hadden",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Are you okay?\" Doyle asked. \"That wound looked pretty deep to me.\"<br /><br />\"Feels better than it did,\" Hadden said, lifting his hand from his stomach to look down at the ragged slice and the blood-stained tunic around it. \"I've had worse.\"<br /><br />Doyle squinted at him. \"Have you?\"<br /><br />\"I killed a sow once, years ago, on the farm growing up,\" Hadden said. He stared down at the empty bottle in his hand. \"I was just a boy, and she tore me up. Hell of a fight, kid, I'll tell you that.\"<br /><br />\"You killed a sow?\" Doyle asked. His father had kept pigs as well &mdash; he still thought about them sometimes, and the mud outside the barn, and their beady eyes looking up at him from behind the fence &mdash; but given his experience with sows, a child killing one didn't seem likely. \"How did you manage that? What happened?\"<br /><br />\"I fell in the pen and she &mdash; you know, she came after me. Didn't have a choice. Everybody in Talondale heard about it. They all knew my name, at least for a while.\"<br /><br />\"Okay,\" Doyle said. \"So, you're feeling okay, then?\"<br /><br />\"Not really,\" Hadden said, his head drooping. \"I've just had worse.\" "
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-15"
                }
            ],
            "solutions": []
        },
        "s2-15.3": {
            "title": "Talking to Hadden",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Listen,\" Doyle said, \"I know things aren't looking great right now &mdash; it's probably not the best time, I know &mdash; but there was an Atwater representative here, in the keep. I don't know for sure, but they might still be&mdash;\"<br /><br />Hadden shook his head, his eyes nearly closed. \"What does that matter?\"<br /><br />\"You were going to get me in touch with someone at Atwater,\" Doyle said. He tapped his finger on his knee, concerned as he looked for some acknowledgement from Hadden. \"I know that's not really a priority right now, I just thought&mdash;\"<br /><br />\"Look at me,\" Hadden said, pointing the brandy bottle at the wound on his stomach. \"What does this look like to you? Some Atwater big shot gonna help with this?\" <br /><br />Doyle hesitated, thinking of Blondie and his cart, and the empty coin pouches on his belt, and the broken shards of ceramic in the dirt in Yulan. It wasn't the most important thing at the moment &mdash; Doyle knew that &mdash; but he still couldn't shake the sense that he had to do something. If he survived Cardwyke only to find himself out on the road no better off than he'd been when he arrived, he wasn't sure what he would do. He didn't want to imagine it.<br /><br />\"Look, kid, I'm a man of my word,\" Hadden said. The brandy bottle wobbled back and forth in his hand as he leaned back against the wall, his eyes closing. \"If we're still around when all this is over, come find me, deal's still on. I'll get you in touch with whoever you want.\"<br /><br />Doyle sighed. \"Okay.\"<br /><br />\"I'd shake your hand, but I &mdash; I got my hands full.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-15"
                }
            ],
            "solutions": []
        },
        "s2-15.4": {
            "title": "Talking to Hadden",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I see you're empty there,\" Doyle said, pointing at the brandy bottle. Then he pulled the bottle of <b>Alsporth Gold</b> from his pack and held it out toward Hadden. \"You interested?\" <br /><br />Hadden leaned forward and looked at it, the glass glinting in the torchlight.<br /><br />\"It's yours if you want it. Seems like the brandy treated you right.\"<br /><br />\"That's wine?\"<br /><br />\"Alsporth Gold,\" Doyle said, nodding. \"Some of the best.\"<br /><br />Hadden shook his head, his eyes closing. \"I don't drink wine.\"<br /><br />\"What?\"<br /><br />\"Gives me a headache.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-15"
                }
            ],
            "solutions": []
        },
        "s2-15.5": {
            "title": "Checking the Wound",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-49": "yes"
                        }
                    ],
                    "text": "\"Let me take a look at that,\" Doyle said, scooting in closer to Hadden and pulling his hand away from the ragged slice in his stomach. \"Maybe I can help.\"<br /><br />\"Whatever you want,\" Hadden said, his eyes closing. \"Do your worst, kid.\"<br /><br />Doyle pulled a loose flap of tunic away to get a better look, then thought for a moment. When he saw it at the Golden Calf, he was sure there was nothing he could do, but now that Hadden had made it all the way to the keep, Doyle assumed it couldn't have been as bad as he thought. He looked around the stables for a moment, holding his torch out for light. There had to be something.<br /><br />Then Doyle noticed a set of cloth caparisons neatly folded on a shelf just ahead of them, each one embroidered and dyed purple and white. He took one and tore a thick strip from it &mdash; for a moment, he almost felt guilty destroying something that ultimately belonged to the horses &mdash; and  motioned for Hadden to lean forward so he could wrap it around his waist.<br /><br />\"That's better, isn't it?\" Doyle asked. \"Don't have to hold the wound now.\"<br /><br />\"That's definitely better,\" he said, nodding. Then he rummaged with his now-free hand in the small bag he carried at his side. After a moment, a pulled out a <b>silver belt buckle</b> and held it out to Doyle with a grin, his head tilting slightly. \"I appreciate it, kid &mdash; take this.\"<br /><br />\"What is it?\"<br /><br />\"Mr. Tawley gave it to me when I made it to Tier 5,\" Hadden said. He pushed it into Doyle's hands. \"Recognition for a top earner. You earned it, kid.\""
                },
                {
                    "conditions": [
                        {
                            "c2-49": "no"
                        }
                    ],
                    "text": "\"Let me take a look at that,\" Doyle said, scooting in closer to Hadden and pulling his hand away from the ragged slice in his stomach. \"Maybe I can help.\"<br /><br />\"Whatever you want,\" Hadden said, his eyes closing. \"Do your worst, kid.\"<br /><br />Doyle pulled a loose flap of tunic away to get a better look, then thought for a moment. When he saw it at the Golden Calf, he was sure there was nothing he could do, but now that Hadden had made it all the way to the keep, Doyle assumed it couldn't have been as bad as he thought. He looked around the stables for a moment, holding his torch out for light. There had to be something.<br /><br />Then Doyle noticed a set of cloth caparisons neatly folded on a shelf just ahead of them, each one embroidered and dyed purple and white. He took one and tore a thick strip from it &mdash; for a moment, he almost felt guilty destroying something that ultimately belonged to the horses &mdash; and  motioned for Hadden to lean forward so he could wrap it around his waist.<br /><br />\"No, wait &mdash; ow, stop,\" Hadden said as Doyle tried to tie it. \"No, no, stop.\"<br /><br />\"What?\" Doyle asked. \"I just need to&mdash;\"<br /><br />\"No, stop, let me do it&mdash;\"<br /><br />\"Just let me&mdash;\"<br /><br />\"Leave it!\" Hadden shouted, his eyes wide and suddenly alert. Then they softened and he closed them for a moment, letting out a big sigh. \"Just let me do it, kid. You're tying it too tight.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-15"
                }
            ],
            "solutions": []
        },
        "s2-13.9": {
            "title": "Talking to Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I think you should see this,\" Doyle said, reaching into his pack and retrieving <b>Father Payton's pendant</b>. He held it out to Ed, mustering the most sympathetic face he could, even though he didn't think it should come as a surprise. \"I found it in the Great Hall. That seems to be where the worst of it happened. Maybe they took him there after, or &mdash; I don't know.\"<br /><br />Ed took the pendant from him. \"Did you find him?\"<br /><br />\"No,\" Doyle said, shaking his head. \"I assume he ended up in the pit with the others.\"<br /><br />\"Maybe he's still&mdash;\"<br /><br />\"I really doubt it,\" Doyle said. Then he put a hand on Ed's shoulder, hesitating for a moment &mdash; <i>never touch the customer,</i> Mr. Fultan told him once &mdash; before patting. \"I know he meant a lot to you, but you can't just wait around. Let's get out of here together, okay?\"<br /><br />Ed didn't say anything. He just stared down at the pendant in his hand as he leaned against a sarcophagus, his mouth turned up, agitated. Back and forth he flipped it, shaking his head.<br /><br />\"How about it?\" Doyle asked. \"You and me, we go together.\"<br /><br />\"No\" he said, his head shake turning into a nod. He pointed at Doyle as if he ought to know what he meant, his face stern, brow furrowed. \"No, if Father Payton is &mdash; I need to find Ms. Milton. I need to go.\"<br /><br />\"What?\"<br /><br />\"I hope you get out, mister, I do,\" he said, gathering his things from around the sarcophagus and lighting a candle on Doyle's torch. \"But I've been an apprentice almost six years, and I was close, I know it. If I can't get Father Payton's recommendation, I <i>need</i> another way.\"<br /><br />\"You're going to the keep, then?\"<br /><br />Ed held the candle ahead of him and started back toward the entryway, then turned, an anxious look on his face as he ran a hand over his bald head. \"This is a bad idea.\"<br /><br />\"Don't do it, then,\" Doyle said, shrugging. \"Come with me.\"<br /><br />For a moment, Ed hesitated, staring down at the ground. Then he nodded a goodbye before turning back to the entryway, candle in hand, and disappearing around the corner."
                }
            ],
            "choices": [
                {
                    "text": "Go back to the entryway",
                    "target": "s2-12"
                }
            ],
            "solutions": []
        },
        "s2-13.10": {
            "title": "The Burial Chamber",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle held his torch out over the empty burial chamber. The walls were lined with crypts, but most were just empty spaces waiting to be filled. There was something optimistic about it, Doyle thought. Somebody was very confident in how many Cardens were to come.<br /><br />The open center space was filled with row upon row of free-standing sarcophagi, each covered by a heavy stone lid with the details of a life chiseled into it. Doyle ran a hand across one of them as he walked through the room. There were no other exits.<br /><br />He glanced down at sarcophagus Ed had been hiding behind and sighed."
                }
            ],
            "choices": [
                {
                    "text": "Go back to the entryway",
                    "target": "s2-12"
                },
                {
                    "text": "Look at Ed's sarcophagus",
                    "target": "s2-13.16"
                }
            ],
            "solutions": []
        },
        "s2-15.6": {
            "title": "A Gift for Hadden",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I see you've run out,\" Doyle said, pointing at the brandy bottle. Then he pulled the bottle of <b>Igbani rum</b> from his pack and held it out toward Hadden. \"You want this?\" <br /><br />Hadden leaned forward and looked at it, the glass glinting in the torchlight.<br /><br />\"Seems like the brandy really did a lot for you. Maybe this'll help you get back on your feet, get you moving. You can't stay in here, okay? It's not safe.\"<br /><br />\"Igbani,\" Hadden said, grabbing the bottle. He uncorked it and smelled the contents. \"This is something, kid. Rum puts me to sleep, I'll have to find a bed. You ever been to Igban?\"<br /><br />Doyle shook his head.<br /><br />\"Me and Mr. Tawley, we spent six months down there,\" he said. His eyes looked glossy in the torchlight as he stared at the bottle, his head drifting back against the wall. \"Must have been &mdash; oh, 15 years ago, maybe. Saw the Great Citadel of Ulon &mdash; it's in that big city they have, you know the one. It was a lot easier to make a sale back then, kid. We brought back a lot of gold.\"<br /><br />\"Why Igban?\"<br /><br />\"There was a man down there looking to buy in bulk,\" Hadden said. Then he took a swig from the bottle before wiping his face with his sleeve, his head wobbling back and forth for a moment. \"He was a &mdash; you know, a prince. One of those Igbani princes.\"<br /><br />Doyle wasn't sure what to say. \"You worked with a prince?\"<br /><br />\"Yeah, a prince,\" Hadden said. He leaned back again and closed his eyes. \"He was a &mdash; a prince, I think. Something like that.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-15"
                }
            ],
            "solutions": []
        },
        "s2-16": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle climbed up the ladder into the loft and held out his torch. There wasn't much to see. The walls were lined with hay bales and in the center was a small table and bowl of water, a few bloody bandages scattered around where Wilda had been working. It wasn't long ago they'd been up there &mdash; him, Wilda, and Leland &mdash; but it felt like days to Doyle.<br /><br />A bit of blood marked the spot where Leland had been propped up against a hay bale. Doyle stared down at it, thinking of the Captain and his broadsword, of the long black nothing he'd seen in the man's eyes, the cold he'd felt before Wilda and the others rescued him. He shook at the thought, then said a quiet prayer to Yabiz, hoping it had at least been quick for Leland."
                }
            ],
            "choices": [
                {
                    "text": "Leave the loft",
                    "target": "s2-5"
                }
            ],
            "solutions": []
        },
        "s2-5.7": {
            "title": "Brushing the Horses",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c3-75": "yes"
                        }
                    ],
                    "text": "\"Hey there,\" Doyle said, leaning on the edge of one of the stalls. Ahead of him, a brown palfrey whinnied gently, his black eyes glinting in the torchlight. \"You want a brush?\"<br /><br />The horse leaned into the motion as Doyle reached over and ran the brush along its neck and back. Blondie used to do the same thing when they'd camp out on the side of the road. He brushed her all the time, because with just the two of them traveling together, it was some of the only bonding they could do. She would eat from her feed bag and he'd tend to the fire and brush her, crossing his fingers that no strange beast or roadside bandit would find them there. <br /><br />\"Feels good, I bet,\" Doyle said. \"Yeah, sure does.\" "
                },
                {
                    "conditions": [
                        {
                            "c3-75": "no"
                        }
                    ],
                    "text": "\"Hey there,\" Doyle said, leaning on the edge of one of the stalls. Ahead of him, a brown palfrey whinnied gently, his black eyes glinting in the torchlight. \"You want a brush?\"<br /><br />When Doyle reached over and ran the brush along its neck, the horse neighed and backed up in the stall, almost recoiling from his hand. He was no horse expert, but still the reaction surprised him; Blondie never responded like that. He brushed her all the time when they camped out on the side of the road, because with just the two of them traveling together, it was some of the only bonding they could do. She would eat from her feed bag and he'd tend to the fire and brush her, crossing his fingers that no strange beast or roadside bandit would find them there. <br /><br />\"Come on,\" Doyle said to the horse, pleading. He reached in a little further with the brush in hand, but still the horse resisted. \"Well, okay &mdash; okay, then.\"<br />"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-5"
                }
            ],
            "solutions": []
        },
        "s2-17": {
            "title": "The Apothecary Room",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "As the key clicked and the door creaked open, Doyle was struck by the beauty of the room on the other side. The walls were lined with wooden tables under open windows, every surface covered with a wide array of potted plants. Green leaves, stalks, and flowers all swayed in the ocean breeze. <br /><br />A small tapestry hung on the wall next to the door, a quote from the <i>Invocation of Yabiz</i> displayed in ornate calligraphy:<br /><br /><i>Growth is the duty of man and nature alike.</i><br /><br />Doyle held his torch up and looked over the plants, hoping to find something of use. There were shelves beneath the tables, most loaded with corked glass bottles full of various herbs and powders, others stocked with woven baskets, piles of rolled up parchment tied with string inside. A stack of notes written on yellowed parchment sat loose and disorganized on one.<br /><br />Then he looked up above the tables, where more shelves were mounted to the walls. They were overloaded, stacked high with empty glass bottles waiting to be filled with tinctures or ingredients. On top of a row of bottles, he saw a black leather bag, but it was too high, just out of reach."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "The walls were lined with wooden tables under open windows, every surface covered with a wide array of potted plants. Green leaves, stalks, and flowers all swayed in the ocean breeze. <br /><br />Doyle held his torch up and looked over the plants, hoping to find something of use. There were shelves beneath the tables, most loaded with corked glass bottles full of various herbs and powders, others stocked with woven baskets, piles of rolled up parchment tied with string inside. A stack of notes written on yellowed parchment sat loose and disorganized on one.<br /><br /><span class='c2-53'>Then he looked up above the tables, where more shelves were mounted to the walls. They were overloaded, stacked high with empty glass bottles waiting to be filled with tinctures or ingredients. That was where he'd found the surgeon's bag.</span><br /><br /><span class='!c2-53'>Then he looked up above the tables, where more shelves were mounted to the walls. One had buckled, tilting downward and spilling its contents onto the sandstone floor. Doyle looked down at the broken glass at his feet, a few drops of his own blood spattered next to it.</span><br /><br /><span class='@c2-53'>Then he looked up above the tables, where more shelves were mounted to the walls. They were overloaded, stacked high with empty glass bottles waiting to be filled with tinctures or ingredients. On top of a row of bottles, he saw a black leather bag, but it was too high, just out of reach.</span>"
                }
            ],
            "choices": [
                {
                    "text": "Look at the notes",
                    "target": "s2-17.1"
                },
                {
                    "text": "Go back to the temple",
                    "target": "s2-8"
                }
            ],
            "solutions": [
                {
                    "text": "Search the shelves",
                    "targetOnSuccess": "s2-17.2",
                    "targetOnFailure": "s2-17.2",
                    "conditions": [
                        {
                            "c2-53": "unset"
                        }
                    ],
                    "itemsToAddOnSuccess": [
                        "i2-10"
                    ],
                    "itemsToAddOnFailure": [
                        "i2-10"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c2-53": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-53": "no"
                        },
                        {
                            "inj24": "yes"
                        }
                    ],
                    "difficulty": {
                        "sd": "8"
                    }
                }
            ]
        },
        "s2-17.1": {
            "title": "The Notes",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle pulled the stack of parchments from a shelf under the table and flipped through them in the torchlight. For the most part, all he saw were brief scribbles of recipes and mixtures, many crossed out, written with so much shorthand and jargon that he could hardly decipher them. On one parchment, it looked like the author had grown bored and added some idle doodles.<br /><br />A few sloppy ink drawings of flowers marked the page, and a sketch of a tree stretched from top to bottom. Then a few variations of sentences were scrawled again and again as if to practice:<br /><br /><i>Edwin Clifford - Master Apothecary</i><br /><i>Master Edwin Clifford - Apothecary</i><br /><i>Mr. Edwin Clifford - Master Apothecary</i><br /><i>Ed Clifford - Master Apothecary</i><br /><i>Mr. E. Clifford - Master Apothecary</i><br />"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-17"
                }
            ],
            "solutions": []
        },
        "s2-17.2": {
            "title": "On the Shelves",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle reached up toward the black leather bag, but its position atop the glass bottles left it just beyond his grasp. Sighing, he looked around the room for a chair or a step-stool, but saw nothing. Then he crouched down and pressed against one of the shelves below the table in front of him. It was a long plank of wood mounted to the legs of the table, but it felt it solid, like it could hold some weight.<br /><br />\"Okay,\" he said to himself, \"steady.\"<br /><br />First he placed one foot on the shelf and tested again &mdash; it didn't budge &mdash; before stepping completely onto it and reaching up for the bag. Whoever placed it there must have been quite a bit taller than Doyle, but with the extra height, he was able to manage. It was heavier than he expected, which was good news to Doyle; there had to be something inside.<br /><br /><span class='c2-53'>The glass bottles on the mounted shelf wobbled, jostling together as he pulled down the bag. He froze, imagining them spilling down and shattering around him. Nothing fell, though, and he sighed with relief, stepping down from the shelf and opening the bag.</span><br /><br /><span class='!c2-53'>Then Doyle heard the creaking of wood, and he froze. Before he could think, the shelf under his feet buckled, and while he only dropped a foot or so to the ground, he reflexively grabbed the shelf above his head for stability. It tipped downward as soon as he put weight on it, glass bottles toppling down and shattering all around him, the leather bag falling with them.<br /><br />He stumbled backwards to the ground, hands back to break his fall. While the drop itself didn't faze him, he felt a stinging pain in his palms, his face twisting into an involuntary wince, then looked down to see the broken glass around him. He stood up and looked at his hands, a series of small cuts covering both. Head shaking, he made fists until the pain subsided &mdash; fortunately, he was used to cuts from broken ceramics &mdash; then picked up the black bag and opened it.</span><br /><br />Inside was a collection of tools that a surgeon might need &mdash; straight razors, and a suture kit, and some dental pliers &mdash; as well as basic supplies for cleaning and dressing wounds. <br /><br />\"Yes,\" Doyle whispered as he grabbed the bag. \"Perfect.\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-17"
                }
            ],
            "solutions": []
        },
        "s1-3.4": {
            "title": "The Mirror",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle glanced at the mirror, his own face looking back in the speckled glass. <br /><br />There was the dirty beige tunic he'd been wearing for days, and the brass-buckled leather belt that tied it at the waist, empty pouches and a coin purse hanging from it. There were his olive green breeches tucked into black leather boots, both coated a grayish-brown from dried mud, and the black linen cloak &mdash; it had been his mother's once, long ago &mdash; tied around his neck. He'd hoped to be more presentable for his meeting with Hadden, but after days on the road, any salesman would understand.<br /><br />The face was less excusable. It'd been a long time since he'd seen himself in a mirror, and he felt like he barely recognized the man looking back at him. He had dirty blond hair cut short that should have been neatly combed, but instead looked disheveled from travel, his hairline receding faster than seemed appropriate for his 31 years. His lips were thin and his chin narrow, which gave his whole expression a slightly drooping character, and while there was no way to know for sure, he was certain that people noticed that before anything else when they looked at him.<br /><br />Most of all, his mustache bothered him. Mr. Fultan told him to grow one years ago &mdash; <i>you'll look more respectable,</i> he'd said, <i>more professional</i> &mdash; and once Doyle tried it, he'd agreed. Since then, he always tried to keep a neat chevron on his upper lip, carefully trimmed and maintained. He'd lost track since Yulan, though, and it had begun to creep over the edge of his lip, while the rest of his usually clean-shaven face had sprouted three days of patchy stubble.<br /><br />\"You look old,\" he said to himself, running two fingers over his mustache as his lip curled up. Then he raised his eyebrows, as if it might do something to counteract the droop. \"Everybody can see it.\""
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle glanced at the mirror again. There was the dirty beige tunic and the leather belt, the olive green breeches tucked into mud-coated leather books, and his mother's black linen cloak tied around his neck. It was all fine, he thought &mdash; a fellow salesman would understand the trials of the road &mdash; at least compared to his drooping expression, and that shaggy mustache and three-day stubble. <br /><br />\"Come on,\" he said to himself, a sinking feeling in his stomach as he stared at his reflection, his fingers running over his mustache again. \"Just stop it.\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-3.1"
                }
            ],
            "solutions": []
        },
        "s2-1.1": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Who are you?\" Doyle asked. \"Did you &mdash; did you save me?\"<br /><br />\"We just ran into you,\" the woman said. She pulled the cloth away from the man's side and squeezed it out into the water bowl. \"Me and Leland and Hugo &mdash; we've been hiding out, you know? Thought we had a chance to leave town, but we ran into that pit on the way out, and &mdash; I don't know, you saw it. I don't know what to do now.\"<br /><br />\"The Captain, then. You killed him?\"<br /><br />\"Captain Aldo?\" she asked. Then she shook her head and looked away for a moment, her expression stiff. The muscles in her face tensed and untensed, candlelight flickering in her eyes. \"Hugo put up a fight. He bought us some time, but he &mdash; he didn't make it back with us.\"<br /><br />Doyle didn't say anything.<br /><br />\"This is Leland,\" she said, pointing to the wounded man. \"I'm Wilda.\"<br /><br />\"Great to meet you both,\" Doyle said. He directed a perfunctory nod at each of them &mdash; <i>show that you're agreeable</i>, Mr. Fultan had taught him, <i>that you're pleasant to be around</i> &mdash; and did his best to cement those names and faces in his head. It was a reflex to him; some part of him imagined they might all run into each other months later in another city and swap stories about the pit of bodies they'd seen, and between the two of them he might manage to close a few sales. <br /><br />\"So,\" Doyle started, \"what exactly is happening here?\"<br /><br />Wilda stared down at the blood-filled water bowl. \"I don't know.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue ",
                    "target": "s2-1.2"
                }
            ],
            "solutions": []
        },
        "s2-1.2": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"You don't know,\" Doyle repeated, pushing himself up to a seat on the hay bale next to which he'd been sitting. He brushed at his breeches, dried mud flaking off onto the wood. \"What do you think we should do, then?\"<br /><br />\"I can't leave Leland,\" Wilda said. \"Not yet. How do you feel?\"<br /><br />Doyle shrugged. Some reflexive part of him flinched at the question &mdash; <i>it's always your feelings,</i> his father used to say &mdash; and while his head was still foggy, he felt okay enough. He stood up, stretched his legs, and glanced down the ladder that led to the stables below. A few palfreys stood in a row of pens, tails swishing from side to side. <br /><br />Then the image of the Captain's eyes popped into Doyle's head, and the freezing sensation, and the utter blackness. He'd never seen anything like it. As a boy, he'd heard stories about freelance mages among the Malorin rebels and the Igbani Empire &mdash; they said they could cover countless soldiers with white-hot flames in the blink of an eye, or crumple a suit of armor with a man still in it &mdash; but even that was nothing like what he'd seen. Maybe Eadmore was at war, he thought. <br /><br />\"We shouldn't stay here,\" Doyle said, imagining the Captain's gauntlets wrapped around the rungs of the ladder, that broadsword clanging against each one as he climbed. \"Who knows how long before they find us. If they've cleared out from the village, we could run for it. We could try to&mdash;\"<br /><br />\"They're still out there,\" Wilda said. \"From what I saw, they're going door to door, you know? Taking anybody who's still around. We've got some time &mdash; I put the gate down, Hugo gave us a chance &mdash; but we can't go back that way. Not with them still out there.\"<br /><br />\"Another way, then. There has to be something, we have to look.\"<br /><br />\"I'm not keeping you here. You do what you want.\""
                }
            ],
            "choices": [
                {
                    "text": "Promise to look for a way out",
                    "target": "s2-1.3"
                }
            ],
            "solutions": [
                {
                    "text": "Ask her to come along",
                    "targetOnSuccess": "s2-1.3",
                    "targetOnFailure": "s2-1.3",
                    "conditionsSetOnSuccess": [
                        {
                            "c2-54": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c2-54": "no"
                        }
                    ],
                    "difficulty": {
                        "cd": "5"
                    }
                }
            ]
        },
        "s2-1.3": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-54": "unset"
                        }
                    ],
                    "text": "\"Right, okay,\" Doyle said, glancing down the ladder toward the horses below. \"It's just that you &mdash; you did a lot for me, getting me back here.\"<br /><br />Wilda nodded.<br /><br />\"I'll make it up to you,\" he said. Then he waited, silent as Wilda turned back to look after Leland. He stared up at the ceiling, seemingly half-conscious. Another small groan slipped from the man's lips as she held the cloth to his wound, sweat showing on her forehead in the candlelight. \"I'll find a way out, okay? All three of us, we'll get out together.\"<br /><br />\"I don't know,\" Wilda said. \"I don't think he can move like this.\"<br /><br />\"What, then? What does he need?\"<br /><br />She turned and stared at Doyle, a skeptical look on her face. He watched the candle flame flicker in her brown eyes as she brushed a dark strand of hair from her face &mdash; perhaps there was some Igbani in her, he thought, some generations back &mdash; until all at once, her expression seemed to soften. Again she glanced down at Leland's wound, moving the cloth aside for a moment. Concern showed on her face as she looked at it, her lip curling up on one side.<br /><br />\"He needs stitches,\" she said, shaking her head. \"Needle and thread, anything. This cut is &mdash; it just needs to get closed, you know? He's not moving otherwise.\""
                },
                {
                    "conditions": [
                        {
                            "c2-54": "yes"
                        }
                    ],
                    "text": "\"Right, okay,\" Doyle said, glancing down the ladder toward the horses below. \"It's just that you &mdash; you did a lot for me, getting me back here.\"<br /><br />Wilda nodded.<br /><br />\"I'll make it up to you,\" he said. Then he waited, silent as Wilda turned back to look after Leland. He stared up at the ceiling, seemingly half-conscious. \"What if you come with me? We find a way out, then all three of us &mdash; we get out together.\"<br /><br />Wilda glanced at Leland. \"I don't think I can&mdash;\"<br /><br />\"You know this place,\" Doyle said. He imagined her guiding them through the dark to some easy exit she would instinctually find, some safe path out of the keep that she had for some reason failed to mention so far. \"You're already handling yourself better than me. We should look together.\"<br /><br />\"It would make sense,\" Wilda said, nodding. \"But Leland's in no shape. I can't leave him alone here, you know? And even if we found a way, I don't think he can move like this.\"<br /><br />\"What, then? What does he need?\"<br /><br />She turned and stared at Doyle, a skeptical look on her face. He watched the candle flame flicker in her brown eyes as she brushed a dark strand of hair from her face &mdash; perhaps there was some Igbani in her, he thought, some generations back &mdash; until all at once, her expression seemed to soften. Again she glanced down at Leland's wound, moving the cloth aside for a moment. Concern showed on her face as she looked at it, her lip curling up on one side.<br /><br />\"He needs stitches,\" she said, shaking her head. \"Needle and thread, anything. This cut is &mdash; it just needs to get closed, you know? He's not moving otherwise.\""
                },
                {
                    "conditions": [
                        {
                            "c2-54": "no"
                        }
                    ],
                    "text": "\"Right, okay,\" Doyle said, glancing down the ladder toward the horses below. \"It's just that you &mdash; you did a lot for me, getting me back here.\"<br /><br />Wilda nodded.<br /><br />\"I'll make it up to you,\" he said. Then he waited, silent as Wilda turned back to look after Leland. He stared up at the ceiling, seemingly half-conscious. \"You should probably come with me. We'll find a way out, then all three of us &mdash; we'll get out together.\"<br /><br />Wilda glanced at Leland. \"I can't leave him alone here.\"<br /><br />\"We'll bring him,\" Doyle said. He imagined her guiding the three of them through the dark to some easy exit she would instinctually find, some safe path out of the courtyard that she had for some reason failed to mention so far. \"Once he's on his feet, he'll probably &mdash; maybe fresh air would help.\"<br /><br />Wilda put her hand on her forehead, her head shaking. \"Fresh air?\"<br /><br />\"I mean &mdash; I don't know, I'm not &mdash; I'm not a cleric. it's just an idea.\"<br /><br />\"Look, if you find a way out, let us know. But Leland's in no shape. I can't leave him alone here, you know? And even if we found a way, I don't think he can move like this.\"<br /><br />\"What, then? What does he need?\"<br /><br />She turned and stared at Doyle, a skeptical look on her face. He watched the candle flame flicker in her brown eyes as she brushed a dark strand of hair from her face &mdash; perhaps there was some Igbani in her, he thought, some generations back &mdash; until all at once, her expression seemed to soften. Again she glanced down at Leland's wound, moving the cloth aside for a moment. Concern showed on her face as she looked at it, her lip curling up on one side.<br /><br />\"He needs stitches,\" she said, shaking her head. \"Needle and thread, anything. This cut is &mdash; it just needs to get closed, you know? He's not moving otherwise.\""
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-1.4",
                    "items": [
                        "i2-1"
                    ]
                }
            ],
            "solutions": []
        },
        "s2-1.4": {
            "title": "The Loft",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Okay,\" Doyle said. \"We'll sew him up.\"<br /><br />He looked again toward the ladder, at the horses in their pens below, and the darkness of the stables beyond. For a moment, he felt like he was staring into the trees on the road home from Cotlin Hill, the wind blowing shapes in the branches. He imagined a dark shape staring back at him from the night: boots and steel plate, and empty eyes, and the smell of old ale on the breeze.<br /><br />\"You okay?\" Wilda asked. \"I thought you were okay.\"<br /><br />\"I am,\" Doyle said, nodding. He slid two fingers across his mustache as if to straighten it out, then ran his fingers through his hair, even more disheveled now than it had been from the road. \"It's fine, I'm just &mdash; just nervous.\"<br /><br />\"Makes sense,\" Wilda said. It looked like she wanted to say more, but before the words came, Leland groaned again and she turned to him, the blood-soaked cloth at his side. The candle flickered and her head shook, then she turned back to Doyle. \"Be careful out there. And if you find anything, you know, come fill us in. Even if you just want to talk, we'll be here.\"<br /><br />Doyle stared at the ladder, still nodding. \"I will.\" <br /><br />\"Maybe this will help,\" Wilda said. She rummaged through a pile of loose hay next to Leland, then produced a makeshift torch and held it over the candle. After it ignited, she handed it to Doyle. \"Just do you what you can, you know?\""
                }
            ],
            "choices": [
                {
                    "text": "Go down to the stables",
                    "target": "s2-5"
                }
            ],
            "solutions": []
        },
        "s2-7.7": {
            "title": "Talking to Wilda",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I was told there was an Atwater Ceramics distribution center here,\" Doyle said. It was hard to tell in the candlelight, but he thought he noticed a kind of grimace on Wilda's face. \"I know there's a lot going on, but it's &mdash; it's important that I meet with them. Extremely important.\"<br /><br />Wilda paused for a moment, as if she didn't know how to respond. \"Yeah. There is.\"<br /><br />\"Do you think the guards have been there? Is it still&mdash;\"<br /><br />\"Most everybody from the village came when they heard the bell tower ring,\" she said, shaking her head. \"I'm sure that goes for them, too. Maybe some of the headmen would stay behind &mdash; somebody who really cares if the place burns down, you know? I hope the guards got them.\"<br /><br />Doyle paused, uncertain of what to make of that comment. \"You don't mean that.\"<br /><br />\"I worked the stockroom there for a few months,\" Wilda said. She wiped the sweat from her forehead on her tunic sleeve, then turned and did the same for Leland as she spoke. \"It had just opened, right before I came down here, a couple years ago. Everybody in Henketh said it, 'you can always find work with Atwater.' Worst days of my life, up until I met Hugo.\"<br /><br />\"It's not always easy,\" Doyle said. He stared at Wilda, imagining what she'd say if she saw his cart full of unsold ceramics out there somewhere in the village. \"Trust me, I know it.\"<br /><br />\"It's not always easy because they make it that way. Cason, Aldus, that old bastard Erle &mdash; every one of those Atwater guys. If the guards got anybody, I hope it was them.\"<br /><br />Doyle stared at her for a moment, silent.<br /><br />\"You know, not really,\" she said. She squinted at Doyle, the candlelight flickering in her eyes, and shook her head with a shrug. \"Just if it &mdash; if it had to be somebody.\" "
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-7"
                }
            ],
            "solutions": []
        },
        "s2-7.8": {
            "title": "Talking to Wilda",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"What's happening in the keep, then?\" Doyle asked. \"Maybe there's somebody there who can help. Maybe for your friend, or &mdash; I don't know, maybe they'll keep us safe.\"<br /><br />\"I doubt it,\" Wilda said, staring down at Leland's wound. \"Whatever's happening out here started in the keep. That's how it goes, every time. Their problems become ours.\"<br /><br />\"I guess,\" Doyle said. \"It probably can feel that way.\"<br /><br />\"It is that way.\"<br /><br />\"Maybe.\"<br /><br />Wilda stared at him for a moment, her face stern. \"You think anybody out here did this?\"<br /><br />\"No, I didn't mean&mdash;\"<br /><br />\"They've been out of sorts all week,\" Wilda said. She moved the cloth away from Leland, slapping it down on the table next to the water bowl, and leaned in toward Doyle. \"It's like everybody in the keep just locked down and stopped talking to us &mdash; not that we ever heard from anybody but Haley anyways. We're nobody out here, you know? Nobody tells us anything.\" <br /><br />Doyle nodded. \"Yeah.\"<br /><br />\"There's just whispers. Everybody knows something's wrong. Haley's not coming around, Aldo's gone. A couple days ago, Hugo even talked to Father Payton, but he said, what was it &mdash; <i>cleric's privilege,</i> he said, can't be talking to us. They're doing whatever they want in there, and when something finally falls apart, the first we hear about it is\"&mdash;she choked for a second, her voice beginning to shake&mdash;\"is them dragging bodies through the courtyard like it's nothing. Like they've been in there all this time, just waiting, you know? Waiting to kill us, dump us all in the pit.\"<br /><br />Doyle didn't say anything. His hands were clenched tight, his body tense.<br /><br />\"Sorry,\" Wilda said, shaking her head. \"You didn't &mdash; I'm sorry.\"<br /><br />\"It's okay.\"<br /><br />Wilda's head kept shaking. \"It's been a long night.\"<br /><br />\"I understand. It's okay.\"<br /><br />\"Got carried away,\" Wilda said, her voice leveling out. She grabbed the cloth from the table and wet it again, turning once more to the wound at Leland's side. \"All I mean to say is that I don't think you're going to find any help in there. They've made the lines pretty clear, you know?\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-7"
                }
            ],
            "solutions": []
        },
        "s2-7.9": {
            "title": "Talking to Wilda",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"What do you know about the Captain?\" Doyle asked. He could see the man's empty eyes in his head, feel the steel of his gauntlet around his neck. \"Aldo, that's his name?\" <br /><br />Wilda looked uncertain. \"What do I know about him?\"<br /><br />\"I've never never seen anything like it. If you saw his eyes, you'd know what I mean. One of the guards outside the gate, he was still &mdash; he tried to talk to the Captain, to Aldo, but the man just killed him like it meant nothing. Just like that, in the mud.\"<br /><br />\"Yeah,\" Wilda said. She stared at Leland as he leaned back against the hay bale, his eyes closed and his face pale. It looked like she wanted to say something to him, but she didn't. Then she turned back to Doyle. \"I've seen what he's capable of.\"<br /><br />\"Who is he? How could &mdash; how could he do that?\"<br /><br />\"He's not anybody,\" Wilda said. She looked uncertain again, as if that wasn't what she'd meant to say, but she didn't know how to say it any better. \"He's a &mdash; just a man, you know? I didn't really know him that well. He'd come by for a horse pretty often, I'd saddle it for him. He was quiet, serious about training. Always picky. Had an air about him like I shouldn't talk to him, so I didn't.\"<br /><br />\"Just a man,\" Doyle repeated. He stared at Leland's wound as Wilda shifted her weight, raw, torn flesh visible under the man's tunic for a moment. \"How can that be?\"<br /><br />\"Some of the older guys were friendly with him. Hugo said he used to be different &mdash; a long time ago, I mean, before I worked here. Used to be he'd chat with people out in the courtyard, even play cards sometimes at the servants' quarters. That's what Hugo said, anyways.\"<br /><br />\"Friendly?\" Doyle asked. He tried to picture that solemn, steel-plated form with a deck of cards in his hand, a flagon raised to his lips by torchlight. \"I just &mdash; I can't see it.\"<br /><br />\"I don't know what to tell you. He's not anybody special.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-7"
                }
            ],
            "solutions": []
        },
        "s2-7.10": {
            "title": "Talking to Wilda",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"You're not the only survivors out here,\" Doyle said. \"I met a man in the catacombs, under the Temple of Yabiz. Ed Clifford &mdash; you know him?\"<br /><br />\"I do,\" Wilda said. She dabbed once more at Leland's wound, then turned to Doyle, a matter-of-fact expression on her face, as if she expected him to say more. Somehow he expected something different from her, some joy at the knowledge that others had lived. \"What's he doing in there?\" <br /><br />\"Hiding out, just like you were.\" <br /><br />\"You didn't tell him to come here, did you?\"<br /><br /><span class='@c2-50'>\"No,\" Doyle said, hesitant. \"He said he wouldn't leave unless Father Payton came to get him. Would it have been bad if I did?\"</span><br /><br /><span class='c2-50'>\"No,\" Doyle said, hesitant. \"He wouldn't leave unless Father Payton came to get him. I convinced him that was\"&mdash;he paused, uncertain of their relationship, of how Wilda might react&mdash;\"well, I got him to leave, but he just took off. Would it have been bad if I did?\"</span><br /><br />\"I don't know,\" Wilda said. She leaned back against the hay bale next to Leland, one arm draped on top of it. Her lips moved as if she were searching for words, but she kept pausing, then shaking her head. \"He's just &mdash; it's no surprise he wouldn't leave without Father Payton's permission, you know? That sounds about right for him. I never understood that.\"<br /><br />\"Ed's fine,\" Leland said, his eyes closed, head back against the hay. Doyle would've thought he was asleep if he hadn't just spoken. \"He's a nice guy.\"<br /><br />\"He's fine, I'm glad he's okay,\" Wilda said, her head still shaking. She glanced at Leland, her expression hard to read in the candlelight but reading almost as annoyed. \"I'm not saying &mdash; look, how about this. A few months ago, somebody\"&mdash;she glanced at Leland&mdash;\"left one of the pens unlatched. We end up with a horse out in the courtyard. He can't go anywhere, it's not a big problem. We get him back inside before anybody really sees, you know?\"<br /><br />\"Okay,\" Doyle said, unclear where the story was going. \"Sure.\"<br /><br />\"I'm not going to bring it up to Haley, not to anybody at the keep. Leland's not, Hugo's not. Even Father Payton, I guarantee you he saw it, but he didn't say a word. Ed, though &mdash; the second Haley comes down here, Ed has something to say about it. Ed opens his mouth.\"<br /><br />\"It wasn't like that,\" Leland said. He opened his eyes and started to lift his head, then grimaced and leaned back again. \"He didn't mean anything by it.\"<br /><br />Wilda shook her head. \"It's just no surprise, you know?\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-7"
                }
            ],
            "solutions": []
        },
        "s2-7.11": {
            "title": "Talking to Wilda",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"What happened to him?\" Doyle asked. He watched as Wilda tossed aside a scrap of blood-soaked cloth and tore a new one from the balled-up sheet she had been using. \"Was it the Captain?\" <br /><br />Wilda shook her head, sighing. \"One of the others.\"<br /><br />\"Oh,\" Doyle said. He wasn't sure if he should press further, but the situation was so unusual, he didn't think he could help it. \"Someone you knew?\"<br /><br />\"Landon Ford,\" Wilda said. She held the cloth to Leland's side, silent for a moment, staring down at the wound. There was a look on her face Doyle couldn't quite make sense of, her whole expression scrunching as if in disgust, hard shadows forming in the lines at the corners of her eyes. \"They swear an oath, you know? When they join the garrison, they swear an oath to keep us all safe. I looked him right in the eye, Landon &mdash; it was like he didn't even recognize me.\"<br /><br />\"They're not themselves,\" Doyle said, nodding. \"That's clear.\"<br /><br />\"He's an asshole,\" Leland said, lifting his head from the hay bale where it rested. He was drenched in sweat, shaggy brown hair matted and wild on his forehead, his eyes glassy and shining in the candlelight. He was about Doyle's size, but wiry and muscular in a way Doyle had never been. Still, he strained from even that slight movement, his voice raspy. \"He's himself &mdash; he knew.\"<br /><br />\"Sit still,\" Wilda said, putting a hand his shoulder. \"You shouldn't talk.\"<br /><br />\"It's just what it looked like to me,\" Doyle said. \"I don't know.\"<br /><br />Wilda didn't say anything, her fresh cloth still pressed to Leland's side."
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-7.12"
                }
            ],
            "solutions": []
        },
        "s2-7.12": {
            "title": "Talking to Wilda",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I hope this wasn't because of me,\" Doyle said. He glanced down to see Wilda's cloth turning red, then the blood that had pooled on the wood beneath him. \"Out there with the Captain.\"<br /><br />\"No,\" Wilda said. Again she paused, her eyes flicking back and forth as if she were solving a puzzle in her head. \"We stayed behind when the bell in the tower started ringing &mdash; it's for emergencies, you know? &mdash; because we thought they might need the horses. Sir Carden, even Haley or Aldo. Whoever. Then we saw the guards dragging bodies out from the keep, so we hid. All night we were up here, pitch black, just waiting. By afternoon, we didn't hear anybody.\"<br /><br />\"So you left?\"<br /><br />\"I thought we'd be able to just walk out, but they were there in the street. Landon and Holden &mdash; Holden Miller, I know him, too. I tried to talk to them, and it's like they didn't hear me, not a word. One second I'm talking, and then there's a longsword in Leland's gut, just like that.\"<br /><br />\"I told you,\" Leland said, his head back, eyes closed. \"That asshole wouldn't listen.\"<br /><br />Wilda nodded. \"Leland didn't want to talk to them.\"<br /><br />\"I told you,\" he said again, his head swaying. \"I &mdash; I said it.\"<br /><br />\"You did,\" Wilda said. She stared at him for a moment, her expression distant. Then she turned to Doyle again. \"After that, we ran. Hugo thought we could cut through the garden, but &mdash; you know, you saw it. They dug it all up, that pit. Found you there just by chance.\"<br /><br />\"I'm glad you did,\" Doyle said. \"I am.\"<br /><br />He wondered if she was telling the entire truth, though. He couldn't remember how he got to the loft, or how they got him away from the Captain, but it was hard to imagine that it didn't involve some risk they wouldn't have taken otherwise. He thought of Blondie and his cart, and his disheveled hair, his days-old stubble creeping across his face, and he heard his father's voice in the back of his head &mdash; <i>you weighed them down</i>, the old man would've said &mdash; and he wondered if she regretted it. <br /><br />\"It's good you're okay,\" Wilda said, dabbing at Leland's wound. \"At least somebody is.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-7"
                }
            ],
            "solutions": []
        },
        "s2-19": {
            "title": "The Storage Shed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "While many of the wooden structures in the courtyard had a weathered, graying quality that suggested they had been built long ago, the storage shed put them to shame. It was disheveled, leaning slightly due to uneven foundation, with decaying wooden sides that showed decades of wear, one even sporting a ragged opening where some animal must have chewed its way inside. <br /><br />Doyle opened the door and held out his torch, looking over a pile of old tools and detritus that must have been piled there for years. A few shovels and hoes leaned against the wall next to the door, and a stack of buckets sat in one corner next to a basket filled with torn rags. On the wall behind them was a small pegboard that displayed a variety of old tools, most of them missing. "
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle opened the door of the graying wooden shed and held out his torch. The same pile of old tools and detritus greeted him in the flickering light. He glanced down at the ragged opening some animal had chewed into the base of the shed, trying to imagine what could have done it.<br /><br />A few shovels and hoes leaned against the wall next to the door, and a stack of buckets sat in one corner next to a basket filled with torn rags. On the wall behind them was a small pegboard that displayed a variety of old tools. Most were missing. "
                }
            ],
            "choices": [
                {
                    "text": "Look at the pegboard",
                    "target": "s2-19.1",
                    "items": [
                        "i2-11"
                    ]
                },
                {
                    "text": "Look for the crutches",
                    "target": "s2-19.2",
                    "conditions": [
                        {
                            "c4-65": "yes"
                        },
                        {
                            "c4-66": "unset"
                        }
                    ],
                    "items": [
                        "i4-18"
                    ],
                    "setsConditions": [
                        {
                            "c4-66": "yes"
                        }
                    ]
                },
                {
                    "text": "Go to the animal pens",
                    "target": "s2-14.2"
                }
            ],
            "solutions": []
        },
        "s2-19.1": {
            "title": "On the Pegboard",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle held his torch up to light the pegboard. It was wooden, hanging on the right-hand wall from a wire, covered in a grid of small holes. Some were filled with iron pegs to hold up the few tools that had been placed on it: a rusted hammer, and a broom that dangled past the bottom, and a few different trowels. <br /><br />One thing caught Doyle's eye: a single, tiny key hanging from a ring on one of the pegs at the end. The shed was cluttered, but it was clear it didn't correspond to anything inside. He glanced back toward the servants' quarters. Give the state of the place, it didn't seem likely that anybody would miss it. <br /><br />Sighing, he grabbed the key."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle held his torch up to light the pegboard. It was wooden, hanging on the right-hand wall from a wire, covered in a grid of small holes. Some were filled with iron pegs to hold up the few tools that had been placed on it: a rusted hammer, and a broom that dangled past the bottom, and a few different trowels. <br /><br />On the far left side was the empty peg where the tiny key had been."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-19"
                }
            ],
            "solutions": []
        },
        "s2-19.2": {
            "title": "In the Shed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"Okay,\" Doyle mumbled to himself, \"where are you?\"<br /><br />He held out his torch to light the innards of the shed, glancing at the pegboard again before sliding a few rag-filled buckets aside with his foot. There was a musty smell to everything &mdash; the structure must have done nothing to keep things dry &mdash; and he grimaced as he leaned past the buckets to look behind them. There was nothing.<br /><br />Then he started sorting through the shovels and hoes. A stack of them leaned against the back wall of the shed, and he moved them over one after the other. Some were broken or too rusted to be usable &mdash; the servants should take better care of their tools, Doyle thought, shaking his head &mdash; before he stopped, a smile spreading across his face. Nestled in the stack was a pair of crutches.<br /><br />\"That's it,\" Doyle said as he grabbed them. \"Perfect.\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-19"
                }
            ],
            "solutions": []
        },
        "s2-21": {
            "title": "The Bedchamber",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The first thing Doyle noticed as he stepped through the open doorway into the bedchamber was that nothing crunched beneath his feet. Every surface in the main room was covered in thatch and broken wood, or stray bits of straw from a punctured mattress, but the bedchamber seemed to have made it through largely unscathed. Maybe whoever was inside had come out upon hearing whatever commotion took place, or perhaps there had been nobody there at all.<br /><br />Like the main room, the walls were lined with identical-looking beds. There were only four in the bedchamber, though, and each had a bit more space on either side. Doyle couldn't imagine it made much difference in day-to-day life, but it was unmistakably purposeful. He imagined himself working for years and fostering relationships to climb the ranks among the servants &mdash; sweating every day to make sure he was noticed &mdash; and ending up with nothing but a few extra inches next to his bed. It wasn't much, he thought, but at least it was something.<br /><br />Against the wall between the beds was a heavy wooden trunk. It was braced with studded iron, and a padlock sealed the latch. A few tin cups, some still full of water, were scattered across the top, all sitting just below a tapestry hanging from the wall. Doyle glanced up at it before kneeling down and tugging at the padlock. There was no way he was getting that off without a key.<br /><br /><span class='c4-77'>\"Hey, kid,\" came a voice from one of the beds. Doyle jumped at the sound, then froze &mdash; he couldn't believe he hadn't noticed somebody there under the sheets &mdash; but his panic quickly subsided as he saw Mr. Hadden's bearded face in the torchlight. His words were slurred, the open bottle of Igbani rum sitting on the floor next to the bed. \"What, you come to &mdash; you come to see me again?\"</span>"
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "The walls were lined with four identical-looking beds. Doyle looked down at them as he walked through the room: thin straw-stuffed mattresses, each with a bit more space on either side than those in the main room. He ran a hand along one, the plain white linens cool to the touch.<br /><br />Against the wall between the beds was a heavy wooden trunk. It was braced with studded iron, and a padlock sealed the latch. A few tin cups, some still full of water, were scattered across the top, all sitting just below a tapestry hanging from the wall. Doyle glanced up at it before kneeling down and tugging at the padlock. There was no way he was getting that off without a key.<br /><br /><span class='c4-77,@c4-78'>\"Hey, kid,\" came a voice from one of the beds. Doyle jumped at the sound, then froze &mdash; he couldn't believe he hadn't noticed somebody there under the sheets &mdash; but his panic quickly subsided as he saw Mr. Hadden's bearded face in the torchlight. His words were slurred, and the half-empty bottle of Igbani rum sat on the floor next to the bed. \"What, you come to &mdash; you come to see me again?\"</span><br /><br /><span class='c4-77,c4-78,@c4-87'>\"Come on &mdash; come on, kid,\" Mr. Hadden said from the bed. His words were slurred, the open bottle of Igbani rum sitting on the floor next to the bed. \"Stay a while. Talk to me.\"</span><br /><br /><span class='c4-87'>Then he looked at Hadden in the bed, his eyes closed, chest still rising and falling with every breath. His black and gray hair was sweaty and matted to his forehead, his beard resting on top of the white sheet pulled up to his neck. The red stain at his side had grown.<br /><br />For a moment, Doyle thought he should try to wake him and see if he was okay. It didn't seem there was much purpose to that, though. The old man had made his position clear.</span>"
                }
            ],
            "choices": [
                {
                    "text": "Look at the tapestry",
                    "target": "s2-21.1",
                    "setsConditions": [
                        {
                            "c4-78": "yes"
                        }
                    ]
                },
                {
                    "text": "Use the rusted key on the trunk",
                    "target": "s2-21.2",
                    "conditions": [
                        {
                            "c4-79": "unset"
                        }
                    ],
                    "items": [
                        "i4-20"
                    ],
                    "itemsToRemove": [
                        "i4-1"
                    ],
                    "conditionalItems": [
                        "i4-1"
                    ],
                    "setsConditions": [
                        {
                            "c4-78": "yes"
                        },
                        {
                            "c4-79": "yes"
                        }
                    ]
                },
                {
                    "text": "Talk to Hadden",
                    "target": "s4-30",
                    "conditions": [
                        {
                            "c4-77": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c4-78": "yes"
                        }
                    ]
                },
                {
                    "text": "Go to the main room",
                    "target": "s2-14",
                    "setsConditions": [
                        {
                            "c4-78": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-21.1": {
            "title": "The Tapestry",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle held his torch up to get a better look at the tapestry pinned to the wood above the trunk. It looked old, most of it a deep purple framed by an ornamental pattern in white &mdash; the Carden family colors &mdash; but in the center was a faded, woven image. It depicted a small pond in a forest clearing, woodland creatures gathered around and drinking from it. Rising from the water was the Watchful Eye of Yabiz, dead center in the tapestry and haloed like the sun, staring Doyle in the face.<br /><br />Above the eye was a single sentence, probably from the Invocation of Yabiz, Doyle assumed. He didn't recognize it, though. It was written out in ornate, white calligraphy:<br /><br /><i>Under his Watchful Eye, no drop of sweat goes uncounted.</i>"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-21"
                }
            ],
            "solutions": []
        },
        "s2-21.2": {
            "title": "In the Trunk",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle slipped the rusted key into the heavy padlock that held the trunk's latch shut, and to his surprise, it fit. He turned it and heard a satisfying <i>click</i>, then pulled the padlock loose. Grinning, he moved all the half-full tin cups onto the ground &mdash; the servants' quarters may have been destroyed, but he didn't need to make it worse &mdash; before opening the lid.<br /><br />Inside were piles of bedding. White linens like the ones on the mattresses were folded and stacked all the way to the top, and Doyle wondered why they'd even bother to lock such things up. Then he noticed the tools arranged on one side, all probably meant for crafting and repairing the linens of the keep: a cork full of needles, and a colorful collection of threads, and some wooden lucets and thread reels.<br /><br />What stuck out to Doyle most of all, though, was the pair of steel fabric shears glinting in the torchlight. The handles were leather-wrapped and comfortable, and the blades were polished to a mirror-like sheen, flickering his torchlight right back at him. Nodding, he pocketed them."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-21"
                }
            ],
            "solutions": []
        },
        "s1-14.2": {
            "title": "Hadden's Room",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c1-7": "unset"
                        }
                    ],
                    "text": "Doyle squatted down next to Hadden, carefully moving the man's hands from the wound to look at it. Blood soaked the edges of the opening torn in the linen of his tunic &mdash; it was knee-length and embroidered, with a silver-studded belt, fancier than anything Doyle had ever owned &mdash; and oozed from a small slit of a wound in Hadden's stomach. <br /><br />Once Doyle saw the wound, he realized how unprepared he was to deal with it. He looked wide-eyed around the room for a moment as if he might, in a moment of absurd good luck, find some clearly-marked medicinal solution. All he saw was a straw-stuffed mattress and an end table next to a small rug made from the fur of some ambiguous animal, plus bits of splintered wood from the door.<br /><br />\"I don't know what to do,\" Doyle said. \"I thought I could &mdash; I don't know.\"<br /><br />\"Just leave,\" Hadden said. \"Go, kid. You don't have much time.\"<br /><br />\"I can't just &mdash; okay, how about this?\" Doyle pulled the <b>Astholme Brandy</b> from his bag, uncorked it and poured a bit in the man's mouth. Then he plopped Hadden's hands back over the wound and left the bottle next to him. \"That's better, right? That's something.\"<br /><br />\"It's something,\" Hadden said. He rested one hand on the bottle. \"It sure is.\"<br /><br />Doyle looked around the room again, then at Hadden's blood-soaked hands clasped over his wound. He didn't know what else to say. For some reason, all he could think of was the deer he and his father had found bleeding out on the side of the road near Cotlin Hill. He was about ten years old at the time, and it had an arrow lodged in its throat &mdash; some hunter must have hit it, but lost track of it afterwards &mdash; and his father took a knife to it, let it die easy. For years, Doyle thought of that deer looking up at him, those beady black eyes, the rapid breathing. He always wondered if it knew it was dying. <br /><br />\"I don't know,\" Doyle said. \"That's all I can really &mdash; I don't think I can do much else.\" <br /><br />Hadden nodded, one hand resting on the bottle. \"Go, kid. Please.\"<br /><br />\"I don't want to just&mdash;\"<br /><br />\"Please.\"<br /><br />Doyle nodded. \"I'll find help, okay? I'll be back.\""
                },
                {
                    "conditions": [
                        {
                            "c1-7": "yes"
                        }
                    ],
                    "text": "\"Here we go, how about this?\" Doyle asked. He pulled the <b>Astholme Brandy</b> from his bag, squatted down and uncorked it, and poured a bit into Hadden's mouth. It began to stream down the sides of his face and onto to his tunic. \"That's better, right? That's something.\"<br /><br />\"It's something,\" Hadden said as Doyle set the bottle down next to him. \"It sure is.\"<br /><br />Doyle looked around the room again, then at Hadden's blood-soaked hands clasped over his wound. He didn't know what else to say. For some reason, all he could think of was the deer he and his father had found bleeding out on the side of the road near Cotlin Hill. He was about ten years old at the time, and it had an arrow lodged in its throat &mdash; some hunter must have hit it, but lost track of it afterwards &mdash; and his father took a knife to it, let it die easy. For years, Doyle thought of that deer looking up at him, those beady black eyes, the rapid breathing. He always wondered if it knew it was dying. <br /><br />\"I don't know,\" Doyle said. \"That's all I can really &mdash; I don't think I can do much else.\" <br /><br />Hadden nodded, one hand resting on the bottle. \"Go, kid. Please.\"<br /><br />\"I don't want to just&mdash;\"<br /><br />\"Please.\"<br /><br />Doyle nodded. \"I'll find help, okay? I'll be back.\""
                }
            ],
            "choices": [
                {
                    "text": "Go downstairs",
                    "target": "s1-17"
                }
            ],
            "solutions": []
        },
        "s2-12.4": {
            "title": "The Statue's Hand",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle pulled the carved stone sword from his pack and held it up in front of the statue, eyes darting between the two. Both were mottled and discolored in the same way &mdash; a slightly greenish look to each &mdash; and while they didn't look exactly the same, he was certain they must have once gone together. He lifted the sword over the statue's hand, the stone hilt hovering over the opening in its grip, one hand on the blade trying to steady it as he slipped it inside.<br /><br />It fit perfectly. The proportion looked right, and the textures seemed to match. Doyle stepped back to look at the full spectacle: Sir Edmond Carden, the first of House Carden, and his blazing purple blade. Most of that didn't come across &mdash; the statue's features were worn down with age, the sword fairly nondescript &mdash; but he knew what it was meant to represent. <br /><br />Something should have happened, Doyle thought. He expected a doorway to open, or a some sort of treasure chest to appear, but there was nothing. Hesitant, he wobbled the sword left and right."
                },
                {
                    "conditions": [
                        {
                            "g1": "unset"
                        }
                    ],
                    "text": "Again Doyle looked at the carved stone sword in the statue's hand. The proportion looked right, and the textures seemed to match. It was clear what he was meant to be seeing: Sir Edmond Carden, the first of House Carden, and his blazing purple blade. Most of that didn't come across, of course &mdash; the statue's features were worn down with age, the sword fairly nondescript &mdash; but he knew. <br /><br />Then he wobbled the sword left and right again. Something should have happened, Doyle thought. He expected a doorway to open, or a some sort of treasure chest to appear, but there was nothing.<br />"
                }
            ],
            "choices": [
                {
                    "text": "Stop looking",
                    "target": "s2-12"
                }
            ],
            "solutions": [
                {
                    "text": "Adjust the sword",
                    "targetOnSuccess": "s2-12.5",
                    "targetOnFailure": "s2-12.5",
                    "conditions": [
                        {
                            "c4-101": "unset"
                        }
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c4-101": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c4-101": "no"
                        }
                    ],
                    "difficulty": {
                        "sd": "14"
                    }
                },
                {
                    "text": "Adjust the sword",
                    "targetOnSuccess": "s2-12.5",
                    "targetOnFailure": "s2-12.5",
                    "conditions": [
                        {
                            "c4-101": "no"
                        }
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c4-101": "yes"
                        }
                    ],
                    "threshold": true,
                    "difficulty": {
                        "sd": "16"
                    }
                }
            ]
        },
        "s2-12.5": {
            "title": "The Statue's Hand",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c4-101": "yes"
                        }
                    ],
                    "text": "Sighing, Doyle stepped back from the statue and stared at the sword. It was a key, he thought. It <i>had</i> to be. The sword slotted perfectly into the statue's hand, and he couldn't imagine any other reason they'd been separated. He put one hand on the tip of the blade, thinking.<br /><br />Then it came to him. He grabbed the hilt on both sides, nodding to himself, and twisted the sword in the knight's hand. A key had to turn, he thought. It rotated halfway around, then something inside let out a satisfying <i>click,</i> and he knew he was right.<br /><br />The ground shifted slightly under his feet and he saw a thin line form in the dirt as it fell down somewhere below. The statue was on a stone panel, he realized, barely visible under centuries of dust and grime. He pressed his shoulder to the kite shield of Sir Edmond Carden, then pushed, the statue giving almost immediately and sliding, along with the panel, deeper into the wall cavity. <br /><br />On the dirt floor where the statue had been was an opening leading to a pitch black stairwell. It was rough-hewn, as if carved from the bedrock itself, and narrow, with barely enough room for Doyle to walk without turning sideways. Doyle peered down into the dark, hesitant."
                },
                {
                    "conditions": [
                        {
                            "c4-101": "no"
                        }
                    ],
                    "text": "Sighing, Doyle stepped back from the statue and stared at the sword. He had been imagining it as some kind of oversized key meant to slot into the statue's hand like a lock, but maybe that wasn't quite right, he thought. Maybe it was something else entirely.<br /><br />Years ago, when Doyle was still a boy, his father told him a story about Lord Deorwine Alder, the first Duke of Sudmere, leading the siege of Dunmore. According to the story, Lord Alder sacked the city and drove out the Malorins in just one day, flying the banners of Old King Rothmund by nightfall. The treasury beneath the castle was cursed, though &mdash; iron gates bound shut by ancient Malorin spells &mdash; and for weeks even Lord Alder's court mages were unable to break through. The gates didn't open, Doyle's father said, until Lord Alder himself thought to utter a verbal order, and with the will of Yabiz surging through him, simply commanded it the magic to dissipate.<br /><br />\"Begone,\" Doyle said, imagining the Watchful Eye of Yabiz staring down at him. He looked at the sword for a moment, then glanced behind him as if somebody might be listening. Again he spoke, louder this time. \"I said &mdash; I said begone, magic! I command you to open!\"<br /><br />Nothing happened.<br /><br />\"Begone,\" Doyle said once more. The statue was still, the sword exactly where he left it. He felt like could hear his own words bouncing back at him through the cool, musty air. \"Just open, okay?\"<br /><br />Still nothing happened."
                }
            ],
            "choices": [
                {
                    "text": "Give up",
                    "target": "s2-12.4",
                    "conditions": [
                        {
                            "c4-101": "no"
                        }
                    ]
                },
                {
                    "text": "Turn back",
                    "target": "s2-12",
                    "conditions": [
                        {
                            "c4-101": "yes"
                        }
                    ]
                },
                {
                    "text": "Go down the stairs",
                    "target": "s2-22",
                    "conditions": [
                        {
                            "c4-101": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-22": {
            "title": "The Old Tomb",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle took each step carefully. He balanced with one hand pressed to the wall, his torch held out in the other, raw stone on either side only inches from his shoulders. The flickering torchlight cast strange shadows on the steps &mdash; they were ragged and uneven, covered in dirt and debris from years of disuse &mdash; and each felt almost like a trap just waiting to send him toppling.<br /><br />It wasn't far down, though. Pebbles and grit rolled under Doyle's boots as he stepped into a huge, open chamber not unlike the catacombs above, but significantly longer and wider. The cavernous room was lined with row after row of carved stone pedestals, each topped with an iron urn embossed with writing Doyle couldn't make out in the dark. He blew the dust from one as he walked by, torchlight flickering back at him in the dull reflection of the metal.<br /><br />Toward the back of the room, the presentation of the urns grew more extravagant. They were spaced further apart, surrounded by what looked like decorations &mdash; old pottery and tapestries, and rust-eaten displays of armor, and decrepit-looking swords mounted on stands next to the pedestals &mdash; but most looked like it had been untouched and decaying for centuries. Doyle held his torch up to a suit of plate armor, bits of it detached and scattered across the dirt below, then wiped the dust from its surface. Something was etched in the steel, though he couldn't read it.<br /><br />\"Malorin,\" he whispered to himself. \"Ancient Malorin.\""
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Pebbles and grit rolled under Doyle's boots as he walked through the old tomb. The cavernous room was lined with row after row of carved stone pedestals, each topped with an iron urn embossed with writing he couldn't make out in the dark. He blew the dust from one as he walked by, torchlight flickering back at him in the dull reflection of the metal.<br /><br />Toward the back of the room, the presentation of the urns grew more extravagant. They were spaced further apart, surrounded decorations, most rust-eaten and decrepit-looking, likely untouched for centuries. Doyle held his torch up to a suit of plate armor, glancing again at the Malorin writing he had seen etched into the steel after wiping away the dust."
                }
            ],
            "choices": [
                {
                    "text": "Go up to the catacombs",
                    "target": "s2-12"
                },
                {
                    "text": "Look at the decorations",
                    "target": "s2-22.1",
                    "items": [
                        "i4-21"
                    ]
                },
                {
                    "text": "Look at the urns",
                    "target": "s2-22.2"
                }
            ],
            "solutions": []
        },
        "s2-22.1": {
            "title": "The Burial Decorations",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle walked through the more lavish displays in the back of the tomb, curious to find anything of interest. There didn't seem to be any consistent way to categorize he decorations he saw. Some were purely ornamental, like framed paintings leaning up against the broad pedestals or glazed vases that might have once held flowers, but others felt more functional, like the rusted swords and armor that immediately drew his eye. A set of wooden blocks &mdash; a child's toys &mdash; sat on one.<br /><br />To disturb a grave was a Black Mark in the Eyes of Yabiz. That was well known to anybody in Eadmore, not that it deterred more adventurous grave robbers. Doyle wiped the dust from the nearest urn &mdash; more indecipherable Malorin text showed underneath &mdash; and hesitated. It was a Black Mark, Doyle thought, but only because the grave of a citizen of Eadmore was blessed by Yabiz, and ancient Malorin graves didn't belong to citizens of Eadmore.<br /><br />\"It's fine,\" Doyle said to himself as he eyed each sword and rusted bit of steel in search of anything useful. After a minute or so, he settled on an iron-braced chest next to one of the pedestals and knelt down in front of it. \"It's a Malorin grave, it's fine.\"<br /><br />The hinges on the lid cracked as Doyle lifted it. He let it drop behind the chest, suddenly imagining Father Urduan watching him from the stairwell, before rummaging through the contents. First was a layer of linen folded like a blanket, then a neatly-folded tunic covered in decorative stitching and colorful patterns, stiff to the touch, but undamaged.<br /><br />After Doyle removed them both, all that was left was an ornate brigandine at the bottom of the chest. It was in the shape of a vest, made from red-dyed canvas covered in sewn gold patterns. The light of his torch glinted on a few steel plates riveted to the fabric &mdash; even after so many centuries, the metal still shined &mdash; and he grinned as he pulled it from the chest.<br /><br />\"It's fine,\" Doyle said again, nodding to himself as he pocketed the brigandine. Then he turned toward the stairwell, almost expecting to see Father Urduan there. \"It's fine, okay?\""
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle walked again through the lavish displays in the back of the tomb. There didn't seem to be any consistent way to categorize he decorations he saw. Some were purely ornamental, like framed paintings leaning up against the broad pedestals or glazed vases that might have once held flowers, but others felt more functional, like the rusted swords and armor that immediately drew his eye. A set of wooden blocks &mdash; a child's toys &mdash; sat on one.<br /><br />\"It's fine,\" Doyle said to himself as he passed by the empty chest next to one of the pedestals, its lid broken at the hinges on the dirt behind it. \"They don't belong to Yabiz.\"<br />"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-22"
                }
            ],
            "solutions": []
        },
        "s2-22.2": {
            "title": "The Burial Urns",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle held his torch up to one of the urns and wiped the dust from it. The iron beneath was dull &mdash; it would've needed scrubbing to truly see the surface again &mdash; but still the etched writing came through. Some Malorin enclaves still spoke their old language, even though it had been banned since the days of Old King Rothmund, and he'd heard there were even scholars in New Eda and working for Fitchwood Dunman who could read it. Doyle didn't know a word, though.<br /><br />They must have been names, he thought. Maybe birth and death dates, maybe some details of lives. He knew that Malorins burned their dead, rather than burying them &mdash; he saw it firsthand passing by a funeral at a little village near Port Warren not all that long ago &mdash; and each urn must have been filled with the ashes of a person. It seemed like a strange custom to him, but still there was something appealing about it: no face left to decay, no body, no bones. He'd just be gone.<br /><br />Maybe the Temple of Yabiz above his head used to be something else, Doyle thought, long ago, before Sir Edmond Carden took Cardwyke for Eadmore, before Old King Rothmund ever set foot on its shores. He looked around the room at the expanse of urns &mdash; there must have been hundreds at least, maybe thousands &mdash; and wondered how far back it went. It was hard to think about."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-22"
                }
            ],
            "solutions": []
        },
        "s2-13.11": {
            "title": "Talking to Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"I was just looking at the crypts out there,\" Doyle said, glancing back toward the entryway to the catacombs. \"A lot of 'Ed' names.\"<br /><br />\"Yeah,\" Ed said, nodding. \"It's always been that way. Some families don't keep a line going like that, but the Cardens sure do. They've kept it alive, mister.\"<br /><br />\"I just thought it was interesting,\" Doyle said. He smiled, then motioned toward Ed. \"Here you are, an 'Ed' name yourself. What are the odds of that?\"<br /><br />\"It's not really a coincidence,\" Ed said. His expression was hard to read in the torchlight, but it struck Doyle as almost annoyed. \"I was born in Fingate, mister &mdash; that's still Carden land. And every baby is born clean in the Light of Yabiz, but my mother still &mdash; she worried. She wanted me to have a name that told people I belong there.\"<br /><br />\"Why wouldn't you belong there?\" <br /><br />\"My father was an Oralander. She didn't really want to advertise that.\"<br /><br />\"An Oralander? What is that?\"<br /><br />\"An Oralander,\" Ed said again. He looked even more annoyed, motioning toward Doyle with one hand as if to spur him into understanding. \"From way back. The Oralanders.\"<br /><br />Doyle shook his head.<br /><br />\"One of the Malorin kingdoms,\" Ed said. A huge sigh followed the words, a look of resignation on his face. \"That's what you'd call it, I guess.\"<br /><br />\"Sorry, right,\" Doyle said. He wasn't familiar with the term, but he wasn't surprised. He'd heard years ago that 'Malorin' wasn't usually the name Malorins used for themselves. Some were quite adamant about it, he'd been told, but he couldn't understand why it was necessary to draw such a distinction. He'd known Lanxians, and Wealdruners, and Gyoric people, but he'd never thought of any of them as anything other than a citizen of Eadmore, just like him. <i>People come in every color you can imagine,</i> Mr. Fultan told him once, <i>but gold only comes in one.</i> <br /><br />\"If I ever have a son,\" Ed said, \"I won't name him Ed.\"<br /><br />\"Would you give him an Oralander name, then?\"<br /><br />Ed shook his head, sighing again. \"I don't know any.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-13.4"
                }
            ],
            "solutions": []
        },
        "s2-20.4": {
            "title": "The Outer Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "As he stared out through the portcullis into the empty streets of Cardwyke, Doyle rooted through his bag and pulled out the tin of caramels he had found in Ms. Clay's room and opened it. Then he reached through the bars and held it out, banging with his free hand against the iron.<br /><br />\"Blondie,\" he whispered. Then he chirped, as he did any time he wanted to get her attention. \"Blondie, are you out there? Are you out there, girl?\"<br /><br />He watched for shadows in the orange glow against the houses ahead, but there was nothing there. Again he chirped, the tin still dangling, and looked for any sign of her. Just as he began to think he should give up, he heard a familiar snort in the darkness, then a dark shape approached.<br /><br />Blondie emerged from the night, the cart still rolling behind her, and walked up to the portcullis. She immediately homed in on the open tin in his hand, but as she sniffed at the caramels, she seemed to hesitate. The reaction surprised Doyle &mdash; there was hardly anything she wouldn't eat &mdash; but still he was sure she would like them. <br /><br />\"Come on, girl,\" he said. \"Why not?\""
                }
            ],
            "choices": [],
            "solutions": [
                {
                    "text": "Convince her to try them",
                    "targetOnSuccess": "s2-20.5",
                    "targetOnFailure": "s2-20.5",
                    "itemsToRemoveOnSuccess": [
                        "i4-11"
                    ],
                    "itemsToRemoveOnFailure": [
                        "i4-11"
                    ],
                    "itemsToAddOnSuccess": [
                        "i4-23",
                        "i4-22"
                    ],
                    "itemsToAddOnFailure": [
                        "i4-22"
                    ],
                    "conditionsSetOnSuccess": [
                        {
                            "c4-103": "yes"
                        }
                    ],
                    "conditionsSetOnFailure": [
                        {
                            "c4-103": "no"
                        }
                    ],
                    "difficulty": {
                        "cd": "12"
                    }
                }
            ]
        },
        "s2-20.5": {
            "title": "The Outer Gate",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c4-103": "yes"
                        }
                    ],
                    "text": "\"They're good,\" Doyle said, taking one from the tin and popping it in his mouth. The taste surprised him, even though he had already tried one &mdash; it was gritty and thick, with a flavor more like a vegetable than a candy, as if somebody had managed to find a way to make caramel without using sugar &mdash; but he didn't let his reaction show. \"You'll love it, girl. Just try it, okay?\"<br /><br />Again Blondie sniffed around the tin, hesitant. Doyle kept his hand perfectly still as she considered it, then smiled as she flopped her tongue across the container, lapping up half of the caramels in the process. The rest dropped from his hand and scattered across the ground, but she pursued them, leaning down to pluck each one from the mud as she sniffed them out.<br /><br />\"There you go,\" Doyle said, petting her black mane. \"That's good, isn't it?\"<br /><br />As she searched near the bottom of the portcullis, Doyle took the opportunity to reach again for the pack at her side. There wasn't much left inside &mdash; mostly he felt bits of grit at the bottom from years of use &mdash; until he fumbled across something soft like cloth. He pulled it out to find a wad of used bandages, still slightly stained with his blood from when he cut his hand on a bit of ceramic in Fingate. It was better than nothing, he thought.<br /><br />Then he reached again, one more time, to be certain it was empty. He felt the soft bottom of the pack, and the old grit, and nothing else. The bottom was softer than he expected, though, and he suddenly realized that it wasn't the pack he was feeling at all, but a wool doublet &mdash; one of his favorites, which Nela had made for him years ago &mdash; that he'd forgotten he even brought with him from Hemstoke. He pulled it from the pack, a smile on his face.<br /><br />\"I miss you, girl,\" Doyle said, eyes on the doublet as he continued petting Blondie. She sniffed around in the mud for any more caramels, and after finding nothing, turned and wandered back into the dark. \"I'll come find you once I get out, okay? I promise.\""
                },
                {
                    "conditions": [
                        {
                            "c4-103": "no"
                        }
                    ],
                    "text": "\"They're good,\" Doyle said, taking one from the tin and popping it in his mouth. The taste surprised him, even though he had already tried one &mdash; it was gritty and thick, with a flavor more like a vegetable than a candy, as if somebody had managed to find a way to make caramel without using sugar &mdash; and almost involuntarily, he spit the half-chewed lump out into the mud at his feet. \"That's just me, though, you'll &mdash; you'll love it, girl. Just try it, okay?\"<br /><br />Again Blondie sniffed around the tin, hesitant. Doyle kept his hand perfectly still as she considered it, then gasped as she knocked the whole thing from his grip, caramels spilling and scattering out across the mud. For a moment he thought she might pursue them and pluck from the ground, but instead she just snorted and licked his hand, as if relieved that they were gone.<br /><br />\"Come on,\" he said. \"It's not that bad.\"<br /><br />As she searched near the bottom of the portcullis to make sure he hadn't dropped anything better, Doyle took the opportunity to reach again for the pack at her side. There wasn't much left inside &mdash; mostly he felt bits of grit at the bottom from years of use &mdash; until he fumbled across something soft like cloth. He pulled it out to find a wad of used bandages, still slightly stained with his blood from when he cut his hand on a bit of ceramic in Fingate. It was better than nothing, he thought.<br /><br />\"I miss you, girl,\" Doyle said, eyes on the strewn caramels as he continued petting Blondie. She sniffed around in the mud for anything else of interest, and after finding nothing, turned and wandered back into the dark. \"I'll come find you once I get out, okay? I promise.\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-20"
                }
            ],
            "solutions": []
        },
        "s2-8.3": {
            "title": "The Cleric's Lectern",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "As Doyle stepped behind the lectern, he met the gaze of the statue of Yabiz and hesitated. He probably wasn't supposed to be back there, he thought, though he'd never heard any rule or commandment to tell him so. He felt its eyes on his back as he turned and faced the pews, both hands on the lectern, and imagined himself preaching to a rapt audience. All eyes would be on him, every person in every pew listening to what he had to say, his words carrying real weight.<br /><br />Then he knelt down, his attention drawn to the closed wooden doors on the back of the lectern. It must have been hollow inside, he thought, with room to store something. There was no handle or keyhole, nothing to grab onto and pull at all. Instead there was just a circular indentation in the wood crossing both doors, a bit larger than a gold coin, showing the Watchful Eye of Yabiz. <br /><br />Curious, he turned back and glanced at the statue again. Its eyes seemed fixed on him, and he felt a nervous sensation looking at it. The one at the temple in Cotlin Hill never made him feel that way &mdash; it looked gentler somehow, more forgiving &mdash; but he hadn't been there since he was child, so he wasn't sure that he could trust his memory of it. All he knew was that when he looked at it as a boy, he never got the sense that it was looking back."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "<span class='@c4-104'>As Doyle stepped behind the lectern, he glanced again at the statue of Yabiz, struck by the sense that he shouldn't be there. He felt its eyes on his back as he knelt down, his attention turning to the closed wooden doors on the back of the lectern. There was no handle or keyhole, nothing to grab onto and pull at all. Instead there was just a circular indentation in the wood crossing both doors, a bit larger than a gold coin, showing the Watchful Eye of Yabiz.</span><br /><br /><span class='c4-104'>As Doyle stepped behind the lectern, he glanced again at the statue of Yabiz, struck by the sense that he shouldn't be there. He felt its eyes on his back as he knelt down, his attention turning to the wooden doors on the back of the lectern. They were open now, the decorative coin still affixed to one, the empty shelf where his rugged copy of <i>The Invocation of Yabiz</i> had been still visible inside. He was getting more use out of it than Father Payton could.</span><br /><br />Then he turned and stared at the statue for a moment, nervous. The one at the temple in Cotlin Hill never made him feel that way &mdash; it looked gentler somehow, more forgiving &mdash; but he hadn't been there since he was child. Maybe it would look the same if he saw it again."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-8"
                },
                {
                    "text": "Use the decorative coin",
                    "target": "s2-8.4",
                    "conditions": [
                        {
                            "c4-104": "unset"
                        }
                    ],
                    "items": [
                        "i4-25"
                    ],
                    "conditionalItems": [
                        "i4-24"
                    ],
                    "setsConditions": [
                        {
                            "c4-104": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-8.4": {
            "title": "In the Lectern",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle pulled the oversized silver coin from his pack and held it to indentation in the doors, nodding to himself. It was a perfect fit. Then he pressed the coin into place, rotating it until the raised image of the Watchful Eye seemed to line up with the one indented in the wood. <br /><br />With a sudden <i>click</i>, the coin locked into place and something seemed to unlatch inside. Both doors drifted open an inch or so with a quiet creak, and Doyle grinned. Father Payton must have been a clever man, he thought, to take an interest in such needless complexity. He crouched down, his torch at his side for light, then opened the doors rest of the way.<br /><br />Inside was a single shelf, which held nothing but what appeared to be a plain wooden box sealed shut with a brass latch, a leather carrying strap attached to the back. The latch had no lock, so Doyle pulled the box out and opened it, revealing yet another copy of the <i>Invocation of Yabiz</i> inside. In all his life, he had never seen one so rugged and well-protected. It was like a book meant for battle, for some mercenary chaplain or freelancer cleric to carry into the dangerous wilds.<br /><br />\"I've seen my share of danger tonight,\" Doyle whispered to himself, resealing the case and taking it by the strap. Then he glanced again at the statue of Yabiz. \"I need this.\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-8"
                }
            ],
            "solutions": []
        },
        "s1-24.1": {
            "title": "The Mud Pit",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Finally, Doyle emerged from an alleyway into a clearing of sorts &mdash; it may have been a town garden, he thought, because piles of vegetation had been haphazardly chopped apart and tossed aside around the edges &mdash; and in the center was a massive, open pit. His boots squelched into nearly-black mud as he stepped forward, and an overwhelming stench of death and burning hit him all at once.<br /><br />Inside were rows and rows of bodies. Some were visibly wounded &mdash; missing limbs or showing huge gashes across torsos, or soaked in blood from whatever crushing blow had ended them &mdash; and all seemed to have been tossed in without thought, limbs splayed in all directions, mud swallowing some of those at the edges. Some were blackened and charred, a few still smoking, as if some attempt had been made to burn them, probably unsuccessful because of the mud. Doyle crouched down at the edge, a wave of nausea coming over him. <br /><br />The urge to retch was so strong that Doyle nearly didn't notice the two men on the other side of the pit. One was a city guard, mud-caked and disheveled like the others, but otherwise seemingly lucid, sprawled out and struggling on his back. The other was a large man in full plate armor, glistening steel marred by dirt and spatters of blood, a flowing purple and white cape dragging through the mud. <br /><br />The plate-clad man wore a steel helmet with ornate patterns etched into the sides, but as he pinned the guard down with one hand, he removed it with the other. Dark brown hair cut messy and short framed a bearded face marked by deep lines on the forehead. They seemed out of place on a man who otherwise looked like he couldn't be more than 30 years old. Given the armor, Doyle expected a strong chin and angular bone structure &mdash; the respectable breeding of a place like Astholme or Wescardine &mdash; but the man looked ordinary, like a well-built soldier one might see marching along the road between any two towns in Eadmore. "
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s1-24"
                }
            ],
            "solutions": []
        },
        "s2-13.12": {
            "title": "Talking to Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "\"That's what we saw,\" Ed said, nodding. He put both hands on his head and stared down at the dirt floor, black stubble showing on his scalp in the torchlight. \"Captain Aldo dragging a body through the courtyard. Mr. Tullis and Mr. Shaw were just behind him. As soon as we saw that, Father Payton sent me down here, made me promise not to leave until he came and got me.\"<br /><br />Doyle sighed. \"Why would they do it?\"<br /><br />Ed shook his head, still staring down at the dirt.<br /><br />\"Maybe a power grab,\" Doyle said. Those sorts of betrayals were known to happen &mdash; the Dulthwaite Revolt, for example, was still fresh on the minds of most everybody in Eadmore &mdash; but it didn't make much sense for a place like Cardwyke. The Captain and his men had to know that you couldn't cross a family as old as the Cardens without drawing the attention of every lesser house in Alsporth &mdash; the whole province would gather to crush that kind of rebellion &mdash; and that's without even considering the might of the baroness herself, secluded as she was in Whitestern.<br /><br />Ed looked up. \"A power grab?\"<br /><br />\"Take the keep for himself,\" Doyle said, shrugging. \"Or maybe the Captain is working with a &mdash; with some other knight, maybe. I'm just a salesman, okay? I don't know.\"<br /><br />\"Maybe,\" Ed said. Then he shook his head, rubbing his bald head again. \"I've known him for years, though. He's not always the friendliest person around, but he's a believer, mister. I don't think anybody who knows the Light of Yabiz could do something like this.\"<br /><br />\"No?\"<br /><br />\"I really don't,\" Ed said. He was silent for a moment, as if reflecting on his own words. \"I just hope Father Payton comes back soon. I hope it's not as bad as it looked.\"<br /><br />Doyle nodded, thinking of the bodies in the pit outside. \"Let's hope.\""
                }
            ],
            "choices": [
                {
                    "text": "Keep talking",
                    "target": "s2-13.4"
                }
            ],
            "solutions": []
        },
        "s2-13.13": {
            "title": "A Gift for Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "<span class='c2-6'>\"I've got something for you, okay?\" Doyle said. \"You said you were cold and &mdash; look, I wasn't trying to steal from you. I'm a merchant by trade, so if anybody respects property, it's me.\"<br /><br />\"Not what it looked like to me,\" Ed said, shaking his head. \"No way.\"<br /><br />\"Just take this. It's yours. An apology for any misunderstanding.\"</span><br /><br /><span class='!c2-6'>\"I've got something for you, okay?\" Doyle said. \"You said you were cold and &mdash; look, I wasn't trying to steal from you. I'm a merchant by trade, so if anybody respects property, it's me.\"<br /><br />\"Not what it looked like to me,\" Ed said, shaking his head. \"No way.\"<br /><br />\"Just take this. It's yours. An apology for any misunderstanding.\"</span><br /><br /><span class='c2-7'>\"Listen,\" Doyle started, \"I want you to take this. If you're going to stay down here, it's just going to get colder. You've got more use for it than I do.\"</span><br /><br /><span class='!c2-7'>\"Listen,\" Doyle started, \"I want you to take this. If you're going to stay down here, it's just going to get colder. You've got more use for it than I do.\"</span><br /><br />Ed watched as Doyle pulled the horse blanket from his pack, then slid it toward him. The two men were silent for a moment, then Ed walked out from behind the crypt and picked it up, unfolding and holding it up in front of him. He looked at Doyle and nodded before draping the blanket over his shoulders, breathing deep as he seemed to savor the warmth. <br /><br />\"I hope this helps,\" Doyle said. \"Just remember it, okay? Once we find a way out of here, remember Doyle Scoggins really helped you out. Keep me in mind.\"<br /><br />\"Thanks, mister,\" Ed said, pulling the blanket tight around his shoulders. \"This is good.\"<br /><br /><span class='c2-38'>\"I just want you to know you can trust me, okay? We're friends here.\"<br /><br />Ed was silent, but he nodded.<br /><br />\"Are we friends?\"<br /><br />\"Yeah, I think so,\" Ed said, still nodding. \"We're friends.\"</span>"
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-13.15",
                    "conditions": [
                        {
                            "c2-57": "unset"
                        }
                    ]
                },
                {
                    "text": "Continue",
                    "target": "s2-13.15",
                    "conditions": [
                        {
                            "c2-57": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c2-38": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-13.14": {
            "title": "A Gift for Ed",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "<span class='c2-6'>\"I found something you might want,\" Doyle said. \"You seem hungry.\"<br /><br />Ed shook his head. \"You weren't worried about that when you robbed me, mister.\"<br /><br />\"No, I didn't &mdash; look, I'm trying to make it up to you, okay? This is for you.\"</span><br /><br /><span class='!c2-6'>\"I found something you might want,\" Doyle said. \"You seem hungry.\"<br /><br />Ed shook his head. \"You weren't worried about that when you robbed me, mister.\"<br /><br />\"No, I didn't &mdash; look, I'm trying to make it up to you, okay? This is for you.\"</span><br /><br /><span class='c2-7'>\"You seem hungry,\" Doyle said. \"You'll need food if you plan to stay down here. I'm sure I'll manage without it, so you should take this.\"</span><br /><br /><span class='!c2-7'>\"You seem hungry,\" Doyle said. \"You'll need food if you plan to stay down here. I'm sure I'll manage without it, so you should take this.\"</span><br /><br />Ed watched as Doyle pulled the sack of food from his pack, then slid it toward him. The two men were silent for a moment, then Ed walked out from behind the crypt and looked inside, glancing at Doyle, then back at the sack. There was enough food inside to last Ed for days if he wanted, even if most of it wasn't generally meant to be eaten raw. He began to rummage around inside.<br /><br />\"I hope you find something you like,\" Doyle said. \"Just keep me in mind, okay? I went out of my way to get this, put myself in &mdash; in some real danger, I think.\"<br /><br />\"Thanks, mister,\" Ed said, producing a raw turnip from the sack and biting into it. He seemed to recoil slightly at the taste, but kept at it. \"I needed this.\"<br /><br /><span class='c2-38'>\"I just want you to know you can trust me, okay? We're friends here.\"<br /><br />Ed was silent, but he nodded.<br /><br />\"Are we friends?\"<br /><br />\"Yeah, I think so,\" Ed said, still nodding. \"We're friends.\"</span>"
                }
            ],
            "choices": [
                {
                    "text": "Continue",
                    "target": "s2-13.15",
                    "conditions": [
                        {
                            "c2-56": "unset"
                        }
                    ]
                },
                {
                    "text": "Continue",
                    "target": "s2-13.15",
                    "conditions": [
                        {
                            "c2-56": "yes"
                        }
                    ],
                    "setsConditions": [
                        {
                            "c2-38": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-13.15": {
            "title": "The Burial Chamber",
            "finished": false,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle looked over the burial chamber, torchlight flickering across the free-standing sarcophagi that lined the room. The walls were lined with crypts &mdash; too many to read &mdash; and must have held every Carden since Rothmund's Push. It didn't seem elegant enough for such an established family.<br /><br /><span class='c2-6,@c2-38'>Ed peeked over a sarcophagus in the back. \"What do you want, mister?\"<br /><br />Doyle shook his head, uncertain of what to say to him.<br /><br />\"I don't have anything else,\" Ed said. \"Just leave me alone.\"</span><br /><br /><span class='!c2-6,@c2-38'>Ed leaned over a sarcophagus in the back, a cautious squint on his face, his dagger glinting in the light. \"What do you want, mister?\"<br /><br />Doyle shook his head, uncertain of what to say to him.<br /><br />\"I don't have anything else,\" Ed said. \"Just leave me alone.\"</span><br /><br /><span class='c2-7,@c2-38'>Ed leaned over a sarcophagus in the back. \"You need something else, mister?\"<br /><br />Doyle shook his head, uncertain of what to say to him.<br /><br />\"I'm sorry I couldn't help more,\" Ed said. He tilted his head slightly, as if trying to see over Doyle's shoulder, an anxious look on his face. \"I don't know anything.\"</span><br /><br /><span class='!c2-7,@c2-38'>Ed leaned over a sarcophagus in the back, his dagger glinting in the light. \"You need something else, mister?\"<br /><br />Doyle shook his head, uncertain of what to say to him.<br /><br />\"I'm sorry I can't help,\" Ed said. He tilted his head slightly, as if trying to see over Doyle's shoulder, an anxious look on his face. \"I don't know anything.\"</span><br /><br /><span class='c2-38'>\"You need anything else, mister?\" Ed asked. He sat on the edge of a sarcophagus in the back, the horse blanket draped over his shoulders and the sack of food spilling out across the stone surface next to him. \"I'm sorry I don't know more.\"</span><br /><br /><span class='@c2-56,@c2-57'>Even in the dim light, Doyle could see him shaking. It wasn't clear whether it was from fear, or from the cold underground air of the catacombs. Rumbling stomach sounds came from behind the sarcophagus, and Doyle sighed. The man wasn't doing well.</span><br /><br /><span class='c2-56,@c2-57'>Even in the dim light, Doyle could see the horse blanket draped over Ed's shoulders. He seemed comfortable, at least, despite the cold underground air of the catacombs. Still, rumbling stomach sounds came from behind the sarcophagus. </span><br /><br /><span class='@c2-56,c2-57'>Even in the dim light, Doyle could see him shaking. It wasn't clear whether it was from fear, or from the cold underground air of the catacombs. The sack of food sat on top of the sarcophagus, though, a few root vegetables spilling out. That was a start, at least.</span>"
                }
            ],
            "choices": [
                {
                    "text": "Return Ed's dagger",
                    "target": "s2-13.3",
                    "conditions": [
                        {
                            "c2-58": "unset"
                        },
                        {
                            "c2-38": "yes"
                        }
                    ],
                    "itemsToRemove": [
                        "i2-12"
                    ],
                    "conditionalItems": [
                        "i2-12"
                    ],
                    "setsConditions": [
                        {
                            "c2-58": "yes"
                        }
                    ]
                },
                {
                    "text": "Offer Ed the sack of food",
                    "target": "s2-13.14",
                    "conditions": [
                        {
                            "c2-57": "unset"
                        }
                    ],
                    "itemsToRemove": [
                        "i2-7"
                    ],
                    "conditionalItems": [
                        "i2-7"
                    ],
                    "setsConditions": [
                        {
                            "c2-57": "yes"
                        }
                    ]
                },
                {
                    "text": "Offer Ed the horse blanket",
                    "target": "s2-13.13",
                    "conditions": [
                        {
                            "c2-56": "unset"
                        }
                    ],
                    "itemsToRemove": [
                        "i2-5"
                    ],
                    "conditionalItems": [
                        "i2-5"
                    ],
                    "setsConditions": [
                        {
                            "c2-56": "yes"
                        }
                    ]
                },
                {
                    "text": "Talk to Ed",
                    "target": "s2-13.4",
                    "conditions": [
                        {
                            "c2-38": "yes"
                        }
                    ],
                    "conditionsOr": [
                        {
                            "c2-58": "yes"
                        },
                        {
                            "c2-59": "yes"
                        }
                    ]
                },
                {
                    "text": "Go back to the entryway",
                    "target": "s2-12"
                }
            ],
            "solutions": []
        },
        "s2-14.7": {
            "title": "The Shelves",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The shelves were makeshift constructions of plain wooden planks set across stone bricks, each one stacked on the next, but they must have served their purpose well enough, because they were lined from end to end with food. Most of it looked plain and long-lasting &mdash; the kinds of root vegetables one might boil into pottage, along with dried herbs and bags of salt &mdash; but there were some cuts of salted meat as well, most of it fish, likely fresh from the docks down the cliff face below the keep.<br /><br />\"A little of everything,\" Doyle said, nodding. \"Just in case.\" <br /><br />He grabbed an old sack from one the shelves and began to gather, filling it with whatever he could find. There were turnips and potatoes and onions, and a few cuts of salted fish. Satisfied, he tied it off."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "The shelves were makeshift constructions of plain wooden planks set across stone bricks, each one stacked on the next, but they must have served their purpose well enough, because they were lined from end to end with food. Most of it looked plain and long-lasting &mdash; the kinds of root vegetables one might boil into pottage, along with dried herbs and bags of salt &mdash; but there were some cuts of salted meat as well, most of it fish, likely fresh from the docks down the cliff face below the keep.<br /><br />Doyle almost felt guilty about how much he had taken, but given the state of things up the ladder, he doubted anybody else would be eating it.<br />"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-14.5"
                }
            ],
            "solutions": []
        },
        "s1-3.5": {
            "title": "The Provisions",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle knelt down in front of one of the nearest barrels and looked it up and down for some kind of label. His first job had been selling barrels of ale just like that one for Fultan & Sons Brewery back in Cotlin Hill, and every one of their barrels had a logo stamped in black ink on the front. <i>People don't need to remember the taste,</i> Mr. Fultan used to say, <i>but they need to remember the name.</i><br /><br />There didn't seem to be any markings Doyle could find, though. Four other barrels were lined up next to it &mdash; they looked the same, unmarked, probably made somewhere in Cardwyke &mdash; and a few mismatched crates were stacked next to them, one uncovered just enough that Doyle could see clean linens and straw-stuffed pillows inside. <br /><br />On top were a collection of glass bottles, each with a paper label. Doyle only recognized a few of the bigger names &mdash; Dunmore Vineyards, and Light Manor, and Upton Brothers &mdash; but despite selling ale, he had never learned much about liquor or wine. One bottle caught his attention, pocket-sized and made from blue-tinted glass with a cork stopper. He opened it to smell the contents.<br /><br />\"Rose,\" he said to himself. The liquid inside was thick and oily, like some kind of salve, rather than a drink. Perhaps it was a medicine, he thought. It didn't seem likely that it would do any good for a major wound, but for something less severe, it struck him as useful. Again he looked around the room, almost expecting to see somebody watching him. \"I'm going to take this, okay? I'm sorry.\"<br /><br />Then he pocketed the small, glass bottle."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle knelt down in front of one of the nearest barrels and looked it up and down for some kind of label. His first job had been selling barrels of ale just like that one for Fultan & Sons Brewery back in Cotlin Hill, and every one of their barrels had a logo stamped in black ink on the front. <i>People don't need to remember the taste,</i> Mr. Fultan used to say, <i>but they need to remember the name.</i><br /><br />There didn't seem to be any markings Doyle could find, though. Four other barrels were lined up next to it &mdash; they looked the same, unmarked, probably made somewhere in Cardwyke &mdash; and a few mismatched crates were stacked next to them, one uncovered just enough that Doyle could see clean linens and straw-stuffed pillows inside. <br /><br />On top were a collection of glass bottles, each with a paper label. Doyle only recognized a few of the bigger names &mdash; Dunmore Vineyards, and Light Manor, and Upton Brothers &mdash; but despite selling ale, he had never learned much about liquor or wine. An empty space between two of the bottles marked the spot where the rose salve had been."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-3.1"
                }
            ],
            "solutions": []
        },
        "s1-4.2": {
            "title": "The Toolbox",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle knelt down in front of the toolbox and pulled the cloth covering aside. First he saw the hammer &mdash; it had already been sticking out from beneath the cloth &mdash; and next to it was a wooden tray filled with an assortment of iron nails. Some of them looked dusty and bent as if they had been nailed in somewhere else and pulled loose to reuse.<br /><br />The rest of the box was less organized. In a pile Doyle saw a small hand-cranked auger, and a pricking knife that looked like it had dulled with use, and an assortment of different chisels still littered with wood shavings. Next to them was an iron hook, about ten inches long with enough room at the eye for a rope to pass through and be tied. It was probably meant for the well, Doyle thought, but as he glanced up at the wooden overhang, it was not clear to him how to attach it.<br /><br />\"I don't know,\" Doyle said, pulling the hook from the toolbox and holding it up toward Blondie. \"Do you think it's okay if I borrow this?\"<br /><br />Blondie didn't say anything as he pocketed it."
                },
                {
                    "conditions": [
                        {
                            "g1": "yes"
                        }
                    ],
                    "text": "Doyle knelt down in front of the toolbox, the cloth covering pulled aside where he had left it. First he saw the hammer &mdash; it had already been sticking out from beneath the cloth &mdash; and next to it was a wooden tray filled with an assortment of iron nails. Some of them looked dusty and bent as if they had been nailed in somewhere else and pulled loose to reuse.<br /><br />The rest of the box was less organized. In a pile Doyle saw a small hand-cranked auger, and a pricking knife that looked like it had dulled with use, and an assortment of different chisels still littered with wood shavings. Next to them was the empty space where the iron hook had been."
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s1-4"
                }
            ],
            "solutions": []
        },
        "s2-13.16": {
            "title": "The Sarcophagus",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "The sarcophagus Ed had been hiding behind was larger than most, clearly meant to house two bodies rather than one. It was made from gray stone, clean and relatively new, with carvings of wolf heads protruding from each of the corners at the base. A heavy lid covered the top, two faces &mdash; a man and a woman, vague and somber &mdash; carved in relief at the head as if to represent the people inside, but as Doyle read the etched names, he realized they weren't both there yet.<br /><br /><i>Lady Ann Carden - Born February 22nd, 456, Died June 5th, 493</i><br /><i>Sir Edsel Carden - Born May 12th, 452</i><br /><br />There was still room for Sir Carden's death date to be added. Doyle ran a hand along the words, wondering if Ed had chosen the sarcophagus purposefully, or just as a coincidence, a product of it being the largest in the burial chamber. Then he stepped back, unnerved by the thought of being aware that one's own sarcophagus was prepared and waiting for them somewhere. There was a time that he thought he and Nela might be buried like that, side by side outside the Temple of Yabiz in Cotlin Hill only a few feet from his mother's grave, but he wasn't sure anymore.<br /><br />Then he turned, holding his torch up to the next sarcophagi in the row. There were two, neither as large as Sir and Lady Carden's, but both looked relatively clean and new as well. On each of the lids was a flower carved in relief &mdash; they were different types, though Doyle couldn't name them &mdash; just below the names and dates.<br /><br /><i>Aida Carden - Born March 11th, 475, Died November 14th, 479</i><br /><i>Edley Carden - Born June 25th, 474, Died December 2nd, 480</i>"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-13.10"
                }
            ],
            "solutions": []
        },
        "s2-14.8": {
            "title": "The Lockbox",
            "finished": true,
            "texts": [
                {
                    "conditions": [
                        {
                            "c2-60": "unset"
                        }
                    ],
                    "text": "On one of the shelves was a wooden lockbox. It was wide and deep, about a foot in either direction, made from small planks with gaps in between large enough for the straw inside to poke through. It was hard to tell what else there was, but as he picked up the box and rocked it gently back and forth, he thought he heard liquid sloshing inside. The sound made him thirsty.<br /><br />An iron latch with a small keyhole sealed the box shut."
                },
                {
                    "conditions": [
                        {
                            "c2-60": "yes"
                        }
                    ],
                    "text": "On one of the shelves was a wooden lockbox. It was wide and deep, about a foot in either direction, already unlocked and open. Doyle glanced again at the contents.<br /><br />Inside was a bed of straw, a collection of glass bottles of different sizes and colors nested in it, each filled with varying amounts of liquid. Some had paper labels describing their contents &mdash; one read <i>Kendall-Mervin Daily Use Bile Harmony Supplement<i>, while a trio of others appeared to be Gladwyn Brothers products related to various forms of hair growth and removal &mdash; but few looked useful to Doyle. They mostly seemed to be cosmetics and novelties.<br />"
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-14.5"
                },
                {
                    "text": "Use the tiny key",
                    "target": "s2-14.9",
                    "conditions": [
                        {
                            "c2-60": "unset"
                        }
                    ],
                    "items": [
                        "i2-13"
                    ],
                    "itemsToRemove": [
                        "i2-11"
                    ],
                    "conditionalItems": [
                        "i2-11"
                    ],
                    "setsConditions": [
                        {
                            "c2-60": "yes"
                        }
                    ]
                }
            ],
            "solutions": []
        },
        "s2-14.9": {
            "title": "Inside the Lockbox",
            "finished": true,
            "texts": [
                {
                    "conditions": [],
                    "text": "Doyle pulled the tiny key from his pack and turned it in the lockbox keyhole with a satisfying <i>click</i>. Inside the box was a bed of straw, a collection of glass bottles of different sizes and colors nested in it, each filled with varying amounts of liquid. Some had paper labels describing their contents &mdash; one read <i>Kendall-Mervin Daily Use Bile Harmony Supplement</i>, while a trio of others appeared to be Gladwyn Brothers products related to various forms of hair growth and removal &mdash; but few looked useful to Doyle. They mostly seemed to be cosmetics and novelties.<br /><br />Only one bottle stood out to Doyle. It was small, made from clear glass and corked shut, and held only a single gulp of brown liquid inside. A paper label read <i>Brune Hill Medicines presents The One-Stop Remedy.</i> He uncorked it and wafted the scent to his nose. It was strong and sweet.<br /><br />\"Okay,\" Doyle said to himself, pocketing it. \"This might be good.\""
                }
            ],
            "choices": [
                {
                    "text": "Turn back",
                    "target": "s2-14.5"
                }
            ],
            "solutions": []
        }
    },
    "conditions": {
        "g1": {
            "description": ""
        },
        "inj1": {
            "description": "Sliced Hand+A thin cut across the palm of the hand that Doyle received while breaking open the glass case beneath the bar at the Golden Calf. It was worth it for that Astholme Brandy, though."
        },
        "c1-1": {
            "description": ""
        },
        "c1-2": {
            "description": ""
        },
        "c1-3": {
            "description": ""
        },
        "c1-4": {
            "description": ""
        },
        "c1-5": {
            "description": ""
        },
        "c1-6": {
            "description": ""
        },
        "c1-7": {
            "description": ""
        },
        "c1-8": {
            "description": ""
        },
        "inj2": {
            "description": "Cleaved Back+A nasty gash Doyle received after trying and failing to engage the City Guards outside the Golden Calf in hand-to-hand combat. Fighting was tougher than he imagined it would be."
        },
        "inj3": {
            "description": "Twisted Ankle+A throbbing sprain Doyle experienced after tripping while running from the City Guards near the Golden Calf. He had never been much of a runner, so it didn't come as much of a surprise."
        },
        "c1-9": {
            "description": ""
        },
        "c1-10": {
            "description": ""
        },
        "c1-11": {
            "description": ""
        },
        "inj4": {
            "description": "Slashed Arm+A gaping cut Doyle received after struggling with the Captain near the Mud Pit. Considering the power and stature of the man, Doyle felt lucky; it could have gone a lot worse."
        },
        "dth": {
            "description": ""
        },
        "c2-1": {
            "description": ""
        },
        "c2-2": {
            "description": ""
        },
        "c2-3": {
            "description": ""
        },
        "c2-4": {
            "description": ""
        },
        "c2-5": {
            "description": ""
        },
        "c2-6": {
            "description": ""
        },
        "c2-7": {
            "description": ""
        },
        "c2-8": {
            "description": ""
        },
        "c2-9": {
            "description": ""
        },
        "c2-10": {
            "description": ""
        },
        "c2-11": {
            "description": ""
        },
        "c1-12": {
            "description": ""
        },
        "c2-12": {
            "description": ""
        },
        "c2-14": {
            "description": ""
        },
        "c2-15": {
            "description": ""
        },
        "c2-16": {
            "description": ""
        },
        "c2-17": {
            "description": ""
        },
        "c2-18": {
            "description": ""
        },
        "c2-19": {
            "description": ""
        },
        "c2-20": {
            "description": ""
        },
        "c2-21": {
            "description": ""
        },
        "c2-22": {
            "description": ""
        },
        "c2-23": {
            "description": ""
        },
        "c2-24": {
            "description": ""
        },
        "c2-25": {
            "description": ""
        },
        "inj5": {
            "description": "Stabbed Thigh+A deep puncture wound Doyle received after trying and failing to disarm Ed Clifford in the catacombs below the Temple of Yabiz. Hopefully he'd be able to walk it off."
        },
        "c2-27": {
            "description": ""
        },
        "c1-13": {
            "description": ""
        },
        "c1-14": {
            "description": ""
        },
        "c2-28": {
            "description": ""
        },
        "c2-29": {
            "description": ""
        },
        "c2-30": {
            "description": ""
        },
        "c2-31": {
            "description": ""
        },
        "c2-32": {
            "description": ""
        },
        "c2-33": {
            "description": ""
        },
        "c2-34": {
            "description": ""
        },
        "c2-35": {
            "description": ""
        },
        "c2-36": {
            "description": ""
        },
        "c2-37": {
            "description": ""
        },
        "c3-1": {
            "description": ""
        },
        "c3-2": {
            "description": ""
        },
        "c3-3": {
            "description": ""
        },
        "inj6": {
            "description": "Lacerated Leg+A gash on the leg Doyle sustained after smashing apart casks in the buttery a little too aggressively. He'd done something similar as a child trying to force open a horse pen on his father's farm. "
        },
        "c3-4": {
            "description": ""
        },
        "c3-5": {
            "description": ""
        },
        "c3-6": {
            "description": ""
        },
        "c3-7": {
            "description": ""
        },
        "c3-8": {
            "description": ""
        },
        "c3-9": {
            "description": ""
        },
        "c3-10": {
            "description": ""
        },
        "inj7": {
            "description": "Bitten Thigh+A stinging bite wound Doyle received from the guard in the kitchen while trying to dodge his advances. Blondie had bitten Doyle once years ago, but the guard's bite was much worse."
        },
        "inj8": {
            "description": "Bruised Rib+A throbbing bruise Doyle sustained after inadvertently dropping a bag of flour on himself while fighting the guard in the kitchen. He never was much of a cook, so it wasn't surprising."
        },
        "c3-11": {
            "description": ""
        },
        "c3-12": {
            "description": ""
        },
        "c3-13": {
            "description": ""
        },
        "c3-14": {
            "description": ""
        },
        "c3-15": {
            "description": ""
        },
        "c3-16": {
            "description": ""
        },
        "c3-17": {
            "description": ""
        },
        "c3-19": {
            "description": ""
        },
        "inj9": {
            "description": "Smashed Thigh+A vicious bruise Doyle inflicted on himself after misjudging the weight of the rolling pin in the kitchen. He had never been a particularly capable cook, after all."
        },
        "inj10": {
            "description": "Sliced Leg+A nasty cut Doyle received while finally putting an end to the guard in the kitchen. It should have been painful, but it barely registered compared to the horror of what he had done to the man."
        },
        "c3-21": {
            "description": ""
        },
        "c3-22": {
            "description": ""
        },
        "c3-23": {
            "description": ""
        },
        "c3-24": {
            "description": ""
        },
        "c3-25": {
            "description": ""
        },
        "c3-26": {
            "description": ""
        },
        "c3-27": {
            "description": ""
        },
        "c3-0": {
            "description": ""
        },
        "c3-28": {
            "description": ""
        },
        "c3-29": {
            "description": ""
        },
        "c3-30": {
            "description": ""
        },
        "c3-31": {
            "description": ""
        },
        "c3-32": {
            "description": ""
        },
        "c3-33": {
            "description": ""
        },
        "c3-34": {
            "description": ""
        },
        "c3-35": {
            "description": ""
        },
        "c1-15": {
            "description": ""
        },
        "c1-16": {
            "description": ""
        },
        "c2-38": {
            "description": ""
        },
        "c2-40": {
            "description": ""
        },
        "c2-41": {
            "description": ""
        },
        "c2-42": {
            "description": ""
        },
        "inj11": {
            "description": "Mild Concussion+A throbbing head wound Doyle received after narrowly avoiding a City Guard's morning star in the inner gate and bashing his head against the wall. It could have been worse, Doyle thought."
        },
        "s2-43": {
            "description": ""
        },
        "c2-44": {
            "description": ""
        },
        "c3-36": {
            "description": ""
        },
        "c3-37": {
            "description": ""
        },
        "c3-38": {
            "description": ""
        },
        "c3-39": {
            "description": ""
        },
        "c3-40": {
            "description": ""
        },
        "c3-41": {
            "description": ""
        },
        "inj12": {
            "description": "Bruised Tailbone+A nasty bruise Doyle sustained after falling from a weapon rack while taking down one of the flails in the armory. Perhaps with better weapon training, he wouldn't have fallen."
        },
        "c3-42": {
            "description": ""
        },
        "c3-43": {
            "description": ""
        },
        "c3-44": {
            "description": ""
        },
        "inj13": {
            "description": "Scraped Shoulder+A painful scrape Doyle suffered after attempting to help during the assault on the Great Hall and slipping on the gore that littered the floor. At least he hadn't become part of it himself."
        },
        "c3-45": {
            "description": ""
        },
        "c3-46": {
            "description": ""
        },
        "c3-47": {
            "description": ""
        },
        "c3-48": {
            "description": ""
        },
        "c3-49": {
            "description": ""
        },
        "c3-50": {
            "description": ""
        },
        "c3-51": {
            "description": ""
        },
        "c3-52": {
            "description": ""
        },
        "c3-53": {
            "description": ""
        },
        "c4-1": {
            "description": ""
        },
        "c3-54": {
            "description": ""
        },
        "c3-55": {
            "description": ""
        },
        "c3-56": {
            "description": ""
        },
        "c3-57": {
            "description": ""
        },
        "c3-58": {
            "description": ""
        },
        "c3-59": {
            "description": ""
        },
        "c3-60": {
            "description": ""
        },
        "c3-61": {
            "description": ""
        },
        "c3-62": {
            "description": ""
        },
        "c3-63": {
            "description": ""
        },
        "c3-64": {
            "description": ""
        },
        "c3-65": {
            "description": ""
        },
        "c3-66": {
            "description": ""
        },
        "c3-67": {
            "description": ""
        },
        "c3-68": {
            "description": ""
        },
        "inj14": {
            "description": "Sprained Ankle+An aching ankle injury Doyle sustained during an awkward jump from the makeshift grappling hook to the keep rooftop below the bell tower. At least he cleared the gap between, Doyle thought. "
        },
        "c3-69": {
            "description": ""
        },
        "c4-0": {
            "description": ""
        },
        "c3-70": {
            "description": ""
        },
        "inj15": {
            "description": "Slashed Back+A stinging cut Doyle received from the Steward Haley's dagger after trying and failing to push him down the stairs in his private quarters. Those narrow castle steps always struck him as dangerous."
        },
        "c3-71": {
            "description": ""
        },
        "c3-72": {
            "description": ""
        },
        "c3-73": {
            "description": ""
        },
        "c3-74": {
            "description": ""
        },
        "c3-75": {
            "description": ""
        },
        "c2-45": {
            "description": ""
        },
        "c2-46": {
            "description": ""
        },
        "c2-47": {
            "description": ""
        },
        "c2-48": {
            "description": ""
        },
        "c2-49": {
            "description": ""
        },
        "c2-50": {
            "description": ""
        },
        "c3-76": {
            "description": ""
        },
        "c3-77": {
            "description": ""
        },
        "c2-51": {
            "description": ""
        },
        "c3-78": {
            "description": ""
        },
        "c2-52": {
            "description": ""
        },
        "c2-53": {
            "description": ""
        },
        "c4-2": {
            "description": ""
        },
        "c4-3": {
            "description": ""
        },
        "c4-4": {
            "description": ""
        },
        "c4-5": {
            "description": ""
        },
        "c4-6": {
            "description": ""
        },
        "c4-7": {
            "description": ""
        },
        "c4-8": {
            "description": ""
        },
        "c4-9": {
            "description": ""
        },
        "c4-10": {
            "description": ""
        },
        "c4-11": {
            "description": ""
        },
        "c4-12": {
            "description": ""
        },
        "c4-13": {
            "description": ""
        },
        "c4-14": {
            "description": ""
        },
        "c4-15": {
            "description": ""
        },
        "c4-16": {
            "description": ""
        },
        "c4-17": {
            "description": ""
        },
        "c4-18": {
            "description": ""
        },
        "c4-19": {
            "description": ""
        },
        "c4-20": {
            "description": ""
        },
        "c4-21": {
            "description": ""
        },
        "c4-22": {
            "description": ""
        },
        "c4-23": {
            "description": ""
        },
        "c4-24": {
            "description": ""
        },
        "c4-25": {
            "description": ""
        },
        "c4-26": {
            "description": ""
        },
        "c4-27": {
            "description": ""
        },
        "c4-28": {
            "description": ""
        },
        "c4-29": {
            "description": ""
        },
        "c4-30": {
            "description": ""
        },
        "c4-31": {
            "description": ""
        },
        "c4-32": {
            "description": ""
        },
        "c4-33": {
            "description": ""
        },
        "c4-34": {
            "description": ""
        },
        "inj16": {
            "description": "Gashed Arm+A long, clean cut on the inner arm that Doyle got after trying to prevent the broken display case in the gallery from falling. He'd watched enough breakables shatter in his time."
        },
        "inj17": {
            "description": "Twisted Shoulder+A throbbing shoulder injury Doyle received while attempting to push the guard from walkway in the garden. It hurt, but at least he was better off than the guard was."
        },
        "c4-35": {
            "description": ""
        },
        "inj18": {
            "description": "Cracked Elbow+A pulsating ache in the elbow that Doyle felt after a hard landing while jumping through the Captain's window. It made it hard to move his arm, but he was sure it'd be fine."
        },
        "c4-36": {
            "description": ""
        },
        "c4-37": {
            "description": ""
        },
        "c4-38": {
            "description": ""
        },
        "c4-39": {
            "description": ""
        },
        "c4-40": {
            "description": ""
        },
        "s4-42": {
            "description": ""
        },
        "s4-41": {
            "description": ""
        },
        "c2-54": {
            "description": ""
        },
        "c3-79": {
            "description": ""
        },
        "c4-43": {
            "description": ""
        },
        "c4-44": {
            "description": ""
        },
        "c4-45": {
            "description": ""
        },
        "c4-46": {
            "description": ""
        },
        "c4-47": {
            "description": ""
        },
        "c4-48": {
            "description": ""
        },
        "c4-49": {
            "description": ""
        },
        "c4-50": {
            "description": ""
        },
        "c4-51": {
            "description": ""
        },
        "c4-52": {
            "description": ""
        },
        "c4-53": {
            "description": ""
        },
        "c4-54": {
            "description": ""
        },
        "c4-55": {
            "description": ""
        },
        "c4-56": {
            "description": ""
        },
        "c4-57": {
            "description": ""
        },
        "inj19": {
            "description": "Sprained Wrist+A pounding wrist injury Doyle suffered while falling down the balcony stairs after attempting to hide from Mr. Haley outside the parlor. It was painful, but at least he didn't get caught."
        },
        "c4-58": {
            "description": ""
        },
        "c4-59": {
            "description": ""
        },
        "c3-80": {
            "description": ""
        },
        "c4-60": {
            "description": ""
        },
        "c3-81": {
            "description": ""
        },
        "c4-61": {
            "description": ""
        },
        "c4-62": {
            "description": ""
        },
        "c4-63": {
            "description": ""
        },
        "c4-64": {
            "description": ""
        },
        "c4-65": {
            "description": ""
        },
        "c4-66": {
            "description": ""
        },
        "c4-67": {
            "description": ""
        },
        "c4-68": {
            "description": ""
        },
        "c4-69": {
            "description": ""
        },
        "c4-70": {
            "description": ""
        },
        "c4-71": {
            "description": ""
        },
        "c4-72": {
            "description": ""
        },
        "c4-73": {
            "description": ""
        },
        "c4-74": {
            "description": ""
        },
        "c4-75": {
            "description": ""
        },
        "c4-76": {
            "description": ""
        },
        "c4-77": {
            "description": ""
        },
        "c4-78": {
            "description": ""
        },
        "c4-79": {
            "description": ""
        },
        "c4-80": {
            "description": ""
        },
        "c4-81": {
            "description": ""
        },
        "c4-82": {
            "description": ""
        },
        "c4-83": {
            "description": ""
        },
        "c4-84": {
            "description": ""
        },
        "c4-85": {
            "description": ""
        },
        "c4-86": {
            "description": ""
        },
        "c4-87": {
            "description": ""
        },
        "c4-88": {
            "description": ""
        },
        "c4-89": {
            "description": ""
        },
        "inj20": {
            "description": "Bruised Eye Socket+A painful bruise just next to the left eye that Doyle received after being struck by the Captain's steel gauntlet in the storage room. If it was that or the broadsword, he made the right choice."
        },
        "c4-90": {
            "description": ""
        },
        "c4-91": {
            "description": ""
        },
        "c4-92": {
            "description": ""
        },
        "c4-93": {
            "description": ""
        },
        "c4-94": {
            "description": ""
        },
        "c4-95": {
            "description": ""
        },
        "c4-96": {
            "description": ""
        },
        "c4-97": {
            "description": ""
        },
        "inj21": {
            "description": "Crushed Ankle+An aching, purple bruise Doyle got from the Captain's grip on his ankle. He wasn't sure what he'd heard crack inside, but he knew enough to be sure that the sound was never good. "
        },
        "inj22": {
            "description": "Bruised Throat+A ring-shaped purple bruise Doyle got from the Captain's grip on his throat. It made it hurt to talk, but that wasn't something that could ever impede a true salesman."
        },
        "c4-98": {
            "description": ""
        },
        "c4-99": {
            "description": ""
        },
        "c4-100": {
            "description": ""
        },
        "c4-101": {
            "description": ""
        },
        "c4-102": {
            "description": ""
        },
        "c2-55": {
            "description": ""
        },
        "c4-103": {
            "description": ""
        },
        "c3-18": {
            "description": ""
        },
        "c4-104": {
            "description": ""
        },
        "c4-105": {
            "description": ""
        },
        "c5-0": {
            "description": ""
        },
        "c4-106": {
            "description": ""
        },
        "c4-107": {
            "description": ""
        },
        "c2-56": {
            "description": ""
        },
        "c2-57": {
            "description": ""
        },
        "c2-58": {
            "description": ""
        },
        "c2-59": {
            "description": ""
        },
        "c1-17": {
            "description": ""
        },
        "inj23": {
            "description": "Shredded Calf+A series of jagged cuts Doyle got from broken wood after stomping through the trapdoor in the servants' quarters. It may have been painful, but it felt like an accomplishment."
        },
        "c2-60": {
            "description": ""
        },
        "c3-82": {
            "description": ""
        },
        "c3-83": {
            "description": ""
        },
        "c4-108": {
            "description": ""
        },
        "c4-109": {
            "description": ""
        },
        "c4-110": {
            "description": ""
        },
        "c4-111": {
            "description": ""
        },
        "c4-112": {
            "description": ""
        },
        "inj24": {
            "description": "Gashed Hands+A collection of small cuts Doyle got from shattered glass after toppling the shelf full of bottles in the apothecary's room. If only he had been a few inches taller."
        },
        "c4-113": {
            "description": ""
        },
        "c4-114": {
            "description": ""
        },
        "c4-115": {
            "description": ""
        }
    },
    "items": {
        "i1-1": {
            "type": "equippable",
            "name": "Pry Bar",
            "description": "An iron pry bar found next to the well in the village square. Various nicks and grooves suggest that it has been well used by whatever workman owned it. A stamped indentation in the blackened metal reads <i>Property of Atwater Ceramics Organization</i>.",
            "slot": "tool",
            "bonuses": {
                "grit": "1",
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i1-2": {
            "type": "static",
            "name": "Astholme Brandy",
            "description": "An expensive bottle of brandy brewed on the island of Astholme, off the Eastern coast of Eadmore. The blue-tinted glass signified its authenticity, and the wax seal over the cork was stamped with the wreath heraldry of Duke Wilton Slade of Astholme. "
        },
        "i1-3": {
            "type": "static",
            "name": "Bloody Locket",
            "description": "A blood-spattered locket Doyle accidentally yanked from around the neck of a guard outside the Golden Calf. It was oval-shaped with a simple pattern etched into it, hanging from a thin, silver chain, the clasp now broken. "
        },
        "i1-4": {
            "type": "static",
            "name": "Coiled Rope",
            "description": "A neatly-coiled 50-foot length of rope found in a trunk in the private room of the Golden Calf. Climbing had never been one of Doyle's strengths, but he tended to be fairly crafty, so he was sure it would come in handy."
        },
        "i1-5": {
            "type": "consumable",
            "name": "Rose Salve",
            "description": "A cork-stoppered glass bottle Doyle found amongst the provisions in the private room of the Golden Calf. Inside was a thick, oily liquid with a strong rose scent. It had to be some kind of medicine, Doyle assumed. What else could it be?",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i1-7": {
            "type": "static",
            "name": "Iron Hook",
            "description": "An iron hook about ten inches in length with enough room in the eye for a rope to pass through and be tied. It was dull at the end, rather than pointed, but still Doyle imagined it out on a fishing boat, hooking the pallid lip of some massive undersea beast."
        },
        "i2-1": {
            "type": "equippable",
            "name": "Torch",
            "description": "A handmade torch constructed from a chair leg wrapped in an oil-soaked piece of a linen frock. The impressive craftsmanship gave Doyle the impression that it would be particularly long-lasting.",
            "slot": "weapon",
            "bonuses": {
                "grit": "0",
                "smarts": 0,
                "charm": 0,
                "luck": "1"
            }
        },
        "i2-2": {
            "type": "consumable",
            "name": "Fresh Bandages",
            "description": "A roll of fresh bandages taken from cleric's bedroom in the Temple of Yabiz. Through a bit of common sense and ingenuity, Doyle believed he could do some basic treatment of just about any injury with bandages like those.",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i2-3": {
            "type": "equippable",
            "name": "The Cleric's Bracelet",
            "description": "A golden bracelet taken from cleric's bedroom in the Temple of Yabiz. An ornament hanging from it showed a pair of puckered lips, and an inscription on the inside read <i>With love, Liana</i>. It didn't seem appropriate for a cleric to own such a thing.",
            "slot": "accessory",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": "1",
                "luck": 0
            }
        },
        "i2-4": {
            "type": "static",
            "name": "Apothecary's Key",
            "description": "A small brass key taken from Ed Clifford in the mausoleum. According to Ed, the key corresponds to the locked door in the Temple of Yabiz, which leads to the apothecary room, where he spent most of his time. "
        },
        "i2-5": {
            "type": "static",
            "name": "Horse Blanket",
            "description": "A heavy wool horse blanket taken from the stables in the outer courtyard. It looked like it may have been discarded due to something being spilled on it &mdash; a large, dark stain marked the underside &mdash; but it still looked quite warm."
        },
        "i2-6": {
            "type": "equippable",
            "name": "Black Leather Vest",
            "description": "A black leather vest taken from the stables in the outer courtyard. The exceptional style and craftsmanship seemed to stand out from everything else in the stables. The name <i>Hugo</i> was stitched into the collar.",
            "slot": "armor",
            "bonuses": {
                "grit": 0,
                "smarts": "1",
                "charm": 0,
                "luck": 0
            }
        },
        "i2-7": {
            "type": "static",
            "name": "Sack of Food",
            "description": "A sack of food collected from the root cellar beneath the servants' quarters. It contained a variety of vegetables and meats &mdash; turnips and potatoes and onions, and a few cuts of salted fish &mdash; that looked like enough to get by for a few days."
        },
        "i2-8": {
            "type": "static",
            "name": "Carrots",
            "description": "A few carrots taken from the root cellar beneath the servants' quarters. Doyle didn't really care for carrots, but they were Blondie's favorite food, so it only felt appropriate that he bring some with him."
        },
        "i2-9": {
            "type": "consumable",
            "name": "Honey Tincture",
            "description": "A honey-based healing tincture in a purple glass bottle with a cork. Doyle bought it months ago from a druid in Port Warren, and subsequently retrieved it from Blondie's saddlebags. He felt confident that it could be used for basic treatment of most anything.",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i2-10": {
            "type": "static",
            "name": "Surgeon's Bag",
            "description": "A black leather surgeon's bag taken from the apothecary room in the Temple of Yabiz. It was filled with various tools a surgeon might need &mdash; straight razors, and a suture kit, and some dental pliers &mdash; as well as basic supplies for cleaning and dressing wounds."
        },
        "i2-11": {
            "type": "static",
            "name": "Tiny Key",
            "description": "A flat, iron key Doyle found hanging from the pegboard in the shed outside the servants' quarters. Its small size meant it was probably meant for some kind of lockbox, rather than a proper door or chest. "
        },
        "i2-12": {
            "type": "equippable",
            "name": "Ed's Dagger",
            "description": "A well-crafted steel dagger taken from Ed in the burial chamber of the Carden family's catacombs. The hilt was wrapped in leather, and the blade was shiny and smooth, as if it had never been used.",
            "slot": "weapon",
            "bonuses": {
                "grit": "0",
                "smarts": 0,
                "charm": "2",
                "luck": 0
            }
        },
        "i2-13": {
            "type": "consumable",
            "name": "One-Stop Remedy",
            "description": "A glass bottle of sweet-smelling brown liquid found in a lockbox in the root cellar beneath the servants' quarters. The paper label read <i>Brune Hill Medicines presents The One-Stop Tincture.</i> It claimed to treat every sort of ailment.",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i3-1": {
            "type": "static",
            "name": "Rothmund's Tonic",
            "description": "A brown glass bottle with a label that read <i>Rothmund's Tonic</i>, named for Old King Rothmund, who planted the first flag in Eadmore nearly 500 years ago. The liquid inside was clear and bubbly, and it smelled bitter and harsh, unfit for consumption."
        },
        "i3-2": {
            "type": "equippable",
            "name": "Ruined Longsword",
            "description": "A longsword taken from the body of Mr. Rean, a city guard. While still a passable weapon, the blade was badly blunted and full of deep notches; it looked like it must have been used to try to break through the upstairs door in the kitchen.  ",
            "slot": "weapon",
            "bonuses": {
                "grit": "1",
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i3-3": {
            "type": "static",
            "name": "Sheet Cake",
            "description": "A stale slice of cake found in the pantry of the West Tower. It smelled sweet, with a hint of clove and carrot. Something about it was appealing to Doyle, though he couldn't quite place what it was. "
        },
        "i3-4": {
            "type": "equippable",
            "name": "Wedding Band",
            "description": "A gold wedding band Doyle took from a severed hand Blondie found outside the gate. An inscription on the inside read: <i>Edmond & Anna Kipp - February 12th, 485</i>. It may not have been lucky for the couple, but it would be for Doyle.",
            "slot": "accessory",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": "1"
            }
        },
        "i3-5": {
            "type": "consumable",
            "name": "Lavender Paste",
            "description": "A bottle of medicinal paste taken from the trunk of <i>Wesley Partlow</i> in the barracks. A small piece of paper was wrapped around it with string, which included a mostly illegible set of instructions signed by Mr. Partlow's mother.",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i3-6": {
            "type": "static",
            "name": "Iron Key",
            "description": "A key taken from the puzzle box in the barracks. It was small and iron, and smelled vaguely of liquor. There was no indication in the box as to what the key was meant to unlock, but Doyle was sure it would prove useful at some point. "
        },
        "i3-7": {
            "type": "static",
            "name": "Alsporth Gold",
            "description": "An expensive bottle of locally-brewed gold-colored wine. While all Alsporth wines were technically brewed in Fingate, a small village not far from Cardwyke, it was still considered to be a point of pride for Duchess Aphra Penwood and the entire Alsporth region."
        },
        "i3-8": {
            "type": "static",
            "name": "Knight's Flail",
            "description": "A heavy flail with a leather-wrapped handle and an attached chain leading to a spiked iron ball. Doyle took it from the armory of the Salt Keep, and while it was an intimidating weapon, it required both strength and training that Doyle didn't have to make practical use of it."
        },
        "i3-9": {
            "type": "equippable",
            "name": "Pristine Longsword",
            "description": "A polished and well-maintained longsword taken from the body of Mr. Cooper after his death in the assault on the Great Hall. While Doyle didn't have the training to make the best use of such a weapon, he knew the basics of which end went where.",
            "slot": "weapon",
            "bonuses": {
                "grit": "2",
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i3-10": {
            "type": "static",
            "name": "Broken Candelabra",
            "description": "A heavy brass candelabra that had until recently been hanging from a chain above one of the feasting tables in the Great Hall. It looked to Doyle like something he might be able to use as a tool, given its hook-like shape. He wasn't sure how, though."
        },
        "i3-11": {
            "type": "static",
            "name": "Father Payton's Pendant",
            "description": "A polished silver pendant representing the Watchful Eye of Yabiz that Doyle found in the wreckage of the Great Hall. On the smooth back was an inscription: <i>Father Aldrus Payton, Cardwyke Holy Temple of Yabiz</i>."
        },
        "i3-12": {
            "type": "equippable",
            "name": "Measuring Cups",
            "description": "A set of brass measuring cups found in the trunk in the head chef's room. Doyle had never been much of a cook, but with a quick way to portion out ingredients on hand, he felt a bit more capable and confident.",
            "slot": "tool",
            "bonuses": {
                "grit": 0,
                "smarts": "1",
                "charm": 0,
                "luck": 0
            }
        },
        "i3-13": {
            "type": "equippable",
            "name": "Butcher's Apron",
            "description": "A heavy leather apron found in the larder, probably used by the butcher when preparing meats. Whoever it belonged to had been painstaking in keeping it clean, and had stitched thread outlines of a floral pattern across the front.",
            "slot": "armor",
            "bonuses": {
                "grit": "0",
                "smarts": 0,
                "charm": "1",
                "luck": 0
            }
        },
        "i3-14": {
            "type": "static",
            "name": "Guard's Key",
            "description": "A long key Doyle found fastened under the desk in the guard post, used to unlock the cells in the dungeon. Doyle wondered if that was actually the policy of the Salt Keep garrison, or if it was a work-around of some sort for whatever guard manned the post. "
        },
        "i3-15": {
            "type": "static",
            "name": "Prisoner's Chain",
            "description": "A 25-foot coil of heavy chain Doyle found in a chest in the dungeon guard post. Given the surrounding supplies, it was likely meant to be used to string a row of prisoners together on a chain gang, or to tether a prisoner somewhere with room to move."
        },
        "i3-16": {
            "type": "consumable",
            "name": "Garlic Ointment",
            "description": "A glass jar of greasy white ointment found in Mr. Haley's bedroom. Doyle couldn't say for sure what it was, but after uncorking and wafting it, he noticed a strong smell of garlic. It was probably some kind of medicine, he assumed.",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i3-17": {
            "type": "equippable",
            "name": "Horse Brush",
            "description": "A well-used wooden horse brush taken from Leland's body in the inner gate passageway. Doyle didn't see a use for it at the moment, but he was sure Blondie would love it after a long day on the road. It made him feel like there was still something to hope for.",
            "slot": "tool",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": "1"
            }
        },
        "i3-18": {
            "type": "equippable",
            "name": "Silver Belt Buckle",
            "description": "A heavy silver belt buckle given by Hadden as thanks for helping with his injury. It was in the shape of the letter \"H,\" polished and shiny, and looked like it had never been worn. Doyle had only ever owned a simple brass buckle before.",
            "slot": "accessory",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": "2",
                "luck": 0
            }
        },
        "i3-19": {
            "type": "static",
            "name": "Igbani Rum",
            "description": "A half-empty glass bottle of dark rum found in a chest in the armory. The wide, rounded shape of the bottle suggested that it had been imported from Igban, but Doyle had heard of local brewers creating counterfeits, so it was hard to know what was genuine. "
        },
        "i3-20": {
            "type": "equippable",
            "name": "Boiled Leather Cuirass",
            "description": "One of many hardened leather cuirasses found stored in the armory. It must have been part of the standard equipment of the garrison, though he hadn't seen the guards wear anything like it. Perhaps it had been retired, Doyle thought.",
            "slot": "armor",
            "bonuses": {
                "grit": "1",
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i3-21": {
            "type": "static",
            "name": "Miller's Key",
            "description": "A small, copper key Knox managed to remove from inside Miller's locket. "
        },
        "i3-22": {
            "type": "equippable",
            "name": "Skull Ring",
            "description": "An iron ring with a carved copper skull where a gemstone would fit. The sloppy craftsmanship and painful burrs on the band led Doyle to believe it was a novelty item, but wearing it still made him feel like a threatening New Eda brawler. ",
            "slot": "accessory",
            "bonuses": {
                "grit": "2",
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i4-1": {
            "type": "static",
            "name": "Rusted Key",
            "description": "A rust-covered key found in the side table drawer in the servants' alcove. It wasn't clear what the key was meant for, but it looked old and well-used, somewhat out of place among the refined glassware of the parlor."
        },
        "i4-2": {
            "type": "equippable",
            "name": "Chainmail Gloves",
            "description": "A pair of chainmail gloves taken from the armor mannequin of Sir Edbert Carden II in the gallery. A soft leather interior kept them relatively comfortable to wear, while the mail exterior made Doyle feel like some sort of battle-hardened warrior.",
            "slot": "accessory",
            "bonuses": {
                "grit": "1",
                "smarts": 0,
                "charm": "0",
                "luck": 0
            }
        },
        "i4-3": {
            "type": "static",
            "name": "Carved Stone Sword",
            "description": "A mottled and discolored sword taken from the glass display case in the gallery. The whole thing was carved from stone, far too dull and heavy for any kind of practical use, but still it felt important to Doyle. "
        },
        "i4-4": {
            "type": "equippable",
            "name": "Leather-Bound Tome",
            "description": "A thick, leather-bound tome Doyle found in the library titled \"The Four Humors of Selling.\" It was written by Master Aldous Heiman, one of the most notable pupils of the great Master Beldar, and was heavy enough to bash a skull.",
            "slot": "weapon",
            "bonuses": {
                "grit": 0,
                "smarts": "1",
                "charm": 0,
                "luck": 0
            }
        },
        "i4-5": {
            "type": "static",
            "name": "Planning Documents",
            "description": "A large, ancient parchment rolled up in a tube that Doyle took from behind the locked panels in the library. From what Doyle could tell, it was an early plan for the layout of the Salt Keep, though he couldn't make much sense of it himself."
        },
        "i4-6": {
            "type": "static",
            "name": "Billiards Cues",
            "description": "A set of five polished wooden cue sticks Doyle found in the billiards room, all wrapped up in a leather sleeve. Doyle didn't know how to play any billiard games, but the sticks were so well-crafted that he was sure he'd find some use for them."
        },
        "i4-7": {
            "type": "static",
            "name": "Fresh Herbs",
            "description": "An assortment of herbs &mdash; mostly lavender and sage, as those were the only ones Doyle recognized &mdash; cut from the garden. While he wasn't sure how to make use of them, Doyle thought they could probably serve some kind of medicinal function."
        },
        "i4-8": {
            "type": "consumable",
            "name": "Snail Syrup",
            "description": "A brown glass bottle with a paper label, the words <i>Snail Syrup</i> written on it in neat handwriting. Doyle wasn't sure what that meant, but he once heard from a merchant in Port Warren that snail mucus was good for burns, so it must have been some sort of medicine.",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i4-9": {
            "type": "equippable",
            "name": "Deck of Cards",
            "description": "A well-used deck of cards Doyle took from the hidden box in the Captain's room. They had the classic designs: Old King Rothmund and Lady Eda, and the first dukes of Eadmore. The bits and pieces of card counting Doyle could remember made him feel fairly clever.",
            "slot": "accessory",
            "bonuses": {
                "grit": 0,
                "smarts": "1",
                "charm": 0,
                "luck": 0
            }
        },
        "i4-10": {
            "type": "equippable",
            "name": "Ivory Comb",
            "description": "A comb found on the vanity desk in the bedroom of Ms. Clay. It was made from ivory with two rows of teeth, one fine and one wide. A carved relief in the handle showed a winding river, deer and rabbits drinking at the banks.",
            "slot": "tool",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": "1",
                "luck": 0
            }
        },
        "i4-11": {
            "type": "static",
            "name": "Tin of Caramels",
            "description": "A round tin filled with cube-like caramel candies. They were a brownish-orange color, but after trying one, Doyle concluded that they weren't actually very good. There was a slight vegetable taste to them that he didn't appreciate."
        },
        "i4-12": {
            "type": "static",
            "name": "Rothmund's Herbal Tonic",
            "description": "A brown glass bottle with a label that read <i>Rothmund's Tonic</i>, named for Old King Rothmund. The liquid inside smelled bitter and strongly of the herb mixture that Ed added. He insisted it would be a potent pick-me-up, but Doyle wasn't about to try it."
        },
        "i4-13": {
            "type": "equippable",
            "name": "Smelling Salts",
            "description": "A small glass vial of smelling salts that Ed had offered as a gift. Every whiff struck Doyle with a sense of mental acuity he hadn't felt in years. Just holding them made him feel more clear-headed and intelligent. ",
            "slot": "tool",
            "bonuses": {
                "grit": 0,
                "smarts": "2",
                "charm": 0,
                "luck": 0
            }
        },
        "i4-14": {
            "type": "static",
            "name": "Marble Plaque",
            "description": "A heavy plaque made from black marble. Engraved on the surface were the words <i>To my Lady Anda</i> and nothing else. The placement of the words suggested that there were meant to be more, as if it had been discarded after that first line."
        },
        "i4-15": {
            "type": "consumable",
            "name": "Hemlock Ointment",
            "description": "A glass jar full of an off-white, musty-smelling paste labeled <i>hemlock ointment.</i> Doyle was no herbalist, but he seemed to recall hemlock being poisonous. Poisonous ointment didn't make much sense, though, so he assumed it must have been medicine.",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i4-16": {
            "type": "static",
            "name": "The Captain's Key",
            "description": "A polished iron key found on the mounted bookshelf in the Captain's room. It looked like a door key &mdash; long and heavy-duty, with an etching of the Watchful Eye of Yabiz on the head &mdash; and was attached to an otherwise empty keyring. "
        },
        "i4-17": {
            "type": "equippable",
            "name": "Chainmail Hauberk",
            "description": "A thin chainmail shirt given to Doyle after thanking Cooper in the barracks. While Doyle wouldn't have thought he'd be able to deal with the weight, it turned out to be much lighter than he expected. Wearing it made him feel almost like a soldier.",
            "slot": "armor",
            "bonuses": {
                "grit": "2",
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i4-18": {
            "type": "static",
            "name": "Makeshift Crutches",
            "description": "A pair of wooden underarm crutches found in the servants' storage shed. Each was a straight rod with an upper arm support wrapped in cloth and some kind of padding. It looked like they had been made with more care than the ones Doyle's father used. "
        },
        "i4-19": {
            "type": "equippable",
            "name": "Square Crank",
            "description": "The iron crank handle from the gatehouse. It had a cloth-wrapped grip and a square-shaped plug where it fit into the windlass. Something struck Doyle as fortuitous about the way it popped off in his hand. Maybe it was a good luck charm, he thought.",
            "slot": "tool",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": "2"
            }
        },
        "i4-20": {
            "type": "equippable",
            "name": "Fabric Shears",
            "description": "A pair of sharpened fabric shears found in the locked trunk in the servants' quarters. The handles were wrapped in leather, and the steel of the blades was polished to such an impeccable shine that Doyle could see his reflection in the blades. He looked terrible.",
            "slot": "tool",
            "bonuses": {
                "grit": "2",
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i4-21": {
            "type": "equippable",
            "name": "Malorin Brigandine",
            "description": "An ornate brigandine found in the old Malorin tomb beneath the Temple of Yabiz. It was made from red-dyed canvas stitched with decorative patterns in gold, a few steel plates riveted to the front. The craftsmanship was a spectacle to behold.",
            "slot": "armor",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": "2",
                "luck": 0
            }
        },
        "i4-22": {
            "type": "consumable",
            "name": "Used Bandages",
            "description": "A roll of partially used bandages retrieved from Blondie's pack. Doyle had wrapped his hand with them after cutting it on a broken piece of ceramic in Fingate a couple of weeks ago, then forgot about them. They weren't fresh, but they'd still be useful.",
            "heals": "1",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": 0,
                "luck": 0
            }
        },
        "i4-23": {
            "type": "equippable",
            "name": "Stylish Doublet",
            "description": "A stylish wool doublet Doyle retrieved from the bottom of Blondie's pack. It was dyed dark green with gold trim, and was exceedingly comfortable, though Doyle's biggest reason for wearing it was that he thought it made him look intelligent.",
            "slot": "armor",
            "bonuses": {
                "grit": 0,
                "smarts": "2",
                "charm": 0,
                "luck": 0
            }
        },
        "i4-24": {
            "type": "static",
            "name": "Decorative Coin",
            "description": "A silver coin engraved with the Watchful Eye of Yabiz on both sides. It was oversized, nearly twice the diameter of the traditional gold coins minted in New Eda, so Doyle assumed it must have been a collectible or novelty of some sort."
        },
        "i4-25": {
            "type": "equippable",
            "name": "The Invocation of Yabiz",
            "description": "A copy of The Invocation of Yabiz found in the lectern in the Temple of Yabiz. It was as thick as any ordinary copy Doyle had seen, but was clearly designed for travel, with the front and back covered attached to wooden lids that acted as a box when closed.",
            "slot": "weapon",
            "bonuses": {
                "grit": 0,
                "smarts": "2",
                "charm": 0,
                "luck": 0
            }
        },
        "i5-1": {
            "type": "static",
            "name": "Golden Crest (Right Half)",
            "description": "Half of a golden crest found in the locked case in the Captain's room. It was clear to Doyle that the full crest would show a raised image of the Outstretched Palm of Yabiz, but the half only showed a few fingers on the right and a portion of palm."
        },
        "i5-2": {
            "type": "equippable",
            "name": "Straight Razor",
            "description": "",
            "slot": "weapon",
            "bonuses": {
                "grit": 0,
                "smarts": 0,
                "charm": "1",
                "luck": 0
            }
        }
    }
};