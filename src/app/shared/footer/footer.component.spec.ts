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
    const githubLink = compiled.querySelector('a[href="https://github.com/"]');
    const youtubeLink = compiled.querySelector(
      'a[href="https://youtube.com/"]'
    );
    const twitchLink = compiled.querySelector('a[href="https://twitch.com/"]');
    const facebookLink = compiled.querySelector(
      'a[href="https://facebook.com/"]'
    );
    const twitterLink = compiled.querySelector(
      'a[href="https://twitter.com/"]'
    );
    expect(githubLink).toBeTruthy();
    expect(youtubeLink).toBeTruthy();
    expect(twitchLink).toBeTruthy();
    expect(facebookLink).toBeTruthy();
    expect(twitterLink).toBeTruthy();
  });
});
