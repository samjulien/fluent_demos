import {Component} from 'angular2/core'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Router, RouteConfig} from 'angular2/router'

import {TypeaheadDemo} from './demos/typeahead/typeahead.ts'
import {TodoApp} from './demos/ngrx/todoapp.ts'

@Component({
  selector: 'app',
  template: `
    <div>
      <h2>Reactive Angular2</h2>
      <div>
        <a [routerLink]="['TypeaheadDemo']">typeahead</a>
        <a [routerLink]="['TodoApp']">todos</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {name: 'TypeaheadDemo', component: TypeaheadDemo, path: '/typeahead', useAsDefault: true},
  {name: 'TodoApp', component: TodoApp, path: '/todos'},
])
export class App {}
