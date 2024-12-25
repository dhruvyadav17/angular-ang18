import { Component } from '@angular/core';
//import { NewcomponentComponent } from './newcomponent/newcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  quantity=1;cost=5
  person={firstName:'John',lastName:'Doe'}
  value ='input'
  itemImageUrl=''
  title="Angular Property Binding Example"
  
  //Example 1
  isDisabled= true;

  evilText = '<script>alert("You are hacked")</script> ';
  cssStringVar: string= 'red size20';

  getClass() {
    return 'red';
  }
  hasError() {
    return true;
  }
}
