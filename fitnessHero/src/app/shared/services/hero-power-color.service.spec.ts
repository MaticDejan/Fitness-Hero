import { HeroPowerColorService } from './hero-power-color.service';

describe('HeroPowerColorService', () => {
  let service: HeroPowerColorService;

  beforeEach(() => {
    service = new HeroPowerColorService();
  });

  it('should return the correct text color based on power', () => {
    expect(service.colorPicker('bodybuilding')).toBe('text-c5');
    expect(service.colorPicker('healthy life')).toBe('text-c4');
    expect(service.colorPicker('bulking')).toBe('text-c6');
    expect(service.colorPicker('unknown power')).toBe('text-c3');
    expect(service.colorPicker(undefined)).toBe('text-c3');
  });

  it('should return the correct background color based on power', () => {
    expect(service.backgroundColorPicker('bodybuilding')).toBe('bg-c5/[.80]');
    expect(service.backgroundColorPicker('healthy life')).toBe('bg-c4/[.80]');
    expect(service.backgroundColorPicker('bulking')).toBe('bg-c6/[.80]');
    expect(service.backgroundColorPicker('unknown power')).toBe('bg-c3/[.80]');
    expect(service.backgroundColorPicker(undefined)).toBe('bg-c3/[.80]');
  });
});
