
var body = document.getElementsByTagName('body')[0];
var mineralWrapper = document.getElementById('mineral-wrapper');
var vespeneWrapper = document.getElementById('vespene-wrapper');
var achievementWrapper = document.getElementById('achievement-wrapper');
// Clickers
var mineral = document.getElementsByClassName('mineral');
var vespene = document.getElementsByClassName('vespene');
var scv = document.getElementsByClassName('scv');
// Score Displays
var mineralDisplay = document.getElementById('mineral-display');
var vespeneDisplay = document.getElementById('vespene-display');
var achievementDisplay = document.getElementById('achievement-display');
// SCV Price Displays
var scvOnMineralPriceDisplay = document.getElementById('scv-on-mineral-price-display');
var scvOnVespenePriceDisplay = document.getElementById('scv-on-vespene-price-display');
// Mule Price Displays
var muleOnMineral_MineralPriceDisplay = document.getElementById('mule-on-mineral-mineral-price-display');
var muleOnMineral_VespenePriceDisplay = document.getElementById('mule-on-mineral-vespene-price-display');
var muleOnVespene_MineralPriceDisplay = document.getElementById('mule-on-vespene-mineral-price-display');
var muleOnVespene_VespenePriceDisplay = document.getElementById('mule-on-vespene-vespene-price-display');
// SCV Upgrage Price Displays
var scvMineralUpgrade_MineralPriceDisplay = document.getElementById('scv-mineral-upgrade-mineral-price-display');
var scvMineralUpgrade_VespenePriceDisplay = document.getElementById('scv-mineral-upgrade-vespene-price-display');
var scvVespeneUpgrade_MineralPriceDisplay = document.getElementById('scv-vespene-upgrade-mineral-price-display');
var scvVespeneUpgrade_VespenePriceDisplay = document.getElementById('scv-vespene-upgrade-vespene-price-display');
// Mule Upgrade Price Displays
var muleMineralUpgrade_MineralPriceDisplay = document.getElementById('mule-mineral-upgrade-mineral-price-display');
var muleMineralUpgrade_VespenePriceDisplay = document.getElementById('mule-mineral-upgrade-vespene-price-display');
var muleVespeneUpgrade_MineralPriceDisplay = document.getElementById('mule-vespene-upgrade-mineral-price-display');
var muleVespeneUpgrade_VespenePriceDisplay = document.getElementById('mule-vespene-upgrade-vespene-price-display');
// Commander Mining Upgrades Price Displays
var commanderMiningUpgrade_MineralPriceDisplay = document.getElementById('commander-mining-upgrade-mineral-price-display');
var commanderMiningUpgrade_VespenePriceDisplay = document.getElementById('commander-mining-upgrade-vespene-price-display');

// Workers Fields
var mineralWorkers = document.getElementById('mineral-workers');
var vespeneWorkers = document.getElementById('vespene-workers');
// Command Center Button
var scvOnMineral = document.getElementById('scv-on-mineral');
var muleOnMineral = document.getElementById('mule-on-mineral');
var scvOnVespene = document.getElementById('scv-on-vespene');
var muleOnVespene = document.getElementById('mule-on-vespene');
// Engineering Bay Button
var scvMineralUpgrade = document.getElementById('scv-mineral-upgrade');
var muleMineralUpgrade = document.getElementById('mule-mineral-upgrade');
var scvVespeneUpgrade = document.getElementById('scv-vespene-upgrade');
var muleVespeneUpgrade = document.getElementById('mule-vespene-upgrade');
// Commander Upgrade
var commanderMiningUpgrade = document.getElementById('commander-mining-upgrade');

// Audio Vars
var vespeneSound = new Audio('assets/sounds/OutOfGas.wav');
vespeneSound.volume = 0.2;
var scvSpawningSound = new Audio('assets/sounds/scvGoodToGoSir.wav');
scvSpawningSound.volume = 0.6;
var muleSpawningSound = new Audio('assets/sounds/pieceOfMeBoy.wav');
muleSpawningSound.volume = 0.6;
var disabledSound = new Audio('assets/sounds/button.wav');
disabledSound.volume = 0.5;
var upgradeSound = new Audio('assets/sounds/upgradeComplete.wav');
upgradeSound.volume = 0.4;
var researchSound = new Audio('assets/sounds/researchComplete.wav');
researchSound.volume = 0.5;

// Count Vars
var scvOnMineralCount = 0;
var scvOnVespeneCount = 0;
var muleOnMineralCount = 0;
var muleOnVespeneCount = 0;
var scvMineralUpgradeCount = 0;
var scvVespeneUpgradeCount = 0;
var muleMineralUpgradeCount = 0;
var muleVespeneUpgradeCount = 0;
var commanderMiningUpgradeCount = 0;
var scvCount = 0;

