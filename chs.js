/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "— before tying her in front of a two-story inn. A sign above the door read": "- 在将她绑在两层楼的旅馆面前。门上方的标志读",
    "— but even the stores were silent and dark.": " - 但是，即使商店也是沉默而黑暗的。",
    "— but it was hard to see clearly. Still, it didn't look like there was anybody there.": " - 但是很难清楚地看到。不过，看起来没有人。",
    ", he thought.": "， 他以为。",
    ", Mr. Hadden had called it — but Doyle had barely made a dent in the past three months. He was nowhere close to being able to pay off the initial investment, nor even cover the costs of the pieces he had broken.": "，哈登先生曾称呼它 - 但在过去三个月中，道尔几乎没有做出凹痕。他无法还清初始投资，甚至还没有支付他损坏的作品的费用。",
    ", the two-story inn that dominated the square. There was nobody around.": "，统治广场的两步酒店。周围没有人。",
    ", while another read": "，而另一个读",
    ". At the other was a staircase, which led up to a second floor overlooking the first.": "另一个是一个Staercase，导致俯瞰第一层的二楼。",
    ". That was where Mr. Hadden had promised to meet him.": "那是哈登先生承诺会见他的地方。",
    "\"Calm down now,\"  Doyle said. \"Come on, girl, you're okay.\"": "\“现在冷静下来，”多伊尔说。 \“就像，女孩，你还好。\ \”",
    "\"Do you know where the owner is?\" He kept knocking. \"There's nobody in the square, and I'm — I'm getting a little worried here, okay? Please, answer me.\"": "\“你知道主人在哪里吗？”他一直在敲门。 \“广场上没有人，我在这里有点担心，好吗？请回答我。",
    "\"Hello?\" Doyle said. \"I heard someone inside. Is — is Mr. Hadden up here?\"": "\“你好？\”多伊尔说。 \“我在里面听到有人。是 - 哈登先生在这里吗？\”",
    "\"Hello?\" Doyle shouted.": "\“你好？",
    "\"Hello?\" he said again. \"I heard somebody up here — is everything okay?\"": "\“你好？\”他再次说。 \“我在这里听到有人 - 一切都很好吗？\”",
    "\"Hello?\" he said. \"Is anybody here?\"": "\“你好？\”他说。 \ “有人在吗？ \”",
    "\"Here you go,\" he said as she chomped it from his hand, her lips flapping. \"What did I tell you? Everything's fine.\"": "\“你走了，\ \”他从手上chomp着它时说，嘴唇拍打。 \“我告诉你什么？一切都很好。\ \”",
    "\"I won't make it, kid,\" Hadden said. He seemed to cough the words out, choking through each syllable. \"They'll come back. Just — just get out of here.\"": "\“我不会做到，孩子，”哈登说。他性爱以咳出这些单词，在每个音节中窒息。 \“他们会回来。只是 - 离开这里。\ \”",
    "\"Is this place open?\" he called out. \"I'm looking for Mr. Hadden.\"": "\“这个地方开放了吗？”他喊了出来。 \“我在寻找哈登先生。\ \”",
    "\"Just leave,\" a man said. His voice was shaky, strained. \"Get out of here.\"": "\“只离开，\”一个男人说。他的声音发抖，紧张。 \ “离开这里。 \”",
    "\"Mr. Hadden,\" Doyle said again. \"What's happening? Are you hurt?\"": "\“哈登先生，\”多伊尔再次说。 \“发生了什么事？你受伤了吗？\ \”",
    "\"Sorry to intrude,\" he said. \"Is anyone here? I need some help, please.\"": "\“对不起，\ \”他说。 \“这里有人吗？我需要一些帮助。\ \ \”",
    "\"Who's there?\" Doyle asked. \"Is that Mr. Hadden? Are you okay?\"": "\“谁在那里？”多伊尔问。 \“那是哈登先生吗？你还好吗？\”",
    "\"You need to — you need to leave.\"": "\“您需要 - 您需要离开。\ \”",
    "(Requirement Met)": "（满足要求）",
    "© Small Gray Games": "©小灰色游戏",
    "1 Injury": "1受伤",
    "A cloud of dust blew across the dirt road in the village square. Ahead was": "乡村广场上的土路吹过一团尘埃。前方是",
    "A cork-stoppered glass bottle Doyle found amongst the provisions in the private room of the Golden Calf. Inside was a thick, oily liquid with a strong rose scent. It had to be some kind of medicine, Doyle assumed. What else could it be?": "在黄金小牛的私人房间中发现了一个软木塞的玻璃瓶Doyle。里面是一种浓稠的油性液体，有浓烈的玫瑰味。道尔认为，它一定是某种药物。还可以是什么？",
    "A group of vultures circled overhead.": "一群秃鹰在头顶上盘旋。",
    "A staircase led up to a second floor that overlooked the first — all the rooms were there, Doyle assumed — and he could just make out the tops of four closed doors through the railing.": "Doyle假设的一个切碎酶通向二楼，这使第一层超过了第一层 - 所有房间都在那里 - 他只是在栏杆上拿出了四个闭门的门的顶部。",
    "About": "关于",
    "About the Game": "关于游戏",
    "Accessory": "配件",
    "Alec Noller": "Alec Noller",
    "Armor": "盔甲",
    "Art": "艺术",
    "Ask him to open the door": "要求他打开门",
    "Ask him what's happening": "问他发生了什么事",
    "Bag's Empty": "背包是空的",
    "Base Exp": "基础经验",
    "Become a Patreon backer": "成为Patreon支持者",
    "Bigger Line Spacing": "更大的线间距",
    "Bigger Text": "更大的文字",
    "Blondie whimpered as they rolled into the village square, her head swinging from side to side until she came to a stop. Again Doyle patted her, whispering promises in her ear —": "金发女郎滚入村庄广场时，金发女郎颤抖着，她的头从侧面到另一侧摇摆，她来停下来。多伊尔再次拍了拍她，在耳朵里窃窃私语 - ",
    "Break down the door": "打破门",
    "but they need to remember the name.": "但是他们需要记住这个名字。",
    "Character": "角色",
    "Charm": "魅力",
    "Charm ": "魅力",
    "Check on Blondie": "检查金发女郎",
    "Choosing to export will download a text file of your save to your filesystem. The export corresponds to the playthrough you currently have loaded, not all three possible saves.": "选择“导出”将下载保存的文本文件到您的文件系统。您当前已加载的播放的导出corpsontds，不是所有可能的保存。",
    "Clench each fist to tell yourself you're strong,": "每只拳头都握紧自己，告诉自己你坚强，",
    "Comfort Blondie": "舒适金发",
    "Confirm": "确认",
    "Consume": "消耗",
    "Continue": "继续",
    "Credits": "鸣谢",
    "Doyle Died": "道尔二丁",
    "Doyle peeked through the half-open door, one hand on the jamb as he looked inside.": "道尔（Doyle）在半开门的门上偷看，一只手在他里面loke嘴上。",
    "Doyle reached for the handle, but it was locked. \"I'll find a way in, okay?\"": "道尔（Doyle）伸手去拿手柄，但被锁定了。 \“我找到了一种方法，好吗？\”",
    "Doyle stepped up to the first room, eyes locked on the wood-carved number. He pressed his ear to the wood, then knocked. Then he moved on to the second door and did the same, then the third.": "道尔（Doyle）站在第一个房间里，眼睛锁在木雕刻的数字上。他将耳朵压在树林上，然后敲了敲。然后他移到第二扇门，做了同样的事情，然后是第三扇。",
    "Empty Slot": "空位",
    "End the Demo": "结束演示",
    "Endless Sea Shipping": "无尽的海运",
    "Equip": "装备",
    "Eric Gregory": "埃里克·格雷戈里（Eric Gregory）",
    "Every potential customer can sense your anxiety.": "每个潜在的客户都可以感受到您的焦虑。",
    "Exp.": "经验。",
    "Export Save": "导出存档",
    "Failure Penalty": "失败罚款",
    "Faster Transitions": "更快的过渡",
    "Finally, Doyle felt something at the bottom of the bag, along with the grit that had collected there: the broken-off tip of a carrot. He pulled it out with a grin and held it under Blondie's snout.": "最后，多伊尔（Doyle）以及在那里收集的砂砾：卡洛特（Carot）的尖端。他笑着把它拉出来，并将其握在金发碧眼的鼻子下。",
    "Follow on Twitter": "在Twitter上关注",
    "Follow the dev blog on Itch.io": "在iTch.io上关注开发博客",
    "For a moment, Doyle considered trying to take the brandy, but then looked around again for a bartender, or anybody else who might be watching.": "有一会儿，道尔考虑了试图拿起白兰地，但随后再次散发出来，或者是为了调酒师或其他任何可能正在观看的人。",
    "Go back to the main room": "回到主房间",
    "Go downstairs": "下楼梯",
    "Go out to the village square": "前往村广场",
    "Go to Hadden's Room": "前往哈登的房间",
    "Go to the Golden Calf": "前往黄金小牛",
    "Go to the private room": "前往私人房间",
    "Go to the well": "前往井",
    "Go upstairs": "上楼去",
    "Grit": "砂砾",
    "Grit ": "砂砾",
    "he had said between bites of boiled lamb.": "海德说，伯特·伯特斯煮了羊肉。",
    "he said through tears. Then he took Hadden outside to see the cart, still full of unsold ceramics.": "他用眼泪说。然后，他把哈登带到外面看推车，里面充满了未售出的陶瓷。",
    "he said,": "他说，",
    "Healed": "治愈",
    "Heals": "治愈",
    "Health Status:": "健康状况：",
    "Henlon's Meats": "亨隆的肉",
    "him": "他",
    "I hope you enjoy your time!": "希望您享受您的时光！",
    "I hope you enjoyed your time!": "希望您过得愉快！",
    "I keep trying, but nothing is working.": "继续尝试，butting正在起作用。",
    "Import Save": "导入保存",
    "in thick, uneven lettering, while another with a wide-open door read": "用厚，不平衡的字母，另一个带有宽开门的读物",
    "Injury": "受伤",
    "Inventory": "存货",
    "Investigate the rooms": "调查房间",
    "It's not right": "这是不对的",
    "Item Acquired": "获取的项目",
    "Item Lost": "丢失的物品",
    "Items": "项目",
    "Jill Bacola": "吉尔·巴科拉（Jill Baccola）",
    "Kyle Marion": "凯尔·马里恩（Kyle Marion）",
    "Level": "等级",
    "Level ": "等级",
    "Level Up": "升级",
    "Light Mode": "浅色模式",
    "Load Game": "加载游戏",
    "Look at the bar": "看酒吧",
    "Look at the barrels and crates": "看枪管和板条箱",
    "Look at the corkboard": "看着软木塞",
    "Look in the mirror": "照照镜子",
    "Look up the main road": "查找主要道路",
    "Lucas Church": "卢卡斯教堂",
    "Luck": "运气",
    "Luck ": "运气",
    "Matt Noller": "马特·诺勒",
    "Mr. Fultan used to say,": "布尔先生曾经说过，",
    "Needed": "需要",
    "NEW": "新的",
    "New Game": "新游戏",
    "No": "不",
    "Nobody deserves anything they haven't earned": "没有人应该得到任何他们没有得到的东西",
    "None": "它不是",
    "None of this is working,": "这些都没有工作，",
    "Nothing to Equip": "没有任何装备",
    "Nothing usable": "什么都不可用",
    "of all people, and it was waiting, and he deserved to be found. Some nights, as he rolled that cart back to Hemstoke, he hoped it would find him.": "在所有人中，它正在等待，他荒废了。有些夜晚，当他把那个购物车滚回到赫斯托克时，他希望它能找到他。",
    "On the opposite end of the square, the main road sloped uphill toward the Salt Keep.": "在广场的另一端，主要道路向盐分倾斜。",
    "Open the trunk": "打开树干",
    "Outside Hadden's Room": "哈登在外面的房间",
    "People don't need to remember the taste,": "人们不需要记住味道，",
    "Pick & Tack General Store": "选择杂货店",
    "Point(s)": "点",
    "Point(s) Available": "点可用",
    "private": "私人的",
    "Prologue": "序幕",
    "Reloading...": "重新加载...",
    "Required": "必需的",
    "Restart Chapter": "重新启动章",
    "Return to Title Menu": "返回标题菜单",
    "Risk Bonus": "风险奖金",
    "Rose Salve": "玫瑰嗨",
    "Select a Save Slot": "选择一个保存插槽",
    "Shervon Cassim": "Shervon Cassim",
    "Smarts": "聪明",
    "Smarts ": "聪明",
    "something out there, and it wasn't just some roaming monster, some horrifying facet of nature; it was there for him, specifically for": "那里的东西，不仅仅是一些漫游的怪物，也是对自然的恐怖面孔。它在那里为他，特别是",
    "Sometimes, Doyle would see shadows on the old dirt roads — just flickers in the dark ahead of him — and he felt a kind of certainty that he couldn't explain. It was a certainty that told him that there": "有时，多伊尔会在古老的土路上看到阴影 - 只是在他前面的黑暗中闪烁 - 并确定他没有解释。可以肯定地告诉他那里",
    "Somewhere up the road, back among the side streets not far from the keep, something was burning. Doyle looked up at the black smoke billowing above the rooftops.": "在道路上的某个地方，返回距离距离不远的小巷，有些东西正在燃烧。道尔抬头看着屋顶上方的黑烟滚滚。",
    "Spend": "花费",
    "Success": "随后的",
    "Testing & Feedback": "测试和反馈",
    "Thank You For Playing!": "谢谢你来玩！",
    "That was years ago, though, and Doyle wasn't a child anymore. He clenched one final time, then knocked on the door.": "不过，那是几年前，多伊尔不再是孩子了。他最后一次结束了，然后敲门。",
    "The Bar": "酒吧",
    "The Cart": "购物车",
    "The Dirt Road": "土路",
    "The Elite Journeyman Package": "精英旅行者包",
    "The Golden Calf": "黄金小牛",
    "The Main Road": "主要道路",
    "The nearest Atwater Distribution Center was in Cardwyke, Hadden told him, and even though he wasn't sure what they'd say, he agreed to act as a liaison.": "哈登告诉他，最近的Atwater配送中心在Cardwyke，尽管他不确定他们会说什么，但他同意担任联络人。",
    "The Private Room": "私人房间",
    "The Provisions": "这些规定",
    "The road sloped gradually upward about a quarter mile, lined on either side by various houses and storefronts. A massive three-story building with a sign that read": "这条路逐渐向上倾斜约四分之一英里，两侧都在各个房屋和店面衬里。一座巨大的三个标准建筑，有读书的标志",
    "The Rooms of the Inn": "旅馆的房间",
    "The Salt Keep": "盐堡",
    "The Second Floor": "二楼",
    "The stairs creaked beneath Doyle's feet as he made his way upstairs. A narrow, open hallway wrapped around the second floor, with three closed doors ahead of him and one more on the end. Doyle heard nothing from any of them, though.": "楼梯在楼上的路上爬到道尔的脚下。一个狭窄的敞开的走廊缠绕在二楼，他的前面有三扇门，最后一扇门。道尔（Doyle）从任何一个听到任何消息。",
    "The tavern was still silent. Mud-caked rushes shifted beneath Doyle's feet as he walked past the tables, the wood floor creaking beneath his feet. He felt a pang of thirst as he glanced at a half-empty mug sitting untouched on a table.": "小酒馆仍然保持沉默。当他走过桌子时，泥泞的冲刺移到了多伊尔的脚下，木地板在他的脚下吱吱作响。当他瞥了一眼桌子上的半空杯子时，他感到口渴。",
    "The Village": "村庄",
    "The Village Square": "乡村广场",
    "Then he glanced at the bar, a row of brown glass bottles lining the counter-top behind it. At one end was a door hanging slightly ajar, a hand-made sign nailed to it that read": "然后，他瞥了一眼酒吧，一排棕色玻璃瓶在其后面的柜台上衬着。一端是一扇门，略微悬挂着ajar，一个钉在上面钉上的手工签名",
    "Then he pocketed the small, glass bottle.": "然后，他给小玻璃瓶袋装了。",
    "This demo amounts to about 15% of the expected scope of the full game. Keep an eye out for the full version in the coming months. If you want to support development and keep up to date on progress:": "该演示约占整个游戏预期范围的15％。在接下来的几个月中，请密切注意完整版。如果您想支持开发并保持最新进展：",
    "This will reload your progress from the start of the current chapter. Any progress you made since then will be lost and cannot be recovered. Are you sure you want to do this?": "这将从本章的开头重新加载您的进度。您取得的任何进展，因为它们将丢失并且无法恢复。您想这样做吗？",
    "Tool": "工具",
    "Total Earned": "总计",
    "Turn back": "回头",
    "Turn Back": "回头",
    "Unequip": "取消配置",
    "Uninjured": "未受伤",
    "Use": "利用",
    "WARNING: Importing a save will fully overwrite your current game progress, and it will not be possible to recover your old progress. Please be absolutely sure you want to do it before you proceed.": "警告：储蓄金额将充分覆盖您当前的游戏进度，而无法恢复您的旧进度。请确保在进行之前要做。",
    "was": "曾是",
    "we're almost there": "我们会",
    "we're okay, girl,": "我们还好，女孩，",
    "Weapon": "武器",
    "Whitley's Finance & Loan": "惠特利的财务和贷款",
    "Writing & Design & Programming": "写作与设计与编程",
    "Yes": "是的",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "With one hand still stroking Blondie's mane, Doyle reached into her saddle bag, feeling around for anything that might put her at ease. Usually, he kept treats for her — carrots were her favorite, so he stocked up whenever he could find them — but they had been on the road a while, and it had been a long time since he'd had any coin to spare. There wasn't much there.": "多伊尔仍用一只手抚摸着布朗迪的鬃毛，把手伸进她的马鞍袋，四处摸索着任何可能让她放松的东西。通常，他会给她留些零食——胡萝卜是她最喜欢的，所以只要他能找到，他就会储备起来——但这些东西已经在路上有一段时间了，他已经很久没有多余的硬币了。那里没有多少。",
    "What you've seen so far amounts to about 15% of the expected scope of the full game. While it's still in development, it's more finished than not, so keep an eye out for the full version in the coming months. If you want to support development and keep up to date on progress:": "到目前为止，您所看到的内容约占整个游戏预期范围的15%。虽然它仍在开发中，但它的完成程度比不上，所以请密切关注未来几个月的完整版本。如果您想支持发展并跟上进度：",
    "There was no response, but Doyle was almost certain he heard a sudden shuffling sound from one of the rooms. Each had a wood-carved number on the door — rough and uneven, like the carving downstairs — labeling them one through four. Nervous, Doyle clenched his fists, just like Mr. Fultan had told him back in Cotlin Hill.": "没有人回应，但多伊尔几乎可以肯定，他听到一个房间里突然传来了脚步声。每个人的门上都有一个木制雕刻的数字——粗糙而不平整，就像楼下的雕刻一样——从一到四标记着他们。道尔紧张地握紧拳头，就像富尔坦先生在科特林山告诉他的那样。",
    "There didn't seem to be any markings Doyle could find, though. Four other barrels were lined up next to it — they looked the same, unmarked, probably made somewhere in Cardwyke — and a few mismatched crates were stacked next to them, one uncovered just enough that Doyle could see clean linens and straw-stuffed pillows inside.": "不过，多伊尔似乎找不到任何标记。旁边还排列着另外四个桶——看起来一样，没有标记，可能是在卡德威克某地制造的——旁边堆放着几个不匹配的板条箱，其中一个没有盖好，道尔可以看到里面干净的亚麻布和草塞枕头。",
    "Then Doyle stood up, glancing at the wall of barrels and crates that dominated the other side of the room. There must have been enough provisions to last a month or more in there. Sighing, he thought of the stacks of unsold ceramics in his cart outside.": "然后，道尔站起身，瞥了一眼房间另一边满是桶和板条箱的墙壁。那里一定有足够的粮食维持一个月或更长时间。他叹了一口气，想到外面手推车里的一堆堆未售出的陶瓷。",
    "On top were a collection of glass bottles, each with a paper label. Doyle only recognized a few of the bigger names — Dunmore Vineyards, and Light Manor, and Upton Brothers — but despite selling ale, he had never learned much about liquor or wine. One bottle caught his attention, pocket-sized and made from blue-tinted glass with a cork stopper. He opened it to smell the contents.": "顶部是一组玻璃瓶，每个都有一张纸标签。多伊尔只认识几个较大的名字——邓莫尔葡萄园（Dunmore Vineyards）、光明庄园（Light Manor）和厄普顿兄弟（Upton Brothers）——但尽管他卖啤酒，但他对酒和葡萄酒从未了解多少。一个瓶子引起了他的注意，它是口袋大小的，由蓝色玻璃制成，带有软木塞。他打开它闻了闻里面的东西。",
    "Nobody answered, but again Doyle heard a shuffling sound and a muffled groan from inside. He glanced back over the balcony, Blondie's black mane just visible through one of the front windows. His heart was pounding, palms sweating. Again he knocked.": "没有人回答，但多伊尔又听到了一声沙沙的声音和里面低沉的呻吟声。他回头瞥了一眼阳台，从一扇前窗可以看到布朗迪的黑鬃毛。他的心怦怦直跳，手心出汗。他再次敲门。",
    "No response. In the center of the square was a stone well, and all around the perimeter were wattle and daub houses, the empty darkness of the windows staring back at Doyle. Interspersed between them were a handful of storefronts — a sign above one read": "没有回应。广场中央是一口石井，四周是用瓦片和灰泥粉刷的房子，窗户上漆黑一片，空空荡荡，回望着道尔。他们中间穿插着一些店面——上面写着一个招牌",
    "Nobody answered. Doyle ran a hand along the bar as he kept looking, stopping for a moment to stare up at the wall behind it. There was a wooden carving hanging there, ragged and uneven like a piece of driftwood; it looked like it was supposed to be something like a cow. The eyes were too large, though, each one a gaping black abscess on the malformed wood of the head.": "没有人回答。多伊尔一边看一边把手伸进吧台，停下来盯着吧台后面的墙看了一会儿。那里挂着一个木雕，粗糙不平，像一块浮木；它看起来像是一头奶牛。然而，眼睛太大了，每一只眼睛都在畸形的头部木头上形成了一个裂开的黑色脓肿。",
    "On the wall by the bed was a corkboard with various scraps of parchment pinned to it — most looked like lists and reminders scrawled in sloppy black ink — and below it was an iron-braced trunk, large and seemingly unlocked. On a wooden stand nearby was a tall, oval-shaped mirror, the glass dusty and speckled with dirt. Doyle waved at it, and his reflection waved back.": "床边的墙上有一块软木板，上面钉着各种羊皮纸碎片，大多数看起来像用黑色墨水草草书写的清单和提醒，下面是一个铁架的箱子，很大，似乎没有锁。附近的一个木架上有一面高高的椭圆形镜子，玻璃上布满灰尘和斑点。道尔朝它挥了挥手，他的倒影也挥了挥头。",
    "Nestled under the bar in a locked glass case was a bottle of Astholme Brandy. The last time he'd had a drink so decadent was about five years ago, on the night of his wedding. Nela's father had bought them a single bottle as a gift — it was an Astholme wine, actually, but close enough — and they polished off the whole thing before spending their first night together. That was a long time ago, though, before Nela had left, before Doyle had become an Atwater Associate.": "酒吧下面一个锁着的玻璃柜里放着一瓶阿斯托姆白兰地。他最后一次如此颓废地喝酒大约是五年前，那是在他的婚礼当晚。内拉的父亲给他们买了一瓶酒作为礼物——实际上是阿斯托姆葡萄酒，但离得很近——他们在一起度过第一晚之前就把这一切都做完了。不过，那是很久以前的事了，在内拉离开之前，在道尔成为阿特沃特合伙人之前。",
    "In the center of the square was a stone well, and all around the perimeter were wattle and daub houses, the empty darkness of the windows staring back at Doyle. Interspersed between them were a handful of storefronts — a sign above one read": "广场中央是一口石井，四周是用瓦片和灰泥粉刷的房子，窗户上漆黑一片，空空荡荡，回望着道尔。他们中间穿插着一些店面——上面写着一个招牌",
    "It was him. Despite the wavering of the man's voice, Doyle was certain. They'd run into each other at a tavern in Yulan a few weeks prior, their first time crossing paths again in over a year. Hadden told him stories about his time traveling through Eddon, and Doyle tried to put on a good face, but after a few flagons of cheap Alsporth ale, he couldn't help himself.": "是他。尽管那个人的声音有些动摇，但多伊尔还是很确定。几周前，他们在玉兰的一家酒馆相遇，这是一年多来他们第一次穿越小径。哈登给他讲了他穿越埃登的故事，道尔试图装出一副好面孔，但喝了几杯便宜的阿尔斯波特啤酒后，他情不自禁。",
    "It had been four days since Doyle left Fingate — that was the last populated area before Cardwyke — and nearly two weeks since he'd spoken to anybody before that. He hadn't sold anything in over a month. The back of his wooden cart was still filled with various designs of Atwater Pottery, each individual piece carefully separated by layers of burlap and hay, all of them jostling in place as they rolled over the uneven dirt road. He eyed one of the empty spaces where a hand-painted jug once sat; unfortunately, he had broken it during a pitch at the marketplace in Yulan.": "多伊尔离开芬盖特已经四天了，芬盖特是卡德威克之前最后一个人口稠密的地区，而在那之前，他已经和任何人交谈了将近两周。他已经一个多月没有卖出任何东西了。他的木推车后面仍然装满了阿特沃特陶器的各种设计，每一块都被一层层粗麻布和干草仔细隔开，当他们翻过崎岖的土路时，所有的陶器都挤在原处。他盯着一个空荡荡的地方，那里曾经放着一个手绘水壶；不幸的是，他在玉兰市场的一次投球中把球打碎了。",
    "He pushed the door open the rest of the way, but there was nobody there. Inside was a room that seemed to double as a bedroom and storage room; one side held a small, feather-stuffed mattress and a bookcase lined intermittently with leather-bound texts and cleaning supplies, while the other side was dominated by stacks of barrels and wooden crates, glass bottles sitting precariously on top.": "他在剩下的路上把门推开，但那里没有人。里面有一个房间，似乎兼作卧室和储藏室；一边放着一个羽毛填充的小床垫和一个书架，书架上断断续续地排列着皮革装订的文字和清洁用品，而另一边则堆满了桶子和木箱，玻璃瓶摇摇欲坠地放在上面。",
    "He patted her back, then lifted the wool blanket that covered the back of his cart to look over the remainder of his stock: 12 Atwater Classics Vases in the Ornamental Design, 17 Limited Edition Overglazed Bowls, and 19 Cooking-Grade Astholme-Style Serving Bowls. There had been 20 of each type in the initial set —": "他拍了拍她的后背，然后掀起覆盖在手推车后面的羊毛毯，查看他的剩余库存：12个装饰设计的Atwater经典花瓶，17个限量版外釉碗，以及19个烹饪级Astholme风格服务碗。在最初的集合中，每种类型有20个-",
    "Doyle sat on the edge of the feather-stuffed bed and looked around the room, one hand sliding across the sheets. A bookcase stood just ahead of him, and off to the side was an iron-braced trunk, a note-covered corkboard nailed to the wall above it. Next to the trunk was an oval-shaped mirror on a wooden stand, the glass dusty and speckled with dirt.": "道尔坐在羽毛填充床的边缘，环顾房间，一只手滑过床单。就在他前面有一个书架，旁边是一个铁支撑的箱子，上面的墙上钉着一块贴着便条的软木板。行李箱旁边是一个木制支架上的椭圆形镜子，玻璃上布满灰尘和污点。",
    "Doyle knelt down in front of one of the nearest barrels and looked it up and down for some kind of label. His first job had been selling barrels of ale just like that one for Fultan & Sons Brewery back in Cotlin Hill, and every one of their barrels had a logo stamped in black ink on the front.": "道尔跪在最近的一个桶前，上下打量着桶上的标签。他的第一份工作就是像在科特林山为富尔坦父子酿酒厂（Fultan&Sons Brewery）销售啤酒桶那样销售啤酒桶，每桶啤酒桶的正面都印有黑色墨水的标志。",
    "caught Doyle's eye on one side, and on the other was a hanging banner stretched across two buildings advertising the Cardwyke Fish Market, though the market itself was out of view down a side street. Cardwyke wasn't the largest castle town Doyle had passed through, but it seemed industrious. There was also an Atwater Ceramics Distribution Center somewhere out there, after all.": "一方面吸引了道尔的目光，另一方面是一条横幅，横幅横跨两栋大楼，宣传卡德威克鱼类市场，尽管市场本身在一条小街上看不见。卡德维克不是道尔穿过的最大的城堡城镇，但它似乎很勤劳。毕竟，在某处还有一个阿特沃特陶瓷配送中心。",
    "As he looked around the square, Doyle was struck by the silence. He didn't hear any of the bustle one would expect from a village in the late afternoon; in fact, he didn't hear anything but the occasional snort and hoof clomp from Blondie, as well as the sound of his own breathing.": "当他环顾广场时，道尔被寂静所震惊。下午晚些时候，他没有听到村里的喧闹声；事实上，除了布朗迪偶尔的鼻息声和脚步声，以及他自己的呼吸声，他什么也没听到。",
    "At the fourth door he paused, fists clenching and unclenching, his palms beginning to sweat. An image popped into his mind: the path through the woods on the way to Hemstoke, where he grew up. His father used to take him into the marketplace in Cotlin Hill — just half a day's walk down the dirt roads that all the farmers on the outskirts used — to help him sell the barley they grew. Afterwards, the old man would get drunk at a tavern not unlike the Golden Calf, and once his eyes began to droop and his mood began to sour, he'd send Doyle back home by himself with the cart.": "当他们走近村庄时，多伊尔轻轻拍了拍他的骡子——一只瘦削的灰色莫利，他管它叫布朗迪，尽管它的鬃毛上有一缕破烂的黑色毛发——并咕咕叫着让它慢下来。看到烟雾和村里的其他人出现在眼前，她似乎和他一样焦虑。在这一切的背后，隐约可见的悬崖峭壁俯瞰着无边无际的大海，是艾泽尔·卡登爵士的故乡盐堡。几座杂乱的塔尖在高高的砂岩墙上突出，紫色和白色的卡登家族旗帜悬挂在塔尖上。",
    "As they drew closer to the village, Doyle patted his mule — a skinny, gray molly he called Blondie, despite the ragged, black wisps that made up her mane — and cooed for her to slow. She seemed as anxious as he was at the sight of the smoke and the rest of the village coming into view. Behind it all, looming on a rocky cliff that overlooked the Endless Sea, was the Salt Keep, the home of Sir Edsel Carden. A few stray spires poked out above the high sandstone walls, purple and white Carden family banners hanging from them.": "当他们走近村庄时，多伊尔轻轻拍了拍他的骡子——一只瘦削的灰色莫利，他管它叫布朗迪，尽管它的鬃毛上有一缕破烂的黑色毛发——并咕咕叫着让它慢下来。看到烟雾和村里的其他人出现在眼前，她似乎和他一样焦虑。在这一切的背后，隐约可见的悬崖峭壁俯瞰着无边无际的大海，是艾泽尔·卡登爵士的故乡盐堡。几座杂乱的塔尖在高高的砂岩墙上突出，紫色和白色的卡登家族旗帜悬挂在塔尖上。",
    "Again he felt the coin purse on his belt, as if he might suddenly find something new there that he hadn't noticed before, but it was empty. Sighing, he glanced back toward the dirt road that had led him into town. It was a long way back to Hemstoke.": "他再次感觉到腰带上的钱袋，好像他可能会突然发现一些他以前没有注意到的新东西，但它是空的。他叹了一口气，回头看了看那条通向城里的土路。回到海姆斯托克有很长的路要走。",
    "A frayed red throw rug next to the bed seemed to delineate the two halves of the room: one for life, and one for toil. Doyle wondered if that actually worked for whoever lived there. It had been so long since he'd been away from Blondie and the cart that he found it hard to believe that somebody could actually separate things that way. Usually it seemed like toil was all.": "床边一块破旧的红色地毯似乎勾勒出房间的两半：一个是为了生活，一个是为劳作。多伊尔想知道这是否真的对住在那里的人有效。他离开布朗迪和马车已经很长时间了，他发现很难相信有人真的能用这种方式把东西分开。通常情况下，工作似乎就是一切。",
    "A few more seconds passed without response, then Doyle turned back toward the stairs. He slid a hand along the railing as he tried to calculate how many buildings there might be in Cardwyke — how long it might take to just check every side street until he found some sign that mentioned Atwater Ceramics — but before he reached the stairs, he heard a sound from behind the door.": "又过了几秒钟，没有任何反应，然后道尔转向楼梯。当他试图计算Cardwyke可能有多少栋建筑时，他用手顺着栏杆滑了一下——仅仅检查每条小街可能需要多长时间，直到他发现一些提到Atwater陶瓷的标志——但在他走到楼梯前，他听到门后传来了声音。",
    "\"Rose,\" he said to himself. The liquid inside was thick and oily, like some kind of salve, rather than a drink. Perhaps it was a medicine, he thought. It didn't seem likely that it would do any good for a major wound, but for something less severe, it struck him as useful. Again he looked around the room, almost expecting to see somebody watching him. \"I'm going to take this, okay? I'm sorry.\"": "\“罗斯，\”他对自己说。里面的液体又厚又油，像某种药膏，而不是饮料。他想，也许这是一种药。对于一个严重的伤口来说，它似乎没有什么用处，但对于一些不太严重的伤口，它对他来说是有用的。他再次环顾房间，几乎以为会有人在看着他\“我要买这个，好吗？对不起。\”",
    "A smaller path veered off from the main road just a few steps outside of the square, this one sloping downward, carving into the cliff face until it reached the sea far below. There he saw a pier lined with fishing boats and a few larger vessels jutting out into the water. Doyle could make out some buildings alongside it — something that looked like a tavern, and a sprawling warehouse topped with a sign that read": "一条较小的小路从广场外几步外的主干道转向，这条小路向下倾斜，一直延伸到悬崖表面，直到到达远处的大海。在那里，他看到一个码头，两旁排列着渔船，还有几艘较大的船只伸入水中。多伊尔可以辨认出它旁边的一些建筑——看起来像一个酒馆，还有一个杂乱无章的仓库，上面有一块牌子，上面写着",
    "The main road in Cardwyke was a long stretch of dirt marked only by heavy ruts probably dug in by wagon wheels and carts, just like Doyle's. Small pools of muddy water spotted the road in deeper pits where it still hadn't dried. There was nobody out, even further ahead.": "The main road in Cardwyke was a long stretch of dirt marked only by heavy ruts probably dug in by wagon wheels and carts, just like Doyle's. Small pools of muddy water spotted the road in deeper pits where it still hadn't dried. There was nobody out, even further ahead.",
    "The interior was as silent as the village square. Matching wooden tables populated the first floor, and an unpolished bar spanned the back of the room. A row of brown glass bottles — local brews, most likely, plus a few imports from Astholme or Igban — lined the counter-top behind it. At the end of the bar was a door hanging slightly ajar, with a hand-made sign nailed to it that read": "内部像乡村广场一样寂静。一楼摆满了相配的木桌，房间后面有一个未抛光的吧台。一排棕色玻璃瓶——很可能是当地酿造的，再加上从阿斯托姆或伊格班进口的一些——排列在柜台后面。酒吧的尽头是一扇门，微微半开着，上面钉着一个手工制作的牌子，上面写着",
    "The graying door to the Golden Calf creaked as Doyle nudged it open, glancing back at Blondie as if she might offer some expression of reassurance. She gave him nothing, though. Hesitant, Doyle stepped inside, mud-caked rushes shifting beneath his feet as he shut the door behind him.": "当多伊尔轻轻推开金色小牛犊的灰色门时，门吱吱作响，回头看了看金发碧眼的布朗迪，似乎她可以表达一些安慰的表情。但她什么也没给他。道尔犹豫了一下，走了进去，身后关上门时，粘满泥的灯心草在脚下移动。",
    "The floor behind the bar was littered with broken glass. Some of those brown bottles must have dropped at some point; the wood was still wet, though, so it couldn't have been long ago. Doyle pictured shattered bits of ceramic in the dirt in the marketplace in Yulan, then let out a heavy sigh.": "酒吧后面的地板上散落着碎玻璃。那些棕色的瓶子一定是在什么时候掉下来的；不过，木头还是湿的，所以不可能很久以前就湿了。多伊尔在玉兰市集的泥土中拍下了碎瓷片，然后重重地叹了一口气。",
    "Something about Blondie's disposition seemed off to Doyle. She looked nervous, swaying back and forth and clomping as if she might bolt at any moment. Even as Doyle placed a hand on her head and stroked her well-brushed mane, she seemed to look past him, behind him, as if searching for something.": "多伊尔似乎对布朗迪的性格有些不满。她看起来很紧张，前后摇晃，步履蹒跚，好像随时都可能逃跑。就在多伊尔把手放在头上，抚摸着她梳得很好的鬃毛时，她似乎从他身边、在他身后看过去，好像在寻找什么东西。",
    "The first thing Doyle saw was the smoke. It billowed thick and black above the rooftops of Cardwyke, various smoldering sources just out of sight behind the yellow-daubed walls of the closest houses. A nervous pit began to form in his stomach, but he knew he couldn't turn back. One hand absent-mindedly pawed at the empty coin pouch on his belt.": "道尔首先看到的是烟雾。它在卡德威克的屋顶上滚滚浓烟，黑色的，各种阴燃源就在最近的房子的黄色涂墙后面看不见。他的胃里开始形成一个神经凹坑，但他知道自己无法回头。一只手心不在焉地抓着腰带上的空硬币袋。",
    "The Salt Keep is a fantasy/horror text RPG. All action is described through text, but you choose where to go and what to do, what abilities to prioritize via equipment and level-ups, and when to take risks in percentage-based challenges. While injuries are possible, death and dead-ends are not, so don't hesitate to try things out.": "《盐堡》是一部幻想/恐怖文本RPG。所有行动都通过文本进行描述，但您可以选择去哪里做什么，通过设备和升级来优先考虑什么能力，以及何时在基于百分比的挑战中承担风险。虽然受伤是可能的，但死亡和死胡同是不可能的，所以不要犹豫，尝试一下吧。",
    "Towering above all of it, at the end of the main road where the upward slope peaked, was the Salt Keep. From where he stood, most of what Doyle could see were the sandstone walls and the iron portcullis of the front gate, though the tops of three towers loomed above them, the smaller two on either side and the larger in the center. Purple and white banners flew from poles atop each of them.": "盐堡高耸入云，位于向上倾斜的主道尽头。从他站的地方看，多伊尔能看到的大部分是沙岩墙和前门的铁门，尽管三座塔楼的顶部隐约可见，较小的两座在两侧，较大的在中间。紫色和白色的横幅从每根柱子上飘扬。",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);