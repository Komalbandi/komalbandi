import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    public inspirationalMessages: any = [
        {
            'Quote': 'Nothing is impossible, the word itself says I\'m possible!',
            'Author': 'Audrey Hepburn'
        },
        {
            'Quote': 'Happiness is not something you postpone for the future; it is something you design for the present.',
            'Author': 'Jim Rohan'
        },
        {
            'Quote': 'It is during our darkest moment that we must focus to see the light',
            'Author': 'Aristotle'
        }];

    public currentQuote: string = '';
    public currentAuthor: string = '';

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.changeMessage();
            this.ngOnInit();
        }, 10000);
    }
    public changeMessage() {
        let index: any = this.getRandomInt(this.inspirationalMessages.length);
        this.currentQuote = this.inspirationalMessages[index].Quote;
        this.currentAuthor = this.inspirationalMessages[index].Author;
    }

    public getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }

}
