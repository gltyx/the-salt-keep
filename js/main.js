
var viewModel = (function () {

    // Debug settings
    var testing = false;
    var alwaysFailSetting = false;
    var alwaysPassSetting = false;

    // Dev preview
    var previewRoom = getSearchParams('preview');
    if (previewRoom) {
        var pData = JSON.parse(localStorage.getItem('previewData'));
        data = pData;
    }

    function getSearchParams(k){
        var p={};
        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
        return k?p[k]:p;
    }

    var goPhrases = ['Go ', 'Turn back', 'Stop talking', 'Keep talking'];

    // Include the target room ID
    var toAlwaysPass = ['s1-6.1'];
    var toAlwaysFail = ['s1-7.1'];

    // Fixed endpoint for the demo version
    var demoEndScene = 's2-18.6';

    /*****************************************************
                        THE PLAYER
    *****************************************************/

    var STARTING_SCENE = 's1-1';
    var saveSlot;
    var rootFade = testing ? 0 : 1000;

    var chapterTitle;
    var chapterNumber;

    var rooms = data.rooms;
    var items = data.items;
    var conditionsData = data.conditions;

    var conditions = ko.observableArray([]);
    var visitedRooms = ko.observableArray([]);
    var itemsEverAcquired = ko.observableArray([]);
    var injuries = ko.observableArray([]);

    var grit = ko.observable(10);
    var smarts = ko.observable(10);
    var charm = ko.observable(10);
    var luck = ko.observable(10);

    var level = ko.observable(1);
    var exp = ko.observable(0); 
    var expNeeded = ko.computed(function() {
        var total = 0;
        for (var i = 0; i < level(); i++) {
            total += Math.pow(1.15, level() - 1) * 100;
        }

        return round5(total);
    }, this);

    var statPoints = ko.observable(0);
    var tempStats = ko.observable(new TempStats());
    var tempSpent = ko.observable(0);

    // TODO incorporate these
    var playStats = {
        textSeen: new PlayStat(0),
        successes: new PlayStat(0),
        failures: new PlayStat(0),
        injuries: new PlayStat(0),
        heals: new PlayStat(0),
        itemsFound: new PlayStat(0)

    };

    function PlayStat(val) {
        this.val = ko.observable(val);
        this.add = function(toAdd) {
            this.val(this.val() + toAdd);
        }
    }

    function TempStats() {
        this.grit = new TempStat(grit);
        this.smarts = new TempStat(smarts);
        this.charm = new TempStat(charm);
        this.luck = new TempStat(luck);
    }

    function TempStat(stat) {
        this.val = ko.observable(stat());
        this.add = function() {
            if ((statPoints() - tempSpent()) > 0) {
                this.val(this.val() + 1);
                tempSpent(tempSpent() + 1);
            }
        }.bind(this);

        this.subtract = function() {
            if (this.val() > stat()) {
                this.val(this.val() - 1);
                tempSpent(tempSpent() - 1);
            }
        }.bind(this);
    }

    var levelUpAvailable = ko.observable(false);
    var justGotLevelUp = ko.observable(false);

    var weaponEquipped = ko.observable();
    var armorEquipped = ko.observable();
    var toolEquipped = ko.observable();
    var accessoryEquipped = ko.observable();

    var currentInjuries = ko.computed(function() {
        return injuries().filter(function(i) {
            return i.value() === 'yes';
        })
    }, this);

    var displayGrit = ko.computed(function() {
        var id = 'gb';
        var test = grit()
        + (weaponEquipped() ? weaponEquipped()[id]() : 0)
        + (armorEquipped() ? armorEquipped()[id]() : 0)
        + (toolEquipped() ? toolEquipped()[id]() : 0)
        + (accessoryEquipped() ? accessoryEquipped()[id]() : 0);
        return test - currentInjuries().length;
    }, this);

    var displaySmarts = ko.computed(function() {
        var id = 'sb';
        return smarts()
        + (weaponEquipped() ? weaponEquipped()[id]() : 0)
        + (armorEquipped() ? armorEquipped()[id]() : 0)
        + (toolEquipped() ? toolEquipped()[id]() : 0)
        + (accessoryEquipped() ? accessoryEquipped()[id]() : 0)
        - currentInjuries().length;
    }, this);

    var displayCharm = ko.computed(function() {
        var id = 'cb';
        return charm()
        + (weaponEquipped() ? weaponEquipped()[id]() : 0)
        + (armorEquipped() ? armorEquipped()[id]() : 0)
        + (toolEquipped() ? toolEquipped()[id]() : 0)
        + (accessoryEquipped() ? accessoryEquipped()[id]() : 0)
        - currentInjuries().length;
    }, this);

    var displayLuck = ko.computed(function() {
        var id = 'lb';
        return luck()
        + (weaponEquipped() ? weaponEquipped()[id]() : 0)
        + (armorEquipped() ? armorEquipped()[id]() : 0)
        + (toolEquipped() ? toolEquipped()[id]() : 0)
        + (accessoryEquipped() ? accessoryEquipped()[id]() : 0)
        - currentInjuries().length;
    }, this);

    var statsByKey = {
        'Grit': displayGrit,
        'Smarts': displaySmarts,
        'Charm': displayCharm,
        'Luck': displayLuck
    };

    var inventory = ko.observableArray([]);
    var itemsJustReceived = ko.observableArray([]);
    var itemsJustLost = ko.observableArray([]);
    var injuriesJustSustained = ko.observableArray([]);

    var inventoryItems = ko.computed(function() {
        return inventory().filter(function(i) {
            return i.type === 'static';
        })
    }, this);

    var inventoryEquipment = ko.computed(function() {
        return inventory().filter(function(i) {
            return i.type === 'equippable' && !i.equipped();
        })
    }, this);

    var inventoryConsumables = ko.computed(function() {
        return inventory().filter(function(i) {
            return i.type === 'consumable' && i.available();
        })
    }, this);

    var newInjuries = ko.computed(function() {
        var count = 0;
        for (var i = 0; i < currentInjuries().length; i++) {
            if (!currentInjuries()[i].seen()) {
                count++;
            }
        }

        return count;
    }, this);

    var characterUpdates = ko.computed(function() {
        return newInjuries() + statPoints();
    }, this);

    var healthStatus = ko.computed(function() {
        var status = 'Uninjured';
        if (currentInjuries().length === 1) { status = 'Grazed'; }
        if (currentInjuries().length === 2) { status = 'Wounded'; }
        if (currentInjuries().length === 3) { status = 'Maimed'; }
        if (currentInjuries().length === 4) { status = 'Brutalized'; }
        if (currentInjuries().length >= 5) { status = 'Horribly Mangled'; }
        //if (currentInjuries().length === 3) { status = 'Dead'; }
        return status;
    }, this);

    function addExperience(amount) {
        exp(exp() + amount);
        if (exp() >= expNeeded()) {
            handleLevelUp();
        }
    }

    function handleLevelUp() {
        justGotLevelUp(true);
        level(level() + 1);
        statPoints(statPoints() + 2);
        tempStats(new TempStats());

        if (exp() >= expNeeded()) {
            handleLevelUp();
        }
    }

    var newItems = ko.computed(function() {
        var count = 0;
        for (var i = 0; i < inventory().length; i++) {
            if (!inventory()[i].seen()) {
                count++;
            }
        }

        return count;
    }, this);

    var newRegularItems = ko.computed(function() {
        return inventory().filter(function(item) {
            return !item.seen() && item.type === 'static'; 
        }).length;
    });

    var newEquippableItems = ko.computed(function() {
        return inventory().filter(function(item) {
            return !item.seen() && item.type === 'equippable'; 
        }).length;
    });

    var newConsumableItems = ko.computed(function() {
        return inventory().filter(function(item) {
            return !item.seen() && item.type === 'consumable'; 
        }).length;
    });

    /*****************************************************
                        SETTINGS
    *****************************************************/

    var lightMode = ko.observable(false);
    var lightModeListener = ko.computed(function() {
        if (lightMode()) {
            $('html').addClass('lightmode');
        } else {
            $('html').removeClass('lightmode');
        }
    }, this);

    var bigText = ko.observable(false);
    var bigLine = ko.observable(false);
    var fastTransitions = ko.observable(false);
    var baseFade = ko.computed(function() {
        return rootFade * (fastTransitions() ? 0.4 : 1);
    }, this);
    //var baseFade() = rootFade * (fastTransitions() ? 0.5 : 1);
    //console.log(baseFade)

    var settingsButtons = {
        mainMenu: function() {
            mainMenuAnimation();
        },
        restartChapterPopover: function() {
            showRestartChapterPopover();
        },
        restartChapter: function() {
            closePopovers();
            $('.blackout').fadeIn(baseFade() * 2, function() {
                console.log('HERE: ', chapterNumber, chapterTitle)
                splash.header('Chapter ' + chapterNumber);
                splash.name(chapterTitle);
                loadGame(true);
                uiView('story');
                handleChapterSplash();
                saveGame();
            });
        },
        viewCredits: function() {
            showCreditsPopover();
        },
        endDemo: function() {
            showDemoEndPopover();
        },
        importSavePopover: function() {
            showImportPopover();
        },
        exportSavePopover: function() {
            showExportPopover();
        },
        exportSave: function() {
            var data = btoa(JSON.stringify(getSaveData()));
            var blob = new Blob([data], { type: "text/plain; encoding=utf8" });
            downloadSaveData(blob, 'saltkeep-save-' + Date.now() + '.txt');  
            hideAllPopovers(); 
        },
        importSave: function() {
            var i = document.createElement("input")
            i.style = "display: none";
            i.id = "fileUpload";
            i.type = "file";
            document.documentElement.appendChild(i);
            
            $('#fileUpload').change(function(event) {
                var file = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function(e) {
                    var data = JSON.parse(atob(e.target.result));
                    loadGameData(data)
                    loadGameAnimation();
                    saveGame();
                    $('#fileUpload').remove();
                }

                reader.readAsText(event.target.files[0]);
            });

            i.click();
        }
    }

    function downloadSaveData(blob, fileName) {
        var a = document.createElement("a");
        document.documentElement.appendChild(a);
        a.style = "display: none";
        a.id = 'downloader';

        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
        $('#downloader').remove();
    }

    /*****************************************************
                        BASE LOGIC
    *****************************************************/

    function initializeGame() {
        $('#currentYear').text(new Date().getFullYear());
        for (var i = 0; i < conditionDataKeys.length; i++) {
            var key = conditionDataKeys[i];
            var condition = new Condition(key);
            conditions.push(condition);

            if (key.indexOf('inj') > -1) {
                injuries.push(condition);
            }
        }

        setTimeout(function() {
            checkTextLength();
        }, 250);

        $(".settings-section").click(function (e) {
            e.stopPropagation();
        });

        $(window).resize(function() {
            checkTextLength();
        });

        // Dev preview
        if (previewRoom) {
            setTimeout(function() {
                mainMenu.continueGame();
                roomId(previewRoom)
            }.bind(this), 500);
        }

    }

    var conditionDataKeys = Object.keys(data.conditions)

    var roomId = ko.observable(STARTING_SCENE);
    var room = ko.computed(function() {
        return rooms[roomId()];
    }, this);

    var roomTitle = ko.computed(function() {
        return room().title;
    }, this);

    var roomText = ko.computed(function() {
        var options = room().texts;
        var text = '';
        options = options.sort(function(a, b) {
            return a.conditions.length - b.conditions.length;
        })

        // Handle overall conditions
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            if (allConditionsMet(option.conditions)) {
                text = option.text
            }
        }

        if (healthStatus() === 'Dead') {
            text = getDeathText(options);
        }

        // Handle inline conditions
        if (text.match(/<span class='(\S*)'/)) {
            text = handleInlineConditions(text);
        } 

        playStats.textSeen.add(text.split(' ').length);

        return text;

        // /<span\S*span>/
        // /<span class='(\S*)'>/

        //text = text.replace
        // /(\s)(\w*\<\/p\>)/g
        // /(\s)\w*<\/p>/g

        //return text;
    }, this);

    /**
    * <span class='c4-4'>yes</span>
    * <span class='!c4-4'>no</span>
    * <span class='@c4-4'>unset</span>
    * <span class='c4-4,!c4-4,@c4-4'>multiple</span>
    */
    function handleInlineConditions(text) {
        // Is there another conditional?
        var con = text.match(/<span class='(\S*?)'/);

        if (con) {
            con = con[1]
            var cons = con.split(',');
            var formatted = [];

            // Format the conditions
            for (var i = 0; i < cons.length; i++) {
                if (cons[i].indexOf('!') > -1) {
                    formatted.push({
                        [cons[i].substring(1)]: 'no'
                    });
                } else if (cons[i].indexOf('@') > -1) {
                    formatted.push({
                        [cons[i].substring(1)]: 'unset'
                    });
                } else {
                    formatted.push({
                        [cons[i]]: 'yes'
                    });
                }
            }

            var consMet = allConditionsMet(formatted);
            if (consMet) {
                text = text.replace(/<span class='\S*?'>/, '');
                text = text.replace(/<\/span>/, '');
            } else {
                text = text.replace(/<span.*?\/span>/, '');
            }

            text = text.replaceAll('<br /><br /><br /><br />', '<br /><br />'); 

            if (text.indexOf('<br /><br />') === 0) {
                text = text.substring(12);
            }

            return handleInlineConditions(text)
        } else {
            console.log(text)
            text = text.replaceAll('<br /><br /> <br /><br />', '<br /><br />');
            return text;
        }
    }

    function getDeathText(options) {
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            for (var j = 0; j < option.conditions.length; j++) {
                var key = Object.keys(option.conditions[j])[0];
                if (key === 'dth') {
                    return option.text;
                }
            }
        }
    }

    // Fixed endpoint for the demo version
    var demoEnd = ko.computed(function () {
        return demoEndScene === roomId();
    }, this);

    function isFirstTimeVisit(room) {
        var firstTime = true;
        for (var i = 0; i < visitedRooms().length; i++) {
            if (roomId() === visitedRooms()[i]) {
                firstTime = false;
            }
        }

        return firstTime;
    }

    var choices = ko.computed(function() {
        var array = ko.observableArray([]);
        var options = room().choices
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            if (allConditionsMet(option.conditions) && anyConditionsMet(option.conditionsOr) && allItemConditionsMet(option.conditionalItems)) { // TODO check conditional items here
                array.push(new Choice(option));
            }
        }

        return array;
    });

    var goChoices = ko.computed(function() {
        return choices()().filter(function(choice) {
            return containsGoPhrase(choice.text());
        }, this);
    });

    var otherChoices = ko.computed(function() {
        return choices()().filter(function(choice) {
            return !containsGoPhrase(choice.text());
        }, this);
    });

    function containsGoPhrase(text) {
        var hasGoPhrase = false;
        for (var i = 0; i < goPhrases.length; i++) {
          if (text.indexOf(goPhrases[i]) > -1) {
            hasGoPhrase = true;
          }
        }

        return hasGoPhrase;
    }

    var solutions = ko.computed(function() {
        var array = ko.observableArray([]);
        var options = room().solutions
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            if (allConditionsMet(option.conditions) && anyConditionsMet(option.conditionsOr) && allItemConditionsMet(option.conditionalItems)) { // TODO check conditional items here
                array.push(new Solution(option));
            }
        }

        return array;
    });


    function allConditionsMet(conds) {
        var allMet = true;
        if (conds) {
            for (var i = 0; i < conds.length ; i++) {
                var condition = conds[i];
                var id = Object.keys(condition)[0];
                if ((id === 'g1' && isRoomVisited() !== condition[id]) || (id !== 'g1' && getCondition(id).value() !== condition[id])) {
                    allMet = false;
                }
            }
        }

        return allMet;
    }

    function anyConditionsMet(conds) {
        var anyMet = false;
        if (conds) {
            for (var i = 0; i < conds.length ; i++) {
                var condition = conds[i];
                var id = Object.keys(condition)[0];
                if ((id === 'g1' && isRoomVisited() === condition[id]) || (id !== 'g1' && getCondition(id).value() === condition[id])) {
                    anyMet = true;
                    continue;
                }
            }
        } else {
            anyMet = true;
        }

        return anyMet;
    }

    function isRoomVisited(room) {
        for (var i = 0; i < visitedRooms().length; i++) {
            if (visitedRooms()[i] === (room ? room : roomId())) {
                return 'yes';
            }
        }

        return 'unset';
    }

    function allItemConditionsMet(requiredItems) {
        if (requiredItems) {
            var found = 0;

            for (var i = 0; i < requiredItems.length; i++) {
                for (var j = 0; j < inventory().length; j++) {
                    if (inventory()[j].id === requiredItems[i]) {
                        found++;
                    }
                }
            }

            return found === (requiredItems.length);
        } else {
            return true;
        }
    }

    function getCondition(id) {
        return conditions().find(function(element) {
            return element.id === id;
        });
    }

    /*****************************************************
                        CONSTRUCTORS
    *****************************************************/

    function Condition(id) {
        this.id = id;
        this.value = ko.observable('unset');
        this.description = ko.observable(conditionsData[id].description)
        this.info = ko.observable('');
        this.seen = ko.observable(false);

        if (this.id.indexOf('inj' > -1)) {
            var data = this.description().split('+');
            this.description(data[0]);
            this.info(data[1]);
        } 
        
    }

    Condition.prototype.select = function() {
        this.seen(true);
        selectedInjury(this);
        showInjuryPopover();
    }

    function Choice(option) {
        this.text = ko.observable(option.text);
        this.target = option.target;
        this.items = option.items;
        this.itemsToRemove = option.itemsToRemove;
        this.setsConditions = option.setsConditions;
        this.conditionalItems = option.conditionalItems;
        this.chapterBreak = option.chapterBreak;
        this.chapterNumber = option.chapterNumber;
        this.chapterTitle = option.chapterTitle;

        this.seen = ko.computed(function() {
            if (isRoomVisited(this.target) === 'yes') {
                return true;
            } else {
                return false;
            }
        }, this);
    }

    var nextItems;
    var nextItemsToRemove;
    var nextInjury;
    Choice.prototype.choose = function() {
        $('.blackout').fadeIn(this.chapterBreak ? baseFade() * 2 : baseFade(), function() {
            if (isFirstTimeVisit(room)) {
                visitedRooms().push(roomId());
            }

            if (nextItems || nextItemsToRemove || nextInjury) {
                itemsJustReceived.removeAll();
                itemsJustLost.removeAll();
                injuriesJustSustained.removeAll();
                // storyView('itemResult');

                if (nextItems) {
                    getItems(nextItems);
                }

                if (nextItemsToRemove) {
                    removeItems(nextItemsToRemove);
                }

                if (nextInjury) {
                    var injury = getCondition(nextInjury);
                    injury.value('yes');
                    injuriesJustSustained.push(injury);
                    playStats.injuries.add(1);
                    nextInjury = null;
                }

                if (itemsJustReceived().length || itemsJustLost().length || injuriesJustSustained().length) {
                    storyView('itemResult');
                }
            }

            $(window).scrollTop(0);
            roomId(this.target);
            setConditions(this.setsConditions);
            nextItems = this.items;
            nextItemsToRemove = this.itemsToRemove;

            if (this.chapterBreak) {
                splash.header('Chapter ' + this.chapterNumber);
                splash.name(this.chapterTitle);
                handleChapterSplash();
            } else {
                checkTextLength();
                $('.blackout').fadeOut(baseFade());
            }

            saveGame(this.chapterBreak, this.chapterTitle, this.chapterNumber);
        }.bind(this));
    }

    function handleChapterSplash() {
        storyView('chapterSplash')
        $('.blackout').hide();
        setTimeout(function() {
            $('.chapter-box .header').fadeIn(baseFade() * 2).css('display', 'inline-block');
        }, baseFade);

        setTimeout(function() {
            $('.chapter-box .name').fadeIn(baseFade() * 2);
        }, baseFade() * 2.5);

        setTimeout(function() {
            $('.blackout').fadeIn(baseFade() * 2, function() {
                $('.chapter-box .header').hide();
                $('.chapter-box .name').hide();

                storyView('mainStory');
                checkTextLength();
                $('.blackout').fadeOut(baseFade() * 2);

            })
        }, baseFade() * 7);
    }

    function Solution(option) {
        this.text = ko.observable(option.text);
        this.targetOnSuccess = option.targetOnSuccess;
        this.targetOnFailure = option.targetOnFailure;
        this.itemsToAddOnSuccess = option.itemsToAddOnSuccess;
        this.itemsToRemoveOnSuccess = option.itemsToRemoveOnSuccess;
        this.itemsToAddOnFailure  = option.itemsToAddOnFailure;
        this.itemsToRemoveOnFailure = option.itemsToRemoveOnFailure;
        this.conditionsSetOnSuccess = option.conditionsSetOnSuccess;
        this.conditionsSetOnFailure = option.conditionsSetOnFailure;
        this.isThreshold = option.threshold;
        this.statRequirement = getDifficultyRequirement(option.difficulty);
        this.difficulty = getDifficulty(option.difficulty);
        this.expPayout = getExpValue(option.difficulty, 100 - this.difficulty, hasInjuryRisk(this), this);
        this.displayDifficulty = ko.observable((Math.floor(this.difficulty)) + '%');
        this.statDifficulty = ko.observable(getDifficultyType(option.difficulty));

        this.requirementsMet = ko.computed(function() {
            return parseInt(this.statRequirement) <= statsByKey[this.statDifficulty()]();
        }, this);

        this.seen = ko.computed(function() {
            if (isRoomVisited(this.targetOnSuccess) === 'yes') {
                return true;
            } else {
                return false;
            }
        }, this);
    }

    var difficultiesByKey = {
        'gd': 'Grit',
        'sd': 'Smarts',
        'cd': 'Charm',
        'ld': 'Luck'
    }

    function getDifficultyType(difficulties) {
        var keys = Object.keys(difficulties);
        for (var i = 0; i < keys.length; i++) {
            var difficulty = difficulties[keys[i]];
            if (difficulty) {
                return difficultiesByKey[keys[i]];
            }
        }
    }

    function getDifficultyRequirement(difficulties) {
        var keys = Object.keys(difficulties);
        for (var i = 0; i < keys.length; i++) {
            var difficulty = difficulties[keys[i]];
            if (difficulty) {
                return difficulty;
            }
        }
    }

    function hasInjuryRisk(solution) {
        var hasRisk = false;
        if (solution.conditionsSetOnSuccess) {
            for (var i = 0; i < solution.conditionsSetOnSuccess.length; i++) {
                if (Object.keys(solution.conditionsSetOnSuccess[i])[0].indexOf('inj') > -1) {
                    hasRisk = true
                }
            }
        }

        if (solution.conditionsSetOnFailure) {
            for (var i = 0; i < solution.conditionsSetOnFailure.length; i++) {
                if (Object.keys(solution.conditionsSetOnFailure[i])[0].indexOf('inj') > -1) {
                    hasRisk = true
                }
            }
        }

        return hasRisk;
    }

    Solution.prototype.choose = function() {
        $('.blackout').fadeIn(baseFade(), function() {
            if (this.isThreshold && !this.requirementsMet()) {
                return;
            }

            if (isFirstTimeVisit(room)) {
                visitedRooms().push(roomId());
            }

            $(window).scrollTop(0);

            if (this.isThreshold) {
                roomId(this.targetOnSuccess);
                setConditions(this.conditionsSetOnSuccess);
                nextItems = this.itemsToAddOnSuccess;
                nextItemsToRemove = this.itemsToRemoveOnSuccess;
            } else {
                storyView('solutionResult');
                var shouldAutoPass = toAlwaysPass.indexOf(this.targetOnSuccess) > -1;
                var shouldAutoFail = toAlwaysFail.indexOf(this.targetOnFailure) > -1;
                var passedRoll = (Math.random() * 100) <= this.difficulty && !alwaysFailSetting && !shouldAutoFail
                if (alwaysPassSetting || shouldAutoPass || passedRoll) {
                    roomId(this.targetOnSuccess);
                    setConditions(this.conditionsSetOnSuccess);
                    addExperience(this.expPayout); // TODO remove * 100
                    solutionResult.base(this.baseExp);
                    solutionResult.riskBonus(this.riskBonus);
                    solutionResult.total(this.expPayout);
                    solutionResult.term('Success');
                    solutionResult.failurePenalty(null);
                    nextItems = this.itemsToAddOnSuccess;
                    nextItemsToRemove = this.itemsToRemoveOnSuccess;
                    playStats.successes.add(1)
                } else {
                    roomId(this.targetOnFailure);
                    setConditions(this.conditionsSetOnFailure);
                    solutionResult.base(this.baseExp);
                    solutionResult.riskBonus(this.riskBonus);
                    solutionResult.term('Failure');
                    solutionResult.failurePenalty('-50%');
                    addExperience(Math.floor(this.expPayout / 2)); 
                    solutionResult.total(Math.floor(this.expPayout / 2));
                    nextItems = this.itemsToAddOnFailure;
                    nextItemsToRemove = this.itemsToRemoveOnFailure;
                    playStats.failures.add(1);
                }
            }

            checkTextLength();
            $('.blackout').fadeOut(baseFade());
            saveGame();
        }.bind(this));
    }

    function Item(id, item) {
        this.id = id;
        this.type = item.type;
        this.name = ko.observable(item.name);
        this.description = ko.observable(item.description);
        this.equipped = ko.observable(false);
        this.available = ko.observable(true);
        this.seen = ko.observable(false);

        if (item.type === 'equippable') { this.slot = item.slot }
        if (item.type === 'consumable') { this.heals = ko.observable(item.heals) } 
        if (item.type === 'equippable' || item.type === 'consumable') {
            this.gb = ko.observable(parseInt(item.bonuses.grit));
            this.sb = ko.observable(parseInt(item.bonuses.smarts));
            this.cb = ko.observable(parseInt(item.bonuses.charm));
            this.lb = ko.observable(parseInt(item.bonuses.luck));
        }
    }

    Item.prototype.selectItem = function() {
        this.seen(true);
        selectedItem(this);
        showPopover();
    }

    Item.prototype.equip = function() {
        if (this.slot === 'weapon') {
            weaponEquipped() ? weaponEquipped().equipped(false) : null;
            weaponEquipped(this);
        } else if (this.slot === 'armor') {
            armorEquipped() ? armorEquipped().equipped(false) : null;
            armorEquipped(this);
        } else if (this.slot === 'tool') {
            toolEquipped() ? toolEquipped().equipped(false) : null;
            toolEquipped(this);
        } else if (this.slot === 'accessory') {
            accessoryEquipped() ? accessoryEquipped().equipped(false) : null;
            accessoryEquipped(this);
        }

        this.equipped(true);
        hidePopover();
    }

    Item.prototype.unequip = function() {
        if (this.slot === 'weapon') {
            weaponEquipped(null);
        } else if (this.slot === 'armor') {
            armorEquipped(null);
        } else if (this.slot === 'tool') {
            toolEquipped(null);
        } else if (this.slot === 'accessory') {
            accessoryEquipped(null);
        }

        this.equipped(false);
        hidePopover();
    }

    var healing = ko.observable('');
    var injuryHealed = ko.observable('');
    var healingLoop;

    Item.prototype.consume = function() {
        healing('. ');
        var loops = 0;
        healingLoop = setInterval(function() {
            loops++;
            if (loops < 3) {
                healing(healing() + '. ');
            } else {
                // TODO - this assumes you can heal more than 1 - let's assume not
                // var toHeal = parseInt(this.heals());
                // var injuriesAvailable = [];
                // for (var i = 0; i < toHeal; i++) {
                //     if (currentInjuries()[i]) {
                //         injuriesAvailable.push(currentInjuries()[i]);
                //     }
                // }

                // for (var j = 0; j < injuriesAvailable.length; j++) {
                //     injuriesAvailable[j].value('no');
                // }

                clearInterval(healingLoop);
                injuryHealed(currentInjuries()[0].description());
                currentInjuries()[0].value('no');

                setTimeout(function() {
                    hidePopover();
                    this.available(false);
                    removeConsumable(this.id)

                    setTimeout(function() {
                        healing('');
                        injuryHealed('');
                    }.bind(this), 1000);
                }.bind(this), 2500);
            }
        }.bind(this), 800);
    }

    /*****************************************************
                        DEATH
    ******************************************************/

    function handleDeath() {
        $('.blackout').fadeIn(baseFade() * 2, function() {
            splash.header('Doyle Died');
            splash.name('Starting Again...');
            loadGame(true);
            handleChapterSplash();
        })
    }

    /*****************************************************
                        TOOLS
    *****************************************************/

    function round5(num) {
        return Math.round(num / 5) * 5;
    }

    function setConditions(conditionsToSet) {
        if (conditionsToSet) {
            for (var i = 0; i < conditionsToSet.length; i++) {
                var condition = conditionsToSet[i];
                var id = Object.keys(condition)[0];
                var value = condition[id];

                if (value === 'yes' && id.indexOf('inj') > -1) {
                    nextInjury = id;
                } else {
                    getCondition(id).value(value);
                }
            }
        }
    }

    function getDifficulty(difficulties) {
        var gTarget = difficulties.gd > 0 ? displayGrit() - difficulties.gd : null;
        var sTarget = difficulties.sd > 0 ? displaySmarts() - difficulties.sd : null;
        var cTarget = difficulties.cd > 0 ? displayCharm() - difficulties.cd : null;
        var lTarget = difficulties.ld > 0 ? displayLuck() - difficulties.ld : null;

        var targets = [gTarget, sTarget, cTarget, lTarget];
        var count = 0;
        var total = 0;
        for (var i = 0; i < targets.length; i++) {
            if (targets[i] !== null) {
                count++;
                total += targets[i];
            }
        }

        var base = (total / count) * 10;
        if (base < 5) { base = 5; }
        if (base > 95) { base = 95; }
        return base;
    }

    function getExpValue(difficulties, failureRisk, injuryRisk, solution) {
        var totalDifficulty = getTotalDifficulty(difficulties);
        var totalWithRisk = totalDifficulty * 3
        var baseDifficultyBonus = Math.ceil(totalWithRisk * (failureRisk / 100) * (injuryRisk ? 2 : 1));
        var difficultyBonus = baseDifficultyBonus > 0 ? baseDifficultyBonus : 0;
        var totalWithBonus = totalWithRisk + difficultyBonus;
        solution.baseExp = totalWithRisk;
        solution.riskBonus = difficultyBonus;
        return totalWithBonus;
    }

    function getTotalDifficulty(difficulties) {
        var diffs = Object.keys(difficulties);
        var total = 0;
        for (var i = 0; i < diffs.length; i++) {
            var d = difficulties[diffs[i]];
            total += d ? parseInt(d) : 0;
        }

        return total;
    }

    function toggleMenu() {
        var fadeTime = 300
        if ($('.menu').css('display') === 'block') {
            $('.menu').fadeOut(fadeTime, function() {
                $('.story').fadeIn(fadeTime);
            });
        } else {
            $('.story').fadeOut(fadeTime, function() {
                $('.menu').fadeIn(fadeTime);
            });
        }
    }

    function getItems(itemsToGet) {
        if (itemsToGet) {
            for (var i = 0; i < itemsToGet.length; i++) {
                var item = items[itemsToGet[i]];
                var newItem = new Item(itemsToGet[i], item);
                if (!itemEverOwned(newItem)) {
                    itemsJustReceived.push(newItem);
                    inventory.push(newItem)
                    itemsEverAcquired.push(itemsToGet[i])
                }
            }
        }
    }

    function removeItems(itemsToRemove) {
        if (itemsToRemove) {
            for (var i = 0; i < itemsToRemove.length; i++) {
                for (var j = 0; j < inventory().length; j++) {
                    if (itemsToRemove[i] === inventory()[j].id) {
                        itemsJustLost.push(inventory()[j]);
                        inventory.remove(inventory()[j]);
                    }
                }
            }
        }
    }

    function removeConsumable(id) {
        for (var j = 0; j < inventory().length; j++) {
            if (id === inventory()[j].id) {
                inventory.remove(inventory()[j]);
            }
        }
    }

    function itemOwned(item) {
        for (var i = 0; i < inventory().length; i++) {
            if (inventory()[i].id === item.id) {
                return true;
            }
        }

        return false;
    }

    function itemEverOwned(item) {
        var everOwned = itemOwned(item);

        for (var j = 0; j < itemsEverAcquired().length; j++) {
            if (itemsEverAcquired()[j] === item.id) {
                everOwned = true;
            }
        }

        return everOwned;
    }

    /*****************************************************
                    SAVING/LOADING
    *****************************************************/

    var FILE_NAME = 'adventure-saves';

    function saveGame(shouldSaveCheckpoint, cTitle, cNumber) {
        getSavedGameData(function(data) {
            if (data[saveSlot].currentProgress) {
                var saveData = getSaveData();
                data[saveSlot].lastPlayed = Date.now();
                data[saveSlot].currentProgress = saveData;
                data.lightMode = lightMode();
                data.bigText = bigText();
                data.bigLine = bigLine();
                data.fastTransitions = fastTransitions();

                if (shouldSaveCheckpoint) {
                    data[saveSlot].checkpoint = saveData
                    chapterTitle = cTitle;
                    chapterNumber = cNumber;
                    data[saveSlot].chapterTitle = cTitle;
                    data[saveSlot].chapterNumber = cNumber;
                }

                console.log(data)
                setData(data);
            } else {
                var saveData = getSaveData();
                var newData = {
                    lastPlayed: Date.now(),
                    currentProgress: saveData,
                    checkpoint: saveData
                }

                data[saveSlot] = newData
                setData(data);
            }
        })

    }

    function setData(data) {
        try {
            NativeStorage.setItem(FILE_NAME, JSON.stringify(data));
        } catch (err) {
            localStorage.setItem(FILE_NAME, JSON.stringify(data))
        }
    }

    function getSaveData() {
        return {
            conditions: conditions().filter(function(c) {
                return c.value() !== 'unset';
            }).map(function(c) {
                return {
                    id: c.id,
                    val: c.value(),
                    sn: c.seen()
                };
            }),
            inventory: inventory().map(function(i) {
                return {
                    id: i.id,
                    seen: i.seen(),
                    eq: i.equipped()
                };
            }),
            visited: visitedRooms(),
            itemsGot: itemsEverAcquired(),
            level: level(),
            exp: exp(),
            points: statPoints(),
            grit: grit(),
            smarts: smarts(),
            charm: charm(),
            luck: luck(),
            nextItems: nextItems,
            nextItemsToRemove: nextItemsToRemove,
            nextInjury: nextInjury,
            room: roomId(),
        }
    }

    function getSavedGameData(callback) {
        try {
            NativeStorage.getItem(FILE_NAME, function(saveData) {
                if (saveData) {
                    callback(JSON.parse(saveData));
                } else {
                    callback(null);
                }
            });
        } catch (err) {
            var rawData = localStorage.getItem(FILE_NAME)
            if (rawData) {
                var data = JSON.parse(localStorage.getItem(FILE_NAME));

                // TODO temporary
                //console.log(JSON.stringify(data.save3))

                callback(data);
            } else {
                callback(null);
            }
        } 
    }

    function loadGame(loadCheckpoint) {
        getSavedGameData(function(data) {
            data = data[saveSlot];
            loadGameData(loadCheckpoint ? data.checkpoint : data.currentProgress, data.chapterTitle, data.chapterNumber);
        })
    }

    function resetToDefaults() {
        level(1);
        exp(0);
        statPoints(0);
        grit(10);
        smarts(10);
        charm(10);
        luck(10);

        weaponEquipped(null);
        armorEquipped(null);
        toolEquipped(null);
        accessoryEquipped(null);

        visitedRooms.removeAll();
        inventory.removeAll();
        itemsEverAcquired.removeAll();

        nextItems = undefined;
        nextInjury = undefined;
        nextItemsToRemove = undefined;

        for (var k = 0; k < conditions().length; k++) {
            conditions()[k].value('unset');
        }

        roomId('s1-1');
    }

    function loadGameData(data, cTitle, cNumber) {
        level(data.level);
        exp(data.exp);
        statPoints(data.points);
        grit(data.grit);
        smarts(data.smarts);
        charm(data.charm);
        luck(data.luck);

        if (data.nextItems) { nextItems = data.nextItems; }
        if (data.nextItemsToRemove) { nextItemsToRemove = data.nextItemsToRemove; }
        if (data.nextInjury) { nextInjury = data.nextInjury; } 

        weaponEquipped(null);
        armorEquipped(null);
        toolEquipped(null);
        accessoryEquipped(null);

        visitedRooms.removeAll();
        for (var l = 0; l < data.visited.length; l++) {
            visitedRooms().push(data.visited[l]);
        }

        if (data.itemsGot) {
            itemsEverAcquired.removeAll();
            for (var m = 0; m < data.itemsGot.length; m++) {
                itemsEverAcquired().push(data.itemsGot[m]);
            }
        }

        if (cTitle) {
            chapterNumber = cNumber;
            chapterTitle = cTitle;
        }

        // Clear condition values before reloading them
        for (var k = 0; k < conditions().length; k++) {
            conditions()[k].value('unset');
        }

        for (var i = 0; i < data.conditions.length; i++) {
            setCondition(data.conditions[i].id, data.conditions[i].val, data.conditions[i].sn);
        }

        inventory.removeAll();
        for (var j = 0; j < data.inventory.length; j++) {
            var dataItem = data.inventory[j];
            var item = items[dataItem.id];
            var newItem = new Item(dataItem.id, item);
            newItem.seen(dataItem.seen);

            if (!itemOwned(newItem)) {
                inventory.push(newItem)
            }

            if (dataItem.eq) {
                newItem.equip();
            }
        }

        roomId('s1-1')
        roomId(data.room);

        handleSaveDataPatches();
    }

    function setCondition(id, value, seen) {
        for (var i = 0; i < conditions().length; i++) {
            if (conditions()[i].id === id) {
                conditions()[i].value(value);
                conditions()[i].seen(seen)
            }
        }
    }

    /*****************************************************
                        MAIN MENU
    *****************************************************/

    var mainMenu = {
        newGame: function() {
            showNewGamePopover();
        },
        loadGame: function() {
            showLoadGamePopover();
        },
        about: function() {
            showAboutPopover();
        },
        continueGame: function() {
            var newest = mainMenu.saveSlots()[0]
            for (var i = 1; i < mainMenu.saveSlots().length; i++) {
                var slot = mainMenu.saveSlots()[i];
                if (getLastPlayed(slot.lastPlayedRaw) > getLastPlayed(newest.lastPlayedRaw)) {
                    newest = slot
                }
            }

            saveSlot = newest.slot;
            console.log(saveSlot)

            loadGame();
            loadGameAnimation();
        },
        saveSlots: ko.observableArray([]),
        checkSaves: function() {
            getSavedGameData(function(data) {

                // Dummy data
                // "lastPlayed":1611907929480,"currentProgress":{"conditions":[{"id":"c1-1","val":"yes","sn":false},{"id":"c1-3","val":"yes","sn":false},{"id":"c1-4","val":"no","sn":false},{"id":"c1-6","val":"yes","sn":false},{"id":"c1-7","val":"yes","sn":false},{"id":"c1-8","val":"yes","sn":false},{"id":"c1-10","val":"yes","sn":false},{"id":"c2-1","val":"yes","sn":false},{"id":"c2-2","val":"yes","sn":false},{"id":"c2-5","val":"yes","sn":false},{"id":"c2-7","val":"no","sn":false},{"id":"c2-11","val":"yes","sn":false},{"id":"c1-12","val":"yes","sn":false},{"id":"c2-12","val":"yes","sn":false},{"id":"c2-14","val":"yes","sn":false},{"id":"c2-15","val":"no","sn":false},{"id":"c2-16","val":"yes","sn":false},{"id":"c2-17","val":"yes","sn":false},{"id":"c2-20","val":"yes","sn":false},{"id":"c2-21","val":"yes","sn":false},{"id":"c2-22","val":"yes","sn":false},{"id":"c2-23","val":"yes","sn":false},{"id":"c2-24","val":"yes","sn":false},{"id":"c2-25","val":"yes","sn":false},{"id":"c2-27","val":"no","sn":false},{"id":"c1-13","val":"yes","sn":false},{"id":"c1-14","val":"yes","sn":false},{"id":"c2-28","val":"no","sn":false},{"id":"c2-30","val":"yes","sn":false},{"id":"c2-31","val":"yes","sn":false},{"id":"c2-32","val":"yes","sn":false},{"id":"c2-37","val":"yes","sn":false},{"id":"c1-15","val":"no","sn":false},{"id":"c1-16","val":"yes","sn":false},{"id":"c2-38","val":"yes","sn":false},{"id":"c2-42","val":"yes","sn":false},{"id":"s2-43","val":"yes","sn":false},{"id":"c2-44","val":"no","sn":false}],"inventory":[{"id":"i1-1","seen":true,"eq":true},{"id":"i2-1","seen":true,"eq":true},{"id":"i2-6","seen":true,"eq":true},{"id":"i2-9","seen":true,"eq":false},{"id":"i2-2","seen":true,"eq":false}],"visited":["s1-1","s1-2","s1-3","s1-7","s1-8","s1-9","s1-10","s1-11","s1-3.1","s1-3.3","s1-3.2","s1-7.1","s1-4","s1-6","s1-6.1","s1-4.1","s1-13","s1-14","s1-15","s1-17","s1-18","s1-23","s1-21","s1-21.1","s1-24","s1-25","s1-26","s2-1","s2-2","s2-3","s2-4","s2-5","s2-7","s2-5.1","s2-5.3","s2-5.2","s2-5.4","s2-5.5","s2-6","s2-6.2","s2-14","s2-14.4","s2-14.1","s2-14.2","s2-14.3","s2-14.2.1","s2-14.4.1","s2-14.5","s2-14.6","s2-6.1","s2-6.1.2","s2-6.1.1","s2-8","s2-9","s2-9.1","s2-10","s2-10.1","s2-10.2","s2-11","s2-8.1","s2-12","s2-12.1","s2-12.2","s2-12.3","s2-13","s2-13.0","s2-13.1","s2-13.2","s2-13.3","s2-13.4","s2-13.5","s2-13.6","s2-13.7","s2-8.2","s2-7.1","s2-7.2","s2-8.1.1","s2-7.3","s2-7.4","s2-7.5","s2-7.6","s2-7.7","s2-7.8","s2-7.9","s2-7.10","s2-7.11"],"level":2,"exp":153,"points":0,"grit":11,"smarts":10,"charm":10,"luck":11,"room":"s2-7.12"},"checkpoint":{"conditions":[{"id":"c1-1","val":"yes","sn":false},{"id":"c1-3","val":"yes","sn":false},{"id":"c1-4","val":"no","sn":false},{"id":"c1-6","val":"yes","sn":false},{"id":"c1-7","val":"yes","sn":false},{"id":"c1-8","val":"yes","sn":false},{"id":"c1-10","val":"yes","sn":false},{"id":"c1-12","val":"yes","sn":false},{"id":"c1-13","val":"yes","sn":false},{"id":"c1-14","val":"yes","sn":false},{"id":"c1-15","val":"no","sn":false},{"id":"c1-16","val":"yes","sn":false}],"inventory":[{"id":"i1-1","seen":true,"eq":true}],"visited":["s1-1","s1-2","s1-3","s1-7","s1-8","s1-9","s1-10","s1-11","s1-3.1","s1-3.3","s1-3.2","s1-7.1","s1-4","s1-6","s1-6.1","s1-4.1","s1-13","s1-14","s1-15","s1-17","s1-18","s1-23","s1-21","s1-21.1","s1-24","s1-25","s1-26"],"level":1,"exp":96,"points":0,"grit":10,"smarts":10,"charm":10,"luck":10,"room":"s2-1"

                // Create save data on first load
                if (!data || !data.save1) {
                    var dataSkeleton = {
                        'save1': {},
                        'save2': {},
                        'save3': {}

                    }

                    setData(dataSkeleton);
                    data = dataSkeleton;
                } else {
                    lightMode(data.lightMode);
                    bigText(data.bigText);
                    bigLine(data.bigLine);
                    fastTransitions(data.fastTransitions);
                }

                mainMenu.saveSlots.push(new SaveSlot('save1', data.save1));
                mainMenu.saveSlots.push(new SaveSlot('save2', data.save2));
                mainMenu.saveSlots.push(new SaveSlot('save3', data.save3));
            });
        }
    }

    function getLastPlayed(lastPlayed) {
        if (lastPlayed) {
            return parseInt(lastPlayed);
        } else {
            return 0;
        }

    }

    function loadGameAnimation() {
        $('.app-blackout').fadeIn(baseFade() * 2, function() {
            hideAllPopovers();
            appUiView('activeGame');
            storyView('mainStory');
            uiView('story');
            checkTextLength();
            $('.app-blackout').fadeOut(baseFade() * 3);
            $('.blackout').hide();
        });
    }

    function mainMenuAnimation() {
        $('.app-blackout').fadeIn(baseFade() * 2, function() {
            hideAllPopovers();
            appUiView('mainMenu');
            uiView('story');
            inventoryView('items');
            storyView('mainStory');
            $('.app-blackout').fadeOut(baseFade() * 3);
            $('.blackout').hide();
        });
    }

    function SaveSlot(slot, data) {
        this.prog = data.currentProgress
        this.slot = slot;

        if (this.prog) {
            this.roomTitle = rooms[this.prog.room].title;
            this.level = this.prog.level;
            this.lastPlayedRaw = data.lastPlayed;
            this.lastPlayed = new Date(data.lastPlayed).toLocaleString();
        }

        this.startNewGame = function() {
            $('.app-blackout').fadeIn(baseFade() * 2, function() {
                resetToDefaults();
                appUiView('activeGame');
                storyView('chapterSplash');
                splash.header('Prologue');
                splash.name('The Village');
                hideAllPopovers();
                $('.app-blackout').fadeOut(baseFade() * 2, function() {
                    handleChapterSplash();
                    saveSlot = this.slot
                    saveGame(true);
                }.bind(this));
            }.bind(this));
        }

        this.loadFromSlot = function() {
            saveSlot = this.slot;
            loadGame();
            loadGameAnimation();
        }
    }

    /*****************************************************
                        UI
    *****************************************************/

    var appUiView = ko.observable('mainMenu');
    var uiView = ko.observable('story');
    var storyView = ko.observable('mainStory')
    var inventoryView = ko.observable('items');
    var popoverActive = ko.observable(false);
    var selectedItem = ko.observable();
    var selectedInjury = ko.observable();
    var isFixedChoices = ko.observable(false);
    var solutionResult = {
        term: ko.observable('Success'),
        base: ko.observable(0),
        riskBonus: ko.observable(0),
        failurePenalty: ko.observable(null),
        total: ko.observable(0),
        continue: function() {
            $('.blackout').fadeIn(baseFade(), function() {
                storyView('mainStory');
                checkTextLength();
                $('.blackout').fadeOut(baseFade(), function() {
                    justGotLevelUp(false);
                });
            });
        }
    }

    var itemInjuryLabel = ko.computed(function() {
        var itemsGained = itemsJustReceived().length > 0;
        var itemsLost = itemsJustLost().length > 0;
        var injuries = injuriesJustSustained().length > 0;

        if ((itemsGained || itemsLost) && !injuries) {
            return 'Items';
        } else if (!(itemsGained || itemsLost) && injuries) {
            return 'Injuries';
        } else {
            'Items & Injuries';
        }
    }, this);

    var itemContinue = function() {
        $('.blackout').fadeIn(baseFade(), function() {
            storyView('mainStory');
            checkTextLength();
            $('.blackout').fadeOut(baseFade());
        });
    }

    var splash = {
        header: ko.observable(''),
        name: ko.observable('')
    }

    function setSolutionResult(term, base) {
        solutionResult.term(term);
        solutionResult.base(base);
    }

    function setView(view) {
        var fadeTime = 200;
        $('#game-area').fadeOut(fadeTime, function() {
            $(window).scrollTop(0);
            uiView(view);

            setTimeout(function() {
                if (view === 'story') {
                    checkTextLength();
                }
            }.bind(this), 500);

            $('#game-area').fadeIn(fadeTime);
        }.bind(this))
    }

    function setInventoryView(view) {
        var fadeTime = 200;
        $('#inventory-box').fadeOut(fadeTime, function() {
            inventoryView(view);
            $('#inventory-box').fadeIn(fadeTime);
        }.bind(this))
    }

    function showPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#itemPopover').fadeIn(200);
        }, 100);
    }

    function hidePopover() {
        popoverActive(false);
        $('#itemPopover').fadeOut(200);
    }

    var spendStatPoints = function() {
        showLevelPopover();
    }

    var confirmStatPoints = function() {
        if (tempSpent() > 0) {
            grit(tempStats().grit.val());
            smarts(tempStats().smarts.val());
            charm(tempStats().charm.val());
            luck(tempStats().luck.val());
            statPoints(statPoints() - tempSpent());
            tempSpent(0);
            hideLevelPopover();
        }
    }

    function showLevelPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#levelPopover').fadeIn(200);
        }, 100);
    }

    function hideLevelPopover() {
        popoverActive(false);
        $('#levelPopover').fadeOut(200);
    }

    function showInjuryPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#injuryPopover').fadeIn(200);
        }, 100);
    }

    function hideInjuryPopover() {
        popoverActive(false);
        $('#injuryPopover').fadeOut(200);
    }

    function showNewGamePopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#newGamePopover').fadeIn(200);
        }, 100);
    }

    function hideNewGamePopover() {
        popoverActive(false);
        $('#newGamePopover').fadeOut(200);
    }

    function showLoadGamePopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#loadGamePopover').fadeIn(200);
        }, 100);
    }

    function hideLoadGamePopover() {
        popoverActive(false);
        $('#loadGamePopover').fadeOut(200);
    }

    function showAboutPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#aboutPopover').fadeIn(200);
        }, 100);
    }

    function hideAboutPopover() {
        popoverActive(false);
        $('#aboutPopover').fadeOut(200);
    }

    function showRestartChapterPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#restartChapterPopover').fadeIn(200);
        }, 100);
    }

    function showCreditsPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#creditsPopover').fadeIn(200);
        }, 100);
    }

    function showDemoEndPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#demoEndPopover').fadeIn(200);
        }, 100);
    }

    function showExportPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#exportPopover').fadeIn(200);
        }, 100);
    }

    function showImportPopover() {
        setTimeout(function() {
            popoverActive(true);
            $('#importPopover').fadeIn(200);
        }, 100);
    }

    function checkTextLength() {
        isFixedChoices(false)
        var availableSpace = $(window).height() - ($('.choices').height() + $('.nav').height() + $('#game-area h3').height() + 100);
        var textLength = $('#room-text').height();

        if (textLength < availableSpace) {
            isFixedChoices(true);
        } else {
            isFixedChoices(false);
        }
    }

    function hideAllPopovers(el, event) {
        if (!event || $(event.target).closest('.popover').length === 0) {
            if (event) { 
                event.preventDefault();
                event.stopPropagation(); 
            } 

            closePopovers();
        } else if (event.target.href) {
            window.open(event.target.href, '_blank')
        }
    }

    function closePopovers() {
        popoverActive(false);
        $('.popover').fadeOut(200);
    }

    function itemIsInInventory(id) {
        var itemFound = false;
        for (var i = 0; i < inventory().length; i++) {
            if (inventory()[i].id === id) {
                itemFound = true;
            }
        }

        return itemFound;
    }

    /*****************************************************
                        PATCHES
    *****************************************************/

    function handleSaveDataPatches() {
        // Fix for if surgeon's bag was used when it shouldn't have been possible
        // This should fire if Doyle has found the bag (c2-53) but has not given it to Wilda (c2-23)
        if (getCondition('c2-23').value() === 'unset' && getCondition('c2-53').value() !== 'unset') {
            if (!itemIsInInventory('i2-10')) {
                inventory.push(new Item('i2-10', items['i2-10']))
            }
        }
    }

    initializeGame();

    return {
        roomId: roomId,
        roomTitle: roomTitle,
        roomText: roomText,
        choices: choices,
        goChoices: goChoices,
        otherChoices: otherChoices,
        solutions: solutions,
        toggleMenu: toggleMenu,
        inventory: inventory,
        inventoryEquipment: inventoryEquipment,
        inventoryItems: inventoryItems,
        inventoryConsumables: inventoryConsumables,

        itemsJustReceived: itemsJustReceived,
        itemsJustLost: itemsJustLost,
        itemContinue: itemContinue,
        injuriesJustSustained: injuriesJustSustained,

        setView: setView,
        uiView: uiView,
        appUiView: appUiView,
        setInventoryView: setInventoryView,
        inventoryView: inventoryView,
        popoverActive: popoverActive,
        showPopover: showPopover,
        hidePopover: hidePopover,
        selectedItem: selectedItem,
        weaponEquipped: weaponEquipped,
        armorEquipped: armorEquipped,
        toolEquipped: toolEquipped,
        accessoryEquipped: accessoryEquipped,
        displayGrit: displayGrit,
        displaySmarts: displaySmarts,
        displayCharm: displayCharm,
        displayLuck: displayLuck,
        currentInjuries: currentInjuries,
        healthStatus: healthStatus,
        level: level,
        exp: exp,
        expNeeded: expNeeded,
        isFixedChoices: isFixedChoices,
        solutionResult: solutionResult,
        storyView: storyView,
        conditions: conditions,
        visitedRooms: visitedRooms,
        tempStats: tempStats,
        statPoints: statPoints,
        tempSpent: tempSpent,
        spendStatPoints: spendStatPoints,
        confirmStatPoints: confirmStatPoints,
        handleDeath: handleDeath,
        newItems: newItems,
        newRegularItems: newRegularItems,
        newEquippableItems: newEquippableItems,
        newConsumableItems: newConsumableItems,
        newInjuries: newInjuries,
        hideAllPopovers: hideAllPopovers,
        closePopovers: closePopovers,
        justGotLevelUp: justGotLevelUp,
        mainMenu: mainMenu,
        settingsButtons: settingsButtons,
        splash: splash,
        saveGame: saveGame,
        checkTextLength: checkTextLength,
        selectedInjury: selectedInjury,
        characterUpdates: characterUpdates,
        playStats: playStats,
        healing: healing,
        injuryHealed: injuryHealed,
        getCondition: getCondition,
        itemInjuryLabel: itemInjuryLabel,
        demoEnd: demoEnd,

        grit: grit,
        smarts: smarts,
        charm: charm,
        luck: luck,
        
        bigText: bigText,
        bigLine: bigLine,
        fastTransitions: fastTransitions,
        lightMode: lightMode
    }
})();