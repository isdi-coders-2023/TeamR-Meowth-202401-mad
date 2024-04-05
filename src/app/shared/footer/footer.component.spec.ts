import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an address element', () => {
    const address = fixture.debugElement.query(By.css('address'));
    expect(address.nativeElement.textContent).toContain('Copyright');
  });

  it('should render social links', () => {
    const compiled = fixture.debugElement.nativeElement;
    const githubLink = compiled.querySelector(
      'a[href="https://github.com/alce65"]'
    );
    const youtubeLink = compiled.querySelector(
      'a[href="https://www.youtube.com/c/magicthegathering"]'
    );
    const twitchLink = compiled.querySelector(
      'a[href="https://www.twitch.tv/magic"]'
    );
    const facebookLink = compiled.querySelector(
      'a[href="https://www.facebook.com/MagicTheGathering.es/?locale=es_ES"]'
    );
    const twitterLink = compiled.querySelector(
      'a[href="https://twitter.com/wizards_magic?lang=es"]'
    );
    expect(githubLink).toBeTruthy();
    expect(youtubeLink).toBeTruthy();
    expect(twitchLink).toBeTruthy();
    expect(facebookLink).toBeTruthy();
    expect(twitterLink).toBeTruthy();
  });
  it('should render the right icon for every link', () => {
    const icons = fixture.debugElement.queryAll(By.css('.social-icon'));
    expect(icons.length).toBe(5);
    expect(icons[0].nativeElement.src).toContain('github');
    expect(icons[1].nativeElement.src).toContain('youtube');
    expect(icons[2].nativeElement.src).toContain('twitch');
    expect(icons[3].nativeElement.src).toContain('facebook');
    expect(icons[4].nativeElement.src).toContain('twitter');
  });
});
