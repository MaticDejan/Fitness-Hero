import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties', () => {
    expect(component.hero).toBeUndefined();
    expect(component.powerTextColor).toBeUndefined();
    expect(component.backgroundColor).toBeUndefined();
    expect(component.hovered).toBeFalse();
  });

  it('should toggle hovered state on mouseenter and mouseleave', () => {
    const divElement: HTMLDivElement = fixture.nativeElement.querySelector('div');

    divElement.dispatchEvent(new Event('mouseenter'));
    expect(component.hovered).toBeTrue();

    divElement.dispatchEvent(new Event('mouseleave'));
    expect(component.hovered).toBeFalse();
  });

  it('should render hero name and power', () => {
    const heroName = 'Superman';
    const heroPower = 'Flight';
    component.hero = { name: heroName, power: heroPower };
    fixture.detectChanges();

    const div1: HTMLDivElement = fixture.nativeElement.querySelector('.name');
    const div2: HTMLDivElement = fixture.nativeElement.querySelector('.power');

    expect(div1.innerText).toContain(heroName);
    expect(div2.innerText).toContain(heroPower);
  });

  it('should render hero image if imgUrl is provided', () => {
    const imgUrl = 'https://example.com/image.png';
    component.hero = { imgUrl };
    fixture.detectChanges();

    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toBe(imgUrl);
  });

  it('should not render hero image if imgUrl is not provided', () => {
    component.hero = {};
    fixture.detectChanges();

    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeNull();
  });
});
