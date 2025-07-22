package io.c2dev.samimathsclub;

import android.app.Activity;
import android.graphics.Color;
import android.view.View;
import android.widget.FrameLayout;

import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class StatusBarUtil {
  /**
   * Adds a colored overlay behind the status bar to ensure system icons are visible.
   * This reverts changes from Android 15 edge-to-edge, but can be used with transparent color
   * https://developer.android.com/develop/ui/views/layout/edge-to-edge
   *
   * @param activity The activity to which the overlay should be added.
   * @param colorString The overlay color as a string (e.g., "#8003a9f4" for 50% transparent #03a9f4).
   */
  public static void addStatusBarOverlay(Activity activity, String colorString) {
    FrameLayout rootView = activity.findViewById(android.R.id.content);

    // Create the overlay view
    View statusBarOverlay = new View(activity);
    statusBarOverlay.setBackgroundColor(Color.parseColor(colorString));

    // Add the overlay to the root view
    rootView.addView(statusBarOverlay, new FrameLayout.LayoutParams(
      FrameLayout.LayoutParams.MATCH_PARENT, 0 // height will be set below
    ));

    // Set the overlay height to match the status bar
    ViewCompat.setOnApplyWindowInsetsListener(rootView, (v, insets) -> {
      int statusBarHeight = 0;
      if (insets != null) {
        statusBarHeight = insets.getInsets(WindowInsetsCompat.Type.statusBars()).top;
      }
      FrameLayout.LayoutParams params = (FrameLayout.LayoutParams) statusBarOverlay.getLayoutParams();
      params.height = statusBarHeight;
      statusBarOverlay.setLayoutParams(params);
      return insets;
    });
  }
}
