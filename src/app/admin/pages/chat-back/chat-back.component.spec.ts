import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBackComponent } from './chat-back.component';

describe('ChatBackComponent', () => {
  let component: ChatBackComponent;
  let fixture: ComponentFixture<ChatBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
