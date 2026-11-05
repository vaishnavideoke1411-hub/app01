import { Component, OnInit, signal } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {

  protected flag = signal(false)
  protected readonly title = signal('I Love Angular...!');

  protected isFormValid = signal(false)

  protected heading = signal('I Love Angular 22')
  onclicks(){
    this.flag.set(true)

    if (this.heading() === 'I l') {
      
    }
  } 

  onClick() {
    if (this.title() === 'I Love Angular...!') {
      this.title.set('I Love Mean Stack...!');
    } else {
      this.title.set('I Love Angular...!');
    }
  }

  protected skills = ['HTML-5' , 'JavaScript' , 'TypeScript' , 'Angular 14' , 'Angular 22']

  

  protected str = signal<string>('Angular 22 is a TypeScript-based frontend framework developed by Google. It is used to build dynamic, scalable and maintainable single-page applications. It provides features like components, data binding, directives, services, dependency injection and routing, which help developers build applications efficiently.')

  ngOnInit(): void {
    setTimeout(() => {
      this.isFormValid.set(true)
    },3000)
  }

  removeS(id:number){
    let getIndex = this.skills.findIndex((_, index) => index === id);
    this.skills.splice(getIndex, 1)
  }
}
