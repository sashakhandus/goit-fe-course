document.addEventListener('DOMContentLoaded', () => {

    const btnStart = document.querySelector('.js-start');
    const btnPause = document.querySelector('.js-pause');
    const btnStop = document.querySelector('.js-reset'); 
    const btnLap = document.querySelector('.js-lap'); 
    const timeFace = document.querySelector('.js-time');
    const ul = document.querySelector('.js-laps');
    let laps = [];

    class Timer {
        constructor ({onTick, addLap}) {
            this.startTime = null;
            this.deltaTime = null;
            this.pauseTime = null;
            this.timerId = null;
            this.lapTime = null;
            this.isActive = false;
            this.isPause = false;
            this.onTick = onTick;
            this.addLap = addLap;
        }

        start () {
            if (!this.isActive) {
                this.isPause = false;
                this.isActive = true;
                this.startTime = Date.now();

                this.timerId = setInterval(() => {
                    const currentTime = Date.now();
                    
                    this.deltaTime = currentTime - this.startTime + this.pauseTime;

                    const time = new Date(this.deltaTime);
                    const min = time.getMinutes();
                    const sec = time.getSeconds();
                    const ms = Number.parseInt(time.getMilliseconds() / 100);

                    this.onTick({min, sec, ms});
                }, 200);
            } 
        }

        pause () {
            console.log("Pause");
            this.isPause = true;
            this.pauseTime = this.deltaTime;

            const time = new Date(this.pauseTime);
            const min = time.getMinutes();
            const sec = time.getSeconds();
            const ms = Number.parseInt(time.getMilliseconds() / 100);

            this.lapTime = ({ min, sec, ms }) ;

            this.isActive = false;
            clearInterval(this.timerId);
            this.startTime = null;
            this.deltaTime = 0;
            this.onTick({min, sec, ms});
             
            btnStart.textContent = 'Contine';       
        }

        stop () {
            this.isPause = false;
            this.isActive = false;
            clearInterval(this.timerId);
            this.timerId = null;
            this.startTime = null;
            this.deltaTime = 0;
            this.onTick({ min: 0, sec: 0, ms: 0 });

            btnStart.textContent = 'Start';

            for (let i = 0; i < laps.length; i = i + 1) {
                clearLaps();
            }

            laps = [];
        }

        lap () {
            if (this.isPause) {
                const min = this.lapTime.min;
                const sec = this.lapTime.sec;
                const ms = this.lapTime.ms;
                console.log(`${min}:${sec}.${ms}`);
                this.addLap({ min, sec, ms });
                this.isPause = false;
            }
        }

        }

    const timer = new Timer({
        onTick: updateClockface,
        addLap: addLiToUl,
    });

    btnStart.addEventListener('click', timer.start.bind(timer));
    btnPause.addEventListener('click', timer.pause.bind(timer));
    btnStop.addEventListener('click', timer.stop.bind(timer));
    btnLap.addEventListener('click', timer.lap.bind(timer));

    updateClockface({ min: 0, sec: 0, ms: 0 });

    function updateClockface({ min, sec, ms }) {
        if (min < 10) {
            min = '0' + min;
        };
        if (sec < 10) {
            sec = '0' + sec;
        };
        console.log(`${min}:${sec}.${ms}`);
    timeFace.textContent = `${min}:${sec}.${ms}`;
    }

    function addLiToUl({ min, sec, ms }) {
        laps.push(this.lapTime);
        const li = document.createElement('li');
        ul.append(li); 
        if (min < 10) {
            min = '0' + min;
        };
        if (sec < 10) {
            sec = '0' + sec;
        };
        li.textContent = `${min}:${sec}.${ms}`;
    }

    function clearLaps() {
        const li = document.querySelector('li');
        ul.removeChild(li);
        }
});

    
    
