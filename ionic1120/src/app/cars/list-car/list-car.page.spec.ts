import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { ListCarPage } from './list-car.page';


describe('Tab2Page', () => {
  let component: ListCarPage;
  let fixture: ComponentFixture<ListCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListCarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
