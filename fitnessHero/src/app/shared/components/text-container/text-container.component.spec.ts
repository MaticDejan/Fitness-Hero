import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextContainerComponent } from './text-container.component';

describe('TextContainerComponent', () => {
  let component: TextContainerComponent;
  let fixture: ComponentFixture<TextContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextContainerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the text correctly', () => {
    const text = 'Test Text';
    component.text = text;
    fixture.detectChanges();

    const textElement = fixture.nativeElement.querySelector('.text-base');
    expect(textElement.textContent).toContain(text);
  });

  it('should have the correct background color', () => {
    const containerColor = 'red';
    component.containerColor = containerColor;
    fixture.detectChanges();

    const containerElement = fixture.nativeElement.querySelector('.container');
    expect(containerElement.style.getPropertyValue('--color')).toBe(containerColor);
  });
});
