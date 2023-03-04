class Songs {
    constructor(name, artist) {
        this.name = name;
        this.artist = artist;
    }
    describe() {
        return `The song name is ${this.name}, Performed by ${this.artist}.`;
    }
}

class Menu {
    constructor() {
        this.songs = [];
    }

    start() {
        let menuSelection = null;

        while (menuSelection !== 'Done') { 
            menuSelection = prompt('Please Select an Option from the following:\nAdd Song\nDelete Song\nDisplay Songs\nDone');
            if(menuSelection === 'Add Song') {
                let song = prompt('Enter Song Name');
                let artist = prompt('Enter Artist Name');
                this.songs.push(new Songs(song, artist));
            }
            else if(menuSelection === 'Delete Song') {
                let toDelete = prompt('Which song would you like to delete?')
                const deleteIndex = this.songs.findIndex(songs => songs.song === toDelete); //finds and sets the variable to the index of the song to be deleted based off of user input
                this.songs.splice(deleteIndex, 1); //removes the found song from the array
            }
            else if(menuSelection === 'Display Songs') {
                let songListString = '';
                for (let i = 0; i < this.songs.length; i++){
                    songListString += this.songs[i].name + ', By ' + this.songs[i].artist + '\n';
                }
                alert(songListString);
            }
            else if (menuSelection === 'Done') {
                alert('Thank You! Have a nice day.');
            } 
            else {
                alert('Not a Valid Option, Please Try Again.');

            }
        }
        alert('Thank You! Program is Complete.');
    }
}

let menu = new Menu();
menu.start();