// Score
var mineralScore = 0;
var vespeneScore = 0;
var achievementScore = 0;
// SCV and Mules Prices
var scvOnMineralPrice = 100;
var scvOnVespenePrice = 100;
var muleOnMineral_MineralPrice = 200;
var muleOnMineral_VespenePrice = 100;
var muleOnVespene_MineralPrice = 200;
var muleOnVespene_VespenePrice = 100;
// Upgrades Prices
var scvMineralUpgrade_MineralPrice = 200;
var scvMineralUpgrade_VespenePrice = 200;
var scvVespeneUpgrade_MineralPrice = 200;
var scvVespeneUpgrade_VespenePrice = 200;
var muleMineralUpgrade_MineralPrice = 400;
var muleMineralUpgrade_VespenePrice = 300;
var muleVespeneUpgrade_MineralPrice = 400;
var muleVespeneUpgrade_VespenePrice = 300;
var commanderMiningUpgrade_MineralPrice = 200;
var commanderMiningUpgrade_VespenePrice = 200;

// Command Center Prices Augmentation
var scvOnMineralPriceAugmentation = 1.3;
var scvOnVespenePriceAugmentation = 1.3;
var muleOnMineralPriceAugmentation = 2;
var muleOnVespenePriceAugmentation = 2;

// Engineering Bay Prices Augmentation
var scvMineralUpgrade_MineralPriceAugmentation = 2;
var scvMineralUpgrade_VespenePriceAugmentation = 2;
var scvVespeneUpgrade_MineralPriceAugmentation = 2;
var scvVespeneUpgrade_VespenePriceAugmentation = 2;
var muleMineralUpgrade_MineralPriceAugmentation = 2;
var muleMineralUpgrade_VespenePriceAugmentation = 2;
var muleVespeneUpgrade_MineralPriceAugmentation = 2;
var muleVespeneUpgrade_VespenePriceAugmentation = 2;

// Commander Price Augmentation
var commanderMiningUpgrade_MineralPriceAugmentation = 2;
var commanderMiningUpgrade_VespenePriceAugmentation = 2;

// Mining Power
var commanderMiningPower = 1;
var scvMineralMiningPower = 1;
var scvVespeneMiningPower = 1;
var muleMineralMiningPower = 5;
var muleVespeneMiningPower = 5;

// Mining Power Augmentation
var commanderMiningPowerAugmentation = 2;
var scvMineralMiningPowerAugmentation = 2;
var scvVespeneMiningPowerAugmentation = 2;
var muleMineralMiningPowerAugmentation = 2;
var muleVespeneMiningPowerAugmentation = 2;

// Mining Speed
var scvMineralMiningSpeed = 2000;
var scvVespeneMiningSpeed = 2000;
var muleMineralMiningSpeed = 500;
var muleVespeneMiningSpeed = 500;

// Mining Speed Augmentation
var scvMineralMiningSpeedAugmentation = 0.9;
var scvVespeneMiningSpeedAugmentation = 0.9;
var muleMineralMiningSpeedAugmentation = 0.9;
var muleVespeneMiningSpeedAugmentation = 0.9;

// Mules Duration
var muleMineralDuration = 15000;
var muleVespeneDuration = 15000;

// Achievements Vars
var mineralRushPioneer = false;
var vespeneRushPioneer = false;
var youAintAlone = false;
var thereIsALeak = false;
var muleGoesFast = false;
var thereIsAReservoirHere = false;
var betterToolsForBetterWorkers = false;
var letsGoDeeper = false;
var eenyMeenyMiningMoe = false;
var fasterScvMineMine = false;
var feelThePower = false;
var thatsABeginning = false;
var insufficientVespeneGas = false;
var youAreOnTheRightPath = false;
var youKnowItsUseless = false;
var thisIsBusiness = false;
var inAHurry = false;

