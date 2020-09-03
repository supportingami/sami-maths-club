package io.c2dev.samimathsclub

import android.util.Log
import android.view.View
import android.view.ViewGroup
import androidx.test.espresso.web.sugar.Web.onWebView
import androidx.test.espresso.web.assertion.WebViewAssertions.webMatches
import androidx.test.espresso.web.model.Atoms.getCurrentUrl
import androidx.test.espresso.web.webdriver.DriverAtoms.*
import androidx.test.espresso.web.webdriver.Locator
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.filters.LargeTest

import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.rule.ActivityTestRule
import org.hamcrest.Description
import org.hamcrest.Matcher
import org.hamcrest.Matchers.allOf
import org.hamcrest.Matchers.containsString
import org.hamcrest.TypeSafeMatcher
import org.hamcrest.core.IsInstanceOf
import org.junit.Rule
import org.junit.Test
import org.junit.Before
import org.junit.runner.RunWith
import tools.fastlane.screengrab.Screengrab

val TAG = "APP_TEST";

@LargeTest
@RunWith(AndroidJUnit4::class)
class ScreenshotTest {

  @get:Rule
  val activitySenario = ActivityScenarioRule(MainActivity::class.java)
  // http://junit.sourceforge.net/javadoc/org/junit/Before.html
  @Before
  fun initialize() {
    onWebView().forceJavascriptEnabled()
  }
  // Add longer timeout to test (when running on CI can be slow to respond)
  @Test(timeout = 60000) fun screenshot(){
    val problemEl = onWebView().withElement(findElement(Locator.CSS_SELECTOR, "mat-card[aria-label=\"apple-teaser\"]"))
    Thread.sleep(1000)
    Screengrab.screenshot("1-Home");
    problemEl.perform(webClick()).check(webMatches(getCurrentUrl(), containsString("/apple-teaser")))
    Thread.sleep(1000)
    Screengrab.screenshot("2-Problem");
    val notesEl = onWebView().withElement(findElement(Locator.CSS_SELECTOR, "button[aria-label=\"facilitator-notes\"]"))
    notesEl.perform(webClick()).check(webMatches(getCurrentUrl(), containsString("/apple-teaser/notes")))
    Thread.sleep(1000)
    Screengrab.screenshot("3-Notes");

  }
//  @Test fun headerDisplayed(){
//    Log.d(TAG,"Start Test 1")
////    val el =  onWebView().withElement(findElement(Locator.TAG_NAME, "h2"))
//    val el =  onWebView().withElement(findElement(Locator.CSS_SELECTOR, "span[class=\"nav-title\""))
//    el.check(webMatches(getText(), containsString("SAMI Maths Club")))
//
//  }
//  @Test fun canLoadProblem(){
//    Log.d(TAG,"Start Test 2")
//    val el =  onWebView().withElement(findElement(Locator.CSS_SELECTOR, "mat-card[aria-label=\"apple-teaser\"]"))
//    Log.d(TAG,el.toString())
//    Screengrab.screenshot("2-Home-Screen");
//    el.perform(webClick()).check(webMatches(getCurrentUrl(), containsString("/apple-teaser")))
//
//  }
//  @Test fun canLoadNotes(){
//    clickProblem("apple-teaser")
//    Thread.sleep(5000)
//    val notesEl = onWebView().withElement(findElement(Locator.CSS_SELECTOR, "button[aria-label=\"facilitator-notes\"]"))
//    notesEl.perform(webClick()).check(webMatches(getCurrentUrl(), containsString("/apple-teaser/notes")))
//  }
//  private fun clickProblem(slug: String){
//    val el =  onWebView().withElement(findElement(Locator.CSS_SELECTOR, "mat-card[aria-label=\"$slug\"]"))
//    el.perform(webClick()).check(webMatches(getCurrentUrl(), containsString("/apple-teaser")))
//  }


  private fun childAtPosition(
    parentMatcher: Matcher<View>, position: Int): Matcher<View> {

    return object : TypeSafeMatcher<View>() {
      override fun describeTo(description: Description) {
        description.appendText("Child at position $position in parent ")
        parentMatcher.describeTo(description)
      }

      public override fun matchesSafely(view: View): Boolean {
        val parent = view.parent
        return parent is ViewGroup && parentMatcher.matches(parent)
          && view == parent.getChildAt(position)
      }
    }
  }
}
