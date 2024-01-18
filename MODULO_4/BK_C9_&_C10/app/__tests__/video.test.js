import { video } from "../src/video.js";

describe("video test", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should not play video", () => {
    const spyVideo = jest.spyOn(video, "play").mockReturnValue(false);
    const isPlaying = video.play();

    expect(spyVideo).toHaveBeenCalled();
    expect(isPlaying).toBe(false);
  });

  it("should play video", () => {
    const isPlaying = video.play();

    expect(isPlaying).toBe(true);
  });
});
