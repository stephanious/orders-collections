import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { HttpClient } from '@angular/common/http';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ServerService,
        HttpClient
      ]
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'online-calls'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('online-calls');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to online-calls!');
  // });

  it('should test service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const serversMock =  [
      {
        name: 'TestServer1',
        capacity: 10,
        id: 1
      }, {
        name: 'TestServer2',
        capacity: 100,
        id: 2
      }, {
        name: 'TestServer3',
        capacity: 1000,
        id: 3
      }
    ];
    const serverService = fixture.debugElement.injector.get(ServerService);
    const spy = spyOn(serverService, 'storeServers')
    .and.returnValue(Promise.resolve(serversMock));
    expect(app.servers).toBe(undefined);
  });
});
