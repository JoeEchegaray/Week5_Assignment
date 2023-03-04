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

        while (menuSelection !== 'Done') { //need to fix menu to represent artists as the root menu then add edit artist menu to add songs!!!!!!
            menuSelection = prompt('Please Select an Option from the following:\nAdd Song\nSelect Artist\nDelete Song\nDisplay Songs\nDone');
            if(menuSelection === 'Add Song') {
                let song = prompt('Enter Song Name');
                let artist = prompt('Enter Artist Name')
                this.songs.push(new Songs(song, artist));
                console.log(this.songs);
            }
            else if(menuSelection === 'Delete Song') {
                let toDelete = prompt('Which song would you like to delete?')
                const deleteIndex = this.songs.findIndex(songs => songs.song === toDelete);
                this.songs.splice(deleteIndex, 1);
            }
            else if(menuSelection === 'Display Songs') {
                let songListString = '';
                for (let i = 0; i < this.songs.length; i++){
                    songListString += this.songs[i] + '\n'
                }
                alert(songListString);
            }
            else {
                alert('Not a Valid Option, Please Try Again.');
            }
        }
        alert('Thank You! Have a nice day.');
    }
}

let menu = new Menu();
menu.start();