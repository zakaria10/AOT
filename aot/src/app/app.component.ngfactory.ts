/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './todolist/todolist.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../../src/app/app.component';
const styles_AppComponent:any[] = [import0.styles];
export const RenderType_AppComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_AppComponent,
  data: {}
}
);
export function View_AppComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),10,'html',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),6,'form',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'autofocus',
        ''
      ]
      ,
      [
        'id',
        'new-todo'
      ]
      ,
      [
        'ng-model',
        'newToDoText'
      ]
      ,
      [
        'ng-text-change',
        'addToDo()'
      ]
      ,
      [
        'placeholder',
        'What needs to be done?'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[[
        'id',
        'btn'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.AppComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.toggleHeading()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Add'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(null as any),(null as any));
}
function View_AppComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'my-app',([] as any[]),(null as any),(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent)),
    import1.ɵdid(24576,(null as any),0,import2.AppComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AppComponentNgFactory:import1.ComponentFactory<import2.AppComponent> = import1.ɵccf('my-app',import2.AppComponent,View_AppComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbGF6cmFrL0Rlc2t0b3AvWmFrYXJpYTQvcXVpY2tzdGFydC9zcmMvYXBwL2FwcC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvbGF6cmFrL0Rlc2t0b3AvWmFrYXJpYTQvcXVpY2tzdGFydC9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9sYXpyYWsvRGVza3RvcC9aYWthcmlhNC9xdWlja3N0YXJ0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvbGF6cmFrL0Rlc2t0b3AvWmFrYXJpYTQvcXVpY2tzdGFydC9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMuQXBwQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXHJcbjxodG1sPlxyXG48IS0tPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlSGVhZGluZygpXCI+VG9nZ2xlIEhlYWRpbmc8L2J1dHRvbj5cclxuPGgxICpuZ0lmPVwic2hvd0hlYWRpbmdcIj5IZWxsbyBBbmd1bGFyPC9oMT5cclxuXHJcbjxoMz5MaXN0IG9mIEhlcm9lczwvaDM+XHJcbjxkaXYgKm5nRm9yPVwibGV0IGhlcm8gb2YgaGVyb2VzXCI+e3toZXJvfX08L2Rpdj4gLS0+XHJcbjxmb3JtPlxyXG48aW5wdXQgaWQ9XCJuZXctdG9kb1wiIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiIG5nLXRleHQtY2hhbmdlPVwiYWRkVG9EbygpXCIgbmctbW9kZWw9XCJuZXdUb0RvVGV4dFwiIGF1dG9mb2N1cz5cclxuPGJ1dHRvbiBpZD1cImJ0blwiIChjbGljayk9XCJ0b2dnbGVIZWFkaW5nKClcIj5BZGQ8L2J1dHRvbj5cclxuPC9mb3JtPlxyXG48L2h0bWw+IiwiPG15LWFwcD48L215LWFwcD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQ0E7SUFBTTtJQUs2QztJQUNuRDtJQUFNO0lBQ047TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQXNIO01BQ3RIO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBaUI7UUFBQTtRQUFBO01BQUE7TUFBakI7SUFBQTtJQUEyQztJQUFZO0lBQ2hEOzs7Ozs7SUNWUDtnQkFBQTs7OzsifQ==