function hideButtons(){
  if ( mineralScore >= scvOnMineralPrice){
    scvOnMineral.style.color = '#fff';
    scvOnMineral.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    scvOnMineral.style.color = '#666';
    scvOnMineral.style.borderColor = 'rgba(255,255,255,.0)';
  }

  if ( mineralScore >= scvOnVespenePrice){
    scvOnVespene.style.color = '#fff';
    scvOnVespene.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    scvOnVespene.style.color = '#666';
    scvOnVespene.style.borderColor = 'rgba(255,255,255,.0)';
  }

  if (mineralScore >= muleOnMineral_MineralPrice && vespeneScore >= muleOnMineral_VespenePrice){
    muleOnMineral.style.color = '#fff';
    muleOnMineral.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    muleOnMineral.style.color = '#666';
    muleOnMineral.style.borderColor = 'rgba(255,255,255,.0)';
  }

  if (mineralScore >= muleOnVespene_MineralPrice && vespeneScore >= muleOnVespene_VespenePrice){
    muleOnVespene.style.color = '#fff';
    muleOnVespene.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    muleOnVespene.style.color = '#666';
    muleOnVespene.style.borderColor = 'rgba(255,255,255,.0)';
  }

  if ( mineralScore >= scvMineralUpgrade_MineralPrice && vespeneScore >= scvMineralUpgrade_VespenePrice){
    scvMineralUpgrade.style.color = '#fff';
    scvMineralUpgrade.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    scvMineralUpgrade.style.color = '#666';
    scvMineralUpgrade.style.borderColor = 'rgba(255,255,255,.0)';
  }

  if ( mineralScore >= scvVespeneUpgrade_MineralPrice && vespeneScore >= scvVespeneUpgrade_VespenePrice){
    scvVespeneUpgrade.style.color = '#fff';
    scvVespeneUpgrade.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    scvVespeneUpgrade.style.color = '#666';
    scvVespeneUpgrade.style.borderColor = 'rgba(255,255,255,.0)';
  }

  if ( mineralScore >= muleMineralUpgrade_MineralPrice && vespeneScore >= muleMineralUpgrade_VespenePrice){
    muleMineralUpgrade.style.color = '#fff';
    muleMineralUpgrade.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    muleMineralUpgrade.style.color = '#666';
    muleMineralUpgrade.style.borderColor = 'rgba(255,255,255,.0)';
  }

  if ( mineralScore >= muleVespeneUpgrade_MineralPrice && vespeneScore >= muleVespeneUpgrade_VespenePrice){
    muleVespeneUpgrade.style.color = '#fff';
    muleVespeneUpgrade.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    muleVespeneUpgrade.style.color = '#666';
    muleVespeneUpgrade.style.borderColor = 'rgba(255,255,255,.0)';
  }

  if ( mineralScore >= commanderMiningUpgrade_MineralPrice && vespeneScore >= commanderMiningUpgrade_VespenePrice){
    commanderMiningUpgrade.style.color = '#fff';
    commanderMiningUpgrade.style.borderColor = 'rgba(255,255,255,.5)';
  } else {
    commanderMiningUpgrade.style.color = '#666';
    commanderMiningUpgrade.style.borderColor = 'rgba(255,255,255,.0)';
  }
  // Refresh that var cause it aint any SCV at the start of the game ;)
  scv = document.getElementsByClassName('scv');
  // Click on SCV to make those Nostalgia Sound and to change Sprite :)
  for (var i = 0; i < scv.length; i++ ){
    scv[i].onclick = function(){
      var current = this;
      current.src = 'assets/img/scv/'+Math.floor((Math.random() * 12))+'.png';
      var audio = new Audio('assets/sounds/scv/'+Math.floor((Math.random() * 15))+'.wav');
      audio.volume = 0.6;
      audio.play();
      scvCount++;
      hideButtons();
      achievements();
    }
  }
};

// Create the PopUp
function achievementPopUp(title, text){
  var achievementDiv = document.createElement('div');
  achievementDiv.classList.add('achievement');
  var achievementAdvisor = document.createElement('img');
  achievementAdvisor.classList.add('advisor');
  achievementAdvisor.src = 'assets/img/advisor.png';
  achievementDiv.appendChild(achievementAdvisor);
  var achievementTitle = document.createElement('span');
  achievementTitle.classList.add('title');
  achievementTitle.innerHTML = title;
  achievementDiv.appendChild(achievementTitle);
  var achievementP = document.createElement('p');
  achievementP.innerHTML = text;
  achievementDiv.appendChild(achievementP);
  achievementWrapper.appendChild(achievementDiv);
  var trick = achievementDiv.offsetWidth;
  achievementDiv.style.opacity = '1';
  setTimeout(function(){
    achievementDiv.style.opacity = '0';
  }, 8000);
  setTimeout(function(){
    achievementWrapper.removeChild(achievementDiv);
  }, 8350);
};

