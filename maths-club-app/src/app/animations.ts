import {
  trigger,
  transition,
  style,
  query,
  state,
  group,
  animate,
  animateChild,
  stagger,
} from "@angular/animations";

/**
 * Use states 'in' and 'out' to handle fading an element
 * Used to fade in markdown after render complete
 */
export const fadeInOut = ({
  duration = "0.5s",
  delay = "50ms",
  easing = "ease-in-out",
}) =>
  trigger("fadeInOut", [
    state("in", style({ opacity: 1 })),
    state("out", style({ opacity: 0 })),
    transition("out <=> in", [animate(`${duration} ${delay} ${easing}`)]),
  ]);

/**
 * Use states 'left' 'center' 'right', and transition between with slide motion
 * Used for page transitions
 */
export const slideTransition = trigger("slideTransition", [
  transition("right => center", slideTo("left")),
  transition("center => left", slideTo("left")),
  transition("left => center", slideTo("right")),
  transition("center => right", slideTo("right")),
]);

export const fadeChildren = (childSelector: string) =>
  trigger("fadeChildren", [
    transition(":enter", [
      query(
        childSelector,
        [
          style({ opacity: 0, transform: "translateY(50px)" }),
          stagger(30, [
            animate("300ms ease-out", style({ opacity: 1, transform: "none" })),
          ]),
        ],
        { optional: true }
      ),
    ]),
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
    query(":leave", animateChild()),
    query(":enter", animateChild()),
  ];
}
