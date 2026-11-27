/**
 * Starting and resting the page's loops, so they also move on an iPhone in Low Power Mode.
 *
 * In Low Power Mode Safari refuses to start any video by itself: play() fails with
 * NotAllowedError, muted or not, and the still stays. Safari will still run the same MP4 inside
 * <img>, the way it runs a GIF (Apple, "Delivering Video Content for Safari": use MP4 video
 * instead of animated GIFs). So when a loop is refused, that picture takes the video's place over
 * the still and fires "loopimage" on the video. A browser that cannot show an MP4 as a picture
 * keeps the still, as before. The picture copies the video's class, and `.loop-img` in global.css
 * lays it over the still the way the videos are laid.
 */
const pictures = new Map<HTMLVideoElement, HTMLImageElement>();
const refused = new WeakSet<HTMLVideoElement>();

export function playLoop(film: HTMLVideoElement): void {
  const picture = pictures.get(film);
  if (picture) {
    picture.hidden = false;
    return;
  }
  film.play().catch((error: unknown) => {
    if (error instanceof DOMException && error.name === 'NotAllowedError') standIn(film);
  });
}

export function pauseLoop(film: HTMLVideoElement): void {
  film.pause();
  const picture = pictures.get(film);
  if (picture) picture.hidden = true;
}

function standIn(film: HTMLVideoElement): void {
  const src = film.currentSrc || film.src;
  if (!src || pictures.has(film) || refused.has(film)) return;
  const picture = document.createElement('img');
  picture.className = `${film.className} loop-img`.trim();
  picture.alt = '';
  picture.decoding = 'async';
  picture.setAttribute('aria-hidden', 'true');
  picture.addEventListener(
    'load',
    () => {
      picture.classList.add('is-in');
      film.dispatchEvent(new Event('loopimage'));
    },
    { once: true },
  );
  picture.addEventListener(
    'error',
    () => {
      picture.remove();
      pictures.delete(film);
      refused.add(film);
    },
    { once: true },
  );
  picture.src = src;
  film.after(picture);
  pictures.set(film, picture);
}

// Safari stops such a picture when the phone switches to another app and does not start it
// again; a fresh copy of it moves again.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;
  for (const [film, picture] of pictures) {
    const fresh = picture.cloneNode() as HTMLImageElement;
    picture.replaceWith(fresh);
    pictures.set(film, fresh);
  }
});