// Add a PopUp for different Achievement / Tutorial
function achievements(){
  if ( mineralScore > 0 && mineralRushPioneer == false){
      achievementPopUp('Mineral Rush Pioneer', 'Congrats! You find how to be rich! Keep mining before the Zerg attacks!');
    mineralRushPioneer = true;
    achievementScore++;
  }
  if ( vespeneScore > 0 && vespeneRushPioneer == false){
      achievementPopUp('Vespene Rush Pioneer', 'What matter ain\'t always shiny. Vespine Gas will help you build better workers and upgrade them.');
    vespeneRushPioneer = true;
    achievementScore++;
  }
  if ( scvOnMineralCount > 0 && youAintAlone == false){
    achievementPopUp('You Ain\'t Alone', 'SCV are going to mine for you, treat them nicely.');
    youAintAlone = true;
    achievementScore++;
  }
  if ( scvOnVespeneCount > 0 && thereIsALeak == false){
    achievementPopUp('There Is A Gas Leak Boys', 'Smells weird here, that SCV is going to bring us some of this gas.');
    thereIsALeak = true;
    achievementScore++;
  }
  if ( muleOnMineralCount > 0 && muleGoesFast == false){
    achievementPopUp('Mule Goes Fast', 'This is reinforcement ! Mules won\'t last forever but they\'re a bloody damn help!');
    muleGoesFast = true;
    achievementScore++;
  }
  if ( muleOnVespeneCount > 0 && thereIsAReservoirHere == false){
    achievementPopUp('There is a reservoir here', 'Looks like your boys have found a big reservoir near by, let\'s dig it!');
    thereIsAReservoirHere = true;
    achievementScore++;
  }
  if ( scvMineralUpgradeCount > 0 && betterToolsForBetterWorkers == false){
    achievementPopUp('Better tools for better workers', 'Now your SCV are going faster and they can carry more minerals, that\'s seem to be a good deal!');
    betterToolsForBetterWorkers = true;
    achievementScore++;
  }
  if ( scvVespeneUpgradeCount > 0 && letsGoDeeper == false){
    achievementPopUp('let\'s go deeper', 'SCV are now gathering gas way better! Be careful with that gas though, we\'re not sure if it\'s stable...');
    letsGoDeeper = true;
    achievementScore++;
  }
  if ( muleMineralUpgradeCount > 0 && eenyMeenyMiningMoe == false){
    achievementPopUp('Eeny Meeny Mining Moe', 'Catch a Zergling by the toe, if he hollers, don\'t let him go!');
    eenyMeenyMiningMoe = true;
    achievementScore++;
  }
  if ( muleVespeneUpgradeCount > 0 && fasterScvMineMine == false){
    achievementPopUp('Faster, Scv! Mine! Mine!', 'Keep on grinding, Pussycat.');
    fasterScvMineMine = true;
    achievementScore++;
  }
  if ( commanderMiningUpgradeCount > 0 && feelThePower == false){
    achievementPopUp('Feel the power', 'Now you can mine faster. Keep on clicking, the Swarm is not far away.');
    feelThePower = true;
    achievementScore++;
  }
  if ( mineralScore >= 1000 && thatsABeginning == false){
    achievementPopUp('That\'s a beginning', 'Not enough minerals. Just kidding, don\'t forget to spend what you have though.<br>1000 Mineral Achievement.');
    var audio = new Audio('assets/sounds/notEnoughMinerals.wav');
    audio.volume = 0.5;
    audio.play();
    thatsABeginning = true;
    achievementScore++;
  }
  if ( vespeneScore >= 1000 && insufficientVespeneGas == false){
    achievementPopUp('insufficient vespene gas', 'You want millions of gas! but i guess that\'s a start.<br>1000 Vespine Gas Achievement.');
    var audio = new Audio('assets/sounds/InsufficientVespeneGas.wav');
    audio.volume = 0.5;
    audio.play();
    insufficientVespeneGas = true;
    achievementScore++;
  }
  if ( mineralScore >= 10000 && youAreOnTheRightPath == false){
    achievementPopUp('You are on the right path', '10,000 Minerals is good, we are close to build our first Battlecruiser, but it\'s an entire fleet we need against the Swarn.');
    var audio = new Audio('assets/sounds/YouWin.wav');
    audio.volume = 0.5;
    audio.play();
    youAreOnTheRightPath = true;
    achievementScore++;
  }
  if ( scvCount >= 100 && youKnowItsUseless == false){
    achievementPopUp('You know it\'s useless?', 'Come on, you\'ve clicked a thousand time on something totally useless. Focus dude, you are here to work!');
    youKnowItsUseless = true;
    achievementScore++;
  }
  if ( (scvOnMineralCount + scvOnVespeneCount) >= 10 && thisIsBusiness == false){
    achievementPopUp('this is bussiness', 'You got 10 SCV deployed, we will need many more, but i guess it\'s a start.');
    thisIsBusiness = true;
    achievementScore++;
  }
  if ( (muleOnMineralCount + muleOnVespeneCount) >= 6 && inAHurry == false){
    achievementPopUp('In a hurry', 'I\'ve only see once a hurry like this... zerglings.<br>Deploy 6 Mules Simultaneously Achievement.');
    inAHurry = true;
    achievementScore++;
  }
  // refresh achievement Display
  achievementDisplay.innerHTML = achievementScore;
};



