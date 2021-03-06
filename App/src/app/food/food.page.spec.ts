import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodPage } from './food.page';

describe('FoodPage', () => {
  let component: FoodPage;
  let fixture: ComponentFixture<FoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
