import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpProvider, Post } from '../../providers/wp/wp';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams, public wpProvider: WpProvider) {
    this.post = navParams.get('post');
  }
}
