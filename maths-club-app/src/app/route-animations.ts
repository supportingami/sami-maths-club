import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from "@angular/animations";

export const fadeOnChange = trigger("fadeOnChange", [
  transition("* <=> *", [
    animate("0.3s", keyframes([style({ opacity: 0 }), style({ opacity: 1 })])),
  ]),
]);
export const fader = trigger("routeAnimations", [
  transition("* <=> *", [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(":enter", [animate("0.6s", style({ opacity: 1 }))], {
      optional: true,
    }),
  ]),
]);
/*
export const slideInAnimation = trigger("routeAnimations", [
  transition("* => left", slideTo("left")),
  transition("* => right", slideTo("right")),
  transition("right => *", slideTo("left")),
  transition("left => *", slideTo("right")),
]);

function slideTo(direction: "left" | "right") {
  const optional = { optional: true };
  return [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          [direction]: 0,
          width: "100%",
        }),
      ],
      optional
    ),
    query(":enter", [style({ [direction]: "-100%" })]),
    group([
      query(
        ":leave",
        [animate("600ms ease", style({ [direction]: "100%" }))],
        optional
      ),
      query(":enter", [animate("600ms ease", style({ [direction]: "0%" }))]),
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
*/
