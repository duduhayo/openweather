import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWeatherCmpComponent } from './open-weather-cmp.component';
import { OpenWeatherService } from './open-weather-service.service';

describe('OpenWeatherCmpComponent', () => {
  let component: OpenWeatherCmpComponent;
  let fixture: ComponentFixture<OpenWeatherCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenWeatherCmpComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWeatherCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