// Load Starting Values
body.onload = function(){
  // Score Display
  mineralDisplay.innerHTML = mineralScore;
  vespeneDisplay.innerHTML = vespeneScore;
  achievementDisplay.innerHTML = achievementScore;

  // SCV Prices
  scvOnMineralPriceDisplay.innerHTML = scvOnMineralPrice;
  scvOnVespenePriceDisplay.innerHTML = scvOnVespenePrice;

  // Mules Prices
  muleOnMineral_MineralPriceDisplay.innerHTML = muleOnMineral_MineralPrice;
  muleOnMineral_VespenePriceDisplay.innerHTML = muleOnMineral_VespenePrice;
  muleOnVespene_MineralPriceDisplay.innerHTML = muleOnVespene_MineralPrice;
  muleOnVespene_VespenePriceDisplay.innerHTML = muleOnVespene_VespenePrice;

  // SCV Upgrades Prices
  scvMineralUpgrade_MineralPriceDisplay.innerHTML = scvMineralUpgrade_MineralPrice;
  scvMineralUpgrade_VespenePriceDisplay.innerHTML = scvMineralUpgrade_VespenePrice;
  scvVespeneUpgrade_MineralPriceDisplay.innerHTML = scvVespeneUpgrade_MineralPrice;
  scvVespeneUpgrade_VespenePriceDisplay.innerHTML = scvVespeneUpgrade_VespenePrice;

  // Mule Upgrades Prices
  muleMineralUpgrade_MineralPriceDisplay.innerHTML = muleMineralUpgrade_MineralPrice;
  muleMineralUpgrade_VespenePriceDisplay.innerHTML = muleMineralUpgrade_VespenePrice;
  muleVespeneUpgrade_MineralPriceDisplay.innerHTML = muleVespeneUpgrade_MineralPrice;
  muleVespeneUpgrade_VespenePriceDisplay.innerHTML = muleVespeneUpgrade_VespenePrice;

  // Commander Mining Upgrades Prices
  commanderMiningUpgrade_MineralPriceDisplay.innerHTML = commanderMiningUpgrade_MineralPrice;
  commanderMiningUpgrade_VespenePriceDisplay.innerHTML = commanderMiningUpgrade_VespenePrice;

  hideButtons();
  achievements();
};

// Refreshing browser trick (doesnt seem to work :p)
// setInterval(function(){
//   var trick = body.offsetWidth;
//   var trick2 = window.getComputedStyle();
// }, 1);

// Click on mineral UP Score
for (var i = 0; i < mineral.length; i++){
  mineral[i].onclick = function(){
    var current = this;
    mineralScore += commanderMiningPower;
    mineralDisplay.innerHTML = mineralScore;
    current.src = 'assets/img/mineral/'+Math.floor((Math.random() * 4))+'.png';
    current.style.transform = 'scale(0.9)';
    setTimeout(function(){
      current.style.transform = 'scale(1)';
    }, 150);
    // Scored +X
    var mineralScored = document.createElement('span');
    mineralScored.classList.add('mineral-scored');
    mineralScored.innerHTML = "+"+commanderMiningPower;
    mineralWrapper.appendChild(mineralScored);
    var trick = mineralWrapper.offsetWidth;
    mineralScored.style.top = '300px';
    mineralScored.style.opacity = '0';
    setTimeout(function(){
      mineralWrapper.removeChild(mineralScored);
    }, 3000);
    // Audio
    var audio = new Audio('assets/sounds/scvRepair/'+Math.floor((Math.random() * 5))+'.wav');
    audio.volume = 0.3;
    audio.play();

    hideButtons();
    achievements();
  };
};

// Click on vespene UP Score
for (var i = 0; i < vespene.length; i++){
  vespene[i].onclick = function(){
    var current = this;
    vespeneScore += commanderMiningPower;
    vespeneDisplay.innerHTML = vespeneScore;
    current.style.transform = 'scale(0.9)';
    setTimeout(function(){
      current.style.transform = 'scale(1)';
    }, 150);
    // Scored +X
    var vespeneScored = document.createElement('span');
    vespeneScored.classList.add('vespene-scored');
    vespeneScored.innerHTML = "+"+commanderMiningPower;
    vespeneWrapper.appendChild(vespeneScored);
    var trick = vespeneWrapper.offsetWidth;
    vespeneScored.style.top = '300px';
    vespeneScored.style.opacity = '0';
    setTimeout(function(){
      vespeneWrapper.removeChild(vespeneScored);
    }, 3000);
    // Audio
    vespeneSound.play();
    hideButtons();
    achievements();
  };
};


