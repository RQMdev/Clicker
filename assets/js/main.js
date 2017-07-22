
var body = document.getElementsByTagName('body')[0];
var mineralWrapper = document.getElementById('mineral-wrapper');
var vespeneWrapper = document.getElementById('vespene-wrapper');
// Clickers
var mineral = document.getElementsByClassName('mineral');
var vespene = document.getElementsByClassName('vespene');
// Score Displays
var mineralDisplay = document.getElementById('mineral-display');
var vespeneDisplay = document.getElementById('vespene-display');
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


// Score
var mineralScore = 0;
var vespeneScore = 0;
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
var commanderMiningUpgrade_MineralPrice = 100;
var commanderMiningUpgrade_VespenePrice = 100;

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
};




// Load Starting Values
body.onload = function(){
  // Score Display
  mineralDisplay.innerHTML = mineralScore;
  vespeneDisplay.innerHTML = vespeneScore;

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

    hideButtons();
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
    hideButtons();
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
      hideButtons();
    }, scvMineralMiningSpeed);
  }
  hideButtons();
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
      hideButtons();
    }, scvVespeneMiningSpeed);
  }
  hideButtons();
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
    // Add autoclick
    var mining = setInterval(function(){
      mineralScore += muleMineralMiningPower;
      mineralDisplay.innerHTML = mineralScore;
    }, muleMineralMiningSpeed);
    // Remove Mule
    setTimeout(function(){
      clearInterval(mining);
      mineralWorkers.removeChild(newMule);
    }, muleMineralDuration);
  }
  hideButtons();
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
    // Add autoclick
    var mining = setInterval(function(){
      vespeneScore += muleVespeneMiningPower;
      vespeneDisplay.innerHTML = vespeneScore;
    }, muleVespeneMiningSpeed);
    // Remove Mule
    setTimeout(function(){
      clearInterval(mining);
      vespeneWorkers.removeChild(newMule);
    }, muleVespeneDuration);
  }
  hideButtons();
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
  }
  hideButtons();
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
  }
  hideButtons();
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
  }
  hideButtons();
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
  }
  hideButtons();
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
  }
  hideButtons();
};
