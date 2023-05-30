import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldsetInputComponent } from './fieldset-input.component';

describe('FieldsetInputComponent', () => {
  let component: FieldsetInputComponent;
  let fixture: ComponentFixture<FieldsetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldsetInputComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the label correctly', () => {
    const label = 'Test Label';
    component.label = label;
    fixture.detectChanges();

    const legendElement = fixture.nativeElement.querySelector('legend');
    expect(legendElement.textContent).toContain(label);
  });

  it('should have the correct CSS classes', () => {
    component.label = 'Test Label';
    fixture.detectChanges();

    const fieldsetElement = fixture.nativeElement.querySelector('fieldset');
    expect(fieldsetElement).toBeTruthy();
    expect(fieldsetElement.classList).toContain('border');
    expect(fieldsetElement.classList).toContain('rounded');
    expect(fieldsetElement.classList).toContain('p-2');
    expect(fieldsetElement.classList).toContain('flex');
    expect(fieldsetElement.classList).toContain('items-center');
    expect(fieldsetElement.classList).toContain('fieldset-input');
    expect(fieldsetElement.classList).toContain('border-c1');
  });
});
