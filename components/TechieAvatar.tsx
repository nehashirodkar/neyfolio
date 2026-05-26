/**
 * Animated character avatar — generated via DiceBear's "lorelei" style.
 * Forces glasses on for the techie look, uses a cyan→violet→fuchsia gradient
 * background that matches the rest of the site, and gently bobs.
 *
 * To regenerate the character (different hair / face), change the `seed`
 * parameter in the URL. To remove the gradient background, drop the
 * backgroundType + backgroundColor params.
 *
 * DiceBear playground: https://www.dicebear.com/playground/
 */

const AVATAR_URL =
  "https://api.dicebear.com/9.x/lorelei/svg" +
  "?seed=Neha" +
  "&glassesProbability=100" +
  "&backgroundColor=1e293b"; // slate-800 — deep, matches the space background

export default function TechieAvatar() {
  return (
    <div className="w-full h-full overflow-hidden rounded-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={AVATAR_URL}
        alt=""
        aria-hidden
        className="w-full h-full object-cover av-bobble"
      />
    </div>
  );
}
