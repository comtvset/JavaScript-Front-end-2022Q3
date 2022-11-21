class Player {
  constructor(classA) {

    this.classA = classA;

    const container = document.createElement('div');
    classA.appendChild(container);
    container.className = 'container';

    const questionPictures = document.createElement('img');
    container.appendChild(questionPictures);
    questionPictures.className = 'question-pictures';
    questionPictures.setAttribute(
      'src',
      'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg'
    );

    const questionInfoContainer = document.createElement('div');
    container.appendChild(questionInfoContainer);
    questionInfoContainer.className = 'question-info-container';

    const questionTitle = document.createElement('div');
    questionTitle.textContent = 'Crow';
    questionInfoContainer.appendChild(questionTitle);
    questionTitle.className = 'lng-question-title';

    const species = document.createElement('div');
    species.textContent = 'Corvus corax';
    questionInfoContainer.appendChild(species);
    species.className = 'species';

    // -- player --
    const player = document.createElement('button');
    questionInfoContainer.appendChild(player);
    player.className = 'player';

    const play = document.createElement('button');
    player.appendChild(play);
    play.className = 'play';

    const playIMG = document.createElement('img');
    play.appendChild(playIMG);
    playIMG.className = 'play-img';
    playIMG.setAttribute('src', '/assets/icon/play.png');
    playIMG.setAttribute('alt', 'play');

    const questionPlayer = document.createElement('audio');
    player.appendChild(questionPlayer);
    questionPlayer.className = 'audio';
    questionPlayer.setAttribute(
      'src',
      'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
    );

    const progressAll = document.createElement('div');
    player.appendChild(progressAll);
    progressAll.className = 'progress-all';

    const progressContainer = document.createElement('div');
    progressAll.appendChild(progressContainer);
    progressContainer.className = 'progress-container';

    const progress = document.createElement('div');
    progressContainer.appendChild(progress);
    progress.className = 'progress';

    const time = document.createElement('div');
    progressAll.appendChild(time);
    time.className = 'time';

    const timeProgress = document.createElement('div');
    time.appendChild(timeProgress);
    timeProgress.textContent = '00:00';
    timeProgress.className = 'time-progress';

    const timeFull = document.createElement('div');
    time.appendChild(timeFull);
    timeFull.textContent = '01:20';
    timeFull.className = 'time-full';

    const volumeContainer = document.createElement('div');
    questionInfoContainer.appendChild(volumeContainer);
    volumeContainer.className = 'volume-container';

    const replay = document.createElement('button');
    player.appendChild(replay);
    replay.className = 'replay';

    const replayIMG = document.createElement('img');
    replay.appendChild(replayIMG);
    replayIMG.className = 'replay-img';
    replayIMG.setAttribute('src', '/assets/icon/replay.png');
    replayIMG.setAttribute('alt', 'replay');

    const volume = document.createElement('input');
    volumeContainer.appendChild(volume);
    volume.className = 'volume';
    // volume.setAttribute('value', '#ff0000');
    volume.setAttribute('type', 'range');
    volume.setAttribute('min', '0');
    volume.setAttribute('max', '100');

    const description = document.createElement('p');
    description.textContent = 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.';
    classA.appendChild(description);
    description.className = 'lng-description';
  }
}
