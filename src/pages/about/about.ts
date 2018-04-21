import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
})
export class AboutPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutPage');
    }

    openFacebook() {
        window.open('https://www.facebook.com/bandi.k.krishna');
    }

    openTwitter() {
        window.open('https://twitter.com/komalbandi');
    }

    openLinkedin() {
        window.open('www.linkedin.com/in/komalbandi');
    }

    openGithub() {
        window.open('https://github.com/komalbandi')
    }

}
