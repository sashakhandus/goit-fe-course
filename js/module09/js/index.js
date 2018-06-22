document.addEventListener('DOMContentLoaded', () => {

    const btnStart = document.querySelector('.js-start');
    const btnStop = document.querySelector('.js-reset'); 
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

        onclick () {
            if (!this.isActive) {
                this.isActive = true;
                this.isPause = false;
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

                btnStart.textContent = 'Pause';
                btnStop.textContent = 'Reset';

            } else {
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
                btnStop.textContent = 'Lap';
            }
        }

        stop () {
            if (!this.isPause) {
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
            } else {
                this.addLap(this.lapTime); 
            }   
        }

    }

    const timer = new Timer({
        onTick: updateClockface,
        addLap: addLiToUl,
    });

    btnStart.addEventListener('click', timer.onclick.bind(timer));  
    btnStop.addEventListener('click', timer.stop.bind(timer));

    updateClockface({ min: 0, sec: 0, ms: 0 });

    function updateClockface({ min, sec, ms }) {
        if (min < 10) {
            min = '0' + min;
        };
        if (sec < 10) {
            sec = '0' + sec;
        };
    timeFace.textContent = `${min}:${sec}.${ms}`;
    }

    function addLiToUl(addTime) {
        if (!laps.includes(addTime)) {
            laps.push(this.lapTime);
            const li = document.createElement('li');
            ul.append(li);
            min = this.lapTime.min;
            sec = this.lapTime.sec;
            ms = this.lapTime.ms;
            if (min < 10) {
                min = '0' + min;
            };
            if (sec < 10) {
                sec = '0' + sec;
            };
            li.textContent = `${min}:${sec}.${ms}`;
            }   
    }

    function clearLaps() {
        const li = document.querySelector('li');
        ul.removeChild(li);
        }
});

    
    