// Add a SCV Mining Mineral
scvOnMineral.onclick = function(){
  if ( mineralScore >= scvOnMineralPrice){
    // Change Score
    mineralScore -= scvOnMineralPrice;
    mineralDisplay.innerHTML = mineralScore;
    // Change Price
    scvOnMineralPrice = Math.floor(scvOnMineralPrice * scvOnMineralPriceAugmentation);
    scvOnMineralPriceDisplay.innerHTML = scvOnMineralPrice;
    // Create New SCV
    var newScv = document.createElement('img');
    newScv.classList.add('scv');
    newScv.src = 'assets/img/scv/'+Math.floor((Math.random() * 12))+'.png';
    mineralWorkers.appendChild(newScv);
    // Count
    scvOnMineralCount++;
    // Audio SCV Spawning
    scvSpawningSound.play();
    // Add autoclick
    setInterval(function(){
      mineralScore += scvMineralMiningPower;
      mineralDisplay.innerHTML = mineralScore;
      // Scored +X
      var mineralScored = document.createElement('span');
      mineralScored.classList.add('mineral-scored');
      mineralScored.innerHTML = "+"+scvMineralMiningPower;
      mineralScored.style.color = 'pink';
      mineralWrapper.appendChild(mineralScored);
      var trick = mineralWrapper.offsetWidth;
      mineralScored.style.top = '300px';
      mineralScored.style.opacity = '0';
      setTimeout(function(){
        mineralWrapper.removeChild(mineralScored);
      }, 3000);
      // Audio Mining
      var audio = new Audio('assets/sounds/scvRepair/'+Math.floor((Math.random() * 5))+'.wav');
      audio.volume = 0.3;
      audio.play();
      hideButtons();
      achievements();
    }, scvMineralMiningSpeed);
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};

// Add a SCV Mining Vespene
scvOnVespene.onclick = function(){
  if ( mineralScore >= scvOnVespenePrice){
    // Change Score
    mineralScore -= scvOnVespenePrice;
    mineralDisplay.innerHTML = mineralScore;
    // Change Price
    scvOnVespenePrice = Math.floor(scvOnVespenePrice * scvOnVespenePriceAugmentation);
    scvOnVespenePriceDisplay.innerHTML = scvOnVespenePrice;
    // Create New SCV
    var newScv = document.createElement('img');
    newScv.classList.add('scv');
    newScv.src = 'assets/img/scv/'+Math.floor((Math.random() * 12))+'.png';
    vespeneWorkers.appendChild(newScv);
    // Count
    scvOnVespeneCount++;
    // Audio SCV Spawning
    scvSpawningSound.play();
    // Add autoclick
    setInterval(function(){
      vespeneScore += scvVespeneMiningPower;
      vespeneDisplay.innerHTML = vespeneScore;
      // Scored +X
      var vespeneScored = document.createElement('span');
      vespeneScored.classList.add('vespene-scored');
      vespeneScored.innerHTML = "+"+scvVespeneMiningPower;
      vespeneScored.style.color = 'pink';
      vespeneWrapper.appendChild(vespeneScored);
      var trick = vespeneWrapper.offsetWidth;
      vespeneScored.style.top = '300px';
      vespeneScored.style.opacity = '0';
      setTimeout(function(){
        vespeneWrapper.removeChild(vespeneScored);
      }, 3000);
      // Audio
      vespeneSound.play();
      hideButtons();
      achievements();
    }, scvVespeneMiningSpeed);
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};

// Add a temporary Mule Mining Minerals
muleOnMineral.onclick = function(){
  if (mineralScore >= muleOnMineral_MineralPrice && vespeneScore >= muleOnMineral_VespenePrice){
    // Change Score
    mineralScore -= muleOnMineral_MineralPrice;
    vespeneScore -= muleOnMineral_VespenePrice;
    mineralDisplay.innerHTML = mineralScore;
    vespeneDisplay.innerHTML = vespeneScore;
    // Create New Mule
    var newMule = document.createElement('img');
    newMule.class = 'mule';
    newMule.src = 'assets/img/mule/'+Math.floor((Math.random() * 25))+'.png';
    mineralWorkers.appendChild(newMule);
    // Count
    muleOnMineralCount++;
    // Audio Mule Spawning
    muleSpawningSound.play();
    // Add autoclick
    var mining = setInterval(function(){
      mineralScore += muleMineralMiningPower;
      mineralDisplay.innerHTML = mineralScore;
      // Scored +X
      var mineralScored = document.createElement('span');
      mineralScored.classList.add('mineral-scored');
      mineralScored.innerHTML = "+"+muleMineralMiningPower;
      mineralScored.style.color = 'pink';
      mineralWrapper.appendChild(mineralScored);
      var trick = mineralWrapper.offsetWidth;
      mineralScored.style.top = '300px';
      mineralScored.style.opacity = '0';
      setTimeout(function(){
        mineralWrapper.removeChild(mineralScored);
      }, 3000);
      // Audio Mining
      var audio = new Audio('assets/sounds/scvRepair/'+Math.floor((Math.random() * 5))+'.wav');
      audio.volume = 0.3;
      audio.play();
      hideButtons();
      achievements();
    }, muleMineralMiningSpeed);
    // Remove Mule
    setTimeout(function(){
      clearInterval(mining);
      mineralWorkers.removeChild(newMule);
      // Count
      muleOnMineralCount--;
    }, muleMineralDuration);
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};

// Add a temporary Mule Mining Vespene
muleOnVespene.onclick = function(){
  if (mineralScore >= muleOnVespene_MineralPrice && vespeneScore >= muleOnVespene_VespenePrice){
    // Change Score
    mineralScore -= muleOnVespene_MineralPrice;
    vespeneScore -= muleOnVespene_VespenePrice;
    mineralDisplay.innerHTML = mineralScore;
    vespeneDisplay.innerHTML = vespeneScore;
    // Create New Mule
    var newMule = document.createElement('img');
    newMule.class = 'mule';
    newMule.src = 'assets/img/mule/'+Math.floor((Math.random() * 25))+'.png';
    vespeneWorkers.appendChild(newMule);
    // Count
    muleOnVespeneCount++;
    // Audio Mule Spawning
    muleSpawningSound.play();
    // Add autoclick
    var mining = setInterval(function(){
      vespeneScore += muleVespeneMiningPower;
      vespeneDisplay.innerHTML = vespeneScore;
      // Scored +X
      var vespeneScored = document.createElement('span');
      vespeneScored.classList.add('vespene-scored');
      vespeneScored.innerHTML = "+"+muleVespeneMiningPower;
      vespeneScored.style.color = 'pink';
      vespeneWrapper.appendChild(vespeneScored);
      var trick = vespeneWrapper.offsetWidth;
      vespeneScored.style.top = '300px';
      vespeneScored.style.opacity = '0';
      setTimeout(function(){
        vespeneWrapper.removeChild(vespeneScored);
      }, 3000);
      // Audio
      vespeneSound.play();
      hideButtons();
      achievements();
    }, muleVespeneMiningSpeed);
    // Remove Mule
    setTimeout(function(){
      clearInterval(mining);
      vespeneWorkers.removeChild(newMule);
      // Count
      muleOnVespeneCount--;
    }, muleVespeneDuration);
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};

// Upgrade Mining Power and Speed for SCV Mining Minerals
scvMineralUpgrade.onclick = function(){
  if ( mineralScore >= scvMineralUpgrade_MineralPrice && vespeneScore >= scvMineralUpgrade_VespenePrice){
    // Change Score
    mineralScore -= scvMineralUpgrade_MineralPrice;
    vespeneScore -= scvMineralUpgrade_VespenePrice;
    mineralDisplay.innerHTML = mineralScore;
    vespeneDisplay.innerHTML = vespeneScore;
    // Change Prices
    scvMineralUpgrade_MineralPrice = Math.floor(scvMineralUpgrade_MineralPrice * scvMineralUpgrade_MineralPriceAugmentation);
    scvMineralUpgrade_VespenePrice = Math.floor(scvMineralUpgrade_VespenePrice * scvMineralUpgrade_VespenePriceAugmentation);
    scvMineralUpgrade_MineralPriceDisplay.innerHTML = scvMineralUpgrade_MineralPrice;
    scvMineralUpgrade_VespenePriceDisplay.innerHTML = scvMineralUpgrade_VespenePrice;
    // Change Mining Power
    scvMineralMiningPower = Math.floor(scvMineralMiningPower * scvMineralMiningPowerAugmentation);
    // Change Mining Speed
    scvMineralMiningSpeed = Math.floor(scvMineralMiningSpeed * scvMineralMiningSpeedAugmentation);
    // Change Price Augmentation Ratio
    scvOnMineralPriceAugmentation += 0.2;
    // Count
    scvMineralUpgradeCount++;
    upgradeSound.play();
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};

// Upgrade Mining Power and Speed for SCV Mining Vespene Gas
scvVespeneUpgrade.onclick = function(){
  if ( mineralScore >= scvVespeneUpgrade_MineralPrice && vespeneScore >= scvVespeneUpgrade_VespenePrice){
    // Change Score
    mineralScore -= scvVespeneUpgrade_MineralPrice;
    vespeneScore -= scvVespeneUpgrade_VespenePrice;
    mineralDisplay.innerHTML = mineralScore;
    vespeneDisplay.innerHTML = vespeneScore;
    // Change Prices
    scvVespeneUpgrade_MineralPrice = Math.floor(scvVespeneUpgrade_MineralPrice * scvVespeneUpgrade_MineralPriceAugmentation);
    scvVespeneUpgrade_VespenePrice = Math.floor(scvVespeneUpgrade_VespenePrice * scvVespeneUpgrade_VespenePriceAugmentation);
    scvVespeneUpgrade_MineralPriceDisplay.innerHTML = scvVespeneUpgrade_MineralPrice;
    scvVespeneUpgrade_VespenePriceDisplay.innerHTML = scvVespeneUpgrade_VespenePrice;
    // Change Mining Power
    scvVespeneMiningPower = Math.floor(scvVespeneMiningPower * scvVespeneMiningPowerAugmentation);
    // Change Mining Speed
    scvVespeneMiningSpeed = Math.floor(scvVespeneMiningSpeed * scvVespeneMiningSpeedAugmentation);
    // Change Price Augmentation Ratio
    scvOnVespenePriceAugmentation += 0.1;
    // Count
    scvVespeneUpgradeCount++;
    upgradeSound.play();
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};

// Upgrade Mining Power and Speed for Mule Mining Minerals
muleMineralUpgrade.onclick = function(){
  if ( mineralScore >= muleMineralUpgrade_MineralPrice && vespeneScore >= muleMineralUpgrade_VespenePrice){
    // Change Score
    mineralScore -= muleMineralUpgrade_MineralPrice;
    vespeneScore -= muleMineralUpgrade_VespenePrice;
    mineralDisplay.innerHTML = mineralScore;
    vespeneDisplay.innerHTML = vespeneScore;
    // Change Upgrade Prices
    muleMineralUpgrade_MineralPrice = Math.floor(muleMineralUpgrade_MineralPrice * muleMineralUpgrade_MineralPriceAugmentation);
    muleMineralUpgrade_VespenePrice = Math.floor(muleMineralUpgrade_VespenePrice * muleMineralUpgrade_VespenePriceAugmentation);
    muleMineralUpgrade_MineralPriceDisplay.innerHTML = muleMineralUpgrade_MineralPrice;
    muleMineralUpgrade_VespenePriceDisplay.innerHTML = muleMineralUpgrade_VespenePrice;
    // Change Mining Power
    muleMineralMiningPower = Math.floor(muleMineralMiningPower * muleMineralMiningPowerAugmentation);
    // Change Mining Speed
    muleMineralMiningSpeed = Math.floor(muleMineralMiningSpeed * muleMineralMiningSpeedAugmentation);
    // Change Mule Price
    muleOnMineral_MineralPrice = Math.floor(muleOnMineral_MineralPrice * muleOnMineralPriceAugmentation);
    muleOnMineral_VespenePrice = Math.floor(muleOnMineral_VespenePrice * muleOnMineralPriceAugmentation);
    muleOnMineral_MineralPriceDisplay.innerHTML = muleOnMineral_MineralPrice;
    muleOnMineral_VespenePriceDisplay.innerHTML = muleOnMineral_VespenePrice;
    // Count
    muleMineralUpgradeCount++;
    upgradeSound.play();
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};

// Upgrade Mining Power and Speed for Mule Mining Vespene
muleVespeneUpgrade.onclick = function(){
  if ( mineralScore >= muleVespeneUpgrade_MineralPrice && vespeneScore >= muleVespeneUpgrade_VespenePrice){
    // Change Score
    mineralScore -= muleVespeneUpgrade_MineralPrice;
    vespeneScore -= muleVespeneUpgrade_VespenePrice;
    mineralDisplay.innerHTML = mineralScore;
    vespeneDisplay.innerHTML = vespeneScore;
    // Change Upgrade Prices
    muleVespeneUpgrade_MineralPrice = Math.floor(muleVespeneUpgrade_MineralPrice * muleVespeneUpgrade_MineralPriceAugmentation);
    muleVespeneUpgrade_VespenePrice = Math.floor(muleVespeneUpgrade_VespenePrice * muleVespeneUpgrade_VespenePriceAugmentation);
    muleVespeneUpgrade_MineralPriceDisplay.innerHTML = muleVespeneUpgrade_MineralPrice;
    muleVespeneUpgrade_VespenePriceDisplay.innerHTML = muleVespeneUpgrade_VespenePrice;
    // Change Mining Power
    muleVespeneMiningPower = Math.floor(muleVespeneMiningPower * muleVespeneMiningPowerAugmentation);
    // Change Mining Speed
    muleVespeneMiningSpeed = Math.floor(muleVespeneMiningSpeed * muleVespeneMiningSpeedAugmentation);
    // Change Mule Price
    muleOnVespene_MineralPrice = Math.floor(muleOnVespene_MineralPrice * muleOnVespenePriceAugmentation);
    muleOnVespene_VespenePrice = Math.floor(muleOnVespene_VespenePrice * muleOnVespenePriceAugmentation);
    muleOnVespene_MineralPriceDisplay.innerHTML = muleOnVespene_MineralPrice;
    muleOnVespene_VespenePriceDisplay.innerHTML = muleOnVespene_VespenePrice;
    // Count
    muleVespeneUpgradeCount++;
    upgradeSound.play();
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};

// Upgrade Commander Mining Power !
commanderMiningUpgrade.onclick = function(){
  if ( mineralScore >= commanderMiningUpgrade_MineralPrice && vespeneScore >= commanderMiningUpgrade_VespenePrice){
    // Change Score
    mineralScore -= commanderMiningUpgrade_MineralPrice;
    vespeneScore -= commanderMiningUpgrade_VespenePrice;
    mineralDisplay.innerHTML = mineralScore;
    vespeneDisplay.innerHTML = vespeneScore;
    // Change Price
    commanderMiningUpgrade_MineralPrice = Math.floor(commanderMiningUpgrade_MineralPrice * commanderMiningUpgrade_MineralPriceAugmentation);
    commanderMiningUpgrade_VespenePrice = Math.floor(commanderMiningUpgrade_VespenePrice * commanderMiningUpgrade_VespenePriceAugmentation);
    commanderMiningUpgrade_MineralPriceDisplay.innerHTML = commanderMiningUpgrade_MineralPrice;
    commanderMiningUpgrade_VespenePriceDisplay.innerHTML = commanderMiningUpgrade_VespenePrice;
    // Change Mining Power
    commanderMiningPower = Math.floor(commanderMiningPower * commanderMiningPowerAugmentation);
    // commanderMiningPowerAugmentation = commanderMiningPowerAugmentation * 0.9;

    // Count
    commanderMiningUpgradeCount++;
    researchSound.play();
  } else {
    disabledSound.play();
  }
  hideButtons();
  achievements();
};
