import { HtmldecoderPipe } from './htmldecoder.pipe';

describe('HtmldecoderPipe', () => {
  it('create an instance', () => {
    const pipe = new HtmldecoderPipe();
    expect(pipe).toBeTruthy();
  });
});
